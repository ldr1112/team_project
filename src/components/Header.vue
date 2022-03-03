<template>
<html>
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>
    <div style="font-size: 20px ">
    
      <b-navbar toggleable="lg" type="dark" variant="">
        <!-- 이미지에 모달 버튼 넣기 -->
        <button id="" v-b-modal.modal-1 type="button" class="btn btnEvent">
          <b-modal id="modal-1" title="HooHa! HooHa!">
            <img src="@/assets/asd.gif" />
            <p class="my-4">Hello training!</p>
          </b-modal>
          <img src="@/assets/team_logo1.png" alt="btnImages" class="btnImages" />
        </button>

        <b-navbar-brand href="#" to="/">Home Training</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="item mx-auto" >
            <b-nav-item href="#" to="/scheduler/free" style="margin-right: 20px; margin-left: 20px;">스케줄러</b-nav-item>
            <b-nav-item href="#" to="/opencv/free" style="margin-right: 20px; margin-left: 20px;">opencv</b-nav-item>
            <b-nav-item href="#" to="/data_analyze/free" style="margin-right: 20px; margin-left: 20px;">데이터 분석</b-nav-item>
            <b-nav-item href="#" to="/board/free" style="margin-right: 20px; margin-left: 20px;">정보 공유 게시판</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            </b-nav-form>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-navbar-nav>

          <b-button size="sm" class="my-2 my-sm-0" style="margin: 10px" to="/Login/free">로그인</b-button>
        </b-collapse>
      </b-navbar>
    </div>
  </html>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      name: '',
      nameState: null,
      submittedNames: []
    }
  },
   methods: {
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid
        return valid
      },
      resetModal() {
        this.name = ''
        this.nameState = null
      },
      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
      }
        // Push the name to submitted names
        this.submittedNames.push(this.name)
        // Hide the modal manually
        this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing')
      })
    }
  }
}
</script>