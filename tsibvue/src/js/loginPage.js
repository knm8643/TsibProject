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
        closeModal() {
            $('#login-modal').modal('hide');
            window.history.back();
        },
        fnLogin() {
            if (this.user_id === '') {
                alert('ID를 입력하세요.');
                return;
            }
            if (this.user_pw === '') {
                alert('비밀번호를 입력하세요.');
                return;
            }
            alert('로그인 되었습니다.');
        }
    }
}