//https://codesandbox.io/s/o29j95wx9 "Simple Todo App with Vue"

<template>  
  <tr class="spaceUnder">  
    <td>{{ todo.text }}<br /><em><small>Added: {{ todo.time }} {{ todo.date }}</small></em></td><td> <button class="button" @click="$emit('remove', todo.id);">X</button></td>
  </tr>  
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
};
</script>