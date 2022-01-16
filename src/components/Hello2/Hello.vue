<template>
  <div id="root">
    <div id="noise2"></div>
    <div id="noise"></div>

    <b-container id="main-container" fluid="sm" class="row-padding">
        <div id="text-wrapper">
          <div id="name" class="glitch" data-text="maksym shemet">maksym shemet</div>
          <div id="profession" class="glitch" data-text="software engineer">software engineer</div>
        </div>
      <section id="section10" class="demo">
        <div id="s1">
          <span></span>
        </div>
      </section>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Hello"
}
</script>

<style scoped lang="scss">
//@import url('https://fonts.googleapis.com/css2?family=Exo+2&family=Oswald:wght@600&display=swap');
//@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,200&display=swap');

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
  background-color: #141415;
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

.glitch {
  position: relative;
  color: white;
  mix-blend-mode: lighten;

  &:before,
  &:after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    width: 100%;
    background: black;
    clip: rect(0, 0, 0, 0);
  }

  &:before {
    left: -1px;
    text-shadow: 1px 0 rgba(red,0.7);
  }

  &:after {
    left: 1px;
    text-shadow: -1px 0 rgba(blue,0.7);
  }

  &:hover {
    &:before {
      text-shadow: 4px 0 rgba(red,0.7);
      animation: glitch-loop-1 1.8s infinite ease-in-out alternate-reverse;
    }
    &:after {
      text-shadow: -5px 0 rgba(blue,0.7);
      animation: glitch-loop-2 1.8s infinite ease-in-out alternate-reverse;
    }
  }
}

@keyframes glitch-loop-1 {
  $steps: 20;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      clip: rect(random(150)+px, 9999px, random(150)+px, 0px)
    }
  }
}

@keyframes glitch-loop-2 {
  $steps: 20;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      clip: rect(random(150)+px, 9999px, random(150)+px, 0px)
    }
  }
}

#root {
  //position: fixed;
  height: 100vh;
  width: 100%;
}

#text-wrapper {
  //background-color: red;
  position: relative;
  width: 100%;
  //height: calc(#{$name-block-height} + #{$surname-block-height});
  //transform: translateY(-15px);
}

#name {
  font-family: 'Exo 2', sans-serif;
  font-size: 90pt;
  font-weight: 600;
  text-transform: uppercase;
  color: whitesmoke;
  width: fit-content;
  cursor: default;
  margin: auto;
}

#profession {
  font-family: 'Montserrat', sans-serif;
  font-weight: 200;
  font-size: 25pt;
  text-transform: lowercase;
  color: whitesmoke;
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
}

#s1 span {
  position: absolute;
  top: calc(100vh - 70px);
  left: 50%;
  width: 30px;
  height: 50px;
  margin-left: -15px;
  //border: 2px solid whitesmoke;
  //border-radius: 50px;
  //box-sizing: border-box;
}
#s1 span::before {
  position: absolute;
  top: 10px;
  left: 50%;
  content: '';
  width: 9px;
  height: 9px;
  margin-left: -3px;
  background-color: whitesmoke;
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