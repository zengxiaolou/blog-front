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
<!--        <el-row>-->
<!--            <el-col :span="12"><el-tag># 有趣</el-tag></el-col>-->
<!--            <el-col :span="12"><el-tag># 有趣</el-tag></el-col>-->
<!--        </el-row>-->
        <el-tag># 有趣dehen</el-tag>
        <el-tag># 有用</el-tag>
        <el-tag># 有趣eee</el-tag>
        <el-tag># 有用</el-tag>
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
            padding: 10px;
            font-size: 1.2em;
            font-weight: 500;
        }
        /deep/ .el-card__body {
            padding: 5px 5px;
            .el-tag {
                border-radius: 25px;
                margin-right: 10px;
                margin-top: 5px;
            }
        }

    }
</style>
