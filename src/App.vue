<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>
<script>
  export default {
    name: "app",
    provide(){
      return{
        reload: this.reload
      }
    },
    data(){
      return{
        isRouterAlive: true,
      }
    },
    methods:{
      reload(){
        this.isRouterAlive = false;
        this.$nextTick(() =>{
          this.isRouterAlive = true
        })
      }
    }
  }
</script>


<style lang="scss">
  body {
    width: 100%;
    background-color: #FAFBFA;
  }
  #app {
    width: 98%;
    max-width: 1300px;
    min-width: 320px;
    margin: 0 auto;
  }
</style>
