<template>
  <div class="전체글구역">
    <div id="미리보기전체구역">
      <div id="제목미리보는구역">{{title}}</div>
      <div id="내용미리보는구역">{{content}}</div>
    </div>
    <div id="글쓰기전체구역">
      <textarea id="제목쓰는구역" type="text" v-model="title" placeholder="제목을 입력하세요. 작성하신 내용은 좌측 미리보기로 확인 가능합니다. (제목은 글씨크게)"></textarea>
      <textarea id="내용쓰는구역" type="text" v-model="content" placeholder="글을 입력하세요. 작성하신 내용은 좌측 미리보기로 확인 가능합니다. (내용은 글씨작게)"></textarea>
    </div>
  </div>
  <div id="저장버튼구역">
    <button id="저장버튼" type="submit" @click="writePost">저장하기</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "PostPage",
  components: {},
  data() {
    return {
      title: "",
      content: ""
    }
  },
  methods: {
    writePost(){
      axios.post('/post/write', {
        content: this.content
      })
          .then(function(response){
            alert('저장이 완료되었습니다.');
            console.log(response);
          })
          .catch(function(error){
            alert('저장에 실패하였습니다.');
            console.log(error)
          });
    }
  }
}
</script>

<style scoped> /* 임시 */
.전체글구역{
  width: 100%;
  height: 400px;

  /* 가로, 세로 가운데 정렬 */
  display: flex;
  justify-content: center;
  align-items: center;
}
#미리보기전체구역{
  background-color: whitesmoke;
  border: 1px solid dimgrey;
  width: 49%;
  height: 350px;
  float: left;

  /* 가로, 세로 가운데 정렬 */
  display: inline-block;
  justify-content: center;
  align-items: center;
}
#제목미리보는구역{
  background-color: dimgrey;
  width: 100%;
  height: 22%;
  color: white;
  font-size: 1.4em;
}
#내용미리보는구역{
  background-color: grey;
  width: 100%;
  height: 78%;
  color: white;
  font-size: 1.1em;
}
#글쓰기전체구역{
  background-color: darkgrey;
  border: 1px solid dimgrey;
  width: 49%;
  height: 350px;
  float: left;

  /* 가로, 세로 가운데 정렬 */
  display: inline-block;
  justify-content: center;
  align-items: center;
}
#제목쓰는구역{
  width: 99%;
  height: 20%;
  font-size: 1.4em;

  /* textarea 데코레이션 제거 */
  border: none;
  overflow: auto;
  outline: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}
#내용쓰는구역{
  width: 99%;
  height: 76%;
  resize: none;
  font-size: 1.1em;

  /* textarea 데코레이션 제거 */
  border: none;
  overflow: auto;
  outline: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}
#저장버튼구역{
  width: 100%;
  height: 100px;

  /* 가로, 세로 가운데 정렬 */
  display: flex;
  justify-content: center;
  align-items: center;
}
#저장버튼{
  width: 100px;
  height: 40px;
  border: 1px solid dimgrey;
}
</style>