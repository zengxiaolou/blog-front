<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/9/10-17:12
INTRODUCTION    注册组件
-->

<template>
    <el-dialog
        title="注 册"
        center
        :visible.sync="registerVisible"
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
            <el-form-item  prop="passwordAgain">
                <el-input
                    v-model="form.passwordAgain"
                    class="user-password"
                    prefix-icon="icon iconfont icon-password"
                    clearable
                    show-password
                    placeholder="请输入密码">
                </el-input>
            </el-form-item>
            <el-form-item prop="email">
                <el-row type="flex" justify="center">
                    <el-input
                        type="text"
                        placeholder="请输入邮箱"
                        prefix-icon="iconfont icon-email"
                        v-model="form.email"
                        clearable
                        autocomplete="off">
                    </el-input>
                </el-row>
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
            <el-form-item prop="sms">
                <el-row type="flex" justify="center" class="login-code-box">
                    <el-input
                        v-model="form.sms"
                        placeholder="请输入短信验证码"
                        prefix-icon="el-icon-chat-dot-round"
                        clearable
                        autocomplete="off">
                        <template slot="append">
                            <el-button class="get-sms-bnt" :disabled="smsDisabled" @click.prevent="getSms(form, captcha_key)" v-text="smsMsg" type="primary">{{smsMsg}}</el-button>
                        </template>
                    </el-input>
                </el-row>
            </el-form-item>
            <el-row type="flex" justify="center">
                <el-col :span="8"><el-button :loading="loading" type="info" @click.native.prevent="changeLogin">登 录</el-button></el-col>
                <el-button type="primary" @click.native.prevent="register">注 册</el-button>
            </el-row>
        </el-form>
    </el-dialog>
</template>

<script>
import {captcha, checkCaptcha, getSms} from "api/utils";
import {errorTips} from "@/utils/tools/message";
import {mapGetters} from 'vuex';

export default {
    name: "register",
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
        // 验证密码
        let validatePasswordAgain = (rule, value,callback) =>{
            if (value !== this.form.password){
                callback(new Error('两次密码不一致'))
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
        // 验证Email格式
        let validateEmail = (rule, value,callback) =>{
            let pattern = /^([a-zA-Z0-9]+[_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|.]?)*[a-zA-Z0-9]+.[a-zA-Z]{2,4}$/;
            if (value === ''){
                callback(new Error('请输入邮箱'))
            }else if(!(pattern.test(value))){
                callback(new Error("邮箱格式错误"))
            }else {
                callback();
            }
        };

        //验证短信验证码
        let validateSms = (rule, value,callback) =>{
            if (value === ''){
                callback(new Error('请输入邮箱验证码'))
            }else if(value.length !== 6){
                callback(new Error("邮箱验证码长度为6"))
            }else {
                callback();
            }
        };
        return {
            form: {
                username: "xiaolu",
                password: "zzxxyy123",
                passwordAgain: 'zzxxyy123',
                email: "zengevent@gmail.com",
                sms: "",
                captcha: "",
            },
            captcha_key: "",
            url: '',
            rules: {
                username:[{validator: validateUsername, trigger:'blur'}],
                password:[{validator: validatePassword, trigger: "blur"}],
                passwordAgain:[{validator: validatePasswordAgain, trigger: "blur"}],
                captcha:[{validator: validateCaptcha, trigger: "blur"}],
                sms: [{validator: validateSms, trigger:'blur'}],
                email: [{validator: validateEmail, trigger: 'blur'}]
            },
            smsDisabled: false,
            loading: false,
            validate: '',
            residue: 60,
            smsMsg: '获取验证码',
            timer: null,
            checked: true,
        }
    },
    computed: {
        ...mapGetters(['registerVisible']),
    },
    methods: {
        // 取消登录
        handleClose() {
            this.$confirm('确认关闭？')
                .then(_ => {
                    this.$store.dispatch('setRegisterVisible', false);
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
        changeLogin(){
            this.$store.dispatch('setRegisterVisible', false);
            this.$store.dispatch('setLoginVisible', true)
        },
        // 获取短信验证码
        getSms(form, captcha_key,){
            const {email, captcha} = form;
            if (captcha.length === 4){
                checkCaptcha({captcha_key:captcha_key,captcha_value:captcha}).then(()=>{
                    getSms({email: email}).then(()=>{
                        this.form.sms = '';
                        this.$message.success("邮件已发送，请稍等片刻完成注册");
                        this.smsDisabled =true;
                        if (!this.timer){
                            this.timer = setInterval(() =>{
                                if (this.residue > 0 && this.residue <= 60){
                                    this.residue--;
                                    if (this.residue !==0){
                                        this.smsMsg = "重新发送(" +this.residue + ")";
                                    }else{
                                        clearInterval(this.timer);
                                        this.smsMsg = "获取验证码";
                                        this.residue = 60;
                                        this.timer = null;
                                        this.smsDisabled = false;
                                    }
                                }
                            },1000)
                        }
                    }).catch((err) => {
                        const key = Object.keys(err.response.data);
                        this.$message.error(err.response.data[key][0].toString());
                        this.changeCaptcha();
                    })
                }).catch((err) =>{
                    this.changeCaptcha();
                    errorTips(err)
                });
            }else {
                this.$message.error('图形验证码格式不正确')
            }
        },

        // 登录
        register(formName){
            this.$refs[formName].validate((valid) =>{
                if (valid){
                    checkCaptcha({captcha_key:this.captcha_key, captcha_value: this.form.captcha}).then(() =>{
                        this.form["captcha_key"] = this.captcha_key;
                        this.$store.dispatch('login', this.form).then(() =>{
                            this.$router.push({path: "/index"});
                            this.loading = false;
                            this.$message.success("欢迎回来");
                            this.registerVisibleNew = false;
                            this.$emit('registerVisible', false)
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

    .captcha-img {
        border: 1px solid #D7DBE2;
        border-radius: 5px;
    }
}

</style>
