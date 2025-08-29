"use strict";
(global.webpackChunktradingview_desktop =
  global.webpackChunktradingview_desktop || []).push([
  [7734],
  {
    11213: (e, n, t) => {
      function r(e) {
        return e ? (e.length ? e.split("-")[0] : e) : "";
      }
      (t.d(n, { uJ: () => r }), t(57118), t(52364));
    },
    17066: (e, n, t) => {
      t.d(n, { s: () => a });
      var r = t(72298),
        i = t(77118);
      const s = void 0 !== r.ipcMain;
      function a() {
        if (s)
          throw new Error(
            "This initialization must be called from renderer process",
          );
        (0, i.S1)();
      }
    },
    18737: (e, n, t) => {
      t(77118);
    },
    16693: (e, n, t) => {
      (0, t(87269).Um)();
    },
    89597: (e, n, t) => {
      var r, i, s, a;
      (!(function (e) {
        ((e[(e.Normal = 0)] = "Normal"),
          (e[(e.Maximized = 1)] = "Maximized"),
          (e[(e.Minimized = 2)] = "Minimized"),
          (e[(e.Hidden = 3)] = "Hidden"),
          (e[(e.Fullscreen = 4)] = "Fullscreen"),
          (e[(e.FullscreenWithPanel = 5)] = "FullscreenWithPanel"));
      })(r || (r = {})),
        (function (e) {
          ((e.Basic = "basic"),
            (e.Options = "options"),
            (e.Credentials = "credentials"),
            (e.SignIn = "sign-in"),
            (e.Settings = "settings"),
            (e.SaveChanges = "save-changes"),
            (e.Welcome = "welcome"));
        })(i || (i = {})),
        (function (e) {
          ((e.Show = "show"), (e.Move = "move"));
        })(s || (s = {})),
        (function (e) {
          ((e[(e.Basic = 0)] = "Basic"), (e[(e.ChartData = 1)] = "ChartData"));
        })(a || (a = {})));
    },
    97003: (e, n, t) => {
      t.d(n, {
        nt: () => $,
        ZJ: () => l.ZJ,
        UT: () => V.U,
        UD: () => o.U,
        Kr: () => a.Kr,
        Wf: () => s.W,
        D9: () => T,
        vO: () => l.vO,
      });
      var r,
        i,
        s = t(36842),
        a = t(5603),
        o = t(80271),
        c = (t(95807), t(96485), t(39985)),
        V = t(94232),
        l = t(58789);
      function T(e) {
        if ("object" != typeof e || null === e) return !1;
        const n = e.constructor;
        return !!n && Reflect.hasMetadata(c.f, n);
      }
      function $() {
        return (e) => {
          const n = new e();
          V.U.instance.registerProvider(n);
        };
      }
      (((i = r || (r = {}))[(i.Transient = 0)] = "Transient"),
        (i[(i.Singleton = 1)] = "Singleton"),
        Symbol("ServiceContracts"));
    },
    95091: (e, n, t) => {
      (t.d(n, { _v: () => i, wK: () => s }), t(13855));
      var r = t(97003);
      function i(e, n) {
        return n && n.signal.aborted
          ? Promise.resolve(!1)
          : new Promise((t) => {
              let r;
              const i = () => {
                r && (clearTimeout(r), (r = void 0), t(!1));
              };
              (n && n.signal.addEventListener("abort", i, { once: !0 }),
                (r = setTimeout(() => {
                  ((r = void 0),
                    n?.signal.removeEventListener("abort", i),
                    t(!0));
                }, e)));
            });
      }
      function s(e) {
        e.catch((e) => {
          const n = (0, r.UD)(e);
          (console.warn(`Ignoring promise, but error: ${n}`),
            console.warn(e.stack));
        });
      }
    },
    57118: (e, n, t) => {
      t(57310);
      var r = t(62771);
      const i = "TARGET_TVD_HOST",
        s = "https://www.tradingview.com/",
        a = (0, r.V)(() => {
          const e = "http(s?):\\/\\/((\\w|-)*\\.)?tradingview\\.com";
          let n = s;
          return (
            i in process.env && (n = process.env[i] ?? s),
            null !== new RegExp(e, "i").exec(n)
              ? e
              : (n.endsWith("/") && (n = n?.substring(0, n.length - 1)),
                n.replace(/\./gi, "\\.").replace(/\//gi, "\\/"))
          );
        });
      function o(e, n = !0) {
        const t = (e) => {
          let t = e
            .toString()
            .replace(/\./gi, "\\.")
            .replace(/(?<!\))\*/gi, "(.*)");
          return (
            t.match(/\w+(\/\((\.\*\)))/gi) &&
              (t = t.replace(/\/\((\.\*\))/gi, "(/(.*))?")),
            (t = t.replace(/\//gi, "\\/").replace(/\$\{TV\}/gi, a())),
            (t = `^${t}${n ? "$" : ""}`),
            new RegExp(t, "i")
          );
        };
        return "string" == typeof e ? t(e) : e.map(t);
      }
      const c = "${TV}/chart/([a-zA-Z0-9]{0,12})?/?",
        V = "${TV}/(\\w|-)*screener/*";
      ((0, r.V)(() => o(V)),
        (0, r.V)(() => o("${TV}/", !0)),
        (0, r.V)(() => o("${TV}/chart/", !0)),
        (0, r.V)(() => o(c)),
        (0, r.V)(() => o("(${TV}/chart/([a-zA-Z0-9]{0,12})?)/\\?*?")),
        (0, r.V)(() =>
          o(
            "${TV}/chart/[a-z0-9-._~:\\?#@!$&'()*+,;%=]+/[a-z0-9-._~:\\?#@!$&'()*+,;%=]+/",
            !0,
          ),
        ),
        (0, r.V)(() => o("${TV}/screener/*")),
        (0, r.V)(() => o("${TV}/heatmap/*")),
        (0, r.V)(() => o("${TV}/community/*")),
        (0, r.V)(() => o("${TV}/pine-script-docs/en/v5/Introduction.html")),
        (0, r.V)(() => o("${TV}/pine-script-reference/v5/")),
        (0, r.V)(() => o("${TV}/x/*")),
        (0, r.V)(() => o("${TV}/*")),
        (0, r.V)(() => o("${TV}/account-recovery/*")),
        (0, r.V)(() => o("${TV}/chat/*")),
        (0, r.V)(() => /:\/\/s3\..+\/snapshots\//i),
        (0, r.V)(() => o("${TV}/pine/*")),
        (0, r.V)(() => o("${TV}/markets/*")),
        (0, r.V)(() => o("${TV}/markets/*/news/")),
        (0, r.V)(() => o("${TV}/markets/stocks-*/*")),
        (0, r.V)(() => o("${TV}/markets/world-economy/*")),
        (0, r.V)(() => o("${TV}/u/TradingView/")),
        (0, r.V)(() => o("${TV}/news/*")),
        (0, r.V)(() => o("${TV}/news/")),
        (0, r.V)(() => o("${TV}/news/\\?market=*")),
        (0, r.V)(() => o("${TV}/news/\\?market=topstories")),
        (0, r.V)(() => o("${TV}/HTML5-stock-forex-bitcoin-charting-library/")),
        (0, r.V)(() => o("${TV}/support/*")),
        (0, r.V)(() => o("https://status.tradingview.com/", !0)),
        (0, r.V)(() =>
          o([
            "${TV}/news/*",
            "${TV}/support/*",
            "${TV}/house-rules/*",
            "${TV}/key-events/*",
            "${TV}/symbols/*",
            "${TV}/heatmap/*",
            "${TV}/economic-calendar/",
            V,
            "${TV}/ideas/*",
            "${TV}/community/*",
            "${TV}/markets/*",
            "${TV}/sparks/*",
            "${TV}/education/*",
          ]),
        ),
        (0, r.V)(() => o("${TV}/markets/bonds/*")),
        (0, r.V)(() =>
          o([
            c,
            V,
            "${TV}/markets/*",
            "${TV}/symbols/*",
            "${TV}/(\\w|-)*calendar/*",
          ]),
        ));
    },
  },
]);
