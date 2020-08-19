<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/7/26-09:21
INTRODUCTION    头像组件
-->
<template>
    <div class="avatar-box">
        <el-button type="text" @click="centerDialogVisible = true">
            <el-avatar :size="150" :src="avatar" ></el-avatar>
        </el-button>
        <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "avatar",
        data(){
            return{
                avatar: require("../../../../assets/images/others/avatar.jpeg"),
                dialogVisible: false
            }
        },
        methods: {
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
                }
            }

    }
</script>

<style lang="scss" scoped>
    .avatar-box {
        width: 100%;
        height: 200px;
        padding-top: 30px;
        .el-avatar {
            width: 150px;
            height: 150px;
            margin-left: 45px;
        }
    }
</style>
