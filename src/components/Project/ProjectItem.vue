<template>
  <div class="project__item" @mouseenter="$emit('projectItemHover', $event)">
    <div class="project__item-content">
      <img :src="imageUrl(item.imgUrl)" class="w-100 mb-3" alt="" />
      <div class="height-130">
        <h5>{{item.name}}</h5>
        <p>{{item.description}}</p>
      </div>
      <a :href="item.webUrl" target="_blank" v-if="item.webUrl">
        <button class="btn btn-warning me-2">Web</button>
      </a>
      <a :href="item.sourceCodeUrl" target="_blank">
        <button class="btn btn-secondary">Code</button>
      </a>
    </div>
  </div>
</template>

<script setup>
//https://stackoverflow.com/questions/66419471/vue-3-vite-dynamic-img-src
// Vue 3 Vite - dynamic img src
  const imageUrl = value => new URL(`/src/assets/images/${value}.jpg`, import.meta.url).href;  
</script>

<script>
export default {
  props: ['item'],
}
</script>

<style scoped lang="scss">
@import './scss/projectItemStyle.scss';
.height-130 {
  height: 130px;
  @media (max-width: 767px) {
    height: auto;
  }
}
</style>