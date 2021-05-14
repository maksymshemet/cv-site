<template>
  <div id="prisma">
    <!--    <div class="text">Header: {{t}}</div>-->
    <canvas id="webgl-canvas"></canvas>
  </div>
</template>

<script>

import {Stage, Mesh} from './wave-logic';

export default {
  name: "Wave",
  static() {
    return {
      stage: null,
      mesh: null,
    }
  },
  methods: {
    raf: function () {
      window.requestAnimationFrame(() => {
        this.stage.onRaf();
        this.mesh.onRaf();
        this.raf()
      });
    },
    init: function () {
      const canvas = document.getElementById("webgl-canvas")

      let stage = new Stage(canvas);
      stage.init();

      let mesh = new Mesh(stage);
      mesh.init();

      this.stage = stage;
      this.mesh = mesh;

      window.addEventListener("resize", () => {
        this.stage.onResize();
        this.mesh.onResize();
      });
    }
  },
  mounted() {
    this.init();
    this.raf();
  }
}
</script>

<style scoped lang="scss">
  @import "wave-style";
</style>
