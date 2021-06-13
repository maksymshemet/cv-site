<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">

@import "src/assets/variables";
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;900&display=swap');


#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.05em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $text-color-dark;
  overflow-y: hidden;

 /* Firefox */
}
</style>
