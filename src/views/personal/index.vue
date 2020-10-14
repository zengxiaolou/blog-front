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
                        <el-col :span="4">{{value.name}}</el-col>
                        <el-col :span="6" v-if="value.content === 'username'">{{username|nullChange}}</el-col>
                        <el-col :span="6" v-if="value.content === 'nickname'">{{nickname|nullChange}}</el-col>
                        <el-col :span="6" v-if="value.content === 'mobile'">{{mobile|nullChange}}</el-col>
                        <el-col :span="6" v-if="value.content === 'email'">{{email|nullChange}}</el-col>
                        <el-col :span="6" v-if="value.content === 'password'">*******</el-col>

                        <el-col :span="6" v-if="value.change"><el-button type="text" size="mini" v-if="">修改</el-button></el-col>
                    </el-row>
                </el-card>
            </el-tab-pane>
            <el-tab-pane label="github" name="second">github</el-tab-pane>
            <el-tab-pane label="blog记录" name="third">blog记录</el-tab-pane>
        </el-tabs>
        <login :path="path"></login>
        <register :path="path"> </register>
        <el-backtop target=".page-component__scroll .el-scrollbar__wrap" :right="20"></el-backtop>
    </el-scrollbar>
</template>

<script>
import Login from 'components/user/login';
import Register from "components/user/register";
import {getToken, removeToken} from "@/utils/service/cookie";
import {mapGetters} from 'vuex'

export default {
    name: "index",
    inject: ['reload'],
    components: {Login, Register},
    data() {
        return{
            isLogin: false,
            activeName: 'first',
            path: '/personal',
            changeName: true,
            baseInfo: [
                {"name": "用户名", 'content': "username", "change": false},
                {"name": "昵称",   'content': "nickname", "change": true, "visible": 'nicknameVisible'},
                {"name": "手机号", 'content': "mobile", "change": true, "visible": 'mobileVisible'},
                {"name": "邮箱",   'content': "email", "change": true, "visible": 'emailVisible'},
                {"name": "密码",   'content': "password", "change": true, "visible": 'passwordVisible'}],
            mobileVisible: false,
            emailVisible: false,
            nicknameVisible: false,
            passwordVisible: false,
        }
    },
    computed: {
      ...mapGetters(['username', 'avatar', 'mobile', 'email', 'nickname'])
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
                this.$store.dispatch('getUserInfo')
            }
        },
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
    },
    mounted() {
        this.judgeLogin()
    }
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
