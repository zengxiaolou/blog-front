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
                    width="30%"
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
                   width="30%"
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
            <el-form :model="emailForm">
                <el-form-item>
                    <el-input v-model="emailForm.email" autocomplete="off" placeholder="请输入密码"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="emailVisible = false">取 消</el-button>
                <el-button type="primary" @click="emailVisible = false">确 定</el-button>
            </div>
        </el-dialog>
<!--        修改手机号dialog-->
        <el-dialog title="修改手机号"
                   :visible.sync="mobileVisible"
                   width="30%"
                   center>
            <el-form :model="mobileForm">
                <el-form-item>
                    <el-input v-model="mobileForm.mobile" autocomplete="off" placeholder="请输入密码"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="mobileVisible = false">取 消</el-button>
                <el-button type="primary" @click="moibileVisible = false">确 定</el-button>
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

export default {
    name: "index",
    inject: ['reload'],
    components: {Login, Register},
    data() {
        return{
            isLogin: false,
            activeName: 'first',
            path: '/personal',
            username: '',
            changeName: '昵称',
            baseInfo: [],
            changeInfoVisible: false,
            passwordVisible: false,
            nicknameVisible: false,
            mobileVisible: false,
            emailVisible: false,
            avatar: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
            nicknameForm:{
                nickname: ''
            },
            passwordForm: {
                password: '',
                passwordAgain: '',
            },
            emailForm: {
                email: ''
            },
            mobileForm: {
                mobile: ''
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
                    this.username = res['username']
                    this.avatar = res['avatar']
                    this.baseInfo = [
                        {"name": "用户名", 'content': res['username'], "change": false},
                        {"name": "昵称",   'content': res['nickname'], "change": true, "English": 'nickname'},
                        {"name": "手机号", 'content': res['mobile'], "change": true, "English": 'mobile'},
                        {"name": "邮箱",   'content': res['email'], "change": true, "English": 'email'},
                        {"name": "密码",   'content': "********", "change": true, "English": 'password'}]
                })
            }
        },
        changeInfo(val){
            if (val === '昵称'){
                this.nicknameVisible = true
            }else if (val === '手机号'){
                this.changeName = '修改' + val
                this.placeholder = '请输入新' + val
            }else if (val === '邮箱'){
                this.changeName = '修改' + val
                this.placeholder = '请输入新' + val
            }else if (val === '密码') {
                this.changeName = '修改' + val
                this.placeholder = '请输入新' + val
            }
            if (val === '密码'){
                this.changePasswordVisible = true
            }else {
                this.changeInfoVisible = true
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
            updateInfo(localStorage.id,{"nickname": this.nicknameForm.nickname}).then(res => {
               console.log(res)
                this.nicknameVisible = false
            }).catch(err => {
                errorTips(err)
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
    }
    /deep/ .el-scrollbar__wrap {
        overflow-x:hidden;
        height: 100%;
    }
    .page-component__scroll{
        height: 100%;
    }
</style>
