<template>
  <header>
    <div class="header__bg-opacity">
      <div class="container">
        <div class="text-end header__languages mb-2 rounded ms-auto position-relative">
          <div
            class="d-flex align-items-center justify-content-center py-1"
            @click.stop="showFrameLanguage = !showFrameLanguage"
          >
            <span>Ngôn ngữ:</span>
            <div class="circle-flag"></div>
            <i class="fas fa-caret-down"></i>
          </div>

          <transition name="fade-rotate">
            <div 
              class="frame-language position-absolute"
              v-if="showFrameLanguage"
            >
              <div 
                class="d-flex py-2 flag-item"
                @click="$store.commit('changeLanguge', 'vietnamese')"
              >
                <div class="circle-flag-vietnam"></div>
                <span>Việt Nam</span>
              </div>
              <div
                class="d-flex py-2 flag-item"
                @click="$store.commit('changeLanguge', 'english')"
              >
                <div class="circle-flag-english"></div>
                <span>English</span>
              </div>
            </div>
          </transition>
        </div>

        <Navbar/>

        <div class="header__avatar mx-auto">
          <div class="header__avatar-small"></div>
        </div>
        <div class="header__name">
          <div class="d-flex justify-content-center">
            <p>Nguyễn Ngọc Trang</p>
          </div>
          <span>Frontend Developer</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Navbar from './Navbar.vue'

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      showFrameLanguage: false
    }
  },
  mounted() {
    //XỬ LÍ CLICK OUTSIDE
    const body = document.getElementsByTagName('body')[0]
    body.addEventListener('click', () => {
      this.showFrameLanguage = false
    })
    //vì component này lúc nào cũng render ở trang web,
    //nếu mà component này unmount thì có nghĩa là đã tắt trang web đi rồi
    //vì vậy không cần viết hàm removeListener khi component unmounted
  },
}
</script>

<style scoped lang="scss">
  @import './scss/headerStyle.scss';

  .fade-rotate-enter-from,
  .fade-rotate-leave-to {
    transform: rotateY(180deg);
    opacity: 0;
  }
</style>