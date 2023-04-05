<template>
  <div id="mainBody">
    <div class="noticeSwiperBox">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" @click="noticeSwiper()" v-for="(noticeSwiperList_1 ,index) in noticeSwiperList_1" v-bind:key="index">
            <img :src="noticeSwiperList_1.img" class="carousel-photo" alt="">
            <p class="carousel-p">스와이퍼입니다 {{ noticeSwiperList_1.val }}</p>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="noticeNavi">
      <div class="noticeNavi_body">
        <div id="noticeNaveButton">
          <button>목록형</button>
          <router-link to="/post" id="inputSpan2">
            <button>＋</button>
          </router-link>
          <button>■</button>
          <button>▣</button>
        </div>
      </div>
    </div>
    <div class="noticeList">
      <div id="notice" v-for="(noticeitem, index) in noticelist" v-bind:key="index" @click="noticePage('true')">
        <div id="noticeBox">
          <div id="noticeBox_img">
            <img id="notice_img" src="{{ noticeitem.media }}">
          </div>
          <div id="noticeTry">
            <h5>
              &nbsp;<br>{{ noticeitem.title }}<br>
              #{{ noticeitem.tag }}
            </h5>
          </div>
        </div>
      </div>
      <!-- 삭제예정 개발용(위치확인용)  -->
      <div id="notice" v-if="notice" @click="noticePage('false')">
        <div id="noticeBox">
          <div id="noticeBox_img">
            <img id="notice_img" src="">
          </div>
          <div id="noticeTry">
            <h5>
              &nbsp;<br>디비연결해주세요<br>
              #디비없을시만 보여요
            </h5>
          </div>
        </div>
      </div>
      <div id="notice" v-if="notice" @click="noticePage('false')">
        <div id="noticeBox">
          <div id="noticeBox_img">
            <img id="notice_img" src="">
          </div>
          <div id="noticeTry">
            <h5>
              &nbsp;<br>디비연결해주세요<br>
              #디비없을시만 보여요
            </h5>
          </div>
        </div>
      </div>
      <!-- 삭제예정 개발용(위치확인용)  -->
    </div>
  </div>
  <router-view></router-view>
</template>
<script>
import mainPage from "@/js/mainPage.js";
export default mainPage
</script>

<style lang="scss" src="@/assets/mainPage.scss">
</style>