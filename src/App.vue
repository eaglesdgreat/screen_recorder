<template>
  <LayOut>
    <router-view :key="$route.path"></router-view>
  </LayOut>
</template>

<script>
import LayOut from "./components/LayOut.vue";

export default {
  name: "App",
  components: {
    LayOut,
  },
};
</script>

<style>
@import "~bootstrap-vue/dist/bootstrap-vue.css";
@import "~bootstrap/dist/css/bootstrap.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
