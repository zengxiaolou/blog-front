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
                <el-col :span="2" class="avatar"><el-avatar :size="30" :src="value.user['avatar']"></el-avatar></el-col>
                <el-col :span="22" class="content">
                    <el-col  :span="24" class="created">{{value.created|formatDateTime('YYYY-MM-DD HH:MM:SS')}}</el-col>
                    <el-col :span="24"><viewer :content="value.content" :index="index"></viewer></el-col>
                    <div class="reply created" >
                        <el-button title="回复" type="text" icon="icon iconfont icon-comment" size="mini" circle class="reply-btn" @click.prevent="commentShow('reply')"></el-button>
                        <el-button title="展开" type="text" icon="icon iconfont icon-unfold" size="mini" circle class="more"></el-button>
                    </div>
                </el-col>

            </el-row>
        </div>
        <div class="page">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes = pageSizes
                :page-size= pageSize
                :total=total
                background
                layout="total, sizes, prev, pager, next, jumper">
            </el-pagination>
        </div>

    </el-card>
</template>

<script>
import markdown from "components/MarkdownEditor/markdown";
import viewer from "components/MarkdownEditor/viewer_comment";
import replyMarkdown from "components/MarkdownEditor/reply_markdown"
import {comment, getComment} from "api/operations";
import {errorTips} from "utils/tools/message";
import {getArticle} from "api/article";

export default {
    name: "comment",
    components: {markdown, viewer, replyMarkdown},
    data() {
        return {
            content: '',
            markdown: "",
            commentVisible: false,
            comments: [],
            pageNum: 1,
            total: 0,
            pageSizes: [10, 20, 50],
            pageSize: 10,
            page: 1,
            currentPage: 1,
            isComment: true,
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
                this.total = parseInt(res['count']);
                this.comments = res['results']
            }).catch(err => {
                errorTips(err)
            })
        },
        // 提交评论
        submit(){
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

            }
        },
        // 显示隐藏评论box
        commentShow(operation){
            this.commentVisible = !this.commentVisible;
            this.isComment = operation === "reply";
        },
        // 显示隐藏回复
        replyShow(){

        },
        // 调整每页条数
        handleSizeChange(val) {
            let params = {
                'page': this.page,
                'size': val,
                'search': this.$route.params.detail
            };
            this.pageSize = val;
            getComment(params).then(res => {
                this.total = parseInt(res['count']);
                this.comments = res['results']
            }).catch(err => {
                errorTips(err)
            })
        },
        // 翻页
        handleCurrentChange(val) {
            const params = {
                'page': val,
                'size': this.pageSize,
                'search': this.$route.params.detail
            };
            this.page = val;
            getComment(params).then(res => {
                this.total = parseInt(res['count']);
                this.comments = res['results']
            }).catch(err => {
                errorTips(err)
            })
        },

    },
    mounted() {
        this.getComments()
    }
}
</script>

<style lang="scss" scoped>
    .box-card {
        margin: 0 20px;
        background-color: rgba(0, 0, 0, 0);
        border-radius: 10px;
        /deep/ .el-card__header {
            padding-top: 10px;
            padding-bottom: 10px;
        }
        .submit{
            margin-top: 20px;
        }
        .content {
            padding: 10px;
            background-color: #ffffff;
            border-radius: 10px;
            margin-bottom: 10px;
            .created {
                font-size: 12px;
                color: rgb(150, 156, 162);
            }
            .reply {
                text-align: end;
                .reply-btn {
                    margin-right: 5px;
                }
            }

        }
        .page {
            text-align: center;
            margin-bottom: 20px;
         }
        .comment-box {
            margin-bottom: 20px;
            .submit-bnt {
                margin-top: 10px;
                text-align: end;
            }
        }
    }
</style>
