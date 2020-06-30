<template>
  <div id="app">
    <Nav-Header />
    <router-view></router-view>
  </div>
</template>

<script>
import NavHeader from './components/NavHeader'
export default {
  name: 'App',
  components: {
    NavHeader
  },
  data() {
    return {

    }
  },
  async created(){
    try {
      await this.$cloudbase
        .auth({ persistence: "local" })
        .anonymousAuthProvider()
        .signIn();
      this.isLoginSuccss = true;
      
    } catch (e) {
      if (e.message.includes("100007")) {
        this.isLoginSuccss = false;
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body,html{
  margin: 0;
  padding: 0;
  background: #01a9b4;
}
</style>
