<template>
  <div>
    <router-link to="/about/tab1">tab1</router-link>
    <router-link to="/about/tab2">tab2</router-link>
    <router-view></router-view>
  </div>

</template>

<script>
export default {
  name: "MyAbout"
}
</script>

<style scoped lang="less">

</style>