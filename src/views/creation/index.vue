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
                    <my-bgm v-on:changeCover="changeCover"></my-bgm>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card class="abstract">
                    <my-abstract v-on:changeAbstract="changeAbstract" v-on:changeTitle="changeTitle"></my-abstract>
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
            <span>文章内容</span>
            <el-divider></el-divider>
            <markDown v-on:changeContent="changeContent"></markDown>
            <el-row type="flex" justify="end" class="handle-bottom">
                <el-col :span="3">
                    <el-button type="primary" round plain size="mini" > 保存草稿</el-button>
                </el-col>
                <el-col :span="3">
                    <el-button type="primary" round plain size="mini"  :loading="loading" @click.prevent="uploadArticle">发布文章</el-button>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<script>
    import markDown from "../../components/MarkdownEditor/index";
    import myBgm from "./components/bgm";
    import myAbstract from "./components/abstract";
    import myCategory from "./components/category";
    import myTags from "./components/tags"
    import {uploadArticle} from "../../api/article";


    export default {
        name: "App",
        components: {markDown, myBgm, myAbstract, myCategory, myTags},
        data() {
            return {
                category: 'Python',
                tags: [],
                cover: '',
                abstract: '',
                title: '',
                content: '',
                loading: false,
            };
        },
        methods: {
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
                console.log(content);
                this.content = content
            },
            // 上传文章
            uploadArticle(){
                this.loading = true;
                if (!this.checkedArticle()){
                    return
                }
                const data = {
                    'summary': this.summary,
                    'title': this.title,
                    'cover': this.cover,
                    'content': this.content,
                    'category': this.category,
                    'tag': this.tags,
                    'str_num': this.content.length
                };
                uploadArticle(data).then(res =>{
                    console.log(res);
                    this.loading = false
                }).catch(err =>{
                    const key = Object.keys(err.response.data);
                    this.$message.error(err.response.data[key][0].toString());
                    this.loading = false
                })
            },
            // 检查各各上传数据
            checkedArticle(){
                // 摘要字符判断
                if (this.summary === ""){
                    this.$notify.error("摘要不能为空");
                    return false
                }else if(this.summary.length < 10 || this.summary.length > 300){
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
                return true
            }
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

        .el-divider{
            margin: 10px 0;
        }
        .handle-bottom{
            margin-top: 10px;
        }
    }

</style>
