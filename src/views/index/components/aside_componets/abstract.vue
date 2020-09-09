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
    import {mapGetters} from 'vuex';

    export default {
        name: "abstract",
        data() {
            return{
                detail: ["文章","浏览","点赞"],
                total:[]
            }
        },
        computed:{
            ...mapGetters([
                'article_num', 'view_num', 'like_num'
                ])
        },
        watch: {
            article_num(val){
                this.init()
            }
        },
        methods: {
            getViewAndLike(){
                this.$store.dispatch('getViewAndLike')
            },
            init(){
                console.log(this.view_num);
                this.total = [
                        {"name": this.article_num, 'path': '/index/' },
                        {"name": this.view_num, 'path': '/index/views_num' },
                        {"name": this.like_num, 'path': '/index/like_num' },
                     ]
            }
        },
        mounted() {
            this.getViewAndLike();
            this.init()
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
