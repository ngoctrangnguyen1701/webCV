<template>
  <header>
    <div class="header__bg-opacity">
      <div class="header__languages mb-4">
        <div class="container text-end text-white">
          <i class="fas fa-globe d-inline-block me-2"></i>
          <a
            href="https://ngoctrangnguyen1701.github.io/portfolio-english/"
            target="_blank"
            class="text-white"
            >Watch this page in English</a
          >
        </div>
      </div>
      <nav class="navbar navbar-expand-md bg-transparent">
        <div class="container">
          <button
            class="navbar-toggler text-dark border-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              class="navbar-nav mr-auto align-content-center justify-content-md-between w-100 flex-wrap"
            >
              <LinkItem
                v-for="(item, index) in linkList"
                :key="index"
                :item="item"
              />
            </ul>
          </div>
        </div>
      </nav>
      <div class="header__avatar mx-auto">
        <div class="header__avatar-small"></div>
      </div>
      <div class="header__name">
        <p>Nguyễn Ngọc Trang</p>
        <span>Frontend Developer</span>
      </div>
    </div>
  </header>
</template>

<script>
import linkList from './linkList.js'
import LinkItem from './LinkItem.vue'

export default {
  data() {
    return {
      linkList
    }
  },
  components: {
    LinkItem,
  }
}
</script>

<style scoped lang="scss">
  @import './scss/headerStyle.scss'
</style>