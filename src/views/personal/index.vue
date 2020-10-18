<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/9/30-12:38
INTRODUCTION    文件简介
-->

<template>
    <el-scrollbar class="page-component__scroll">
        <div class="personal-header">
            <el-avatar :size="100" :src="avatar"></el-avatar>
        </div>
        <div class="personal-header base-info" v-if="isLogin">
            {{username}}
            <div class="operation">
                <el-button type="danger" @click="logout" size="mini">登 出</el-button>
            </div>
        </div>
        <div class="personal-header operation"  v-else>
            <el-button type="danger" @click="login" size="mini">登 录</el-button>
            <el-button type="primary" @click="register" size="mini">注 册</el-button>
        </div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="基础信息" name="first">
                <el-card class="box-card">
                    <el-row :gutter="10" v-for="(value, index) in baseInfo" :key="index">
                        <el-col :span="4" class="baseInfo-item">{{value.name}}</el-col>
                        <el-col :span="6" class="baseInfo-item content">{{value.content|nullChange}}</el-col>
                        <el-col :span="6" v-if="value.change" class="baseInfo-item">
                            <el-button type="text" size="mini" v-if="value.content" @click="changeInfo(value.name, 'change')">修改</el-button>
                            <el-button type="text" size="mini" v-else @click="changeInfo(value.name, 'set')">设置</el-button>
                        </el-col>
                    </el-row>
                </el-card>
            </el-tab-pane>
            <el-tab-pane label="github" name="second">github</el-tab-pane>
            <el-tab-pane label="blog记录" name="third">blog记录</el-tab-pane>
        </el-tabs>
        <login :path="path"></login>
        <register :path="path"> </register>
<!--        修改昵称dialog-->
        <el-dialog title="修改昵称"
                   :visible.sync="nicknameVisible"
                    width="20%"
                    center>
            <el-form :model="nicknameForm">
                <el-form-item>
                    <el-input v-model="nicknameForm.nickname" autocomplete="off" placeholder="请输入新昵称"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="nicknameVisible = false">取 消</el-button>
                <el-button type="primary" @click="changeNickname">提 交</el-button>
            </div>
        </el-dialog>
<!--        修改密码dialog-->
        <el-dialog title="修改密码"
                   :visible.sync="passwordVisible"
                   width="20%"
                   center>
            <el-form :model="passwordForm">
                <el-form-item>
                    <el-input v-model="passwordForm.password" autocomplete="off" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="passwordForm.passwordAgain" autocomplete="off" placeholder="请输入确认密码"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="passwordVisible = false">取 消</el-button>
                <el-button type="primary" @click="passwordVisible = false">确 定</el-button>
            </div>
        </el-dialog>
<!--        修改邮箱dialog-->
        <el-dialog title="修改邮箱"
                    :visible.sync="emailVisible"
                    width="30%"
                    center>
            <el-form :model="emailForm" :rules="emailRuler" ref="emailForm">
                <el-form-item prop="email">
                    <el-input v-model="emailForm.email" autocomplete="off" placeholder="请输入绑定的邮箱"></el-input>
                </el-form-item>
                <el-form-item prop="sms">
                    <el-input v-model="emailForm.sms" autocomplete="off" placeholder="请输入验证码">
                        <template slot="append">
                            <el-button class="get-sms-bnt" :disabled="smsDisabled" @click.prevent="getSms('bind')" v-text="smsMsg" type="primary">{{smsMsg}}</el-button>
                        </template>
                    </el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="emailVisible = false">取 消</el-button>
                <el-button type="primary" @click="changeEmail('emailForm')">确 定</el-button>
            </div>
        </el-dialog>
<!--        修改手机号dialog-->
        <el-dialog title="修改手机号"
                   :visible.sync="mobileVisible"
                   width="30%"
                   center>
            <el-form :model="mobileForm" :rules="mobileRuler" ref="mobileForm">
                <el-form-item prop="mobile">
                    <el-input v-model="mobileForm.mobile" autocomplete="off" placeholder="请输入需要绑定的手机号"></el-input>
                </el-form-item>
                <el-form-item prop="sms">
                    <el-input v-model="mobileForm.sms" autocomplete="off" placeholder="请输入短信验证码">
                        <template slot="append">
                            <el-button class="get-sms-bnt" :disabled="smsDisabled" @click.prevent="getSms('bind')" v-text="smsMsg" type="primary">{{smsMsg}}</el-button>
                        </template>
                    </el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="mobileVisible = false">取 消</el-button>
                <el-button type="primary" @click="changeMobile('mobileForm')">确 定</el-button>
            </div>
        </el-dialog>
        <el-dialog title="身份验证"
                   :visible.sync="verifyVisible"
                   width="20%"
                   center>
            <el-form :model="verifyForm" :rules="codeRuler" ref="verifyForm">
                <el-form-item>
                    <el-select v-model="value" placeholder="请选择验证方式">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="sms">
                    <el-input v-model="verifyForm.sms" autocomplete="off" placeholder="请输入验证码">
                        <template slot="append">
                            <el-button class="get-sms-bnt" :disabled="smsDisabled" @click.prevent="getSms('verify')" v-text="smsMsg" type="primary">{{smsMsg}}</el-button>
                        </template>
                    </el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="verifyVisible = false">取 消</el-button>
                <el-button type="primary" @click="verify('verifyForm')">确 定</el-button>
            </div>
        </el-dialog>
        <el-backtop target=".page-component__scroll .el-scrollbar__wrap" :right="20"></el-backtop>
    </el-scrollbar>
