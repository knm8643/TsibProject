export default {
    name: "PostPage",
    components: {},
    data() {
        return {
            title: "",
            media: "",
            tag: "",
            content: ""
        }
    },
    methods: {
        // 나가기 버튼
        goBack: function (event) {
            if (event) {
                this.$router.push('/main')
            }
        },


        // 저장 버튼
        savePost: function (event) {
            if (event) {
                // 게시물 데이터
                let postData = {
                    title: this.title,
                    media: this.media,
                    tag: this.tag,
                    content: this.content
                }

                // (임시)
                let msg = "title: " + this.title + "\n" +
                    "media: " + this.media + "\n" +
                    "tag: " + this.tag + "\n" +
                    "content: " + this.content + "\n";

                // AXIOS
                this.$axios({
                    url: "/board/save",
                    method: "post",
                    params: postData
                })
                    // 성공
                    .then(function (response) {
                        alert("[ 저장하기 ]\n" +
                            "* 데이터\n" + msg + "\n" +
                            "* 메시지\n" + "저장에 성공했습니다." + "\n\n" +
                            "* 응답 메시지\n" + response.data
                        );
                    })
                    // 실패
                    .catch(function (error) {
                        if (error.response) {
                            alert("[ 저장하기 ]\n" +
                                "* 데이터\n" + msg + "\n" +
                                "* 메시지\n" + "저장에 실패하였습니다." + "\n\n" +
                                "* axios 에러 메시지\n" + error
                            );
                        }
                    });
            }
        },

        // 임시저장 버튼
        savePostTmp: function (event) {
            if (event) {
                // 게시물 데이터
                let postData = {
                    title: this.title,
                    media: this.media,
                    tag: this.tag,
                    content: this.content
                }

                // (임시)
                let msg = "title: " + this.title + "\n" +
                    "media: " + this.media + "\n" +
                    "tag: " + this.tag + "\n" +
                    "content: " + this.content + "\n";

                // AXIOS
                this.$axios({
                    url: "/board/tmpsave",
                    method: "post",
                    params: postData
                })
                    // 성공
                    .then(function (response) {
                        alert("[ 임시저장하기 ]\n" +
                            "* 데이터\n" + msg + "\n" +
                            "* 메시지\n" + "임시저장에 성공했습니다." + "\n\n" +
                            "* 응답 메시지\n" + response.data
                        );
                    })
                    // 실패
                    .catch(function (error) {
                        if (error.response) {
                            alert("[ 임시저장하기 ]\n" +
                                "* 데이터\n" + msg + "\n" +
                                "* 메시지\n" + "임시저장에 실패하였습니다." + "\n\n" +
                                "* axios 에러 메시지\n" + error
                            );
                        }
                    });
            }
        }
    }
}