<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/8/21-11:04
INTRODUCTION    文件简介
-->

<template>
    <el-form :model="form"  ref="form" >
        <span> 文章摘要</span>
        <el-divider></el-divider>
        <el-form-item  prop="title">
            <el-input
                    @blur="changeTitle"
                    v-model="newTitle"
                    class="title-input"
                    prefix-icon="icon iconfont icon-title"
                    clearable
                    placeholder="请输入文章标题">
            </el-input>
        </el-form-item>
        <el-form-item  prop="abstract">
            <el-input
                    @blur="changeAbstract"
                    type="textarea"
                    v-model="newAbstract"
                    class="abstract-input"
                    prefix-icon="icon iconfont icon-abstract"
                    clearable
                    :autosize="{minRows:2, maxRows:6}"
                    placeholder="请输入文章简介">
            </el-input>
        </el-form-item>
    </el-form>
</template>

<script>

    export default {
        name: "abstract",
        props: ['title', 'abstract'],
        data() {
            return {
                form:{},
                newTitle: this.title,
                newAbstract: this.abstract
            }
        },
        watch: {
            title(val){
                this.newTitle = val
            },
            abstract(val){
                this.newAbstract = val
            }
        },
        methods: {
            changeTitle() {
                this.$emit('changeTitle', this.newTitle)
            },
            changeAbstract() {
                this.$emit('changeAbstract', this.newAbstract)
            },
        }
    }
</script>

<style lang="scss" scoped>
    .el-divider{
        margin: 10px 0;
    }
</style>
