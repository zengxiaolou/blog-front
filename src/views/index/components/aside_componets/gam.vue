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
            <el-col :span="6">
                <el-tooltip class="item" effect="light" content="gihub" placement="top-end">
                    <a class="gam-icon" :href="github" target="_blank">
                    <el-avatar :size="size" icon="icon iconfont icon-github" class="gam-github"></el-avatar></a>
                </el-tooltip>
            </el-col>
            <el-col :span="6">
                <el-tooltip class="item" effect="light" content="哔哩哔哩" placement="top-end">
                    <a class="gam-icon" :href="bilibili" target="_blank">
                    <el-avatar :size="size" icon="icon iconfont icon-bilibiliB" class="gam-bilibili"></el-avatar></a>
                </el-tooltip>
            </el-col>
            <el-col :span="6">
                <el-tooltip class="item" effect="light" content="知乎" placement="top-end">
                    <a class="gam-icon" :href="zhihu" target="_blank">
                    <el-avatar :size="size" icon="icon iconfont icon-zhihu" class="gam-zhihu"></el-avatar></a>
                </el-tooltip>
            </el-col>
            <el-col :span="6">
                <el-tooltip class="item" effect="light" content="stack-overflow" placement="top-end">
                    <a class="gam-icon" :href="stack" target="_blank">
                    <el-avatar :size="size" icon="icon iconfont icon-stack-overflow" class="gam-stack"></el-avatar></a>
                </el-tooltip>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="6">
                <el-tooltip class="item" effect="light" content="leetcode" placement="bottom-end">
                    <a class="gam-icon" :href="leetcode" target="_blank">
                    <el-avatar :size="size" icon="icon iconfont icon-leetcode" class="gam-leetcode"></el-avatar></a>
                </el-tooltip>
            </el-col>
            <el-col :span="6">
                <el-tooltip class="item" effect="light" content="微信" placement="bottom-end">
                        <el-avatar :size="size" icon="icon iconfont icon-wechat" class="gam-wechat"></el-avatar>
                </el-tooltip>
            </el-col>
            <el-col :span="6">
                <el-tooltip class="item" effect="light" content="QQ" placement="bottom-end">
                    <el-avatar :size="size" icon="icon iconfont icon-QQ" class="gam-qq"></el-avatar>
                </el-tooltip>

            </el-col>
        </el-row>
    </el-card>
</template>

<script>
    export default {
        name: "gam",
        data(){
            return{
                size: "medium",
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
        /deep/ .el-card__body {
            padding: 10px 10px;
            .gam-github {
                color: black;
                background-color: rgba(25,23,23,.1);
            }
            .gam-bilibili {
                color: #e76a8d;
                background-color: rgba(231,106,141,.1);
            }
            .gam-zhihu {
                color: #1e88e5;
                background-color: rgba(30,136,229,.1);
            }
            .gam-stack {
                color: #FC732D;
                background-color: rgba(252,150,97,.1);
            }

            .gam-leetcode {
                color: #FF9B39;
                background-color: rgba(204,149,96,.1);
            }
            .gam-qq {
                color: #00A0F9;
                background-color: rgba(111,201,251,.2);
            }
            .gam-wechat {
                color: #00c15e;
                background-color: rgba(0,219,107,.2);
            }

        }

    }

</style>
