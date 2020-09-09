<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/7/27-00:11
INTRODUCTION    站内文章搜索
-->
<template>
    <div class="search-box">
        <el-input
           placeholder="站内搜索"
           v-model="searchWord"
           clearable
           suffix-icon="el-icon-search"
           @change="search"
        >
        </el-input>
    </div>
</template>

<script>
    export default {
        name: "search",
        data(){
            return{
                searchWord:""
            }
        },
        methods: {
            search(){
                this.$router.push('/search/'+ this.searchWord)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .search-box {
        height: 50px;
        width: 80%;
        margin: 10px auto;
        /deep/ .el-input__inner {
            background-color: #ffffff;
            border-radius: 16px;
            box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
        }
    }
</style>
