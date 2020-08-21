<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/8/20-16:20
INTRODUCTION    文件简介
-->

<template>
    <div>
        <el-upload
                :action=uploadHost
                ref="upload"
                list-type="picture-card"
                :auto-upload="false"
                :file-list=fileList>
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{file}">
                <img
                    class="el-upload-list__item-thumbnail"
                    :src="file.url" alt="">
                <span class="el-upload-list__item-actions">
                    <span
                        class="el-upload-list__item-preview"
                        @click="handlePictureCardPreview(file)">
                        <i class="el-icon-zoom-in"></i>
                    </span>
                    <span
                        v-if="!disabled"
                        class="el-upload-list__item-delete"
                        @click="handleRemove(file)">
                        <i class="el-icon-delete"></i>
                    </span>
                </span>
            </div>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "bgm",
        data() {
            return {
                dialogImageUrl: '',
                dialogVisible: false,
                disabled: false,
                fileList: [],
                uploadHost: ''
            };
        },
        methods: {
            handleRemove(file) {
                console.log(file);
                this.$refs.upload.handleRemove(file, this.fileList)
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            handleDownload(file) {
                console.log(file);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
