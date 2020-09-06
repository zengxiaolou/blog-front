<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/7/26-16:43
INTRODUCTION    文章摘要
-->
<template>
    <div class="abstract">
        <el-row :gutter="10">
            <el-col :span="8" v-for="(value, index) in detail" :key=index>
                 <router-link :to=value.path>{{value.name}}</router-link>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "abstract",
        data() {
            return{
                detail: [
                    {name: "Article", "path": "/index"},
                    {name: "View", "path": "/label"},
                    {name: "star", "path": "/article"},
                    {name: "089",  "path": "/index"},
                    {name: "088",  "path": "/label"},
                    {name: "000",  "path": "/article"}
                    ]
            }
        }

    }
</script>

<style lang="scss" scoped>
    .abstract {
        margin-top: 20px;
        width: 98%;
        margin-bottom: 20px;
        .el-row{
            padding: 0 30px;
            font-weight: 500;
            .el-col {
                text-align: center;
            }
        }

    }
</style>
