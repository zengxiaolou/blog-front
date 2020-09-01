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
                    <el-button type="primary" round plain size="mini" >发布文章</el-button>
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
                cover: [],
                abstract: '',
                title: '',
                content: '',
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
