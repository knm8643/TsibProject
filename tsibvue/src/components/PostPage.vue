<template>
  <div class="row">
    <div class="col-6" style="background-color:#e5c7ca">
      미리보기 구역
      <div class="col-10" id="preview-title" style="background-color:#ece1be; margin:auto;">{{ title }}</div>
      <div class="col-10" id="preview-tag" style="background-color: beige; margin:auto;">{{ media }}</div>
      <div class="col-10" id="preview-tag" style="background-color:lightyellow; margin:auto;">{{ tag }}</div>
      <div class="col-10" id="preview-content" style="background-color:lemonchiffon; margin:auto;">{{ content }}</div>
    </div>
    <div class="col-6" style="background-color:#badce3;">
      글쓰기 구역
      <form v-on:submit="createPost">
        <p>
          <input type="text" v-model="title" placeholder="제목을 입력하세요.">
        </p>
        <p>
          <input type="text" v-model="media" placeholder="사진을 입력하세요.">
        </p>
        <p>
          <input type="text" v-model="tag" placeholder="태그를 입력하세요.">
        </p>
        <p>
          <input type="text" v-model="content" placeholder="내용을 입력하세요.">
        </p>
        <button type="submit">저장하기</button>
      </form>
    </div>
  </div>
</template>

<script>
import postPage from "@/js/postPage.js";
export default postPage
</script>

<style scoped>
</style>