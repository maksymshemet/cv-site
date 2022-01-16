<template>
  <b-container fluid="xl" id="root">
    <b-row>
      <b-col class="p-0">
        <div class="title">
          <a :href="project.company.url" target="_blank">{{ project.company.name }}</a> </div>
        <div class="title">{{ project.position }}</div>
      </b-col>
    </b-row>
    <b-row class="top-space">
      <b-col id="summary" md="6 pl-0"  sm="12 pl-0">
        {{project.description}}
      </b-col>
      <b-col id="action-list" md="6 pr-0" sm="12">
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
      <b-col id="project-time" md="8" sm="7" cols="3">
        <div class="date-line"></div>
      </b-col>
      <b-col md="4" sm="5" cols="9" class="date">{{ project.startDate }} - {{ project.endDate }}</b-col>
    </b-row>
  </b-container>
</template>

<script>
import TagContainer from "/src/components/Resume/Container/TagContainer";

export default {
  name: "Project",
  props: ["project"],
  components: { TagContainer }
}
</script>

<style scoped lang="scss">
@import "src/assets/variables";
@import "src/assets/media-queries";

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
    > a {
      width: fit-content;
      color: $text-color-dark;
      text-decoration: none;
      display: block;
      transition: transform 250ms;
      &:hover {
        transform: translateY(-2px);
      }
    }
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
@include before-media-md() {
  #action-list {
    margin-top: 20px;
    padding-left: 0;
    ul {
      padding-left: 19px;
    }
  }

  #project-tags {
    padding-top: 0px;
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