<template>
  <!-- position-relative giúp element có thể nằm trên element có position-absolute -->
  <div
    class="position-relative ps-3 certificate-item"
    :class="isFirstItem ? 'mt-0' : 'mt-4'"
    @mouseenter="$emit('positionHover', $event)"
  >
    <span>{{item.year}}</span>
    <h5 
      :class="item.description ? 'mb-0' : 'mb-4'"
    >{{item.text}}</h5>
    <span>{{item.description}}</span>
  </div>
</template>

<script>
export default {
  props: ['item', 'isFirstItem'],
}
</script>

<style scoped lang="scss">
  @import 'src/scss/variables.scss';
  span {
    color: $color-text-note;
  }
  .certificate-item {
    &:hover {
      color: white;
      transition: .5s;

      span {
        color: black;
        transition: .5s;
      }
    }
  }
</style>