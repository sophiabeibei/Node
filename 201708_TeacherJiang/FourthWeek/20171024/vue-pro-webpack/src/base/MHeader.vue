<template>
    <div class="header">
      <!-- 将使用MHeader时夹着的内容传递到当前组件的slot中;-->
      <i class="iconfont icon-houtui" v-if="back" @click="go"></i>
      <slot></slot>
    </div>
</template>
<script>
    export default{
        props: {
            back: {
                type: Boolean,

            }
        },
        data(){
            return {msg: "hello"}
        },
        created(){
        },
        methods: {
            go(){
                /*this.$router.go(-1);*/
              this.$router.back();//->back: 后退
            }
        },
        computed: {},
        components: {}
    }
</script>
<style scoped lang="less">
  .header{
    position: fixed;
    height: 50px;
    background: dodgerblue;
    color: #fff;
    text-align: center;
    line-height: 50px;
    width: 100%;
    i{
      position: absolute;
      left: 20px;
      font-size: 25px;
    }
  }
</style>
