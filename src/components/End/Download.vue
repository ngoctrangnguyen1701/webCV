<template>
  <div class="col-md-6 download__bg-opacity">
    <h2 class="title mt-0 text-black">Download CV</h2>
    <button class="btn download__button" @click="downloadCV('vietnamese')">
      {{$t('vietnamese-cv')}}
    </button>
    <button class="btn download__button" @click="downloadCV('english')">
      {{$t('english-cv')}}
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    downloadCV(lang) {
      const link = document.createElement('a');
      const href =
        lang === "vietnamese"
          ? "https://www.topcv.vn/download-cv?cv_id=VgpQWwYKBw5TUwdcVAJSCQQHUwpWCwIEClBRAA4310"
          : "https://www.topcv.vn/download-cv?cv_id=AAkEVgJcCFFbDVEPWlMLUQEBAAwMXgAGB1FVAAd172";
      const fileDownload =
        lang === "vietnamese"
          ? "Nguyen-Ngoc-Trang-Lap-Trinh-Vien-Front-End"
          : "Nguyen-Ngoc-Trang-Front-End-Developer";
      document.body.appendChild(link); // Firefox requires the link to be in the body
      link.download = fileDownload; //hiện giờ cách đổi tên này với chrome không có tác dụng
      link.href = href;
      link.click();
      document.body.removeChild(link); // remove the link when done
    },
  }
};
</script>

<style scoped lang="scss">
@import "./scss/downloadStyle.scss";
</style>
