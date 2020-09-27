<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/9/1-09:38
INTRODUCTION    文件简介
-->

<template>
    <div>
        <span >文章内容</span>
        <el-divider></el-divider>
        <div id="editor" @change="changeValue" @blur="changeValue"></div>
    </div>
</template>

<script>
    import 'codemirror/lib/codemirror.css'; // Editor's Dependency Style
    import '@toast-ui/editor/dist/toastui-editor.css'; // Editor's Style
    import Editor from '@toast-ui/editor';
    export default {
        name: "index",
        props: ['markdown'],
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
                    el: document.querySelector('#editor'),
                    height: '400px',
                    initialEditType: 'markdown',
                    previewStyle: 'vertical',
                    initialValue: "这里书写文章主内容",
                });
            },
            changeValue(){
                this.$emit('changeContent', this.editor.getHtml());
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
