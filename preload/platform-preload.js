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
      const o = e.webFrame.insertCSS(n);
      localStorage.setItem(this.key, o);
    }
    removeRules() {
      const t = localStorage.getItem(this.key);
      t && e.webFrame.removeInsertedCSS(t);
    }
  }
  function o(e) {
    let t,
      n = e;
    return () => {
      if (n) {
        const e = n;
        ((n = void 0), (t = e()));
      }
      return t;
    };
  }
  require("url");
  const a = "TARGET_TVD_HOST",
    s = "https://www.tradingview.com/",
    i = o(() => {
      const e = "http(s?):\\/\\/((\\w|-)*\\.)?tradingview\\.com";
      let t = s;
      return (
        a in process.env && (t = process.env[a] ?? s),
        null !== new RegExp(e, "i").exec(t)
          ? e
          : (t.endsWith("/") && (t = t?.substring(0, t.length - 1)),
            t.replace(/\./gi, "\\.").replace(/\//gi, "\\/"))
      );
    });
  function c(e, t = !0) {
    const n = (e) => {
      let n = e
        .toString()
        .replace(/\./gi, "\\.")
        .replace(/(?<!\))\*/gi, "(.*)");
      return (
        n.match(/\w+(\/\((\.\*\)))/gi) &&
          (n = n.replace(/\/\((\.\*\))/gi, "(/(.*))?")),
        (n = n.replace(/\//gi, "\\/").replace(/\$\{TV\}/gi, i())),
        (n = `^${n}${t ? "$" : ""}`),
        new RegExp(n, "i")
      );
    };
    return "string" == typeof e ? n(e) : e.map(n);
  }
  const d = "${TV}/chart/([a-zA-Z0-9]{0,12})?/?",
    l = "${TV}/(\\w|-)*screener/*",
    p =
      (o(() => c(l)),
      o(() => c("${TV}/", !0)),
      o(() => c("${TV}/chart/", !0)),
      o(() => c(d)),
      o(() => c("(${TV}/chart/([a-zA-Z0-9]{0,12})?)/\\?*?")),
      o(() =>
        c(
          "${TV}/chart/[a-z0-9-._~:\\?#@!$&'()*+,;%=]+/[a-z0-9-._~:\\?#@!$&'()*+,;%=]+/",
          !0,
        ),
      ),
      o(() => c("${TV}/screener/*")),
      o(() => c("${TV}/heatmap/*")),
      o(() => c("${TV}/community/*")),
      o(() => c("${TV}/pine-script-docs/en/v5/Introduction.html")),
      o(() => c("${TV}/pine-script-reference/v5/")),
      o(() => c("${TV}/x/*")),
      o(() => c("${TV}/*")),
      o(() => c("${TV}/account-recovery/*")),
      o(() => c("${TV}/chat/*")),
      o(() => /:\/\/s3\..+\/snapshots\//i),
      o(() => c("${TV}/pine/*")),
      o(() => c("${TV}/markets/*"))),
    v =
      (o(() => c("${TV}/markets/*/news/")),
      o(() => c("${TV}/markets/stocks-*/*")),
      o(() => c("${TV}/markets/world-economy/*")),
      o(() => c("${TV}/u/TradingView/")),
      o(() => c("${TV}/news/*")),
      o(() => c("${TV}/news/")),
      o(() => c("${TV}/news/\\?market=*")),
      o(() => c("${TV}/news/\\?market=topstories")),
      o(() => c("${TV}/HTML5-stock-forex-bitcoin-charting-library/")),
      o(() => c("${TV}/support/*")),
      o(() => c("https://status.tradingview.com/", !0)),
      o(() =>
        c([
          "${TV}/news/*",
          "${TV}/support/*",
          "${TV}/house-rules/*",
          "${TV}/key-events/*",
          "${TV}/symbols/*",
          "${TV}/heatmap/*",
          "${TV}/economic-calendar/",
          l,
          "${TV}/ideas/*",
          "${TV}/community/*",
          "${TV}/markets/*",
          "${TV}/sparks/*",
          "${TV}/education/*",
        ]),
      )),
    u = o(() => c("${TV}/markets/bonds/*"));
  function b(e, t) {
    const n = e.split("\n").join("");
    return t instanceof RegExp ? t.test(n) : t.some((e) => e.test(n));
  }
  o(() =>
    c([d, l, "${TV}/markets/*", "${TV}/symbols/*", "${TV}/(\\w|-)*calendar/*"]),
  );
  const g = window.location.href,
    m = `\n\t.tv-header,\n\t.tv-market-heatmap__standalone-title-wrap,\n\t.tv-screener__standalone-title-wrap,\n\t.tv-footer {\n\t\tdisplay: none !important;\n\t}\n\n\t${((w = g), b(w, p()) ? ".tv-content nav { display: none !important; }" : "")}\n\n\t.tv-economic-calendar [class^="separator"],\n\t.tv-content [class^="container"] [class^="marketHeader"],\n\t.tv-content .tv-category__tab-page [class^="marketHeader"],\n\t.tv-sticky-symbol-header,\n\t.tv-screener-toolbar {\n\t\ttop: 0 !important;\n\t}\n\n\t.tv-content .tv-category__tab-page [class^="shadow"] [class^="tableWrapSticky"] {\n\t\ttop: 58px !important;\n\t}\n\n\t.tv-content .tv-economy-country-tab [class^="table"] [class^="stickyContainer"],\n\t.tv-content .tv-economy-indicator-tab [class^="table"] [class^="stickyContainer"] {\n\t\ttop: -1px !important;\n\t}\n\n\t.tv-content [class^="container"] [class^="shadow"] [class^="tableWrapSticky"] {\n\t\ttop: ${
      (function (e) {
        return b(e, u());
      })(g)
        ? "-1px"
        : "58px"
    }\n\t}\n\n\t.tv-category__tab-page.tv-card-exterior > .screener-markets-page-container > div {\n\t\t--screener-sticky-offset-top: 63px !important;\n\t}\n\n\t.tv-screener__standalone-wrap {\n\t\tpadding: 0 !important;\n\t}\n`;
  var w;
  const h = {
      get: (t) => e.ipcRenderer.invoke("tvd:storage-get", t),
      set: (t, n) => e.ipcRenderer.invoke("tvd:storage-set", t, n),
      remove: (t) => e.ipcRenderer.invoke("tvd:storage-remove", t),
      clear: () => e.ipcRenderer.invoke("tvd:storage-clear"),
    },
    k = {
      getDesktopStream: async () =>
        await e.ipcRenderer.invoke("tvd:get-screen"),
      async getCurrentCameraDevice() {
        const t = await e.ipcRenderer.invoke("tvd:get-camera");
        if (t) return R.findMediaDevice(t.label, "videoinput");
      },
      async getCurrentAudioDevice() {
        const t = await e.ipcRenderer.invoke("tvd:get-audio");
        if (t) return R.findMediaDevice(t.label, "audioinput");
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
    T = {
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
    y = {
      setNotification(t) {
        e.ipcRenderer.send("tvd:set-notification", t);
      },
      setNotificationViewed() {
        e.ipcRenderer.send("tvd:set-notification-viewed");
      },
    },
    $ = {
      setCredentials: (t) => e.ipcRenderer.invoke("tvd:set-credentials", t),
      getCredentials: () => e.ipcRenderer.invoke("tvd:get-credentials"),
      insertCredentialsText: (t) =>
        e.ipcRenderer.invoke("tvd:native-input-string", t),
    },
    V = {
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
            t !== e && ((t = e), o());
          },
          o = () => {
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
      sessionStorage: h,
    },
    R = {
      ...k,
      ...T,
      ...y,
      ...$,
      ...V,
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
  (!(function (t) {
    if ("win32" !== process.platform) return;
    const n = new r("scrollbarTheme"),
      o = (e) => {
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
          "theme" === e.key && e.newValue && o(e.newValue);
        };
        (window.addEventListener("storage", e),
          window.addEventListener("unload", () => {
            window.removeEventListener("storage", e);
          }));
      }
    }),
      t()
        .then((e) => {
          o(e);
        })
        .catch((e) => console.log(e)),
      e.ipcRenderer.on("tvd:update-theme", (e, t) => {
        "string" == typeof t && o(t);
      }));
  })(R.getTheme),
    (function () {
      const e = () => {
        new r(
          "desktopOptimize",
          b(window.location.href, v())
            ? m
            : "\n\t.i-hidden-on-tvdesktop {\n\t\tdisplay: none !important;\n\t}\n",
        ).applyRules();
      };
      (window.addEventListener("load", e),
        window.addEventListener("unload", () => {
          window.removeEventListener("load", e);
        }),
        e());
    })(),
    e.contextBridge.exposeInMainWorld("TVD", R));
})();
