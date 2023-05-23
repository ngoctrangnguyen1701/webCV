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
          text: `Trong hơn 1 năm qua, tôi đã không ngừng học hỏi nâng cao kỹ năng, tích lũy kinh nghiệm của bản thân qua từng dự án thực tế được may mắn tham gia cùng với các đồng nghiệp trong công ty.
                </br>
                Tôi muốn bản thân mình có thể được học hỏi, được nâng cấp nhiều hơn qua các môi trường chuyên nghiệp cũng như theo quy mô của dự án đòi hỏi nhiều hơn, qua đó gia tăng thêm sự hiểu biết, kỹ năng để có thể trở thành một developer frontend chuyên nghiệp.`
        },
        english: {
          title: 'Hello there!',
          text: `Over 1 year, I haven't stopped learning to up my skills, collect experience through each project that I was lucky when I could joined with the colleagues in company.<br/>
            I want be upgraded more through professional environment, as well as scale of project, thereby up my knowledge and skills to be able to become a professional frontend developer.`
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