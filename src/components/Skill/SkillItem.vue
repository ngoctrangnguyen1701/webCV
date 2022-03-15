<template>
  <div
    class="skill-item border-2" draggable="true"
    @mouseenter="$emit('update:isHovering', true)"
    @mouseleave="$emit('update:isHovering', false)"
  >
    <div>
      <h6>{{item.text}}</h6>
      <star-rating 
        class="justify-content-center"
        inactive-color="#e1bad9" active-color="#cc1166"
        v-model:rating="item.rating"
        :read-only="true"
        :show-rating="false"
        :fixed-points="1"
        :round-start-rating="false"
        :max-rating="5"
        :star-size="24"
      />
    </div>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating'
//https://www.npmjs.com/package/vue-star-rating

export default {
  props: ['item', 'isHovering'],
  components: {
    StarRating
  },
}
</script>

<style scoped lang="scss">
  @import './scss/skillItemStyle.scss'
</style>