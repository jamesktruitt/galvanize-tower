<template>
  <div id="app">
    <div id='nav'>
      <router-link to='/'>Home</router-link>
      <router-link to='/about'>About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import SignIn from '@/views/SignIn.vue'

export default {
  name: 'App',
  components: {
    SignIn
  }
}
</script>

<style lang='scss'>
@import '~@/styles/_resets';
#app {
  font-family: 'Avenir', Helvetica, Ariel;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding-top: 20px;
  display: flex;
  justify-content: center;
  a {
    font-weight: bold;
    padding: 0 0.5rem;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #1A7798;
    }
  }
}
</style>