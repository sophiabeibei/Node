<template>
 <div>
   <MHeader :back="true">添加</MHeader>
   <div class="content">
     <div>
       <label for="bookName">书名</label>
       <input type="text" id="bookName" v-model="book.bookName">
     </div>
     <div>
       <label for="bookCover">封面</label>
       <input type="text" id="bookCover" v-model="book.bookCover">
     </div>
     <div>
       <label for="bookInfo">详情</label>
       <input type="text" id="bookInfo"  v-model="book.bookInfo">
     </div>
     <div>
       <label for="bookPrice">价格</label>
       <input type="text" id="bookPrice" v-model="book.bookPrice">
     </div>
     <div>
       <button @click="add">添加</button>
     </div>
   </div>
 </div>
</template>

<script>
  import MHeader from "../base/MHeader.vue";
  import axios from "axios";
  export default{
    data(){
      return {
          book: {
            bookName: "",
            bookPrice: "",
            bookCover: "",
            bookInfo: ""
          }
      }
    },
    created(){
    },
    methods: {
        add(){//->点击添加按钮发送ajax;
          axios.post("/api/book",this.book).then(()=>{//-> 什么时候执行then;res.end()之后执行then;then表示响应结束;
              this.$router.push("/list");
          });
        }
    },
    computed: {},
    components: { MHeader }
  }
</script>

<style scooped lang="less">
  /* 默认的公用样式;如果样式较多,可以抽离出,通过@import引入样式;*/
  /**{margin: 0;padding: 0;}
  a{text-decoration: none}
  ul,li{list-style: none}
  input,button{-webkit-appearance: none}!*不加,苹果手机默认的样式是灰色;默认的阴影*!
  html,body{font-size: 14px}*/
  .content div{
    width: 90%;
    margin: 20px auto;
    label{float: left;}
    input{
      margin-left: 20%;
      display: block;
      width: 80%;
    }
  }
</style>
