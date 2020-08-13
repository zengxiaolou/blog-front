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
        <div v-for="(value, index) in categoryArray" :key="index" class="text item category">
            {{value.name}} - {{value.num}}

        </div>
    </el-card>
</template>

<script>
    export default {
        name: "articles",
        data() {
            return {
                categoryArray: [
                    {ID: 1, name: "Python", num: 0 },
                    {ID: 2, name: "Golang", num: 0 },
                    {ID: 3, name: "Linux",  num: 0 },
                    {ID: 4, name: "Vue",    num: 0 },
                    {ID: 5, name: "Tools",  num: 0 },
                    {ID: 6, name: "DB",     num: 0 },
                    {ID: 7, name: "Docker", num: 0 },
                    {ID: 8, name: "Other",  num: 0 }
                ]
            }
        }
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
        /deep/ .el-card__body {
            padding: 0;
        }
        .category {
            padding: 0 5px;
            border-bottom: 1px solid #99a9bf;
        }
    }
</style>
