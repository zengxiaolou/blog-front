<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/8/31-17:04
INTRODUCTION    文件简介
-->

<template>
    <div id="editorSection" @change="onEditorChange"></div>
</template>
<script>
    import "tui-editor/dist/tui-editor.css"; // editor's ui
    import "tui-editor/dist/tui-editor-contents.css"; // editor's content
    import "codemirror/lib/codemirror.css"; // codemirror
    import Option from './default-options'
    import Editor  from 'tui-editor';

    export default {
        name: "index",
        props: {
            content: String,
            value: String
        },
        mounted() {
            this.initialize();
        },
        beforeDestroy() {
            this.tuieditor = null;
            delete this.tuieditor;
        },
        methods: {
            initialize() {
                if (this.$el) {
                    this.tuieditor = new Editor({
                        el: document.querySelector("#editorSection"),
                        initialEditType: "markdown",
                        previewStyle: "vertical",
                        height: "300px"
                    });

                    this.tuieditor.getMarkdown();
                }
            },
            onEditorChange(){
                console.log(this.tuieditor.getMarkdown())
            }
        }
    };
</script>
