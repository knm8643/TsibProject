var mainLogin = Vue.createApp({
    el: "#mainLogin",
    components: {
        modal
    },
    data() {
        return {
            loging: true,
            deviceType: '',
            userId:'',
            userPw:'',
        }
    },
    methods: {
        login(deviceType) {
            var $this = this;
            if(deviceType == 'app'){
                alert('app 미구현');
                return
            }
            $this.loging = false;
        },
        sendMemberInfo(){
            var $this = this;
            if($this.userId == '' || $this.userId == undefined){
                alert("아이디를 입력해주세요.");
                return
            }
            if($this.userPw == '' || $this.userPw == undefined) {
                alert("비밀번호를 입력해주세요.");
                return
            }
            alert("로그인 여부 상관없이 홈페이지 작업 시작해주세요.")
        },
        searchInfoModal(){
            $("#modal").show();
            async function fetchHtmlAsText(url) {
                return await (await fetch(url)).text();
            }
            async function importPage(target) {
                document.querySelector('#' + target).innerHTML = await fetchHtmlAsText('/html/'+target + '.html');
            }
            importPage('modal');
        },
        closeModal() {
            $("#modal").hide();
        },

        // 수정필요한 펑션은 이 아래부터 작업해주세요 //
        readPop() {
            // 모달팝업창 클릭시 움직이기 위해 만든 펑션(현재포기)

            // const modaltitle = document.getElementById("modal_title");
            // const modalPopMove = document.querySelector(".modal-window");
            // var flag = true;

            // document.addEventListener("mouseup", (b) => {
            //     console.log('1')
            //     var mouseX = b.clientX;
            //     var mouseY = b.clientY;
            //     modalPopMove.style.left = (mouseX - 120) + 'px';
            //     modalPopMove.style.top = (mouseY - 30) + 'px';
            //     modalPopMove.style.position = 'absolute';
            //     flag = false;
            // }, {once:true});

            // if(flag) {
            //     console.log('2')
            // modaltitle.addEventListener("mousemove", (e) => {
            //         var mouseX = e.clientX;
            //         var mouseY = e.clientY;
            //         modalPopMove.style.left = (mouseX - 120) + 'px';
            //         modalPopMove.style.top = (mouseY - 30) + 'px';
            //         modalPopMove.style.position = 'absolute';
            //     });
            // }
        },
    }
}).mount('#mainLogin')

