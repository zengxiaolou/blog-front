<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/8/15-14:20
INTRODUCTION    文件简介
-->

<template>
    <el-scrollbar class="page-component__scroll">
        <div class="header">
            <div class="header-main">
                <h1 class="name">曾小鱼</h1>
                <h5 class="introduce">3年web开发，熟悉MVC、MVVM开发模式，能敏捷开发web服务、分布式爬虫与数据分析</h5>
                <h5 class="introduce">
                    <span>男 | </span>
                    <span>30岁 | </span>
                    <span>四川成都 | </span>
                    <span>5年工作经验 | </span>
                    <span>17781684272 | </span>
                    <span>zengevent@gmail.com</span>
                </h5>
            </div>
        </div>
        <div class="body">
            <div class="intention">
                <el-row>
                    <el-col :span="6" class="topic">求职意向</el-col>
                    <el-col :span="4" class="item">python/Go开发</el-col>
                    <el-col :span="4" class="item">四川成都</el-col>
                    <el-col :span="4" class="item">14-18K</el-col>
                    <el-col :span="4" class="item">1个月内到岗</el-col>
                </el-row>
            </div>
            <el-divider></el-divider>
            <div class="intention">
                <el-row>
                    <el-col :span="6" class="topic">个人简介</el-col>
                    <el-col :span="16" class="item">
                        <ul>
                            <li>拥有扎实的 Python 基础，熟练web后端开发，熟悉web前端页面编写，熟悉web开发流程（MVC/MVVM）</li>
                            <li>参与过多个web项目开发、爬虫项目开发。</li>
                            <li>善于与人沟通，良好的团队合作精神和高度的责任感，能够承受压力，有较强的吃苦耐劳和创新精神</li>
                            <li>拥有较强的自学能力，关注前沿技术，愿意接受挑战与新技术</li>
                        </ul>
                    </el-col>
                </el-row>
            </div>
            <el-divider></el-divider>
            <div class="intention">
                <el-row>
                    <el-col :span="6" class="topic">专业技能</el-col>
                    <el-col :span="16" class="item">
                        <ul>
                            <li>基础：掌握python，了解Go， 熟悉常用数据结构、算法与程序设计，掌握面向对象编程，熟悉Linux操作系统命令与原理；熟悉进程、线程、协程开发</li>
                            <li>数据库：熟练使用Mysql关系型数据库，熟练使用Redis、ElasticSearch等非关系数据库</li>
                            <li>web前端：掌握html、css、js，掌握Vue框架与Vue-cli脚手架，熟练使用Element、Bootstrap、Mint等UI库进行页面布局与优</li>
                            <li>web后端：掌握Python与Go web开发，熟练使用Django、Fastapi、Iris等框架进行web后端开发</li>
                            <li>工具：熟练使用git进行协同开发; 熟悉docker进行项目快速部署，了解k8s自动化部署</li>
                            <li>其他：掌握Scrapy爬虫框架，熟悉scrapy_redis分布式爬虫，熟悉爬虫与反扒；了解AMQ等消息中间件</li>
                            <li>外语：英语四级，能流畅阅读英文文档，快速解决开发中出现的bug</li>
                        </ul>
                    </el-col>
                </el-row>
            </div>
            <el-divider></el-divider>
            <div class="intention">
                <el-row>
                    <el-col :span="6" class="topic">工作经历</el-col>
                    <el-col :span="18" class="item">
                        <div class="work">
                            <el-row type="flex" justify="space-between" >
                                <el-col :span="4"  class="heading">2020.03 - 至今</el-col>
                                <el-col :span="7" :offset="2"  class="heading heading-right"> 北京优炫软件（成都）分公司</el-col>
                            </el-row>
                            <el-row>
                                <el-col  class="heading position">中级python开发</el-col>
                            </el-row>
                            <el-row>
                                <ul>
                                    <li>参与自动化报表项目工作，利用用户提供和日常采集的数据自动生成报表，支持数据分析工作</li>
                                    <li>负责数据中心API接口工作，通过对上层业务的整合，优化查询效率，编写符合上层请求服务需求的API </li>
                                    <li>负责原始数据入库工作，通过整合各不同来源数据格式，提供对外统一接口，通过异步方式实现高并发、快速入库 </li>
                                </ul>
                            </el-row>
                        </div>
                        <div class="work">
                            <el-row type="flex" justify="space-between">
                                <el-col :span="4"  class="heading">2018.10 - 2020.02</el-col>
                                <el-col :span="7" :offset="2"  class="heading heading-right">成都新彻科技有限公司</el-col>
                            </el-row>
                            <el-row>
                                <el-col  class="heading position">Web全栈开发</el-col>
                            </el-row>
                            <el-row>
                                <ul>
                                    <li>负责商品寄售平台项目前端后端开发，为个人开发者提供软件交易、授权服务与定时结算服务</li>
                                    <li>负责App实时数据统计Web平台项目前后端开发，为用户提供实际数据采集、统计、查询、展示服务 </li>
                                </ul>
                            </el-row>
                        </div>
                        <div class="work">
                            <el-row type="flex" justify="space-between">
                                <el-col :span="4"  class="heading">2017.03 - 2018.05</el-col>
                                <el-col :span="8" :offset="2"  class="heading heading-right">福州知远共创网络信息科技有限公司</el-col>
                            </el-row>
                            <el-row>
                                <el-col  class="heading position">后端程序员</el-col>
                            </el-row>
                            <el-row>
                                <ul>
                                    <li>负责公众号后端开发，为用户提供优惠活动和福利、接入第三方结算服务，提供充值服务</li>
                                    <li>负责公司主页开发，展示公司主要业务、发布优惠活动信息等</li>
                                    <li>负责目标用户采集脚本，通过爬取社交app，获取公司潜在用户</li>
                                </ul>
                            </el-row>
                        </div>
                        <div class="work">
                            <el-row type="flex" justify="space-between">
                                <el-col :span="4"  class="heading">2017.03 - 2018.05</el-col>
                                <el-col :span="8" :offset="2"  class="heading heading-right">福州知远共创网络信息科技有限公司</el-col>
                            </el-row>
                            <el-row>
                                <el-col  class="heading position">后端程序员</el-col>
                            </el-row>
                            <el-row>
                                <ul>
                                    <li>参与公司公众号、Web运营维护</li>
                                    <li>优化公众号数据</li></ul>
                            </el-row>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="intention">
                <el-row>
                    <el-col :span="6" class="topic">项目经历</el-col>
                    <el-col :span="16" class="item">
                        <el-row type="flex" justify="space-between">
                            <el-col :span="6" class="heading">商品寄售平台</el-col>
                        </el-row>
                        <el-row>
                            <span>涉及知识：Python(drf)、Mysql、Redis(缓存)、Vue、Docker</span>
                            <br>
                            <span>主要模块：</span>
                            <ul>
                                <li>前端</li>
                                <span>主要使用Vue-cli搭建项目结构，使用AxiosA、Router、Vuex等组件，配合elementUI库、e-charts等第三方库完成响应式布局</span>
                                <li>个人中心</li>
                                <span>功能一： 登录注册。采用celery异步发送短信作为验证，使用JWT作为登录凭证。使用手机号和邮箱作为修改密码验证</span>
                                <span>功能二： 个人资料设置。使用支付宝收款api，要求用户支付一分线到指定账户，核对用户提交的个人信息，完成实名认证</span>
                                <li>菜单系统</li>
                                <span>功能一： 权限</span>
                            </ul>

                        </el-row>
                    </el-col>
                </el-row>
            </div>
            <el-divider></el-divider>
            <div class="intention">
                <el-row>
                    <el-col :span="6" class="topic">教育背景</el-col>
                    <el-col :span="16" class="item">
                        <el-row type="flex" justify="space-between">
                            <el-col :span="6" class="heading">2011.09 - 2015.07</el-col>
                            <el-col :span="3" :offset="2" class="heading heading-right">福建工程学院</el-col>
                        </el-row>
                        <el-row>
                            <el-col class="heading">会计学 本科</el-col>
                        </el-row>
                    </el-col>
                </el-row>
            </div>
            <el-divider></el-divider>
        </div>
        <el-backtop target=".page-component__scroll .el-scrollbar__wrap" :right="20"></el-backtop>
    </el-scrollbar>

