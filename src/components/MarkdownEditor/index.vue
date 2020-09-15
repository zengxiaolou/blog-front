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
    import axios from "axios";
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
                    initialValue: "这里书写文章主内容"
                });
                // 添加自定义按钮
                // 获取编辑器上的功能条
                let toolbar = this.editor.getUI().getToolbar();
                let fileDom = this.$refs.files;
                // 添加事件
                this.editor.eventManager.addEventType('uploadEvent')
                this.editor.eventManager.listen('uploadEvent', () => {
                    fileDom.click();
                    this.getqiniuToken()
                    // Do some other thing...
                });
                // 添加自定按钮 第二个参数代表位置，不传默认放在最后面
                toolbar.addButton({
                    name: 'customize',
                    className: 'upload-img',
                    event: 'uploadEvent',
                    tooltip: 'insert image',
                    $el: $('<button class="custom-button fa fa-image" style="font-size: 14px; color: #000"></button>')
                }, 13);
            },

            // 添加图片到markdown
            addImgToMd(data) {
                let editor = this.editor.getCodeMirror();
                let editorHtml = this.editor.getCurrentModeEditor();
                let isMarkdownMode = this.editor.isMarkdownMode();
                if (isMarkdownMode) {
                    editor.replaceSelection(`![img](${data})`);
                }else {
                    let range = editorHtml.getRange();
                    let img = document.createElement('img');
                    img.src = `${data}`;
                    img.alt = "img";
                    range.insertNode(img);
                }
            },

            // 上传图片
            uploadFile(e) {
                let target = e.target;
                let file = target.files[0];
                const formData = new FormData();
                formData.append("file", file)
                formData.append("token", this.qnToken);
                this.$axios({
                    method: "post",
                    url: "https://upload.qiniup.com",
                    data: formData
                }).then(res => {
                    // 上传成功地址拼接
                    let imgUrl = "https://qiniu.****.com/" + res.data.key;
                    this.addImgToMd(imgUrl)
                }).catch(error => {
                    console.error(error.response);
                });
                target.value = ""; //这个地方需要清除一下不然会有问题
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
