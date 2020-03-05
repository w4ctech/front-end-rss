<template>
  <div id="app">
    <router-view/>
    <loading/>
  </div>
</template>

<script>
import loading from './components/loading'
export default {
  name: 'App',
  components: {loading}
}
</script>

<style>
html,body{
  background: #fff;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
