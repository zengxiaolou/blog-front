<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/9/15-18:04
INTRODUCTION    markdown 预览
-->

<template>
    <div :id="'viewer' + index" ></div>
</template>

<script>
import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';

export default {
    name: "viewer",
    props: ['content', 'index'],
    data() {
        return {}
    },
    watch: {
        content(val){
            this.viewer.setMarkdown(val)
        }
    },
    methods: {
        init() {
            this.viewer = new Viewer({
                el: document.getElementById("viewer" + this.index),
                height: '200px',
            });
            this.viewer.setMarkdown(this.content)
        },
    },
    mounted() {
        this.init()
    }
}
</script>

<style lang="scss" scoped>

</style>
