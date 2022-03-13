<template>
  <li class="nav-item" >
    <div class="bg"></div>
    <a :href="item.link" class="nav-link">{{item.label}}</a>
  </li>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style scoped lang="scss">
  @import './scss/linkItemStyle.scss'
</style>