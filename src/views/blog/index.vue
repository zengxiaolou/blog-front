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
        <viewer :mainContent="blogInfo"></viewer>
        <el-backtop target=".page-component__scroll .el-scrollbar__wrap" :right="20"></el-backtop>
    </el-scrollbar>
</template>


<script>
    import baseSetting from "store/baseSetting";
    import viewer from "components/MarkdownEditor/viewer";
    export default {
        name: "blog",
        components: {viewer},
        data () {
            return {
                imgHost: baseSetting.QiNiuHost,
                blogInfo: baseSetting.blogInfo,
                carousel: ['python', 'golang', 'gnu', 'ubuntu', 'kernel', 'root', 'sudo', 'vim'],
            }
        },
        methods: {

        },
        mounted() {

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
