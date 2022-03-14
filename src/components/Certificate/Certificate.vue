<template>
  <section id="certificate" class="certificate pb-5">
    <h2 class="title">Chứng chỉ</h2>
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
            v-for="(item, index) in list"
            :key="index"
            :item="item"
            :index="index"
            :isFirstItem="index === 0"
            @positionHover="positionHover"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import certificateList from './certificateList'
import CertificateItem from './CertificateItem.vue'

export default {
  data() {
    return {
      list: certificateList.vietnamese,
    }
  },
  components: {
    CertificateItem,
  },
  methods: {
    positionHover(obj) {
      // console.log('positionHover', obj);
      const {height, index} = obj
      let translateY = 0
      const items = document.getElementsByClassName('certificate-item')
      // console.log({items});
      for(let i = 0; i < index; i++){
        // console.log(items[i])
        // console.log(items[i].offsetHeight)
        translateY += items[i].offsetHeight 
        //offsetHeight để lấy cái giá trị thuộc tính heigh của element
      }

      translateY = translateY + (24 * index)
      /* 24 chính là cái margin-top: 24px, 
      index ở vị trí thứ mấy thì cộng thêm mấy cái index tương ứng */
      // console.log({translateY});

      const bg = document.getElementsByClassName('certificate__bg-item')[0]
      // console.log(bg);
      bg.style.height = `${height}px`
      bg.style.transform = `translateY(${translateY}px)`
    },
    exitHover() {
      // console.log('exitHover');
      const bg = document.getElementsByClassName('certificate__bg-item')[0]
      bg.style.height = 0
    }
  }
}
</script>

<style scoped lang="scss">
  @import 'src/scss/variables.scss';

  .certificate__img {
    height: 100%;
    background: {
      image: url('/images/certificate-image.jpg');
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