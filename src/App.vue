<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss">
body {
  margin: 0;
  background-color: #f9f9f9;
  text-align: center;
  position: relative;
  overflow: hidden;
}
html {
  -webkit-text-size-adjust: none;
  touch-action: manipulation;
}
#app {
  position: relative;
  background-color: red;
  // max-height: 100vh;
  // height: 100vh;
  // overflow-x: hidden;
  // max-width: 400px;
  margin: 0px auto;
}
</style>
