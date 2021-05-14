<template>
  <div>
    <div id="container">
      <div class="col1">
        <slot name="col1"></slot>
      </div>
      <div class="col2">
        <slot></slot>
      </div>
      <div class="col3">
        <slot name="col3"></slot>
      </div>
      <div class="col4">
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

$enable-dev-colors: false ;

$container-big-col: 0.8;
$container-big-col-px: calc(#{$container-width} * #{$container-big-col});
$container-small-col-px: calc(#{$container-width} - #{$container-big-col-px});
$container-vert-col1-width: calc((100% - #{$container-width}) / 2);

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

.col1 {
  width: $container-vert-col1-width;
  border-right: $background-line-width solid $background-line-color;

  @if $enable-dev-colors {
    background-color: rgba(0, 255, 255, 0.18);
  }
}
.col2 {
  width: $container-big-col-px;
  border-right: $background-line-width solid $background-line-color;

  @if $enable-dev-colors {
    background-color: rgba(144, 219, 90, 0.18);
  }
}
.col3 {
  width: $container-small-col-px;
  border-right: $background-line-width solid $background-line-color;

  @if $enable-dev-colors {
    background-color: rgba(200, 0, 255, 0.18);
  }
}
.col4 {
  width: $container-vert-col1-width;

  @if $enable-dev-colors {
    background-color: rgba(247, 255, 0, 0.18);
  }
}

</style>