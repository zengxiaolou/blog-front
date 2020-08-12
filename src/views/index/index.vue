<template>
    <el-container>
        <el-container>
            <el-aside width="240px">
                <my-aside></my-aside>
            </el-aside>
            <el-main>
                <my-content></my-content>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import myAside from "./components/aside";
    import myContent from "./components/content"
    export default {
        name: "index",
        components: {myAside, myContent},
    };

</script>

<style lang="scss" scoped>
    .el-container{
        height: 100%;
        .el-aside{
            height: 100%;
            padding: 0;
            margin: 0;
            background-color: rgba(255,255,255,0.3);
        }
        .el-main{
            height: 100%;
            padding: 0;
            margin: 0;
            background-color: #FFFFFF;
        }
    }
</style>
