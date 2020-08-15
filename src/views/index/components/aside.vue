<!--
AUTHOR:  zeng_xiao_yu
GITHUB:  https://github.com/zengxiaolou
EMAIL:   zengevent@gmail.com
TIME:    2020/5/10-17:36
-->

<template>
    <el-scrollbar style="height: 100%">
        <div class="aside-area">
            <my-avatar></my-avatar>
            <my-abstract></my-abstract>
            <my-menu></my-menu>
            <my-search></my-search>
            <my-gam></my-gam>
            <label_cloud></label_cloud>
            <my-article></my-article>
            <my-record></my-record>
        </div>
    </el-scrollbar>
</template>

<script>
    import myAvatar from './aside_componets/avatar';
    import myAbstract from './aside_componets/abstract';
    import myMenu from './aside_componets/menus';
    import mySearch from './aside_componets/search';
    import myGam from './aside_componets/gam';
    import label_cloud from "./aside_componets/label_cloud";
    import myArticle from "./aside_componets/articles";
    import myRecord from "./aside_componets/record"
    export default {
        name: "Aside",
        data(){
            return{

            }
        },
        components: {myAvatar, myAbstract, myMenu, mySearch, myGam, label_cloud, myArticle, myRecord}
    }
</script>

<style lang="scss" scoped>
    .el-scrollbar{

        overflow-x: hidden;

        .aside-area{
            width: 98%;
            background-color: rgba(255,255,255,0.3);
        }
    }
    /deep/ .el-scrollbar__wrap {
        overflow-x:hidden;
    }

</style>
