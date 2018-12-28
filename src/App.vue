<template>
  <div class="container">
    <div class="item a"><TodoList /></div>
    <div class="item b"><RandomQuote /></div>
    <div class="item c"><Clock /></div>
    <div class="item d"><Calculator /></div>    
  </div>
</template>

<script>
import TodoList from "./components/TodoList";
import Clock from "./components/Clock";
import RandomQuote from "./components/RandomQuote";
import Calculator from "./components/Calculator";

export default {
  name: "App",
  components: {
    TodoList,
    Clock,
    RandomQuote,
    Calculator
  }
};
</script>

<style lang="scss">
@import './assets/mycss.scss';
</style>

