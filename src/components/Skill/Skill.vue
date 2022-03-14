<template>
  <section id="skill" class="skill">
    <h2 class="title">Kỹ năng</h2>
    <div class="container">
      <div class="row justify-content-center">
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
import skillList from './skillList'
import SkillItem from './SkillItem.vue'

export default {
  data() {
    return {
      list: skillList.vietnamese
    }
  },
  components: {
    SkillItem,
  }
}
</script>