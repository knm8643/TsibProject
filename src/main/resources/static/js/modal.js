var modal = Vue.createApp({
    el : "#modal",
    components:{
    },
    data() {
        return {
            userId:'',
            userPw:'',
        }
    },
    method : {
        ModalcloseModal() {
            alert('sibal1');
        }
    }
})