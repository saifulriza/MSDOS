<template>
  <span class="cyan-255-text">Microsoft ScanDisk</span>
  <br /><br />
  <span class="tui-divider cyan-255-border"></span>
  <br /><br />
  <span class="white-168-text"
    >ScanDisk is now checking the following areas of drive C:</span
  >
  <br /><br />
  <div class="white-168-text" style="padding-left: 80px">
    <span class="cyan-255-text" id="option-1"><span id="mark-1"></span></span
    ><span style="margin-left: 30px">Media descriptor</span><br />
    <span class="cyan-255-text" id="option-2"><span id="mark-2">√</span></span
    ><span style="margin-left: 30px">Files allocation tables</span><br />
    <span class="cyan-255-text" id="option-3"><span id="mark-3">»</span></span
    ><span style="margin-left: 30px">Directory structure</span><br />
    <span class="cyan-255-text" id="option-4"
      ><span id="mark-4">&nbsp;</span></span
    ><span style="margin-left: 30px">File system</span><br />
    <span class="cyan-255-text" id="option-5"
      ><span id="mark-5">&nbsp;</span></span
    ><span style="margin-left: 30px">Free space</span><br />
    <span class="cyan-255-text" id="option-6"
      ><span id="mark-6">&nbsp;</span></span
    ><span style="margin-left: 30px">Surface scan</span><br />
  </div>
  <div style="height: 220px"></div>
  <div>
    <button class="tui-button scandisk-button white-text">◄ Pause ►</button>
    <button class="tui-button scandisk-button">
      <span class="white-text">M</span>ore info
    </button>
    <button class="tui-button scandisk-button">
      E<span class="white-text">x</span>it
    </button>
  </div>
  <br /><br />
  <span class="tui-divider cyan-255-border"></span>
  <br />
  <div>
    <span class="cyan-255-text">75% complete</span>
    <span class="tui-progress-bar right tui-bg-blue-black" style="width: 550px">
      <span class="tui-progress yellow-255" style="width: 75%"></span>
    </span>
  </div>
</template>

<style scoped>
.scandisk-button {
  background-color: rgb(80, 80, 80);
  color: rgb(168, 168, 168);
  margin-right: 20px;
}
</style>