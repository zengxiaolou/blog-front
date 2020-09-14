<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/9/10-17:12
INTRODUCTION    登录组件
-->

<template>
    <el-dialog
        title="登 录"
        center
        :visible.sync="loginVisible"
        width="300px"
        :before-close="handleClose">
        <el-form :model="form"  :rules="rules" ref="form" >
            <el-form-item  prop="username">
                <el-input
                    v-model="form.username"
                    class="user-input"
                    prefix-icon="icon iconfont icon-user"
                    clearable
                    placeholder="请输入账号">
                </el-input>
            </el-form-item>
            <el-form-item  prop="password">
                <el-input
                    v-model="form.password"
                    class="user-password"
                    prefix-icon="icon iconfont icon-password"
                    clearable
                    show-password
                    placeholder="请输入密码">
                </el-input>
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
            <el-row class="gam">
                <el-col :span="10" >社交账号登录</el-col>
                <el-col :span="4" v-for="(value, index) in gam" :key="index">
                    <a class="gam-icon" :href=value.url target="_blank">
                        <el-avatar :size="size" :icon=value.icon :class=value.style></el-avatar></a>
                </el-col>
            </el-row>
            <el-row type="flex" justify="center">
                <el-col :span="8"><el-button :loading="loading" type="primary" @click="submitForm('form')">登 录</el-button></el-col>
                <el-button type="info" @click="showRegister">注 册</el-button>
            </el-row>
        </el-form>
    </el-dialog>
</template>

<script>
import {captcha, checkCaptcha} from "api/utils";
import {errorTips} from "@/utils/tools/message";
import {mapGetters} from "vuex";
    export default {
        name: "login",
        inject: ['reload'],
        data() {
            let validateUsername = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入账号'));
                }else if(value.length<5){
                    callback(new Error("账号长度不能小于5"))
                }else {
                    callback();
                }
            };
            // 验证密码
            let validatePassword = (rule, value,callback) =>{
                if (value === ''){
                    callback(new Error('请输入密码'))
                }else if(value.length<6){
                    callback(new Error("账号长度不能小于6"))
                }else {
                    callback();
                }
            };
            //验证图形验证码
            let validateCaptcha = (rule, value,callback) =>{
                if (value === ''){
                    callback(new Error('请输入验证码'))
                }else if(value.length !== 4){
                    callback(new Error("验证码长度为4"))
                }else {
                    callback();
                }
            };
            return {
                form: {
                    username: "xiaolou",
                    password: "zzxxyy123",
                    captcha: "",
                },
                captcha_key: "",
                url: '',
                gam: [
                    {"name": "github",   "style": "gam-github",    "local": "top-end" ,    "icon": "icon iconfont icon-github",          "url": "https://github.com/zengxiaolou"},],
                size: "medium",
                rules: {
                    username:[{validator: validateUsername, trigger:'blur'}],
                    password:[{validator: validatePassword, trigger: "blur"}],
                    captcha:[{validator: validateCaptcha, trigger: "blur"}]
                },
                loading: false,
            }
        },
        computed: {
            ...mapGetters(['loginVisible',])

        },
        methods: {
            // 取消登录
            handleClose() {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        this.$store.dispatch('setLoginVisible', false);
                    })
                    .catch(_ => {});
            },
            // 刷新验证码
            changeCaptcha() {
                captcha().then((res) =>{
                    this.captcha_key = res['captcha_key'];
                    this.url = 'data:image/png;base64,' + res['captcha_image'];
                })
            },
            // 显示注册dialog
            showRegister() {
                this.$store.dispatch('setLoginVisible', false)
                this.$store.dispatch('setRegisterVisible', true)
            },
            // 登录
            submitForm(formName){
                this.$refs[formName].validate((valid) =>{
                    if (valid){
                        checkCaptcha({captcha_key:this.captcha_key, captcha_value: this.form.captcha}).then(() =>{
                            this.form["captcha_key"] = this.captcha_key;
                            this.$store.dispatch('login', this.form).then(() =>{
                                this.$router.push({path: "/index"});
                                this.loading = false;
                                this.$message.success("欢迎回来");
                                this.$store.dispatch('setLoginVisible', false)
                                this.reload()
                            }).catch((err) => {
                                errorTips(err);
                                this.form.captcha = '';
                                this.loading = false;
                                this.changeCaptcha();
                            })
                        }).catch(() => {
                            this.changeCaptcha();
                            this.loading = false;
                            this.$message.error("验证码错误，请重新输入验证码");
                        });
                        this.form.captcha = ""
                    }else {
                        this.loading = false;
                        this.$message.error("输入信息格式错误，请检查");
                        this.changeCaptcha();
                        return false
                    }
                });
            },
        },
        mounted() {
            this.changeCaptcha()
        }
    }
</script>

<style lang="scss" scoped>
    /deep/ .el-dialog {
        border-radius: 25px;
        .captcha-img{
            border: 1px solid #D7DBE2;
            border-radius: 5px;
        }
        .gam{
            margin-bottom: 10px;
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

    }
</style>
