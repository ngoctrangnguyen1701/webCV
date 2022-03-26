<template>
  <div class="header__avatar mx-auto">
    <div class="header__avatar-small"></div>
  </div>
  <div class="header__name">
    <div class="d-flex justify-content-center">
      <p id="my-name">{{textRender}}</p>
    </div>
    <span>Frontend Developer</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myName: 'Nguyễn Ngọc Trang',
      i: 0,
      textRender: '',
      runEffect: null
    }
  },
  methods: {
    typeWriter() {
      // console.log('typeWriter');
      this.textRender = this.myName.slice(0, this.i + 1)
      this.i += 1
    },
  },
  created() {
    //khi component được tạo ra sẽ chạy method 'typeWriter'
    this.runEffect = setInterval(this.typeWriter, 150)
  },
  watch: {
    textRender(newValue) {
      //lắng nghe textRender thay đổi, khi nào nó bằng với giá trị của 'myName'
      //sẽ clearInterval sau đó khoảng 5s mới cho chạy lại
      //đồng thời set lại giá trị của biến i về 0
      console.log('textRender', newValue);
      if(newValue === this.myName) {
        clearInterval(this.runEffect)
        this.i = 0
        setTimeout(() => {
          this.runEffect = setInterval(this.typeWriter, 100)
        }, 5000)
      }
    }
  }
}
</script>

<style lang='scss' scoped>
  @import './scss/avatarStyle.scss'
</style>