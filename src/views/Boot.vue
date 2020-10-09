<template>
  <img
    src="./../assets/resources/pcstartup1.png"
    width="40px"
    height="40px"
    style="float: left"
  />
  <img
    src="./../assets/resources/pcstartup2.png"
    width="200px"
    height="150px"
    style="float: right"
  />
  <div style="margin-top: 4px"></div>
  Award Medallion BIOS v6.0, An Energy Star Ally<br />
  Copyright (C) 1984-2001, Award Software, Inc.<br /><br />
  ASUS P4T533-C ACPI BIOS Revision 1007 Beta 001<br /><br />
  Intel(R) Pentium(R) 4 2800 MHz Processor<br />
  Memory Test : &nbsp;&nbsp; 262144K OK<br /><br />
  <div id="session-1" style="display: none">
    Award Plug and Play BIOS Extension v1.0A<br />
    Initialize Plug and Play Cards...<br />
    PNP init Completed<br /><br />
  </div>
  <div id="session-2" style="display: none">
    Detecting Primary Master .....: MAXTOR 6L040J2<br />
  </div>
  <div id="session-3" style="display: none">
    Detecting Primary Slave ......: ASUS CD-S520/A<br />
  </div>
  <div id="session-4" style="display: none">
    Detecting Secondary Master ...: TOSHIBA CD-ROM XM-62028<br />
    Detecting Secondaty Slave ....: none
  </div>
  <div id="session-5" style="display: none">
    <span class="blink"><b>_</b></span>
  </div>
  <div class="tui-statusbar absolute black white-text">
    <ul>
      <li style="margin-left: 0px" v-if="!skip">
        Press <b>DEL</b> to enter SETUP
      </li>
      <li style="margin-left: 0px" v-else>
        Press <b>F1</b> to continue, Press <b>DEL</b> to enter SETUP
      </li>
    </ul>
    <ul>
      <li style="margin-left: 0px">08/20/2002-1850E/ICH2/W627-P4T533-C</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref, onMounted } from "vue";
import router from "@/router";
export default {
  setup() {
    onMounted(() => {
      console.log(
        "%c Hey you! looking for something? ",
        "background: #222; color: #bada55"
      );
    });

    document.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        redirect("/home/home");
      }
    });

    document.addEventListener("keyup", (e) => {
      if (e.keyCode === 46) {
        redirect("/bios");
      }
    });

    let skip = ref(false);
    let element = ref(1);
    function skipElement(num) {
      let el = document.getElementById(`session-${num}`);
      el.style.display = "block";
      element.value++;
    }
    setTimeout(() => {
      skipElement(element.value);
    }, 1000);
    setTimeout(() => {
      skipElement(element.value);
    }, 3000);
    setTimeout(() => {
      skipElement(element.value);
    }, 5000);
    setTimeout(() => {
      skipElement(element.value);
    }, 6000);
    setTimeout(() => {
      skipElement(element.value);
      skip.value = true;
    }, 8000);

    function redirect(url) {
      if (skip.value) router.push(url);
    }

    // let lanjut = ref(false);
    // watch(lanjut, (lanjut) => { lanjut ?? lanjut()});

    return {
      skip,
    };
  },
};
</script>

<style scoped>
.blink {
  animation: blinker 1s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>
