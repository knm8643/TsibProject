<template>
  <h3 style="margin-bottom:0;">게시글 작성 페이지</h3>
  <div class="전체글구역">
    <div id="미리보기전체구역">
      <div id="미리보기_이미지">[이미지 업로드 테스트 중]</div>
      <p id="미리보기_태그">#태그_예시1, #태그_예시2, #태그_예시3, {{ tag ? "#" + tag : "" }}</p>
      <p id="미리보기_제목">{{ title }}</p>
      <p id="미리보기_내용">{{ content }}</p>
    </div>
    <div id="글쓰기전체구역">
      <form style="height:600px; margin:0;">
        <p id="글쓰기_버튼">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <input type="file">
        </p>
        <p id="글쓰기_태그">
          <label style="font-size: 14px">#태그_예시1, #태그_예시2, #태그_예시3, #</label>
          <input type="text" v-model="tag">
        </p>
        <textarea id="글쓰기_제목" type="text" v-model="title" placeholder=" 제목을 입력하세요."></textarea>
        <textarea id="글쓰기_내용" type="text" v-model="content" placeholder="  내용을 입력하세요."></textarea>
        <p style="margin:0; height:100px;">
          <button id="글쓰기_저장" type="submit" @click="writePost">저장하기</button>
        </p>
      </form>
    </div>
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
      content: "",
      tag: ""
    }
  },
  methods: {
    writePost() {
      axios.post('/post/write', {
        content: this.content
      }).then(function (response) {
        alert('저장되었습니다.');
        console.log(response);
      }).catch(function (error) {
        alert('저장에 실패하였습니다.');
        console.log(error)
      });
    },
  }
}
</script>

<style scoped>
.전체글구역 {
  width: 90%;
  height: 700px;
  margin: auto;

  /* 가로, 세로 가운데 정렬 */
  display: flex;
  justify-content: center;
  align-items: center;
}

#미리보기전체구역 {
  width: 49%;
  height: 600px;
  float: left;
  overflow: hidden;
  border: 1px solid black;

  /* 가로, 세로 가운데 정렬 */
  display: inline-block;
  justify-content: center;
  align-items: center;
}

#미리보기_이미지 {
  width: 100%;
  height: 150px;
  margin: 0;
  border-bottom: 1px solid black;
}

#미리보기_태그 {
  width: 100%;
  height: 50px;
  color: black;
  margin: 0;
  border-bottom: 1px solid black;

  /* 가로, 세로 가운데 정렬 */
  display: flex;
  justify-content: center;
  align-items: center;
}

#미리보기_제목 {
  width: 100%;
  height: 100px;
  color: black;
  font-size: 2em;
  margin: 0;
  border-bottom: 1px solid black;

  /* 가로, 세로 가운데 정렬 */
  display: flex;
  justify-content: center;
  align-items: center;
}

#미리보기_내용 {
  width: 100%;
  height: 300px;
  color: black;
  font-size: 1.1em;
  margin: 0;

  /* 가로, 세로 가운데 정렬 */
  display: flex;
  justify-content: center;
  align-items: center;
}

#글쓰기전체구역 {
  width: 49%;
  height: 600px;
  float: left;
  overflow: hidden;
  border: 1px solid black;
  border-left: none;

  /* 가로, 세로 가운데 정렬 */
  display: inline-block;
  justify-content: center;
  align-items: center;
}

#글쓰기_버튼 {
  width: 100%;
  height: 50px;
  resize: none;
  padding: 0%;
  font-size: 2em;
  display: block;
  margin: 0;

  /* textarea 데코레이션 제거 */
  border: 1px solid black;
  border-left: none;
  border-top: none;
  overflow: auto;
  outline: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}

#글쓰기_태그 {
  width: 100%;
  height: 50px;
  resize: none;
  padding: 0%;
  font-size: 2em;
  display: block;
  margin: 0;

  /* textarea 데코레이션 제거 */
  border: 1px solid black;
  border-left: none;
  border-top: none;
  border-bottom: none;
  overflow: auto;
  outline: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}

#글쓰기_제목 {
  width: 100%;
  height: 100px;
  resize: none;
  padding: 0%;
  font-size: 2em;
  display: block;

  /* textarea 데코레이션 제거 */
  border: 1px solid black;
  border-left: none;
  overflow: auto;
  outline: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}

#글쓰기_내용 {
  width: 100%;
  height: 300px;
  resize: none;
  padding: 0%;
  font-size: 1.4em;
  display: block;

  /* textarea 데코레이션 제거 */
  border: 1px solid black;
  border-left: none;
  border-top: none;
  overflow: auto;
  outline: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}

#글쓰기_저장 {
  width: 100px;
  height: 50px;
  border: 1px solid dimgrey;
  margin-top: 30px;
}
</style>