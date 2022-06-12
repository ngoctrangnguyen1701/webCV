<template>
  <section id="experience" class="work mt-5 pb-5">
    <h2 class="title text-white pt-5">{{$store.getters.getTitle('experience')}}</h2>
    <div class="container position-relative">
      <div class="work__line d-none d-md-block"></div>
      <ExperienceItem
        v-for="(item, index) in $store.getters.getList('experienceList')"
        :key="index"
        :item="item"
        :index="index"
      />
    </div>
  </section>
</template>

<script>
import ExperienceItem from "./ExperienceItem.vue";

export default {
  components: {
    ExperienceItem,
  },
};
</script>

<style scoped lang="scss">
@import 'src/scss/variables.scss';

  .work {
    background-image: $color-linear-gradient;
    color: white;

    &__line {
      width: 2px;
      background-color: white;
      height: 100%;
      position: absolute;
      left: 49.8%;
      z-index: 1;
    }
  }
</style>
