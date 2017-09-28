//->案例: todo去做;


//Vue.prototype.$http=axios;(一般没有人这样写)


let vm = new Vue({
    el: "#app",
    created(){//->created: 初始化数据,进行ajax调用;
        this.getData();
    },
    data: {
        todos:[],
        todo:{select: false,title:""},
        cur: {},
        newObj: {}
    },
    methods:{
        //->当取消的时候,cur清空;和任何人都比较位false;所以不显示输入框;
        cancle(){
            this.cur = {};
        },
        //->为了让输入框的内容和span中相同,但是不是同一个;
        saveCurrent(todo){
            Object.assign(this.newObj,todo);
            this.cur = todo;//->目的: 将todo克隆一份,给cur;克隆的和以前todo长的一样,但是没有任何关系;
        },
        add(){
            this.todos.push(this.todo);
            this.todo={select:false,title:""};
        },
        remove(todo){
            this.todos = this.todos.filter(item=>item!==todo);
        },
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
    computed:{
        count(){//->count是根据数组中没有选中的个数而来的;
            return this.todos.filter*(item=>!item.select).length;
        }
    },
    watch:{}
});
