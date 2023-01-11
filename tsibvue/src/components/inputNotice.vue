<template>
  <div></div>
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
      this.memberName = prompt("디비에 저장할 정보를 입력해주세요.","");
      if(this.memberName != null && this.memberName != ''){
        this.noticeInput()
      }else {
        alert("입력하신 정보가 없습니다.");
      }
    },
    noticeInput(){
      axios({
        url: "/board/inputBoard",
        method: "post",
        params: {userName: this.memberName}
      }).then((response) => {
        if (response.data == '01') {
          alert('입력된 값이 없습니다.');
        } else {
          alert('입력에 성공했는데 디비 확인해봐');
        }
      });
    }
  }
}
</script>
