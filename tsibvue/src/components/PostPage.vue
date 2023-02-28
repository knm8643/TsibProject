<template>
  <div class="row row-cols-2">
    <div class="col" style="background-color:ghostwhite; min-height: 150px; padding: 0">
      <p style="margin: 2% 0 2% 0;">(임시) 미리보기 구역</p>
      <div class="col-10" id="preview-title" style="background-color:#ece1be; margin:auto;">{{ title }}</div>
      <div class="col-10" id="preview-media" style="background-color: beige; margin:auto;">{{ media }}</div>
      <div class="col-10" id="preview-tag" style="background-color:lightyellow; margin:auto;">{{ tag }}</div>
      <div class="col-10" id="preview-content" style="background-color:lemonchiffon; margin:auto;">{{ content }}</div>
    </div>
    <div class="col" style="background-color:whitesmoke; padding:0">
      <p style="margin: 2% 0 2% 0;">(임시) 글쓰기 구역</p>
      <form v-on:submit="createPost" style="margin: 0 10% 0 10%">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" placeholder="" v-model="title">
          <label>제목</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" placeholder="" v-model="media">
          <label>사진</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" placeholder="" v-model="tag">
          <label>태그</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" placeholder="" v-model="content">
          <label>내용</label>
        </div>
        <button type="button" v-on:click="goBack" class="btn btn-outline-primary" id="goBackButton">나가기</button>
        <button type="button" v-on:click="savePost" class="btn btn-outline-primary" id="saveButton">저장하기</button>
        <button type="button" v-on:click="savePostTmp" class="btn btn-outline-secondary" id="tmpSaveButton">임시저장하기</button>
      </form>
    </div>
  </div>
</template>

<script>
import postPage from "@/js/postPage.js";
export default postPage
</script>

<style scoped>
.form-control {
  width: 100%;
  margin: 0;
}
#goBackButton {
  float:left;
  margin: 1% 0 3% 1%;
}
#saveButton {
  float:right; margin: 1% 3% 3% 0;
}
#tmpSaveButton {
  float:right; margin: 1% 1% 3% 0;
}
</style>