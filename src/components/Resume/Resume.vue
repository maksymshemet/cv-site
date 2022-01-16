<template>
  <b-container id="main-container" fluid="sm" class="row-padding">
    <div id="background"></div>
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
    <DownloadButton />
  </b-container>
</template>

<script>
import TitledRow from "/src/components/Resume/Container/TitledContainer";
import DownloadButton from "/src/components/Resume/DownloadButton";
import TagContainer from "/src/components/Resume/Container/TagContainer";
import Project from "/src/components/Resume/Project";

import { projects, skills, about } from "/src/data";
export default {
  name: "Resume",
  components: {TitledRow, DownloadButton, TagContainer, Project},
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
@import "src/assets/media-queries";
@import "src/assets/variables";


#main-container {
  > * {
    margin-top: 100px;
  }
  position: relative;
  overflow: hidden
}

@include before-media-sm() {
  #main-container {
    padding-left: 30px;
    padding-right: 30px;
  }
}

#background {
  position: absolute;
  background-color: $background-light-color;
  margin: 0;
  top: -100px;
  height: calc(100% + 100px);
  width: 250vw;
  left: -100vw;
}
#about-text {
  text-align: start;
  font-weight: 400;
  font-size: 12pt;
  color: $text-color-dark;
}
.row-padding {
  padding: 0 0px;
}

.top-space-project {
  margin-top: 50px;
}
</style>