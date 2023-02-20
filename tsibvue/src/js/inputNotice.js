export default {
    name: "inputNotice",
    data(){
        return {
            memberName: ""
        }
    },
    methods:{
        // 스프링 테스트를 위한 페이지뷰입니다.
        openNoticePage(){
            this.memberName = prompt("디비에 저장할 정보를 입력해주세요.","");
            if(this.memberName != null && this.memberName != ''){
                this.noticeInput()
            }else {
                alert("입력하신 정보가 없습니다.");
            }
        },
        noticeInput(){
            this.$axios({
                url: "/board/inputBoard",
                method: "post",
                params: {userName: this.memberName}
            }).then((response) => {
                if (response.data == '02') {
                    alert('입력에 성공했습니다 디비 확인해주세요');
                } else {
                    alert('입력된 값이 없습니다. 테스트 테이블은 설정하셨나요?');
                }
            }).catch(function (){
                alert("스프링 연결이 되어있지 않습니다! 뷰만 오픈하셨군요!")
            });
        }
    }
}