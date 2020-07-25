<!--
AUTHOR:  zeng_xiao_yu
GITHUB:  https://github.com/zengxiaolou
EMAIL:   zengevent@gmail.com
TIME:    2020/5/10-17:36
-->

<template>
    <div class="aside-area">
        <el-row >
            <el-avatar :size="150" :src="circleUrl"></el-avatar>
        </el-row>
    </div>

</template>

<script>
    export default {
        name: "aside",
        data(){
            return{
                circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
            }
        },
    }
</script>

<style lang="scss" scoped>
    .aside-area{
        width: 100%;
        .el-avatar {
            width: 100%;
            margin: 0 auto;

        }
    }
</style>
