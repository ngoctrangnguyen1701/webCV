<template>
  <div 
    class="row mt-4 mt-md-0"
    :class="index % 2 && 'flex-row-reverse'"
  >
    <!-- position-relative để nó nằm trên cái element có position absolute -->
    <div class="col-md-5 position-relative work-item">
      <div
        class="work__item-bg"
        :class="index % 2 ? 'right-side' : 'left-side'"
      ></div>
      <div class="box position-relative">
        <span>{{item.job}}</span>
        <h5>{{item.company}}</h5>
        <span>{{item.period}}</span>
        <p v-html="item.description"></p>
      </div>
    </div>

    <div class="col-md-2 d-flex">
      <div class="work__icon">
        <i :class="item.icon"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item', 'index']
}
</script>

<style scoped lang="scss">
  @import './scss/workItemStyle.scss';
</style>