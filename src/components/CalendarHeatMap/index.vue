<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/9/4-16:02
INTRODUCTION    文件简介
-->

<template>
    <div >
        <div id="myChart"></div>
    </div>
</template>

<script>
    import echarts from 'echarts'
    export default {
        name: "index",
        data() {
            return{

            }
        },
        methods: {
            initialize(){
                this.myChart = echarts.init(document.getElementById('myChart'));
                let option = {
                    visualMap: {
                        min: 0,
                        max: 10000,
                        inRange: {
                            color: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39']
                        },
                        show: false
                    },
                    tooltip: {},
                    calendar: {
                        cellSize: [14, 14],
                        range: [this.getVirtulData()['thatday'], this.getVirtulData()['today']],
                        itemStyle: {
                            borderColor: '#fff',
                            borderWidth: 4
                        },
                        splitLine: {
                            show: false
                        },
                        top: 40,
                        right:35,
                        yearLabel: { show: false },
                        // dayLabel: { show: false }
                    },
                    series: {
                        type: 'heatmap',
                        coordinateSystem: 'calendar',
                        data: this.getVirtulData()['data']
                    }
                };
                this.myChart.setOption(option);
            },
            getVirtulData() {
                let today = echarts.number.parseDate(new Date());
                let dayTime = 3600 * 24 * 1000;
                let thatday = today - dayTime * 365;

                let data = [];
                for (let time = thatday; time < today; time += dayTime) {
                    data.push([
                        echarts.format.formatTime('yyyy-MM-dd', time),
                        Math.floor(Math.random() * 10000)
                    ]);
                }
                return {
                    data,
                    today: echarts.format.formatTime('yyyy-MM-dd', today),
                    thatday: echarts.format.formatTime('yyyy-MM-dd', thatday)
                };
            }

        },
        mounted() {
            this.initialize()
        }
    }
</script>

<style lang="scss" scoped>
    #myChart{

        margin: 10px auto;
        height: 150px;
        width: 830px;
        border: 1px solid #e1e4e8;
    }
</style>
