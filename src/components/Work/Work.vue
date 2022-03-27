<template>
  <section id="work" class="work mt-5 pb-5">
    <h2 class="title text-white pt-5">{{$store.getters.getTitle('experience')}}</h2>
    <div class="container position-relative">
      <div class="work__line d-none d-md-block"></div>
      <WorkItem
        v-for="(item, index) in $store.getters.getList('workList')"
        :key="index"
        :item="item"
        :index="index"
      />
    </div>
  </section>
</template>

<script>
import WorkItem from "./WorkItem.vue";

export default {
  components: {
    WorkItem,
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
