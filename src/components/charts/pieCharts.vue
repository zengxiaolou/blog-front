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
export default {
    name: "pieCharts",
    data() {
        return {

        }
    },
    methods: {
        initialize(){
            this.myChart = echarts['init'](document.getElementById('pieChart'));
            let option = {
                "title": {
                    "text": "标签饼图",
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
                    name: '库存情况',
                    type: 'pie',
                    radius: '68%',
                    center: ['50%', '50%'],
                    clockwise: false,
                    data: [{
                        value: 45,
                        name: 'CARD'
                    }, {
                        value: 25,
                        name: 'SSD'
                    }, {
                        value: 15,
                        name: 'U盘'
                    }, {
                        value: 8,
                        name: '嵌入式'
                    }, {
                        value: 7,
                        name: 'FLASH'
                    }],
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
                    '#79d9f1',
                    '#a7e7ff',
                    '#c8efff'
                ],
                backgroundColor: '#fff'
            };
            this.myChart.setOption(option);
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
