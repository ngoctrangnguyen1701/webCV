<template>
  <div class="col-md-6 download__bg-opacity">
    <h2 class="title mt-0 text-black">Download CV</h2>
    <button class="btn download__button" @click="downloadCV('vietnamese')">
      {{ language === "vietnamese" ? "CV tiếng Việt" : "Vietnamese CV" }}
    </button>
    <div class="loading-bar" v-if="isProgress && langDownload === 'vietnamese'">
      <div class="loading-bar--progress">
        <span class="first"></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span class="last"></span>
      </div>
    </div>
    <button class="btn download__button" @click="downloadCV('english')">
      {{ language === "vietnamese" ? "CV tiếng Anh" : "English CV" }}
    </button>
    <div class="loading-bar" v-if="isProgress && langDownload === 'english'">
      <div class="loading-bar--progress">
        <span class="first"></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span class="last"></span>
      </div>
    </div>
    <a href="" ref="anchor"></a>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["language"]),
  data() {
    return {
      isProgress: false,
      langDownload: null,
      anchor: null,
    };
  },
  methods: {
    downloadCV(lang) {
      this.anchor = this.$refs.anchor;
      this.isProgress = true;
      this.langDownload = lang === "vietnamese" ? "vietnamese" : "english";
    },
  },
  watch: {
    isProgress(newVal) {
      if (newVal) {
        setTimeout(() => {
          const href =
            this.langDownload === "vietnamese"
              ? "https://www.topcv.vn/download-cv?cv_id=DgNWBFdTBwAMBFcGBF1SDANVBFJVBVAGAVcCBAc113"
              : "https://www.topcv.vn/download-cv?cv_id=BldYC11cU1RUBQQGAw9UUgMPAVRWUFpUAARVWwebdf";
          const fileDownload =
            this.langDownload === "vietnamese"
              ? "Nguyen-Ngoc-Trang-Lap-Trinh-Vien-Front-End.pdf"
              : "Nguyen-Ngoc-Trang-Front-End-Developer.pdf";
          this.anchor.href = href;
          this.anchor.download = fileDownload;
          this.anchor.click();

          this.isProgress = false;
          this.langDownload = null;
        }, 5000);
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "./scss/downloadStyle.scss";
</style>
