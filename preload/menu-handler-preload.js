(() => {
  "use strict";
  const e = require("electron");
  window.hideMenu = () => {
    (document.getElementById("root")?.classList.add("invisible-root"),
      window.requestAnimationFrame(() =>
        window.requestAnimationFrame(() => e.ipcRenderer.send("tvd:hide-menu")),
      ));
  };
})();
