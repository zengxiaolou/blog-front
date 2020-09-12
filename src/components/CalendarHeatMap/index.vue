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
        props: ['date'],
        data() {
            return{
            }
        },
        watch:{
          date(){
              this.initialize()
          }
        },
        methods: {
            initialize(){
                this.myChart = echarts['init'](document.getElementById('myChart'));
                let data = this.getData();
                let option = {
                    visualMap: {
                        min: 0,
                        max: 5,
                        inRange: {
                            color: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39']
                        },
                        show: false
                    },
                    tooltip: {
                        formatter: function (p) {
                        let format = echarts['format'].formatTime('MM-dd', p.data[0]);
                        return format + ': ' + p.data[1];
                      }
                    },
                    calendar: {
                        cellSize: [14, 14],
                        range: [data['thatDay'], data['today']],
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
                        data: data['data']
                    }
                };
                this.myChart.setOption(option);
            },
            getData() {
                let today = echarts['number'].parseDate(new Date());
                let dayTime = 3600 * 24 * 1000;
                let thatDay = today - dayTime * 363;
                let data = [];
                for (let time = thatDay; time <= today; time += dayTime) {
                    data.push([
                        echarts['format'].formatTime('yyyy-MM-dd', time),
                        0
                    ]);
                }
                for (let i of Object.keys(this.date)){
                    let singleDate = echarts['format'].formatTime('yyyy-MM-dd', this.date[i].create);
                    data.push([
                        singleDate,
                        this.date[i].count
                    ]);
                }
                return {
                    data,
                    today: echarts['format'].formatTime('yyyy-MM-dd', today),
                    thatDay: echarts['format'].formatTime('yyyy-MM-dd', thatDay)
                };
            },

        },
    }
</script>

<style lang="scss" scoped>
    #myChart{
        margin: 10px auto;
        height: 150px;
        width: 830px;
        /*border: 1px solid #e1e4e8;*/
    }
</style>
