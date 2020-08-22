<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/8/21-12:37
INTRODUCTION    文件简介
-->

<template>
    <el-form>
        <el-form-item label="上传封面">
            <el-upload
                    ref="upload"
                    action="https://upload-z2.qiniup.com"
                    :on-success="uploadSuccess"
                    :on-error="uploadFail"
                    :multiple=false
                    list-type="picture"
                    :file-list="fileList"
                    :show-file-list=true
                    accept=".png, .jpg">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: "test",
        data(){
            return {
                imageUrl: "",
                postData: {
                    // 填写你的Token
                    token: "3hbl1YOcVTeyYsHOxvT73OpT-zK5jRBPda8tgCv_:E8QDq8VaAyVVse4v-WUmnyxM6Qk=:eyJzY29wZSI6Im1lc3NzdGFjazAxOlx1NGUwZFx1NzdlNVx1NzA2Yi5qcGciLCJkZWFkbGluZSI6MTU5ODA2NjE3M30=",
                    key: "不知火.jpg"
                },
                EncodedEntryURI: "",
                fileList: [],
            }
        },
        methods: {
            uploadSuccess(res) {
                // this.form.cover = "http://qfeasoeh9.hn-bkt.clouddn.com/" + res.key;
                // this.EncodedEntryURI = res.key;
                this.$refs.upload.clearFiles();
                console.log(res)
            },
            uploadFail(res){
                console.log(this.$refs.upload.fileList);
                console.log(res)
            },
            submitUpload() {
                console.log(this.$refs.upload.fileList);
                this.$refs.upload.submit();
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>
