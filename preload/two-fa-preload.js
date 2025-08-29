(() => {
  "use strict";
  const t = require("electron");
  !(function () {
    const n = "var(--color-background-tertiary-inverse)",
      o = `\n\t\thtml.theme-dark body { \n\t\t\tbackground-color: ${n} !important; \n\t\t}\n\n\t\thtml.theme-dark #tv-two-factor-social-signin, html.theme-dark .tv-two-factor-social-signin { \n\t\t\tbackground-color: ${n} !important; \n\t\t}\n\n\t\thtml body {\n\t\t\toverflow: hidden\n\t\t}\n\t`;
    t.webFrame.insertCSS(o);
  })();
})();
