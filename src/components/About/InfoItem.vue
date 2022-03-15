<template>
  <div class="row">
    <div class="col-1 col-sm-2">
      <img :src="item.icon" class="about__zalo" 
        v-if="item.icon.includes('zalo')"
      >
      <i v-else :class="item.icon"></i>
    </div>
    <div class="col-11 col-sm-10">
      <a 
        v-if="item.link"
        :href="item.link" 
        target="_bank"
      >{{item.label}}</a>
      <span v-else>{{item.label}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style scoped lang="scss">
  @import './scss/infoItemStyle.scss'
</style>