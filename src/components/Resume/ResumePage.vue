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
import TitledRow from "/src/components/Resume/Row/TitledRow";
import DownloadButtonRow from "/src/components/Resume/Row/DownloadButtonRow";
import TagContainer from "/src/components/Containers/TagContainer";
import Project from "/src/components/Resume/Project";

import { projects, skills, about } from "/src/data";
export default {
  name: "ResumePage",
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
@import "src/assets/media-queries";

@include before-media-xs() {
  #main-container {
    width: 300px;
  }
}

//@include from-media-xs {
//    #main-container {
//      width: 330px;
//    }
//}
//@include from-media-xs() {
//  #main-container {
//    width: 330px;
//  }
//}

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