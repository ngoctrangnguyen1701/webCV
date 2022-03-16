<template>
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
            v-for="(item, index) in list"
            :key="index"
            :item="item"
          />
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import linkList from './linkList.js'
import LinkItem from './LinkItem.vue'

export default {
  data() {
    return {
      list: linkList.vietnamese
    }
  },
  components: {
    LinkItem,
  }
}
</script>