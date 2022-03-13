<template>
  <div class="col-md-6 frame">
    <div class="box">
      <div class="about__text mt-5 mt-md-0">
        <h3>
          {{title}}
          <i class="fas fa-hand-peace"></i>
        </h3>
        <p v-html="text" class="mb-0"></p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title:'Xin chào',
      text: `Trong vòng 1 năm trở lại đây, tôi có cơ hội tìm hiểu về lĩnh vực
        IT liên quan đến web frontend.<br />
        Qua quá trình tự thực hành các dự án giả lập, cảm thấy vui với
        việc coding và nhìn thấy thành quả do mình làm ra, nên mong muốn
        có thể tham gia vào dự án thực tiễn ở công ty, được sự hỗ trợ từ
        phía đồng nghiệp, qua đó có thêm sự hiểu biết, kỹ năng cũng như
        kinh nghiệm trong mảng frontend này để có thể trở thành một lập
        trình viên frontend chuyên nghiệp.`
    }
  }
}
</script>

<style scoped lang="scss">
  .frame {
    padding: 3px;
    background-image: linear-gradient(to right,rgba(255,62,28,.5) ,rgba(255,62,28,.63) ,#ff8c00 );
    background-repeat: no-repeat;
    background-size: 0 0;
    background-position: right bottom;

    transition: background-size 1s;

    &:hover {
      box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
      border-radius: 0.25rem;
      background-size: 100% 100%;
      background-position: left top;
      transition: background-size 1s;
    }

    .box {
      background: white;
      padding: 12px;
    }

    i {
      font-size: 16px;
      display: inline-block;
      margin-left: -10px;
    }
  }

  .about__text {
    text-align: justify;
  }
</style>
