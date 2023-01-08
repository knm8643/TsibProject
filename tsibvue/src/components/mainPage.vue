<template>
  <div id="mainBody">
    <h1>{{ msg }}</h1>
    <!-- 임시 CSS -->
    <div class="noticeSwiperBox">
      <div id="notice_swiper_list" @click="noticeSwiper()" style="border: 1px solid black; height: 200px; width: 200px; margin: auto;">
        <div>
            <img src="">
            <div>스와이퍼 리스트</div>
        </div>
      </div>
    </div>
    <div>
      <p id="inputSpan"><span @click="noticeInputOpen()">새글 등록하기</span></p>
      <inputNotice></inputNotice>
    </div>
    <div class="noticeList">
       <!-- 임시 CSS -->
       <!-- 임시 반복문1 -->
       <div id="notice" @click="noticePage()" style="border: 1px solid black; height: 300px; width: 250px; margin: auto;">
         <div>
           <div id="notice_img" style="height: 180px;">
             <img src="">
           </div>
           <div id="noticeTry" style="margin-top: 20px;">
             게시판 리스트(테스트용)
           </div>
         </div>
       </div>
    </div>
  </div>
</template>

<script>
import inputNotice from '@/components/inputNotice';
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
    inputNotice
  },
  methods:{
    noticeInputOpen(){
       document.getElementById("inputSpan").style.display = "none";
       inputNotice.methods.openNoticePage();
    },
    noticeSwiper(){
      alert("게시판 스와이퍼는 아직입니다!");
    },
    noticePage(){
      alert("게시판 내부는 아직입니다!");
    },
  }
}
</script>

<style>
/* 임시 CSS */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 3px;
}
#notice{
  cursor: pointer;
}
#notice_swiper_list{
  cursor: pointer;
}
span{
  cursor: pointer;
}
</style>