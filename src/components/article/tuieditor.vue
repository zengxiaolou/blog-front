<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/8/20-15:42
INTRODUCTION    mark-down组件
-->

<template>
    <div id="editorSection"></div>
</template>

<script>
    import Editor from "tui-editor"; /* ES6 */
    import "tui-editor/dist/tui-editor.css"; // editor's ui
    import "tui-editor/dist/tui-editor-contents.css"; // editor's content
    import "codemirror/lib/codemirror.css"; // codemirror
    import "highlight.js/styles/github.css"; // code block highlight

    export default {
        name: "mytuieditor",
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
                        height: "400px",
                        useCommandShortcut: true,
                        usageStatistics: false,
                        hideModeSwitch: false,
                        toolbarItems: [
                            'heading',
                            'bold',
                            'italic',
                            'strike',
                            'divider',
                            'hr',
                            'quote',
                            'divider',
                            'ul',
                            'ol',
                            'task',
                            'indent',
                            'outdent',
                            'divider',
                            'table',
                            'image',
                            'link',
                            'divider',
                            'code',
                            'codeblock'
                        ]
                    });

                    this.tuieditor.getHtml();
                }
            }
        }
    };
</script>

<style>
</style>
