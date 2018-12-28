//https://codesandbox.io/s/o29j95wx9 "Simple Todo App with Vue"

<template>
  <div class="todoList">
    <h1>Notes and tasks</h1>
    <BaseInputText
      v-model="newTodoText"
      placeholder="Input a task or a note and press enter"
      @keydown.enter="addTodo"
    />    
    <tbody v-if="todos.length" is="transition-group" name="notes"> 
        <TodoListItem
          v-for="todo in todos"
          :key="todo.id"
          :todo="todo"
          @remove="removeTodo"
        />              
    </tbody>    
    <p v-else>Nothing to do, input a task or a note and press Enter</p>
  </div>
</template>

<script>
import BaseInputText from "./BaseInputText.vue";
import TodoListItem from "./TodoListItem.vue";

let nextTodoId = 1;

export default {
  components: {
    BaseInputText,
    TodoListItem
  },
  data() {
    return {
      newTodoText: "",
      todos: [       
      ],
    };
  },
  methods: {
    addTodo() {
      const myDate = new Date();
      const dateStamp = myDate.toLocaleDateString('fi-FI');
      let timeStamp = myDate.toLocaleTimeString('fi-FI');
      timeStamp = timeStamp.replace(/\./g,':');      
      const trimmedText = this.newTodoText.trim();
      if (trimmedText) {
        this.todos.push({
          id: nextTodoId++,
          text: trimmedText,
          time: timeStamp,
          date: dateStamp
        });
        this.newTodoText = "";
      }
    },
    removeTodo(idToRemove) {
      this.todos = this.todos.filter(todo => {
        return todo.id !== idToRemove;
      });
    },
  },

  mounted() {       
    nextTodoId++;   
    if (localStorage.getItem('todos')) 
      this.todos = JSON.parse(localStorage.getItem('todos'));
      let maxId = Math.max.apply(Math, this.todos.map(function(o){ return o.id }));
      console.log('MaxId:' + maxId);
      nextTodoId = maxId+1;
      console.log('nextTodoId:' + nextTodoId);      
      if (maxId === -Infinity)
        nextTodoId = 1;
  },

  watch: {
    todos: {
      handler() {        
        localStorage.setItem('todos', JSON.stringify(this.todos));
      },
      deep: true,
    },
  },  
}

</script>