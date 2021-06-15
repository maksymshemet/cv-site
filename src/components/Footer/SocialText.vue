<template>
  <div class="social-wrapper">
    <div class="social-text" v-on:click="openLink($event)">
      <div class="social-text">
        <a :href="url" target="_blank">{{ text }}</a>
      </div>
    </div>
    <div class="social-line disable-on-xs"><div></div></div>
  </div>
</template>

<script>
export default {
  name: "SocialText",
  props: ["text", "url"],
  methods: {
    openLink(e) {
      let a = e.currentTarget.getElementsByTagName("a")[0];
      a.click();
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/styles";
@import "src/assets/media-queries";

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
  }
  &:hover + .social-line > div {
    border-bottom: 1px solid $background-line-color;
  }
  &:hover {
    cursor: pointer;
    font-weight: 600;
  }
  &:hover > div > a {
    color: cornflowerblue;
  }
}

@include before-media-xs(){
  .social-text {
    &:hover > div > a {
      color: $text-color;
    }
  }
}

.social-line {
  align-self: center;
  width: 80%;
  > div {
    border-bottom: 0px solid rgba(255, 0, 0, 0.27);
  }
}

</style>