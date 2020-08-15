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
            <el-col :span="8">文章</el-col>
            <el-col :span="8">标签</el-col>
            <el-col :span="8">分类</el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :span="8">60</el-col>
            <el-col :span="8">20</el-col>
            <el-col :span="8">08</el-col>
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
            font-weight: 500;
            .el-col {
                text-align: center;
            }
        }

    }
</style>
