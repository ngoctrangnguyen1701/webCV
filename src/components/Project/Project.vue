<template>
  <section id="project" class="project">
    <h2 class="title mb-4">{{ $store.getters.getTitle("project") }}</h2>
    <div class="container">
      <div class="project-tab">
        <div class="project-tab-item" @click="chooseTab($event, 'reality')">
          {{language === 'vietnamese' ? 'Dự án thực tế' : 'Reality projects'}}
        </div>
        <div class="project-tab-item" @click="chooseTab($event, 'practice')">
          {{language === 'vietnamese' ? 'Dự án thực hành' : 'Practice projects'}}
          
        </div>
        <div class="project-tab-line" ref="projectTabLine"></div>
      </div>
      
      <div class="position-relative" ref="roadMove" @mouseleave="exitHover">
        <div class="project-frame-move" ref="frameMove">
          <div class="w-100 h-100 bg-white"></div>
        </div>
        <div v-if="tab === 'practice'">
          <Carousel :breakpoints="breakpoints">
            <Slide
              v-for="(item, index) in $store.getters.getList('practiceProjectList')"
              :key="index"
              @mouseenter="handleHover($event)"
            >
              <div class="carousel__item">
                <ProjectItem
                  :item="item"
                />
              </div>
            </Slide>
            <template #addons>
              <Navigation />
            </template>
          </Carousel>
          <!-- <ProjectItem
            v-for="(item, index) in $store.getters.getList(
              'practiceProjectList'
            )"
            :key="index"
            :item="item"
            @projectItemHover="handleHover"
          /> -->
        </div>
        <div v-if="tab === 'reality'">
          <Carousel :breakpoints="breakpoints">
            <Slide
              v-for="(item, index) in $store.getters.getList('realityProjectList')"
              :key="index"
              @mouseenter="handleHover($event)"
            >
              <!-- @projectItemHover="handleHover" -->
              <div class="carousel__item">
                <RealityProjectItem
                  :item="item"
                  @projectInsideModal="showModal($event)"
                  @projectItemClick="showModal($event)"
                />
              </div>
            </Slide>
            <template #addons>
              <Navigation />
            </template>
          </Carousel>
          <!-- <RealityProjectItem
            v-for="(item, index) in $store.getters.getList(
              'realityProjectList'
            )"
            :key="index"
            :item="item"
            @projectItemHover="handleHover"
            @projectInsideModal="showModal($event)"
            @projectItemClick="showModal($event)"
          /> -->
        </div>
      </div>
    </div>
  </section>
    <!-- Button trigger modal -->
  <button
    type="button"
    class="btn btn-primary d-none"
    data-bs-toggle="modal"
    data-bs-target="#modal-detail-project"
    ref="btnShowModal"
  >
    Launch demo modal
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="modal-detail-project"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div
        class="modal-content"
        v-if="projectInsideModal"
        :style="{backgroundImage: `url(${imageUrl(projectInsideModal.imgUrl)})`}"
      >
        <div class="modal-body">
          <h4 class="text-uppercase">{{ projectInsideModal.name }}</h4>
          <div class="modal-body-content mt-3">
            <div class="modal-body-content-item">
              <p>{{language === 'vietnamese' ? 'Thời gian tham gia:' : 'Participation time:'}}</p>
              <span>{{ projectInsideModal.startTime }} - {{ projectInsideModal.endTime }}</span>
            </div>
            <div class="modal-body-content-item" v-if="projectInsideModal.link">
              <p>Link:</p>
              <a :href="projectInsideModal.link" target="blank">{{
                projectInsideModal.link
              }}</a>
            </div>
            <div class="modal-body-content-item">
              <p>{{language === 'vietnamese' ? 'Mô tả:' : 'Description:'}}</p>
              <span>{{ projectInsideModal.description }}</span>
            </div>
            <div class="modal-body-content-item">
              <p>{{language === 'vietnamese' ? 'Framework, thư viện:' : 'Framework, library:'}}</p>
              <span>{{ projectInsideModal.technical }}</span>
            </div>
            <div class="modal-body-content-item">
              <p>{{language === 'vietnamese' ? 'Vai trò:' : 'Role:'}}</p>
              <span>{{ projectInsideModal.role }}</span>
            </div>
            <div class="modal-body-content-item">
              <p>{{language === 'vietnamese' ? 'Các chức năng của web:' : 'Features:'}}</p>
              <div
                v-for="(item, index) in projectInsideModal.features"
                :key="index"
              >
                <i class="fas fa-angle-right"></i>
                <span>{{ item }}</span>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <button
              class="btn btn-warning my-4"
              data-bs-dismiss="modal"
              @click="$refs.btnShowModal.click()"
              style="width: 150px"
            >
              {{language === 'vietnamese' ? 'Đóng' : 'Close'}}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// https://markus.oberlehner.net/blog/refs-and-the-vue-3-composition-api
