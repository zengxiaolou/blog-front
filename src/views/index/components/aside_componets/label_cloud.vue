<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/8/11-23:05
INTRODUCTION    文件描述
-->
<template>
    <el-card class="box-card">
        <div slot="header" >
            <span>标签☁️</span>
        </div>
        <el-row>
            <el-col :span="8"><el-tag>有趣</el-tag></el-col>
            <el-col :span="8"><el-tag>有趣</el-tag></el-col>
            <el-col :span="8"><el-tag>有趣</el-tag></el-col>
        </el-row>
    </el-card>
</template>

<script>
    export default {
        name: "label_cloud"
    }
</script>

<style lang="scss" scoped>
    .el-card {
        margin: 20px auto;
        width: 80%;
        border-radius: 16px;
        /deep/ .el-card__header{
            padding: 5px 10px;
            font-size: 1.2em;
            font-weight: 500;
        }
    }
</style>
