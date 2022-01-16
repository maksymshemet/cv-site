<template>
  <div id="root">
    <b-container id="main-container" fluid="sm" class="row-padding">
      <div class="thin-text">back to top</div>
      <div id="social-links">
        <span class="glitch" data-text="email">email</span>
        <span class="glitch" data-text="github">github</span>
        <span class="glitch" data-text="skype">skype</span>
        <span class="glitch" data-text="linkedin">linkedin</span>
      </div>
      <div id="madewithlove" class="thin-text">madewithlove2021</div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss" scoped>

#madewithlove {
  margin-top: 25px;
  margin-bottom: 10px;
}
#root {
  padding-top: 25px;
  color: rgba(245, 245, 245, 0);
  position: relative;
  color: whitesmoke;
}
span:hover {
  transition:  transform 250ms;
  transform: translateY(-3px);
  cursor: pointer;
}
.thin-text {
  text-align: end;
  font-family: 'Montserrat', sans-serif;
  font-weight: 200;
}
#social-links {
  margin-top: 35px;
  text-shadow: none;
  font-family: 'Exo 2', sans-serif;
  font-size: 80pt;
  font-weight: 600;
  text-transform: uppercase;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  column-gap: 15px;
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
      animation: glitch-loop-1 3.8s infinite ease-in-out alternate-reverse;
    }
    &:after {
      text-shadow: -5px 0 rgba(blue,0.7);
      animation: glitch-loop-2 3.8s infinite ease-in-out alternate-reverse;
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

</style>