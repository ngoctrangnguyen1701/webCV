<template>
  <section id="education" class="education">
    <h2 class="title">Học vấn</h2>
    <div class="container position-relative">
      <!-- sử dụng 2 component riêng khi kích thước màn hình thay đổi -->
      <div class="d-none d-md-block">
        <EducationItem
          v-for="(item, index) in list"
          :key="index"
          :item="item"
          :index="index"
          :noPaddingBottom="index === (list.length - 1) ? true : false"
        />
      </div>
      <div class="d-block d-md-none">
        <EducationItemMobile
          v-for="(item, index) in list"
          :key="index"
          :item="item"
        />
      </div>
    </div>
  </section>
</template>

<script>
import educationList from './educationList'
import EducationItem from './EducationItem.vue'
import EducationItemMobile from './EducationItemMobile.vue'

export default {
  data() {
    return {
      list: educationList.vietnamese,
    }
  },
  components: {
    EducationItem,
    EducationItemMobile
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