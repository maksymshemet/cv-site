<template>
  <div>
    <HelloPart />
    <Wave id="wave" />
    <ResumePart />
    <FooterPart />
<!--    <footer>-->
<!--      <div class="vertical-line vertical-l1"></div>-->
<!--      <div class="vertical-line vertical-l2">-->
<!--        <div id="social" class="white-text">-->
<!--          <div class="social-wrapper">-->
<!--            <div class="social-text">github</div>-->
<!--            <div class="social-line"><div></div></div>-->
<!--          </div>-->
<!--          <div class="social-wrapper">-->
<!--            <div class="social-text">skype</div>-->
<!--            <div class="social-line"><div></div></div>-->
<!--          </div>-->
<!--          <div class="social-wrapper">-->
<!--            <div class="social-text">linkedin</div>-->
<!--            <div class="social-line"><div></div></div>-->
<!--          </div>-->
<!--          <div class="social-wrapper">-->
<!--            <div class="social-text">skype</div>-->
<!--            <div class="social-line"><div></div></div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="vertical-line vertical-l3"></div>-->
<!--    </footer>-->
  </div>
</template>

<script>
import Wave from "/src/components/LandingPage/Wave/Wave";
import HelloPart from "/src/components/LandingPage/Part/HelloPart";
import ResumePart from "/src/components/LandingPage/Part/ResumePart";
import FooterPart from "/src/components/LandingPage/Part/FooterPart";

export default {
  name: "HomeView",
  components: { Wave, HelloPart, ResumePart, FooterPart }
}
</script>

<style scoped lang="scss">


#wave {
  position: absolute;
  top: 0;
}

</style>