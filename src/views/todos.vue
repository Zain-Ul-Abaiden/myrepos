<template>
  <div class="Todos">

    <label>Enter Something: </label>
    <input type="text" v-model="todos" />
    <button @click="pushArray()">Submit</button>
        <todospage :todos="todo"/>
  </div>
</template>

<script>
import todospage from './showtodo.vue';

export default {
    name: 'todopage',
    components: {todospage},
    
  data() {
    return {
      todo: [],
      todos: "",
    };
  },

  methods: {
    pushArray() {
      this.todo.push(this.todos);
      console.log(this.todo);
    },
  },
};
</script>

<style scoped></style>
