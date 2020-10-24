# counter_front

## 简介
    该项目由vue2作为前端框架，脚手架为vue-cli4
    用到了vue全家桶（vuex， vue-router、 Axios）
    UI库： ElementUI
    第三方组件：echarts、toastUIEditor（目前仅为基础版本，已修改图片上传七牛云）
    api遵循Restful 规范
    
    vue-cli4已对打包做了不少优化，但打包出来了仍然很大，
    故对文件进行了gzip（配合nginx），将vue全家桶、echarts、elementUI通过CDN拉取
    具体操作，有空将在blog中分享
    


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Project File Structure
    由于整个前端项目有vue-cli4搭建，公共部分目录结构基本一致，就不做过多的介绍，主要介绍src中各目录文件作用，目前项目结构较乱，后续有时间将重新调整

     src
     ├── App.vue                项目入口
     ├── api                    接口文件夹
     │   ├── article.js         文章相关
     │   ├── operations.js      用户操作相关
     │   ├── statistics.js      数据统计相关
     │   ├── user.js            用户信息相关
     │   └── utils.js           小工具
     ├── assets                 资源            
     │   ├── css          主要是elementUI相关与css初始化常用样式文件
     │   │   ├── btn.scss 
     │   │   ├── element-ui.scss
     │   │   ├── element-variables.scss
     │   │   ├── index.scss
     │   │   ├── mixin.scss
     │   │   ├── sidebar.scss
     │   │   ├── transition.scss
     │   │   └── variables.scss
     │   ├── iconfont   图标相关，使用阿里巴巴图标库
     │   │   ├── demo.css
     │   │   ├── demo_index.html
     │   │   ├── iconfont.css
     │   │   ├── iconfont.eot
     │   │   ├── iconfont.js
     │   │   ├── iconfont.json
     │   │   ├── iconfont.svg
     │   │   ├── iconfont.ttf
     │   │   ├── iconfont.woff
     │   │   └── iconfont.woff2
     │   └── images     图片相关，为了加速加载，所有图片均由OSS（七牛云服务器）加载
     ├── components           组件相关
     │   ├── CalendarHeatMap    日历热力图
     │   │   └── index.vue
     │   ├── MarkdownEditor     toastUIEditor
     │   │   ├── index.vue      用于创作中心
     │   │   ├── markdown.vue   最基础markdown
     │   │   ├── reply_markdown.vue     用于回复评论
     │   │   ├── viewer.vue             文章展示使用
     │   │   └── viewer_comment.vue     评论展示使用
     │   ├── article    文章基础信息
     │   │   └── article_preview.vue
     │   ├── charts     echart各类图
     │   │   ├── lineCharts.vue     曲/折线图
     │   │   ├── pieCharts.vue      饼图
     │   │   └── radarChart.vue     雷达图
     │   ├── error      各类错误router组件（目前较混乱，后续有时间调整）
     │   │   ├── error_400.vue
     │   │   ├── error_401.vue
     │   │   ├── error_403.vue
     │   │   ├── error_404.vue
     │   │   ├── error_408.vue
     │   │   ├── error_500.vue
     │   │   ├── error_501.vue
     │   │   ├── error_502.vue
     │   │   ├── error_503.vue
     │   │   ├── error_504.vue
     │   │   └── error_505.vue
     │   ├── reward     打赏
     │   │   └── reward.vue
     │   └── user       用户登录注册dialog
     │       ├── login.vue      登录
     │       └── register.vue   注册
     ├── filters    过滤器
     │   └── index.js   
     ├── main.js    项目main文件
     ├── mixins     混入，暂时还没有使用上
     │   └── index.js
     ├── router     路由
     │   ├── index.js
     │   ├── modules
     │   │   ├── errors.js  错误县官
     │   │   └── index.js   首页包含各二级路由
     │   └── routes.js  路由守卫相关
     ├── store      vuex相关
     │   ├── baseSetting.js     公用基础变量
     │   ├── getters.js         
     │   ├── index.js
     │   └── modules
     │       ├── article.js     文章信息相关
     │       └── user.js        用户信息相关
     ├── utils      小工具
     │   ├── service    服务相关
     │   │   ├── cookie.js      cookie保存与清除
     │   │   └── request.js     axios初始设置
     │   └── tools      小工具
     │       ├── message.js     集成消息提示
     │       └── title.js       浏览器网站title
     └── views      视图
         ├── archive    归档
         │   └── index.vue
         ├── article    文章分类
         │   └── index.vue
         ├── blog       关于blog
         │   └── index.vue
         ├── creation   创作中心（仅超级用户有权限）
         │   ├── components
         │   │   ├── abstract.vue  摘要
         │   │   ├── bgm.vue       cover
         │   │   ├── category.vue  分类
         │   │   └── tags.vue      标签
         │   └── index.vue
         ├── dashboard  看板（blog数据）
         │   └── index.vue
         ├── detail     文章详情
         │   ├── components
         │   │   ├── comment.vue    评论
         │   │   └── contents.vue   文章内容
         │   └── index.vue
         ├── home   主页
         │   └── index.vue
         ├── index  首页
         │   ├── components
         │   │   ├── aside.vue  右侧部分
         │   │   └── aside_componets
         │   │       ├── abstract.vue   简要
         │   │       ├── articles.vue   分类
         │   │       ├── avatar.vue     头像
         │   │       ├── gam.vue        社交
         │   │       ├── label_cloud.vue    标签
         │   │       ├── menus.vue      菜单
         │   │       ├── record.vue     备案
         │   │       └── search.vue     全文搜索
         │   └── index.vue
         ├── introduction   个人介绍
         │   └── index.vue
         ├── label  标签页
         │   └── index.vue
         ├── personal   个人中心
         │   └── index.vue
         └── search     查询中心
             ├── components
             │   └── searchDetail.vue
             └── index.vue

