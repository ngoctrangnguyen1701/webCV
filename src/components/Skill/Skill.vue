<template>
  <section id="skill" class="skill">
    <h2 class="title">Kỹ năng</h2>
    <p :style="isHovering && 'opacity: 1'">
      Nhấn giữ chuột trái và kéo để thay đổi vị trí
    </p>
    <div class="container">
      <div class="row justify-content-center" id="sortable">
        <SkillItem
          v-for="(item, index) in list"
          :key="index"
          :item="item"
          v-model:isHovering="isHovering"
        />
      </div>
    </div>
  </section>
</template>

<script>
import skillList from './skillList';
import SkillItem from './SkillItem.vue';
import Sortable from 'sortablejs';
//https://www.npmjs.com/package/sortablejs

export default {
  data() {
    return {
      list: skillList.vietnamese,
      isHovering: false,
    }
  },
  components: {
    SkillItem,
  },
  mounted() {
    //sau khi được gắn vào DOM sẽ chạy các code dưới đây
    const el = document.getElementById('sortable')
    const sortable = new Sortable(el, {
      animation: 350,
      onUpdate(event) {
        // console.log('onUpdate', event);
      }
    })
  }
}
</script>

<style scoped>
  p {
    margin-bottom: 0;
    margin-top: -15px;

    text-align: center;
    font-size: 14px;
    font-style: italic;
    font-family: Arial, Helvetica, sans-serif;
    color: brown;

    opacity: 0;
    transition: .5s;
  }
</style>