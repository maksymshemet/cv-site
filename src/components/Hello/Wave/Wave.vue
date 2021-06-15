<template>
  <div id="wave" >
    <canvas id="webgl-canvas" class="disable-on-xs"></canvas>
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

      this.currentWidth = stage.width;
      this.currentOrientation = screen.orientation.type;

      window.addEventListener("resize", () => {
        // alert(`resize: ${this.currentWidth} - ${this.stage.width}, ${this.currentHeight} - ${this.stage.height}`)
        if (this.currentWidth != this.stage.width) {
          this.stage.onResize();
          this.mesh.onResize();
          this.currentWidth = stage.width
        }
      });

      window.addEventListener("orientationchange", () => {
        // alert(`${this.currentOrientation} - ${screen.orientation.type}`);
        if (this.currentOrientation != screen.orientation.type) {
          this.stage.onResize();
          this.mesh.onResize();
          this.currentOrientation = screen.orientation.type;
        }
      }, false);
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
