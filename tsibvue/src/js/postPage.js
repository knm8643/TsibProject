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
    mounted() {
        this.hideNavi();
    },
    watch: {
        '$route'(params) {
            console.log(params);
        }
    },
    beforeRouteLeave(to, from, next) {
        if (!confirm('게시물이 저장되지 않았습니다. 나가시겠습니까?')) {
            next(false);
        } else {
            this.showNavi();
            next();
        }
    },
    methods: {
    // Navi 숨기기
        hideNavi: function () {
            document.getElementsByClassName("header-container")[0].style.display = "none";
        },
    // Navi 보이기
        showNavi: function () {
            document.getElementsByClassName("header-container")[0].style.display = "";
        },
    // 나가기 버튼
        goBack: function (event) {
            if (event) {
                this.$router.push('/');
            }
        },
    // 저장 버튼
        savePost: function (event) {
            if (event) {
                let postData = {
                    title: this.title,
                    media: this.media,
                    tag: this.tag,
                    content: this.content
                }

                this.$axios({
                    url: "/board",
                    method: "post",
                    params: postData
                }).then(function (response) {
                    alert("success");
                    if (response) {
                        console.log(response);
                    }
                }).catch(function (error) {
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

                this.$axios({
                    url: "/board/tmp",
                    method: "post",
                    params: postData
                }).then(function (response) {
                    alert("success");
                    if (response) {
                        console.log(response);
                    }
                }).catch(function (error) {
                    alert("fail");
                    if (error) {
                        console.log(error);
                    }
                });
            }
        },
    }
}