<template>
  <section id="about" class="pt-md-5 about">
    <!-- <h2 class="title">Giới thiệu bản thân</h2> -->
    <h2 class="title">
      {{$store.getters.getTitle('about')}}
    </h2>
    <div class="container">
      <div class="row align-items-center">
        <InfoLayout/>
        <Introduction/>
      </div>
    </div>
  </section>
</template>

<script>
import InfoLayout from './InfoLayout.vue'
import Introduction from './Introduction.vue'

export default {
  components: {
    InfoLayout,
    Introduction
  },
}
</script>