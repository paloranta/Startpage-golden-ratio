//https://codesandbox.io/s/o29j95wx9 "Simple Todo App with Vue"

<template>
  <div class="todoList">    
    <h1><span style="text-shadow: rgb(17, 17, 17) 1px 1px 1px;);">N</span><!--
    --><span style="text-shadow: rgb(17, 17, 17) 2px 2px 2px;">o</span><!--
    --><span style="text-shadow: rgb(17, 17, 17) 3px 3px 3px;">t</span><!--
    --><span style="text-shadow: rgb(17, 17, 17) 4px 4px 4px;">e</span><!--
    --><span style="text-shadow: rgb(17, 17, 17) 5px 5px 5px;">s</span><!--
    --><span style="text-shadow: rgb(17, 17, 17) 6px 6px 6px;"> a</span><!--
    --><span style="text-shadow: rgb(17, 17, 17) 7px 7px 7px;">n</span><!--
    --><span style="text-shadow: rgb(17, 17, 17) 8px 8px 8px;">d</span><!--
    --><span style="text-shadow: rgb(17, 17, 17) 9px 9px 9px;"> t</span><!--
    --><span style="text-shadow: rgb(17, 17, 17) 10px 10px 10px;">a</span><!--
    --><span style="text-shadow: rgb(17, 17, 17) 11px 11px 11px;">s</span><!--
    --><span style="text-shadow: rgb(17, 17, 17) 12px 12px 12px;">k</span><!--
    --><span style="text-shadow: rgb(17, 17, 17) 13px 13px 13px;">s</span>
    </h1>

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