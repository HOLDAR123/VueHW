<template>
 <div class="main__text">My Shop</div>
 <VueShop></VueShop>
</template>

<script>
import VueShop from "./components/Shop"



export default {
  name: 'App',
  components: {
    VueShop
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
.main__text{
  font-size: 50px;
}
</style>
