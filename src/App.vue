<template>
  <div id="app" >
    <router-view v-if="isLoaded"/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: () => {
    return {
      isLoaded: false
    }
  },
  mounted() {
    // alert(window.screen.width);
    document.onreadystatechange = () => {
      if(document.readyState == "complete") {
        this.isLoaded = true;
      }
    }
  }
}
</script>

<style lang="scss">

@import "src/assets/variables";
//@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;600;900&display=swap');
//@import url('https://fonts.googleapis.com/css2?family=Exo+2&family=Oswald:wght@600&display=swap');


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
