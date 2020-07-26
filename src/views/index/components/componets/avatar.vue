<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/7/26-09:21
INTRODUCTION    头像组件
-->
<template>
    <div class="avatar-box">
        <el-avatar :size="150" :src="circleUrl"></el-avatar>
    </div>
</template>

<script>
    export default {
        name: "avatar",
        data(){
            return{
                circleUrl: "https://avatars3.githubusercontent.com/u/44358506?s=400&u=2ff47971a21d101b277a3b55b2992cde6249af02&v=4",
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
