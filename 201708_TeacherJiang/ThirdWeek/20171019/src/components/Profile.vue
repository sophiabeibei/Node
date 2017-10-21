<template>
    <div>
        <div class="col-md-4">
            <ul class="nav nav-pills nav-stacked">
                <li><router-link :to="{path: '/profile/introduce'}">简介</router-link></li>
                <li><router-link :to="{path: '/profile/aboutme'}">关于我</router-link></li>
            </ul>
        </div>
        <div class="col-md-8"></div>



        <router-view></router-view>
    </div>
</template>

<script>
    export default{
        data(){
            return {msg: 'profile'}
        },
        created(){
        },
        methods: {},
        computed: {},
        components: {}//子组件

    }
</script>
<!--scoped是h5的一个属性，表示的是局部样式，只属于当前组件的样式，不会导致污染全局-->
<!--lang="less"表明样式里可以用less了-->
<style scoped lang="less">

</style>
