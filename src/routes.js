// import Home from 'src/pages/Home.vue'
// import Header form 'src/components/Header/Header.vue';
import * as VueRouter from 'vue-router'
import Home from './pages/Home.vue'
// import Page404 from 'src/pages/Page404.vue'
import Page404 from './pages/Page404.vue'
/* file nằm trong 1 cấp với thư mục 'src' sẽ thực thi được cú pháp 'src/. */

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/english',
    component: Home,
  },
  {
    path: '/404',
    component: Page404,
  },
  {
    path: "/:catchAll(.*)", // Unrecognized path automatically matches 404
    redirect: '/404',
  },
  // {
  //   path: '*',
  //   component: Page404,
  // }, --> cách ghi này không hoạt động, xem link dưới để giải quyết
  // https://programmerah.com/solved-vue3-configuration-routing-error-catch-all-routes-must-now-be-defined-using-a-param-with-a-custom-regexp-32886/
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // console.log(savedPosition); 
    //savedPosition: nơi cái điểm mà thanh scroll dừng lại khi load lại trang web
    //nó là object chứa vị trí tọa độ {left: ..., top: ...} 
    if(savedPosition) {
      return savedPosition
      //nếu có thì sẽ cuộn lại đúng cái vị trí load lại trang
    }
    else if(to.hash) {
      //nếu có to.hash
      // console.log(to); --> to: là cái thông tin chứa trên thanh url
      // console.log(to.hash); --> hash: là cái text có chứa dấu #
      return {
        // selector: to.hash, --> cái này với vue3 hoặc là vue-router 4 không chạy
        el: to.hash,
        behavior: 'smooth',
      }
      //nếu có hash thì sẽ cuộn đến vị trí có dấu # đó, cái mà đặt id="#.."
    }
    else {
      return {x: 0, y: 0};
      //còn không có gì hết thì không có cuộn, tương đương trả lại vị trí {x: 0, y: 0}
    }
  }
})

export default router


// https://www.youtube.com/watch?v=6hULbjFVt6Q
// https://router.vuejs.org/guide/advanced/scroll-behavior.html
//cuộn tới chỗ elemnent trong 1 trang (scroll to anchor)
//kết hợp với cả vue-router

/* SCROOL TO SPECIFIC ANCHOR USE ROUTER-LINK 
Step 1: đặt id cho cái element mà muốn cuộn tới
  <h1 id="heading2">heading 2</h1>
Step 2: tạo router-link dẫn cái path và hash tới chỗ element
  <router-link
    :to="{path: '/post', hash: '#heading2'}" or to="/post#heading2"
  >Scroll heading 2</router-link>
* có 2 cách ghi đối với thuộc tính 'to'
** nếu sử dụng hash phải có dấu # phía trước
Step 3: đặt router-view ở chỗ sẽ render ra element
Step 4: tạo cái gọi là 'scroll behavior' (hành vi cuộn) trong Vue
trong file chỗ tạo router thêm methods 'scrollBehavior' với các value sau
  ....
*/