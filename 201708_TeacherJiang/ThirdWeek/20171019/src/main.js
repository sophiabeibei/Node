import Vue from "vue";//->引入Vuejs;因为vue是一个第三方模块;所以不需要./方式引用;默认引用的是runtime,不支持template

//->vue = runtime + compiler;如果只有runtime,体积会减少6kb;
import  App from "./App.vue";//->App,是个对象;根组件;

//->引入第三方模块时如果引入的文件不是默认main对应的,需要将路径写全;
import "bootstrap/dist/css/bootstrap.css";

//->引入router;
import router from "./router/index.js";


let vm = new Vue({
    el: "#app",
    //template: "<div>Hello</div>"
    //render:h=>h("div","hello")//->当文件多的时候,就不能用这个;可以借助.vue文件来渲染;写成一个.vue文件;
    render:h=>h(App),//->App,是个对象;
    router //->this.$route: 这里放的都是属性;this.$router: 这里放的都是方法;
});




