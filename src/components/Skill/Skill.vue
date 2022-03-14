<template>
  <section id="skill" class="skill">
    <h2 class="title">Kỹ năng</h2>
    <Star/>
    <div class="container">
      <div class="row">
        <div class="skill__circle border-2 border-primary">
          <div>
            <h5>HTML, CSS, SCSS</h5>
            <div class="skill__circle-star">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
              <i class="far fa-star"></i>
            </div>
          </div>
        </div>
        <div class="skill__circle border-2 border-dark">
          <div>
            <h5>Bootstrap, Web responsive, Animation</h5>
            <div class="skill__circle-star">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
            </div>
          </div>
        </div>
        <div class="skill__circle border-2 border-success">
          <div>
            <h5>Javascript, Jquery</h5>
            <div class="skill__circle-star">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
            </div>
          </div>
        </div>
        <div class="skill__circle border-2 border-danger">
          <div>
            <h5>NodeJS</h5>
            <div class="skill__circle-star">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
            </div>
          </div>
        </div>
        <div class="skill__circle border-2 border-info">
          <div>
            <h5>ReactJS, Redux, Saga</h5>
            <div class="skill__circle-star">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
            </div>
          </div>
        </div>
        <div class="skill__circle border-2 border-warning">
          <div>
            <h5>Đọc tài liệu tiếng Anh</h5>
            <div class="skill__circle-star">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Star from './Star.vue'

export default {
  components: {
    Star
  }
}
</script>