<template>
  <div class="col-md-6 download__bg-opacity">
    <h2 class="title mt-0 text-black">Download CV</h2>
    <!-- <a
      href="https://i.topcv.vn/nguyenngoctrang?ref=4598680"
      target="_blank"
      class="download__button"
      >CV tiếng Việt</a
    >
    <a
      href="https://i.topcv.vn/nguyenngoctrang?ref=4607057"
      target="_blank"
      class="download__button"
      >CV tiếng Anh</a
    > -->
    <button class="btn download__button" @click="downloadCV('vietnamese')">
      CV tiếng Việt
    </button>
    <button class="btn download__button" @click="downloadCV('english')">
      CV tiếng Anh
    </button>
    <!-- <a
      class="download__button"
      @click.prevent="downloadCV('vietnamese')"
      href="no-script.html"
    >CV tiếng Việt</a>
    <a
      class="download__button"
      @click.prevent="downloadCV('english')"
      href="no-script.html"
    >CV tiếng Anh</a> -->
    <!-- <iframe id="cv" style="display: none"></iframe> -->
  </div>
</template>

<script>
export default {
  methods: {
    downloadCV(language) {
      //reference: https://attacomsian.com/blog/javascript-download-file
      // Create a new link
      const anchor = document.createElement("a");
      if(language === 'vietnamese') {
        anchor.href = "/public/files/Nguyen-Ngoc-Trang-Lap-Trinh-Vien-Front-End.pdf"
        anchor.download = "Nguyen-Ngoc-Trang-Lap-Trinh-Vien-Front-End"
      }
      else {
        anchor.href = "/public/files/Nguyen-Ngoc-Trang-Front-End-Developer.pdf"
        anchor.download = "Nguyen-Ngoc-Trang-Front-End-Developer"
      }

      // Append to the DOM
      document.body.appendChild(anchor);

      // Trigger `click` event
      anchor.click();

      // Remove element from DOM
      document.body.removeChild(anchor);
    },
  },
};
</script>

<style scoped lang="scss">
@import "./scss/downloadStyle.scss";
</style>
