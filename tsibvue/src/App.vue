<template>
  <HelloWorld msg="튜토리얼!"/>
  <mainPage msg="메인"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import mainPage from "./components/mainPage.vue";

export default {
  name: 'App',
  data(){
    return{
      openMain : false
    }
  },
  components: {
    HelloWorld,
    mainPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 3px;
}
</style>
