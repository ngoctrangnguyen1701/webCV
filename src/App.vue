<template>
  <!-- {{this.$store.state.language}} -->
  <router-view/>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState([
    'language'
  ]),
  watch: {
    language(newLang) {
      // console.log({newLang});

      if(newLang === 'vietnamese'){
        this.$router.push('/')
      }
      else if(newLang === 'english'){
        this.$router.push('/english')
      }    
    }
  }
}
</script>

<style lang="scss">
  @import './scss/global.scss';
</style>