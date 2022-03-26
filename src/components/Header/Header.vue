<template>
  <header>
    <div class="header__bg-opacity">
      <div class="container">
        <div class="text-end header__languages mb-2 rounded ms-auto position-relative">
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
        <Avatar/>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
import Navbar from './Navbar.vue'
import Avatar from './Avatar.vue'

// let i = 0
// function typeWriter(text) {
//   if(i < text.length) {
//     document.getElementById('my-name').innerHTML += text.charAt(i)
//     i++
//     setTimeout(typeWriter, 100)
//   }
//   else {
//     i = 0
//   }
// }

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

    //EFFECT TYPEWRITER
    //https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_typewriter
    // typeWriter(this.myName)
    // setTimeout(() => {
    //   // let i = 0
    //   if(this.i < this.myName.length) {
    //     document.getElementById('my-name').innerHTML += this.myName.charAt(this.i)
    //     this.i += this.i
    //   }
    // }, 100)
  },
  methods: {
    // typeWriter() {
    //   let i = 0
    //   if(i < this.myName.length) {
    //     document.getElementById('my-name').innerHTML += this.myName.charAt(i)
    //     i++
    //     setTimeout(this.typeWriter(), 100)
    //   }
    // }
  }
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