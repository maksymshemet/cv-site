<template>
  <footer>
    <div class="vertical-line vertical-l1"></div>
    <div class="vertical-line vertical-l2">
      <div id="social" class="white-text">
        <div class="social-wrapper">
          <div class="social-text">github</div>
          <div class="social-line"><div></div></div>
        </div>
        <div class="social-wrapper">
          <div class="social-text">skype</div>
          <div class="social-line"><div></div></div>
        </div>
        <div class="social-wrapper">
          <div class="social-text">linkedin</div>
          <div class="social-line"><div></div></div>
        </div>
        <div class="social-wrapper">
          <div class="social-text">skype</div>
          <div class="social-line"><div></div></div>
        </div>
      </div>
    </div>
    <div class="vertical-line vertical-l3"></div>
  </footer>
</template>

<script>
export default {
  name: "FooterPart"
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
  }
  .social-text {
    text-align: start;
    width: 20%;
    &:hover + .social-line>div {
      border-bottom: 1px solid $background-line-color;
    }
  }
  .social-line {
    align-self: center;
    width: 80%;
    > div {
      border-bottom: 0px solid rgba(255, 0, 0, 0.27);
    }
  }
}
</style>