<template>
  <section id="education" class="education">
    <h2 class="title">Học vấn</h2>
    <div class="container position-relative">
      <!-- <div class="education__line d-none d-md-block"></div> -->
      <EducationItem
        v-for="(item, index) in list"
        :key="index"
        :item="item"
        :index="index"
      />
    </div>
  </section>
</template>

<script>
import educationList from './educationList'
import EducationItem from './EducationItem.vue'

export default {
  data() {
    return {
      list: educationList.vietnamese
    }
  },
  components: {
    EducationItem
  }
}
</script>

<style scoped lang="scss">
  @import 'src/scss/variables.scss';

  .education__line {
    width: 2px;
    background-color: $color-text-note;
    height: 100%;
    position: absolute;
    left: 49.8%;
    z-index: -1;
  }
</style>