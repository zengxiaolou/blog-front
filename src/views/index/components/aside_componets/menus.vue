<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/7/26-17:26
INTRODUCTION    菜单组件
-->
<template>
    <div class="my-menu">
        <el-menu
                default-active="/index"
                router
                text-color="#969CA2"
                class="el-menu-vertical">
            <el-menu-item v-for="(value, index) in menu" :key="index" :index=value.path >
                <i :class=value.icon></i>
                <span slot="title">{{value.title}}</span>
            </el-menu-item>
            <el-menu-item v-if="role === 1" :index=creation.path>
                <i :class=creation.icon></i>
                <span slot="title">{{creation.title}}</span>
            </el-menu-item>
        </el-menu>

    </div>
</template>

<script>
    export default {
        name: "menus",
        data() {
            return{
                menu: [
                    {"title": "返回首页", "icon":"icon iconfont icon-home",         "path":"/index"},
                    {"title": "文章归档", "icon":"icon iconfont icon-archive",      "path":"/archive"},
                    {"title": "关于博客", "icon":"icon iconfont icon-about",        "path":"/about"},
                    {"title": "个人简介", "icon":"icon iconfont icon-introduction", "path":"/introduction"},
                    {"title": "请我喝茶", "icon":"icon iconfont icon-coffee",       "path":"/sponsor"},
                    {"title": "站内搜索", "icon":"icon iconfont icon-search",       "path":"/search"},
                ],
                role: 0,
                creation: {"title": "创作中心", "icon":"icon iconfont icon-creation",     "path":"/creation"},
            }
        },
        methods: {
            isShowCreation(){
                if (localStorage.role === 'true'){
                    this.role = 1
                }else {
                    this.role = 0
                }
            }
        },
        created() {
            this.isShowCreation()
        }
    }
</script>



<style lang="scss" scoped>
    .my-menu /deep/ ul{
        margin: 0 auto ;
        border-right: none;
        padding: 0 40px;
    }

    .el-menu-vertical{
        width: 100%;
        background-color: rgba(255,255,255,0);
        .el-menu-item{
            font-size: 16px;
            font-weight: 500;
            border-radius: 25px;
            i{
                font-size: 20px;
                margin-right: 10px
            }
        }
        /deep/ .el-menu-item:hover{
            outline: 0 ;
            border-radius: 25px;
        }
    }
</style>
