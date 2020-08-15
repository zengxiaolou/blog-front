<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/7/26-09:21
INTRODUCTION    头像组件
-->
<template>
    <div class="avatar-box">
        <router-link to="/index">
            <el-avatar :size="150" :src="avatar"></el-avatar>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "avatar",
        data(){
            return{
                avatar: require("../../../../assets/images/others/avatar.jpeg"),
            }
        },
    }
</script>

<style lang="scss" scoped>
    .avatar-box {
        width: 100%;
        height: 200px;
        .el-avatar {
            width: 150px;
            height: 150px;
            margin-top: 30px;
            margin-left: 45px;
        }
    }
</style>
