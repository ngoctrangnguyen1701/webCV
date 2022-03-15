<template>
  <section id="skill" class="skill">
    <h2 class="title">Kỹ năng</h2>
    <div class="container">
      <div class="row justify-content-center" id="sortable">
        <SkillItem
          v-for="(item, index) in list"
          :key="index"
          :item="item"
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
      list: skillList.vietnamese
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
        console.log('onUpdate', event);
      }
    })
  }
}
</script>