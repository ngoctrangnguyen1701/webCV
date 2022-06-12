<template>
  <router-view/>
</template>

<script>
export default {
  watch: {
    $route() {
      // console.log(this.$route);
      const lang = this.$route.path.includes('english') ? 'english' : 'vietnamese'
      this.$store.commit('changeLanguage', lang)
    },
  },
}
</script>

<style lang="scss">
  @import './scss/global.scss';
</style>