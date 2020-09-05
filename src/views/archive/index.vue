<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/8/15-08:50
INTRODUCTION    文章归档页面
-->
<template>
    <el-scrollbar>
        <el-card class = "archive-header">
            <el-divider>最近一年共编写20篇博客，总共编写{{total}}篇博客，你的进步，有目共睹</el-divider>
            <my-charts></my-charts>
        </el-card>
        <el-card class = "archive-body">
            <el-divider>文章归档</el-divider>
            <el-timeline>
                <el-timeline-item
                    hide-timestamp
                    v-for="(activity, index) in activities"
                    :key="index"
                    :color="activity.color">
                    <router-link :to=activity.detail :style="{color:activity.color}">{{activity.content}}</router-link>
                </el-timeline-item>
            </el-timeline>
        </el-card>
    </el-scrollbar>
</template>

<script>
    import myCharts from '../../components/CalendarHeatMap/index'
    import {getArchive} from "../../api/article";
    const baseUrl = 'http://0.0.0.0:8000/api/v1/' + 'article/detail/';

    const color ={
        'Python': '#FBD13D', 'Golang': '#6DC6D6', 'Vue': '#43AE79', 'Linux': '#0F0F0F',
        'Docker': '#1980AD', 'DB': '#27C5FD', 'Tools': '#5B5B5B', 'Other': '#EEEEEE'
    };
    export default {
        name: "archive",
        components: {myCharts},
        data() {
            return {
                activities: [],
                pageSize: 20,
                pageNum: 1,
                total: '',
            };
        },
        methods: {
            getArchive(){
                const params = {
                    "size": this.pageSize,
                    "page": this.pageNum
                };
                getArchive(params).then(res =>{
                    this.pageNum += 1;
                    this.total = res.count;
                    for (let key in Object.keys(res.results)){
                        let archive = {};
                        archive.content = res.results[key].created.substring(0,10) + " " + res.results[key].title;
                        archive.color = color[res.results[key].category.category];
                        archive.detail = baseUrl + res.results[key].id;
                        this.activities.push(archive);
                    }
                }).catch(() =>{
                    this.$message.info('没有了，别再拉啦！！！再拉裤子要掉了！！！！')
                });
            },
            handleScroll(e){
                let dom = document.querySelector('.main_content');
                //文档内容实际高度（包括超出视窗的溢出部分）
                let scrollHeight = Math.max(dom.scrollHeight, dom.scrollHeight);
                //滚动条滚动距离
                let scrollTop = e.target.scrollTop;
                //窗口可视范围高度
                let clientHeight = dom.innerHeight || Math.min(dom.clientHeight,dom.clientHeight);
                if(clientHeight + scrollTop >= scrollHeight){
                    this.getArchive()
                }
            },

        },
        mounted() {
            this.getArchive();
            window.addEventListener('scroll',this.handleScroll,true)
        },
        beforeDestroy(){
            window.removeEventListener("scroll",this.handleScroll,true)
        }
    }
</script>

<style lang="scss" scoped>
    * { margin:0; padding:0; }
    .el-scrollbar {
        height: 100%;
        .title {
            margin-top: 20px;
            margin-left: 20px;
        }
        #calendar{
            width: 100%;
            height: 200px;
        }
        .el-divider {
            margin-top: 20px;

        }
        .el-timeline {
            margin-top: 20px;
            margin-left: 10px;
            .el-timeline-item{
                height: 50px;
                font-size: 16px;
            }
        }
        .archive-header {
            margin: 20px;
            /*background-color: rgba(255,255,255,0);*/
        }
        .archive-body {
            margin: 20px;
        }
    }
    /deep/ .el-scrollbar__wrap {
        overflow-x:hidden;
    }
</style>
