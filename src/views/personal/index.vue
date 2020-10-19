<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/9/30-12:38
INTRODUCTION    文件简介
-->

<template>
    <el-scrollbar class="page-component__scroll">
        <div class="personal-header" @click="changeAvatar()">
            <el-avatar :size="100" :src="avatar" ></el-avatar>
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
            <el-button type="info" @click="register" size="mini">找回密码</el-button>
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
            <el-tab-pane label="github" name="second">
                <el-card class="box-card">
                    <el-row :gutter="10" v-for="(value, name, index) in githubInfo" :key="index">
                        <el-col :span="4" class="baseInfo-item">{{name}}</el-col>
                        <el-col :span="6" class="baseInfo-item content">{{value|nullChange}}</el-col>
                    </el-row>
                    <el-row type="flex" justify="center" v-if="this.githubInfo === null">
                     <el-col :span="3"><el-link :underline="false" type="primary" :href="githubLogin">绑定github</el-link>
                     </el-col>
                    </el-row>
                </el-card>
            </el-tab-pane>
            <el-tab-pane label="点赞记录" name="third">
                <el-card class="box-card">
                    <el-row  class="comment-body" v-for="(value, index) in like" :key="index">
                        <router-link :to="'/detail/' + value['id']">
                            <el-col :span="8">{{value['title']}}</el-col>
                        </router-link>
                    </el-row>
                    <el-row type="flex" justify="center" class="comment-bottom" v-if="likeMore">
                        <el-col :span="24"><el-button type="text" size="mini" @click="getUserLike()">加载更多</el-button></el-col>
                    </el-row>
                </el-card>
            </el-tab-pane>
            <el-tab-pane label="评论记录" name="fourth">
                <el-card class="box-card">
                    <el-row class="comment-title">
                        <el-col :span="6">评论时间</el-col>
                        <el-col :span="8">评论文章</el-col>
                        <el-col :span="10">评论内容</el-col>
                    </el-row>
                    <el-row  class="comment-body" v-for="(value, index) in comments" :key="index">
                        <router-link :to="'/detail/' + value['article']['id']">
                            <el-col :span="6">{{value['created']|formatDateTime('YYYY-MM-DD HH:MM:SS')}}</el-col>
                            <el-col :span="8">{{value["article"]['title']}}</el-col>
                            <el-col :span="10">{{value['content']}}</el-col>
                        </router-link>
                    </el-row>
                    <el-row type="flex" justify="center" class="comment-bottom" v-if="commentMore">
                     <el-col :span="24"><el-button type="text" size="mini" @click="getComment()">加载更多</el-button></el-col>
                    </el-row>
                </el-card>
            </el-tab-pane>
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
            <el-form :model="passwordForm" :rules="passwordRuler" ref="passwordForm">
                <el-form-item prop="password">
                    <el-input v-model="passwordForm.password" autocomplete="off" placeholder="请输入密码" clearable show-password></el-input>
                </el-form-item>
                <el-form-item prop="passwordAgain">
                    <el-input v-model="passwordForm.passwordAgain" autocomplete="off" placeholder="请输入确认密码" clearable show-password></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="passwordVisible = false">取 消</el-button>
                <el-button type="primary" @click="changePassword('passwordForm')">确 定</el-button>
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
        <el-dialog title="修改头像"
                   :visible.sync="avatarVisible"
                   width="30%"
                   center>
            <el-upload
                :action=uploadHost
                ref="upload"
                :auto-upload=false
                :data=postData
                :on-error=uploadFail
                :on-success=uploadSuccess
                list-type="picture-card">
                <i slot="default" class="el-icon-plus"></i>
                <div slot="file" slot-scope="{file}">
                    <img
                        class="el-upload-list__item-thumbnail"
                        :src="file.url" alt="">
                    <span class="el-upload-list__item-actions">
                    <span
                        class="el-upload-list__item-preview"
                        @click="handlePictureCardPreview(file)">
                        <i class="el-icon-zoom-in"></i>
                    </span>
                    <span
                        v-if="!disabled"
                        class="el-upload-list__item-delete"
                        @click="handleUpload(file)">
                        <i class="el-icon-upload2"></i>
                    </span>
                    <span
                        v-if="!disabled"
                        class="el-upload-list__item-delete"
                        @click="handleRemove(file)">
                        <i class="el-icon-delete"></i>
                    </span>
                </span>
                </div>
            </el-upload>
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
import {getEmailSms, getQiNiuToken, getSms, verify} from "api/utils";
import baseSetting from "store/baseSetting";
import {getComment, getUserLike} from "api/operations";

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
        // 验证密码
        let validatePassword = (passwordRuler, value,callback) =>{
            if (value === ''){
                callback(new Error('请输入密码'))
            }else if(value.length<6){
                callback(new Error("账号长度不能小于6"))
            }else {
                callback();
            }
        };
        // 验证密码
        let validatePasswordAgain = (passwordRuler, value,callback) =>{
            if (value !== this.passwordForm.password){
                callback(new Error('两次密码不一致'))
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
            githubInfo: [],
            changeInfoVisible: false,
            passwordVisible: false,
            nicknameVisible: false,
            mobileVisible: false,
            emailVisible: false,
            verifyVisible: false,
            avatarVisible: false,
            avatar: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
            githubLogin: 'http://blog.messstack.com/login/github/',
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
            },
            passwordRuler: {
                password:[{validator: validatePassword, trigger: "blur"}],
                passwordAgain:[{validator: validatePasswordAgain, trigger: "blur"}],
            },
            dialogImageUrl: '',
            dialogVisible: false,
            disabled: false,
            uploadHost: 'http://upload-z2.qiniup.com',
            postData: {
                token: "",
                key: "",
            },
            cover: '',
            comments: [],
            commentSize: 20,
            commentPage: 1,
            commentMore: true,
            like: [],
            likePage: 1,
            likeSize: 20,
            likeMore: true,
        }
    },
    methods: {
        handleClick(tab, event) {

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
                    this.githubInfo = res['github_info']
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
        },
        // 修改密码
        changePassword(form){
            this.$refs[form].validate((valid) => {
                if (valid){
                    let data = {'password': this.passwordForm.password}
                    updateInfo(localStorage.id, data).then(_ => {
                        this.$message.success('修改密码成功，即将退出，请使用新密码重新登录')
                        removeToken()
                        localStorage.removeItem('role')
                        localStorage.removeItem('id')
                        this.reload()
                    }).catch(err => {errorTips(err)})
                }
            })
        },
        // 修改头像
        changeAvatar(){
            this.avatarVisible = !this.avatarVisible
        },
        handleRemove(file) {
            this.$refs.upload.handleRemove(file, this.fileList)
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        handleUpload(file) {
            let timestamp = new Date().getTime();
            let new_name = timestamp + file.name;
            getQiNiuToken({name:new_name}).then((res) => {
                this.$message.info("开始上传图片");
                this.postData.key = new_name;
                this.postData.token = res['token'];
                this.$refs.upload.submit();
                this.cover = baseSetting.QiNiuHost + new_name
            }).catch(err =>{
                errorTips(err);
            });
        },
        uploadFail(res){
            this.$message.error(res)
        },
        uploadSuccess(){
            this.$message.success('图片上传成功');
            updateInfo(localStorage.id, {'avatar': this.cover}).then(_ => {
                this.$message.success('头像修改成功')
                this.avatarVisible = false
                this.reload()
            }).catch(err => {errorTips(err)})

        },
        getComment(){
            if (localStorage.id === undefined){
                this.commentMore = false
                return
            }
            let params = {
                'user__id': localStorage.id,
                'page': this.commentPage,
                'size': this.commentSize,
            }
            getComment(params).then(res =>{
                this.commentPage += 1
                this.comments = res['results']
                this.commentMore = res['next'] !== null
            }).catch(err => errorTips(err))
        },
        getUserLike(){
            if (localStorage.id === undefined){
                this.likeMore = false
                return
            }
            let params = {
                'page': this.likePage,
                'size': this.likeSize,
            }
            getUserLike(params).then(res => {
                this.like = res['results'];
                this.likePage += 1
                this.likeMore = res['next'] !== null
            }).catch(err => {errorTips(err)})
        }
    },
    mounted() {
        this.judgeLogin();
        this.getComment()
        this.getUserLike()
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
            .comment-title {
                font-size: 18px;
                margin-bottom: 20px;
            }
            .comment-body {
                font-size: 14px;
                padding:  10px 0;
                color: #409eff;
            }
            .comment-bottom {
                text-align: center;
            }
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
