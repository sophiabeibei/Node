<template>
    <div>
        <Tab></Tab>
        <router-view></router-view>
    </div>
</template>

<script>
    import Tab from "./components/Tab.vue";
    export default{
        data(){
            return {msg: "hello"}
        },
        created(){},
        methods: {},
        computed: {},
        components: {
            Tab
        }
    }
</script>
<style>/* 加了这个属性scoped,表示样式是局部样式;局部样式: 不会导致污染全局;*/
/*2.lang="less": 告诉它语言,不会报错;*/

    /*npm i vue-template-compiler --save-dev: 解析模板;*/
    /*npm install vue-cli -g*/
    /*可以默认app.vue中的样式是全局的;只要路径开头匹配则可以变红;*/
    .link-active{color: red !important;}

    /*默认名叫.router-link-exact-active{}*/
    .router-link-exact-active{color: blue !important;}

</style>

