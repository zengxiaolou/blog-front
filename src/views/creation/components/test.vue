<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/8/21-12:37
INTRODUCTION    文件简介
-->

<template>
    //action 是指的七牛云的上传地址 （分好多区）
    <el-form-item label="上传图片" label-width="100px" class='add_company'>
        <el-upload class="upload-demo" action="https://upload-z1.qiniup.com" :on-remove='handleRemove' :on-success="handleSuccess" :file-list="fileList" list-type="picture" :limit='1' :data='uploadToken' :before-upload="beforeUpload">
            <el-button size="medium" type="primary">上传图片</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png/jpeg文件，且不超过2m</div>
        </el-upload>
    </el-form-item>
</template>

<script>
    export default {
        name: "test",
        data() {
            return {
                uploadToken:{
                    key:'',
                    token:''
                }
            }
        },
        methods: {
            handleSuccess(file, fileList) {
                this.addGoodsForm.imgUrl =
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
