<template>
  <div id="title">
    <div class="no-select">{{text}}</div>
    <div class="line"/>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: ["text"]
}
</script>

<style scoped lang="scss">

#title {
  font-weight: 900;
  font-size: 28pt;
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  > div {
    align-self: end;
  }
  .line {
    border-bottom: 1px solid black;
    margin-left: 50px;
    width: 100%;
    align-self: center;
  }
}
</style>