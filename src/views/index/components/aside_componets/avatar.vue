<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/7/26-09:21
INTRODUCTION    头像组件
-->
<template>
    <div class="avatar-box">
        <el-button type="text" @click="showLogin">
            <el-avatar :size="150" :src=avatar ></el-avatar>
        </el-button>
        <login></login>
        <register> </register>
    </div>
</template>

<script>
import Login from 'components/user/login';
import Register from "components/user/register";
import {getToken, removeToken} from "@/utils/service/cookie";
import {captcha} from "api/utils";
import myBase from 'store/baseSetting'

export default {
        inject: ['reload'],
        components: {Login, Register},
        name: "avatar",
        data(){
            return{
                avatar: myBase.QiNiuHost + "avatar.dcfba41f.jpeg",
            }
        },
        methods: {
            // 刷新验证码
            changeCaptcha() {
                captcha().then((res) =>{
                    this.captcha_key = res['captcha_key'];
                    this.url = 'data:image/png;base64,' + res['captcha_image'];
                })
            },
            // 显示登录dialog
            showLogin() {
                if ( getToken() === undefined){
                    this.$store.dispatch('setLoginVisible', true);
                } else {
                    this.$confirm('是否退出登录, 是否继续?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => { removeToken()
                        localStorage.removeItem("id")
                        localStorage.removeItem('role')
                        this.$message({
                            type: 'success',
                            message: '退出成功!'
                        });
                        this.reload()
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '取消退出'
                        });
                    });
                }
            },
            // 获取用户信息
            getUserInfo(){
                if (getToken()){
                    getInfo(localStorage.id).then(res => {
                        console.log(res)
                    })
                }
            }
        },
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
