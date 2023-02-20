export default {
    name: "PostPage",
    components: {},
    data() {
        return {
            title: "",
            media: "",
            tag: "",
            content: "",
        }
    },
    methods: {
        createPost() {
            var url = '/board/create';
            var data = {
                title: this.title,
                media: this.media,
                tag: this.tag,
                content: this.content
            }
            this.$axios.post(url, data)
                .then(function (response) {
                    console.log(response.data)
                }).catch(function (error) {
                console.log(error)
            });
        },
    }
}