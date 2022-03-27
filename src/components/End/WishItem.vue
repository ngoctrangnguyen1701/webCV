<template>
  <div class="row mb-3 justify-content-end">
    <div class="col-md-6">
      <span>{{item.label}}</span>
    </div>
    <div class="col-md-6 text-white">{{item.content}}</div>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style scoped lang="scss">
  @import 'src/scss/variables.scss';
  span {
    color: $color-text-note;
  }
</style>