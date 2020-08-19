<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/7/26-09:21
INTRODUCTION    头像组件
-->
<template>
    <div class="avatar-box">
        <el-button type="text" @click.native="dialogVisible = true">
            <el-avatar :size="150" :src="avatar" ></el-avatar>
        </el-button>
        <el-dialog
                title="登 录"
                center
                :visible.sync="dialogVisible"
                width="300px"
                :show-close=false
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
            </el-form>
            <el-row type="flex" justify="center">
                <el-col :span="8"><el-button @click="dialogVisible = false">取 消</el-button></el-col>
                <el-col :span="8"><el-button :loading="loading" type="primary" @click="submitForm('form')">登 录</el-button></el-col>
            </el-row>

        </el-dialog>
    </div>
</template>

<script>
    import {captcha} from "../../../../api/utils";
    import {login} from "../../../../api/user";

    export default {
        name: "avatar",
        data(){
            // 验证用户名
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
            return{
                avatar: require("../../../../assets/images/others/avatar.jpeg"),
                dialogVisible: false,
                username: "",
                password: "",
                form: {
                    username: "",
                    password: "",
                    captcha: "",
                },
                captcha_key: "",
                url: require("../../../../assets/images/others/captcha.png"),
                rules:{
                    username:[
                        {validator: validateUsername, trigger:'blur'}
                    ],
                    password:[
                        {validator: validatePassword, trigger: "blur"}
                    ],
                    captcha:[
                        {validator: validateCaptcha, trigger: "blur"}
                    ]
                },
                loading: false,
            }
        },
        methods: {
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
                },

            changeCaptcha() {
                captcha().then((res) =>{
                    this.captcha_key = res.captcha_key;
                    this.url = 'data:image/png;base64,' + res.captcha_image;
                })
            },
            submitForm(formName) {
                this.$refs[formName].validate(valid) => {
                    if (valid) {

                    }
                }
            },
        },
        mounted() {
            this.changeCaptcha()
        }


    }
</script>

<style lang="scss" scoped>
    .avatar-box {
        width: 100%;
        height: 200px;
        padding-top: 30px;
        .el-avatar {
            width: 150px;
            height: 150px;
            margin-left: 45px;
        }
        /deep/ .el-dialog {
            border-radius: 25px;
            .captcha-img{
                border: 1px solid #D7DBE2;
                border-radius: 5px;
            }
        }

    }
</style>
