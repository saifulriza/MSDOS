<template>
  <div class="center" style="margin-top: 100px">
    <div class="tui-window white-168">
      <fieldset class="tui-fieldset">
        <legend align="center">Pocket Calculator</legend>
        &nbsp;<input
          id="display"
          class="tui-input blue-168 white-255-text"
          style="text-align: right"
          disabled
          value="872.9000"
        />
        <br /><br />
        <button class="tui-button" @click="clearDisplay()">C&nbsp;</button>
        <button class="tui-button" @click="digit('-')">&#60;-</button>
        <button class="tui-button" @click="digit('%')">%&nbsp;</button>
        <button class="tui-button" @click="digit('+-')">+-</button><br /><br />
        <button class="tui-button" @click="digit('7')">7&nbsp;</button>
        <button class="tui-button" @click="digit('8')">8&nbsp;</button>
        <button class="tui-button" @click="digit('9')">9&nbsp;</button>
        <button class="tui-button" @click="digit('/')">/&nbsp;</button
        ><br /><br />
        <button class="tui-button" @click="digit('4')">4&nbsp;</button>
        <button class="tui-button" @click="digit('5')">5&nbsp;</button>
        <button class="tui-button" @click="digit('6')">6&nbsp;</button>
        <button class="tui-button" @click="digit('*')">*&nbsp;</button
        ><br /><br />
        <button class="tui-button" @click="digit('1')">1&nbsp;</button>
        <button class="tui-button" @click="digit('2')">2&nbsp;</button>
        <button class="tui-button" @click="digit('3')">3&nbsp;</button>
        <button class="tui-button" @click="digit('-')">-&nbsp;</button
        ><br /><br />
        <button class="tui-button" @click="digit('0')">0&nbsp;</button>
        <button class="tui-button" @click="digit('.')">.&nbsp;</button>
        <button class="tui-button" @click="digit('=')">=&nbsp;</button>
        <button class="tui-button" @click="digit('+')">+&nbsp;</button>
      </fieldset>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  setup() {
    function digit(digit) {
      let val = $("#display").val();
      $("#display").val(val + "" + digit);
    }
    function clearDisplay() {
      $("#display").val("");
    }
    return {
      digit,
      clearDisplay,
    };
  },
};
</script>