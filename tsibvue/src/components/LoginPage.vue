<template>
  <section class="login-M">
    <div class="w-login">
      <p>저희에게 당신을 알려주세요!</p>
    </div>
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
</template>

<script>
import loginPage from "@/js/loginPage.js";
export default loginPage
</script>

<style scoped>
.login-M{    
    width: 745px;
    height: 590px;
    margin: 0 auto;
    display: flex;
    background: #ebebeb;
    justify-content: space-around;
    box-shadow: 0px 4px 4px rgba(0,0,0,.25);
    }
</style>
