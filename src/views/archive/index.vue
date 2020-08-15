<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/8/15-08:50
INTRODUCTION    文章归档页面
-->
<template>
    <el-scrollbar>
        <div class="radio">
            <el-row type="flex" justify="space-between" >
                <el-col :span="20" class="excitation">
                    <span >目前共计00篇日志，你成长有目共睹</span>
                </el-col>
                <el-col :span="4">
                    <el-radio-group v-model="reverse">
                        <el-radio-button :label="true">倒序</el-radio-button>
                        <el-radio-button :label="false">正序</el-radio-button>
                    </el-radio-group>
                </el-col>
            </el-row>
        </div>
        <el-divider>2020</el-divider>
        <el-timeline :reverse="reverse">
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
    export default {
        name: "archive",
        data() {
            return {
                reverse: true,
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
        }
    }
</script>

<style lang="scss" scoped>
    * { margin:0; padding:0; }
    .el-scrollbar {
        height: 100%;
        .radio {
            margin-top: 20px;
            margin-bottom: 10px;
            .excitation {
                margin-left: 10px;
                margin-top: 10px;
                height: 100%;

            }
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
</style>
