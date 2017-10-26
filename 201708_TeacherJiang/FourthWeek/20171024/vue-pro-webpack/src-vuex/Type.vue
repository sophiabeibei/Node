<template>
    <div>
      {{count}}
      {{type}}
    </div>
</template>
<script>
  import {mapState,mapGetters} from "vuex";
    export default{
        data(){
            return {}
        },
        created(){
        },
        methods: {},
        computed: {
          ...mapGetters(["type"]),
          ...mapState(["count"])
        },
        components: {}
    }
</script>
<style scoped lang="less">
    div {
        p {
        }
    }
</style>
