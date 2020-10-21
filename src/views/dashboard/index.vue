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
        <el-row :gutter="10">
            <el-col :span="24">
                <el-card class="line-chart">
                    <line-chart></line-chart>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :span="24">
                <el-card class = "calendar-chart">
                    <my-charts :date="date"></my-charts>
                    <el-row type="flex" justify="end" class="total">
                     <el-col :span="5">Last year：{{lastTotal}}</el-col>
                    </el-row>
                </el-card>
            </el-col>
        </el-row>
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
import myCharts from '../../components/CalendarHeatMap/index'
import {getStatistics} from 'api/statistics'
import {getLastYearData} from "api/article";

export default {
    name: "index",
    components: {lineChart, pieCharts, radarChart, myCharts},
    data() {
        return {
            panel: [
                {"icon": 'icon iconfont icon-view', 'new': 2 , 'total': 2},
                {"icon": 'icon iconfont icon-users', 'new': 2 , 'total': 2},
                {"icon": 'icon iconfont icon-like', 'new': 2 , 'total': 2},
                {"icon": 'icon iconfont icon-comment', 'new': 2 , 'total': 2},
            ],
            date: [],
            total: '',
            lastTotal: '',
            todayData: [],
        }
    },
    watch: {
      panel(val) {
       this.panel = val
      }
    },
    methods: {
        getLastYearData(){
            getLastYearData().then(res =>{
                this.lastTotal = res['results'].article;
                this.date = res['results'].date
            })
        },
        getStatistics(){
            getStatistics().then(res => {
                this.panel = [
                    {"icon": 'icon iconfont icon-view', 'new': res['today_view'] , 'total': res['total_view']},
                    {"icon": 'icon iconfont icon-users', 'new': res['today_user'] , 'total': res['total_user']},
                    {"icon": 'icon iconfont icon-like', 'new': res['today_like'] , 'total': res['total_like']},
                    {"icon": 'icon iconfont icon-comment', 'new':  res['today_comment'] , 'total': res['total_comment']},
                ]
                this.todayData.push(res['everyday_view'])
                this.todayData.push(res['everyday_like'])
                this.todayData.push(res['everyday_user'])
                this.todayData.push(res['everyday_comment'])

            })
        }
    },
    created() {
        this.getLastYearData()
        this.getStatistics()
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
        .calendar-chart {
            margin-top: 20px;
            .total{
                text-align: end;
                color: #09AC57;
                font-size: 14px;
            }
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
