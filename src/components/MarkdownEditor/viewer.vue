<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/9/15-18:04
INTRODUCTION    markdown 预览
-->

<template>
        <div id="viewer"></div>
</template>

<script>
import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';

export default {
    name: "viewer",
    props: ['mainContent'],
    data() {
        return {}
    },
    watch: {
        mainContent(){
            this.viewer.setMarkdown(this.mainContent)
        }
    },
    methods: {
        init() {
            this.viewer = new Viewer({
                el: document.querySelector('#viewer'),
                height: '600px',
            });
        },
    },
    mounted() {
        this.init()
    }
}
</script>

<style lang="scss" scoped>

</style>
