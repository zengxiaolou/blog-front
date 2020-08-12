<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/8/12-13:36
INTRODUCTION    文件简介
-->

<template>
    <ul class="infinite-list"   v-infinite-scroll="load" >
        <li v-for="i in count" class="infinite-list-item">
            <div class="content">
                <el-image :src="url" fit="contain"></el-image>
                <el-row  :gutter="20" class="introduction">
                    <el-col :span="4" class="public-date">2020年08月12日</el-col>
                    <el-col :span="2" class="word-count">2k字</el-col>
                    <el-col :span="3" class="read-time">大约2分钟</el-col>
                    <el-col :span="3">阅读数</el-col>
                    <el-col :span="3">评论数</el-col>
                    <el-col :span="3">点赞数</el-col>
                </el-row>
                <p class="summary">心中的抑郁就像只黑狗，一有机会就咬住我不放。——丘吉尔</p>
            </div>

        </li>
    </ul>
</template>

<script>
    export default {
        name: "home",
        data () {
            return {
                count: 0,
                url: require("../../../../assets/images/others/horizontal.png")

            }
        },
        methods: {
            load () {
                this.count += 2
            }
        }
    }
</script>

<style lang="scss" scoped>
    .infinite-list {
        margin-top: 10px;
        li {
            margin-top: 10px;
            width: 100%;
            list-style-type: none;
            .content {
                width: 94%;
                margin: 0 auto;
                border-radius: 25px;
                padding-bottom: 10px;

                /deep/ .el-image {
                    width: 100%;
                    display: block;
                    border-radius: 25px;
                    margin: 0 auto;
                }
                .introduction{
                    margin-top: 10px;
                    margin-bottom: 10px;
                    .public-date {
                        border-radius: 25px;
                        background-color: rgba(254, 228, 231, 0.8 );
                        text-align: center;
                        color: #FA4A63;
                        margin-right: 10px;
                    }
                    .word-count {
                        border-radius: 25px;
                        background-color: rgba(254, 233, 233, 0.8 );
                        text-align: center;
                        color: #FB8147;
                        margin-right: 10px;
                    }
                    .read-time {
                        border-radius: 25px;
                        background-color: rgba(255, 243, 222, 1 );
                        text-align: center;
                        color: #F9B029;
                        margin-right: 10px;
                    }
                }
            }
        }
    }
</style>
