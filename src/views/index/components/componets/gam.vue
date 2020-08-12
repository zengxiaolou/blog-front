<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/8/9-22:20
INTRODUCTION    我的社交
-->

<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>社交直达</span>
        </div>
        <el-row>
            <el-col :span="6"><el-avatar :size="size" :src="circleUrl"></el-avatar></el-col>
            <el-col :span="6"><el-avatar :size="size" :src="circleUrl"></el-avatar></el-col>
            <el-col :span="6"><el-avatar :size="size" :src="circleUrl"></el-avatar></el-col>
            <el-col :span="6"><el-avatar :size="size" :src="circleUrl"></el-avatar></el-col>
        </el-row>
        <el-row>
            <el-col :span="6"><el-avatar :size="size" :src="circleUrl"></el-avatar></el-col>
            <el-col :span="6"><el-avatar :size="size" :src="circleUrl"></el-avatar></el-col>
            <el-col :span="6"><el-avatar :size="size" :src="circleUrl"></el-avatar></el-col>
            <el-col :span="6"><el-avatar :size="size" :src="circleUrl"></el-avatar></el-col>
        </el-row>
    </el-card>
</template>

<script>
    export default {
        name: "gam",
        data(){
            return{
                size: "small",
                circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
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
    }

</style>
