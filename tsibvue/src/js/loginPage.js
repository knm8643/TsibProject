import { mapActions, mapGetters } from "vuex";

/* global $ */
export default {
    name: "LoginPage",
    data: () => ({
        uid: '',
        password: ''
    }),
    mounted() {
        // 페이지 로드시 모달팝업창을 무조건 보여지게 함
        $('#login-modal').modal('show');
    },
    methods: {
        ...mapActions(['login']),     //vuex/actions에 있는 login 함수

        async fnLogin() {       //async 함수로 변경
            if (this.user_id === '') {
                alert('ID를 입력하세요.')
                return
            }

            if (this.user_pw === '') {
                alert('비밀번호를 입력하세요.')
                return
            }

            //로그인 API 호출
            try {
                let loginResult = await this.login({user_id: this.user_id, user_pw: this.user_pw})
                if (loginResult) alert('로그인 결과 : ' + loginResult)
            } catch (err) {
                if (err.message.indexOf('Network Error') > -1) {
                    alert('서버에 접속할 수 없습니다. 상태를 확인해주세요.')
                } else {
                    alert('로그인 정보를 확인할 수 없습니다.')
                }
            }
        }
    },
    computed: {
        ...mapGetters({
            errorState: 'getErrorState'
        })
    }
}