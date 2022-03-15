<template>
  <div style="margin-top: 1rem">
    <h5>{{item.location}}</h5>
    <span>{{item.period}}</span>
    <p>{{item.text}}</p>
  </div>
  <div class="d-flex">
    <div class="education__icon">
      <i :class="item.icon"></i>
    </div>
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

  .education__icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: $color-primary;
    color: white;
    line-height: 40px;
    text-align: center;
    margin: auto;
  }
</style>
