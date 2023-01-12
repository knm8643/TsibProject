<template>
  <section>
    <div class="왼쪽">
      <p>저희에게 당싱을 알려주세요!</p>
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
export default {
  name: "LoginPage",
  data: () => ({
    uid: '',
    password: ''
  }),
  methods: {
    fnLogin() {
      if (this.user_id === '') {
        alert('ID를 입력하세요.')
        return
      }
      if (this.user_pw === '') {
        alert('비밀번호를 입력하세요.')
        return
      }
      alert('로그인 되었습니다.')
    }
  }
}
</script>

<style scoped>

</style>