<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/8/12-12:54
INTRODUCTION    文件简介
-->

<template>
    <el-card class="box-card">
        <div slot="header" >
            <span>文章分类</span>
        </div>
        <div v-for="(value, index) in categoryArray" :key="index" class="text item category">
            <router-link :to="'/index/' + value.category">
                <el-row type="flex" justify="space-between">
                    <el-col :span="5">{{value.category}}</el-col>
                    <el-col :span="4"><div class="article-num"> {{value.num}}</div></el-col>
                </el-row>
            </router-link>
        </div>
    </el-card>
</template>

<script>
    import {getCategory} from "../../../../api/article";

    export default {
        name: "articles",
        data() {
            return {
                categoryArray: [
                    {ID: 1, category: "Python", num: 0 },
                    {ID: 2, category: "Golang", num: 0 },
                    {ID: 3, category: "Linux",  num: 0 },
                    {ID: 4, category: "Vue",    num: 0 },
                    {ID: 5, category: "Tools",  num: 0 },
                    {ID: 6, category: "DB",     num: 0 },
                    {ID: 7, category: "Docker", num: 0 },
                    {ID: 8, category: "Other",  num: 0 }
                ]
            }
        },
        methods: {
            getCategory(){
                getCategory().then(res => {
                    this.categoryArray = res.results;
                }).catch(err => {

                })
            }
        },
        mounted() {
            this.getCategory()
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
            padding: 0;
        }
        .category {
            padding: 3px 10px;
            border-bottom: 1px solid #EBEEF5;
            .article-num {
                background-color: rgba(255,78,106,.2);
                width: 30px;
                height: 30px;
                color:  #ff4e6a;
                font-size: 12px;
                border-radius: 25px;
                text-align: center;
            }
        }
    }
</style>
