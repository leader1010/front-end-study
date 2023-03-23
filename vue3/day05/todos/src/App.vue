<template>
    <div id="app">
      <TodoInput @add="onAddNewTask"></TodoInput>
      <TodoList :list="tasklist"></TodoList>
      <TodoButton v-model:active="activeBtnIndex"></TodoButton>
    </div>
</template>

<script>
import TodoList from "./components/todo-list/TodoList.vue";
import TodoInput from "./components/todo-input/TodoInput.vue";
import TodoButton from "./components/todo-button/TodoButton.vue";


export default {
  name: 'App',
  components: {
    TodoList,
    TodoInput,
    TodoButton
  },
  data(){
    return {
      todolist: [
        { id: 1, task: '周一早晨9点开会', done: false },
        { id: 2, task: '周一晚上8点聚餐', done: false },
        { id: 3, task: '准备周三上午的演讲稿', done: true }
      ],
      activeBtnIndex: 0,
    }
  },
  computed: {
    tasklist() {
      switch(this.activeBtnIndex) {
        case 0:
          return this.todolist
        case 1:
          return this.todolist.filter(x => x.done === true)
        case 2:
          return this.todolist.filter(x => x.done !== true)
      }
    }
  },
  props: [],
  methods: {
    onAddNewTask(taskname){
      let task = {id:this.todolist.length + 1, task: taskname, done: false}
      this.todolist.push(task)
    }
  }

}
</script>


<style lang="less" scoped>



</style>
