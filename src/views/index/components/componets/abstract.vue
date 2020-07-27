<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/7/26-16:43
INTRODUCTION    文章摘要
-->
<template>
    <div class="abstract">
        <el-row :gutter="10">
            <el-col :span="8"><a href="">文章</a></el-col>
            <el-col :span="8"><a href="">标签</a></el-col>
            <el-col :span="8"><a href="">分类</a></el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :span="8"><a href="">60</a></el-col>
            <el-col :span="8"><a href="">20</a></el-col>
            <el-col :span="8"><a href="">5</a></el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "abstract"
    }
</script>

<style lang="scss" scoped>
    .abstract {
        margin-top: 20px;
        width: 98%;
        height: 100px;
        .el-row{
            padding: 0 30px;
            .el-col {
                text-align: center;
            }
        }

    }
</style>
