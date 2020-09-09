<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/8/15-14:35
INTRODUCTION    文章标签
-->

<template>
    <div class="article">
        <el-row type="flex" justify="space-between">
            <el-col :span="6">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>文章标签</el-breadcrumb-item>
                    <el-breadcrumb-item>{{search}}</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
            <el-col :span="4">
                <span>该标签共{{total}}篇博客</span>
            </el-col>
        </el-row>
        <el-divider></el-divider>
        <el-scrollbar>
            <ul>
                <li v-for="i in article.length">
                    <my-article-preview :article="article[i-1]"></my-article-preview>
                </li>
            </ul>
        </el-scrollbar>
        <div class="page">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes = pageSizes
                    :page-size= pageSize
                    :total=total
                    layout="total, sizes, prev, pager, next, jumper">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import myArticlePreview from "../../components/article/article_preview";
    import {getArticle} from "../../api/article";
    import {errorTips} from "../../utils/tools/message";

    export default {
        name: "index",
        components: {myArticlePreview},
        data() {
            return {
                loading: false,
                article: [],
                search: 'Python',
                pageNum: 1,
                total: 0,
                pageSizes: [10, 20, 50],
                pageSize: 10,
                page: 1,
                currentPage: 1
            };
        },
        watch: {
            $route(to, from) {
                this.getArticle()
            },
        },
        methods: {
            getArticle(){
                this.search = this.$route.params.label;
                let params = {
                    'page': this.page,
                    'size': this.pageSize,
                    'search': this.search
                };
                getArticle(params).then(res => {
                    this.total = parseInt(res.count);
                    this.article  = res.results;
                }).catch(err => {
                    errorTips(err)
                })

            },
            handleSizeChange(val) {
                let params = {
                    'page': this.page,
                    'size': val,
                    'search': this.search
                };
                this.pageSize = val;
                getArticle(params).then(res => {
                    this.total = parseInt(res.count);
                    this.article  = res.results;
                })
            },
            handleCurrentChange(val) {
                const params = {
                    'page': val,
                    'size': this.pageSize,
                    'search': this.search
                };
                this.page = val;
                getArticle(params).then(res => {
                    this.total = parseInt(res.count);
                    this.article = res.results;
                })
            },
        },
        mounted() {
            this.getArticle()
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
        padding-top: 20px;
        .el-breadcrumb {
            margin-left: 20px;
            padding-bottom: 10px;
            font-weight:800;
            font-size: 1em;
        }
        .el-scrollbar {
            height: 92%;
        }
        /deep/ .el-scrollbar__wrap {
            overflow-x:hidden;
        }
        .page{
            width: 100%;
            margin-bottom: 10px;
            margin-top: 10px;
            text-align: center;
        }
    }

</style>

