<template>
<div class="outer">  
  <span class="formula" style="margin-left: -1.5em;top: 25%;">a</span><!--
  --><span class="formula" style="left: 15%;top: 0;">a</span><!--
  --><span class="formula" style="right: 20%;top: 0;z-index: 2;">b</span>
  <div class="container">    
    <div class="item a"><TodoList /></div>    
    <div class="item b grow-little"><RandomQuote /></div>    
    <div class="item c grow-little"><Clock /></div>
    <div class="item d"><Calculator /></div>    
    <div class="item e"></div>    
    <div class="item f"></div>    
    <div class="item g"></div>    
  </div>  
  <span>Golden ratio: a+b/a = a/b = φ ≈ 1,61803</span>
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

