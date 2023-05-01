<template>
  <router-link to="/movie">电影</router-link>
  <router-link to="/about">关于</router-link>
  <router-link to="/home">首页</router-link>

  <router-view></router-view>


</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>
