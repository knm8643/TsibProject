export default {
    name: "naviPage",
    data(){
        return{}
    },
    methods:{
        sendMainPage(sendData){
            this.$axios({
                url: "/board/selectBoard",
                method: "get",
                params: {deviceType: sendData}
            }).then((response) => {
                if (response.data == '01') {
                    console.log('스프링이 연결됐습니다')
                    // alert("스프링이 연결된 메인페이지입니다!");
                }
            }).catch(function (error) {
                if (error.response) {
                    console.log('스프링 연결해주세요')
                    // alert("메인페이지 스프링 연결이 되어있지 않습니다! 더미 데이터 보려면 스프링 연결해야만해요!");
                }
            });
        }
    }
}