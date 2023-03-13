<template>
  <div class="header-container">
    <header>
      <h3>
        <router-link id="navi_title" to="/">블로그 만드는 블로그</router-link>
      </h3>
      <div class="header_list">
        <ul class="navi_list">
          <span><router-link id="navi_main" to="/" @click="sendMainPage('main')">메인</router-link></span> &nbsp;
          <span><router-link id="navi_intro" to="/credit">만든이</router-link></span> &nbsp;
           <span><router-link id="navi_login" to="/login">로그인</router-link></span> &nbsp;
          <span><router-link id="navi_mypage" to="/mypage">마이페이지</router-link></span> &nbsp;
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
import naviPage from "@/js/naviPage.js";
export default naviPage
</script>

<style lang="scss" src="@/assets/naviPage.scss">
</style>