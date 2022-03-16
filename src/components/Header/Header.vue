<template>
  <header>
    <div class="header__bg-opacity">
      <div class="header__languages mb-4">
        <div class="container text-end text-white">
          <i class="fas fa-globe d-inline-block me-2"></i>
          <!-- <a
            href="https://ngoctrangnguyen1701.github.io/portfolio-english/"
            target="_blank"
            class="text-white"
            >Watch this page in English</a
          > -->
          <router-link
            tag="a"
            to="/english"
            class="text-white"
          >Watch this page in English</router-link>
        </div>
      </div>
      <Navbar/>
      <div class="header__avatar mx-auto">
        <div class="header__avatar-small"></div>
      </div>
      <div class="header__name">
        <div class="d-flex justify-content-center">
          <p>Nguyễn Ngọc Trang</p>
        </div>
        <span>Frontend Developer</span>
      </div>
    </div>
  </header>
</template>

<script>
import Navbar from './Navbar.vue'

export default {
  components: {
    Navbar,
  }
}
</script>

<style scoped lang="scss">
  @import './scss/headerStyle.scss'
</style>