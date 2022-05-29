<template>
  <header>
    <div class="header__bg-opacity">
      <div class="container">
        <div class="header-top">
          <!-- <div class="search-job">
            <div class="search-job-text">Status of job searching: </div>
            <div class="on-off">ON</div>
          </div> -->
          <div class="search-job off">
            <div class="search-job-text">Status of job searching: </div>
            <div class="on-off">OFF</div>
          </div>
          <div class="header__languages rounded position-relative">
            <div
              class="d-flex align-items-center justify-content-center py-1"
              @click.stop="showFrameLanguage = !showFrameLanguage"
            >
              <span>{{language === 'vietnamese' ? 'Ngôn ngữ:' : 'Language: '}}</span>
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
                  tag="div"
                  to="/"
                  class="d-flex py-2 flag-item"
                >
                  <div class="circle-flag-vietnam"></div>
                  <span>Việt Nam</span>
                </router-link>
                <router-link
                  tag="div"
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