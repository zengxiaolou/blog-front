<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/9/1-09:38
INTRODUCTION    文件简介
-->

<template>
    <div id="'editor' + index" @change="changeValue" @blur="changeValue"></div>
</template>

<script>
import 'codemirror/lib/codemirror.css'; // Editor's Dependency Style
import '@toast-ui/editor/dist/toastui-editor.css'; // Editor's Style
import Editor from '@toast-ui/editor';
export default {
    name: "reply_markdown",
    props: ['markdown', 'index'],
    data() {
        return{
        }
    },
    watch: {
        markdown(val){
            this.editor.setMarkdown(val)
        }
    },
    methods: {
        initialize(){
            this.editor = new Editor({
                el: document.getElementById('editor' + this.index),
                height: '300px',
                initialEditType: 'markdown',
                previewStyle: 'vertical',
                initialValue: "这里书写你的评论",
            });
        },
        changeValue(){
            this.$emit('changeMarkdown', this.editor.getMarkdown())
        },
    },
    mounted() {
        this.initialize()
    },
    beforeDestroy() {
        this.editor = null;
        delete this.editor;
    }
}
</script>

<style lang="scss" scoped>
.el-divider{
    margin: 10px 0;
}
</style>
