<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p id="tmp">
      애들아 버튼을 한번 눌러봐 그리고 콘솔창에 SYSOUT 헬로월드가 있는지 확인해봐!<br>
      뷰는 ajax보단 axios를 사용하는게 좋다네<br>
      스프링 연결해놨다 일단! 스프링API 테스트 하려면 계속 npm run build필요?<br>
      <a href="https://velog.io/@aimzero9303/Vue-20.-%EC%84%9C%EB%B2%84%EB%A1%9C-ajax-%EC%9A%94%EC%B2%AD%ED%95%B4%EB%B3%B4%EC%9E%90..-feat.-axios">Ajax-Axios 설치 법</a><br>
      <a href="https://jhhan009.tistory.com/33">vue-spring 연결</a>
    </p>
    <div><button @click="sendSpring()">SPRING</button></div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    sendSpring(){
      axios({
        url: "/springTestController/test",
        method: "post",
        params: {
          userMessage: prompt("서버에 전달하고 싶은 말","")
        }
      }).then((response) => {
        if(response.data){
          document.getElementById('tmp').innerHTML=response.data;
        }else{
          console.log("Fail");
        }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
