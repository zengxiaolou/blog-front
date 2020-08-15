<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/8/12-13:36
INTRODUCTION    文件简介
-->

<template>
    <el-scrollbar>
        <ul class="infinite-list"   v-infinite-scroll="load" >
            <li v-for="i in count" class="infinite-list-item">
                <my-article-preview></my-article-preview>
            </li>
        </ul>
    </el-scrollbar>
</template>

<script>
    import myArticlePreview from "../../components/article/article_preview"
    export default {
        name: "home",
        components: {myArticlePreview},
        data () {
            return {
                count: 0,
            }
        },
        methods: {
            load () {
                this.count += 2
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
    }
</style>
