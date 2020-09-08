<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/7/26-16:43
INTRODUCTION    文章摘要
-->
<template>
    <div class="abstract">
        <el-row :gutter="10">
            <el-col :span="8" v-for="(value, index) in detail" :key=index>
                {{value}}
            </el-col>
        </el-row>
        <el-row :gutter="10">

            <el-col :span="8" v-for="(value, index) in total" :key=index>
                 {{value.name}}
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import {getViewAndLike} from "../../../../api/article";
    import {errorTips} from "../../../../utils/tools/message";

    export default {
        name: "abstract",
        data() {
            return{
                detail: ["文章","浏览","点赞"],
                total:[]
            }
        },
        methods: {
            getViewAndLike(){
                getViewAndLike().then(res => {
                    this.total = [
                        {"name": res.results[0].article_num, 'path': '/index/' },
                        {"name": res.results[0].view_num, 'path': '/index/views_num' },
                        {"name": res.results[0].like_num, 'path': '/index/like_num' },
                     ]
                }).catch(err => {
                    errorTips(err)
                })
            }
        },
        mounted() {
            this.getViewAndLike()
        }
    }
</script>

<style lang="scss" scoped>
    .abstract {
        margin-top: 20px;
        width: 98%;
        margin-bottom: 20px;
        .el-row{
            padding: 0 30px;
            font-weight: 500;
            .el-col {
                text-align: center;
            }
        }

    }
</style>
