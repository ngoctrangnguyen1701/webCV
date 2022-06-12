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
      <button
        class="btn btn-warning"
        @click="$emit('projectInsideModal', item)"
      >
        {{language === 'vietnamese' ? 'Xem thêm' : 'Read more'}}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item", "index"],
  computed: {
    language() {
      return this.$store.state.language
    }
  },
};
</script>

<style scoped lang="scss">
@import "./scss/projectItemStyle.scss";
</style>
