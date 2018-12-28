//https://github.com/CarloseQuirozv/vue-calculator
<script>
export default {
  data(){
    return {
      calculator: {
        previous: null,
        current: '',
        operator: null,
        operatorClicked: false,
        sign: '',
        end: false
      }
    }
  },
  methods: {
    clearAll() {
      this.calculator.current = ''
    },
    sign() {
      if(this.calculator.current != '')
        this.calculator.current = this.calculator.current.charAt(0) === '-' ?
          this.calculator.current.slice(1) : `-${this.calculator.current}`
    },
    percent() {
      this.calculator.current = `${parseFloat(this.calculator.current) / 100}`
    },
    append(number) {
      if(number === '0' && this.calculator.current === '')
        this.calculator.current = ''
      else {
        if(this.calculator.operatorClicked) {
          this.calculator.current = ''
          this.calculator.operatorClicked = false
        }
        this.calculator.current = `${this.calculator.current}${number}`
      }
    },
    dot() {
      if (this.calculator.current.indexOf('.') === -1)
        this.append('.')
    },
    setPrevious() {
      this.calculator.previous = this.calculator.current
      this.calculator.operatorClicked = true;
    },
    divide() {
      this.calculator.operator = (a, b) => a / b
      this.setPrevious()
      this.calculator.sign = '÷'
    },
    times() {
      this.calculator.operator = (a, b) => a * b
      this.setPrevious()
      this.calculator.sign = 'x'
    },
    minus() {
      this.calculator.operator = (a, b) => a - b
      this.setPrevious()
      this.calculator.sign = '-'
    },
    add() {
      this.calculator.operator = (a, b) => a + b
      this.setPrevious()
      this.calculator.sign = '+'
    },
    equal() {
      this.calculator.current = this.calculator.operator(
        parseFloat(this.calculator.previous),
        parseFloat(this.calculator.current)
      )
      this.calculator.previous = null
      this.calculator.sign = ''
      this.calculator.end = true
    },
    del() {
      if(this.calculator.current)
        this.calculator.current = this.calculator.current.slice(0, -1)
    },
    sqrt() {
      if(parseFloat(this.calculator.current) >= 0)
        this.calculator.current = Math.sqrt(parseFloat(this.calculator.current))
    },
    pow() {
      this.calculator.current = Math.pow(parseFloat(this.calculator.current),2)
    },
    inverse() {
      if(parseFloat(this.calculator.current) > 0)
        this.calculator.current = 1 / parseFloat(this.calculator.current)
    }
  }
}
</script>

<template>
  <div>
    <div class="calculator">
      <div class="prev">{{ calculator.previous || '' }} {{ calculator.sign }}</div>
      <div class="display">{{ calculator.current || '0' }}</div>
      <div @click="percent" class="btn operator">%</div>
      <div @click="sqrt" class="btn operator">&#x221a;</div>
      <div @click="pow" class="btn operator">x²</div>
      <div @click="inverse" class="btn operator">1/x</div>
      <div @click="clearAll" class="btn operator2 c">C</div>
      <div @click="del" class="btn operator2">🔙</div>
      <div @click="divide" class="btn operator2">÷</div>
      <div @click="append('7')" class="btn">7</div>
      <div @click="append('8')" class="btn">8</div>
      <div @click="append('9')" class="btn">9</div>
      <div @click="times" class="btn operator2">x</div>
      <div @click="append('4')" class="btn">4</div>
      <div @click="append('5')" class="btn">5</div>
      <div @click="append('6')" class="btn">6</div>
      <div @click="minus" class="btn operator2">-</div>
      <div @click="append('1')" class="btn">1</div>
      <div @click="append('2')" class="btn">2</div>
      <div @click="append('3')" class="btn">3</div>
      <div @click="add" class="btn operator2">+</div>
      <div @click="sign" class="btn">±</div>
      <div @click="append('0')" class="btn">0</div>
      <div @click="dot" class="btn">.</div>
      <div @click="equal" class="btn operator2">=</div>
    </div>
    <br />
    <div>
        <input type="text" class="input"
          v-on:keyup.96="append('0')"           
          v-on:keyup.97="append('1')" 
          v-on:keyup.98="append('2')" 
          v-on:keyup.99="append('3')" 
          v-on:keyup.100="append('4')" 
          v-on:keyup.101="append('5')" 
          v-on:keyup.102="append('6')" 
          v-on:keyup.103="append('7')" 
          v-on:keyup.104="append('8')" 
          v-on:keyup.105="append('9')" 
          v-on:keyup.106="times" 
          v-on:keyup.107="add" 
          v-on:keyup.109="minus" 
          v-on:keyup.111="divide" 
          v-on:keyup.191="divide"       
          v-on:keyup.enter="equal"           
          placeholder="Input a calculation" />
    </div>    
  </div>
</template>