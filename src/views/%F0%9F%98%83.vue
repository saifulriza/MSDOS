<template>
  <h1>hai ssss</h1>
</template>
<script>
import { onMounted, ref } from "vue";
export default {
  setup() {
    let second = ref("");

    function formatTime() {
      window.location.hash = new window.Date();
    }
    // function loop() {
    //   let i,
    //     n,
    //     s = "";
    //   for (i = 0; i < 10; i++) {
    //     n = Math.floor(Math.sin(Date.now() / 200 + i / 2) * 4) + 4;
    //     s += String.fromCharCode(0x2581 + n);
    //   }
    //   window.location.hash = s;
    //   setTimeout(loop, 1000);
    // }

    onMounted(() => {
      setInterval(() => {
        formatTime();
      }, 1000);
    });
  },
};
</script>