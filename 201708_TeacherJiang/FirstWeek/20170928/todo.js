//->案例: todo去做;


//Vue.prototype.$http=axios;(一般没有人这样写)


let vm = new Vue({
    el: "#app",
    created(){//->created: 初始化数据,进行ajax调用;

        let result = JSON.parse(localStorage.getItem("list"));
        //->如果localStorage中有数据,就取出来使用;如果没有数据就从JSON中获取;
        if(result === null){
            //->说明没有,执行以下;
            this.getData();
        }else{
            //->说明有数据,执行以下;
            this.todos = result;
        }
    },
    data: {
        todos:[],
        todo:{select: false,title:""},
        cur: {},
        newObj: {},
        hash: "all"
    },
    methods:{
        //->保存时将当前的title,改变成最新的title
        saveUpdate(todo){
            todo.title = this.newObj.title;
            //->把输入框隐藏掉
            this.cancel();
        },
        //->当取消的时候,cur清空;和任何人都比较位false;所以不显示输入框;
        cancel(){
            this.cur = {};
        },
        //->为了让输入框的内容和span中相同,但是不是同一个;
        saveCurrent(todo){
            /* Object.assign: 拷贝方法(分浅拷贝和深拷贝);1.Object.assign是浅拷贝;2.递归循环是深拷贝;*/
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
        //->newTodos: 计算属性;通过点击的状态和todos数据,计算出应当显示的结果;
        newTodos(){
            if(this.hash==="all") return this.todos;
            if(this.hash === "finish") return this.todos.filter(item=>item.select);
            if(this.hash === "unfinish") return this.todos.filter(item=>!item.select);
        },
        /* 亲,你还有 0 件事需要完成*/
        count(){//->count是根据数组中没有选中的个数而来的;
            return this.todos.filter(item=>!item.select).length;
        }
    },
    //->watch: 默认只能监控一层;
    watch:{
        todos:{
            //->handler: 只要数据源todos发生变化,我们就将它存入到本地存储中;
            handler(){
                localStorage.setItem("list",JSON.stringify(this.todos));
            },deep:true//->为了解决"watch只能监控一层"的问题;这是深度监控;
        }
    },
    //->directives: 给dom元素添加功能的;
    directives:{
        //->newObj赋值后再让其获取焦点,让dom渲染完成后;
        autoFocus(el,bindings){
            //->setTimeout: 目的是为了让它重新获取焦点;
            setTimeout(()=>{
                if(bindings.value){
                    el.focus();
                }
            });
        }
    }
});
//->锚点的路由实现的方法;这个方法很重要;
let listener = ()=>{
    //->取出hash值;没有的时候默认是all;
    let hash = window.location.hash;
    hash = hash.length?hash.slice(1): "all";
    vm.hash = hash;
};
//->第一次进入页面时,先执行以下获取hash值的函数,以后再执行时,只需要触发hashchange事件;
listener();
window.addEventListener("hashchange",listener,false);