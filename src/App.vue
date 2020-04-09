<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <headBar></headBar>
    <router-view/>
    <foot></foot>
  </div>
</template>

<script>
import headBar from './components/commom/headBar'
import foot from './components/commom/foot'
export default {
  name: 'App',
  components: {
    headBar, foot
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
}
</style>
