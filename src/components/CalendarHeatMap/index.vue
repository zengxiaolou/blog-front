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
                    title: {
                        text: "博客热力图",
                        left: "center",
                        textStyle: {
                            align: 'center',
                            fontSize: 20
                        }
                    },
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
                        cellSize: [15, 15],
                        range: [data['thatDay'], data['today']],
                        itemStyle: {
                            borderColor: '#fff',
                            borderWidth: 4
                        },
                        splitLine: {
                            show: false
                        },
                        top: 55,
                        // right:35,
                        // yearLabel: { show: false },
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
                let week = today.getDay()
                let num = 365
                if (week === 0){ num = 364}
                else if(week === 1) { num = 365}
                else if(week === 2) { num = 366}
                else if(week === 3) { num = 367}
                else if(week === 4) { num = 368}
                else if(week === 5) { num = 369}
                else if(week === 6) { num = 370}
                let dayTime = 3600 * 24 * 1000;
                let thatDay = today - dayTime * num;
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
        mounted() {
            this.initialize()
        }
    }
</script>

<style lang="scss" scoped>
    #myChart{
        margin: 10px auto;
        height: 170px;
        width: 930px;
        /*border: 1px solid #e1e4e8;*/
    }
</style>
