<template>
  <b-container id="main-container" fluid="sm" class="row-padding">
    <TitledRow id="about-text" title="About">
      {{about}}
    </TitledRow>
    <TitledRow title="Skills">
      <TagContainer :tags="skills" />
    </TitledRow>
    <TitledRow title="Experience">
      <Project  v-for="(project, i) in projects" :key="i"
                :project="project"
                :class="{ 'top-space-project' : i != 0}"
      />
    </TitledRow>
    <DownloadButtonRow />
  </b-container>
</template>

<script>
import TitledRow from "/src/components/LandingPage/Row/TitledRow";
import DownloadButtonRow from "/src/components/LandingPage/Row/DownloadButtonRow";
import TagContainer from "/src/components/LandingPage/Tag/TagContainer";
import Project from "/src/components/LandingPage/Project";

import { projects, skills, about } from "/src/data";
export default {
  name: "ResumePart",
  components: {TitledRow, DownloadButtonRow, TagContainer, Project},
  data() {
    return {
      projects: projects,
      skills: skills,
      about: about,
    }
  },
}
</script>

<style scoped lang="scss">
#main-container {
  > * {
    margin-top: 100px;
  }
}
#about-text {
  text-align: start;
  font-weight: 300;
  font-size: 12pt;
}
.row-padding {
  padding: 0 0px;
}

.top-space-project {
  margin-top: 50px;
}
</style>