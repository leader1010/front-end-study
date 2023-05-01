<template>
  <div>

    <h1>App 根组件</h1>
    <hr>
    <!--    利用v-bind 实现父向子组件传递值  子组件使用props接收-->
    <!--    <my-son :num="count"></my-son>-->
    <!--    <button @click="count += 1">+1</button>-->
    <!--    子向父组件传递 在子组件emits中声明自定义事件 父组件监听自定义事件，并在回调函数中接收值-->
    <!-- 3. 以标签形式使用子组件 -->
    <!-- <my-son :num="count" @numchange="getNum"></my-son> -->
    <!--    使用v-model 同时子组件使用emits ['update:props'] 可以不监听自定义事件 -->
    <my-son v-model:num="count"></my-son>
  </div>
</template>

<script>
import MySon from "./Son.vue";


export default {
  name: "App",
  components: {MySon},
  data() {
    return {
      count: 0
    }
  },
  // methods: {
  //   getNum(num) {
  //     this.count = num
  //   }
  // },
}
</script>

<style scoped>

</style>