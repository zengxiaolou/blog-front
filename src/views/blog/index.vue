<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/8/15-10:33
INTRODUCTION    文件描述
-->
<template>
    <el-scrollbar class="page-component__scroll">
        <el-carousel :interval="4000" type="card" height="250px">
            <el-carousel-item v-for="item in carousel" :key="item">
                <el-image
                    :src="imgHost + item + '.png'"
                    fit="contain"></el-image>
            </el-carousel-item>
        </el-carousel>
        <div class="content">
            <h1>博客简介</h1>
            <el-divider content-position="left"><span class="strip"></span></el-divider>
            <div class="brief">
                <p > &nbsp; &nbsp; 搭建blog在我开始编程时，便放在了计划之中，但是困于自己能力不足，而心比天高，还有就是生活所迫。拖延至今天才勉强将 blog的基本框架搭完。<br>
                    &nbsp; &nbsp; 今后的时间我将慢慢的增加功能和优化目前这个blog项目，使之好看且使用。同时记录自己作为一个码农，在开发过程中遇到的困难与解决的思路、笔记和好用的工具推荐等等</p>
            </div>
        </div>
        <el-backtop target=".page-component__scroll .el-scrollbar__wrap" :right="20"></el-backtop>
    </el-scrollbar>
</template>


<script>
    import baseSetting from "store/baseSetting";
    export default {
        name: "blog",
        data () {
            return {
                imgHost: baseSetting.QiNiuHost,
                carousel: ['python', 'golang', 'gnu', 'ubuntu', 'kernel', 'root', 'sudo', 'vim'],
            }
        }
    }
</script>

<style lang="scss" scoped>
    .el-scrollbar {
        height: 100%;
        padding-top: 20px;
        margin: 0 10px;
        .el-divider{
            margin: 0;
        }
    }
    /deep/ .el-scrollbar__wrap {
        overflow-x:hidden;
    }
</style>
