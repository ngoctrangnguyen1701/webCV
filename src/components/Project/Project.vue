<template>
  <section id="project" class="project">
    <h2 class="title mb-4">{{ $store.getters.getTitle("project") }}</h2>
    <div class="container">
      <div class="project-tab">
        <div class="project-tab-item" @click="chooseTab($event, 'reality')">
          Dự án thực tế
        </div>
        <div class="project-tab-item" @click="chooseTab($event, 'practice')">
          Dự án thực hành
        </div>
        <div class="project-tab-line"></div>
      </div>
      <div class="position-relative" @mouseleave="exitHover">
        <div class="project-frame-move">
          <div class="w-100 h-100 bg-white"></div>
        </div>
        <transition name="fade">
          <div class="row" v-if="tab === 'practice'">
            <ProjectItem
              v-for="(item, index) in $store.getters.getList('practiceProjectList')"
              :key="index"
              :item="item"
              :index="index"
              @projectItemHover="handleHover"
            />
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
import ProjectItem from "./ProjectItem.vue";

export default {
  components: {
    ProjectItem,
  },
  data() {
    return {
      frameMove: "",
      tab: "reality", //or 'practice'
      projectTabLine: "",
    };
  },
  mounted() {
    this.frameMove = document.getElementsByClassName("project-frame-move")[0].style;
    this.projectTabLine =
      document.getElementsByClassName("project-tab-line")[0].style;
  },
  methods: {
    handleHover(event) {
      //offsetWidth: width của element
      //offsetHeight: hieght của element
      //offsetTop: khoảng cách từ trên xuống của element so với parent element
      //offsetLeft: khoảng cách từ trái qua của element so với parent element

      this.frameMove.width = event.target.offsetWidth + "px";
      this.frameMove.height = event.target.offsetHeight + "px";
      this.frameMove.transform = `translateX(${event.target.offsetLeft}px) translateY(${event.target.offsetTop}px)`;
      this.frameMove.opacity = "1";
    },
    exitHover() {
      this.frameMove.opacity = "0";
    },
    chooseTab(event, tab) {
      this.tab = tab;
      this.projectTabLine.width = event.target.offsetWidth + "px";
      this.projectTabLine.left = event.target.offsetLeft + "px";
    },
  },
  // watch: {
  //   tab(newVal) {
  //     if (newVal === "practice") {
  //       this.frameMove =
  //         document.getElementsByClassName("project-frame-move")[0].style;
  //     }
  //   },
  // },
};
</script>

<style scoped lang="scss">
@import "src/scss/variables.scss";

.project-frame-move {
  width: 0%;
  height: 0%;
  // width: 250px; /* thay đổi theo cái width của item hover */
  // height: ?px; /* thay đổi theo cái hieght của item hover */
  padding: 2px;
  background-image: $color-linear-gradient;

  position: absolute;
  // transform: translateX(? px) translateY(? px);
  /* thay đổi theo cái width và height của các item đứng trước item hover */
  transition: 0.5s;
  opacity: 0;
}

.project-tab {
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto 24px;
  border-bottom: 1px solid #ddd;
  position: relative;

  .project-tab-item {
    flex: 1 1 100%;
    padding-bottom: 10px;
    cursor: pointer;
    text-align: center;
    font-size: 20px;
  }

  .project-tab-line {
    background-image: $color-linear-gradient;
    height: 2px;
    width: 50%;
    position: absolute;
    bottom: -1px;
    left: 0;
    transition: 0.3s;
  }
}

.fade-enter-active,
.fade-leave-active {
  opacity: 1;
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transition: opacity 0.5s ease;
}
</style>
