<template>
  <div>LifeCycle 组件ll --- {{ num }}</div>
  <button @click="num+=1">+1</button>
</template>

<script>
export default {
  name: "MySon",
  data() {

  },
  props: {
    num: {
      type: Number
    }
  },
  emits: ['update:num'],
  // emits: ['numchange'],
  methods: {
    add() {
      // this.$emit('numchange', this.num + 1)
      this.$emit('update:num', this.num + 1)
    },
  },

}
</script>

<style scoped>

</style>