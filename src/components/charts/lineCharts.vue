<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/10/21-14:06
INTRODUCTION    文件简介
-->

<template>
    <div >
        <div id="lineChart"></div>
    </div>
</template>

<script>
import echarts from 'echarts'
import {getStatistics} from "api/statistics";
export default {
    name: "lineCharts",
    data() {
        return {

        }
    },
    methods: {
        async initialize(){
            this.myChart = echarts['init'](document.getElementById('lineChart'));
            let data =  await this.getData()
            const xAxisData = data.xAxisData
            let option = {
                "textStyle": {
                    "fontFamily": "Din-Light"
                },
                "color": ["#73e2e2", "#123dac", "#ff7e85", "#9b52ff", "#fac524", "#46caff", "#a1e867", "#10b2b2", "#ec87f7", "#f4905a", "#00baba", "#facf24", "#e89d67", "#23c6c6", "#fa8699", "#40b7fc", "#006d75", "#595959", "#f4764f", "#a640fc", "#fda23f", "#2d7ae4", "#5092ff", "#9351ed", "#8a89fe", "#df89e8", "#2797ff", "#6ad089", "#7c92e8 "],
                "title": {
                    "text": "月内指标趋势图",
                    "left": "center",
                    "textStyle": {
                        "align": 'center',
                        "fontSize": 20
                    }
                },
                "legend": {
                    "data": [{
                        "name": "浏览量",
                        "icon": "path://M512 139.81262864a286.42534744 286.42534744 0 1 0 286.42534744 286.42534744 286.42534744 286.42534744 0 0 0-286.42534744-286.42534744z m0 477.3755789a190.95023144 190.95023144 0 1 1 190.95023144-190.95023146 190.95023144 190.95023144 0 0 1-190.95023144 190.95023146z"
                    }, {
                        "name": "用户量",
                        "icon": "path://M512 139.81262864a286.42534744 286.42534744 0 1 0 286.42534744 286.42534744 286.42534744 286.42534744 0 0 0-286.42534744-286.42534744z m0 477.3755789a190.95023144 190.95023144 0 1 1 190.95023144-190.95023146 190.95023144 190.95023144 0 0 1-190.95023144 190.95023146z"
                    }, {
                        "name": "点赞量",
                        "icon": "path://M512 139.81262864a286.42534744 286.42534744 0 1 0 286.42534744 286.42534744 286.42534744 286.42534744 0 0 0-286.42534744-286.42534744z m0 477.3755789a190.95023144 190.95023144 0 1 1 190.95023144-190.95023146 190.95023144 190.95023144 0 0 1-190.95023144 190.95023146z"
                    },{
                        "name": "评论量",
                        "icon": "path://M512 139.81262864a286.42534744 286.42534744 0 1 0 286.42534744 286.42534744 286.42534744 286.42534744 0 0 0-286.42534744-286.42534744z m0 477.3755789a190.95023144 190.95023144 0 1 1 190.95023144-190.95023146 190.95023144 190.95023144 0 0 1-190.95023144 190.95023146z"
                    }],
                    "left": "right",
                    "selected": {
                        "浏览量": true,
                        "用户量": true,
                        "点赞量": true,
                        "评论量": true
                    },
                    "itemWidth": 10,
                    "itemHeight": 10,
                    "itemGap": 10,
                    "textStyle": {
                        "color": "#898989",
                        "lineHeight": 15
                    },
                    "type": "scroll",
                },
                "tooltip": {
                    "backgroundColor": "#fff",
                    "trigger": "axis",
                    "axisPointer": {
                        "type": "none"
                    },
                    "textStyle": {
                        "color": "#565656",
                        "lineHeight": 28
                    },
                    "confine": true,
                    "padding": 12,
                    "extraCssText": "box-shadow: 0px 2px 8px 0px #cacaca;border-radius: 4px;opacity: 0.9;max-height: 100%;",
                    "formatter": {
                        "_custom": {
                            "type": "function",
                            "display": "<span>ƒ</span> (params)"
                        }
                    }
                },
                "grid": {
                    "left": 0,
                    "right": 0,
                    "top": 60,
                    "bottom": 30

                },
                "xAxis": {
                    "type": "category",
                    "boundaryGap": true,
                    "data": xAxisData,
                    "axisLabel": {
                        "color": "#a0a9bc",
                        //X轴标签 label 做了特殊处理，防止左右溢出
                        formatter: (value, index) => {
                            if (index === 0 || index === xAxisData.length - 1) {
                                return "";
                            }
                            return value;
                        }
                    },
                    "axisLine": {
                        "show": false
                    },
                    "axisTick": {
                        "show": false
                    }
                },
                "yAxis": {
                    "name": "",
                    "nameTextStyle": {
                        "color": "gray"
                    },
                    "type": "value",
                    "axisLabel": {
                        "color": "#a0a9bc",
                        "inside": true,
                        "margin": 0,
                        "verticalAlign": "bottom"
                    },
                    "splitLine": {
                        "lineStyle": {
                            "type": "dashed"
                        }
                    },
                    "minInterval": 1,
                    "axisLine": {
                        "show": false
                    },
                    "axisTick": {
                        "show": false
                    }
                },
                "series": [{
                    "name": "浏览量",
                    "data": data.lineData['view'],
                    "type": "line",
                    "smooth": true,
                    "smoothMonotone": "x",
                    "cursor": "pointer",
                    "showSymbol": false,
                    "lineStyle": {
                        "shadowColor": "rgba(18,61,172,0.5)",
                        "shadowBlur": 10
                    }
                }, {
                    "name": "用户量",
                    "data": data.lineData['user'],
                    "type": "line",
                    "smooth": true,
                    "smoothMonotone": "x",
                    "cursor": "pointer",
                    "showSymbol": false,
                    "lineStyle": {
                        "shadowColor": "rgba(115,226,226,0.5)",
                        "shadowBlur": 10
                    }
                }, {
                    "name": "点赞量",
                    "data": data.lineData['like'],
                    "type": "line",
                    "smooth": true,
                    "smoothMonotone": "x",
                    "cursor": "pointer",
                    "showSymbol": false,
                    "lineStyle": {
                        "shadowColor": "rgba(255,126,133,0.5)",
                        "shadowBlur": 10
                    }
                }, {
                    "name": "评论量",
                    "data": data.lineData['comment'],
                    "type": "line",
                    "smooth": true,
                    "smoothMonotone": "x",
                    "cursor": "pointer",
                    "showSymbol": false,
                    "lineStyle": {
                        "shadowColor": "rgba(255,126,133,0.5)",
                        "shadowBlur": 10
                    }
                }]
            }
            this.myChart.setOption(option);
        },
        async getData() {
            let today = echarts['number'].parseDate(new Date());
            let dayTime = 3600 * 24 * 1000;
            let thatDay = today - dayTime * 30;
            let xAxisData = []
            for (let time = thatDay; time <= today; time += dayTime) {
                xAxisData.push(echarts['format'].formatTime('yyyy-MM-dd', time));
            }
            let lineData = {"view": [], 'user': [], 'like': [], 'comment': []}
            let data = {}
            await getStatistics().then(res => {
                data['view']= res['everyday_view']
                data['like'] = res['everyday_like']
                data['user'] = res['everyday_user']
                data['comment'] = res['everyday_comment']
            })
            xAxisData.forEach(v =>{
                let arr = ['view', 'user', 'like', 'comment']
                arr.forEach(s => {
                    let num = data[s].hasOwnProperty(v) ? data[s][v] : 0
                    lineData[s].push(num)
                })
            })
            return { xAxisData, lineData }
        },
    },
    mounted() {
        this.initialize()
    }
}
</script>

<style lang="scss" scoped>
    #lineChart{
        margin: 10px auto;
        height: 300px;
        width: 930px;
}
</style>
