<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/8/15-14:34
INTRODUCTION    文件简介
-->

<template>
    <div class="search-dev">
        <el-row class="search">
            <el-col :span="10" :offset="5" class="search-input">
                <el-input
                    v-model="search"
                    placeholder="请输入要查询的关键词"
                    clearable
                    @change="handleSearch">
                </el-input>
            </el-col>
            <el-col :span="2">
                <el-button @click="handleSearch">搜索</el-button>
            </el-col>
        </el-row>
        <el-divider></el-divider>
        <span class="result">找到约{{total}}条结果</span>
        <el-scrollbar>
            <ul>
                <li v-for="i in article.length">
                    <search-detail :article="article[i-1]"></search-detail>
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
                    background
                    layout="total, sizes, prev, pager, next, jumper">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import {getArticle} from "api/article";
    import {errorTips} from "@/utils/tools/message";
    import searchDetail from "./components/searchDetail";
    export default {
        name: "index",
        inject: ['reload'],
        components: {searchDetail},
        data() {
            return{
                search: "",
                pageNum: 1,
                total: 0,
                pageSizes: [10, 20, 50],
                pageSize: 10,
                page: 1,
                currentPage: 1,
                article: [],
            }
        },
        methods: {
            handleSearch(){
                let params = {
                    'page': this.page,
                    'size': this.pageSize,
                    'search': this.search
                };
                getArticle(params).then(res => {
                    this.total = parseInt(res['count']);
                    this.article  = res['results'];
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
                    this.total = parseInt(res['count']);
                    this.article  = res['results'];
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
                    this.total = parseInt(res['count']);
                    this.article = res['results'];
                })
            },
        },
        mounted() {
            this.handleSearch()
        }
    }
</script>

<style lang="scss" scoped>
    .search-dev{
        margin: 0 20px;
        height: 100%;
        .search{
            padding-top: 20px;
            .search-input{
                margin-right: 10px;
            }
        }
        .el-divider{
            margin-top: 10px;
        }
        .el-scrollbar {
            height: 82%;
            ul{
                padding-left: 0;
                li {
                    list-style-type: none;
                }
            }

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
        .result{
            font-size: 12px;
            color: #666666;
        }
    }
</style>
