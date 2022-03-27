<template>
  <div class="col-md-6 mx-auto">
    <InfoItem
      v-for="(item, index) in $store.getters.getList('infoList')"
      :key="index"
      :item="item"
    />
  </div>
</template>

<script>
import InfoItem from './InfoItem.vue'

export default {
  components: {
    InfoItem
  },
}
</script>
