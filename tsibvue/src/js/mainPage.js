/* eslint-disable */
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';
export default {
    name: "mainPage",
    data() {
        return {
            notice: true,
            noticelist : [],
            noticeimages: [],
            noticeSwiperList_1: [],
            noticeSwiperList_2: []
        }
    },
    components: {},
    computed:{
    },
    mounted() {
        this.mainInit();
        new Swiper('.swiper-container', {
            initialSlide: 1,
            pagination: {
                el: '.swiper-pagination',
            },
        });
    },
    methods: {
        mainInit() {
            /* 삭제에정 */
            this.noticeSwiperList_1 =
                [
                    {img:require("../../public/examplePhoto/example3.jpg"), val:1},
                    {img:require("../../public/examplePhoto/example4.jpg"), val:2},
                    {img:require("../../public/examplePhoto/example7.jpg"), val:3},
                    {img:require("../../public/examplePhoto/example6.jpg"), val:4},
                ]
            /* 삭제에정 */
            const pageThis = this;
            this.$axios({
                url : "/main/load-entire-post",
                method : "get"
            }).then(function (response){
                if(response.data.length > 0){
                    pageThis.notice = false
                    pageThis.noticelist = response.data
                }
            }).catch(function (error) {
                console.log(error);
            })
        },
        noticeSwiper() {
            alert("게시판 스와이퍼는 아직입니다!");
        },
        noticePage(param) {
            if(param == 'true'){
                alert("게시판 내부는 아직입니다!");
            } else {
                alert('디비연결해주세요.')
            }
        },
    }
}