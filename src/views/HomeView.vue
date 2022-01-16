<template>
  <div>
    <DevTitle style="display: none"/>
    <Hello />
    <Resume />
    <Footer />
  </div>
</template>

<script>
import Vue from 'vue'

import Hello from "/src/components/Hello";
import Resume from "/src/components/Resume/Resume";
import Footer from "/src/components/Footer";
import DevTitle from "/src/components/DevTitle";
import { LayoutPlugin  } from 'bootstrap-vue'

export default {
  name: "HomeView",
  components: { Hello, Resume, Footer, DevTitle },
  inject: ["loadingScreen"],
  created() {
    Vue.use(LayoutPlugin )
  },
  mounted() {
    // alert(window.screen.width);
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        console.log(this.loadingScreen.enabled)
        this.loadingScreen.enabled = false;
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/media-queries";

</style>