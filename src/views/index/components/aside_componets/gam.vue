<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/8/9-22:20
INTRODUCTION    我的社交
-->

<template>
    <el-card class="box-card">
        <div slot="header" >
            <span>社交直达</span>
        </div>
        <el-row>
            <el-col :span="6"><a class="gam-icon" :href="github" target="_blank">
                <el-avatar :size="size" icon="icon iconfont icon-github"></el-avatar></a>
            </el-col>
            <el-col :span="6"><a class="gam-icon" :href="bilibili" target="_blank">
                <el-avatar :size="size" icon="icon iconfont icon-bilibiliB"></el-avatar></a>
            </el-col>
            <el-col :span="6"><a class="gam-icon" :href="zhihu" target="_blank">
                <el-avatar :size="size" icon="icon iconfont icon-zhihu"></el-avatar></a>
            </el-col>
            <el-col :span="6"><a class="gam-icon" :href="stack" target="_blank">
                <el-avatar :size="size" icon="icon iconfont icon-stack-overflow"></el-avatar></a>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="6"><a class="gam-icon" :href="leetcode" target="_blank">
                <el-avatar :size="size" icon="icon iconfont icon-leetcode"></el-avatar></a>
            </el-col>
            <el-col :span="6"><a class="gam-icon" :href="a" target="_blank">
                <el-avatar :size="size" icon="icon iconfont icon-wechat"></el-avatar></a>
            </el-col>
            <el-col :span="6"><a class="gam-icon" :href="qq" target="_blank">
                <el-avatar :size="size" icon="icon iconfont icon-QQ"></el-avatar></a>
            </el-col>
        </el-row>
    </el-card>
</template>

<script>
    export default {
        name: "gam",
        data(){
            return{
                size: "small",
                github: "https://github.com/zengxiaolou",
                stack: "https://stackoverflow.com/users/12066502/event-zeng",
                bilibili: "https://space.bilibili.com/207928746",
                zhihu: "https://www.zhihu.com/people/xiao-lu-63-18-15",
                leetcode: "https://leetcode-cn.com/u/zengxiaolou/"

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
