<template>
  <footer>
    <h2 class="title mb-0">Cám ơn đã xem hồ sơ của tôi ~</h2>
    <span>
      <i class="fas fa-phone-volume shake"></i> Hi vọng có thể nhận được sự liên hệ từ
      bạn
    </span>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <i class="fas fa-globe"></i>
          <a
            href="https://ngoctrangnguyen1701.github.io/portfolio-english/"
            target="_blank"
          >
            Watch this page in English
          </a>
        </div>
        <div class="col-md-6 text-md-end">
          <i class="fas fa-file-code"></i>
          <a
            href="https://github.com/ngoctrangnguyen1701/portfolio"
            target="_blank"
          >
            Source code of this page
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

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
