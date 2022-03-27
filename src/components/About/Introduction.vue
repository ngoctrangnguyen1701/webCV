<template>
  <div class="col-md-6 frame">
    <div class="box">
      <div class="about__text mt-5 mt-md-0">
        <h3>
          {{introduction[language].title}}
          <i class="fas fa-hand-peace"></i>
        </h3>
        <p v-html="introduction[language].text" class="mb-0"></p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      introduction: {
        vietnamese: {
          title:'Xin chào',
          text: `Trong vòng 1 năm trở lại đây, tôi có cơ hội tìm hiểu về lĩnh vực
            IT liên quan đến web frontend.<br />
            Qua quá trình tự thực hành các dự án giả lập, cảm thấy vui với
            việc coding và nhìn thấy thành quả do mình làm ra, nên mong muốn
            có thể tham gia vào dự án thực tiễn ở công ty, được sự hỗ trợ từ
            phía đồng nghiệp, qua đó có thêm sự hiểu biết, kỹ năng cũng như
            kinh nghiệm trong mảng frontend này để có thể trở thành một lập
            trình viên frontend chuyên nghiệp.`
        },
        english: {
          title: 'Hello there!',
          text: `In the past 1 year, I have had the opportunity to learn about 
            the IT field related to the web frontend.<br/>
            Through the process of practicing fake projects, 
            feeling happy with coding and seeing the results I made,
            so I want to be able to join in real projects at the company,
            with support from the colleagues thereby gaining more knowledge,
            skills and experience in this frontend field to be able to 
            become a professional frontend developer.`
        }
      }
    }
  },
  computed: {
    ...mapState(['language']),
  }
}
</script>

<style scoped lang="scss">
  @import './scss/introductionStyle.scss'
</style>