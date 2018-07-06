<template>
  <div class="defalut-layout">
    <h1>vue-template</h1>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'defalut-layout',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.defalut-layout {
  text-align: center;
}
</style>
