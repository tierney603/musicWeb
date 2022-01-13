<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <HeaderNavBar></HeaderNavBar>
    <router-view />
    <BottomNavBar></BottomNavBar>
    <setUp></setUp>
    <BottomMusicPage></BottomMusicPage>
  </div>
</template>

<script>
import BottomMusicPage from "./components/BottomMusicPage.vue";
import HelloWorld from "./components/HelloWorld.vue";
import HeaderNavBar from "./components/HeaderNavBar.vue";
import BottomNavBar from "./components/BottomNavBar.vue";
import setUp from "./components/setUp.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    HeaderNavBar,
    BottomNavBar,
    setUp,
    BottomMusicPage,
  },
  methods: {},
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(240, 240, 240);
  width: 100%;
  overflow: hidden;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  height: 200vh;
}
* {
  margin: 0;
  padding: 0;
}
</style>
