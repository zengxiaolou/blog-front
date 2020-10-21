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
export default {
    name: "radarChart",
    data() {
        return {

        }
    },
    methods: {
        initialize(){
            this.myChart = echarts['init'](document.getElementById('radarChart'));
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
                    "indicator": [{
                        "name": "Python",
                        "max": 150
                    }, {
                        "name": "Go",
                        "max": 150
                    }, {
                        "name": "Vue",
                        "max": 150
                    }, {
                        "name": "Linux",
                        "max": 100
                    }, {
                        "name": "Docker",
                        "max": 100
                    }, {
                        "name": "DB",
                        "max": 100
                    }, {
                        "name": "Tools",
                        "max": 100
                    }, {
                        "name": "Other",
                        "max": 100
                    },]
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
                        [98,109,125,92,95,94,86,81]
                    ]
                }]
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
    #radarChart{
        margin: 10px auto;
        height: 350px;
        width: 420px;
    }
</style>
