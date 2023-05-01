<template>
  <div class="counter-container">
    <button type="button" class="btn btn-light" @click="removeAmount">-1</button>
    <input type="number" v-model.number.lazy="count">
    <button type="button" class="btn btn-light" @click="addAmount">+1</button>
  </div>
</template>

<script>
export default {
  name: "EsCounter",
  emits: ['update:num'],
  props: {
    num: {
      type: Number,
      required: true
    }
  },

  data(){
    return {
      count: this.num
    }
  },

  // computed: {
  //   count: {
  //     get() {
  //       return this.num;
  //     },
  //     set(value) {
  //       this.$emit('update:count', this.count + 1);
  //     }
  //   }
  // },

  methods: {
    addAmount() {
      this.count++;
      this.$emit('update:num', this.count);
    },
    removeAmount() {
      this.count--;
      this.$emit('update:num', this.count);
    }
  },
}
</script>

<style scoped>




</style>