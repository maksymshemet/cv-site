<template>
  <div id="root">
    <b-container id="main-container" fluid="sm" class="row-padding">
      <div id="back-to-top" class="thin-text no-select" v-on:click="scrollTop">back to top</div>
      <div id="social-links">
        <Glitch class="no-select" text="email" :url="social.email"/>
        <Glitch class="no-select" text="github" :url="social.github"/>
        <Glitch class="no-select" text="skype" :url="social.skype"/>
        <Glitch class="no-select" text="linkedin" :url="social.linkedin"/>
      </div>
      <div id="madewithlove" class="thin-text no-select">madewithlove2021</div>
    </b-container>
  </div>
</template>

<script>

import Glitch from "/src/components/Glitch/Glitch"
import { social } from "/src/data";

export default {
  name: "Footer",
  components: { Glitch },
  data() {
    return {
      social: social,
    }
  },
  methods: {
    scrollTop() {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style lang="scss" scoped>

@import "src/assets/variables";
@import "src/assets/media-queries";

#back-to-top {
  cursor: pointer;
}

#madewithlove {
  margin-top: 25px;
  margin-bottom: 10px;
}
#root {
  padding-top: 25px;
  color: rgba(245, 245, 245, 0);
  position: relative;
  color: $text-color;
}

span:hover {
  transition: transform 250ms;
  transform: translateY(-3px);
  cursor: pointer;
}
.thin-text {
  text-align: end;
  font-family: 'Montserrat', sans-serif;
  font-weight: 200;
}
#social-links {
  margin-top: 35px;
  text-shadow: none;
  font-family: 'Exo 2', sans-serif;
  font-size: 80pt;
  font-weight: 600;
  text-transform: uppercase;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  column-gap: 15px;
}

@include before-media-sm() {
  #social-links {
    font-size: 50pt;
    justify-content: flex-start;
    column-gap: 35px;
  }
}

@include before-media-xs() {
  #social-links {
    font-size: 30pt;
  }
}

</style>