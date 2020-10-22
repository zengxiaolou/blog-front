<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/10/21-14:06
INTRODUCTION    文件简介
-->

<template>
    <div >
        <div id="radarChart"></div>
    </div>
</template>

<script>
import echarts from 'echarts'
import {getStatistics} from "api/statistics";
import {getCategory} from "api/article";
export default {
    name: "radarChart",
    data() {
        return {

        }
    },
    methods: {
        async initialize(){
            this.myChart = echarts['init'](document.getElementById('radarChart'));
            let data = await this.getData()
            let option = {
                backgroundColor: '',
                "normal": {
                    "top": 200,
                    "left": 300,
                    "width": 500,
                    "height": 400,
                    "zIndex": 6,
                    "backgroundColor": ""
                },
                "title": {
                    "show": true,
                    "text": "文章分类雷达图",
                    "left": "center",
                    "top": "1%",
                    "textStyle": {
                        "fontSize": 20,
                        "color": "#000000",
                        "fontStyle": "normal",
                    }
                },
                "tooltip": {
                    "show": true,
                    "trigger": "item"
                },
                "radar": {
                    "center": ["50%", "55%"],
                    "radius": "70%",
                    "startAngle": 90,
                    "splitNumber": 4,
                    "shape": "circle",
                    "splitArea": {
                        "areaStyle": {
                            "color": ["transparent"]
                        }
                    },
                    "axisLabel": {
                        "show": false,
                        "fontSize": 18,
                        "color": "#3DAAE9",
                        "fontStyle": "normal",
                    },
                    "axisLine": {
                        "show": true,
                        "lineStyle": {
                            "color": "#3DAAE9"//
                        }
                    },
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "color": "#3DAAE9"//
                        }
                    },
                    "indicator": data.name
                },
                "series": [{
                    "name": "文章分类",
                    "type": "radar",
                    "symbol": "circle",
                    "symbolSize": 10,
                    "areaStyle": {
                        "normal": {
                            "color": "rgba(41,199,205,1)"
                        }
                    },
                    itemStyle:{
                        color:'rgba(41,199,205,1)',
                        borderColor:'rgba(41,199,205,0.2)',
                        borderWidth:8,
                    },
                    "lineStyle": {
                        "normal": {
                            "type": "dashed",

                            "color": "rgba(41,199,205,1)",
                            "width": 1
                        }
                    },
                    "data": [
                        data.data
                    ]
                }]
            };
            this.myChart.setOption(option);
        },
        async getData() {
            let data = []
            let name = []
            await getCategory({"size": 20}).then(res => {
                let init_data = res['results']
                let max = 10
                init_data.forEach((v) => {
                    data.push(v['num'])
                    let tmp = { "name": v['category'], "max": max}
                    name.push(tmp)
                })
            })
            return {data, name}
        },
    },
    mounted() {
        this.initialize()
    }
}
</script>

<style lang="scss" scoped>
    #radarChart{
        margin: 10px auto;
        height: 350px;
        width: 420px;
    }
</style>
