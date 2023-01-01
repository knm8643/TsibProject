<template>
  <div id="mainBody" style="display:none;">
    <h1>{{ msg }}</h1>
    <!-- 임시 CSS -->
    <div class="noticeSwiperBox">
      <div id="notice_swiper_list" @click="noticeSwiper()" style="border: 1px solid black; height: 200px; width: 200px; margin: auto;">
        <div>
            <img src="@/assets/일어나2.jpeg" style="object-fit: cover; width: 100%; height: 100%;">
            <div style="margin-top: 10px;">스와이퍼 리스트</div>
        </div>
      </div>
    </div>
    <p><span @click="noticeInput('로그인 정보')">새글 등록하기</span></p>
    <div class="noticeList">
       <!-- 임시 CSS -->
       <!-- 임시 반복문1 -->
       <div id="notice" @click="noticePage()" style="border: 1px solid black; height: 300px; width: 250px; margin: auto;">
         <div>
           <div id="notice_img" style="height: 180px;">
             <img src="@/assets/일어나.jpeg" style="object-fit: cover; width: 100%; height: 100%;">
           </div>
           <div id="noticeTry" style="margin-top: 20px;">
             일어나 애들아 코딩해야지?<br>
             게시판 리스트<br>
             (더미 테스트용)
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
       openMain: true
    }
  },
  methods:{
    noticeInput(userInfo){
      // 임시 더미 데이터
      var userInfoTmp = "";
      if(userInfo == "로그인 정보") {
        userInfoTmp =
            {
               userNo : "0000",
               userName : "이충재",
               userEmail : "TEST@TEST.COM",
               userNickName : "knm8643"
            }
      }
      // 더미 삭제 예정
      console.log(userInfoTmp);
      console.log("--새글 등록하기 제작중--");
    },
    noticeSwiper(){
      alert("게시판 스와이퍼는 아직입니다!");
    },
    noticePage(){
      alert("게시판 내부는 아직입니다!");
    },
    thisMainPage(mainOff){
      this.openMain = (mainOff=="false")?true:false;
      if(this.openMain){
        document.getElementById("mainBody").style.display = "block";
      }
      console.log("#####     ####     ####     #      ####     #####");
      console.log("#        #        #        # #     #   #    #");
      console.log("#####     ###     #       #####    ####     #####");
      console.log("#            #    #       #   #    #        #");
      console.log("#####    ####      ####   #   #    #        #####");
    }
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