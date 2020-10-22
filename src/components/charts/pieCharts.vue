<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/10/21-14:06
INTRODUCTION    文件简介
-->

<template>
    <div >
        <div id="pieChart"></div>
    </div>
</template>

<script>
import echarts from 'echarts'
import {getCategory} from "api/article";
import {getTageDistribution} from "api/statistics";
export default {
    name: "pieCharts",
    data() {
        return {

        }
    },
    methods: {
        async initialize(){
            this.myChart = echarts['init'](document.getElementById('pieChart'));
            let data = await this.getData()
            let option = {
                "title": {
                    "text": "标签分布图",
                    "left": "center",
                    "textStyle": {
                        "align": 'center',
                        "fontSize": 20
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                series: [{
                    name: '标签分布',
                    type: 'pie',
                    radius: '68%',
                    center: ['50%', '50%'],
                    clockwise: false,
                    data: data,
                    label: {
                        normal: {
                            textStyle: {
                                color: '#999',
                                fontSize: 14,
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderWidth: 4,
                            borderColor: '#ffffff',
                        },
                        emphasis: {
                            borderWidth: 0,
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }],
                color: [
                    '#00acee',
                    '#52cdd5',
                    '#c8efff',
                    "#73e2e2",
                    "#ff7e85",
                    "#fac524",
                    "#46caff",
                    "#a1e867",
                    "#10b2b2",
                    "#ec87f7",
                    "#f4905a",
                    "#00baba",
                    "#facf24",
                    "#e89d67",
                    "#23c6c6",
                    "#fa8699",
                ],
                backgroundColor: '#fff'
            };
            this.myChart.setOption(option);
        },
        async getData() {
            let data = []
            await getTageDistribution().then(res => {
                for (let i of Object.keys(res)){
                    let tmp = {"name": i, "value": res[i]}
                    data.push(tmp)
                }
            })
            return data
        },
    },
    mounted() {
        this.initialize()
    }
}
</script>

<style lang="scss" scoped>
    #pieChart{
        margin: 10px auto;
        height: 350px;
        width: 420px;
    }
</style>
