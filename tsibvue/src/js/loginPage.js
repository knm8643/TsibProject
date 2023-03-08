export default {
    name: "LoginPage",
    data: () => ({
        uid: '',
        password: ''
    }),
    methods: {
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