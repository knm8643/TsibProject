<template>
  <div>
      <!-- User Main Img -->
    <div class="user-img-wrapper">
      <div class="img-container">
        <img :src="userImgUrl" v-if="userImgUrl" alt="User Image">
        <img src="../../public/examplePhoto/example11.jpg" v-else alt="Default Image">
      </div>
      <label for="user-img-upload" class="upload-btn">
        Upload
      </label>
      <input type="file" id="user-img-upload" @change="handleUserImgChange">
    </div>
      <!-- myPageNavi -->
     <div class="myPageNavie">
       <div class="navieIntro">
         <img src="../../public/examplePhoto/example11.jpg">
         <span>김영찬님</span>
       </div>
       <div>
         <span>게시판1</span>
         <span>게시판2</span>
         <span>게시판3</span>
       </div>
     </div>
      <!-- board -->
    <div class="container">
       <div>위치확인1</div>
       <div>위치확인2</div>
       <div>위치확인3</div>
       <div>위치확인4</div>
       <div>위치확인5</div>
       <div>위치확인6</div>
       <div>위치확인7</div>
       <div>위치확인8</div>
     </div>
  </div>
</template>

<script>
import myPage from "@/js/myPage";
export default myPage
</script>

<style lang="scss" src="@/assets/myPage.scss"></style>