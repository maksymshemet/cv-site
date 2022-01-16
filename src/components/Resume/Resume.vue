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
  name: "Resume",
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

@include before-media-sm() {
  #main-container {
    width: calc(100% - 60px);
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
  position: relative;
}

#background {
  position: absolute;
  background-color: whitesmoke;
  margin: 0;
  top: -100px;
  height: calc(100% + 100px);
  width: 250vw;
  left: -100vw;
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