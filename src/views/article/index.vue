<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/8/15-14:35
INTRODUCTION    文件简介
-->

<template>
    <div class="article">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>文章分类</el-breadcrumb-item>
            <el-breadcrumb-item>python</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider></el-divider>
            <el-scrollbar>
            <ul class="infinite-list"   v-infinite-scroll="load">
                <li v-for="i in count" class="infinite-list-item">
                    <my-article-preview></my-article-preview>
                </li>
            </ul>
        </el-scrollbar>
    </div>

</template>

<script>
    import myArticlePreview from "../../components/article/article_preview"
    export default {
        name: "index",
        components: {myArticlePreview},
        data() {
            return {
                count: 0,
            };
        },
        methods: {
            load () {
                this.count += 1
            }
        }
    }
</script>

<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
    }
    .article{
        height: 100%;
        padding-top: 10px;
        .el-breadcrumb {
            margin-left: 20px;
            padding-bottom: 10px;
            font-weight:800;
            font-size: 1em;
        }
        .el-scrollbar {
            height: 97%;
        }
        /deep/ .el-scrollbar__wrap {
            overflow-x:hidden;
        }
    }

</style>
