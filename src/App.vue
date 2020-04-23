<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <headBar></headBar>
    <router-view/>
    <foot></foot>
    <!-- 登录 -->
    <loginAlert></loginAlert>
  </div>
</template>

<script>
import headBar from '@/components/commom/headBar'
import foot from '@/components/commom/foot'
import loginAlert from '@/components/commom/login'
export default {
  name: 'App',
  components: {
    headBar, foot, loginAlert
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}
</style>
