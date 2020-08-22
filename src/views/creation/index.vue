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
        <el-card class="markdown">
            <mytuieditor v-model="content" ref="myQuillEditor"></mytuieditor>
        </el-card>
        <el-row type="flex" justify="center" class="info">
            <el-col :span="12">
                <el-card  class="upload">
                    <my-bgm></my-bgm>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card class="abstract">
                    <my-abstract></my-abstract>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    // tuieditor富文本编辑器
    import mytuieditor from "../../components/article/tuieditor.vue"; //导入tuieditor富文本编辑器组件
    import myBgm from "./components/bgm"
    import myAbstract from "./components/abstract"
    export default {
        name: "App",
        components: {
            mytuieditor, //注册tuieditor富文本编辑器组件
            myBgm,
            myAbstract,
        },
        data() {
            return {
                content: "tuieditor富文本编辑器初始值",
            };
        }
    };
</script>

<style lang="scss" scoped>
    .creation{
        margin: 20px 20px 20px;
        .info {
            margin-top: 20px;
            .abstract {
                margin-left: 10px;
            }
        }


    }

</style>
