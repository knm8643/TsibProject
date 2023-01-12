<template>
  <header>
    <h3>
      <router-link id="navi_title" to="/">블로그 만드는 블로그</router-link>
    </h3>
    <div class="header_list">
      <ul class="navi_list">
        <span><router-link id="navi_main" to="/main">메인</router-link></span> &nbsp;
        <span><router-link id="navi_intro" to="/credit">만든이</router-link></span> &nbsp;
        <span><router-link id="navi_login" to="/login">로그인</router-link></span> &nbsp;
        <span><router-link id="navi_mypage" to="/mypage">마이페이지</router-link></span> &nbsp;
        <span><router-link id="navi_post" to="/post">글쓰기</router-link></span> &nbsp;
      </ul>
    </div>
  </header>

</template>

<script>

export default {
  name: "naviPage",
  data(){
    return{}
  },
  methods:{}
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