<template>
  <h3>轮播图组件</h3>
</template>

<script>
    export default {
      name: 'MySwiper',
      data(){
        return {
          username: 'lead',
          count: 1
        }
      },

      methods: {
        addCount() {
          this.count ++
        }
      }

    }
</script>

