<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/8/12-13:36
INTRODUCTION    文件简介
-->

<template>
    <el-scrollbar class="page-component__scroll">
        <ul class="infinite-list"   v-infinite-scroll="getArticle" >
            <li v-for="i in article.length" class="infinite-list-item">
                <my-article-preview :article="article[i-1]"></my-article-preview>
            </li>
        </ul>
        <el-backtop target=".page-component__scroll .el-scrollbar__wrap" :right="20"></el-backtop>
    </el-scrollbar>
</template>

<script>
    import myArticlePreview from "../../components/article/article_preview"
    import {getOverview} from "../../api/article";
    import {errorTips} from "../../utils/tools/message";
    export default {
        name: "home",
        inject: ['reload'],
        components: {myArticlePreview},
        data () {
            return {
                pageSize: 2,
                pageNum: 1,
                loading: false,
                article: [],
            };
        },
        methods: {
            getArticle(){
                let params = {
                    "size": this.pageSize,
                    'page': this.pageNum,
                };
                getOverview(params).then(res =>{
                    for (let key of Object.keys(res.results)){
                        this.article.push(res.results[key])
                    }
                    this.pageNum += 1
                }).catch(() => {
                    this.$message.info('没有了，别再拉啦！！！再拉裤子要掉了！！！！')
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    * { margin:0; padding:0; }
    .el-scrollbar {
        height: 100%;
    }
    /deep/ .el-scrollbar__wrap {
        overflow-x:hidden;
        height: 100%;
    }
    .page-component__scroll{
        height: 100%;
    }
</style>
