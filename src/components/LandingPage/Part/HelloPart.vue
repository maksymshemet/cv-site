<template>
  <div id="root" class="white-text">

    <header>
      <a href="#" class="white-text"></a>
    </header>

    <LinesContainer id="ln">
      <template v-slot:col1>
        <div class="horizontal-line"></div>
      </template>
      <template v-slot:default>
        <div class="greetings header-padding">
          Hello there! I'm Max,
          <p>software engineer</p>
        </div>
      </template>
      <template v-slot:col3>
        <div id="scroll">
          scroll down
        </div>
      </template>
      <template v-slot:col4>
          <div id="landing-contact-me" class="header-padding">
            contact me
          </div>
      </template>
    </LinesContainer>
  </div>
</template>

<script>
import LinesContainer from "/src/components/LandingPage/LinesContainer"

export default {
  name: "HelloPart",
  components: {LinesContainer}
}
</script>

<style scoped lang="scss">

@import "src/assets/variables";
@import "src/assets/styles";

$text-margin-right: 30px;
$content-height: calc(100vh - #{$header-height});
$top-margin-content: calc(#{$content-height} - 300px);

#root {
  z-index: 50;
  height: 100vh;
}
header {
  z-index: 50;
  width: 100%;
  height: $header-height;
  position: absolute;
  top: 0;
}
.header-padding {
  padding-top: $header-height;
}
#ln {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  .horizontal-line {
    width: inherit;
    position: absolute;
    bottom: $top-margin-content;
    border-bottom: $background-line-width solid $background-line-color;
  }

  .greetings {
    position: absolute;
    bottom: $top-margin-content;
    font-weight: 600;
    font-size: 6vh;
    font-variant-ligatures: common-ligatures;
    text-align: start;
    padding-left: 50px;

    p {
      margin-bottom: -10px;
    }
  }

  #landing-contact-me {
    position: absolute;
    bottom: $top-margin-content;
    margin-bottom: 40px;
    font-weight: 400;
    font-size: 12pt;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    width: fit-content;
  }

  #scroll {
    position: absolute;
    bottom: 0;
    height: fit-content;
    width: inherit;
    margin-bottom: 15px;
  }
}
</style>