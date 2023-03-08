import inputNotice from '@/components/InputNotice.vue';
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
            this.$axios({
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
                alert("스프링 연결이 되어있지 않습니다! 뷰만 오픈하셨군요!");
            });
        },
        noticeInputOpen(){
            inputNotice.methods.openNoticePage();
        },
    }
}