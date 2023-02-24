<template>
  <div class="row row-cols-2">
    <div class="col" style="background-color:#e5c7ca; min-height: 150px;">
      미리보기 구역
      <div class="col-10" id="preview-title" style="background-color:#ece1be; margin:auto;">{{ title }}</div>
      <div class="col-10" id="preview-tag" style="background-color: beige; margin:auto;">{{ media }}</div>
      <div class="col-10" id="preview-tag" style="background-color:lightyellow; margin:auto;">{{ tag }}</div>
      <div class="col-10" id="preview-content" style="background-color:lemonchiffon; margin:auto;">{{ content }}</div>
    </div>
    <div class="col" style="background-color:#badce3; padding:0">
      글쓰기 구역
      <form v-on:submit="createPost">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="floatingInputDisabled" placeholder="" v-model="title">
          <label for="floatingInputDisabled">제목</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="floatingInputDisabled" placeholder="" v-model="media">
          <label for="floatingInputDisabled">사진</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="floatingInputDisabled" placeholder="" v-model="tag">
          <label for="floatingInputDisabled">태그</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="floatingInputDisabled" placeholder="" v-model="content">
          <label for="floatingInputDisabled">내용</label>
        </div>
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