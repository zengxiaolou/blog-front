<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/8/15-08:50
INTRODUCTION    文章归档页面
-->
<template>
    <el-scrollbar>
            <el-timeline>
                <el-timeline-item
                    hide-timestamp
                    v-for="(value, index) in activities"
                    :key="index"
                    :color="value.color">
                    <router-link :to=value.detail :style="{color:value.color}">{{value.content}}  <i :class="value.icon"></i></router-link>
                </el-timeline-item>
            </el-timeline>
            <el-row type="flex" justify="center" class="more" v-if="more">
                <el-col :span="3"><el-button type="text" @click.prevent="getArchive" round>加载更多</el-button></el-col>
            </el-row>
    </el-scrollbar>
</template>

<script>

    import {getArchive} from "api/article";

    const color ={
        'Python': '#FBD13D', 'Go': '#6DC6D6', 'Vue': '#43AE79', 'Linux': '#0F0F0F',
        'Docker': '#1980AD', 'DB': '#27C5FD', 'Tools': '#5B5B5B', 'Other': '#FF8F3D'
    };
    export default {
        name: "archive",
        data() {
            return {
                activities: [],
                pageSize: 11,
                pageNum: 1,
                more: true,
                total: 0,
            };
        },
        methods: {
            getArchive(){
                let params = {
                    "size": this.pageSize,
                    "page": this.pageNum
                };
                getArchive(params).then(res =>{
                    this.pageNum += 1
                    this.total = res['count'];
                    for (let key in Object.keys(res['results'])){
                        let archive = {};
                        if (res['results'][key].created){
                            archive.content = res['results'][key].created.substring(0,10) + " " + res['results'][key].title;
                            archive.color = color[res['results'][key].category.category];
                            archive.detail = 'detail/'+ res['results'][key].id;
                            archive.icon = 'icon iconfont icon-' + res['results'][key].category.category.toLowerCase()
                            this.activities.push(archive);
                        }
                        this.more = res['next'] !== null
                    }
                }).catch((err) =>{
                    console.log(err);
                    this.$message.info('没有了，别再拉啦！！！再拉裤子要掉了！！！！')
                });
            },

        },
        mounted() {
            this.getArchive();
        },
    }
</script>

<style lang="scss" scoped>
    * { margin:0; padding:0; }
    .el-scrollbar {
        padding-top: 40px;
        margin:  0 40px;
        height: 100%;
        .el-timeline {
            .el-timeline-item{
                height: 50px;
                font-size: 16px;
            }
        }
        .more {
            margin-top: 10px;}
        /deep/ .el-scrollbar__wrap {
            overflow-x:hidden;
        }
    }
</style>
