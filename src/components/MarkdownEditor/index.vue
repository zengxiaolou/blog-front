<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/8/31-17:04
INTRODUCTION    文件简介
-->

<template>
    <editor
            :initialValue="editorText"
            :options="editorOptions"
            height="400px"
            @blur="onEditorChange"
            ref="editor"
    />
</template>
<script>
    import 'codemirror/lib/codemirror.css';
    import '@toast-ui/editor/dist/toastui-editor.css';

    import Option from './default-options'
    import { Editor } from '@toast-ui/vue-editor';

    export default {
        name: "index",
        components: {
            editor: Editor
        },
        data() {
            return {
                editorText: 'This is initialValue.',
                editorOptions: Option
            };
        },
        methods: {
            onEditorChange(value){
                console.log(this.$refs.editor);
                // console.log(value);
                this.$emit('changeEditor', value)
            }
        }
    };
</script>
