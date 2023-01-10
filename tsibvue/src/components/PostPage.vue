<template>
  <div class="전체글구역">
    <div id="미리보기전체구역">
      <div id="미리보기버튼구역">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <input type="file">
      </div>
      <div id="미리보기태그구역">
        #태그_예시1, #태그_예시2, #태그_예시3,
        {{ tag ? "#" + tag : "" }}
      </div>
      <div id="미리보기제목구역">{{ title }}</div>
      <div id="미리보기내용구역">{{ content }}</div>
    </div>
    <div id="글쓰기전체구역">
      <div id="글쓰기버튼구역">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <input type="file">
      </div>
      <div id="글쓰기태그지정구역">
        <label style="color:white;">태그 할 내용을 적어주세요:&nbsp;&nbsp;#</label>
        <input type="text" v-model="tag" placeholder="공백 없이 작성해주세요.">
      </div>
      <div id="글쓰기태그구역">
        #태그_예시1,#태그_예시2, #태그_예시3
      </div>
      <textarea id="글쓰기제목구역" type="text" v-model="title" placeholder="제목을 입력하세요. 작성하신 내용은 좌측 미리보기로 확인 가능합니다."></textarea>
      <textarea id="글쓰기내용구역" type="text" v-model="content" placeholder="글을 입력하세요. 작성하신 내용은 좌측 미리보기로 확인 가능합니다."></textarea>
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
      content: "",
      tag: ""
    }
  },
  methods: {
    writePost(){
      axios.post('/post/write', {
        content: this.content
      })
          .then(function(response){
            alert('저장되었습니다.');
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

<style scoped>
/* 전체 */
.전체글구역{
  width: 100%;
  height: 400px;

  /* 가로, 세로 가운데 정렬 */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 미리보기 */
#미리보기전체구역{
  background-color: whitesmoke;
  width: 49%;
  height: 350px;
  float: left;
  overflow: hidden;

  /* 가로, 세로 가운데 정렬 */
  display: inline-block;
  justify-content: center;
  align-items: center;
}

/* 미리보기 버튼 */
#미리보기버튼구역{
  width: 100%;
  height: 10%;
  background-color: powderblue;


  /* 가로, 세로 가운데 정렬 */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 미리보기 태그 */
#미리보기태그구역{
  width: 100%;
  height: 20%;
  background-color: darkseagreen;
  color: white;

  /* 가로, 세로 가운데 정렬 */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 미리보기 제목 */
#미리보기제목구역{
  background-color: dimgrey;
  width: 100%;
  height: 20%;
  color: white;
  font-size: 1.4em;


  /* 가로, 세로 가운데 정렬 */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 미리보기 내용 */
#미리보기내용구역{
  background-color: grey;
  width: 100%;
  height: 50%;
  color: white;
  font-size: 1.1em;


  /* 가로, 세로 가운데 정렬 */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 글쓰기 */
#글쓰기전체구역{
  width: 49%;
  height: 350px;
  float: left;
  overflow: hidden;

  /* 가로, 세로 가운데 정렬 */
  display: inline-block;
  justify-content: center;
  align-items: center;
}

/* 글쓰기 버튼 */
#글쓰기버튼구역{
  width: 100%;
  height: 10%;
  background-color: #42b983;


  /* 가로, 세로 가운데 정렬 */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 글쓰기 태그 (작성하는 태그) */
#글쓰기태그지정구역{
  width: 100%;
  height: 10%;
  background-color: darkslategrey;

  /* 가로, 세로 가운데 정렬 */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 글쓰기 태그 (작성된 태그) */
#글쓰기태그구역{
  width: 100%;
  height: 10%;
  background-color: olive;
  color: white;

  /* 가로, 세로 가운데 정렬 */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 글쓰기 제목 */
#글쓰기제목구역{
  width: 100%;
  height: 20%;
  resize: none;
  padding: 0%;
  font-size: 1.4em;
  display: block;
  background-color: antiquewhite;

  /* textarea 데코레이션 제거 */
  border: none;
  overflow: auto;
  outline: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}

/* 글쓰기 내용 */
#글쓰기내용구역{
  width: 100%;
  height: 560%;
  resize: none;
  padding: 0%;
  font-size: 1.4em;
  display: block;
  background-color: navajowhite;

  /* textarea 데코레이션 제거 */
  border: none;
  overflow: auto;
  outline: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}

/* 저장버튼 구역 */
#저장버튼구역{
  width: 100%;
  height: 100px;

  /* 가로, 세로 가운데 정렬 */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 저장버튼 */
#저장버튼{
  width: 100px;
  height: 40px;
  border: 1px solid dimgrey;
}
</style>