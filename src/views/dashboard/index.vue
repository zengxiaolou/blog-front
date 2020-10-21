<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/10/20-17:24
INTRODUCTION    文件简介
-->

<template>
    <el-scrollbar class="page-component__scroll">
        <el-row :gutter="20" class="panel">
         <el-col :span="6" v-for="(value, index) in panel" :key="index" >
             <el-card class="box-card">
                <el-row :gutter="10">
                 <el-col :span="8"><i :class="value.icon"></i></el-col>
                 <el-col :span="8">
                     <el-row :gutter="10" class="panel-new">
                      <el-col :span="24" class="panel-title">New</el-col>
                      <el-col :span="24" class="panel-data">{{value.new}}</el-col>
                     </el-row>
                 </el-col>
                 <el-col :span="8">
                     <el-row :gutter="10"  class="panel-total">
                     <el-col :span="24" class="panel-title">Total</el-col>
                     <el-col :span="24" class="panel-data">{{value.total}}</el-col>
                    </el-row>
                 </el-col>
                </el-row>
             </el-card>
         </el-col>
        </el-row>
         <el-card class="line-chart">
             <line-chart></line-chart>
         </el-card>
        <el-row :gutter="10" class="pie-chart">
            <el-col :span="12" class="article">
                 <el-card class="box-card">
                     <radar-chart></radar-chart>
                 </el-card>
            </el-col>
            <el-col :span="12" class="tag">
                <el-card class="box-card">
                    <pie-charts></pie-charts>
                </el-card>
            </el-col>
        </el-row>
        <el-backtop target=".page-component__scroll .el-scrollbar__wrap" :right="20"></el-backtop>
    </el-scrollbar>
</template>

<script>
import lineChart from 'components/charts/lineCharts'
import pieCharts from "components/charts/pieCharts";
import radarChart from "components/charts/radarChart";

export default {
    name: "index",
    components: {lineChart, pieCharts, radarChart},
    data() {
        return {
            panel: [
                {"icon": 'icon iconfont icon-view', 'new': 2 , 'total': 2},
                {"icon": 'icon iconfont icon-users', 'new': 2 , 'total': 2},
                {"icon": 'icon iconfont icon-like', 'new': 2 , 'total': 2},
                {"icon": 'icon iconfont icon-comment', 'new': 2 , 'total': 2},
            ],
            date: [],
        }
    }
}
</script>

<style lang="scss" scoped>
    .el-scrollbar {
        height: 100%;
        padding-top: 40px;
        margin: 0 20px;
        .panel {
            text-align: center;
            .box-card{
                border-radius: 10px;
                .icon-users {
                    font-size: 40px;
                    color: #40c9c6;
                }
                .icon-comment {
                    font-size: 40px;
                    color: #36a3f7;
                }
                .icon-like {
                    font-size: 40px;
                    color: #f4516c;
                }
                .icon-view{
                    font-size: 40px;
                    color: #34bfa3;
                }
                .panel-title {
                    color: rgb(150, 156, 162);
                    font-weight: 600;
                    margin-bottom: 5px;
                }
                .panel-data {
                    font-weight: 600;
                }
            }
        }
        .line-chart{
            margin-top: 20px;
        }
        .pie-chart {
            margin-top: 20px;
        }
    }
    /deep/ .el-scrollbar__wrap {
        overflow-x:hidden;
        height: 100%;
    }
    .page-component__scroll{
        height: 100%;
    }
</style>
