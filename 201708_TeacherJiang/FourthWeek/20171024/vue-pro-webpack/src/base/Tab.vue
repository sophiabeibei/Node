<template>
  <ul>
    <router-link to="/" exact tag="li"><!-- exact: 只有匹配"/"的时候才生效-->
      <i class="iconfont icon-shouye"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/list" tag="li">
      <i class="iconfont icon-liebiaoyetuanqi"></i>
      <span>列表</span>
    </router-link>
    <router-link to="/collect" tag="li">
      <i class="iconfont icon-shoucang"></i>
      <span>收藏</span>
    </router-link>
    <router-link to="/add" tag="li">
      <i class="iconfont icon-icon02"></i>
      <span>添加</span>
    </router-link>
  </ul>
</template>

<!-- flex布局
      display: flex;
      flex: 1;
      flex-decoration;column; 纵向排列;
      justify-content: center;水平居中
      align-item: center;垂直居中;
      -->
<script>
  export default{
      data(){
          return {msg: "hello"}
      },
      created(){

      }
  }
</script>
<style scoped lang="less">
  ul{
    position: fixed;
    height: 60px;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    color: #a2a2a2;
    background: #f1f1f1;
    border-top: 1px solid slateblue;
    li{
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .router-link-active{
      color: red;
      text-shadow: 1px 1px 1px #999;
    }
  }

</style>
