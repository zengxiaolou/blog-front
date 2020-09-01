<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/8/31-09:46
INTRODUCTION    文件简介
-->

<template>
    <div class="select">
        <span>分类选择</span>
        <el-divider></el-divider>
        <div>
            <el-radio-group  v-model="category"  size="mini">
                <el-radio  @change="submit" v-for="(value, index) in categoryArray" :key=index :label=value.category ></el-radio>
            </el-radio-group>
        </div>
        <el-row type="flex" justify="end" class="handle-button">
            <el-col :span="3">
                <el-button type="primary" round plain size="mini" @click="open">新增</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import {getCategory, addCategory} from "../../../api/article";

export default {
        name: "category",
        data() {
            return{
                category: 'Python',
                categoryArray:[],
                id: 1,
            }
        },
    methods: {
        getCategory(){
            getCategory().then(res => {
                this.categoryArray = res.results;
            }).catch(err => {
                const key = Object.keys(err.response.data);
                this.$message.error(err.response.data[key][0].toString());
            })
        },
        open() {
            this.$prompt('请输入新增分类', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
            }).then(({ value }) => {
                addCategory({category: value}).then(res =>{
                    this.getCategory();
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
        submit(){
            for (let key of Object.keys(this.categoryArray)){
                if (this.categoryArray[key]['category'] === this.category){
                    this.id = this.categoryArray[key]['id'];
                    break
                }
            }
            console.log(this.id);
            this.$emit('changeCategory', this.id)
        }
    },
    mounted() {
        this.getCategory()
    }
    }
</script>

<style lang="scss" scoped>
    .select{
        .el-divider{
            margin: 10px 0;
        }
        .handle-button{
            margin-top: 10px;
        }
        .el-checkbox-group {
            margin-top: 20px;
            margin-bottom: 20px;
        }
    }
</style>
