<template>
<div>
  <Navigation/>
  <router-view/>
</div>
</template>
<script>
import Navigation from "../src/components/Navigation.vue";
export default {
  name:"App",
  components: {
    Navigation,
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  height: 100vh;
  width: 100%;
  font-family: sans-serif;
  position: relative;
}
</style>
