import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//导入全局混入
import mixins from './mixins';
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import '@/assets/css/index.scss'
// 引入自定以图标
import '@/assets/iconfont/iconfont.css'


Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.mixin(mixins);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
