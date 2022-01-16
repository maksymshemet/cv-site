<template>
  <b-row>
    <b-col>
      <Title :text="title"></Title>
      <slot></slot>
    </b-col>
  </b-row>
</template>

<script>

import Title from "/src/components/Resume/Title"

export default {
  name: "TitledRow",
  props: ['title'],
  components: {Title}
}
</script>

<style>
</style>