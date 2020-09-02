<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/9/1-09:38
INTRODUCTION    文件简介
-->

<template>
    <div id="editor" @change="changeValue"></div>
</template>

<script>
    import 'codemirror/lib/codemirror.css'; // Editor's Dependency Style
    import '@toast-ui/editor/dist/toastui-editor.css'; // Editor's Style
    import Editor from '@toast-ui/editor';
    export default {
        name: "index",
        data() {
            return{
            }
        },
        methods: {
            initialize(){
                this.editor = new Editor({
                    el: document.querySelector('#editor'),
                    height: '400px',
                    initialEditType: 'markdown',
                    previewStyle: 'vertical',
                    initialValue: "这里书写文章主内容"
                });

                this.editor.getHtml();
            },
            changeValue(){
                this.$emit('changeContent', this.editor.getHtml());
                this.$emit('changeMarkdown', this.editor.getMarkdown())
            }
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

</style>
