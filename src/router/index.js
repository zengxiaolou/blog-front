import Vue from 'vue';
import Router from 'vue-router';
import {Message} from "element-ui";
import routes from './routes';
import {getToken} from '@/utils/service/cookie';
import {title} from "@/utils/tools/title";

Vue.use(Router);

// 路由配置
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {x: 0, y: 0};
    }
  }
});



router.afterEach((to) => {
  window.scrollTo(0, 0);
  // 更改标题
  title(to.meta.title)
});

router.afterEach((to,) =>{

  if (to.matched.some(res => {
    if (res.meta.title === "创作中心"){
      const token = getToken();
      if (token === undefined || localStorage.role === 'false'){
        Message.error('未登录,请先登录');
        localStorage.role = "false";
        router.push({name: 'index'}).then(() => {})
      }
    }
  }));
});

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};
export default router;
