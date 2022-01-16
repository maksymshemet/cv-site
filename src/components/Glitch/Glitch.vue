<template>
  <span id="glitch-root" class="glitch" :data-text="text" v-on:click="openLink">
    <a v-if="url" id="glitch-a"  :href="url" target="_blank">{{ text }}</a>
    <span v-else id="glitch-span" >{{ text }}</span>
  </span>
</template>

<script>

export default {
  name: "Glitch",
  props: {
    "text": String,
    "url": {
      type: String,
      default: undefined
    }
  },
  methods: {
    openLink(e) {
      if(this.url) {
        let a = e.currentTarget.getElementsByTagName("a")[0];
        a.click();
      }
    }
  }
}
</script>

<style lang="scss" scoped>

@import "glitch";

a {
  color: $text-color;
  text-decoration: none;
  &:hover {
    color: $text-color;
    text-decoration: none;
  }
}
</style>