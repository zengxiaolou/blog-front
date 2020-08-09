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
           placeholder="搜索"
           clearable
           suffix-icon="el-icon-search"
        >
        </el-input>
    </div>
</template>

<script>
    export default {
        name: "search"
    }
</script>

<style lang="scss" scoped>
    .search-box {
        height: 50px;
        width: 80%;
        margin: 10px auto;
        .el-input {
            background-color: #ffffff;
        }
    }
</style>
