export default {
    name: "mainPage",
    data() {
        return {
            noticelist : [1,2,3,4,5,6,7,8,9,10,11],
            noticeimages:[
                'example1.jpg',
                'example2.jpg',
                'example3.jpg',
                'example4.jpg',
                'example5.png',
                'example6.jpg',
                'example7.jpg',
                'example8.jpg',
                'example9.jpeg',
                'example10.jpg',
                'example10.jpg',
            ],
            noticeSwiperList_1 :
                [
                    {img:require("../../public/examplePhoto/example3.jpg"), val:1},
                    {img:require("../../public/examplePhoto/example4.jpg"), val:2},
                    {img:require("../../public/examplePhoto/example5.png"), val:3},
                    {img:require("../../public/examplePhoto/example6.jpg"), val:4},
                ],
            noticeSwiperList_2 :
                [
                    {img:require("../../public/examplePhoto/example1.jpg"), val:1},
                    {img:require("../../public/examplePhoto/example2.jpg"), val:2},
                    {img:require("../../public/examplePhoto/example7.jpg"), val:3},
                    {img:require("../../public/examplePhoto/example8.jpg"), val:4},
                ]
        }
    },
    components: {},
    mounted() {
        this.mainInit();
    },
    methods: {
        mainInit() {
            /* 더미데이터(영찬이 작업시 삭제 예정) */
            this.$axios({
                url : ""
            }).then(function (response){ // eslint-disable-line no-unused-vars
                console.log('페이지 최초 접속시 작동');
            }).catch(function (error) {
                console.log(error);
            })
        },
        noticeSwiper() {
            alert("게시판 스와이퍼는 아직입니다!");
        },
        noticePage() {
            alert("게시판 내부는 아직입니다!");
        },
    }
}