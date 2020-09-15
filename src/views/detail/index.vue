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
        <el-row type="flex" justify="center">
            <el-col :span="4"><el-button @click="giveLike">{{like}}</el-button></el-col>
        </el-row>
    </el-scrollbar>
</template>

<script>
    import myContent from './components/contents';
    import {getArticleByID} from "api/article";
    import {errorTips} from "@/utils/tools/message";

    export default {
        name: "detail",
        inject: ['reload'],
        components: {myContent},
        data(){
            return{
                content: {},
                like: '赞一个',
                loginVisible: true,
                form: {
                    username: '',
                    password: '',
                    captcha: "",
                },
            }
        },
        methods: {
            getArticleByID(){
                let id = this.$route.params.detail;
                getArticleByID(id).then(res => {
                    res.like_num = res['like_user'] !== null ? res['like_user'].length : 0;
                    this.content = res;
                    this.$store.dispatch('getViewAndLike')
                }).catch(err => {
                    errorTips(err)
                })
            },
            giveLike(){
                this.loginVisible = true;
            },
        },
        mounted() {
            this.getArticleByID()
        }
    }
</script>

<style lang="scss" scoped>
    .el-scrollbar {
        height: 100%;
        /deep/ .el-dialog {
            border-radius: 25px;
            .captcha-img{
                border: 1px solid #D7DBE2;
                border-radius: 5px;
            }
        }
    }
    /deep/ .el-scrollbar__wrap {
        overflow-x:hidden;
        height: 100%;
    }
    .page-component__scroll{
        height: 100%;
    }
</style>
