<template>
  <section id="end" class="end mt-5 mb-2 pt-5">
    <div class="end__bg">
      <div class="end__bg-opacity py-md-4">
        <div class="container">
          <div class="row">
            <Wish />
            <Download />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Wish from "./Wish.vue";
import Download from "./Download.vue";

export default {
  components: {
    Wish,
    Download,
  },
};
</script>

<style scoped lang="scss">
.end {
  &__bg {
    background: {
      image: url("/images/bg-2.jpg");
      size: cover;
      position: center;
    }

    &-opacity {
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
}
</style>
