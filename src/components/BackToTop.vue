<template>
  <transition name="fade">
    <button
      id="pagetop"
      class="btn"
      v-show="scrollY > 300"
      @click="toTop"
    >
      <i class="fas fa-angle-up"></i>
    </button>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      scrollTimer: 0,
      scrollY: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll: function () {
      if (this.scrollTimer) return;
      this.scrollTimer = setTimeout(() => {
        this.scrollY = window.scrollY;
        console.log('window.scrollY: ', window.scrollY);
        clearTimeout(this.scrollTimer);
        this.scrollTimer = 0;
      }, 100);
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped lang="scss">
  @import 'src/scss/variables.scss';
  #pagetop {
    background: $color-primary;
    width: 40px;
    height: 40px;
    padding: 0;

    line-height: 40px;
    font-size: 30px;
    color: white;

    position: fixed;
    right: 15px;
    bottom: 30px;
    // transition: .3s;
    // opacity: .7;

    &:hover {
      opacity: .7;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    opacity: 1;
    transition: opacity 1s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transition: opacity 1s ease;
  }
</style>