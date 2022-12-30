<template>
  <div class="hello" v-if="mainOff">
    <h1>{{ msg }}</h1>
    <p id="tmp">
      1. <a href="https://velog.io/@aimzero9303/Vue-20.-%EC%84%9C%EB%B2%84%EB%A1%9C-ajax-%EC%9A%94%EC%B2%AD%ED%95%B4%EB%B3%B4%EC%9E%90..-feat.-axios">SPRING-VUE 통신하기</a><br>
      2. <a href="https://jhhan009.tistory.com/33">AXIOS 설치하기</a><br>
      3. tsibvue/src/ npm run build And start!
    </p>
    <div>
      <button @click="sendSpring()">SPRING TEST</button>
      <button @click="goMainPage()">GO MAIN PAGE</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import mainPage from "@/components/mainPage";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      mainOff : true
    }
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
    //<!-- 새로운 페이지 불러오기 -->
    goMainPage(){
        this.mainOff = false;
        mainPage.methods.thisMainPage("false");
    }
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
a {
  color: #42b983;
}
</style>
