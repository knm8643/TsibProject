<template>
  <div class="전체구역">
    <div id="글쓰는구역">
      <input id="글상자" type="text" v-model="content" placeholder="글을 입력하세요.">
    </div>
    <div id="미리보는구역">
      <div id="미리보기상자">{{content}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostPage",
  components: {},
  data() {
    return {
      content: ""
    }
  }
}
</script>

<style scoped>
/* 임시 */
  .전체구역 {
    width: 500px;
    height: 500px;
  }
  #글쓰는구역 {
    border: 1px solid black;
    width: 200px;
    height: 200px;
    float: left;
  }
  #글상자 {
    width: 100px;
    height: 100px;
    margin: 50px 0 50px 0;
  }
  #미리보는구역 {
    border: 1px solid black;
    width: 200px;
    height: 200px;
    float: left;
  }
  #미리보기상자 {
    margin: 50px 0 50px 0;
  }
</style>