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
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div class="comment">
            <el-row :gutter="10" class="comment">
                <el-col :span="2" class="avatar"><el-avatar></el-avatar></el-col>
                <el-col :span="22" class="content">
                    <el-col>time</el-col>
                    <viewer></viewer>
                    <el-col :span="4">该评论共有0条回复</el-col>
                    <el-col :span="2">回复</el-col>
                    <el-col :span="4">展开所有回复</el-col>
                    <viewer></viewer>
                </el-col>
            </el-row>
        </div>
        <div class="comment-box"  v-show="commentVisible">
            <el-row :gutter="10" >
                <el-col :span="2"><el-avatar></el-avatar></el-col>
                <el-col :span="22"><markdown v-on:changeMarkdown="changeMarkdown"></markdown></el-col>
            </el-row>
            <el-row type="flex" justify="end" class="submit">
                <el-col :span="2"><el-button type="primary" size="small" @click="submit">提交</el-button></el-col>
            </el-row>
        </div>
        <el-row type="flex" justify="center">
         <el-col :span="4"><el-button type="primary" @click="commentShow">评论</el-button></el-col>
        </el-row>
    </el-card>
</template>

<script>
import markdown from "components/MarkdownEditor/markdown";
import viewer from "components/MarkdownEditor/viewer";
import {comment} from "api/operations";

export default {
    name: "comment",
    components: {markdown, viewer},
    data() {
        return {
            content: '',
            markdown: "",
            commentVisible: false
        }
    },
    methods: {
        // 传递草稿
        changeMarkdown:function(markdown){
            this.markdown = markdown
        },
        // 提交评论
        submit(){
            let data = {
                "content": this.markdown

            }
            comment()
        },
        // 显示隐藏评论box
        commentShow(){
            this.commentVisible = !this.commentVisible
        }
    }
}
</script>

<style lang="scss" scoped>
    .box-card {
        margin: 0 20px;
        background-color: rgba(0, 0, 0, 0);
        .submit{
            margin-top: 20px;
        }
    }
</style>
