<template>
  <div 
    class="col-md-6 education-item"
    v-if="!(index % 2)"
  >
    <div class="frame">
      <div 
        class="col-md-10 position-relative"
        
      >
        <div class="bg"></div>
        <div class="box">
          <h5>{{item.location}}</h5>
          <span>{{item.period}}</span>
          <p>{{item.text}}</p>
        </div>
      </div>
      <!-- <div class="col-md-3 d-flex"> -->
        <div 
          class="education__icon"
        >
          <i :class="item.icon"></i>
        </div>
      <!-- </div> -->
    </div>
  </div>
  <div 
    class="col-md-6 education-item"
    v-if="index % 2"
    :class="index % 2 && 'ms-auto'"
    :style="index % 2 && 'border-left: 2px solid #ccc; border-right: 0'"
  >
    <div class="frame">
      <div 
        class="col-md-10 position-relative"
        :class="!(index % 2) && 'text-md-end'"
      >
        <div class="bg"></div>
        <div class="box">
          <h5>{{item.location}}</h5>
          <span>{{item.period}}</span>
          <p>{{item.text}}</p>
        </div>
      </div>
      <!-- <div class="col-md-3 d-flex"> -->
        <div 
          class="education__icon"
          :style="index % 2 && 'left: -20px'"
        >
          <i :class="item.icon"></i>
        </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ['item', 'index']
}
</script>

<style scoped lang="scss">
  @import './scss/educationItemStyle.scss'
</style>