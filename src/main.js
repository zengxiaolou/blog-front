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
// 引入过滤器
import filter from './filters/index'

import axios from 'axios';


Object.keys(filter).forEach(key => Vue.filter(key, filter[key]));
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.mixin(mixins);

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app');
