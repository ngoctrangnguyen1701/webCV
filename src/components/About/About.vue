<template>
  <section id="about" class="mt-5 pt-md-5 about">
    <h2 class="title">Giới thiệu bản thân</h2>
    <div class="container">
      <div class="row">
        <div class="col-md-6 mx-auto">
          <div class="row">
            <div class="col-2">
              <i class="far fa-calendar-alt"></i>
            </div>
            <div class="col-10">24/12/1993</div>
          </div>
          <div class="row">
            <div class="col-2">
              <i class="fas fa-user"></i>
            </div>
            <div class="col-10">Nữ</div>
          </div>
          <div class="row">
            <div class="col-2">
              <i class="fas fa-phone"></i>
            </div>
            <div class="col-10">0364034522</div>
          </div>
          <div class="row">
            <div class="col-2">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="col-10">ngoctrangnguyen1701@gmail.com</div>
          </div>
          <div class="row">
            <div class="col-2">
              <i class="fas fa-home"></i>
            </div>
            <div class="col-10">52 lô D Hưng Phú F10, Q8, TP.HCM</div>
          </div>
          <div class="row">
            <div class="col-2">
              <i class="fas fa-share-alt"></i>
            </div>
            <div class="col-10">
              <a
                href="https://ngoctrangnguyen1701.github.io/portfolio-english/"
                target="_blank"
                >Watch this page in English</a
              >
            </div>
          </div>
          <div class="row">
            <div class="col-2">
              <img src="images/icon-zalo.svg" class="about__zalo" />
            </div>
            <div class="col-10">0364034522</div>
          </div>
          <div class="row">
            <div class="col-2">
              <i class="fab fa-github"></i>
            </div>
            <div class="col-10">
              <a
                href="https://github.com/ngoctrangnguyen1701?tab=repositories"
                target="_blank"
                >https://github.com/ngoctrangnguyen1701?tab=repositories</a
              >
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="about__text mt-5 mt-md-0">
            <h3>Xin chào!</h3>
            <p>
              Trong vòng 1 năm trở lại đây, tôi có cơ hội tìm hiểu về lĩnh vực
              IT liên quan đến web frontend.<br />
              Qua quá trình tự thực hành các dự án giả lập, cảm thấy vui với
              việc coding và nhìn thấy thành quả do mình làm ra, nên mong muốn
              có thể tham gia vào dự án thực tiễn ở công ty, được sự hỗ trợ từ
              phía đồng nghiệp, qua đó có thêm sự hiểu biết, kỹ năng cũng như
              kinh nghiệm trong mảng frontend này để có thể trở thành một lập
              trình viên frontend chuyên nghiệp.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import infoList from './infoList'

export default {
  data() {
    return {
      infoList,
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../scss/global.scss';

.about {
  color: $color-text;

  .row {
    margin-bottom: 10px;
  }
  .col-2 {
    text-align: right;
  }
  &__zalo {
    width: 20px;
    height: 20px;
  }
  &__text {
    text-align: justify;
  }
}
</style>
