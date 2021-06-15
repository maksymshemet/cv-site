<template>
  <div>
    <DevTitle />
    <HelloPage />
    <Wave />
    <ResumePage />
    <FooterPage />
  </div>
</template>

<script>
import Wave from "/src/components/Hello/Wave/Wave";
import HelloPage from "/src/components/Hello/HelloPage";
import ResumePage from "/src/components/Resume/ResumePage";
import FooterPage from "/src/components/Footer/FooterPage";
import DevTitle from "/src/components/DevTitle";

export default {
  name: "HomeView",
  components: { Wave, HelloPage, ResumePage, FooterPage, DevTitle }
}
</script>

<style scoped lang="scss">
@import "src/assets/media-queries";

</style>