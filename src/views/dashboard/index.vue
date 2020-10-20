<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/10/20-17:24
INTRODUCTION    文件简介
-->

<template>
    <el-scrollbar class="page-component__scroll">
        <el-row :gutter="20">
         <el-col :span="6" v-for="i in 4">
             <el-card class="box-card">
                 <div v-for="o in 4" :key="o" class="text item">
                     {{ '列表内容 ' + o }}
                 </div>
             </el-card>
         </el-col>
        </el-row>
        <el-backtop target=".page-component__scroll .el-scrollbar__wrap" :right="20"></el-backtop>
    </el-scrollbar>
</template>

<script>
export default {
    name: "index",
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
    .el-scrollbar {
        height: 100%;
        padding-top: 20px;
        margin: 0 20px;
    }
    /deep/ .el-scrollbar__wrap {
        overflow-x:hidden;
        height: 100%;
    }
    .page-component__scroll{
        height: 100%;
    }
</style>
