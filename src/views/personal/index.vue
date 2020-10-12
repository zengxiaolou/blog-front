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
            username | last-login
            <div class="operation">
                <el-button type="danger">登 出</el-button>
            </div>
        </div>
        <div class="personal-header operation"  v-else>
            <el-button type="danger">登 录</el-button>
            <el-button type="primary">注 册</el-button>
        </div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
        <login></login>
        <register> </register>
        <el-backtop target=".page-component__scroll .el-scrollbar__wrap" :right="20"></el-backtop>
    </el-scrollbar>
</template>

<script>
import Login from 'components/user/login';
import Register from "components/user/register";
import {getToken, removeToken} from "@/utils/service/cookie";
import {captcha} from "api/utils";
export default {
    name: "index",
    components: {Login, Register},
    data() {
        return{
            avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
            isLogin: true,
            activeName: 'second'
        }
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
        showLogin() {
            if ( getToken() === undefined){
                this.$store.dispatch('setLoginVisible', true);
            } else {
                this.$confirm('是否退出登录, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    removeToken()
                    localStorage.removeItem("id")
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
            }
        },
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
