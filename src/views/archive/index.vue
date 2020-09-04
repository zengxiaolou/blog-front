<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/8/15-08:50
INTRODUCTION    文章归档页面
-->
<template>
    <el-scrollbar>
        <div  class="title">
            <span> 最近一年共编写20篇博客，总共编写30篇博客，你的进步，有目共睹</span>
        </div>

        <my-charts></my-charts>

        <el-divider>2020</el-divider>
        <el-timeline>
            <el-timeline-item
                    hide-timestamp
                    v-for="(activity, index) in activities"
                    :key="index"
                    placement="top"
                    :icon="activity.icon"
                    :type="activity.type"
                    :color="activity.color"
                    :size="activity.size"
                    :timestamp="activity.timestamp">
                {{activity.content}}
            </el-timeline-item>
        </el-timeline>
    </el-scrollbar>
</template>

<script>
    import myCharts from '../../components/CalendarHeatMap/index'
    export default {
        name: "archive",
        components: {myCharts},
        data() {
            return {
                activities: [{
                    content: '支持使用图标',
                    timestamp: '2018-04-12 20:46',
                    size: 'large',
                    type: 'primary',
                    icon: 'el-icon-more'
                }, {
                    content: '支持自定义颜色',
                    timestamp: '2018-04-03 20:46',
                    color: '#0bbd87'
                }, {
                    content: '支持自定义尺寸',
                    timestamp: '2018-04-03 20:46',
                    size: 'large'
                }, {
                    content: '默认样式的节点',
                    timestamp: '2018-04-03 20:46'
                }]
            };
        },
        methods: {

        },
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
        .el-timeline {
            margin-top: 20px;
            margin-left: 10px;
            .el-timeline-item{
                height: 70px;
                font-size: 20px;
            }

        }
    }
    /deep/ .el-scrollbar__wrap {
        overflow-x:hidden;
    }
</style>
