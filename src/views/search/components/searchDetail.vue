<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/9/9-11:45
INTRODUCTION    文件简介
-->

<template>
    <el-card>
        <router-link :to="'/detail/' + article.id">
            <span class="title">{{article.title}}</span>
            <span class="summary">摘要： {{article.summary}}</span>
            <el-row>
                <el-col :span="4"><span class="category">分类：{{article.category.category}}</span></el-col>
                <el-col :span="20" class="category">标签：<el-tag v-for="(value, index) in article.tag" :key="index" >#{{value.tag}}</el-tag></el-col>
            </el-row>
            <el-row  :gutter="20" class="introduction">
                <el-col :span="4" class="introduction-col public-date"><i class="icon iconfont icon-date"></i>{{article.created|formatDateTime('YYYY-MM-DD')}}</el-col>
                <el-col :span="3" class="introduction-col word-count"><i class="icon iconfont icon-str"></i>{{"总共"+ article.str_num + "字"}}</el-col>
                <el-col :span="3" class="introduction-col read-time"><i class="icon iconfont icon-time"></i>{{"阅读时间" + article['reading_time'] + "分"}}</el-col>
                <el-col :span="2" class="introduction-col read-num"><i class="icon iconfont icon-view"></i>{{article['view']}}</el-col>
                <el-col :span="2" class="introduction-col read-comment"><i class="icon iconfont icon-comment"></i>{{article['comment']}}</el-col>
                <el-col :span="2" class="introduction-col read-like"><i class="icon iconfont icon-like"></i>{{article.like}}</el-col>
            </el-row>
        </router-link>
    </el-card>
</template>

<script>
    export default {
        name: "searchDetail",
        props: ['article'],
        date(){
            return{

            }
        },

    }
</script>

<style lang="scss" scoped>
    .el-card{
        background-color: rgba(255,255,255, 0.3);
        margin-bottom: 10px;
        border-radius: 25px;
        /deep/.el-card__body{
            padding: 10px 20px;
        }
        .title {
            font-size: 18px;
            color: #00A0F9;
            display: block;
            margin-bottom: 10px;
        }
        .summary{
            font-size: 14px;
            color: #666666;
            display: block;
            margin-bottom: 10px;
        }
        .category{
            font-size: 12px;
            color: #666666;
            .el-tag{
                margin-right: 10px;
            }
        }
        .introduction {
            margin-top: 10px;
            margin-bottom: 10px;
            font-size: 14px;
            font-weight: 500;

            i {
                padding: 0 5px;
            }

            .introduction-col {
                padding: 5px 0;
                border-radius: 25px;
                text-align: center;
                margin-right: 10px;
            }

            .public-date {
                margin-left: 20px;
                background-color: rgba(254, 228, 231, 0.8);
                color: #FA4A63;

                i {
                    font-size: 12px;
                }
            }

            .word-count {
                background-color: rgba(254, 233, 233, 0.8);
                color: #FB8147;

                i {
                    font-size: 15px;
                    font-weight: 600;
                }
            }

            .read-time {
                background-color: rgba(255, 243, 222, 1);
                color: #F9B029;

                i {
                    font-size: 15px;
                    font-weight: 600;
                }
            }

            .read-num {
                background-color: rgba(204, 149, 96, 0.15);
                color: #FF9B39;
            }

            .read-comment {
                background-color: rgba(26, 152, 255, .15);
                color: #1a98ff;

            }

            .read-like {
                background-color: rgba(255, 78, 106, .15);
                color: #ff4e6a;
            }
        }
    }
</style>
