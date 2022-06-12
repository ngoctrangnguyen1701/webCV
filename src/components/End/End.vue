<template>
  <section id="end" class="end mt-5 pt-5">
    <div class="end__bg">
      <div class="end__bg-opacity py-md-4">
        <div class="container">
          <div class="row">
            <Thankyou />
            <Download />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Thankyou from "./Thankyou.vue";
import Download from "./Download.vue";

export default {
  components: {
    Thankyou,
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
      background-color: rgba(0, 0, 0, 0.7);
    }
  }
}
</style>
