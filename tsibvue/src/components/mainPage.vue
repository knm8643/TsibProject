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
          <!-- 미완성 -->
          <router-link to="/post" id="inputSpan2">
            <button>목록형</button>
            <button>+</button>
            <button>ㅁ</button>
            <button>ㅇ</button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="noticeList">
      <div id="notice" v-for="(noticeitem, index) in noticelist" v-bind:key="index" @click="noticePage()">
        <div>
          <div id="noticeBox_img">
            <img id="notice_img" src="../../public/examplePhoto/example9.jpeg">
          </div>
          <div id="noticeTry">
            <h5>
              <!--일단사이즈 각 보는용 -->
              &nbsp;<br>
              게시판 리스트{{noticeitem}}<br>(데이터 출력예정)
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "mainPage",
  data() {
    return {
      noticelist : [1,2,3,4,5,6],
      noticeSwiperList_1 :
          [
            {img:require("../../public/examplePhoto/example3.jpg"), val:1},
            {img:require("../../public/examplePhoto/example4.jpg"), val:2},
            {img:require("../../public/examplePhoto/example5.png"), val:3},
            {img:require("../../public/examplePhoto/example6.jpg"), val:4},
          ],
      noticeSwiperList_2 :
          [
            {img:require("../../public/examplePhoto/example1.jpg"), val:1},
            {img:require("../../public/examplePhoto/example2.jpg"), val:2},
            {img:require("../../public/examplePhoto/example7.jpg"), val:3},
            {img:require("../../public/examplePhoto/example8.jpg"), val:4},
          ]
    }
  },
  components: {},
  methods: {
    noticeSwiper() {
      alert("게시판 스와이퍼는 아직입니다!");
    },
    noticePage() {
      alert("게시판 내부는 아직입니다!");
    },
  }
}
</script>

<style lang="scss" scoped>
/* 변동 CSS*/
// 게시판 출력
#noticeNaveButton{margin-left: 650px;}
#noticeTry{height: 100px; background-color: snow; border: 1px solid black;}
#noticeBox_img{height: 250px; width: 400px; border: 1px solid black;}
#notice_img{height: 250px;width: 400px; object-fit: cover;}
// 스와이퍼 메인테마 박스
.noticeSwiperBox, .carousel-item{text-align: center; height: 350px; width: 800px;}
.carousel-photo{width: 200px; height: 350px; z-index: 1; object-fit: cover;}
.carousel-p{width: 200px; height: 100px; position: relative; top:-120px; z-index: 2; color: white;}
.carousel-item{margin: auto;}
#notice_swiper_list{display: inline-block; vertical-align: middle;}
// 중앙메인 네비
.noticeNavi{height: 65px;}
.noticeNavi_body{margin-top: 30px;}

/* 고정 CSS */
// 스와이퍼 부트스트랩
.carousel-inner{height: 350px;}
// 배경색상
#mainBody{background-color: #EBEBEB;}
// 메인테마 사이즈고정
.noticeSwiperBox, .noticeNavi, .noticeList{width: 800px; margin: auto;}
// 메인테마 구분선 추가
#notice {
  height: 380px; // 공간여백 생성
  width: 400px;
  margin: auto;
  display: inline-block; // div안에 div중앙정렬 1
  vertical-align: middle; // div안에 div중앙정렬 2
}
// 링크 밑줄 삭제
a, router-link {
  text-decoration: none;
  color: inherit;
}
// 포인트 강조
#notice, #notice_swiper_list, #inputSpan2 {
  cursor: pointer;
}
</style>