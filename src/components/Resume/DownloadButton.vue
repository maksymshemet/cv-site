<template>
  <b-row class="download-row">
    <b-col id="btn-col" align-self="end" offset-md="9" md="3" offset-sm="8" sm="4">
      <div>
        <a class="no-select btn-hover color-10" href="./cv.pdf" download="Maksym_Shemet_CV.pdf">Download CV</a>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "DownloadButtonRow"
}
</script>

<style scoped lang="scss">

@import "src/assets/variables";

#btn-col {
  margin-bottom: 75px;
}

.download-row {
  [class*="col-"] {
    > div {
      cursor: pointer;
      width: inherit;
      height: 40px;
      border-radius: 15px;
      color: $text-color;
      font-size: 16pt;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
}

.no-select {
  text-decoration: none;
  color: $text-color;
}

.btn-hover {
  width: 200px;
  height: 50px;
  line-height: 50px;
  text-align:center;
  border: none;
  background-size: 300% 100%;

  border-radius: 50px;
  moz-transition: all .4s ease-in-out;
  -o-transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
}

.btn-hover:hover {
  background-position: 100% 0;
  moz-transition: all .4s ease-in-out;
  -o-transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
}

.btn-hover:focus {
  outline: none;
}

.btn-hover.color-10 {
  background-image: linear-gradient(to right, #ed6ea0, #ec8c69, #f7186a , #FBB03B);
}

</style>