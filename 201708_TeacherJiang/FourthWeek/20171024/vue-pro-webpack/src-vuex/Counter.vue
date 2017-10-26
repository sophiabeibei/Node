<template>
    <div>
      {{count}}
      <!--{{$store.state.count}}-->
      <button @click="add">加</button>
      <button @click="minus">减</button>
    </div>
</template>
<script>
  import {mapState, mapMutations} from "vuex";//->mapState语法糖;  返回的是一个对象: {count: function(){}}
  //console.log(mapState["count"]);
  //console.log(mapMutations["increment"]);
  export default{
    computed: {
      ...mapState(["count"]),//->将count直接定义在属性上;相当于把store里的count映射到组件的count中;
      //->有了这个,下面的count()就可以不要了;
           /*count(){
               return this.$store.state.count;
           }*/
        },
        data(){
            return {msg: "hello"}
        },
        created(){
        },
        methods: {//->将mutations中的方法映射到了组件的内部
          ...mapMutations(["increment","decrement"]),//->名字不能喝原有的函数名相同
          add(){//->载荷;
            this["increment"](1);//->increment: 需要提交的名字;
          },
          minus(){
            this["decrement"](1);
          }
        },
        components: {}
    }
</script>
<style scoped lang="less">
    div {
        p {
        }
    }
</style>
