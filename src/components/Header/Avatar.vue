<template>
  <div class="header__avatar mx-auto">
    <div class="header__avatar-small"></div>
  </div>
  <div class="header__name">
    <div class="d-flex justify-content-center frame-name">
      <p>{{ textRender }}</p>
    </div>
    <div class="d-flex justify-content-center">
      <div
        class="my-job position-relative mt-4"
        v-run-my-job:width="isRunMyJob ? '275px' : '0'"
        v-run-my-job:transition="isRunMyJob ? '2s' : '0s'"
      >
        {{language === 'vietnamese' ? 'Lập trình viên Frontend' : 'Frontend Developer'}}
        <i
          class="fas fa-sun"
          v-run-my-job:right="isRunMyJob ? '0' : '100%'"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myName: "Nguyễn Ngọc Trang",
      i: 0,
      textRender: "",
      runEffect: null,
      isRunMyJob: false,
    };
  },
  computed: {
    avatar() {
      return `url(@/assets/images/avatar.jpg)`
    },
  },
  methods: {
    typeWriter() {
      this.textRender = this.myName.slice(0, this.i + 1);
      this.i += 1;
      this.isRunMyJob = false;
    },
  },
  mounted() {
    //khi component được gắn vào DOM sẽ chạy method 'typeWriter'
    this.runEffect = setInterval(this.typeWriter, 150);
  },
  watch: {
    textRender(newValue) {
      //lắng nghe textRender thay đổi, khi nào nó bằng với giá trị của 'myName'
      //sẽ clearInterval sau đó khoảng 5s mới cho chạy lại
      //đồng thời set lại giá trị của biến i về 0
      //còn biến 'isRunMyJob' sẽ set thành true để chạy dòng chữ 'Frontend developer' và cái icon
      // console.log('textRender', newValue);
      if (newValue === this.myName) {
        clearInterval(this.runEffect);
        this.i = 0;
        this.isRunMyJob = true;
        setTimeout(() => {
          this.runEffect = setInterval(this.typeWriter, 100);
        }, 5000);
      }
    },
  },
  directives: {
    "run-my-job"(el, binding) {
      const { arg, value } = binding;
      el.style[arg] = value;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./scss/avatarStyle.scss";
</style>
