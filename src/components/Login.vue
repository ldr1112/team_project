<template>
  <div>
    <form>
      <div class="form-group" style="margin-top: 100px">
        <label for="email">아이디</label>
        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">소문자 대문자를 구분해주세요</small>
      </div>
      <div class="form-group">
        <label for="password">비밀번호</label>
        <input type="password" class="form-control" id="password" placeholder="Password">
      </div>
      <button @click="SignIn" type="button" class="btn btn-success">로그인</button>
      <button @click="Cancle" type="button" class="btn btn-danger">취소</button>
      <button @click="SignUp" type="button" class="btn btn-warning">회원가입</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'form-group',
  data() {
    return {
    email: null,
    password: null
    }
  },
  methods: {
    SignIn() {
      this.$router.push({
        path: '/'
      })
    },
    Cancle() {
      this.$router.push({
        path: '/'
      })
    },
    SignUp() {
      this.$router.push({
        path: '/signup/free'
      })
    }
  }
}
</script>
<style type="text/css">
.form-group {
  width: 30%;
  height: 100px;
  margin: 0 auto;

}
</style>