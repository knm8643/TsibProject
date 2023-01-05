<template>
   <div id="inputNotice" style="display: none;">
      <h3>게시판 작성페이지(값넘김 테스트 영역 지워도댐)</h3><br>
      <input type="text" placeholder="작성자" v-model="memberName"><button @click="noticeInput()">전송</button>
   </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "inputNotice",
  data(){
    return {
      memberName: ""
    }
  },
  methods:{
    openNoticePage(){
      document.getElementById("inputNotice").style.display = "block";
    },
    noticeInput(){
      axios({
        url: "/board/inputBoard",
        method: "post",
        params: {userName: this.memberName}
      }).then((response) => {
        if (response) console.log(response);
      });
    }
  }
}
</script>
