<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/7/26-17:26
INTRODUCTION    菜单组件
-->
<template>
    <div class="my-menu">
        <el-menu
                default-active="1"
                router
                class="el-menu-vertical">
            <el-menu-item index="1">
                <i class="icon iconfont icon-home"></i>
                <span slot="title">返回首页</span>
            </el-menu-item>
            <el-menu-item index="2">
                <i class="icon iconfont icon-archive"></i>
                <span slot="title">文章归档</span>
            </el-menu-item>
            <el-menu-item index="3" >
                <i class="icon iconfont icon-about"></i>
                <span slot="title">关于博客</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="icon iconfont icon-friend"></i>
                <span slot="title">我的朋友</span>
            </el-menu-item>
            <el-menu-item index="5">
                <i class="icon iconfont icon-coffee"></i>
                <span slot="title">请我喝茶</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "menus",
        data() {
            return{

            }
        },
        methods: {


        },

    }
</script>

<style lang="scss" scoped>
    /deep/ .el-menu {
        margin: 0 auto ;
        border-right: none;
    }
    .el-menu-vertical{
        width: 100%;
        .el-menu-item{
            font-size: 16px;
            i{
                font-size: 20px;
                margin-right: 10px
            }
        }
    }
</style>
