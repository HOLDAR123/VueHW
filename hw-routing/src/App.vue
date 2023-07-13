<template>
<div> 
  <router-link to="/user/0">user 0</router-link><br>
  <router-link to="/user/1">user 1</router-link><br>
  <router-link to="/user/2">user 2</router-link><br>
  <router-view data="данные"></router-view>
</div>
</template>

<script>


export default {
  name: 'App',
  components: {
  },
  data(){
    return{}
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
