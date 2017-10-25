<template>
  <div>
    <MHeader :back="true">首页</MHeader>
    <div class="content">
        <Swiper :swiperSlides="sliders"></Swiper>
      <!-- 获取热门图书-->
      <ul class="hot">
        <li v-for="h in hot">
          <img :src="h.bookCover" alt="">
          <span>{{h.bookName}}</span>
          <span>{{h.bookPrice}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import MHeader from "../base/MHeader.vue";
  import Swiper from "../base/Swiper.vue";
  import axios from "axios";
  export default{
    data(){
      return {
          sliders: [],
        hot:[]
      }
    },
    created(){
        this.getSliders();
        this.getHot();
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
                this.hot = res.data;
            })
      }
    },
    computed: {},
    components: { MHeader,Swiper }
  }
</script>

<style>
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
