<template>
  <div id="mainBody" style="display:none;">
    새로운 메인 페이지! 이런식으로 만들어가면 되는걸까?<br>
    하나의 index.html 안에서 템플릿만 바꾸는 느낌?<br>
    <button @click="noticePage()">게시판 보기!</button>
  </div>
</template>

<script>
export default {
  name: "mainPage",
  props:{
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