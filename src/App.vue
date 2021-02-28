<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
}

body {
  background-image: url("./assets/background.jpg");
  background-position: center; /* Center the image */
  background-repeat: repeat; /* Do not repeat the image */
  background-size: cover
}
</style>
