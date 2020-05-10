import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';
import {getToken} from '../utils/service/cookie';
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

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(r => r.meta.auth)){
//     const token = getToken('token');
//     if (token && token !== 'undefined'){
//       next()
//     }else{
//       next({
//         name:'login',
//         query:{
//             redirect: to.fullPath
//         }
//       })
//     }
//   }else{
//     // 不需要身份校验 直接通过
//     next();
//   }
// });
//
// router.beforeEach((to, from, next) => {
//   if (from.matched.some(r => {
//     if (r.meta.title ==='登录' || r.meta.title === '注册'){
//       localStorage.safeCode = 1;
//       next()
//     }else {
//       next()
//     }
//   })){
//     next();
//   }else{
//     // 不需要身份校验 直接通过
//     next();
//   }
// });

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(r => {
//     if (r.meta.title ==='登录' || r.meta.title === '注册'){
//         const token = getToken('token');
//         if (token && token !== 'undefined'){
//           next({name:'index'})
//         }else{
//           next()
//         }
//     }else {
//       next()
//     }
//   })){
//    next();
//   }else{
//     // 不需要身份校验 直接通过
//     next();
//   }
// });

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
  // 更改标题
  title(to.meta.title)
});

export default router;
