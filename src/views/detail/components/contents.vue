<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/9/8-10:55
INTRODUCTION    文件简介
-->

<template>
    <div class="content">
        <div class="content-header">
            <el-image :src=article.cover fit="contain"></el-image>
            <h1 class="content-title">{{article.title}}</h1>
        </div>
        <el-row  :gutter="20" class="introduction">
            <el-col :span="3" class="introduction-col public-date"><i class="icon iconfont icon-date"></i>{{article.created|formatDateTime('YYYY-MM-DD')}}</el-col>
            <el-col :span="3" class="introduction-col word-count"><i class="icon iconfont icon-str"></i>{{"总共"+ article.str_num + "字"}}</el-col>
            <el-col :span="4" class="introduction-col read-time"><i class="icon iconfont icon-time"></i>{{"阅读时间" + article['reading_time'] + "分"}}</el-col>
            <el-col :span="2" class="introduction-col read-num"><i class="icon iconfont icon-view"></i>{{view}}</el-col>
            <el-col :span="2" class="introduction-col read-comment"><i class="icon iconfont icon-comment"></i>{{article['comments_num']}}</el-col>
            <el-col :span="2" class="introduction-col read-like"><i class="icon iconfont icon-like"></i>{{like}}</el-col>
        </el-row>
        <div class="main-content">
            <viewer :mainContent="article.markdown"></viewer>
        </div>
        <el-row type="flex" justify="center" class="operations">
            <el-col :span="3"><el-button @click.prevent="giveLike" :type="btType" round>{{likeValue}}</el-button></el-col>
            <el-col :span="3"><el-button @click.prevent="reward" type="danger" round>打 赏</el-button></el-col>
            <el-col :span="3" v-if="isOwner"><el-button @click.prevent="deleteArticle" type="danger" round>删 除</el-button></el-col>
            <el-col :span="3" v-if="isOwner"><el-button @click.prevent="reward" type="danger" round>修 改</el-button></el-col>
        </el-row>
        <reward v-show="rewardVisible"></reward>
    </div>
</template>

<script>
import Viewer from 'components/MarkdownEditor/viewer'
import reward from 'components/reward/reward'
import {errorTips} from "utils/tools/message";
import {deleteArticle, getArticleLike} from "api/article";
import {giveLike} from 'api/operations'
import {getToken} from "utils/service/cookie";
import {mapGetters} from 'vuex'
import {getInfo} from "api/user";

    export default {
        name: "contents",
        props: ['article'],
        components: {Viewer, reward},
        data() {
            return {
                like: 0,
                view: 0,
                likeValue: "点个赞",
                btType: "danger",
                rewardVisible: false,
                isOwner: false,
            }
        },
        // computed: {
        //     ...mapGetters([''])
        // },
        methods: {
            getViewAndLike(){
                let params = {"article_id" : this.$route.params.detail, "user_id": localStorage.id}
                getArticleLike(params).then(res => {
                    this.like = res['total']
                    this.view = res['view']
                    if ( res["flag"] === 0 || res['flag'] ) {this.likeValue = "已 赞"}
                    this.btType = this.likeValue === '已 赞' ? 'info' : "danger";
                }).catch(err => {
                    errorTips(err)
                })
            },
            giveLike(){
                if (localStorage.id >= 0 ){
                    let like = this.likeValue === '点个赞';
                    giveLike(this.$route.params.detail, {"like": like}).then(res => {
                        this.likeValue = res['result'] === '感谢点赞' ? '已 赞' : "点个赞";
                        this.btType = res['result'] === '感谢点赞' ? 'info' : "danger";
                        this.getViewAndLike();
                        this.$store.dispatch('getViewAndLike')
                    }).catch(err => {
                        errorTips(err)
                    })
                }else {
                    this.$message.info('登录后方可点赞')
                }
            },
            reward(){
                this.rewardVisible = !this.rewardVisible
            },
            judgIsOwner(){
                let token = getToken()
                if (token){
                    getInfo(localStorage.id).then(res => {
                        if (res['is_staff']){
                            this.isOwner = true
                        }
                    }).catch(err => {
                        errorTips(err)
                    })
                }
            },
            // 删除文章
            deleteArticle(){
                let id = this.$route.params.detail
                this.$confirm('此操作将永久删除该文章, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    deleteArticle(id).then(() => {
                        this.$message.success("删除成功")
                        this.$router.push('/')
                    }).catch(err => {
                        errorTips(err)
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });

            }
        },
        mounted() {
            this.getViewAndLike()
            this.judgIsOwner()
        }
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
            margin-bottom: 40px;
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
        .summary {
            margin-left: 20px;
        }
        .operations{
            text-align: center;
        }
    }
</style>
