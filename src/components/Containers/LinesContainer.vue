<template>
  <div>
    <div id="container">
      <div class="col1 col1-md">
        <slot name="col1"></slot>
      </div>
      <div class="col2 col2-md">
        <slot></slot>
      </div>
      <div class="col3 col2-md">
        <slot name="col3"></slot>
      </div>
      <div class="col4 col2-md">
        <slot name="col4"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LinesContainer',
  props: ["full-height"]
}
</script>

<style scoped lang="scss">

@import "src/assets/variables";

$enable-dev-colors: false;

#container {
  height: inherit;
  width: inherit;
  display: flex;
  flex-direction: row;
  > div {
    flex-grow: 0;
    flex-shrink: 0;
    z-index: 50;
  }
}

</style>