<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/9/30-12:38
INTRODUCTION    文件简介
-->

<template>
    <div>
        <login></login>
        <register> </register>
    </div>
</template>

<script>
import Login from 'components/user/login';
import Register from "components/user/register";
import {getToken, removeToken} from "@/utils/service/cookie";
import {captcha} from "api/utils";
export default {
    name: "index",
    components: {Login, Register},
    data() {
        return{

        }
    },
    methods: {
        showLogin() {
            if ( getToken() === undefined){
                this.$store.dispatch('setLoginVisible', true);
            } else {
                this.$confirm('是否退出登录, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    removeToken()
                    localStorage.removeItem("id")
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
    },

}
</script>

<style lang="scss" scoped>

</style>
