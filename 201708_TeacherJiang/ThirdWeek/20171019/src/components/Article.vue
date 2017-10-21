<template>
    <div>
        name {{this.$route.params.aid}}
    </div>
</template>
<script>
    export default{
        watch:{
            $route(){
                alert(1)
            }
        },
        data(){
            return {}
        },
        created(){
        },
        methods: {},
        computed: {},
        components: {}
    }
</script>
<style scoped lang="less">

</style>