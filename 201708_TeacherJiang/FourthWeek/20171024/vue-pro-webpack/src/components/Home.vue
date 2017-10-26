<template>
  <div>
    <MHeader :back="true">首页</MHeader>
    <div class="content">
        <Swiper :swiperSlides="sliders"></Swiper>
      <!-- 获取热门图书-->
      <!-- 假如加载后,数据就是空的,再显示正在加载就不合理了;-->
      <Loading :isLoading="isLoading" :data="hot"></Loading><!-- 如果有数据就显示Loading;如果没有数据就显示下面ul的hot数据;-->
      <!-- isLoading: true说明正在加载中;false: -->
      <!-- Loading数据: 1.如果加载完,而且还要判断;2.数据是否存在;如果不存在应该显示暂无数据;如果有数据就隐藏掉;-->

      <!-- 如果加载完成,并且显示我们的列表-->
      <template v-if="!isLoading && hot.length">
        <!-- 条件: 正在加载的时候不显示;hot的时候要有值;-->
        <h3>热门图书</h3>
        <ul class="hot">
          <li v-for="h in hot">
            <img :src="h.bookCover">
            <span>{{h.bookName}}</span>
            <span>{{h.bookPrice}}</span>
          </li>
        </ul>
      </template>
    </div>
  </div>
</template>

<script>
  import MHeader from "../base/MHeader.vue";
  import Swiper from "../base/Swiper.vue";
  import Loading from "../base/Loading.vue";
  import axios from "axios";
  export default{
    data(){
      return {
          sliders: [],
          hot:[],
          isLoading: true
      }
    },
    created(){
        this.getSliders();
        setTimeout(()=>{
          this.getHot();
        },1000);
        /*

         axios.get("/api/sliders").then(()=>{
         this.sliders = res.data;
         });
         */
    },
    methods: {
        getSliders(){
            axios.get("./api/sliders").then((res)=>{
                this.sliders = res.data;
            });
        },
      getHot(){
            axios.get("./api/hot").then((res)=>{
                this.hot = res.data;/* 热门数据 */
                this.isLoading = false;
            })
      }
    },
    computed: {},
    components: { MHeader,Swiper,Loading }
  }
</script>

<style scoped lang="less">
  /* 默认的公用样式;如果样式较多,可以抽离出,通过@import引入样式;*/
  /**{margin: 0;padding: 0;}
  a{text-decoration: none}
  ul,li{list-style: none}
  input,button{-webkit-appearance: none}!*不加,苹果手机默认的样式是灰色;默认的阴影*!
  html,body{font-size: 14px}*/
  .hot{
    display: flex;
    flex-wrap: wrap;
    li{
      padding: 5px;
      box-sizing: border-box;
      width: 33.333333%;
      display: flex;
      flex-direction: column;
      img{
        width: 80%;
        height: 120px;
      }
      :nth-child(3){
        color: olive;
        font-weight: 200;
      }
    }
  }


</style>
