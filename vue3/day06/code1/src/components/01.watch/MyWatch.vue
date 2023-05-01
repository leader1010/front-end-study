<template>
  <div>
    <b>watch</b>监听器的用法
    <!--    不一定绑定value-->
    <!--    <input type="text" v-model:value="username" class="form-control">-->
    <input type="text" v-model.trim="info.username">
  </div>
</template>

<script>
import axios from 'axios'


export default {
  name: "MyWatch",
  data() {
    return {
      username: 'sz',
      info: {
        username: 'leader',
        gender: 'male'
      }
    }
  },
  watch: {
    // async username(newVal, oldVal){
    //   console.log(newVal, oldVal)
    //   const {data:res} = await axios.get('https://www.escook.cn/api/finduser/' + newVal)
    //   console.log(res)
    // },

    // username: {
    //   async handler(newVal, oldVal) {
    //  // {}解析response 得到response中的data 并赋值给res
    //     const {data: res} = await axios.get('https://www.escook.cn/api/finduser/' + newVal)
    //     console.log(res)
    //   },
    //   // 立即触发 watch 侦听器
    //   immediate: true
    // }

    // info: {
    //   async handler(newVal) {
    //     const { data: res } = await axios.get('https://www.escook.cn/api/finduser/' + newVal.username)
    //     console.log(res)
    //   },
    //  //监控对象
    //   deep: true,
    // },

    'info.username': {
      async handler(newVal) {
        const {data: res} = await axios.get('https://www.escook.cn/api/finduser/' + newVal)
        console.log(res)
      },
    },

  }
}
</script>

<style scoped>

</style>