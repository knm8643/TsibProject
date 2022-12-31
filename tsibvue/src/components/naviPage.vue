<template>
  <div class="navi_list">
    <span id="navi_main" @click="goMainNaviPage('false')">메인</span> &nbsp;
    <span id="navi_intro" @click="gointro()">만든이</span> &nbsp;
    <span id="navi_login" @click="gologin()">로그인</span> &nbsp;
    <span id="navi_mypage" @click="gomypage()">마이페이지</span> &nbsp;
  </div>
</template>

<script>
import mainPage from "@/components/mainPage";
import HelloWorld from "@/components/HelloWorld";

export default {
  name: "naviPage",
  data(){
    return{
      mainOff : true
    }
  },
  methods:{
    // 새로운 메인 페이지 호출
    goMainNaviPage(mainOff) {
      // 임시 CSS 이벤트 효과
      document.getElementById("navi_main").style.borderBottom = "2px solid black";
      // 튜토리얼 페이지 삭제
      HelloWorld.methods.goMainPage();
      // 작업용 메인 페이지 호출
      mainPage.methods.thisMainPage(mainOff);
    },
    // 페이지 호출명은 추후 바꿔도 상관 없음
    gologin(){
      alert("로그인 페이지 미구현");
    },
    gointro(){
      alert("인트로 페이지 미구현");
    },
    gomypage(){
      alert("마이페이지 미구현");
    }
  }
}
</script>

<style scoped>
 /* 임시 CSS */
 span {
   cursor: pointer;
 }
 .navi_list {
   margin-top: 15px;
 }
</style>