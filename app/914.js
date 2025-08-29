"use strict";
(global.webpackChunktradingview_desktop =
  global.webpackChunktradingview_desktop || []).push([
  [914],
  {
    31937: (e, t, n) => {
      n.d(t, { Y: () => a, V: () => c });
      var s = n(54041),
        r = n(10496),
        o = n(98886);
      let a;
      class c {
        onRequestSubject = new s.Subject();
        onResponseSubject = new s.Subject();
        onRequest = this.onRequestSubject.asObservable();
        onResponse = this.onResponseSubject.asObservable();
        constructor() {
          (this.onMessage(o.f, (e, t) => {
            const n = {
              ...t,
              responseChannel: this.makeResponseChannel(e),
              context: e,
            };
            try {
              ((a = e), this.onRequestSubject.next(n));
            } finally {
              a = void 0;
            }
          }),
            this.onMessage(o.B, (e, t) => {
              try {
                this.onResponseSubject.next(t);
              } catch (e) {
                throw (
                  (0, r.n_)({
                    level: "error",
                    breadcrumb: `[BaseIpcInbox.constructor()]: onMessage() error: ${JSON.stringify(t)}`,
                  }),
                  e
                );
              }
            }));
        }
      }
    },
    11213: (e, t, n) => {
      function s(e) {
        return e ? (e.length ? e.split("-")[0] : e) : "";
      }
      (n.d(t, { uJ: () => s }), n(57118), n(52364));
    },
    46628: (e, t, n) => {
      (n(72298), n(57147), n(71017), n(13855), n(97003));
    },
    29265: (e, t, n) => {
      n(36458);
    },
    95091: (e, t, n) => {
      (n.d(t, { _v: () => r, wK: () => o }), n(13855));
      var s = n(97003);
      function r(e, t) {
        return t && t.signal.aborted
          ? Promise.resolve(!1)
          : new Promise((n) => {
              let s;
              const r = () => {
                s && (clearTimeout(s), (s = void 0), n(!1));
              };
              (t && t.signal.addEventListener("abort", r, { once: !0 }),
                (s = setTimeout(() => {
                  ((s = void 0),
                    t?.signal.removeEventListener("abort", r),
                    n(!0));
                }, e)));
            });
      }
      function o(e) {
        e.catch((e) => {
          const t = (0, s.UD)(e);
          (console.warn(`Ignoring promise, but error: ${t}`),
            console.warn(e.stack));
        });
      }
    },
    41029: (e, t, n) => {
      (n.d(t, { Um: () => s.Um }), n(96486), n(16693));
      var s = n(87269);
    },
    67644: (e, t, n) => {
      var s;
      (n(65355),
        n(84011),
        n(41029),
        (function (e) {
          ((e.Enter = "Enter"),
            (e.Space = "Space"),
            (e.Tab = "Tab"),
            (e.ArrowUp = "ArrowUp"),
            (e.ArrowDown = "ArrowDown"),
            (e.Escape = "Escape"));
        })(s || (s = {})));
    },
    87269: (e, t, n) => {
      n.d(t, { Um: () => s });
      const s = () => "darwin" === process.platform;
    },
    57118: (e, t, n) => {
      n(57310);
      var s = n(62771);
      const r = "TARGET_TVD_HOST",
        o = "https://www.tradingview.com/",
        a = (0, s.V)(() => {
          const e = "http(s?):\\/\\/((\\w|-)*\\.)?tradingview\\.com";
          let t = o;
          return (
            r in process.env && (t = process.env[r] ?? o),
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
            (n = n.replace(/\//gi, "\\/").replace(/\$\{TV\}/gi, a())),
            (n = `^${n}${t ? "$" : ""}`),
            new RegExp(n, "i")
          );
        };
        return "string" == typeof e ? n(e) : e.map(n);
      }
      const V = "${TV}/chart/([a-zA-Z0-9]{0,12})?/?",
        i = "${TV}/(\\w|-)*screener/*";
      ((0, s.V)(() => c(i)),
        (0, s.V)(() => c("${TV}/", !0)),
        (0, s.V)(() => c("${TV}/chart/", !0)),
        (0, s.V)(() => c(V)),
        (0, s.V)(() => c("(${TV}/chart/([a-zA-Z0-9]{0,12})?)/\\?*?")),
        (0, s.V)(() =>
          c(
            "${TV}/chart/[a-z0-9-._~:\\?#@!$&'()*+,;%=]+/[a-z0-9-._~:\\?#@!$&'()*+,;%=]+/",
            !0,
          ),
        ),
        (0, s.V)(() => c("${TV}/screener/*")),
        (0, s.V)(() => c("${TV}/heatmap/*")),
        (0, s.V)(() => c("${TV}/community/*")),
        (0, s.V)(() => c("${TV}/pine-script-docs/en/v5/Introduction.html")),
        (0, s.V)(() => c("${TV}/pine-script-reference/v5/")),
        (0, s.V)(() => c("${TV}/x/*")),
        (0, s.V)(() => c("${TV}/*")),
        (0, s.V)(() => c("${TV}/account-recovery/*")),
        (0, s.V)(() => c("${TV}/chat/*")),
        (0, s.V)(() => /:\/\/s3\..+\/snapshots\//i),
        (0, s.V)(() => c("${TV}/pine/*")),
        (0, s.V)(() => c("${TV}/markets/*")),
        (0, s.V)(() => c("${TV}/markets/*/news/")),
        (0, s.V)(() => c("${TV}/markets/stocks-*/*")),
        (0, s.V)(() => c("${TV}/markets/world-economy/*")),
        (0, s.V)(() => c("${TV}/u/TradingView/")),
        (0, s.V)(() => c("${TV}/news/*")),
        (0, s.V)(() => c("${TV}/news/")),
        (0, s.V)(() => c("${TV}/news/\\?market=*")),
        (0, s.V)(() => c("${TV}/news/\\?market=topstories")),
        (0, s.V)(() => c("${TV}/HTML5-stock-forex-bitcoin-charting-library/")),
        (0, s.V)(() => c("${TV}/support/*")),
        (0, s.V)(() => c("https://status.tradingview.com/", !0)),
        (0, s.V)(() =>
          c([
            "${TV}/news/*",
            "${TV}/support/*",
            "${TV}/house-rules/*",
            "${TV}/key-events/*",
            "${TV}/symbols/*",
            "${TV}/heatmap/*",
            "${TV}/economic-calendar/",
            i,
            "${TV}/ideas/*",
            "${TV}/community/*",
            "${TV}/markets/*",
            "${TV}/sparks/*",
            "${TV}/education/*",
          ]),
        ),
        (0, s.V)(() => c("${TV}/markets/bonds/*")),
        (0, s.V)(() =>
          c([
            V,
            i,
            "${TV}/markets/*",
            "${TV}/symbols/*",
            "${TV}/(\\w|-)*calendar/*",
          ]),
        ));
    },
  },
]);
