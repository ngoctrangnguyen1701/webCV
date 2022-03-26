<template>
  <li class="nav-item" >
    <div class="bg"></div>
    <router-link
      tag="a"
      class="nav-link"
      :to="item.to"
    >{{item.label}}</router-link>
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