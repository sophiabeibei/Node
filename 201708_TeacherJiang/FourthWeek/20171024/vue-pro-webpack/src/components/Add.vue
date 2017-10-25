<template>
  <MHeader :back="true">添加</MHeader>
</template>

<script>
  import MHeader from "../base/MHeader.vue";
  export default{
    data(){
      return {}
    },
    created(){
    },
    methods: {},
    computed: {},
    components: { MHeader }
  }
</script>

<style>
  /* 默认的公用样式;如果样式较多,可以抽离出,通过@import引入样式;*/
  *{margin: 0;padding: 0;}
  a{text-decoration: none}
  ul,li{list-style: none}
  input,button{-webkit-appearance: none}/*不加,苹果手机默认的样式是灰色;默认的阴影*/
  html,body{font-size: 14px}


</style>
