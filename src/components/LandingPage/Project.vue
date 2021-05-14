<template>
  <b-container fluid="xl" id="root">
    <b-row>
      <b-col class="p-0">
        <div class="title">{{ project.company.name }}</div>
        <div class="title">{{ project.position }}</div>
      </b-col>
    </b-row>
    <b-row class="top-space">
      <b-col id="summary" cols="6 pl-0">
        {{project.description}}
      </b-col>
      <b-col id="action-list" cols="6 pr-0">
        <ul>
          <li v-for="(action, i) in project.actions" :key="i">{{ action }}</li>
        </ul>
      </b-col>
    </b-row>
    <b-row class="no-top-space">
      <b-col id="project-tags" class="pl-0">
        <TagContainer :tags="project.tags"></TagContainer>
      </b-col>
    </b-row>
    <b-row>
      <b-col id="project-time" cols="9">
        <div class="date-line"></div>
      </b-col>
      <b-col cols="3" class="date">{{ project.startDate }} - {{ project.endDate }}</b-col>
    </b-row>
  </b-container>
</template>

<script>
import TagContainer from "/src/components/LandingPage/Tag/TagContainer";

export default {
  name: "Project",
  props: ["project"],
  components: { TagContainer }
}
</script>

<style scoped lang="scss">
$date-color: #bebebe;

#project-time {
  display: flex;
  align-items: center;
  padding: 0;

  .date-line {
    border-bottom: 1px solid $date-color;
    width: 98%;
  }
}
.date {
  color: $date-color;
  text-align: end;
}

#root {
  text-align: start;

  .title {
    font-weight: 900;
    font-size: 16pt;
  }
  .row:not(.no-top-space) {
    margin-top: 30px;
  }
}
#project-tags {
  padding-top: 50px;
}
#action-list {
  padding-left: 100px;
  ul {
    list-style: disc;
  }
}
.pl-0 {
  padding-left: 0px;
}
.pr-0 {
  padding-right: 0px;
}
.top-space {
  margin-top: 15px;
}
</style>