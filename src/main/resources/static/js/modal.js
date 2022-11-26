var modal = Vue.createApp({
    el : "#modal",
    components:{
    },
    data() {
        return {
            userId:'',
            userPw:'',
            privateName:'',
            company:'',
            privateEmail:'',
            privateBirt:'',
        }
    },
    method : {
        ModalcloseModal() {
            $("#modal").hide();
        },
        sendMemberInfos() {
            var $this = this;
            console.log($("#privateName").val());
            console.log($this.privateName,$this.company,$this.privateEmail,$this.privateBirt);
        },
    }
})