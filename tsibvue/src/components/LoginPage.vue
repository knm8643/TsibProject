<template>
  <div class="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">저희에게 당신을 알려주세요!</h5>
          <button type="button" @click="closeModal()" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <section class="login-M">
            <div class="오른쪽">
              <h2>블로그 만드는 블로그 </h2>
              <form @submit.prevent="fnLogin">
                <p>
                  <input class="w3-input" name="uid" placeholder="이메일을 입력해주세요" v-model="user_id"><br>
                </p>
                <p>
                  <input name="password" class="w3-input" placeholder="비밀번호 입력해주세요" v-model="user_pw" type="password">
                </p>
                <p>
                  <button type="submit" class="w3-button w3-green w3-round">로그인</button>
                </p>
              </form>
              <div class="회원가입">
                <P>아직회원이 아니신가요? </P>
                <button>회원가입</button>
              </div>
            </div>
          </section>
        </div>
        <div class="modal-footer">
          <!-- 모달 하단 버튼 등 작성 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import loginPage from "@/js/loginPage.js";
export default loginPage
</script>

<style scoped>
.login-M{    
    width: 100%;
    height: 590px;
    margin: 0 auto;
    display: flex;
    background: #ebebeb;
    justify-content: space-around;
    box-shadow: 0px 4px 4px rgba(0,0,0,.25);
    }
</style>
