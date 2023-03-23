<template>
  <MyHeader></MyHeader>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MyHeader from "./components/06.MyHeader/MyHeader.vue";

export default {
  name: 'App',
  components: {
    HelloWorld,
    MyHeader
  }
}
</script>
