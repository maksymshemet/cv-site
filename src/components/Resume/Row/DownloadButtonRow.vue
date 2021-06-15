<template>
  <b-row class="download-row">
    <b-col align-self="end" offset-md="10" md="2"  offset-sm="8" sm="4">
      <div>
        <span class="no-select">Download</span>
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
  [class*="col-"] {
    > div {
      cursor: pointer;
      width: inherit;
      height: 40px;
      border-radius: 15px;
      color: whitesmoke;
      background-color: #e30505;
      font-size: 16pt;
      display: flex;
      justify-content: center;
      align-items: center;
      &:active {
        background-color: #b30202;
      }
    }
  }
}
</style>