<template>
  <div id="container">
    <Tag v-for="(tag, i) in tags" :key="i">{{ tag }}</Tag>
  </div>
</template>

<script>

import Tag from "/src/components/Resume/Tag"

export default {
  name: "TagContainer",
  props: ["tags"],
  components: { Tag }
}
</script>

<style scoped lang="scss">
@import "src/assets/media-queries";

#container {
  width: 100%;
  display: flex;
  flex-flow: wrap;
  > * {
    margin-top: 15px;
    margin-right: 15px;
    height: fit-content;
  }
}

@include before-media-xs(){
  #container {
    > * {
      margin-right: 10px;
    }
  }
}
</style>