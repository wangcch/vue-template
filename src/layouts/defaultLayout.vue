<template>
  <div class="defalut-layout">
    <h1>vue-template</h1>
    <nav-menu />
    <router-view />
  </div>
</template>

<script>
import navMenu from '@/components/navMenu'
export default {
  name: 'defalut-layout',
  data () {
    return {}
  },

  components: {
    navMenu
  }
}
</script>

<style lang="scss" scoped>
.defalut-layout {
  text-align: center;
}
</style>
