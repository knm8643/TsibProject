<template>
  <header>
    <h3>
      <router-link id="navi_title" to="/">블로그 만드는 블로그</router-link>
    </h3>
    <div class="header_list">
      <ul class="navi_list">
        <span><router-link id="navi_main" to="/main" @click="sendMainPage('main')">메인</router-link></span> &nbsp;
        <span><router-link id="navi_intro" to="/credit">만든이</router-link></span> &nbsp;
        <span><router-link id="navi_login" to="/login">로그인</router-link></span> &nbsp;
        <span><router-link id="navi_mypage" to="/mypage">마이페이지</router-link></span> &nbsp;
        <span><router-link id="navi_post" to="/post">글쓰기</router-link></span> &nbsp;
      </ul>
    </div>
  </header>

</template>

<script>
import axios from "axios";

export default {
  name: "naviPage",
  data(){
    return{}
  },
  methods:{
    sendMainPage(sendData){
      axios({
        url: "/board/selectBoard",
        method: "get",
        params: {deviceType: sendData}
      }).then((response) => {
        if(response.data == '01'){
          alert("스프링이 연결된 메인페이지입니다!")
        }
      }).catch(function (){
        alert("메인페이지 스프링 연결이 되어있지 않습니다! 더미 데이터 보려면 스프링 연결해야만해요!")
      });
    }
  }
}
</script>

<style lang="scss" scoped>
 /* 임시 CSS */
 span {
   cursor: pointer;
 }
 #navi_title, #navi_main, #navi_intro, #navi_login, #navi_mypage, #navi_post{
   text-decoration: none;
   color: inherit;
 }
 header{
   #navi_title{
     color: red;
   }
 }
</style>