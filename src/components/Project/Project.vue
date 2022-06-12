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
        <div class="row" v-if="tab === 'practice'">
          <ProjectItem
            v-for="(item, index) in $store.getters.getList(
              'practiceProjectList'
            )"
            :key="index"
            :item="item"
            :index="index"
            @projectItemHover="handleHover"
          />
        </div>
        <div class="row" v-if="tab === 'reality'">
          <RealityProjectItem
            v-for="(item, index) in $store.getters.getList(
              'realityProjectList'
            )"
            :key="index"
            :item="item"
            :index="index"
            @projectItemHover="handleHover"
            @projectInsideModal="showModal($event)"
          />
        </div>
      </div>
    </div>
  </section>
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn btn-primary d-none"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
    ref="btnShowModal"
  >
    Launch demo modal
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div
        class="modal-content"
        v-if="projectInsideModal"
        :style="`background-image: url('/public/${projectInsideModal.imgUrl}')`"
      >
        <div class="modal-body">
          <h4>{{ projectInsideModal.name }}</h4>
          <div class="modal-body-content">
            <div class="modal-body-content-item" v-if="projectInsideModal.link">
              <p>Link:</p>
              <a :href="projectInsideModal.link" target="blank">{{
                projectInsideModal.link
              }}</a>
            </div>
            <div class="modal-body-content-item">
              <p>Mô tả:</p>
              <span>{{ projectInsideModal.description }}</span>
            </div>
            <div class="modal-body-content-item">
              <p>Framework, thư viện:</p>
              <span>{{ projectInsideModal.technical }}</span>
            </div>
            <div class="modal-body-content-item">
              <p>Vai trò:</p>
              <span>{{ projectInsideModal.role }}</span>
            </div>
            <div class="modal-body-content-item">
              <p class="d-block">Các chức năng của web:</p>
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
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectItem from "./ProjectItem.vue";
import RealityProjectItem from "./RealityProjectItem.vue";

export default {
  components: {
    ProjectItem,
    RealityProjectItem,
  },
  data() {
    return {
      frameMove: "",
      tab: "reality", //or 'practice'
      projectTabLine: "",
      realityProjectList: [],
      practiveProjectList: [],
      projectInsideModal: null,
    };
  },
  mounted() {
    this.frameMove =
      document.getElementsByClassName("project-frame-move")[0].style;
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
    showModal(item) {
      this.projectInsideModal = item;
      this.$refs.btnShowModal.click();
    },
  },
  created() {
    this.realityProjectList = this.$store.getters.getList("realityProjectList");
    this.practiceProjectList = this.$store.getters.getList(
      "practiceProjectList"
    );
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

// .modal-dialog {
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: right;
// }

.modal-content {
  background: none;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;
  border: none;
  border-radius: 0;
}

.modal-body {
  // background-image: $color-linear-gradient;
  background-color: rgba(0, 0, 0, 0.9);
  .modal-body-img {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
  h4 {
    margin: 15px 0 30px;
    color: #ff9000;
    // color: white;
    text-align: center;
  }
  .modal-body-content-item {
    margin-bottom: 10px;
    font-size: 14px;
    p {
      margin: 0 5px 0 0;
      display: inline-block;
      // margin-bottom: 0px;
      font-weight: bold;
      // color: black;
      color: #ff9000;
    }
    span {
      color: white;
    }
    i {
      margin: 0 5px 0 15px;
      // color: $color-text-note;
      color: white;
    }
  }
}
</style>
