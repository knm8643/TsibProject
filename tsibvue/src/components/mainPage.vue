<template>
  <div id="mainBody">
    <div class="noticeSwiperBox">
      <div id="notice_swiper_list" v-for="(swiperitem, index) in noticeSwiperlist" v-bind:key="index" @click="noticeSwiper()">
        <div>
          <img src="">
          <div>스와이퍼 리스트{{swiperitem}}(위치확인)</div>
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
    <div class="noticeList">
      <div id="notice" v-for="(noticeitem, index) in noticelist" v-bind:key="index" @click="noticePage()">
        <div>
          <div id="notice_img">
            <img src="">
          </div>
          <div id="noticeTry">
            <span>게시판 리스트{{noticeitem}}(위치확인)</span>
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
      noticelist : [1,2,3,4],
      noticeSwiperlist : [1,2,3,4],
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