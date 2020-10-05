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
            <el-row type="flex" justify="space-between">
             <el-col :span="6">标签</el-col>
                <el-col :span="6"><el-button type="text" @click.prevent="more">more</el-button></el-col>
            </el-row>
        </div>
        <el-tag size="mini"  v-for="(value, index) in tags" :key="index" :type="value.type">
            <router-link :to="'/label/' + value.tag">
                {{"# " + value.tag}}
            </router-link>
        </el-tag>
        <el-dialog
            :visible.sync="tagDialogVisible"
            width="30%"
            center>
            <el-tag size="mini"  v-for="(value, index) in tagSet" :key="index" :type="value.type">
                <router-link :to="'/label/' + value.tag">
                    {{"# " + value.tag}}
                </router-link>
            </el-tag>
            <span slot="footer" class="dialog-footer">
                <el-button type="text" @click="more">换一批</el-button>
            </span>
        </el-dialog>
    </el-card>
</template>

<script>
    import {getTag} from "api/article";
    import {errorTips} from "@/utils/tools/message";

    export default {
        name: "label_cloud",
        data() {
            return {
                tags:[],
                tagDialogVisible: false,
                tagSet: [],
                pageSize: 20,
                pageNum: 1,

            }
        },
        methods: {
            getTag(){
                getTag().then(res => {
                    Array.prototype.randomElement = function () {
                        return this[Math.floor(Math.random() * this.length)]
                    };
                    let tagType = ['success', 'info', 'warning', 'danger', ""];
                    for (let key of Object.keys(res['results'])){
                        res['results'][key]['type'] = tagType.randomElement()
                    }
                    this.tags = res['results'];
                }).catch(err => {
                    errorTips(err);
                })
            },
            more(){
                let params = {
                    "size": this.pageSize,
                    "page": this.pageNum
                }
                getTag(params).then(res => {
                    Array.prototype.randomElement = function () {
                        return this[Math.floor(Math.random() * this.length)]
                    };
                    let tagType = ['success', 'info', 'warning', 'danger', ""];
                    for (let key of Object.keys(res['results'])){
                        res['results'][key]['type'] = tagType.randomElement()
                    }
                    this.tagSet = res['results'];
                    this.tagDialogVisible = true
                }).catch(() => {
                    this.pageNum = 1
                })
            },

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
            padding: 10px 10px 0 10px ;
            font-size: 1.2em;
            font-weight: 500;
        }
        /deep/ .el-card__body {
            padding: 10px 5px 10px 10px;

            .el-tag {
                border-radius: 25px;
                margin-right: 10px;
                margin-top: 5px;

            }
        }

    }
</style>
