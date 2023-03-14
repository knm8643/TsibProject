export default {
    name: "MyPage",
    data() {
        return {
            userImgUrl: "", // 사용자 이미지 URL
            userImgFile: null // 사용자 이미지 파일
        };
    },
    methods: {
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