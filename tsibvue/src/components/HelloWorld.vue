<template>
  <div id="hello">
    <h1>{{ msg }}</h1>
    <h5>{{ notice1 }}</h5>
    <h4>{{ notice2 }}</h4>
    <p id="tmp">
      1. <a href="https://velog.io/@aimzero9303/Vue-20.-%EC%84%9C%EB%B2%84%EB%A1%9C-ajax-%EC%9A%94%EC%B2%AD%ED%95%B4%EB%B3%B4%EC%9E%90..-feat.-axios" target="_blank">AXIOS 설치하기</a><br>
      2. <a href="https://jhhan009.tistory.com/33" target="_blank">SPRING-VUE 통신하기</a><br>
      3. tsibvue/src/ npm run build And start!<br>
      4. 뷰만 따로 할시에는 vue.config 주석
    </p>
    <div>
      <button @click="sendSpring()">SPRING TEST</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: '현재 임시 초기화면입니다.'
    },
    notice1: {
      type: String,
      default: '(현재 페이지로 돌아오시려면 최상단 타이틀을 눌러주세요.)'
    },
    notice2: {
      type: String,
      default: '프로젝트 진행에 있어 필요한 참고자료를 자유롭게 넣어주세요!'
    },
  },
  data(){
    return{}
  },
  methods:{
    //<!-- 스프링 연결 테스트 -->
    sendSpring(){
      axios({
        url: "/springTestController/test",
        method: "post",
        params: {
          userMessage: (confirm("서버에 한마디 하겠습니까?"))?prompt("안녕 스프링 반가워!","Hello World!"):prompt("진짜 하고 싶은말이 없으신가요?","T_T")
        }
      }).then((response) => {
        if(response.data){
          document.getElementById('tmp').innerHTML = response.data;
          console.log("Hello World!");
        }else{
          console.log("Fail");
        }
      });
    },
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
#hello {
  margin-bottom: 30px;
}
</style>
