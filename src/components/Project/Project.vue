<template>
  <section id="project" class="project">
    <h2 class="title">{{$store.getters.getTitle('project')}}</h2>
    <div class="container">
      <div class="row position-relative" @mouseleave="exitHover">
        <div class="project-frame-move">
          <div class="w-100 h-100 bg-white"></div>
        </div>
        <ProjectItem
          v-for="(item, index) in $store.getters.getList('projectList')"
          :key="index"
          :item="item"
          :index="index"
          @projectItemHover="handleHover"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ProjectItem from './ProjectItem.vue'

export default {
  data() {
    return {
      frameMove: ''
    }
  },
  components: {
    ProjectItem,
  },
  mounted() {
    // const frameMove = document.getElementsByClassName('project-frame-move')[0]
    this.frameMove = document.getElementsByClassName('project-frame-move')[0].style
  },
  methods: {
    handleHover(event){
      //offsetWidth: width của element
      //offsetHeight: hieght của element
      //offsetTop: khoảng cách từ trên xuống của element so với parent element
      //offsetLeft: khoảng cách từ trái qua của element so với parent element

      this.frameMove.width = event.target.offsetWidth + 'px'
      this.frameMove.height = event.target.offsetHeight + 'px'
      this.frameMove.transform = `translateX(${event.target.offsetLeft}px) translateY(${event.target.offsetTop}px)`
      this.frameMove.opacity = '1'
    },
    exitHover() {
      this.frameMove.opacity = '0'
    }
  }
}
</script>

<style scoped lang="scss">
  @import 'src/scss/variables.scss';

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
    transition: .5s;
    opacity: 0;
  }
</style>