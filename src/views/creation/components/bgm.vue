<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/8/20-16:20
INTRODUCTION    文件简介
-->

<template>
    <div>
        <span>封面图片</span>
        <el-divider></el-divider>
        <el-upload
                :action=uploadHost
                ref="upload"
                :auto-upload=true
                :data=postData
                :on-error=uploadFail
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
                        @click="handleRemove(file)">
                        <i class="el-icon-delete"></i>
                    </span>
                </span>
            </div>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
        <el-row type="flex" justify="end">
            <el-col :span="6">
                <el-button type="primary" @click.native.prevent="upload">上传图片</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import {getQiNiuToken} from "../../../api/utils";

    export default {
        name: "bgm",
        data() {
            return {
                dialogImageUrl: '',
                dialogVisible: false,
                disabled: false,
                imageUrls:[],
                uploadHost: 'http://upload-z2.qiniup.com',
                postData: {
                    token: "3hbl1YOcVTeyYsHOxvT73OpT-zK5jRBPda8tgCv_:-0iK5AqALA8FXLL6GLAFTzFyv_c=:eyJzY29wZSI6Im1lc3NzdGFjazAxOlx1NGUwZFx1NzdlNVx1NzA2Yi5qcGciLCJkZWFkbGluZSI6MTU5ODA3MTY1MH0=",
                    key: "不知火.jpg"
                }
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

            upload() {
                const name = [];
                console.log(this.$refs.upload.fileList)
                for ( let i in this.$refs.upload.fileList){
                    name.push(this.$refs.upload.fileList[i].name);
                    console.log(this.$refs.upload.fileList[i].name)
                }
                console.log(name);
                getQiNiuToken({name:name}).then((res) => {
                    console.log(res)
                });
            },
            uploadFail(res){
                console.log(res)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
