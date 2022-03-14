<template>
  <div
    class="d-flex" 
    v-local-custom="index % 2 ? {side: 'right', noPaddingBottom} : {side: 'left', noPaddingBottom}"
  >
    <div class="col-md-6 education-item">
      <div>
        <div class="bg"></div>
        <div class="col-md-10 position-relative box">
        <!-- nếu không bỏ position relative, element sẽ bị nằm phía dưới cái thằng position absolute -->
          <h5>{{item.location}}</h5>
          <span>{{item.period}}</span>
          <p>{{item.text}}</p>
        </div>
          <div class="education__icon">
            <div class="frame-icon">
              <i :class="item.icon"></i>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item', 'index', 'noPaddingBottom'],
  directives: {
    'local-custom'(el, binding, vnode) {
      // console.log(el);
      // console.log(binding);
      // console.log(vnode);
      
      const educationItem = vnode.el.firstChild //lấy ra được cái thằng div.col-md-6.education-item
      // console.log(educationItem);
      const frame = educationItem.firstChild
      // console.log(frame);
      const icon = frame.querySelector('.education__icon') //tìm cái child node có class là 'education__icon'
      // console.log(icon);
      const bg = frame.querySelector('.bg')

      if(binding.value.side === 'right'){
        el.className = "d-flex flex-row-reverse"
        el.style = "margin-left: -3px"
        educationItem.style.borderLeft = '2px solid #ccc'
        frame.className = 'frame justify-content-end'
        icon.style.left = '-20px'
        bg.className = 'bg right-side'
      }
      else {
        el.className = "d-flex"
        educationItem.style.borderRight = '2px solid #ccc'
        frame.className = 'frame text-md-end'
        icon.style.right = '-20px'
        bg.className = 'bg left-side'
      }

      //cái element cuối cùng sẽ không có padding bo
      if(binding.value.noPaddingBottom) {
        educationItem.style.paddingBottom = '0'
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import './scss/educationItemStyle.scss'
</style>