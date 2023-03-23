<template>
  <ul class="list-group">
    <li class="list-group-item" v-for="item in list" key="item.id">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" :id="item.id" v-model="item.done">
        <label class="form-check-label" :class="item.done? 'delete':''" :for="item.id">
          {{item.task}}
        </label>
        <span class="badge badge-pill badge-success" v-if="item.done">完成</span>
        <span class="badge badge-pill badge-warning" v-else>未完成</span>
      </div>
    </li>
  </ul>

</template>

<script>
export default {
  name: "TodoList",
  props: {
    list: {
      type: Array,
      required: true,
      default: []
    }
  }
}
</script>

<style scoped>
  .list-group {
    width: 400px;
  }

  .badge {
    float: right;
  }

  .delete {
    text-decoration: line-through;
    color: gray;
    font-style: italic;
  }
</style>