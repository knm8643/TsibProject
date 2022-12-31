<template>
  <div id="mainBody" style="display:none;">
    <h1>{{ msg }}</h1>
    <p>스와이퍼 생길공간!</p>
    <div class="noticeList">
       <!-- 임시 CSS -->
       <!-- 임시 반복문1 -->
       <div id="notice" @click="noticePage()" style="border: 1px solid black; height: 200px; width: 200px; margin: auto;">
         <div>
           <div id="notice_img" style="height: 100px;">
             <img src="@/assets/일어나.jpeg" style="object-fit: cover; width: 100%; height: 100%;">
           </div>
           <div id="noticeTry" style="margin-top: 20px;">
             일어나 애들아 코딩해야지?<br>
             게시판은 이런식으로 만들겠지?<br>
             (더미 테스트용)
           </div>
         </div>
       </div>
    </div>
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
      alert("게시판 내부는 아직입니다!");
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
#notice{
  cursor: pointer;
}
</style>