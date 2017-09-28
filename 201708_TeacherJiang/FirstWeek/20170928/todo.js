//->案例: todo去做;


//Vue.prototype.$http=axios;(一般没有人这样写)


let vm = new Vue({
    el: "#app",
    created(){//->created: 初始化数据,进行ajax调用;
        this.getData();
    },
    data: {
        todos:[]
    },
    methods:{
        getData(){
            //->实现功能: 1.列表渲染;2.删除功能;3.添加功能;
            axios.get("./todo.json").then((res)=>{
                this.todos = res.data;
                },(err)=>{
                console.log(err);
            });
        }
    },
    filters:{},
    computed:{},
    watch:{}
});
