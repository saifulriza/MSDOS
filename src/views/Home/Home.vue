<template>
  <div class="tui-window" style="text-align: left; margin: 30px">
    <fieldset class="tui-fieldset">
      <legend class="center">Table hovered</legend>
      <table class="tui-table hovered-cyan" style="width: 700px">
        <thead>
          <tr>
            <th>Name</th>
            <th>PID</th>
            <th>CPU</th>
            <th>Memory</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>calculator.exe</td>
            <td>25768</td>
            <td>00</td>
            <td>1.749 Kb</td>
          </tr>
          <tr>
            <td>register.exe</td>
            <td>748</td>
            <td>00</td>
            <td>22.216 Kb</td>
          </tr>
          <tr>
            <td>Scandisk</td>
            <td>25000</td>
            <td>12</td>
            <td>112 Kb</td>
          </tr>
          <tr>
            <td>turbovision.exe</td>
            <td>580</td>
            <td>01</td>
            <td>9.440 Kb</td>
          </tr>
        </tbody>
      </table>
    </fieldset>
  </div>
  <br />
  <div style="margin: 30px">
    <form @submit.prevent="execute" @input="reset">
      C:/>
      <input class="tui-input" v-model="input" autofocus /><br />
      <div class="not-found" v-if="notFound">
        '{{ input }}' is not recognized as internal or external command,
        operable program or batch file.
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import router from "@/router";
export default {
  setup() {
    let input = ref("");
    let notFound = ref(false);
    function execute() {
      switch (input.value) {
        case "explorer":
          notFound.value = false;
          redirect("explorer");
          break;
        case "calculator":
          notFound.value = false;
          redirect("calculator");
          break;
        case "register":
          notFound.value = false;
          redirect("register");
          break;
        case "scandisk":
          notFound.value = false;
          redirect("scandisk");
          break;
        case "turbovision":
          notFound.value = false;
          redirect("turbovision");
          break;
        default:
          notFound.value = true;
      }
    }

    function reset() {
      notFound.value = false;
    }

    function redirect(url) {
      router.push(`/home/${url}`);
    }

    return {
      reset,
      print,
      input,
      notFound,
      execute,
    };
  },
};
</script>