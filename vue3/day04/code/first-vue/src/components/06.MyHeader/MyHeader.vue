<template>
    <div class="header">
    {{title}}
    </div>
</template>

<script>
export default {
  name: "MyHeader",
  data(){
    return {
      title: ''
    }
  },

  // props: ['title', 'bgcolor', 'color']
}
</script>

<style scoped>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 45px;
    background-color: pink;
    color: blue;
    z-index: 999;


  }

</style>