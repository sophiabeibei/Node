import Vue from "vue";//->应为路由需要Vue所以在当前文件中要导入vue
import Router from "vue-router";

import Home from "../components/Home.vue";
import Profile from "../components/Profile.vue";
import AboutMe from "../components/AboutMe.vue";
import Introduce from "../components/Introduce.vue";
import Article from "../components/Article.vue";
//router-link router-view: 可以在全局任何地方使用;
Vue.use(Router);//插件: 所有vue的插件都需要use一下;use后默认会调用install方法;

//->export default: 默认导出路由实例;
export default new Router({
    linkActiveClass:"link-active",
    linkExactActiveClass: "router-link-exact-active",
    routes: [
        //->默认路由
        {path: "/",component: Home},
        {path: "/home",component: Home},
        {path: "/profile",component: Profile,children: [
            {path: "/",component: Introduce},
            {path: "aboutme",component: AboutMe},
            {path: "introduce",component: Introduce}
        ]},
        {path: "/article/:id",component: Article},//->:id :说明形参有,是随机的;   /article/:id /article/2 =>{id:4} = this.$route.params
    ]
});






