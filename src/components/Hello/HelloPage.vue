<template>
  <div id="root" class="white-text">
    <header>
      <a href="#" class="white-text"></a>
    </header>

    <LinesContainer id="ln">
      <template v-slot:col1>
        <div class="horizontal-line disable-on-xs"></div>
      </template>
      <template v-slot:default>
        <div class="greetings header-padding no-select">
          Hello there!  <br /> I'm Max,
          <p>software engineer</p>
        </div>
      </template>
      <template v-slot:col3>
        <div id="scroll" v-on:click="scrollBottom" class="no-select">
          scroll down
        </div>
      </template>
      <template v-slot:col4>
          <div id="landing-contact-me" class="header-padding no-select disable-on-xs" v-on:click="sendEmail">
            contact me
          </div>
      </template>
    </LinesContainer>
  </div>
</template>

<script>
import LinesContainer from "/src/components/Containers/LinesContainer"
import { social } from "/src/data"

export default {
  name: "HelloPage",
  components: {LinesContainer},
  methods: {
    scrollBottom() {
      window.scrollTo(0,document.body.scrollHeight);
    },
    sendEmail() {
      window.open(social.email, "_blank");
    }
  }
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
    br {
      display: none;
    }
    p {
      margin-bottom: -10px;
    }
  }

  #landing-contact-me {
    cursor: pointer;
    position: absolute;
    bottom: $top-margin-content;
    margin-bottom: 40px;
    font-weight: 400;
    font-size: 12pt;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    width: auto;
  }

  #scroll {
    cursor: pointer;
    position: absolute;
    bottom: 0;
    height: fit-content;
    width: inherit;
    margin-bottom: 15px;
  }
}

@include before-media-sm() {
  #ln {
    .greetings {
      font-size: 5vh;
      padding-left: 10px;
      br {
        display: block;
      }
    }
  }
}
</style>