<template>
  <router-link
    tag="a"
    to="/test"
  >Test</router-link>
  <div>
    <router-link
      tag="a"
      to="/test#heading2"
    >Test heading 2</router-link>
    <router-view/>

  </div>
</template>

<style lang="scss">
  @import './scss/global.scss';
</style>