</template>

<script>
import Login from 'components/user/login';
import Register from "components/user/register";
import {getToken, removeToken} from "@/utils/service/cookie";
import {getInfo, updateInfo} from "api/user";
import {errorTips} from "utils/tools/message";
import {getEmailSms, getSms, verify} from "api/utils";

export default {
    name: "index",
    inject: ['reload'],
    components: {Login, Register},
    data() {
        // 验证验证码
        let validateCode = (codeRuler, value, callback) => {
            if (value === ''){
                callback(new Error('请输入验证码'));
            }else if(value.length !== 6){
                callback( new Error('验证码为6位数字'))
            }else{callback()}
        };

        // 验证手机号格式
        let validateMobile = (mobileRuler, value,callback) =>{
            let pattern = /^1[3-9]\d{9}$/;
            if (value === ''){
                callback(new Error('请输入手机号'))
            }else if(!(pattern.test(value))){
                callback(new Error("手机号格式错误"))
            }else {
                callback();
            }
        };
        // 验证Email格式
        let validateEmail = (emailRuler, value,callback) =>{
            let pattern = /^([a-zA-Z0-9]+[_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|.]?)*[a-zA-Z0-9]+.[a-zA-Z]{2,4}$/;
            if (value === ''){
                callback(new Error('请输入邮箱'))
            }else if(!(pattern.test(value))){
                callback(new Error("邮箱格式错误"))
            }else {
                callback();
            }
        };

        return{
            isLogin: false,
            activeName: 'first',
            path: '/personal',
            username: '',
            email: '',
            mobile: '',
            changeName: '昵称',
            baseInfo: [],
            changeInfoVisible: false,
            passwordVisible: false,
            nicknameVisible: false,
            mobileVisible: false,
            emailVisible: false,
            verifyVisible: false,
            avatar: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
            nicknameForm:{
                nickname: ''
            },
            passwordForm: {
                password: '',
                passwordAgain: '',
            },
            emailForm: {
                email: '',
                sms: ''
            },
            mobileForm: {
                mobile: '',
                sms: ''
            },
            verifyForm: {
                sms: ''
            },
            change: '',
            options: [],
            value: '请选择验证类型',
            smsDisabled: false,
            loading: false,
            validate: '',
            residue: 60,
            smsMsg: '获取验证码',
            timer: null,
            checked: true,
            isVerify: false,
            codeRuler: {
                sms: [{validator: validateCode, trigger: 'blur'}],
            },
            mobileRuler: {
                sms: [{validator: validateCode, trigger: 'blur'}],
                mobile: [{validator: validateMobile, trigger: 'blur'}]
            },
            emailRuler: {
                sms: [{validator: validateCode, trigger: 'blur'}],
                email: [{validator: validateEmail, trigger: 'blur'}]
            }
        }
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
        login(){
            this.$store.dispatch('setLoginVisible', true);
        },
        register(){
            this.$store.dispatch('setRegisterVisible', true)
        },
        judgeLogin(){
            if (getToken()) {
                this.isLogin = true
                getInfo(localStorage.id).then(res => {
                    this.avatar = res['avatar']
                    this.username = res['nickname'] ? res['nickname'] : res['username']
                    this.mobile = res['mobile']
                    this.email = res['email']
                    this.options = []
                    if (this.email){this.options.push({'value': 'email', 'label': '邮箱验证'})}
                    if (this.mobile){this.options.push( {'value': 'mobile', 'label': '短信验证'})}
                    this.baseInfo = [
                        {"name": "用户名", 'content': res['username'], "change": false},
                        {"name": "昵称",   'content': res['nickname'], "change": true, "English": 'nickname'},
                        {"name": "手机号", 'content': res['mobile'], "change": true, "English": 'mobile'},
                        {"name": "邮箱",   'content': res['email'], "change": true, "English": 'email'},
                        {"name": "密码",   'content': "********", "change": true, "English": 'password'}]
                })
            }
        },
        // 根据不同按钮显示不同dialog
        changeInfo(val){
            if (val === '昵称'){
                this.nicknameVisible = true
            }else {
                if (this.mobile || this.email){
                    if (!this.isVerify){
                        this.verifyVisible = true
                        if (val === '手机号') {
                            this.change = 'mobile'
                        }else if(val === '邮箱'){
                            this.change = 'email'
                        }else {
                            this.change = 'password'
                        }
                    }else {
                        if (val === '手机号'){
                            this.mobileVisible = true
                        }else if(val === '邮箱'){
                            this.emailVisible = true
                        }else {
                            this.passwordVisible = true
                        }
                    }
                }else {
                    if (val === '手机号'){
                        this.mobileVisible = true
                    }else if (val === '邮箱'){
                        this.emailVisible = true
                    }else {
                        this.passwordVisible = true
                    }
                }
            }
        },
        // 登出
        logout(){
            this.$confirm('是否退出登录, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                removeToken()
                localStorage.removeItem("id")
                localStorage.removeItem('role')
                this.$message({
                    type: 'success',
                    message: '退出成功!'
                });
                this.reload()
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '取消退出'
                });
            });
        },

        // 修改昵称
        changeNickname(){
            updateInfo(localStorage.id,{"nickname": this.nicknameForm.nickname}).then(_ => {
                this.reload()
                this.nicknameVisible = false
                this.$message.success('修改/设置昵称成功')
            }).catch(err => {
                errorTips(err)
            })
        },
        // 获取验证码倒计时
        getSmsCountDown(){
            this.$message.success("短信已发送，请稍等片刻完成验证");
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
        },
        //获取验证码，进行身份验证
        getSms(val){
            if (val === 'verify') {
                if (this.value === 'mobile'){
                    getSms({"mobile": this.mobile, 'reset': true}).then(_ => {
                        this.getSmsCountDown()
                    }).catch(err => {errorTips(err)})
                }else  if(this.value === 'email'){
                    getEmailSms({"email": this.email, 'reset': true}).then(_ => {
                        this.getSmsCountDown()
                    }).catch(err => {errorTips(err)})
                }else {
                    this.$message.error("请选择正确的验证方式")
                }
            }else {
                if (this.change === 'mobile'){
                    getSms({"mobile": this.mobileForm.mobile}).then(_ => {
                        this.getSmsCountDown()
                    }).catch(err => {errorTips(err)})
                }else {
                    getEmailSms({"email": this.emailForm.email}).then(_ => {
                        this.getSmsCountDown()
                    }).catch(err => {errorTips(err)})
                }
            }

        },
        // 通过验证
        verify(form) {
            this.$refs[form].validate((valid) => {
                if (valid) {
                    let data = {
                        "method": this.value,
                        "code": this.verifyForm.sms
                    }
                    verify(data).then(_ => {
                        this.isVerify = true
                        this.verifyVisible = false
                        this.$message.success('身份验证成功')
                        clearInterval(this.timer);
                        this.smsMsg = "获取验证码";
                        this.residue = 60;
                        this.timer = null;
                        this.smsDisabled = false;
                        if (this.change === 'email'){
                            this.emailVisible = true
                        }else if(this.change === 'mobile'){
                            this.mobileVisible = true
                        }else {
                            this.passwordVisible = true
                        }
                    }).then(err => {
                        errorTips(err)})
                }else{
                    this.$message.error('输入信息格式错误，请检查重试');
                }
            })
        },
        // 修改手机号
        changeMobile(form){
            this.$refs[form].validate((valid) => {
                if (valid){
                    let data = {
                        'mobile': this.mobileForm.mobile,
                        'code': this.mobileForm.sms
                    }
                    updateInfo(localStorage.id, data).then(_ => {
                        this.reload()
                    }).catch(err => {errorTips(err)})
                }
            })
        },
        // 修改邮箱
        changeEmail(form){
            this.$refs[form].validate((valid) => {
                if (valid){
                    let data = {
                        'email': this.emailForm.email,
                        'code': this.emailForm.sms
                    }
                    updateInfo(localStorage.id, data).then(_ => {
                        this.reload()
                    }).catch(err => {errorTips(err)})
                }
            })
        }
    },
    mounted() {
        this.judgeLogin()
    },
}
</script>

<style lang="scss" scoped>
    .el-scrollbar {
        height: 100%;
        padding-top: 20px;
        margin: 0 20px;
        .personal-header {
            text-align: center;
        }
        .base-info {
            margin-top: 20px;

        }
        .baseInfo-item {
            margin-bottom: 10px;
            font-size: 14px;
        }
        .content {
            color: rgb(150, 156, 162);
        }
        .operation{
            margin-top: 20px;
        }
        .el-tabs {
            margin-top: 20px;
        }
        /deep/ .el-dialog{
            border-radius: 10px;
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
