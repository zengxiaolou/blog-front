<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/8/20-16:20
INTRODUCTION    文件简介
-->

<template>
    <div>
        <span><a :href="covers" target="_blank">封面图片</a></span>
        <el-divider></el-divider>
        <el-upload
                :action=uploadHost
                ref="upload"
                :auto-upload=false
                :data=postData
                :on-error=uploadFail
                :on-success=uploadSuccess
                list-type="picture-card">
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
                        @click="handleUpload(file)">
                        <i class="el-icon-upload2"></i>
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
    import {getQiNiuToken} from "api/utils";
    import {errorTips} from "@/utils/tools/message";

    export default {
        name: "bgm",
        props:['covers'],
        data() {
            return {
                dialogImageUrl: '',
                dialogVisible: false,
                disabled: false,
                uploadHost: 'http://upload-z2.qiniup.com',
                postData: {
                    token: "",
                    key: "",
                },
                cover: '',
            };
        },
        methods: {
            handleRemove(file) {
                this.$refs.upload.handleRemove(file, this.fileList)
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            handleUpload(file) {
                let timestamp = new Date().getTime();
                let new_name = timestamp + file.name;
                getQiNiuToken({name:new_name}).then((res) => {
                    this.$message.info("开始上传图片");
                    this.postData.key = new_name;
                    this.postData.token = res['token'];
                    this.$refs.upload.submit();
                    this.cover = "http://qiniiu.hammerc.club/" + new_name
                }).catch(err =>{
                    errorTips(err);
                });
            },
            uploadFail(res){
                this.$message.error(res)
            },
            uploadSuccess(){
                this.$message.success('图片上传成功');
                this.$emit('changeCover', this.cover)
            },
        }
    }
</script>

<style lang="scss" scoped>
    .el-divider{
        margin: 10px 0;
    }
</style>
