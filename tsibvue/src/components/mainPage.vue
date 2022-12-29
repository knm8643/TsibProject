<template>
  <div class="mainBody" v-if="openMain">
    새로운 메인 페이지! 이런식으로 만들어가면 되는걸까?<br>
    하나의 index.html 안에서 템플릿만 바꾸는 느낌?<br>
    <button>click</button>
  </div>
</template>

<script>
export default {
  name: "mainPage",
  props:{
  },
  data(){
    return{
       openMain: false
    }
  },
  methods:{
    thisMainPage(mainOff){
      this.openMain = (mainOff=="false")?true:false;
      console.log("OPEN MAIN! 왜 안떠 SIBAL!");
    }
  }
}
</script>

<style>
#mainBody {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>