<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/8/19-17:21
INTRODUCTION    创作中心
-->

<template>
    <!-- tui-editor 富文本编辑器   -->
    <div class="creation">
        <el-card>
            <mytuieditor v-model="content" ref="myQuillEditor"></mytuieditor>
        </el-card>
        <el-card>
            <my-bgm></my-bgm>
        </el-card>

    </div>
</template>

<script>
    // tuieditor富文本编辑器
    import mytuieditor from "../../components/article/tuieditor.vue"; //导入tuieditor富文本编辑器组件
    import myBgm from "./components/bgm"
    export default {
        name: "App",
        components: {
            mytuieditor, //注册tuieditor富文本编辑器组件
            myBgm
        },
        data() {
            return {
                content: "tuieditor富文本编辑器初始值"
            };
        }
    };
</script>

<style lang="scss" scoped>
    .creation{
        margin: 20px 20px 20px;
    }

</style>
