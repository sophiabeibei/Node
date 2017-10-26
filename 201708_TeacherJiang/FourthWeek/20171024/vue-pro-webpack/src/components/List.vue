<template>
  <div>
    <MHeader :back="true">列表</MHeader>
    <div class="content">
      <Loading :idLoading="isLoading" :data="books"></Loading>
      <ul v-if="!isLoading && books.length">
        <li v-for="book in books">
          <img v-lazy="book.bookCover" alt="">
          <div>
            <h4>{{book.bookName}}</h4>
            <p>{{book.bookInfo}}</p>
            <span>{{book.bookPrice}}</span>
            <div>
              <router-link :to="{name:'detail',params:{id:book.id}}">详情</router-link>
              <a @click="remove(book.id)">删除</a>
            </div>
            <i style="color: red" @click="add(book)">加入收藏</i>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import MHeader from "../base/MHeader.vue";
  import Loading from "../base/Loading.vue";//->延迟加载
  import axios from "axios";
  import {mapMutations} from "vuex";
  import * as Types from "../vuex/mutations-types";//->宏
  export default{
    data(){
      return {books: [], isLoading: true};
    },
    created(){
      this.getBooks();
    },
    activated(){//->存放不需要缓存的方法;
        this.getBooks();
    },
    methods: {
      ...mapMutations([Types.ADD_COLLECT]),//->引入,将mutation中的方法映射到组件内部;
      add(book){
        this[Types.ADD_COLLECT](book);
        this.$router.push("./collect");//跳转收藏页面
      },
      getBooks(){
        axios.get("/api/book").then(res => {
          this.books = res.data;
          this.isLoading = false;
        });
      },
      remove(id){
        //->通过id删除某一项,成功后将页面上原有的数据也一并删除;
        axios.delete("/api/book?id=" + id).then(res => {
          this.books = this.books.filter(item => item.id !== id);
        });
      }
    },
    computed: {},
    components: {MHeader, Loading}
  }
</script>

<style scoped lang="less">
  /* 默认的公用样式;如果样式较多,可以抽离出,通过@import引入样式;*/
  /**{margin: 0;padding: 0;}
  a{text-decoration: none}
  ul,li{list-style: none}
  input,button{-webkit-appearance: none}!*不加,苹果手机默认的样式是灰色;默认的阴影*!
  html,body{font-size: 14px}*/

  ul {
    li {
      display: flex;
      margin: 10px;
      font-size: 16px;
      border-bottom: 1px solid orange;
      img {
        width: 100px;
        height: 120px;
      }
      div {
        display: flex;
        flex-direction: column;
        div {
          display: flex;
          flex-direction: row;
          a {
            padding: 5px;
          }
        }
      }
    }
  }


</style>
