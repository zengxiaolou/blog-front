<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/9/1-09:38
INTRODUCTION    文件简介
-->

<template>
    <div id="editor" @change="changeValue" @blur="changeValue"></div>
</template>

<script>
import 'codemirror/lib/codemirror.css'; // Editor's Dependency Style
import '@toast-ui/editor/dist/toastui-editor.css'; // Editor's Style
import Editor from '@toast-ui/editor';
import {getQiNiuToken} from "api/utils";
import md5 from "js-md5";
import baseSetting from "store/baseSetting";
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
                height: '300px',
                initialEditType: 'markdown',
                previewStyle: 'vertical',
                initialValue: "这里书写你的评论",
            });
            // 删除默认监听事件
            this.editor.eventManager.removeEventHandler('addImageBlobHook')
            // 添加自定义监听事件
            this.editor.eventManager.listen('addImageBlobHook', (blob, callback) => {
                // 此处填写自己的上传逻辑，url为上传后的图片地址
                this.upload(blob, url => {
                    callback(url)
                })
            })
        },
        changeValue(){
            this.$emit('changeMarkdown', this.editor.getMarkdown())
        },
        upload(file, callback) {
            const formData = new FormData()
            formData.append('file', file)
            let timestamp = new Date().getTime();
            let new_name = md5(timestamp + file.name);
            new_name = new_name.substring(0,16)
            getQiNiuToken({"name": new_name}).then(res => {
                formData.append('token', res['token'])
                formData.append('key', new_name)
                const ajax = new XMLHttpRequest()
                ajax.open('POST', 'http://upload-z2.qiniup.com', true)
                ajax.send(formData)
                ajax.onreadystatechange = function() {
                    if (ajax.readyState === 4) {
                        if ((ajax.status >= 200 && ajax.status < 300) || ajax.status === 304) {
                            callback(baseSetting.QiNiuHost + new_name)
                        }
                    }
                }
            });
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
.el-divider{
    margin: 10px 0;
}
</style>
