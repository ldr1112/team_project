<template>
  <div id="app" class="tiledBackground">
    <Header />
    <router-view/>
  </div>
  
  
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>

#app {
  font-family: 'Black Han Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #050505;
  margin-top: 0px;
}
/* 홈페이지 배경화면 적용 */
.tiledBackground {
  width: 100%;
  height: 100vh;
  background-image: url(https://ifh.cc/g/G1kjwM.jpg);
  background-size: cover;
  /* 백그라운드 반복하지 않게 하기 */
  background-repeat: no-repeat;
  /* 백그라운드 고정 */
  background-attachment: fixed;
  /* border: 2px solid; */
  /* 투명도 */
  /* opacity: 0.5 */
}
</style>
