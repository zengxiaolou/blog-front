<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/8/12-13:25
INTRODUCTION    文件简介
-->

<template>
    <el-scrollbar>
        <my-home></my-home>
    </el-scrollbar>
</template>

<script>
    import myHome from "./home_componets/home"
    export default {
        name: "home",
        components: {myHome}
    }
</script>

<style lang="scss" scoped>
    * { margin:0; padding:0; }
    .el-scrollbar {
        height: 100%;
    }
</style>
