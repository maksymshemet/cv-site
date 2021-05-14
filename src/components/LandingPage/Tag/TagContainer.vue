<template>
  <div id="container">
    <Tag v-for="(tag, i) in tags" :key="i">{{ tag }}</Tag>
  </div>
</template>

<script>

import Tag from "/src/components/LandingPage/Tag/Tag"

export default {
  name: "TagContainer",
  props: ["tags"],
  components: { Tag }
}
</script>

<style scoped lang="scss">

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
</style>