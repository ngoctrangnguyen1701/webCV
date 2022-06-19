<template>
  <section id="certificate" class="certificate pb-5">
    <h2 class="title">{{$store.getters.getTitle('certificate')}}</h2>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="certificate__img"></div>
        </div>
        <div
          class="col-md-6 position-relative" 
          @mouseleave="exitHover"
        >
          <div class="certificate__bg-item"></div>
          <CertificateItem
            v-for="(item, index) in $store.getters.getList('certificateList')"
            :key="index"
            :item="item"
            :isFirstItem="index === 0"
            @positionHover="positionHover"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CertificateItem from './CertificateItem.vue'

export default {
  data() {
    return {
      bgMove: ''
    }
  },
  components: {
    CertificateItem,
  },
  mounted() {
    //khi đã được gắn vào DOM
    this.bgMove = document.getElementsByClassName('certificate__bg-item')[0].style
  },
  methods: {
    positionHover(event) {
      //offsetHeight --> lấy cái height của item hover
      //offsetTop --> khoảng cách từ trên xuống của element so với parent element
      this.bgMove.height = `${event.target.offsetHeight}px`
      this.bgMove.transform = `translateY(${event.target.offsetTop}px)`
    },
    exitHover() {
      this.bgMove.height = 0
    }
  }
}
</script>

<style scoped lang="scss">
  @import 'src/scss/variables.scss';

  .certificate__img {
    height: 100%;
    background: {
      image: url('/src/assets/images/certificate-image.jpg');
      position: bottom;
      size: cover;
    }
  }
  .certificate__bg-item {
    width: 100%;
    // height: 120px; /* thay đổi */
    background-image: $color-linear-gradient;
    position: absolute;
    transition: .5s;
    // transform: translateY(168px); /* thay đổi heigth của element trước + margin-top 24px*/
    //cái bg chạy translateY này sẽ thay đổi 2 thuộc tính đó là height và translateY
  }
</style>