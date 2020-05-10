<template>
    <div class="login-page">
        <el-row type="flex" justify="center" class="login-header">
            <el-col :span="24" ><p>精准、高效、公平</p></el-col>
        </el-row>
        <div class="login-box">
            <el-form :model="infoForm" :rules="rules" ref="infoForm" class="login-form">
                <el-row type="flex" justify="center" >
                    <el-col :span="24"><p>登&nbsp&nbsp录</p></el-col>
                </el-row>
                <el-form-item prop="username">
                    <el-row type="flex" justify="center">
                        <el-input
                                type="text"
                                placeholder="请输入账号/手机号"
                                prefix-icon="el-icon-user-solid"
                                v-model="infoForm.username"
                                clearable
                                autocomplete="off">
                        </el-input>
                    </el-row>
                </el-form-item>
                <el-form-item prop="password">
                    <el-row type="flex" justify="center">
                        <el-input
                                placeholder="请输入密码"
                                show-password
                                clearable
                                prefix-icon="el-icon-lock"
                                v-model="infoForm.password"
                                autocomplete="off">
                        </el-input>
                    </el-row>
                </el-form-item>
                <el-form-item  prop="captcha_value">
                    <el-row type="flex" justify="center" class="login-code-box">
                        <el-input
                                v-model="infoForm.captcha_value"
                                placeholder="请输入验证码"
                                clearable
                                autocomplete="off">
                            <template slot="append">
                                <img class="login-code" @click="getValidateCode" :src="validate" alt="验证码">
                            </template>
                        </el-input>
                    </el-row>
                </el-form-item>
                <el-form-item>
                    <el-row type="flex" justify="center">
                        <el-button  :loading="loading" @click.native.prevent="submitForm('infoForm')" type="primary">登&nbsp&nbsp录</el-button>
                    </el-row>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import {captcha} from "../../api/utils";

    export default {
        name: "login",
        data () {
            // 验证用户名
            var validateUsername = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入账号'));
                }else if(value.length<5){
                    callback(new Error("账号长度不能小于5"))
                }else {
                    callback();
                }
            };
            // 验证密码
            var validatePassword = (rule, value,callback) =>{
                if (value === ''){
                    callback(new Error('请输入密码'))
                }else if(value.length<6){
                    callback(new Error("账号长度不能小于6"))
                }else {
                    callback();
                }
            };
            //验证图形验证码
            var validateCaptcha = (rule, value,callback) =>{
                if (value === ''){
                    callback(new Error('请输入验证码'))
                }else if(value.length !== 4){
                    callback(new Error("验证码长度为4"))
                }else {
                    callback();
                }
            };
            return{
                infoForm:{
                    username: 'xiaolou',
                    password: 'zzxxyy123',
                    captcha_value: '',
                },
                captchaForm:{
                    captcha_key: '',
                },
                rules:{
                    username:[
                        {validator: validateUsername, trigger:'blur'}
                    ],
                    password:[
                        {validator: validatePassword, trigger: "blur"}
                    ],
                    captcha_value:[
                        {validator: validateCaptcha, trigger: "blur"}
                    ]
                },
                loading: false,
                validate: '',
            };
        },

        mounted(){
            this.getValidateCode()
        },
        methods:{
            submitForm(formName){
                this.$refs[formName].validate((valid) => {
                    if (valid){
                        this.loading = true;
                        const {captcha_key} = this.captchaForm;
                        const {captcha_value} = this.infoForm;
                        checkCaptcha({captcha_key: captcha_key,captcha_value: captcha_value}).then(() =>{
                            this.$store.dispatch('login',this.infoForm)
                                .then(()=>{
                                    this.$router.push({path:"/"});
                                    this.loading = false;
                                })
                                .catch((err)=>{
                                    const key = Object.keys(err.response.data);
                                    this.$message.error(err.response.data[key][0].toString());
                                    this.infoForm.captcha_value ='';
                                })
                        }).catch(() =>{
                            this.getValidateCode();
                            this.loading = false;
                            this.$message({
                                message:'验证码错误，请重新输入验证码',
                                type: "error",
                                duration: 3*1000,
                            });
                            this.infoForm.captcha_value ='';
                        })
                    }else {
                        this.loading = false;
                        this.$message.error('输入信息错误格式错误，请检查');
                        this.infoForm.captcha_value ='';
                        this.getValidateCode();
                        return false
                    }
                });
            },
            getValidateCode(){
                captcha().then((res) =>{
                        this.captchaForm.captcha_key = res.captcha_key;
                        this.validate = 'data:image/png;base64,' + res.captcha_image;
                    }).catch((err) => {
                        const key = Object.keys(err.response.data);
                        this.$message.error(err.response.data[key][0].toString());
                        this.getValidateCode();
                })
            },
        }
    }
</script>

<style lang="scss" scoped>

    .login-page{
        height: 100%;
        background-image: url('/images/BGI.jpg');
        .login-header{
            height: 5%;
            p{
                text-align: center;
                font-size: 12px;
                color: #606266;
            }
        }
        .login-box{
            height: 95%;
            display: flex;
            justify-content: center;
            align-items: center;
            .login-form{
                padding: 0 10px;
                border: 1px solid #606266;
                border-radius: 3%;
                height: 350px;
                width: 250px;
                background-color: rgba(0,0,0,0.5);
                .el-input{
                    width: 250px;
                    &:nth-child(2){
                        margin-bottom: 20px;
                    }
                }
                .password-eye{
                    height: 10px - 2px;
                    display: block;
                    margin: 0px -5px;
                    border-top-right-radius: 2px;
                    border-bottom-right-radius: 2px;
                }
                .login-code {
                    height: 40px - 2px;
                    display: block;
                    margin: 0px -20px;
                    border-top-right-radius: 2px;
                    border-bottom-right-radius: 2px;
                }
                .el-button{
                    display: flex;
                    justify-content: center;
                    width: 230px;
                    margin-top: 20px;
                    margin-bottom: 10px;
                }

                p{
                    text-align: center;
                    color: #F0F2F5;
                }
            }
        }
    }
</style>
