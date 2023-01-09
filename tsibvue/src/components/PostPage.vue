<template>
  <div class="전체구역">
    <div id="글쓰는구역">
      <textarea id="글상자" type="text" v-model="content" placeholder="글을 입력하세요. 작성하신 내용은 화면 우측 미리보기로 확인 가능합니다."></textarea>
    </div>
    <div id="미리보는구역">
      <div id="미리보기상자">{{content}}</div>
    </div>
  </div>
  <div id="저장버튼구역">
    <button type="submit" @click="writePost">저장하기</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "PostPage",
  components: {},
  data() {
    return {
      content: ""
    }
  },
  methods: {
    writePost(){
      axios.post('/post/write', {
        content: this.content
      })
          .then(function(response){
            console.log(response);
          })
          .catch(function(error){
            console.log(error)
          });
    }
  }
}
</script>

<style scoped>
/* 임시 */
.전체구역 {
  width: 100%;
  height: 400px;
  /* 가로, 세로 가운데 정렬 */
  display: flex;
  justify-content: center;
  align-items: center;
}
#글쓰는구역 {
  background-color: darkgrey;
  border: 1px solid dimgrey;
  width: 49%;
  height: 350px;
  float: left;
  /* 가로, 세로 가운데 정렬 */
  display: flex;
  justify-content: center;
  align-items: center;
}
#글상자 {
  width: 90%;
  height: 90%;
  resize: none;
}
#미리보는구역 {
  background-color: whitesmoke;
  border: 1px solid dimgrey;
  border-left-style: hidden;
  width: 49%;
  height: 350px;
  float: left;
  /* 가로, 세로 가운데 정렬 */
  /*display: flex;*/
  /*justify-content: center;*/
  /*align-items: center;*/
}
#미리보기상자 {
}
#저장버튼구역 {
  width: 100%;
  height: 100px;
  /* 가로, 세로 가운데 정렬 */
  display: flex;
  justify-content: center;
  align-items: center;
}
#저장버튼구역 button{
  width: 100px;
  height: 40px;
  border: 1px solid dimgrey;
}
</style>