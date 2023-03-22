export default {
    name: "MyPage",
    data() {
        return {
            userImgUrl: "", // 사용자 이미지 URL
            userImgFile: null, // 사용자 이미지 파일

            noticeTestlist : [],
        };
    },
    mounted() {
        this.myPageInit();
    },
    methods: {
        myPageInit() {
            // v-for 확인을 위한 테스트 더미데이터
            this.noticeTestlist = [1,2,3,4]
            console.log('마이페이지 진입')
        },
        handleUserImgChange(e) {
            const file = e.target.files[0];
            if (!file) {
                return;
            }

            this.userImgFile = file;
            const reader = new FileReader();
            reader.onload = e => {
                this.userImgUrl = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    }
};