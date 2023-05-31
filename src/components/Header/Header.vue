<template>
  <header>
    <div class="header__bg-opacity">
      <div class="container">
        <div class="header-top">
          <div class="search-job" :class="!isJobSearching && 'off'">
            <div class="search-job-text">{{$t('status-of-job-searching')}}: </div>
              <div class="on-off text-uppercase">
                {{isJobSearching ? $t('on') : $t('off')}}
              </div>
            </div>
          <div class="header__languages rounded position-relative">
            <div
              class="d-flex align-items-center justify-content-center py-1"
              @click.stop="showFrameLanguage = !showFrameLanguage"
            >
              <span>{{$t('language')}}</span>
              <div
                :class="language === 'vietnamese' ? 'circle-flag-vietnam' : 'circle-flag-english'"
              ></div>
              <i class="fas fa-caret-down"></i>
            </div>

            <transition name="fade-rotate">
              <div 
                class="frame-language position-absolute"
                v-if="showFrameLanguage"
              >
                <router-link
                  to="/"
                  class="d-flex py-2 flag-item"
                >
                  <div class="circle-flag-vietnam"></div>
                  <span>Tiếng Việt</span>
                </router-link>
                <router-link
                  to="/english"
                  class="d-flex py-2 flag-item"
                >
                  <div class="circle-flag-english"></div>
                  <span>English</span>
                </router-link>
              </div>
            </transition>
          </div>
        </div>

        <Navbar/>
        <Avatar/>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
import Navbar from './Navbar.vue'
import Avatar from './Avatar.vue'

export default {
  components: {
    Navbar,
    Avatar,
  },
  data() {
    return {
      showFrameLanguage: false,
      isJobSearching: true,
    }
  },
  computed: mapState(['language']),
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
    transform: rotateY(360deg);
    opacity: 0;
  }
</style>