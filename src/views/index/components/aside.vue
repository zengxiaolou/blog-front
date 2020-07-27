<!--
AUTHOR:  zeng_xiao_yu
GITHUB:  https://github.com/zengxiaolou
EMAIL:   zengevent@gmail.com
TIME:    2020/5/10-17:36
-->

<template>
    <div class="aside-area">
        <my-avatar></my-avatar>
        <my-abstract></my-abstract>
        <my-menu></my-menu>
        <my-search></my-search>
    </div>

</template>

<script>
    import myAvatar from './componets/avatar';
    import myAbstract from './componets/abstract';
    import myMenu from './componets/menus'
    import mySearch from './componets/search'
    export default {
        name: "Aside",
        data(){
            return{

            }
        },
        components: {myAvatar, myAbstract, myMenu, mySearch}
    }
</script>

<style lang="scss" scoped>
    .aside-area{
        width: 100%;
        height: 100%;
        background-color: rgba(255,255,255,0.3);
    }
</style>
