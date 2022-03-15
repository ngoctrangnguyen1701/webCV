<template>
  <Header/>
  <About/>
  <Education/>
  <Certificate/>
  <Work/>
  <Skill/>
  <Project/>
  <End/>
  <Footer/>
  <BackToTop/>
  />
</template>

<script setup>
  import Header from './components/Header/Header.vue'
  import About from './components/About/About.vue'
  import Education from './components/Education/Education.vue'
  import Certificate from './components/Certificate/Certificate.vue'
  import Work from './components/Work/Work.vue'
  import Skill from './components/Skill/Skill.vue'
  import Project from './components/Project/Project.vue'
  import End from './components/End/End.vue'
  import Footer from './components/Footer/Footer.vue'
  import BackToTop from './components/BackToTop.vue'
</script>

<style lang="scss">
  @import './scss/global.scss';
</style>