<template>
  <div class="col-md-6 expectation__bg-opacity">
    <h2 class="title mt-0 text-white">{{ text.large }}</h2>
    <span class="text-white">
      <i class="fas fa-phone-volume shake"></i>
      {{ text.normal }}
    </span>
    <div class="end-left">
      <div class="end-left-icon">
        <i class="fas fa-globe d-inline-block me-2"></i>
      </div>
      <router-link
        :to="language === 'vietnamese' ? '/english' : '/'"
        >{{ text.smallLeftSide }}</router-link
      >
    </div>
    <div class="end-left">
      <div class="end-left-icon">
        <i class="fas fa-file-code d-inline-block me-2"></i>
      </div>
      <a href="https://github.com/ngoctrangnguyen1701/webCV" target="_blank">
        {{ text.smallRightSide }}
      </a>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["language"]),
    text() {
      if (this.language === "vietnamese") {
        return {
          large: "Cám ơn đã xem hồ sơ của tôi ~",
          normal: "Hi vọng có thể nhận được sự liên hệ từ bạn",
          smallLeftSide: "Xem trang này bằng tiếng Anh",
          smallRightSide: "Source code của trang",
        };
      } else {
        return {
          large: "Thank you for watching my profile ~",
          normal: "I am looking forward to receive your contact",
          smallLeftSide: "Watch this page in Vietnamese",
          smallRightSide: "Source code of this page",
        };
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "src/scss/variables.scss";

.expectation__bg-opacity {
  background-image: $color-linear-gradient;
  padding-top: 50px;
  padding-bottom: 50px;
}

span {
  text-align: center;
  color: $color-text-note;
  font-size: 22px;

  display: block;
  margin-bottom: 50px;
}

.shake {
  animation: shake 1s infinite linear;
}
@keyframes shake {
  0% {
    transform: rotateZ(0);
  }
  25% {
    transform: rotateZ(-10deg);
  }
  50% {
    transform: rotateZ(10deg);
  }
  75% {
    transform: rotateZ(-10deg);
  }
  100% {
    transform: rotateZ(0);
  }
}

.end-left {
  display: flex;
  align-items: center;
  justify-content: center;
  .end-left-icon {
    width: 25px;
    text-align: center;
    color: white;
  }
  a, span {
    margin: 0;
    font-size: 14px;
    color: white;
    cursor: pointer;
  }
}
</style>
