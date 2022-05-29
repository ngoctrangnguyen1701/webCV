<template>
  <div class="col-md-6 download__bg-opacity">
    <h2 class="title mt-0 text-black">Download CV</h2>
    <button class="btn download__button" @click="downloadCV('vietnamese')">
      {{language === 'vietnamese' ? 'CV tiếng Việt' : 'Vietnamese CV'}}
    </button>
    <button class="btn download__button" @click="downloadCV('english')">
      {{language === 'vietnamese' ? 'CV tiếng Anh' : 'English CV'}}
    </button>
    <a href="" ref="anchor"></a>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState(['language']),
  methods: {
    downloadCV(lang) {
      const anchor = this.$refs.anchor
      const href = lang === 'vietnamese' ? "/public/files/Nguyen-Ngoc-Trang-Lap-Trinh-Vien-Front-End.pdf" : "/public/files/Nguyen-Ngoc-Trang-Front-End-Developer.pdf"
      const fileDownload = lang === 'vietnamese' ? "Nguyen-Ngoc-Trang-Lap-Trinh-Vien-Front-End.pdf" : "Nguyen-Ngoc-Trang-Front-End-Developer.pdf"
      anchor.href = href
      anchor.download = fileDownload
      anchor.click()
      //reference: https://attacomsian.com/blog/javascript-download-file
      // Create a new link
      // const anchor = document.createElement("a");
      // if(lang === 'vietnamese') {
      //   anchor.href = "/public/files/Nguyen-Ngoc-Trang-Lap-Trinh-Vien-Front-End.pdf"
      //   anchor.download = "Nguyen-Ngoc-Trang-Lap-Trinh-Vien-Front-End.pdf"
      // }
      // else {
      //   anchor.href = "/public/files/Nguyen-Ngoc-Trang-Front-End-Developer.pdf"
      //   anchor.download = "Nguyen-Ngoc-Trang-Front-End-Developer.pdf"
      // }

      // // Append to the DOM
      // document.body.appendChild(anchor);

      // // Trigger `click` event
      // anchor.click();

      // // Remove element from DOM
      // document.body.removeChild(anchor);
    },
  },
};
</script>

<style scoped lang="scss">
@import "./scss/downloadStyle.scss";
</style>
