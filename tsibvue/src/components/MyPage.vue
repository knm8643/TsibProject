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
     <div>

     </div>
      <!-- board -->
     <div>

     </div>
  </div>
</template>

<script>
import myPage from "@/js/myPage";
export default myPage
</script>

<style lang="scss" src="@/assets/myPage.scss"></style>