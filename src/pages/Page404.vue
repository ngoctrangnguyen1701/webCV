<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="error-template">
          <h1>Oops!</h1>
          <!-- <h2>404 Not Found</h2> -->
          <h2>Trang không tìm thấy</h2>
          <!-- <div class="error-details">
            Sorry, an error has occured, Requested page not found!
          </div> -->
          <div class="error-details">
            Xin lỗi, đã có lỗi xảy ra. Trang được yêu cầu không tìm thấy!
          </div>
          <div class="error-actions">
            <router-link
              tag="a"
              class="btn btn-warning btn-lg"
              to="/"
            >
              <i class="fas fa-house"></i>
              Trở về trang chủ
            </router-link>
            <!-- <a
              href="http://www.jquery2dotnet.com"
              class="btn btn-primary btn-lg"
              ><span class="glyphicon glyphicon-home"></span> Take Me Home 
            </a> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.error-template {
  padding: 40px 15px;
  text-align: center;
}
.error-actions {
  margin-top: 15px;
  margin-bottom: 15px;
}
.error-actions .btn {
  margin-right: 10px;
}
</style>
