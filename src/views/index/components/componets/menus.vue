<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/7/26-17:26
INTRODUCTION    菜单组件
-->
<template>
    <div class="menu">
        <div v-for="value in menus">
            <div class="menu-box">
                <a :class="value.active? 'menu-b': 'menu-a'">
                    <i :class= value.icon></i>
                    <span>{{value.title}}</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "menus",
        data() {
            return{
                menus: [
                    {"title": "返回首页", "icon":"icon iconfont icon-home",    "active": true,   "url":""},
                    {"title": "文章归档", "icon":"icon iconfont icon-archive", "active": false,  "url":""},
                    {"title": "关于博客", "icon":"icon iconfont icon-about",   "active": false,  "url":""},
                    {"title": "我的朋友", "icon":"icon iconfont icon-friend",  "active": false,  "url":""},
                    {"title": "请我喝茶", "icon":"icon iconfont icon-coffee",  "active": false,  "url":""},
                ],
            }
        }
    }
</script>

<style lang="scss" scoped>
    .menu {
        width: 100%;
        height: 300px;
        text-align: center;

        .menu-box{
            width:80%;
            margin: 15px auto;
            :hover{
                background-color: rgba(156, 162, 168, 0.2);
                border: 1px solid #9CA2A8;
                border-radius: 25px;
            }
            .menu-a {
                margin: 0 auto;
                width: 160px;
                height: 40px;
                display: block;
                font-size: 16px;
                font-weight: 500;
                color: #92989E;
                :hover{
                    border: 0;
                    background-color: rgba(255, 255, 255, 0.2);
                    border-radius: 25px;
                }
                i {
                    font-size: 20px;
                    padding-right: 20px;
                }
            }
            .menu-b {
                margin: 0 auto;
                width: 160px;
                height: 40px;
                display: block;
                font-size: 16px;
                font-weight: 500;
                background-color: rgba(250, 90, 112, 0.9);
                -webkit-box-shadow: 0 0 5px #FA5A70;
                color: #ffffff;
                border-radius: 25px;
                :hover{
                    border: 0;
                    background-color: rgba(255, 255, 255, 0.2);
                }
                i {
                    font-size: 20px;
                    padding-right: 20px;
                }
            }
        }

    }
</style>
