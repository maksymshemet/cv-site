<template>
  <footer>
    <div class="vertical-line col1"></div>
    <div class="vertical-line col2">
      <div id="social" class="white-text">
        <div class="social-wrapper">
          <div class="social-text">
            <div class="social-text">
              <a :href="social.email" target="_blank">email</a>
            </div>
          </div>
          <div class="social-line"><div></div></div>
        </div>
        <div class="social-wrapper">
          <div class="social-text">
            <div class="social-text">
              <a :href="social.github" target="_blank">github</a>
            </div>
          </div>
          <div class="social-line"><div></div></div>
        </div>
        <div class="social-wrapper">
          <div class="social-text">
            <a :href="social.linkedin" target="_blank">linkedin</a>
          </div>
          <div class="social-line"><div></div></div>
        </div>
        <div class="social-wrapper">
          <div class="social-text">
            <div class="social-text">
              <a :href="social.skype" target="_blank">skype</a>
            </div>
          </div>
          <div class="social-line"><div></div></div>
        </div>
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

export default {
  name: "FooterPart",
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

<style scoped lang="scss">

@import "src/assets/styles";

footer {
  background-color: #000000e6;
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
  .social-wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .social-text {
    text-align: start;
    width: 20%;
    a {
      text-decoration: none;
      color: $text-color;

      &:hover{
        color: cornflowerblue;
      }
    }
    &:hover + .social-line>div {
      border-bottom: 1px solid $background-line-color;
    }
    &:hover {
      cursor: pointer;
      font-weight: 600;
    }
  }
  .social-line {
    align-self: center;
    width: 80%;
    > div {
      border-bottom: 0px solid rgba(255, 0, 0, 0.27);
    }
  }
  #scroll {
    cursor: pointer;
    height: fit-content;
    width: 100%;
    margin-top: 15px;
  }
}

@media (max-width: 767.98px){
  footer {
    .social-line {
      width: 70%;
    }
  }
}
</style>