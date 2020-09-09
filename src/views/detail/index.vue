<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/8/15-14:49
INTRODUCTION    文件简介
-->

<template>
    <el-scrollbar class="page-component__scroll">
        <my-content :article="content"></my-content>
        <el-backtop target=".page-component__scroll .el-scrollbar__wrap" :right="20"></el-backtop>
    </el-scrollbar>

</template>

<script>
    import myContent from './components/contents';
    import {getArticleByID} from "../../api/article";
    import {errorTips} from "../../utils/tools/message";

    export default {
        name: "detail",
        inject: ['reload'],
        components: {myContent},
        data(){
            return{
                content: {},
            }
        },
        methods: {
            getArticleByID(){
                let id = this.$route.params.detail;
                getArticleByID(id).then(res => {
                    this.content = res;
                    this.$store.dispatch('getViewAndLike')
                }).catch(err => {
                    errorTips(err)
                })
            }
        },
        mounted() {
            this.getArticleByID()
        }
    }
</script>

<style lang="scss" scoped>
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
