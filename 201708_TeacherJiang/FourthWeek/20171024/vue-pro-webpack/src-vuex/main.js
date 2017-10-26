// 安装vuex 执行的命令: npm install vuex

import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
Vue.use(Vuex);
const state = {
  count: 0
}; //->data: {}  和组件中的数据,功能是一致的;
const mutations = {//->let声明的可改;  const声明的: 不可改;
  increment(state,val){//->state: 代表的十状态;默认参数;
    state.count += val;
  },
  decrement(state,val){
    state.count -= val;
  }
};
const getters = {//->模拟组件中的computed
  type: (state)=>state.count%2?"奇数":"偶数"
};
const store = new Vuex.Store({//->创建store
  state,
  mutations,
  getters,
  strict: true
});

new Vue({
  el: "#app",
  store,//->会产生this.$store;每个组件都会拥有一个$store属性;
  ...App //->render   或者  template + component
});














