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
    watch: {
        '$route' (params) {
            console.log(params);
        }
    },
    beforeRouteLeave(to, from, next) {
        if (!confirm('게시물이 저장되지 않았습니다. 나가시겠습니까?')) {
            next(false);
        } else {
            next();
        }
    },
    methods: {
        // 나가기 버튼
        goBack: function (event) {
            if (event) {
                this.$router.push('/main');
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

                // AXIOS
                this.$axios({
                    url: "/board",
                    method: "post",
                    params: postData
                })
                // 성공
                .then(function (response) {
                    alert("success");
                    if (response) {
                        console.log(response);
                    }
                })
                // 실패
                .catch(function (error) {
                    alert("fail");
                    if (error) {
                        console.log(error);
                    }
                });
            }
        },
        // 임시저장 버튼
        savePostTmp: function (event) {
            if (event) {
                let postData = {
                    title: this.title,
                    media: this.media,
                    tag: this.tag,
                    content: this.content
                }

                // AXIOS
                this.$axios({
                    url: "/board/tmp",
                    method: "post",
                    params: postData
                })
                    // 성공
                    .then(function (response) {
                        alert("success");
                        if (response) {
                            console.log(response);
                        }
                    })
                    // 실패
                    .catch(function (error) {
                        alert("fail");
                        if (error) {
                            console.log(error);
                        }
                    });
            }
        },
    }
}