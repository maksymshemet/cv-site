<template>
  <div id="root">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tag"
}
</script>

<style scoped lang="scss">

#root {
  border-radius: 15px;
  background-color: #f4f4f4;
  width: fit-content;
  padding: 0 15px;
  border: 1px solid whitesmoke;

  &:hover {
    border: 1px solid black;
  }
}
</style>