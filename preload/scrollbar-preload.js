(() => {
  "use strict";
  const e = require("electron"),
    t = "tvd:debug-auto-save-dialog",
    n = "tvd:screen-capture";
  class r {
    key;
    rules;
    constructor(e, t) {
      ((this.key = e), (this.rules = t));
    }
    applyRules(t) {
      const n = t ?? this.rules;
      if (!n) return;
      const r = localStorage.getItem(this.key);
      r && e.webFrame.removeInsertedCSS(r);
      const i = e.webFrame.insertCSS(n);
      localStorage.setItem(this.key, i);
    }
    removeRules() {
      const t = localStorage.getItem(this.key);
      t && e.webFrame.removeInsertedCSS(t);
    }
  }
  const i = {
      get: (t) => e.ipcRenderer.invoke("tvd:storage-get", t),
      set: (t, n) => e.ipcRenderer.invoke("tvd:storage-set", t, n),
      remove: (t) => e.ipcRenderer.invoke("tvd:storage-remove", t),
      clear: () => e.ipcRenderer.invoke("tvd:storage-clear"),
    },
    o = {
      ...{
        getDesktopStream: async () =>
          await e.ipcRenderer.invoke("tvd:get-screen"),
        async getCurrentCameraDevice() {
          const t = await e.ipcRenderer.invoke("tvd:get-camera");
          if (t) return o.findMediaDevice(t.label, "videoinput");
        },
        async getCurrentAudioDevice() {
          const t = await e.ipcRenderer.invoke("tvd:get-audio");
          if (t) return o.findMediaDevice(t.label, "audioinput");
        },
        async findMediaDevice(e, t) {
          const n = await navigator.mediaDevices.enumerateDevices();
          return n.find((n) => n.label === e && n.kind === t)?.deviceId;
        },
        startedScreenCapture() {
          let t = "";
          (window && (t = window.location.href), e.ipcRenderer.send(n, !0, t));
        },
        stoppedScreenCapture() {
          let t = "";
          (window && (t = window.location.href), e.ipcRenderer.send(n, !1, t));
        },
      },
      ...{
        setTitle(t) {
          e.ipcRenderer.send("tvd:set-title", t);
        },
        reloadTab() {
          e.ipcRenderer.send("tvd:reload-tab");
        },
        layoutChange(t) {
          e.ipcRenderer.send("tvd:layout-change", t);
        },
        symbolChange(t) {
          e.ipcRenderer.send("tvd:symbol-change", t);
        },
        getActiveWatchlistId: () => e.ipcRenderer.invoke("tvd:get-watchlist"),
        onActiveWatchlistIdChange(t) {
          e.ipcRenderer.send("tvd:watchlist-change", t);
        },
        layoutRestored() {
          e.ipcRenderer.send("tvd:layout-restored");
        },
        setFocusPineEditor(t) {
          e.ipcRenderer.send("tvd:focus-pine-editor", t);
        },
      },
      ...{
        setNotification(t) {
          e.ipcRenderer.send("tvd:set-notification", t);
        },
        setNotificationViewed() {
          e.ipcRenderer.send("tvd:set-notification-viewed");
        },
      },
      setCredentials: (t) => e.ipcRenderer.invoke("tvd:set-credentials", t),
      getCredentials: () => e.ipcRenderer.invoke("tvd:get-credentials"),
      insertCredentialsText: (t) =>
        e.ipcRenderer.invoke("tvd:native-input-string", t),
      ...{
        setLocale(t) {
          e.ipcRenderer.send("tvd-main:set-locale", t);
        },
        getTheme: () => e.ipcRenderer.invoke("tvd:get-theme"),
        getThemeSetting: () => e.ipcRenderer.invoke("tvd:get-theme-setting"),
        setThemeSetting(t) {
          e.ipcRenderer.send("tvd:set-theme-setting", t);
        },
        getReports: async () => await e.ipcRenderer.invoke("tvd:get-reports"),
        signIn() {
          e.ipcRenderer.send("tvd-main:initiate-sign-in");
        },
        openSettings(t) {
          e.ipcRenderer.send("tvd:open-settings", t);
        },
        openNewWindow(t, n, r) {
          e.ipcRenderer.send("tvd:open-new-window", t, n, r);
        },
        log(t) {
          e.ipcRenderer.invoke("tvd:log", t);
        },
        sendToSentry(t) {
          e.ipcRenderer.invoke("tvd:send-to-sentry-breadcrumb", t);
        },
        crosshairSyncEnabled: (function () {
          let t = !0;
          const n = new Map(),
            r = (e) => {
              t !== e && ((t = e), i());
            },
            i = () => {
              n.forEach((e) => e(t));
            };
          return (
            e.ipcRenderer
              .invoke("tvd:get-crosshair-sync")
              .then((e) => {
                r(e);
              })
              .catch((e) => console.log(e)),
            e.ipcRenderer.on("tvd:crosshair-sync-setting-update", (e, t) => {
              r(t);
            }),
            {
              value: () => t,
              subscribe(e) {
                const t = self.crypto.randomUUID();
                return (n.set(t, e), t);
              },
              unsubscribe(e) {
                n.has(e) && n.delete(e);
              },
            }
          );
        })(),
        sessionStorage: i,
      },
      ...{
        openAutosaveDialogDebug() {
          e.ipcRenderer.send(t, !0);
        },
        closeAutosaveDialogDebug() {
          e.ipcRenderer.send(t, !1);
        },
        errorAutosaveDialogDebug() {
          e.ipcRenderer.send(t, !1, !0);
        },
      },
      contracts: { link: { OpenExternal: "OpenExternal" } },
    };
  !(function (t) {
    const n = new r("scrollbarTheme"),
      i = (e) => {
        const t =
          "light" === e
            ? "\n\t* {\n\t\t--scrollbar-thumb-default: #D1D4DC;\n\t\t--scrollbar-thumb-hover: #B2B5BE;\n\t\t--scrollbar-thumb-active: #9598A1;\n\t\t--scrollbar-track: #FFFFFF;\n\t\t--scrollbar-track-border: #E0E3EB;\n\t}\n\t\n"
            : "\n\t* {\n\t\t--scrollbar-thumb-default: #50535E;\n\t\t--scrollbar-thumb-hover: #868993;\n\t\t--scrollbar-thumb-active: #A3A6AF;\n\t\t--scrollbar-track: #131722;\n\t\t--scrollbar-track-border: #2A2E39;\n\t}\n\t\n";
        n.applyRules(
          t +
            "\n\t::-webkit-scrollbar {\n\t\twidth: 9px;\n\t\theight: 9px;\n\t}\n\n\t::-webkit-scrollbar-thumb {\n\t\tbox-sizing: border-box;\n\t\tborder: 2px solid transparent;\n\t\tbox-shadow: inset 0 0 10px 10px var(--scrollbar-thumb-default);\n\t\tborder-radius: 8px;\n\t\tbackground-color: unset;\n\t}\n\n\t::-webkit-scrollbar-thumb:hover {\n\t\tbox-shadow: inset 0 0 10px 10px var(--scrollbar-thumb-hover);\n\t}\n\n\t::-webkit-scrollbar-thumb:active {\n\t\tbox-shadow: inset 0 0 10px 10px var(--scrollbar-thumb-active);\n\t}\n\t\n\t::-webkit-scrollbar-track {\n\t\tborder-radius: unset;\n\t\tpadding: 2px;\n\t\tbackground-color: var(--scrollbar-track);\n\t}\n\n\t::-webkit-scrollbar-track:vertical {\n\t\tborder-left: 1px solid var(--scrollbar-track-border);\n\t}\n\t\n\t::-webkit-scrollbar-track:horizontal {\n\t\tborder-top: 1px solid var(--scrollbar-track-border);\n\t}\n\n\t::-webkit-scrollbar-corner {\n\t\tdisplay: none;\n\t}\n",
        );
      };
    (window.addEventListener("load", () => {
      if (window._setTheme) {
        const e = (e) => {
          "theme" === e.key && e.newValue && i(e.newValue);
        };
        (window.addEventListener("storage", e),
          window.addEventListener("unload", () => {
            window.removeEventListener("storage", e);
          }));
      }
    }),
      t()
        .then((e) => {
          i(e);
        })
        .catch((e) => console.log(e)),
      e.ipcRenderer.on("tvd:update-theme", (e, t) => {
        "string" == typeof t && i(t);
      }));
  })(o.getTheme);
})();
