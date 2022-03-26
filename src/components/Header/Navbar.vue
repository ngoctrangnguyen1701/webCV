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
import {mapState} from 'vuex'
import linkList from './linkList.js'
import LinkItem from './LinkItem.vue'

export default {
  components: {
    LinkItem,
  },
  data() {
    return {
      // list: linkList.vietnamese
    }
  },
  computed: {
    list() {
      return this.language === 'vietnamese' ? linkList.vietnamese : linkList.english
    },
    ...mapState ([
      'language'
    ])
  },
  watch: {
    language(newLang) {
      console.log({newLang});
      if(newLang === 'vietnamese') {
        this.list = linkList.vietnamese
      }
      else if(newLang === 'english') {
        this.list = linkList.english
      }
    }
  },
}
</script>