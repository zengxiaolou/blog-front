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
    data() {
        return {}
    },
    methods: {
        init() {
            const viewer = new Viewer({
                el: document.querySelector('#viewer'),
                height: '600px',
                initialValue: '# hello'
            });
            viewer.getHtml();
        }
    },
    mounted() {
        this.init()
    }
}
</script>

<style lang="scss" scoped>

</style>
