import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import echarts from "echarts";
import location from "./locations/location.js"
import qs from 'qs'

Vue.prototype.$qs = qs
Vue.prototype.$echarts = echarts;
Vue.prototype.$axios = axios;
Vue.prototype.$location = location
Vue.config.productionTip = false
Vue.use(ElementUI);



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

//路由守卫
router.beforeEach((to, from, next) => {
  console.log(to);
  console.log(from);
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if(JSON.parse(localStorage.getItem('islogin'))){ //判断本地是否存在access_token
      next();
    }else {
      next({
        path:'/Sign_in'
      })
    }
  }
  else {
    next();
  }
  /*如果本地 存在 token 则 不允许直接跳转到 登录页面*/
  if(to.fullPath == "/Sign_in"){
    if(JSON.parse(localStorage.getItem('islogin'))){
      next({
        path:from.fullPath
      });
    }else {
      next();
    }
  }
});
