"use strict";
(global.webpackChunktradingview_desktop =
  global.webpackChunktradingview_desktop || []).push([
  [1922],
  {
    98124: (e, n, r) => {
      r(50959);
    },
    46580: (e, n, r) => {
      r(50959);
    },
    27044: (e, n, r) => {
      r(50959);
    },
    86050: (e, n, r) => {
      r.d(n, { m: () => s });
      var t = r(50959);
      function s(e, n, r = []) {
        (0, t.useEffect)(() => {
          if (!e) return;
          let r = e.subscribe(n);
          const t = () => {
            (r?.unsubscribe(), (r = null));
          };
          return (
            window.addEventListener("beforeunload", t),
            () => {
              (window.removeEventListener("beforeunload", t), t());
            }
          );
        }, r);
      }
    },
    2251: (e, n, r) => {
      (r(50959), r(59391));
    },
    27500: (e, n, r) => {
      (r(50959), r(39001), r(86050));
    },
    75693: (e, n, r) => {
      (r(50959), r(13855), r(91115), r(86050), r(27500));
    },
    87365: (e, n, r) => {
      (r(50959), r(5306), r(13855), r(55622), r(59391));
    },
    16693: (e, n, r) => {
      (0, r(87269).Um)();
    },
    55622: (e, n, r) => {
      r.d(n, { w0: () => d });
      var t = r(72298),
        s = r(36458),
        o = r(13855),
        a = r(26063),
        i = r(52296),
        c = r(43891),
        V = r(5778);
      const p = void 0 !== t.ipcMain;
      function T(e, n) {
        e.setAttribute("dir", n ? "rtl" : "ltr");
      }
      function d(e) {
        (e && "" === e.dir && T(e, (0, a._f)(i.Z.language)),
          (function (e) {
            let n;
            n = p
              ? s.i.provide(V.R).localeChange.subscribe(e)
              : s.i.provideProxy(V.R).localeChange.subscribe(e);
            const r = () => {
              (n?.unsubscribe(),
                (n = void 0),
                window.removeEventListener("beforeunload", r));
            };
            "undefined" != typeof window &&
              window.addEventListener("beforeunload", r);
          })((n) => {
            "" !== n &&
              ((0, c.D)(n).catch((e) => {
                (0, o.x$)().error(
                  "setupI18nLocaleHandler(): changeLocale() error",
                  e,
                );
              }),
              e && T(e, (0, a._f)(n)));
          }));
      }
    },
    39001: (e, n, r) => {
      r(36458);
    },
    91115: (e, n, r) => {
      (r(36458), r(82170));
    },
    82170: (e, n, r) => {
      var t, s;
      (!(function (e) {
        ((e[(e.Ask = 0)] = "Ask"), (e[(e.CheckOnly = 1)] = "CheckOnly"));
      })(t || (t = {})),
        (function (e) {
          ((e.Window = "isWindow"),
            (e.App = "isApp"),
            (e.Chart = "isChart"),
            (e.Debug = "isDebug"));
        })(s || (s = {})));
    },
    29060: (e, n, r) => {
      r.d(n, { og: () => t });
      const t = "tvd:locale-get-translations";
    },
    41029: (e, n, r) => {
      (r.d(n, { Um: () => t.Um }), r(96486), r(16693));
      var t = r(87269);
    },
    67644: (e, n, r) => {
      var t;
      (r(65355),
        r(84011),
        r(41029),
        (function (e) {
          ((e.Enter = "Enter"),
            (e.Space = "Space"),
            (e.Tab = "Tab"),
            (e.ArrowUp = "ArrowUp"),
            (e.ArrowDown = "ArrowDown"),
            (e.Escape = "Escape"));
        })(t || (t = {})));
    },
    26063: (e, n, r) => {
      r.d(n, { _f: () => o });
      const t = ["ar", "ar_AE"],
        s = ["he", "he_IL"],
        o = (e) => [...t, ...s].includes(e);
    },
    87269: (e, n, r) => {
      r.d(n, { Um: () => t });
      const t = () => "darwin" === process.platform;
    },
    57118: (e, n, r) => {
      r(57310);
      var t = r(62771);
      const s = "TARGET_TVD_HOST",
        o = "https://www.tradingview.com/",
        a = (0, t.V)(() => {
          const e = "http(s?):\\/\\/((\\w|-)*\\.)?tradingview\\.com";
          let n = o;
          return (
            s in process.env && (n = process.env[s] ?? o),
            null !== new RegExp(e, "i").exec(n)
              ? e
              : (n.endsWith("/") && (n = n?.substring(0, n.length - 1)),
                n.replace(/\./gi, "\\.").replace(/\//gi, "\\/"))
          );
        });
      function i(e, n = !0) {
        const r = (e) => {
          let r = e
            .toString()
            .replace(/\./gi, "\\.")
            .replace(/(?<!\))\*/gi, "(.*)");
          return (
            r.match(/\w+(\/\((\.\*\)))/gi) &&
              (r = r.replace(/\/\((\.\*\))/gi, "(/(.*))?")),
            (r = r.replace(/\//gi, "\\/").replace(/\$\{TV\}/gi, a())),
            (r = `^${r}${n ? "$" : ""}`),
            new RegExp(r, "i")
          );
        };
        return "string" == typeof e ? r(e) : e.map(r);
      }
      const c = "${TV}/chart/([a-zA-Z0-9]{0,12})?/?",
        V = "${TV}/(\\w|-)*screener/*";
      ((0, t.V)(() => i(V)),
        (0, t.V)(() => i("${TV}/", !0)),
        (0, t.V)(() => i("${TV}/chart/", !0)),
        (0, t.V)(() => i(c)),
        (0, t.V)(() => i("(${TV}/chart/([a-zA-Z0-9]{0,12})?)/\\?*?")),
        (0, t.V)(() =>
          i(
            "${TV}/chart/[a-z0-9-._~:\\?#@!$&'()*+,;%=]+/[a-z0-9-._~:\\?#@!$&'()*+,;%=]+/",
            !0,
          ),
        ),
        (0, t.V)(() => i("${TV}/screener/*")),
        (0, t.V)(() => i("${TV}/heatmap/*")),
        (0, t.V)(() => i("${TV}/community/*")),
        (0, t.V)(() => i("${TV}/pine-script-docs/en/v5/Introduction.html")),
        (0, t.V)(() => i("${TV}/pine-script-reference/v5/")),
        (0, t.V)(() => i("${TV}/x/*")),
        (0, t.V)(() => i("${TV}/*")),
        (0, t.V)(() => i("${TV}/account-recovery/*")),
        (0, t.V)(() => i("${TV}/chat/*")),
        (0, t.V)(() => /:\/\/s3\..+\/snapshots\//i),
        (0, t.V)(() => i("${TV}/pine/*")),
        (0, t.V)(() => i("${TV}/markets/*")),
        (0, t.V)(() => i("${TV}/markets/*/news/")),
        (0, t.V)(() => i("${TV}/markets/stocks-*/*")),
        (0, t.V)(() => i("${TV}/markets/world-economy/*")),
        (0, t.V)(() => i("${TV}/u/TradingView/")),
        (0, t.V)(() => i("${TV}/news/*")),
        (0, t.V)(() => i("${TV}/news/")),
        (0, t.V)(() => i("${TV}/news/\\?market=*")),
        (0, t.V)(() => i("${TV}/news/\\?market=topstories")),
        (0, t.V)(() => i("${TV}/HTML5-stock-forex-bitcoin-charting-library/")),
        (0, t.V)(() => i("${TV}/support/*")),
        (0, t.V)(() => i("https://status.tradingview.com/", !0)),
        (0, t.V)(() =>
          i([
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
        (0, t.V)(() => i("${TV}/markets/bonds/*")),
        (0, t.V)(() =>
          i([
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
