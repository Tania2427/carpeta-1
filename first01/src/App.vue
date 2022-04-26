<template>
  <img alt="Vue logo" src="./assets/01.jpg">
  <HelloWorld msg="Bienvenidos a mi casa encantada"/>
  <NewComponents msg="Bienvenidos "/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NewComponents from './components/NewComponents.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
