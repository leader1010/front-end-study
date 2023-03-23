<template>
  <div>
    <p> {{count}}*2={{plus}}</p>

  </div>
</template>

<script>
export default {
  name: "MyCounter",
  data(){
    return {
      count: 5
    }
  },
  computed: {
    plus(){
      return this.count * 2
    }
  }
}
</script>

<style scoped>

</style>