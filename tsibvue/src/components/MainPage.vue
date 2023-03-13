<template>
  <div id="mainBody">
    <div class="noticeSwiperBox">
      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="6000">
            <div id="notice_swiper_list" @click="noticeSwiper()" v-for="(noticeSwiperList_1 ,index) in noticeSwiperList_1" v-bind:key="index">
              <img :src="noticeSwiperList_1.img" class="carousel-photo" alt="">
              <p class="carousel-p">안녕하신가<br>반갑네 리스트출력예정{{noticeSwiperList_1.val}}</p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="6000">
            <div id="notice_swiper_list" @click="noticeSwiper()" v-for="(noticeSwiperList_2 ,index) in noticeSwiperList_2" v-bind:key="index">
              <img :src="noticeSwiperList_2.img" class="carousel-photo" alt="">
              <p class="carousel-p">안녕하신가<br>반갑네{{noticeSwiperList_2.val}}</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
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
      <div id="notice" v-for="(noticeitem, index) in noticelist" v-bind:key="index" @click="noticePage()">
        <div id="noticeBox">
          <div id="noticeBox_img">
            <img id="notice_img" v-bind:src="require(`../../public/examplePhoto/${noticeimages[index]}`)">
          </div>
          <div id="noticeTry">
            <h5>
              &nbsp;<br>게시판 리스트{{noticeitem}}<br>
               #테스트1 #테스트2 #테스트3
            </h5>
          </div>
        </div>
      </div>
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