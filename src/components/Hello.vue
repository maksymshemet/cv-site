<template>
  <div id="root">
    <div id="noise2"></div>
    <div id="noise"></div>

    <b-container id="main-container" fluid="sm" class="row-padding">
        <div id="text-wrapper">
          <Glitch id="name" class="no-select" text="maksym shemet">maksym shemet</Glitch>
          <Glitch id="profession" class="no-select" text="software engineer">software engineer</Glitch>
        </div>
      <section id="section10" class="demo">
        <div id="s1" v-on:click="scrollBottom">
          <span></span>
        </div>
      </section>
    </b-container>
  </div>
</template>

<script>
import Glitch from "/src/components/Glitch/Glitch"

export default {
  name: "Hello",
  components: {Glitch},
  methods: {
    scrollBottom() {
      window.scrollTo(0,document.body.scrollHeight);
    }
  }
}
</script>

<style scoped lang="scss">

@import "src/assets/variables";

$noise-image: url("/noise-transparent.png");
$name-block-height: 272px;
$surname-block-height: 308px;

#main-container {
  height: 100%;
  padding: 0;
  display: flex;
  align-items: center;
}
#noise2 {
  position: fixed;
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  background-color: $background-dark-color;
}
#noise {
  z-index: 0;
  position: fixed;
  top: -50%;
  left: -50%;
  right: -50%;
  bottom: -50%;
  padding: 0;
  margin: 0;
  width: 200vw;
  height: 200vh;
  opacity: 0.8;
  background-image: $noise-image;
  background-repeat: repeat;
  background-position: center center;
  animation: bg-animation .2s infinite;
}

#root {
  height: 100vh;
  width: 100%;
}

#text-wrapper {
  position: relative;
  width: 100%;
}

#name {
  display: block;
  font-family: 'Exo 2', sans-serif;
  font-size: 90pt;
  font-weight: 600;
  text-transform: uppercase;
  color: $text-color;
  width: fit-content;
  cursor: default;
  margin: auto;
}

#profession {
  display: block;
  font-family: 'Montserrat', sans-serif;
  font-weight: 200;
  font-size: 25pt;
  text-transform: lowercase;
  color: $text-color;
  width: fit-content;
  cursor: default;
  margin: auto;
}

@keyframes bg-animation {
  0% { transform: translate(0,0) }
  10% { transform: translate(-5%,-5%) }
  20% { transform: translate(-10%,5%) }
  30% { transform: translate(5%,-10%) }
  40% { transform: translate(-5%,15%) }
  50% { transform: translate(-10%,5%) }
  60% { transform: translate(15%,0) }
  70% { transform: translate(0,10%) }
  80% { transform: translate(-15%,0) }
  90% { transform: translate(10%,5%) }
  100% { transform: translate(5%,0) }
}

#s1 {
  padding-top: 60px;
  cursor: pointer;
}

#s1 span {
  position: absolute;
  top: calc(100vh - 70px);
  left: 50%;
  width: 30px;
  height: 50px;
  margin-left: -15px;
}
#s1 span::before {
  position: absolute;
  top: 10px;
  left: 50%;
  content: '';
  width: 9px;
  height: 9px;
  margin-left: -3px;
  background-color: $text-color;
  border-radius: 100%;
  -webkit-animation: sdb10 2s infinite;
  animation: sdb10 2s infinite;
  box-sizing: border-box;
}

@-webkit-keyframes sdb10 {
  0% {
    -webkit-transform: translate(0, 0);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    -webkit-transform: translate(0, 20px);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes sdb10 {
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    transform: translate(0, 20px);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

</style>