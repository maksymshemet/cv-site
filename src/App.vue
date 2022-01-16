<template>
  <div id="app" >
    <LoadingScreen v-if="loadingScreen.enabled"></LoadingScreen>
    <router-view />
  </div>
</template>

<script>

import LoadingScreen from "@/components/LoadingScreen";

export default {
  name: 'App',
  components: {LoadingScreen},
  data: () => {
    return {
      loadingScreen: {
        enabled: true
      }
    }
  },
  provide() {
    return {
      loadingScreen: this.loadingScreen
    }
  }
  // data: () => {
  //   return {
  //     isLoaded: false
  //   }
  // },
  // mounted() {
  //   // alert(window.screen.width);
  //   document.onreadystatechange = () => {
  //     if(document.readyState == "complete") {
  //       this.isLoaded = true;
  //     }
  //   }
  // }
}
</script>

<style lang="scss">
//@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@600&family=Montserrat:wght@200;400;600;900&display=swap');

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
