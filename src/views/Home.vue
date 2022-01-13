<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <h1>Home</h1>
    <i class="v-icon-find"></i>
    <v-icon name="find"></v-icon>
    <v-icon></v-icon>
    <span
      class="iconfont icon-find"
      style="font-size: 40px; color: #f1111"
    ></span>
    <span class="iconfont">&#xe615;</span>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
<style scoped>
</style>