</template>

<script>
    export default {
        name: "index"
    }
</script>

<style lang="scss" scoped>
    * { margin:0; padding:0; }
    .el-scrollbar {
        height: 100%;
        min-width: 820px;
        .el-divider{
            margin: 0 20px;
        }
        .header {
            margin: 10px 10px 10px;
            padding: 40px;
            height: 200px;
            background-color: #1866B2;
            color: #ffffff;
            .header-main{
                height: 130px;
                .name{
                    font-size: 35px;
                    font-weight: 900;
                    margin-bottom: 10px;
                }
                .introduce{
                    margin-bottom: 10px;
                    font-size: 16px;
                    font-weight: 500;
                }
            }
        }
        .body {
            width: 100%;
            margin: 40px 10px 0 10px;
            .intention {
                margin-bottom: 30px;
                margin-top: 30px;
                .topic {
                    padding-left: 20px;
                    font-size: 20px;
                    font-weight: 800;
                    color: #1866B2;
                }
                .item {
                    color: #747474;
                    font-size: 14px;
                    li {
                        list-style-type: disc;
                        margin-bottom: 5px;
                    }
                    .heading{
                        font-weight: 900;
                        color: #666666;
                    }
                    .heading-right {
                        margin-right: 10px;
                    }
                    .work {
                        margin-bottom: 20px;
                        .position {
                            margin-bottom: 10px;
                        }
                    }
                }
            }
        }
    }
    /deep/ .el-scrollbar__wrap {
        overflow-x:hidden;
        height: 100%;
    }
    .page-component__scroll{
        height: 100%;
    }
</style>