// **Lưu ý: nếu trong component vừa có setup vừa có refs
// Phải có thêm phần khai báo biến ref cho các element có đặt chữ ‘ref’

import {ref} from 'vue'
const imageUrl = value => {
  if(!value.includes('http')) {
    return new URL(`/src/assets/images/${value}.jpg`, import.meta.url).href
  }
  return value
};
// const projectTabLine = ref(null)
// const frameMove = ref(null)
</script>

<script>
import 'vue3-carousel/dist/carousel.css'
import { defineComponent } from 'vue'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

import ProjectItem from "./ProjectItem.vue";
import RealityProjectItem from "./RealityProjectItem.vue";

export default {
  components: {
    ProjectItem,
    RealityProjectItem,
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      // frameMove: "",
      tab: "reality", //or 'practice'
      // projectTabLine: "",
      realityProjectList: [],
      practiveProjectList: [],
      projectInsideModal: null,

      // carousel settings
      settings: {
        itemsToShow: 1,
        // snapAlign: 'start',
        wrapAround: true,
        autoplay: 4000,
      },
    };
  },
  computed: {
    language() {
      return this.$store.state.language
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints() {
      // 700px and up
      return {
        500: {
          ...this.settings,
          itemsToShow: 1,
          snapAlign: "start"
        },
        700: {
          ...this.settings,
          itemsToShow: 2,
          snapAlign: "start"
        },
        // 1024 and up
        1199: {
          ...this.settings,
          itemsToShow: 3,
          snapAlign: 'start',
        },
      }
    },
  },
  mounted() {
    // this.frameMove = this.$refs.frameMove.style
    // this.projectTabLine = this.$refs.projectTabLine.style
    // console.log(this.projectTabLine);
  },
  methods: {
    handleHover(event) {
      //offsetWidth: width của element
      //offsetHeight: hieght của element
      //offsetTop: khoảng cách từ trên xuống của element so với parent element
      //offsetLeft: khoảng cách từ trái qua của element so với parent element
      // const top = event.target.getBoundingClientRect().top
      const left = event.target.getBoundingClientRect().left

      const roadMove = this.$refs['roadMove']
      const roadMoveLeft = roadMove.getBoundingClientRect().left
      // console.log(roadMove.getBoundingClientRect().left);

      const distance = Math.abs(roadMoveLeft - left)
      // console.log(distance);

      const width = event.target.offsetWidth + "px";
      const height = event.target.offsetHeight + "px";
      // const transform = `translateX(${event.target.offsetLeft}px) translateY(${event.target.offsetTop}px)`
      // const transform = `translateX(${event.target.screenX}px) translateY(${event.target.screenY}px)`
      const transform = `translateX(${distance}px)`
      // console.log(transform)
      const frameMoveStyle = this.$refs['frameMove'].style
      frameMoveStyle.width = width
      frameMoveStyle.height = height
      frameMoveStyle.transform = transform
      frameMoveStyle.opacity = "1"

      


      // this.frameMove.width = event.target.offsetWidth + "px";
      // this.frameMove.height = event.target.offsetHeight + "px";
      // this.frameMove.transform = `translateX(${event.target.offsetLeft}px) translateY(${event.target.offsetTop}px)`;
      // this.frameMove.opacity = "1";
    },
    exitHover() {
      this.$refs['frameMove'].style.opacity = "0"
      // this.frameMove.opacity = "0";
    },
    chooseTab(event, tab) {
      this.tab = tab;
      // this.projectTabLine.width = event.target.offsetWidth + "px";
      // this.projectTabLine.left = event.target.offsetLeft + "px";
      const width = event.target.offsetWidth + "px";
      const left = event.target.offsetLeft + "px";
      // this.projectTabLine.width = event.target.offsetWidth + "px";
      // this.projectTabLine.left = event.target.offsetLeft + "px";
      this.$refs['projectTabLine'].style.width = width
      this.$refs['projectTabLine'].style.left = left
    },
    showModal(item) {
      this.projectInsideModal = item;
      this.$refs.btnShowModal.click();
    },
  },
  created() {
    this.realityProjectList = this.$store.getters.getList("realityProjectList")
    this.practiceProjectList = this.$store.getters.getList("practiceProjectList")
  },
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
    padding-bottom: 5px;
    cursor: pointer;
    text-align: center;
    font-size: clamp(0.8rem, 2vw, 1.25rem);
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

.modal-content {
  background: none;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;
  border: none;
  border-radius: 0;
  background-color: yellow;
}

.modal-body {
  background-color: black;
  opacity: 0.95;
  .modal-body-img {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
  h4 {
    margin: 15px 0 30px;
    color: #ff9000;
    text-align: center;
  }
  .modal-body-content-item {
    margin-bottom: 10px;
    font-size: 14px;
    p {
      margin: 0 5px 0 0;
      display: inline-block;
      font-weight: bold;
      color: #ff9000;
    }
    span {
      color: white;
    }
    i {
      margin: 0 5px 0 15px;
      color: white;
    }
  }
}
</style>
