<template>
    <div>
        home
        <button @click="fn">去介绍页面</button>
    </div>
</template>

<script>
    export default{
        data(){
            return {msg: 'home'}
        },
        created(){
        },
        methods: {
            fn(){//->编程式;
                //this.$router.push("/profile/introduce");//->路径跳转: 将当前的路径放到历史管理中;   --方法一;
                //this.$router.go(-1);//->-1: 往前跳一个;返回按钮;       --方法二;
                this.$router.replace("/profile/introduce");//->跳转页面后不留痕迹;       --方法三;
            }
        },
        computed: {},
        components: {}//子组件

    }
</script>
<!--scoped是h5的一个属性，表示的是局部样式，只属于当前组件的样式，不会导致污染全局-->
<!--lang="less"表明样式里可以用less了-->
<style scoped lang="less">

</style>
