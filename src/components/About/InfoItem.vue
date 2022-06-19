<template>
  <div class="d-flex algin-item-center frame-item">
    <div class="frame-icon">
      <img src="~@/assets/images/icon-zalo.svg" class="about__zalo" 
        v-if="item.icon.includes('zalo')"
      >
      <!-- <img :src="require(`src/assets/images/${item.icon}`.svg)" class="about__zalo" 
        v-if="item.icon.includes('zalo')"
      > -->
      <i v-else :class="item.icon"></i>
    </div>
    <div class="frame-text">
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