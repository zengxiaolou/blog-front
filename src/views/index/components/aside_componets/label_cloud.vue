<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/8/11-23:05
INTRODUCTION    文件描述
-->
<template>
    <el-card class="box-card">
        <div slot="header" >
            <span>标签☁️</span>
        </div>
        <el-tag size="mini"  v-for="(value, index) in tags" :key="index" :type="value.type">
            <router-link :to="'/label/' + value.tag">
                {{"# " + value.tag}}
            </router-link>
        </el-tag>

    </el-card>
</template>

<script>
    import {getTag} from "../../../../api/article";
    import {errorTips} from "../../../../utils/tools/message";

    export default {
        name: "label_cloud",
        data() {
            return {
                tags:[]
            }
        },
        methods: {
            getTag(){
                getTag().then(res => {
                    Array.prototype.randomElement = function () {
                        return this[Math.floor(Math.random() * this.length)]
                    };
                    let tagType = ['success', 'info', 'warning', 'danger', ""];
                    for (let key of Object.keys(res.results)){
                        res.results[key]['type'] = tagType.randomElement()
                    }
                    this.tags = res.results;
                }).catch(err => {
                    errorTips(err);
                })
            }
        },
        mounted() {
            this.getTag()
        }
    }
</script>

<style lang="scss" scoped>
    .el-card {
        margin: 20px auto;
        width: 80%;
        border-radius: 16px;
        /deep/ .el-card__header{
            padding: 10px;
            font-size: 1.2em;
            font-weight: 500;
        }
        /deep/ .el-card__body {
            padding: 10px 5px;

            .el-tag {
                border-radius: 25px;
                margin-right: 10px;
                margin-top: 5px;

            }
        }

    }
</style>
