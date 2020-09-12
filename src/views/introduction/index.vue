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
                            <li>基础：掌握Python；了解Go； 熟悉常用数据结构、算法与程序设计；掌握面向对象编程；熟悉Linux操作系统命令与原理，熟悉shell脚本；熟悉进程、线程、协程异步开发；</li>
                            <li>数据库：熟练使用Mysql，了解PostgreSql等关系型数据库；熟练使用Redis、ElasticSearch，了解Mongodb等非关系数据库</li>
                            <li>web前端：掌握html、css、js，掌握Vue框架与Vue-cli脚手架，熟练使用Element、Bootstrap、Mint等UI库进行页面布局与优化，了解echart、ToastUIEditor等第三方库</li>
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
                                <el-col :span="4"  class="heading">2015.10 - 2016.12</el-col>
                                <el-col :span="8" :offset="2"  class="heading heading-right">福州乐群沃客网络信息科技有限公司</el-col>
                            </el-row>
                            <el-row>
                                <el-col  class="heading position">运维</el-col>
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
                        <div class="project">
                            <el-row type="flex" justify="space-between">
                                <el-col :span="6" class="heading">商品寄售平台</el-col>
                            </el-row>
                            <el-row>
                                <span>涉及知识：Python(drf)、Mysql、Redis(cache、broker)、Vue、Docker、Nginx</span>
                                <br>
                                <span>主要负责模块：</span>
                                <ul>
                                    项目说明：本项目由前端Web展示与后端数据存储统计构成，主要为用户提供寄售和结算服务
                                    <li>前端</li>
                                    主要使用Vue-cli搭建项目结构，使用AxiosA、Router、Vuex等组件，配合elementUI库、e-charts等第三方库完成响应式布局
                                    <li>个人中心</li>
                                    功能一：登录注册：采用celery异步发送短信作为验证(Redis作为broker)，使用JWT作为登录凭证。使用手机号和邮箱作为修改密码验证
                                    <br>
                                    功能二：个人资料设置：使用支付宝收款api，要求用户支付一分线到指定账户，核对用户提交的个人信息，完成实名认证
                                    <li>菜单系统</li>
                                    功能一：动态权限菜单：使用drf 认证类(authentication)、权限类(permission)配合Vue中的动态路由与导航守卫，实现动态权限路由，即不同登录角色，显示不同菜单
                                    <li>数据分析系统</li>
                                    功能一：报表展示：后端使用pandas处理订单、交易等数据，通过API向前端提供处理后的数据，前端通过Vue调用echarts将各类数据以预设图表展示用户
                                    <br>
                                    功能二：大订单监测：通过交易数据监听，发现有大订单，后台通过celery异步发送消息给运营，及时发现好项目与大客户
                                    <li>用户商品系统</li>
                                    功能一：数据库设计与使用：使用关系型数据库Mysql作为商品存储数据库，使用Django ORM操作商品的CURD; 利用Redis，hash类型做商品自增与自建(未用上)
                                    <br>
                                    功能二：商品库存预警：使用用户自定库存阀值与预设阀值，通过celery异步发送邮件方式通知卖家增加商品库存
                                    <li>交易与结算系统</li>
                                    功能一：卖家产品销售系统：通过卖家自定和sha1算法为每个卖家和商品绑定唯一的商品路由，提供给卖家作为商品销售页面
                                    <br>
                                    功能二：订单系统：买家通过购买页面，发起订单请求并成功支付后，后端采用异步发送邮箱方式（后期采用微信服务号推送消息方式）通知卖家，交易结果。
                                    <br>
                                    功能三：收款系统：使用支付宝与微信小商户收款二维码，并通过支付宝与微信的开放平台提供的API，获取订单完成情况与具体信息，作为后续结算凭证
                                    <br>
                                    功能四：结算系统：采用T+ 1方式，为卖家提供结算业务，采用脚本方式每天定时为发起提现的商户，通过用户指定结算方式转账
                                </ul>
                            </el-row>
                        </div>
                        <div class="project">
                            <el-row type="flex" justify="space-between">
                                <el-col :span="6" class="heading">实时数据统计系统</el-col>
                            </el-row>
                            <el-row>
                                <span>涉及技术：Python(drf)、Mysql、Redis(缓存)、Vue、Docker、Nginx</span>
                                <br>
                                <span>主要负责模块：</span>
                                <ul>
                                    项目说明：本项目由前端Web展示、后端数据存储统计与客户端采集构成，为用户提供采集、统计与查询服务
                                    <li>简介</li>
                                    登录、认证、菜单、前端功能同上
                                    <li>客户端认证与采集数据传输</li>
                                    功能一： 采用AES/CBC，对称可逆加解密方式传输授权认证信息与采集加密数据
                                    <br>
                                    功能二： 采用websocket通信方式，主动推送用户自定义操作
                                    <li>优化更新与查询效率</li>
                                    功能一：采集上传数据与用户定时刷新获取数据，并发较高，通过ORM更新与查询数据效率偏低，所以采用Mysql读写分离的主从集群模式
                                    <br>
                                    功能二：使用Nginx反向代理，简单拆分项目，实现简易分布式
                                    <br>
                                    功能三：使用Redis，作为页面缓存
                                    <li>简化部署</li>
                                    功能一：通过docker-compose编排工具，配合Docker实现项目，简化项目环境搭建
                                </ul>
                            </el-row>
                        </div>
                        <div class="project">
                            <el-row type="flex" justify="space-between">
                                <el-col :span="6" class="heading">数据中心系统</el-col>
                            </el-row>
                            <el-row>
                                <span>涉及技术：Python(FastAPI)、ElasticSearch、ActiveMQ、Supervisor</span>
                                <br>
                                <span>主要负责模块：</span>
                                <ul>
                                    项目说明：本项目由后端提供API接口与从AMQ等中间件中获取数据写入es构成，主要为上层业务提供数据查询API与原始数据入库服务
                                    <li>API服务</li>
                                    功能一：二次封装常用ES DSL为上层服务提供便捷的API
                                    <br>
                                    功能二：分离出数据格式化层，为上层不同服务请求提供不同格式数据
                                    <br>
                                    功能二：使用协程异步请求，提升API查询效率
                                    <li>AMQ数据入库</li>
                                    功能一： 业务需求处理数据为1000/s，通过对ES入库优化(批量写入等优化方案）与采用ZMQ作为缓冲区，配合各种策略，实现3000/s不丢失数据
                                    <br>
                                    功能二： 分离不同数据来源层，可以同时接入不同数据源的数据入库
                                    <li>编写安装启动shell脚本</li>
                                    功能一：项目采用离线安装部署方式，所以需将所有依赖与解释器打包，编写shell脚本一键安装
                                    <br>
                                    功能二：项目使用Supervisor作为项目运行进程管理工具，简化项目管理
                                </ul>
                            </el-row>
                        </div>
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
            <div class="intention">
                <el-row>
                    <el-col :span="6" class="topic">社交主页</el-col>
                    <el-col :span="16" class="item">
                        <el-row class="gam">
                            <el-col :span="6" class="heading">Github</el-col>
                            <el-col :span="3" :offset="2" class="heading heading-right"><el-link type="primary" href="https://github.com/zengxiaolou" target="_blank">https://github.com/zengxiaolou</el-link></el-col>
                        </el-row>
                        <el-row >
                            <el-col :span="6" class="heading">个人博客</el-col>
                            <el-col :span="3" :offset="2" class="heading heading-right"><el-link type="primary" href="http://www.messstack.com" target="_blank">http://www.messstack.com</el-link></el-col>
                        </el-row>
                    </el-col>
                </el-row>
            </div>
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
                    .project {
                        margin-bottom: 20px;
                    }
                    .gam{
                        margin-bottom: 10px;
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
