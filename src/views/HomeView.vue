<template>
  <div>
    <DevTitle style="display: none"/>
    <Hello />
<!--    <Wave />-->
    <Resume />
    <Footer />
  </div>
</template>

<script>
// import Wave from "/src/components/Hello/Wave/Wave";
import Hello from "/src/components/Hello2/Hello";
import Resume from "/src/components/Resume/Resume";
import Footer from "/src/components/Footer2/Footer";
import DevTitle from "/src/components/DevTitle";

export default {
  name: "HomeView",
  components: { Hello, Resume, Footer, DevTitle }
}
</script>

<style scoped lang="scss">
@import "src/assets/media-queries";

</style>