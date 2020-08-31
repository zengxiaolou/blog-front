<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/8/21-11:04
INTRODUCTION    文件简介
-->

<template>
    <el-form :model="form"  :rules="rules" ref="form" >
        <span>文章摘要</span>
        <el-divider></el-divider>
        <el-form-item  prop="title">
            <el-input
                    @change="changeTitle"
                    v-model="form.title"
                    class="title-input"
                    prefix-icon="icon iconfont icon-title"
                    clearable
                    placeholder="请输入文章标题">
            </el-input>
        </el-form-item>
        <el-form-item  prop="abstract">
            <el-input
                    @change="changeAbstract"
                    type="textarea"
                    v-model="form.abstract"
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
        data() {
            return {
                form: {
                    title: "",
                    abstract: '',
                },
                rules: {},
            }
        },
        methods: {
            changeTitle() {
                this.$emit('changeTitle', this.form.title)
            },
            changeAbstract() {
                this.$emit('changeAbstract', this.form.abstract)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .el-divider{
        margin: 10px 0;
    }
</style>
