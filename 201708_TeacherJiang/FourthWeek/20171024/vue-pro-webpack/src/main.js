import Vue from 'vue'
import App from './App.vue'
import router from './router'
//->导入swiper样式
require('swiper/dist/css/swiper.css');
//->导入js
import VueAwesomeSwiper from 'vue-awesome-swiper'
//->注册为插件
Vue.use(VueAwesomeSwiper);

import VueLazyload from "vue-lazyload"

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1508904594&di=7fc3ece32aecde09fa90c3c9a366e601&src=http://attach.bbs.miui.com/forum/201710/11/163604j97nxc5tgt5xdit7.png',
  loading: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509509491&di=d9fdf6dc2a6ec79935b9ab2d732cc8b7&imgtype=jpg&er=1&src=http%3A%2F%2Fimglf0.ph.126.net%2FeBgJ3y8xoCCpTpT1horagg%3D%3D%2F6619419539513878026.gif',
  attempt: 1
});


import store from "./vuex";

Vue.config.productionTip = false;

/* eslint-disable no-new */


new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
  /*...App//->将App组件展开放到根实例上;
  //->render: (h) => h(App)*/
});
