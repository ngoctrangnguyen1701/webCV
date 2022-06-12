<template>
  <div
    class="col-md-6 col-lg-4 project__item"
    @mouseenter="$emit('projectItemHover', $event)"
  >
    <div class="project__item-content">
      <img :src="item.imgUrl" class="w-100 mb-3" />
      <div style="height: 130px">
        <h5>{{ item.name }}</h5>
        <p>{{ item.description }}</p>
      </div>
      <!-- <a :href="item.webUrl" target="_blank" v-if="item.webUrl">
        <button class="btn btn-warning me-2">Web</button>
      </a>
      <a :href="item.sourceCodeUrl" target="_blank">
        <button class="btn btn-secondary">Code</button>
      </a> -->
      <button
        class="btn btn-warning"
        @click="$emit('projectInsideModal', item)"
      >
        Xem thêm
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item", "index"],
};
</script>

<style scoped lang="scss">
@import "./scss/projectItemStyle.scss";
</style>
