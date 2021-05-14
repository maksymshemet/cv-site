<template>
  <b-row class="download-row">
    <b-col align-self="end" offset="10" cols="2">
      <div>
        <span>Download</span>
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
.download-row {
  margin-bottom: 75px;
  //display: flex;
  [class*="col-"] {
    > div {
      width: inherit;
      height: 40px;
      border-radius: 15px;
      color: whitesmoke;
      background-color: #e30505;
      font-size: 16pt;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>