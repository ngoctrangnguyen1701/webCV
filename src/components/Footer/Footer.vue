<template>
  <footer>
    <h2 class="title mb-0">{{text.large}}</h2>
    <span>
      <i class="fas fa-phone-volume shake"></i>
      {{text.normal}}
    </span>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <i class="fas fa-globe d-inline-block me-2"></i>
          <router-link 
            :to="language === 'vietnamese' ? '/english' : '/'"
            @click="toTop"
          >{{text.smallLeftSide}}</router-link>
        </div>
        <div class="col-md-6 text-md-end">
          <i class="fas fa-file-code d-inline-block me-2"></i>
          <a
            href="https://github.com/ngoctrangnguyen1701/webCV"
            target="_blank"
          >
            {{text.smallRightSide}}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['language']),
    text() {
      if(this.language === 'vietnamese') {
        return {
          large: 'Cám ơn đã xem hồ sơ của tôi ~',
          normal: 'Hi vọng có thể nhận được sự liên hệ từ bạn',
          smallLeftSide: 'Xem trang này bằng tiếng Anh',
          smallRightSide: 'Source code của trang',
        }
      }
      else {
        return {
          large: 'Thank you for watching my profile ~',
          normal: 'I am looking forward to receive your contact',
          smallLeftSide: 'Watch this page in Vietnamese',
          smallRightSide: 'Source code of this page',
        }
      }
    }
  },
  methods: {
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  }
}
</script>

<style scoped lang="scss">
@import 'src/scss/variables.scss';

footer {
  span {
    text-align: center;
    color: $color-text-note;
    font-size: 22px;

    display: block;
    margin-bottom: 50px;
  }

  a {
    color: $color-text;
  }

  .shake {
    animation: shake 1s infinite linear;
  }
  @keyframes shake {
    0%{transform: rotateZ(0)}
    25%{transform: rotateZ(-10deg)}
    50%{transform: rotateZ(10deg)}
    75%{transform: rotateZ(-10deg)}
    100%{transform: rotateZ(0)}
  }
}
</style>
