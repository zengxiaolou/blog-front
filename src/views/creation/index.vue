<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/8/19-17:21
INTRODUCTION    创作中心
-->

<template>
    <!-- tui-editor 富文本编辑器   -->
    <div class="creation">
        <el-row type="flex" justify="center" class="info">
            <el-col :span="12">
                <el-card  class="upload">
                    <my-bgm v-on:changeCover="changeCover" :covers="cover"></my-bgm>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card class="abstract" >
                    <my-abstract v-on:changeAbstract="changeAbstract" v-on:changeTitle="changeTitle" v-bind="{'title': title, 'abstract': abstract}" ></my-abstract>
                </el-card>
            </el-col>
        </el-row>
        <el-row type="flex" justify="center" class="info">
            <el-col :span="12">
                <el-card >
                    <my-category v-on:changeCategory="changeCategory"></my-category>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card class="select">
                    <my-tags v-on:changeTags="changeTags"></my-tags>
                </el-card>
            </el-col>
        </el-row>
        <el-card class="markdown">
            <markDown v-on:changeContent="changeContent" v-on:changeMarkdown="changeMarkdown" :markdown="content"></markDown>
            <el-row type="flex" justify="end" class="handle-bottom">
                <el-col :span="2">
                    <el-button type="info" round plain size="mini"  :loading="draftLoading" @click="draft"> 草稿箱</el-button>
                </el-col>
                <el-col :offset="1" :span="2">
                    <el-button type="primary" round plain size="mini"  :loading="draftLoading" @click="newDraft"> 新建草稿</el-button>
                </el-col>
                <el-col :offset="1"  :span="2">
                    <el-button type="primary" round plain size="mini"  :loading="draftLoading" @click="saveDraft"> 保存草稿</el-button>
                </el-col>
                <el-col :offset="1"  :span="2">
                    <el-button type="danger" round plain size="mini"  :loading="draftLoading" @click="deleteDraft"> 删除草稿</el-button>
                </el-col>
                <el-col :offset="1" :span="2">
                    <el-button type="success" round plain size="mini"  :loading="loading" @click.prevent="uploadArticle">发布文章</el-button>
                </el-col>
            </el-row>
        </el-card>
        <el-dialog title="草稿箱" :visible.sync="draftVisible" center width="30%">
            <el-select v-model="draftValue" placeholder="请选择要编写的草稿" class="draft-select">
                <el-option
                        v-for="item in draftOptions"
                        :key="item.id"
                        :label="item.title"
                        :value="item.id">
                </el-option>
            </el-select>
            <div slot="footer" class="dialog-footer">
                <el-button @click="draftVisible = false">取 消</el-button>
                <el-button type="primary" @click="selectDraft">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import markDown from "../../components/MarkdownEditor/index";
    import myBgm from "./components/bgm";
    import myAbstract from "./components/abstract";
    import myCategory from "./components/category";
    import myTags from "./components/tags"
    import {uploadArticle, uploadDraft, getDraft, newDraft, deleteDraft} from "../../api/article";
    import {errorTips} from "../../utils/tools/message";

    export default {
        inject: ['reload'],
        name: "App",
        components: {markDown, myBgm, myAbstract, myCategory, myTags},
        data() {
            return {
                category: 'Python',
                tags: [],
                cover: '',
                abstract: '',
                title: '',
                content: '初始化内容',
                loading: false,
                markdown: "",
                draftLoading: false,
                draftVisible: false,
                draftValue: '',
                draftOptions: [],
                checkedOptions: {},
            };
        },
        methods: {
            /////////////////////////子传父////////////////
            // 传递分类
            changeCategory:function (category) {
                this.category = category;
            },
            // 传递标签
            changeTags:function (tags) {
                this.tags = tags
            },
            // 传递封面
            changeCover:function (cover) {
                this.cover = cover;
            },
            // 传递概要
            changeAbstract:function (abstract) {
                this.abstract = abstract
            },
            // 传递标题
            changeTitle:function (title) {
                this.title = title
            },
            // 传递正文
            changeContent:function (content) {
                this.content = content
            },
            // 传递草稿
            changeMarkdown:function(markdown){
                this.markdown = markdown
            },
            //////////////////////文章相关/////////////////
            // 上传文章
            uploadArticle(){
                this.loading = true;
                if (!this.checkedArticle()){
                    this.loading = false;
                    return
                }
                const data = {
                    'summary': this.abstract,
                    'title': this.title,
                    'cover': this.cover,
                    'content': this.content,
                    'category': this.category,
                    'tag': this.tags,
                    'str_num': this.content.length,
                    'markdown': this.markdown,
                };
                uploadArticle(data).then(() =>{
                    this.$message.success("文章上传成功");
                    this.loading = false
                }).catch(err =>{
                    this.loading = false;
                    errorTips(err)

                })
            },
            // 检查各各上传数据
            checkedArticle(){
                if (this.category === 'Python'){
                    this.category = 1
                }
                // 摘要字符判断
                if ( this.abstract === undefined || this.abstract === "" ){
                    this.$notify.error("摘要不能为空");
                    return false
                }else if(this.abstract.length < 10 || this.abstract.length > 300){
                    this.$notify.error("摘要长度应在10-300字符");
                    return false
                }
                // 封面判断
                if (this.cover === ""){
                    this.$notify.error("封面url不能为空");
                    return false
                }else if(this.cover.length < 20 || this.cover.length >100){
                    this.$notify.error("封面url长度不正确");
                    return false
                }else if(!(/^https?:\/\/([a-zA-Z0-9]+\.)+[a-zA-Z0-9]+/.test(this.cover))){
                    this.$notify.error("封面url不满足utl格式")
                }
                // 标题判断
                if (this.title === ""){
                    this.$notify.error("标题不能为空");
                    return false
                }else if(this.title < 1 || this.title > 40){
                    this.$notify.error("标题长度应为1～40个字符");
                    return false
                }
                // 分类判断
                if (this.category === ""){
                    this.$notify.error("分类不能为空");
                    return false
                }else if (!(Number.isInteger(this.category))){
                    this.$notify.error("分类应为整数");
                    return false
                }else if (this.category < 0){
                    this.$notify.error("分类应大约0");
                    return false
                }
                // 文章内容判断
                if (this.content.length < 20){
                    this.$notify.error("文章内容过短");
                    return false
                }
                return true
            },
            ///////////////////////////////////草稿箱相关////////////////////////////
            newDraft(){
                const data = {
                    'summary': this.abstract,
                    'title': this.title,
                    'cover': this.cover,
                    'content': this.markdown,
                    'category': this.category,
                    'tag': this.tags,
                };
                newDraft(data).then(() =>{
                    this.$message.success("文章保存成功")
                }).catch(err => {
                    errorTips(err);
                    this.loading = false
                })
            },
            // 更新草稿
            saveDraft(){
                if (this.category === 'Python'){
                    this.category = 1
                }
                const data = {
                    'summary': this.abstract,
                    'title': this.title,
                    'cover': this.cover,
                    'content': this.markdown,
                    'category': this.category,
                    'tag': this.tags,
                };
                if (this.checkedOptions.id === '' || this.checkedOptions.id === undefined){
                    this.$message.error('该草稿还未创建，请选择【新建草稿】');
                    return
                }
                uploadDraft(data, this.checkedOptions.id).then(() =>{
                    this.$message.success("文章保存成功")
                }).catch(err => {
                    errorTips(err);
                    this.loading = false
                })
            },
            // 草稿箱
            draft(){
                getDraft({"size": 50}).then(res =>{
                    this.draftOptions = res.results
                }).catch(err => {
                    errorTips(err);
                    this.loading = false
                });
                this.draftVisible = true
            },
            // 选择草稿
            selectDraft(){
                for (let key of Object.keys(this.draftOptions)){
                    if (this.draftOptions[key]['id'] === this.draftValue){
                        this.checkedOptions = this.draftOptions[key];
                        this.title = this.checkedOptions.title;
                        this.content = this.checkedOptions.content;
                        this.abstract = this.checkedOptions.summary;
                        this.cover  = this.checkedOptions.cover;
                        break
                    }
                }
                this.draftVisible = false
            },
            // 删除草稿
            deleteDraft(){
                if (this.checkedOptions.id === '' || this.checkedOptions.id === undefined){
                    this.$message.error("还未选中需要删除的草稿");
                    return
                }
                deleteDraft(this.checkedOptions.id).then(() => {
                    this.reload()
                }).catch(err => {
                    errorTips(err);
                    this.loading = false
                })},
        }

    };
</script>

<style lang="scss" scoped>
    .creation{
        margin: 20px 20px 20px;
        .info {
            padding-bottom: 10px;
            .abstract {
                margin-left: 10px;
            }
            .select{
                margin-left: 10px;
            }
        }

        .handle-bottom{
            margin-top: 10px;
        }
        .draft-select{
            width: 90%;
        }
    }
</style>
