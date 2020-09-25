<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/8/16-00:19
INTRODUCTION    文件描述
-->
<template>
    <div class="content">
        <div class="content-header">
            <router-link :to=path>
                <el-image :src=article.cover fit="contain"></el-image>
                <h1 class="content-title">{{article.title}}</h1>
            </router-link>
        </div>
        <el-row  :gutter="20" class="introduction">
            <el-col :span="3" class="introduction-col public-date"><i class="icon iconfont icon-date"></i>{{article.created|formatDateTime('YYYY-MM-DD')}}</el-col>
            <el-col :span="3" class="introduction-col word-count"><i class="icon iconfont icon-str"></i>{{"总共"+ article.str_num + "字"}}</el-col>
            <el-col :span="4" class="introduction-col read-time"><i class="icon iconfont icon-time"></i>{{"阅读时间" + article['reading_time'] + "分"}}</el-col>
            <el-col :span="2" class="introduction-col read-num"><i class="icon iconfont icon-view"></i>{{article['views_num']}}</el-col>
            <el-col :span="2" class="introduction-col read-comment"><i class="icon iconfont icon-comment"></i>{{article['comments_num']}}</el-col>
            <el-col :span="2" class="introduction-col read-like"><i class="icon iconfont icon-like"></i>{{article['like_user']}}</el-col>
        </el-row>
        <p class="summary">{{article.summary}}</p>
    </div>
</template>

<script>

    export default {
        name: "article_preview",
        props: ['article'],
        data() {
            return {
                path: '/detail/' + this.article.id
            }
        },
    }
</script>

<style lang="scss" scoped>
    .content {
        width: 96%;
        margin: 0 auto;
        border-radius: 25px;
        padding-bottom: 10px;
        padding-top: 20px;
        .content-header {
            position: relative;

            /deep/ .el-image {
                width: 100%;
                display: block;
                border-radius: 25px;
                margin: 0 auto;
            }

            .content-title {
                position: absolute;
                bottom: 10px;
                left: 20px;
                z-index: 1;
                color: #ffffff;
                font-weight: 900;
                font-size: 2.5em;
                width: 100%;
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
                background-color: rgba(51, 213, 122, .15);
                color: #33D57A;
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

        .summary {
            margin-left: 20px;
        }
    }
</style>
