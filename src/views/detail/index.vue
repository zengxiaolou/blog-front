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
        <el-backtop target=".page-component__scroll .el-scrollbar__wrap" :right="20"></el-backtop>
        <el-dialog title="登录页面" :visible.sync="loginVisible">
            <el-form :model="form">
                <el-form-item label="活动名称" >
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="loginVisible = false">取 消</el-button>
                <el-button type="primary" @click="loginVisible = false">确 定</el-button>
            </div>
            <el-row>
                <el-col>第三方登录</el-col>
            </el-row>
        </el-dialog>
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
                like: '赞一个',
                loginVisible: '',
                form: '',
            }
        },
        methods: {
            getArticleByID(){
                let id = this.$route.params.detail;
                getArticleByID(id).then(res => {
                    if (res.like_user !== null){
                        res.like_num = res.like_user.length
                    }else {
                        res.like_num = 0
                    }
                    this.content = res;
                    this.$store.dispatch('getViewAndLike')
                }).catch(err => {
                    errorTips(err)
                })
            },
            giveLike(){

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
