/*
@AUTHOR:        zeng_xiao_yu
@GITHUB:        https://github.com/zengxiaolou
@EMAIL:         zengevent@gmail.com
@TIME:          2020/9/29-11:28
INTRODUCTION:   文件简介
*/

const QiNiuHost = "http://qiniu.messstack.com/"

const blogInfo = `#### <span class="colour" style="color: var(--blur-text-color) ;">关于博客</span>

<span class="colour" style="color: var(--blur-text-color) ;">搭建blog在我开始编程时，便放在了计划之中，但是困于自己能力不足，而心比天高，还有就是生活所迫。拖延至今天才勉强将 blog的基本框架搭完。</span>
<span class="colour" style="color: var(--blur-text-color) ;">今后的日志我将慢慢的增加功能并优化目前这个blog项目，使之好看且使用。同时记录自己作为一个码农，在开发过程中遇到的困难与解决的思路、笔记和好用的工具推荐等等</span>
<span class="colour" style="color: var(--blur-text-color) ;">本项目已经挂在github上，如果有兴趣的小伙伴可以一起优化，感激不尽。</span>
<span class="colour" style="color: var(--blur-text-color) ;">项目地址：</span><span class="colour" style="color: var(--blur-text-color) ;">[<span class="colour" style="color: var(--blur-text-color) ;">后端项目地址</span>](https://github.com/zengxiaolou/blog-back)<span class="colour" style="color: var(--blur-text-color) ;">、</span><span class="colour" style="color: var(--blur-text-color) ;">[<span class="colour" style="color: var(--blur-text-color) ;">前端项目地址</span>](https://github.com/zengxiaolou/blog-front)</span></span>

#### <span class="colour" style="color: var(--blur-text-color) ;">本项目用到的技术栈</span>

<span class="colour" style="color: var(--blur-text-color) ;">**<span class="colour" style="color: var(--blur-text-color) ;">前端：</span>**<span class="colour" style="color: var(--blur-text-color) ;">Vue2.0框架，运用vue-cli4作为脚手架快速完成前端项目主体搭建</span></span>

* <span class="colour" style="color: var(--blur-text-color) ;">Vue组件：Vue-router、Vuex、Axios</span>
* <span class="colour" style="color: var(--blur-text-color) ;">UI库：ElementUI</span>
* <span class="colour" style="color: var(--blur-text-color) ;">第三方库：Echarts、ToastUI-Editor</span>

<span class="colour" style="color: var(--blur-text-color) ;">**<span class="colour" style="color: var(--blur-text-color) ;">后端：</span>**</span>

* <span class="colour" style="color: var(--blur-text-color) ;">语言：python</span>
* <span class="colour" style="color: var(--blur-text-color) ;">框架：基础框架Django(3.0)， API快速开发框架Django-Restful-Framework</span>
* <span class="colour" style="color: var(--blur-text-color) ;">主要第三方包：JWT、Rest\\_Captcha、Social\\_Django、Celery、drf\\_yasg、qiniu、Requests</span>

<span class="colour" style="color: var(--blur-text-color) ;">**<span class="colour" style="color: var(--blur-text-color) ;">数据库：</span>**</span>

* <span class="colour" style="color: var(--blur-text-color) ;">Mysql、Redis、Elstiacsearch</span>

<span class="colour" style="color: var(--blur-text-color) ;">**<span class="colour" style="color: var(--blur-text-color) ;">部署：</span>**</span>

* <span class="colour" style="color: var(--blur-text-color) ;">Docker-Compose、Nginx</span>

#### <span class="colour" style="color: var(--blur-text-color) ;">项目更新记录</span>

<span class="colour" style="color: var(--blur-text-color) ;">2020年10月01</span>
<span class="colour" style="color: var(--blur-text-color) ;">前端版本：版本V1.0.0</span>
<span class="colour" style="color: var(--blur-text-color) ;">后端版本：版本V1.0.0</span>

#### <span class="colour" style="color: var(--blur-text-color) ;">博客文章涉及范围</span>

<span class="colour" style="color: var(--blur-text-color) ;">博主是个会计毕业，野路子出来的程序员，目前在一家小公司上班。近几年所学比较杂，而且没有好好的系统学习过编程，但是对编程充满兴趣。所以文章涉及的东西相对比较杂乱，有兴趣的小伙伴可以相互探讨进步；文章将按以下分组归类：</span>

* <span class="colour" style="color: var(--blur-text-color) ;">Python 本渣目前最熟悉的语言</span>
* <span class="colour" style="color: var(--blur-text-color) ;">Vue 本渣目前接触最多的前端框架、感觉很好用</span>
* <span class="colour" style="color: var(--blur-text-color) ;">Go 最感兴趣的语言，虽然最近几年炒的比较热，但生态仍不是很完善，要靠有兴趣的小伙伴加油了</span>
* <span class="colour" style="color: var(--blur-text-color) ;">Linux 主要分享linux相关的知识与技术，我目前只知道个大概，但是作为一个程序员，为了避免curd，linux还是要好好学习</span>
* <span class="colour" style="color: var(--blur-text-color) ;">Docker 目前最火的容器技术，虽然是便运维的技术，但是作为一个开发，还是需要弄懂，在开发中会事半功倍，后面估计会取了解K8S</span>
* <span class="colour" style="color: var(--blur-text-color) ;">DB 目前熟悉的有 关系型数据库：Mysql、Sqlite3、PostgreSQL；非关系型数据库： Redis、MongoDB、Elasticsearch</span>
* <span class="colour" style="color: var(--blur-text-color) ;">Tools 主要是分享自己开发过程中，认为比较好的工具，能提高开发效率的</span>
* <span class="colour" style="color: var(--blur-text-color) ;">Other 这个分类暂定是分享一些与开发不太相关的文章、开始做算法题之后，估计会新增一算法分类</span>

#### <span class="colour" style="color: var(--blur-text-color) ;">功能简介</span>

<span class="colour" style="color: var(--blur-text-color) ;">目前博客功能较少，后续会根据需求增加；</span>

* <span class="colour" style="color: var(--blur-text-color) ;">已有功能：</span>
    * <span class="colour" style="color: var(--blur-text-color) ;">用户登录</span>
    * <span class="colour" style="color: var(--blur-text-color) ;">文章展示</span>
    * <span class="colour" style="color: var(--blur-text-color) ;">文章点赞与二级评论</span>
    * <span class="colour" style="color: var(--blur-text-color) ;">文章归档与文章日历热力图</span>
    * <span class="colour" style="color: var(--blur-text-color) ;">关于博客</span>
    * <span class="colour" style="color: var(--blur-text-color) ;">站内搜索</span>
    * <span class="colour" style="color: var(--blur-text-color) ;">个人简介</span>
    * <span class="colour" style="color: var(--blur-text-color) ;">创作中心</span>
    * <span class="colour" style="color: var(--blur-text-color) ;">社交直达</span>
    * <span class="colour" style="color: var(--blur-text-color) ;">标签与分类</span>
* <span class="colour" style="color: var(--blur-text-color) ;">计划功能：</span>
    * <span class="colour" style="color: var(--blur-text-color) ;">网站数据统计（图表）</span>
    * <span class="colour" style="color: var(--blur-text-color) ;">Tui-Editor图片上传改为直接上传到七牛云</span>
    * <span class="colour" style="color: var(--blur-text-color) ;">用户中心</span>
    * <span class="colour" style="color: var(--blur-text-color) ;">动态菜单</span>
    * <span class="colour" style="color: var(--blur-text-color) ;">评论点赞功能，根据点赞排序</span>
`

export default {
    QiNiuHost,
    blogInfo,
}
