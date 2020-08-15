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
        <router-link to="">
            <el-tag v-for="(value, index) in tags" :key="index">
                {{value}}
            </el-tag>
        </router-link>
    </el-card>
</template>

<script>
    export default {
        name: "label_cloud",
        data() {
            return {
                tags:["# 有用", "# 真好", "# 有帮助", "# 有错"]
            }
        }
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
