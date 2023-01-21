<template>
  <div id="hello">
    <h1>{{ msg }}</h1>
    <h5>{{ notice1 }}</h5>
    <h4>{{ notice2 }}</h4>
    <p id="tmp">
      1. <a href="https://velog.io/@aimzero9303/Vue-20.-%EC%84%9C%EB%B2%84%EB%A1%9C-ajax-%EC%9A%94%EC%B2%AD%ED%95%B4%EB%B3%B4%EC%9E%90..-feat.-axios" target="_blank">AXIOS 설치하기</a><br>
      2. <a href="https://jhhan009.tistory.com/33" target="_blank">SPRING-VUE 통신하기</a><br>
      3. 스프링vue 연결 시에는 tsibvue/src/ npm run build 진행 후 스프링 빌드 And start!<br>
      4. 뷰만 따로 할시에는 vue.config 주석 후 tsibvue/src/ npm run serve<br>
      5. <a href="https://goodlucknua.tistory.com/9">뷰2.2이상부턴 V-FOR는 다르게 쓰인다</a><br>
      6. <a style="color: red">cd tsibvue "npm i bootstrap@5.2.3" 부트스트랩 npm으로 깔아버리기~</a>
    </p>
    <div>
      <p id="inputSpan">
        <button @click="noticeInputOpen()">%Spring Communication Example1%</button>
      </p>
      <button @click="sendSpring()">%Spring Communication Example2%</button>
      <inputNotice></inputNotice>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import inputNotice from '@/components/inputNotice';

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
      }).catch(function (){
        alert("스프링 연결이 되어있지 않습니다! 뷰만 오픈하셨군요!")
      });
    },
    noticeInputOpen(){
      inputNotice.methods.openNoticePage();
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
