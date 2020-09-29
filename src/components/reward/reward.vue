<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/9/25-23:19
INTRODUCTION    打赏组件
-->

<template>
    <div class="reward">
        <el-row type="flex" justify="center" class="tips">
            <el-col :span="10">如果文章对您有帮助，就请作者喝杯奶茶吧´◡`</el-col>
        </el-row>
        <el-row type="flex" justify="center" class="qr">
            <el-col :span="6"><el-image
                style="width: 200px;"
                :src="alipay"
                fit="contain"></el-image>
                </el-col>
            <el-col :span="6"><el-image
                style="width: 200px; "
                :src="wechat"
                fit="contain"></el-image>
            </el-col>
        </el-row>
        <el-row type="flex" justify="center" class="category">
            <el-col :span="6">支付宝</el-col>
            <el-col :span="6">微信</el-col>
        </el-row>

    </div>


</template>

<script>
import baseSetting from "store/baseSetting";
export default {
    name: "reward",
    data() {
        return {
            alipay: baseSetting.QiNiuHost + 'Alipay.png',
            wechat: baseSetting.QiNiuHost + 'Wechat.png',
        }

    }
}
</script>

<style lang="scss" scoped>
    .reward {
        margin-top: 20px;
        text-align: center;
        .tips {
            margin-bottom: 20px;
            color: red;
            font-size: 18px;
        }
        .category {
            margin-top: 10px;
        }

    }
</style>
