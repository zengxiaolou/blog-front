<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/8/31-10:56
INTRODUCTION    文件简介
-->

<template>
    <div>
        <span>标签选择</span>
        <el-divider></el-divider>
        <el-checkbox-group
                v-model="checkedTags"
                :min="0"
                :max="5"
                @change="changeTags">
            <el-checkbox v-for="(value, index) in tags" :label=value.tag :key=index>{{"# " + value.tag}}</el-checkbox>
        </el-checkbox-group>
        <el-row type="flex" justify="end" class="handle-button">
            <el-col :span="3">
                <el-button type="primary" round plain size="mini" @click="open">新增</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import {getTag, addTag} from "../../../api/article";

    export default {
        name: "tags",
        data() {
            return{
                checkedTags: [],
                tags: []
            }
        },
        methods:{
            open(){
                this.$prompt('请输入新增标签', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                }).then(({ value }) => {
                    addTag({tag: value}).then(res =>{
                        this.getTag();
                        this.$message({
                            type: 'success',
                            message: "新增成功"
                        });
                    }).catch(err =>{
                        const key = Object.keys(err.response.data);
                        this.$message.error(err.response.data[key][0].toString());
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消输入'
                    });
                });
            },
            getTag(){
                getTag().then(res => {
                    this.tags = res.results;
                }).catch( err => {
                    const key = Object.keys(err.response.data);
                    this.$message.error(err.response.data[key][0].toString());
                })
            },
            changeTags() {
                this.$emit('changeTags', this.checkedTags)
            }
        },
        mounted() {
            this.getTag()
        }

    }
</script>

<style lang="scss" scoped>
    .el-divider{
        margin: 10px 0;
    }
</style>
