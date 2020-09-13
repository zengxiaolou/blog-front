<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/7/26-09:21
INTRODUCTION    头像组件
-->
<template>
    <div class="avatar-box">
        <el-button type="text" @click="showLogin">
            <el-avatar :size="150" :src="avatar" ></el-avatar>
        </el-button>
        <login :loginVisible="loginVisible"></login>
    </div>
</template>

<script>
import Login from '@/components/user/login'
    export default {
        inject: ['reload'],
        components: {Login},
        name: "avatar",
        data(){
            return{
                avatar: require("../../../../assets/images/others/avatar.jpeg"),
                loginVisible: false,
            }
        },
        methods: {
            showLogin(){
                this.loginVisible = true
            },
        },
        mounted() {
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
    }
</style>
