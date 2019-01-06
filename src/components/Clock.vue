//https://codesandbox.io/s/wk0n26pko8 "Vue clock"
<template>
  <div class="clock grow">
    <h1 style="font-weight: 700;">
      <span style="text-shadow: rgb(17, 17, 17) 13px 13px 13px;font-weight: 700;">{{ hour[0] }}</span><!--
   --><span style="text-shadow: rgb(17, 17, 17) 12px 12px 12px;font-weight: 700;">{{ hour[1] }}</span><!--
   --><span style="text-shadow: rgb(17, 17, 17) 11px 11px 11px;font-weight: 300;">:{{ minute }}:</span><!--   
   --><span style="text-shadow: rgb(17, 17, 17) 9px 9px 9px;font-weight: 300;">{{ second[0] }}</span><!--   
   --><span style="text-shadow: rgb(17, 17, 17) 8px 8px 8px;font-weight: 300;">{{ second[1] }}</span>   
    </h1>
    <span style="text-shadow: rgb(17, 17, 17) 6px 6px 6px;font-weight: 300;">{{ date }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hour: null,
      minute: null,
      second: null,
      amPm: null,
      date: null
    };
  },
  methods: {
    updateClock() {
      const myDate = new Date();
      const time = myDate.toLocaleTimeString("fr-FR");
      const pvm = myDate.toLocaleDateString("fi-FI");
      this.date = pvm;
      this.hour = time.split(":")[0];
      /*if (this.hour < 10) {
        this.hour = "0" + this.hour;
      }
      */
      this.minute = myDate.getMinutes();
      if (this.minute < 10) {
        this.minute = "0" + this.minute;
      }
      this.second = time.split(":")[2].split(" ")[0];
      this.amPm = time.split(" ")[1];
    }
  },
  mounted() {
    setInterval(this.updateClock, 1000);
  }
};
</script>
