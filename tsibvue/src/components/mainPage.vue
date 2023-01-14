<template>
  <div id="mainBody">
    <div class="noticeSwiperBox">
      <div id="notice_swiper_list" @click="noticeSwiper()" style="height: 200px; width: 200px;">
        <div>
            <img src="">
            <div>스와이퍼 리스트</div>
        </div>
      </div>
    </div>
    <div class="noticeNavi">
      <p>
        <router-link to="/post" id="inputSpan2">새글등록(링크용)</router-link>
      </p>
    </div>
    <div class="noticeList">
       <div id="notice" @click="noticePage()" style="height: 300px; width: 250px;">
         <div>
           <div id="notice_img">
             <img src="">
           </div>
           <div id="noticeTry">
             <span>게시판 리스트(테스트용)</span>
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
    }
  },
  components:{

  },
  methods:{
    noticeSwiper(){
      alert("게시판 스와이퍼는 아직입니다!");
    },
    noticePage(){
      alert("게시판 내부는 아직입니다!");
    },
  }
}
</script>

<style lang="scss" scoped>
// 메인테마 구분선 추가
#notice_swiper_list, #notice{
  border: 1px solid black;
  margin: auto;
}

// 밑줄 삭제
a, router-link{
  text-decoration: none;
  color: inherit;
}

// 포인트 강조
#notice, #notice_swiper_list, #inputSpan2{
  cursor: pointer;
}
</style>