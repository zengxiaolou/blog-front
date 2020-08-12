<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/8/12-12:54
INTRODUCTION    文件简介
-->

<template>
    <el-card class="box-card">
        <div slot="header" >
            <span>文章分类</span>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
        </div>
    </el-card>
</template>

<script>
    export default {
        name: "articles"
    }
</script>

<style lang="scss" scoped>
    .el-card {
        margin: 0 auto;
        width: 80%;
        border-radius: 16px;
    /deep/ .el-card__header{
        padding: 5px 10px;
        font-size: 1.2em;
        font-weight: 500;
    }
    }
</style>
