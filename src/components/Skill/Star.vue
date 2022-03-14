<template>
  <star-rating 
    inactive-color="#e1bad9" active-color="#cc1166"
    v-model:rating="rating"
    :read-only="true"
    :show-rating="false"
    :fixed-points="1"
    :round-start-rating="false"
    :max-rating="6"
    :star-size="24"
  />
</template>


<script>
import StarRating from 'vue-star-rating'
//https://www.npmjs.com/package/vue-star-rating

export default {
  data() {
    return {
      rating: 3.5
    }
  },
  components: {
    StarRating
  },
}
</script>