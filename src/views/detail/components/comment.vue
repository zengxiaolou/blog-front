<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/9/26-00:00
INTRODUCTION    文件简介
-->

<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>用户评论</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="commentShow('comment')">评论</el-button>
        </div>
        <div class="comment-box"  v-show="commentVisible">
            <el-row type="flex" justify="end">
                <el-col :span="2"><el-avatar></el-avatar></el-col>
                <el-col :span="22"><markdown v-on:changeMarkdown="changeMarkdown"></markdown></el-col>
            </el-row>
            <el-row type="flex" justify="end">
                <el-col :span="2"><el-col :span="2"><el-button type="primary" size="small" @click="submit" class="submit-bnt">提交</el-button></el-col></el-col>
            </el-row>
        </div>
        <div class="comment">
            <el-row class="comment" v-for="(value, index) in comments" :key="index">
                <el-col :span="2" class="avatar">
                    <el-popover
                        placement="top"
                        width="180"
                        trigger="hover">
                        <el-row type="flex" justify="center">
                            <el-col :span="10" ><el-avatar :size="50" :src="value.user['avatar']" ></el-avatar></el-col>
                        </el-row>
                        <el-row>
                            <el-col><i class="icon iconfont icon-user"></i> 昵称： {{value.user.username}}</el-col>
                            <el-col><i class="icon iconfont icon-home"></i>  github:  <el-link :href="value.user['github']" target="_blank">github主页</el-link></el-col>
                        </el-row>
                        <el-avatar slot="reference" :size="40" :src="value.user['avatar']"></el-avatar>
                    </el-popover>
                </el-col>
                <el-col :span="22"   class="content">
                    <el-row>
                        <el-col  :span="22" class="created"> <span class="black">{{value.user.username}} </span>评论于 {{value.created|formatDateTimeEx('YYYY-MM-DD HH:MM:SS')}}</el-col>
                        <el-col  :span ="2"><el-button type="text" size="mini" circle class="reply-btn" @click.prevent="commentShow('reply', value)">回复</el-button></el-col>
                        <el-col :span="24"><viewer :content="value.content" :index="index"></viewer></el-col>
                    </el-row>
                    <el-row class="reply-box" v-for="(value, index) in value['reply']" :key="index">
                        <el-divider></el-divider>
                        <el-popover
                            placement="left"
                            width="180"
                            trigger="hover">
                            <el-row type="flex" justify="center">
                                <el-col :span="10" ><el-avatar :size="50" :src="value.user['avatar']" ></el-avatar></el-col>
                            </el-row>
                            <el-row>
                                <el-col><i class="icon iconfont icon-user"></i> 昵称： {{value.user.username}}</el-col>
                                <el-col><i class="icon iconfont icon-home"></i>  github:  <el-link :href="value.user['github']" target="_blank">github主页</el-link></el-col>
                            </el-row>
                            <el-col :span="1" slot="reference" class="avatar"><el-avatar :size="30" :src="value.user['avatar']"></el-avatar></el-col>
                        </el-popover>

                        <el-col :span="23" class="content">
                            <el-row >
                                <el-col  :span="22" class="created"> <span class="black">{{value.user.username}} </span>评论于 {{value.created|formatDateTimeEx('YYYY-MM-DD HH:MM:SS')}}</el-col>
                                <el-col  :span ="2"><el-button type="text" size="mini" circle class="reply-btn" icon="icon iconfont icon-comment" @click.prevent="commentShow('reply', value)"></el-button></el-col>
                                <el-col :span="24"><viewer :content="value.content" :index="'reply' + value['comment'] + index" ></viewer></el-col>
                            </el-row>
                        </el-col>

                    </el-row>
                </el-col>

            </el-row>
        </div>
        <el-row type="flex" justify="center" class="more">
            <el-col :span="3"><el-button type="text" @click.prevent="getComments" >加载更多</el-button></el-col>
        </el-row>
    </el-card>
</template>

<script>
import markdown from "components/MarkdownEditor/markdown";
import viewer from "components/MarkdownEditor/viewer_comment";
import replyMarkdown from "components/MarkdownEditor/reply_markdown"
import {comment, getComment, getReply, reply} from "api/operations";
import {errorTips} from "utils/tools/message";
import {getArticle} from "api/article";
import {getToken} from "utils/service/cookie";

export default {
    name: "comment",
    components: {markdown, viewer, replyMarkdown},
    data() {
        return {
            content: '',
            markdown: "",
            commentVisible: false,
            comments: [],
            pageSize: 10,
            page: 1,
            isComment: true,
            comment: 1,
            reply: '',
        }
    },
    methods: {
        // 传递草稿
        changeMarkdown:function(markdown){
            this.markdown = markdown
        },
        // 获取评论
        getComments(){
            let params = {
                'page': this.page,
                'size': this.pageSize,
                'search': this.$route.params.detail
            };
            getComment(params).then(res => {
                this.page += 1
                this.total = parseInt(res['count']);
                this.comments = res['results']
            }).catch(err => {
                this.$message.error("没有更多评论了！！！")
            })
        },
        // 提交评论与回复
        submit(){
            // 通过isCommnet判断是提交评论还是回复
            console.log(this.isComment)
            if (this.isComment){
                let data = {
                    "content": this.markdown,
                    "article": this.$route.params.detail
                }
                comment(data).then(() => {
                    this.$message.success("评论成功")
                    this.commentVisible = false
                    this.getComments()
                }).catch(err => {
                    errorTips(err)
                })
            }else {
                let data = {
                    "content": this.markdown,
                    "comment": this.comment,
                }
                reply(data).then(() => {
                    this.$message.success("回复成功")
                    this.commentVisible = false
                    this.getComments()
                }).catch(err => {
                    errorTips(err)
                })
            }
        },
        // 显示隐藏评论box
        commentShow(operation, value){
            // 判断是否是登录用户
            if ( ! getToken()){
                this.$message.error("未登录用户，无法评论，请登录")
                return
            }
            this.commentVisible = !this.commentVisible;
            this.isComment = operation === "comment";
            if (operation === 'reply'){
                this.isComment = false;
                this.comment = value.id
            }else {
                this.isComment = true
            }
        },
        // 显示隐藏回复
        replyShow(value){
            getReply({"search": value.id}).then(res => {
                this.reply = res['results']
            }).catch(err => {errorTips(err)})
        },

    },
    mounted() {
        this.getComments()
    }
}
</script>

<style lang="scss" scoped>
    .box-card {
        margin: 0 20px 20px 20px;

        background-color: rgba(0, 0, 0, 0);
        border-radius: 10px;
        /deep/ .el-card__header {
            padding-top: 10px;
            padding-bottom: 10px;
        }
        /deep/ .el-calendar__body{
            padding-left: 10px;

        }
        .submit{
            margin-top: 20px;
        }
        .avatar {
            margin-top: 10px;
        }
        .content {
            padding: 10px  0 0 20px;
            background-color: #ffffff;
            border-radius: 10px;
            margin-bottom: 10px;

            .created {
                font-size: 12px;
                color: rgb(150, 156, 162);
            }
            .reply-btn {
                text-align: end;
                font-size: 10px;
                padding: 0;
            }
            .el-divider  {
                margin: 5px 0;
            }
            .black {
                color: #1f2d3d;
            }

        }
        .pop-avatar {
            background-color: #1a98ff;
        }
        .comment-box {
            margin-bottom: 10px;
            .submit-bnt {
                margin-top: 10px;
                text-align: end;
            }
        }
        .more {
            margin-top: 10px;
        }

    }
</style>
