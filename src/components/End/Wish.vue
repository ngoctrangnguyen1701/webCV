<template>
  <div class="col-md-6 expectation__bg-opacity">
    <h2 class="title mt-0 text-white">Nguyện vọng</h2>
    <WishItem
      v-for="(item, index) in list"
      :key="index"
      :item="item"
    />    
  </div>
</template>

<script>
import wishList from './wishList'
import WishItem from './WishItem.vue'

export default {
  data() {
    return {
      list: wishList.vietnamese
    }
  },
  components: {
    WishItem
  }
}
</script>

<style scoped lang="scss">
@import 'src/scss/variables.scss';

.expectation__bg-opacity {
  background-image: $color-linear-gradient;
  padding-top: 50px;
  padding-bottom: 50px;
  .row {
    margin-bottom: 1rem;
  }
}
</style>
