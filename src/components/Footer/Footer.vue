<template>
  <footer>
    <div class="vertical-line col1"></div>
    <div class="vertical-line col2">
      <div id="social" class="white-text">
        <SocialText :url="social.email" :text="'email'" />
        <SocialText :url="social.github" :text="'github'" />
        <SocialText :url="social.linkedin" :text="'linkedin'" />
        <SocialText :url="social.skype" :text="'skype'" />
      </div>
    </div>
    <div class="vertical-line col3">
      <div id="scroll" class="white-text no-select"  v-on:click="scrollTop">
        scroll up
      </div>
    </div>
  </footer>
</template>

<script>
import { social } from "/src/data";
import SocialText from "/src/components/Footer/SocialText"


export default {
  name: "Footer",
  components: {SocialText},
  data() {
    return {
      social: social,
    }
  },
  methods: {
    scrollTop() {
      window.scrollTo(0, 0)
    },
    openLink(e) {
      let a = e.currentTarget.getElementsByTagName("a")[0];
      a.click();
    }
  }
}
</script>

<style scoped lang="scss">

@import "src/assets/styles";
@import "src/assets/variables";

footer {
  background-color: $background-dark-color;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: row;
  .vertical-line {
    height: inherit;
  }
  #social {
    width: 100%;
    height: inherit;
    display: flex;
    flex-direction: column;
    padding-left: 15px;
    align-items: baseline;
    font-size: 18pt;
    justify-content: center;
  }
  #scroll {
    cursor: pointer;
    height: fit-content;
    width: 100%;
    margin-top: 15px;
  }
}

@include before-media-md() {
  footer {
    .social-line {
      width: 70%;
    }
    #social {
      padding-left: 30px;
    }
    #scroll {
      text-align: right;
      padding-right: 30px;
      white-space: nowrap;
      position: absolute;
      right: 10px;
    }
  }
}

@include before-media-xs(){
  footer {
    .social-line {
      width: 70%;
    }
    #social {
      position: absolute;
      left: 30px;
      padding-left: 0px;
    }
    #scroll {
      text-align: right;
      padding-right: 0px;
      white-space: nowrap;
      right: 30px;
      position: absolute;
    }
  }
}
</style>