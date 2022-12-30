<template>
  <div id="mainBody" style="display:none;">
    <h1>{{ msg }}</h1>
    <p>this here mainBody!</p>
    <button @click="noticePage()">look Notice!</button>
  </div>
</template>

<script>
export default {
  name: "mainPage",
  props:{
    msg : String
  },
  data(){
    return{
       openMain: true
    }
  },
  methods:{
    noticePage(){
      console.log("look Notice!");
    },
    thisMainPage(mainOff){
      this.openMain = (mainOff=="false")?true:false;
      if(this.openMain){
        document.getElementById("mainBody").style.display = "block";
      }
      console.log("Open Main!");
    }
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