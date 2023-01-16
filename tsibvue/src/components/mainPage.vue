<template>
  <div id="mainBody">
    <!--반목문 돌릴 예정 1-->
    <div class="noticeSwiperBox">
      <div id="notice_swiper_list" @click="noticeSwiper()">
        <div>
          <img src="">
          <div>스와이퍼 리스트1(위치확인)</div>
        </div>
      </div>
      <div id="notice_swiper_list" @click="noticeSwiper()">
        <div>
          <img src="">
          <div>스와이퍼 리스트2(위치확인)</div>
        </div>
      </div>
      <div id="notice_swiper_list" @click="noticeSwiper()">
        <div>
          <img src="">
          <div>스와이퍼 리스트3(위치확인)</div>
        </div>
      </div>
      <div id="notice_swiper_list" @click="noticeSwiper()">
        <div>
          <img src="">
          <div>스와이퍼 리스트4(위치확인)</div>
        </div>
      </div>
    </div>
    <div class="noticeNavi">
      <div>
        <p>
          <router-link to="/post" id="inputSpan2">새글등록(링크용)</router-link>
        </p>
      </div>
    </div>
    <!--반목문 돌릴 예정 2-->
    <div class="noticeList">
      <div id="notice" @click="noticePage()">
        <div>
          <div id="notice_img">
            <img src="">
          </div>
          <div id="noticeTry">
            <span>게시판 리스트(위치확인1)</span>
          </div>
        </div>
      </div>
      <div id="notice" @click="noticePage()">
        <div>
          <div id="notice_img">
            <img src="">
          </div>
          <div id="noticeTry">
            <span>게시판 리스트(위치확인2)</span>
          </div>
        </div>
      </div>
      <div id="notice" @click="noticePage()">
        <div>
          <div id="notice_img">
            <img src="">
          </div>
          <div id="noticeTry">
            <span>게시판 리스트(위치확인3)</span>
          </div>
        </div>
      </div>
      <div id="notice" @click="noticePage()">
        <div>
          <div id="notice_img">
            <img src="">
          </div>
          <div id="noticeTry">
            <span>게시판 리스트(위치확인4)</span>
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
    return {}
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
// 스와이퍼 메인테마 박스
.noticeSwiperBox{text-align: center; height: 350px;}

// div 박스 사이즈 조정
#notice{height: 300px; width: 290px;}
#notice_swiper_list{height: 300px; width: 200px;}

/* 고정 CSS */
// 메인테마 구분선 추가
#notice_swiper_list, #notice {
  border: 1px solid black;
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