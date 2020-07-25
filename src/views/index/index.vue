<template>
    <el-container>
        <el-container>
            <el-aside width="240px">
                <Aside></Aside>
            </el-aside>
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</template>

<script>
    import Aside from "./components/aside";
    export default {
        name: "index",
        components: {Aside},
        comments: {Aside,}
    };

</script>

<style lang="scss" scoped>
    .el-container{
        height: 100%;
        .el-aside{
            height: 100%;
            padding: 0;
            margin: 0;
            background-color: #FBFBFB;
        }
        .el-main{
            height: 100%;
            padding: 0;
            margin: 0;
            background-color: #FFFFFF;
        }
    }
</style>
