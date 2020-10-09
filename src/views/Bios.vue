<template>
  <div class="bordered white-168">
    <div
      class="tui-panel cyan-168 full-width black-255-text tui-no-shadow center"
    >
      BIOS
    </div>
    <div class="tui-tabs">
      <ul>
        <li>
          <a class="tui-tab active" data-tab-content="tab-1-content">Main</a>
        </li>
        <li><a class="tui-tab" data-tab-content="tab-2-content">Exit</a></li>
      </ul>
    </div>
    <div
      class="tui-tab-content tui-content"
      id="tab-1-content"
      style="display: block"
    >
      <table class="tui-table-grid">
        <tbody>
          <tr>
            <td rowspan="2" width="60%" class="blue-168-text">
              <br />System Time.........:<input
                type="text"
                class="tui-input white-168 black-text"
                value="[09:21:30]"
                style="width: 135px"
              />
              <br />System Date.........:<input
                type="text"
                class="tui-input white-168 black-text"
                value="[15/09/1994]"
                style="width: 135px"
              />
              <br />
              <br />Legacy Diskette A...:<input
                type="text"
                class="tui-input white-168 black-text"
                value="[1.44/1.25 MB]"
                style="width: 135px"
              />] <br />Legacy Diskette B...:<input
                type="text"
                class="tui-input white-168 black-text"
                value="[disabeld]"
                style="width: 135px"
              />
              <br />
              <br />Primary Master......:<input
                type="text"
                class="tui-input white-168 black-text"
                value="[None]"
                style="width: 135px"
              />
              <br />Primary Slave.......:<input
                type="text"
                class="tui-input white-168 black-text"
                value="[None]"
                style="width: 135px"
              />
              <br />Secondary Master....:<input
                type="text"
                class="tui-input white-168 black-text"
                value="[CD-ROM]"
                style="width: 135px"
              />
              <br />Secondary Slave.....:<input
                type="text"
                class="tui-input white-168 black-text"
                value="[None]"
                style="width: 135px"
              />
              <br />
              <br />Keyboard Features...:<input
                type="text"
                class="tui-input white-168 black-text"
                value="[Enter]"
                style="width: 135px"
              />
              <br />
              <br />System Memory.......:<input
                type="text"
                class="tui-input white-168 black-text"
                value="[640 KB]"
                style="width: 135px"
              />
              <br />Extended Memory.....:<input
                type="text"
                class="tui-input white-168 black-text"
                value="[3568410 KB]"
                style="width: 135px"
              />
              <br />Boot-time Diagnostic:<input
                type="text"
                class="tui-input white-168 black-text"
                value="[Enabled]"
                style="width: 135px"
              />
            </td>
            <td width="40%" class="center">Item Specified Help</td>
          </tr>
          <tr>
            <td width="25" height="448px">
              <br />&#60;Tab&#62;, &#60;Shift-Tab&#62; or &#60;Enter&#62;
              selects field.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      class="tui-tab-content tui-content"
      id="tab-2-content"
      style="display: block"
    >
      <!-- Modal window -->
      <div class="tui-window cyan left-align" style="margin: 20px">
        <fieldset class="tui-fieldset">
          <legend class="cyan yellow-255-text">Alert</legend>
          All change will not saved.
          <br /><br />
          <div class="tui-divider"></div>
          <br />
          <button
            class="tui-button cyan-168 white-255-text tui-modal-close-button right"
            data-modal="modal"
            @click="redirect('/')"
          >
            Continue
          </button>
        </fieldset>
      </div>
    </div>
    <div class="tui-statusbar absolute cyan-168">
      <ul>
        <li>
          <a href="#!"><span class="white-255-text">F1</span> Help</a>
        </li>
        <li>
          <a href="#!"><span class="white-255-text">↑↓</span> Select Item</a>
        </li>
        <li>
          <a href="#!"><span class="white-255-text">-/+</span> Change Values</a>
        </li>
        <li>
          <a href="#!"><span class="white-255-text">F9</span> Setup Defaults</a>
        </li>
        <br />
        <li>
          <a href="#!"><span class="white-255-text">Esc</span> Exit</a>
        </li>
        <li>
          <a href="#!"><span class="white-255-text">←→</span> Select Menu</a>
        </li>
        <li>
          <a href="#!"
            ><span class="white-255-text">Enter</span> Select Sub-Menu</a
          >
        </li>
        <li>
          <a href="#!"><span class="white-255-text">F10</span> Save and Exit</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { onMounted } from "vue";
import router from "@/router";
import $ from "jquery";

export default {
  setup() {
    function redirect(url) {
      router.push(url);
    }
    document.addEventListener("keyup", (e) => {
      if (e.keyCode === 121) {
        redirect("/lanjut");
      }
    });
    onMounted(() => {
      $(".tui-tab").click(function (event) {
        $(".tui-tab-content").hide();
        let tabContentid = $(this).attr("data-tab-content");
        $(`#${tabContentid}`).show();
        $(".tui-tab").removeClass("active");
        $(this).addClass("active");
      });
      $(".tui-tab.active").click();
    });

    return {
      redirect,
    };
  },
};
</script>