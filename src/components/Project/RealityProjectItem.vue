<template>
  <div
    class="project__item"
    @mouseenter="$emit('projectItemHover', $event)"
    @click="$emit('projectItemClick', item)"
  >
    <div class="project__item-content">
      <img :src="imageUrl(item.imgUrl)" class="w-100 mb-3 project__item-image" alt="" />
      <div class="height-130">
        <h5>{{ item.name }}</h5>
        <p>{{ item.description }}</p>
      </div>
      <button class="btn btn-warning">
        {{ language === "vietnamese" ? "Xem thêm" : "Read more" }}
      </button>
    </div>
  </div>
</template>

<script setup>
  const imageUrl = value => {
    if(!value.includes('http')) {
      return new URL(`/src/assets/images/${value}.jpg`, import.meta.url).href
    }
    return value
  };  
</script>

<script>
export default {
  props: ['item'],
  computed: {
    language() {
      return this.$store.state.language;
    },
    getImgUrl(value) {
      const images = require.context("src/assets/", false, /\.png$/);
      return images("./" + value + ".jpg");
    },
  },
};
</script>

<style scoped lang="scss">
@import "./scss/projectItemStyle.scss";
.height-130 {
  height: 130px;
  @media (max-width: 767px) {
    height: auto;
  }
}
.project__item-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
}
</style>
