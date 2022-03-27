<template>
  <div class="col-md-6 expectation__bg-opacity">
    <h2 class="title mt-0 text-white">{{$store.getters.getTitle('expectation')}}</h2>
    <WishItem
      v-for="(item, index) in $store.getters.getList('wishList')"
      :key="index"
      :item="item"
    />    
  </div>
</template>

<script>
import WishItem from './WishItem.vue'

export default {
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
}
</style>
