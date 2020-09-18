<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/8/9-22:20
INTRODUCTION    我的社交
-->

<template>
    <el-card class="box-card">
        <div slot="header" >
            <span>社交直达</span>
        </div>
        <el-row>
            <el-col :span="6" v-for="(value, index) in gam" :key="index">
                <el-tooltip class="item" effect="light" :content=value.name :placement=value.local>
                    <a class="gam-icon" :href=value.url target="_blank">
                        <el-avatar :size="size" :icon=value.icon :class=value.style></el-avatar></a>
                </el-tooltip>
            </el-col>
            <el-col :span="6">
                 <div  @click="showQR">
                    <el-tooltip class="item" effect="light" content="微信" placement="bottom-end">
                     <el-avatar :size="size" icon="icon iconfont icon-wechat" class="gam-wechat" ></el-avatar>
                    </el-tooltip>
                </div>
            </el-col>
        </el-row>
        <el-dialog
                title="扫描二维码交流学习"
                :visible.sync="dialogVisible"
                width="30%">
            <el-image style="width: 100%;" :src="wxQR" fit="contain"></el-image>
        </el-dialog>
    </el-card>

</template>

<script>
    export default {
        name: "gam",
        data(){
            return{
                gam: [
                    {"name": "github",   "style": "gam-github",    "local": "top-end" ,    "icon": "icon iconfont icon-github",          "url": "https://github.com/zengxiaolou"},
                    {"name": "biliblii", "style": "gam-bilibili",  "local": "top-end" ,    "icon": "icon iconfont icon-bilibili",        "url": "https://space.bilibili.com/207928746"},
                    {"name": "stack",    "style": "gam-stack",     "local": "top-end" ,    "icon": "icon iconfont icon-stack-overflow" , "url": "https://stackoverflow.com/users/12066502/event-zeng"},
                    {"name": "zhihu",    "style": "gam-zhihu",     "local": "top-end" ,    "icon": "icon iconfont icon-zhihu",           "url": "https://www.zhihu.com/people/xiao-lu-63-18-15"},
                    {"name": "leetcode", "style": "gam-leetcode",  "local": "bottom-end" , "icon": "icon iconfont icon-leetcode",        "url": "https://leetcode-cn.com/u/zengxiaolou/"},
                    {"name": "QQ",       "style": "gam-qq",        "local": "bottom-end" , "icon": "icon iconfont icon-QQ",              "url": "tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=564259844&website=www.oicqzone.com"}
                    ],
                size: "medium",
                wxQR: 'http://qfeasoeh9.hn-bkt.clouddn.com/wx_qr.4c67a998.jpg',
                dialogVisible: false,
            }
        },
        methods: {
            showQR(){
                this.dialogVisible = true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .el-card {
        margin: 10px auto;
        width: 80%;
        border-radius: 16px;
        /deep/ .el-card__header{
            padding: 5px 10px;
            font-size: 1.2em;
            font-weight: 500;
        }
        /deep/ .el-card__body {
            padding: 10px 10px;
            .gam-github {
                color: black;
                background-color: rgba(25,23,23,.1);
            }
            .gam-bilibili {
                color: #e76a8d;
                background-color: rgba(231,106,141,.1);
            }
            .gam-zhihu {
                color: #1e88e5;
                background-color: rgba(30,136,229,.1);
            }
            .gam-stack {
                color: #FC732D;
                background-color: rgba(252,150,97,.1);
            }

            .gam-leetcode {
                color: #FF9B39;
                background-color: rgba(204,149,96,.1);
            }
            .gam-qq {
                color: #00A0F9;
                background-color: rgba(111,201,251,.2);
            }
            .gam-wechat {
                color: #00c15e;
                background-color: rgba(0,219,107,.2);
            }

        }

    }

</style>
