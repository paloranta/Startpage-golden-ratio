//https://codesandbox.io/s/wk0n26pko8 "Vue clock"
<template>
  <div class="clock">
    <h1 style="font-weight: 700;">{{ hour }}:<span style="font-weight: 300;">{{ minute }}</span>
      <span>:</span> <span style="font-weight: 300;">{{ second }}</span>
    </h1>
    <span>{{ date }}</span>
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
      if (this.hour < 10) {
        this.hour = "0" + this.hour;
      }
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
