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
        <el-dialog
            title="登  录"
            :visible.sync="loginVisible"
            width="300px"
            center
            show-close=false>
            <el-form :model="form">
                <el-form-item >
                    <el-input
                        v-model="form.username"
                        placeholder="请输入登录用户名"
                        prefix-icon="icon iconfont icon-user"
                        clearable></el-input>
                </el-form-item>
                <el-form-item >
                    <el-input
                        v-model="form.password"
                        placeholder="请输入登录密码"
                        prefix-icon="icon iconfont icon-password"
                        show-password
                        clearable
                        ></el-input>
                </el-form-item>
                <el-form-item class="captcha"  prop="captcha">
                    <el-row type="flex" justify="space-between">
                        <el-col :span="15">
                            <el-input
                                v-model="form.captcha"
                                class="user-password"
                                prefix-icon="icon iconfont icon-captcha"
                                clearable
                                placeholder="请输入验证码">
                            </el-input>
                        </el-col>
                        <el-col :span="8">
                            <el-image class="captcha-img"
                                      style="height: 40px"
                                      :src="url"
                                      fit="contain"
                                      @click.native="changeCaptcha"></el-image>
                        </el-col>
                    </el-row>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="loginVisible = false">登 录</el-button>
                <el-button type="info" @click="loginVisible = false">注 册</el-button>
            </div>
            <el-row>
                <el-col :span="10" class="gam">社交账号登录</el-col>
                <el-col :span="4" v-for="(value, index) in gam" :key="index">
                    <el-tooltip class="item" effect="light" :content=value.name :placement=value.local>
                        <a class="gam-icon" :href=value.url target="_blank">
                            <el-avatar :size="size" :icon=value.icon :class=value.style></el-avatar></a>
                    </el-tooltip>
                </el-col>

            </el-row>
        </el-dialog>
    </el-scrollbar>
</template>

<script>
    import myContent from './components/contents';
    import {getArticleByID} from "api/article";
    import {errorTips} from "@/utils/tools/message";
    import {captcha} from "api/utils";

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
                gam: [
                    {"name": "github",   "style": "gam-github",    "local": "top-end" ,    "icon": "icon iconfont icon-github",          "url": "https://github.com/zengxiaolou"},
                    {"name": "QQ",       "style": "gam-qq",        "local": "bottom-end" , "icon": "icon iconfont icon-QQ",              "url": "tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=564259844&website=www.oicqzone.com"},
                    {"name": "wechat",   "style": "gam-wechat",    "local": "bottom-end" , "icon": "icon iconfont icon-wechat",          "url": "tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=564259844&website=www.oicqzone.com"}
                ],
                size: "medium",
            }
        },
        methods: {
            getArticleByID(){
                let id = this.$route.params.detail;
                getArticleByID(id).then(res => {
                    if (res['like_user'] !== null){
                        res.like_num = res['like_user'].length
                    }else {
                        res.like_num = 0
                    }
                    this.content = res;
                    console.log(res)
                    this.$store.dispatch('getViewAndLike')
                }).catch(err => {
                    errorTips(err)
                })
            },
            giveLike(){
                this.loginVisible = true;
            },
            // 刷新验证码
            changeCaptcha() {
                captcha().then((res) =>{
                    this.captcha_key = res['captcha_key'];
                    this.url = 'data:image/png;base64,' + res['captcha_image'];
                })
            },
        },
        mounted() {
            this.getArticleByID()
            this.changeCaptcha()
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
        .gam-github {
            color: black;
            background-color: rgba(25,23,23,.1);
        }
        .gam-qq {
            color: #00A0F9;
            background-color: rgba(111,201,251,.2);
        }
        .gam-wechat {
            color: #00c15e;
            background-color: rgba(0,219,107,.2);
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
