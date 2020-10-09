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
                v-model="newCheckedTags"
                :min="0"
                :max="5"
                @change="changeTags">
            <el-checkbox v-for="(value, index) in tags" :label=value.tag :key=index>{{"# " + value.tag}}</el-checkbox>
        </el-checkbox-group>
        <el-row type="flex" justify="end" class="handle-button">
            <el-col :span="3">
                <el-button type="primary" round plain size="mini" @click="open">新增</el-button>
            </el-col>
            <el-col :offset="1" :span="3">
                <el-button  type="danger" round plain size="mini" @click="cancel">删除</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import {getTag, addTag, deleteTag} from "api/article";
    import {errorTips} from "@/utils/tools/message";

    export default {
        name: "tags",
        props: ['checkedTags'],
        data() {
            return{
                tags: [],
                ids: [],
                newCheckedTags: []
            }
        },
        watch: {
          checkedTags(val){
              this.newCheckedTags = val
              this.changeTags()
          }
        },
        methods:{
            open(){
                this.$prompt('请输入新增标签', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                }).then(({ value }) => {
                    addTag({tag: value}).then(() =>{
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
                getTag({"size":100}).then(res => {
                    this.tags = res['results'];
                }).catch( err => {
                    const key = Object.keys(err.response.data);
                    this.$message.error(err.response.data[key][0].toString());
                })
            },
            changeTags() {
                this.ids = [];
                for (let i in this.checkedTags){
                    if (this.checkedTags.hasOwnProperty(i)){
                        for (let key of Object.keys(this.tags)){
                            if (this.tags[key]['tag'] === this.checkedTags[i]){
                                this.ids.push(this.tags[key]['id'])
                            }
                        }
                    }
                }
                this.$emit('changeTags', this.ids)
            },
            cancel(){
                this.$confirm('此操作将删除该标签, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.ids = [];
                    for (let i in this.checkedTags){
                        if (this.checkedTags.hasOwnProperty(i)){
                            for (let key of Object.keys(this.tags)){
                                if (this.tags[key]['tag'] === this.checkedTags[i]){
                                    this.ids.push(this.tags[key]['id'])
                                }
                            }
                        }
                    }
                    for (let i in this.ids){
                        if (this.ids.hasOwnProperty(i)) {
                            if ( i <= this.ids.length){
                                deleteTag(this.ids[i]).then(() => {
                                    this.$message({
                                        type: 'success',
                                        message: '删除成功!'
                                    });
                                    this.getTag()
                                }).catch(err => {
                                    errorTips(err)
                                });
                            }
                        }
                    }

                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
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
    .handle-button{
        margin-top: 10px;
    }
</style>
