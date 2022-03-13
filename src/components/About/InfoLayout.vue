<template>
  <div class="col-md-6 mx-auto">
    <InfoItem
      v-for="(item, index) in infoList"
      :key="index"
      :item="item"
    />
  </div>
</template>

<script>
import infoList from './infoList'
import InfoItem from './InfoItem.vue'

export default {
  data() {
    return {
      infoList,
    }
  },
  components: {
    InfoItem
  }
}
</script>
