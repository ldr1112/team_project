<template>
  <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="id">Id</label>
      <input type="id" class="form-control" id="id" placeholder="id">
    </div>
    <div class="form-group col-md-6">
      <label for="password">Password</label>
      <input type="password" class="form-control" id="password" placeholder="Password">
    </div>
  </div>
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" class="form-control" id="name" placeholder="name">
  </div>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="text" class="form-control" id="email" placeholder="email">
  </div>
  <div class="form-group">
    <label for="phonenumber">Phone Number</label>
    <input type="text" class="form-control" id="phonenumber" placeholder="phonenumber">
  </div>
  <button @click="SignUp" type="submit" class="btn btn-success">가입</button>
  <button @click="Cancle" type="submit" class="btn btn-danger">취소</button>
  </form>
</template>
<script>
export default {
  name: 'form-row',
  data() {
    return {
    email: null,
    password: null,
    address: null,
    phonenumber: null
    }
  },
  methods: {
    SignUp() {
      this.$router.push({
        path: '/login/free'
      })
    },
    Cancle() {
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>