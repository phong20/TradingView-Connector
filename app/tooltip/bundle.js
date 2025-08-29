(() => {
  "use strict";
  var e,
    t = {
      28686: (e, t, r) => {
        r.d(t, { Z: () => l });
        var n = r(43392),
          o = r.n(n),
          i = r(8021),
          a = r.n(i)()(o());
        a.push([
          e.id,
          "html {\n\tbackground: transparent !important;\n}\n\n.tab-tooltip {\n\twidth: 254px;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\talign-items: center;\n\tbackground-color: var(--color-container-fill-secondary-neutral-thin);\n\tpadding: 16px;\n\tborder-radius: 8px;\n\tborder: 1px solid var(--color-border-primary-neutral-light);\n\tbox-shadow: 0px 0px 6px 0px var(--color-container-fill-tertiary-neutral-light);\n\toverflow: hidden;\n\tword-break: break-word;\n\n\t&.active {\n\t\tbackground-color: var(--color-container-fill-secondary-inverse);\n\t}\n}\n",
          "",
        ]);
        const l = a;
      },
      69478: (e, t, r) => {
        (r.d(t, { nb: () => l, Bz: () => s }), r(72298));
        var n = r(76133),
          o = r(13855),
          i = (r(97003), r(9448));
        const a = {
          windowControl: null,
          dialogControl: null,
          toastWindowHandler: null,
        };
        function l() {
          const e = (0, i.o)(
            new URLSearchParams(window.location.search).get(
              "rendererInitialData",
            ) ?? "{}",
          );
          if (!e) throw new Error("getRendererInitialData() jsonParse error");
          return e;
        }
        function s(e) {
          return (
            (a.windowControl = (function (e, t, r) {
              let i =
                window?.remoteServiceInstanceId ?? l().remoteServiceInstanceId;
              if (
                (r && (i = r),
                !t || i !== window?.initialRemoteServiceInstanceId)
              ) {
                (0, o.x$)().debug(
                  `[Renderer] initializeIpcProxyForInstance ${e} id: ${i}; Old id ${window?.initialRemoteServiceInstanceId}`,
                );
                const t = n.hx.createForInstance(i);
                return ((window.initialRemoteServiceInstanceId = i), t);
              }
              return t;
            })("windowControl", a.windowControl, e)),
            a.windowControl
          );
        }
      },
      78503: (e, t, r) => {
        var n = r(50959),
          o = r(44478),
          i = r(55442),
          a = r(16602),
          l = r(5306),
          s = r(76133),
          c = r(36458),
          d = r(13855),
          u = r(55622),
          p = r(89597),
          m = r(59391),
          w = r(69478);
        (r(98124), r(46580), r(27044));
        var g = r(86050),
          v = (r(2251), r(27500), r(75693), r(87365), r(59238)),
          h = r(25211),
          Z = r.n(h),
          f = r(62962),
          b = r.n(f),
          y = r(20310),
          x = r.n(y),
          S = r(29290),
          k = r.n(S),
          I = r(47289),
          C = r.n(I),
          E = r(24834),
          O = r.n(E),
          z = r(28686),
          P = {};
        ((P.styleTagTransform = O()),
          (P.setAttributes = k()),
          (P.insert = x().bind(null, "head")),
          (P.domAPI = b()),
          (P.insertStyleElement = C()),
          Z()(z.Z, P),
          z.Z && z.Z.locals && z.Z.locals,
          c.i.initializeRpc(),
          s.Pd.exists || s.Pd.initialize((0, s.kS)()));
        const T = (0, l.Zh)()(() => {
          const { t: e } = (0, l.$G)(),
            [t, r] = (0, n.useState)({ type: p.g2.Basic, title: "" }),
            [o, i] = (0, n.useState)(!1);
          return (
            (0, g.m)((0, w.Bz)().tooltipTextChange, ({ text: e }) => {
              r(e);
            }),
            (0, g.m)((0, w.Bz)().tooltipActivateState, i),
            (0, n.useEffect)(() => {
              (0, u.w0)(document.documentElement);
              const e = () => {
                (0, w.Bz)()
                  .closeTooltip()
                  .catch((e) => {
                    (0, d.x$)().error(
                      "<Tooltip>.closeTooltip(): getWindowControl().closeTooltip() error",
                      e,
                    );
                  });
              };
              return (
                (0, m.Um)() ||
                  document
                    .querySelector("body")
                    ?.addEventListener("mouseenter", e),
                () => {
                  (0, m.Um)() ||
                    document
                      .querySelector("body")
                      ?.removeEventListener("mouseenter", e);
                }
              );
            }, []),
            n.createElement(
              "div",
              { className: "tab-tooltip " + (o ? "active" : "") },
              n.createElement(v.J, {
                title: t,
                isLogoVisible: !1,
                isTooltip: !0,
                t: e,
              }),
            )
          );
        });
        (r(96893), (0, i.sX)(), (0, a.g)());
        const B = document.getElementById("root");
        B &&
          (0, o.s)(B).render(
            n.createElement(function () {
              return n.createElement(T, null);
            }, null),
          );
      },
      45101: (e, t, r) => {
        r.d(t, { $: () => P });
        var n,
          o = r(82130),
          i = r(84255),
          a = r(85410),
          l = r(52238),
          s = r(31049),
          c = r(14713),
          d = r(28511),
          u = r(48298),
          p = r(88907),
          m = r(64913),
          w = r(99560),
          g = r(95649),
          v = r(91337),
          h = r(28359),
          Z = r(54972),
          f = r(16456),
          b = r(72731),
          y = r(31559),
          x = r(82539),
          S = r(29293),
          k = r(26320),
          I = r(9276),
          C = r(3673),
          E = r(5216),
          O = r(41662),
          z = r(1979);
        !(function (e) {
          ((e.Normal = ""),
            (e.Small = "small"),
            (e.XSmall = "xsmall"),
            (e.XXSmall = "xxsmall"));
        })(n || (n = {}));
        const P = new Map([
          ["about", O.Z],
          ["advertising-info", u.Z],
          ["athletes", O.Z],
          ["bounty", b.Z],
          ["broker-awards", i.Z],
          ["brokerage-integration", u.Z],
          ["brokers", i.Z],
          ["careers", O.Z],
          [o.sl.community, a.Z],
          ["cookies-policy", b.Z],
          ["countries", l.Z],
          ["data-coverage", O.Z],
          ["disclaimer", s.Z],
          [o.sl.economicCalendar, c.Z],
          ["education", w.Z],
          ["errorView", d.Z],
          ["features", O.Z],
          ["follow", O.Z],
          ["heatmap", p.Z],
          ["home", O.Z],
          ["house-rules", O.Z],
          ["html5-stock-forex-bitcoin-charting-library", u.Z],
          ["ideas", w.Z],
          ["licenses", g.Z],
          ["lightweight-charts", u.Z],
          ["manifesto", O.Z],
          ["markets", z.Z],
          ["mobile", v.Z],
          ["moderators", h.Z],
          ["news", Z.Z],
          [o.sl.newsFlow, Z.Z],
          [o.sl.options, f.Z],
          ["partner-program", u.Z],
          ["pine-script-docs", S.Z],
          ["pine-script-reference", S.Z],
          ["pine-wizards", S.Z],
          ["policies", b.Z],
          ["privacy-policy", b.Z],
          ["referral-program", u.Z],
          ["screener", x.Z],
          ["script", S.Z],
          ["scripts", S.Z],
          ["share-your-love", y.Z],
          ["snaps", k.Z],
          ["sparks", I.Z],
          ["status", C.Z],
          ["streams", E.Z],
          [o.sl.helpCenter, m.Z],
          ["tradingview-for-the-web", u.Z],
          ["wall-of-love", O.Z],
          ["widget", u.Z],
          ["worldEconomy", z.Z],
        ]);
      },
      55442: (e, t, r) => {
        r.d(t, { sX: () => n.s, n_: () => o.n_, YA: () => o.YA });
        var n = r(17066),
          o = (r(18737), r(10496));
      },
      89597: (e, t, r) => {
        var n, o, i, a;
        (r.d(t, { g2: () => a }),
          (function (e) {
            ((e[(e.Normal = 0)] = "Normal"),
              (e[(e.Maximized = 1)] = "Maximized"),
              (e[(e.Minimized = 2)] = "Minimized"),
              (e[(e.Hidden = 3)] = "Hidden"),
              (e[(e.Fullscreen = 4)] = "Fullscreen"),
              (e[(e.FullscreenWithPanel = 5)] = "FullscreenWithPanel"));
          })(n || (n = {})),
          (function (e) {
            ((e.Basic = "basic"),
              (e.Options = "options"),
              (e.Credentials = "credentials"),
              (e.SignIn = "sign-in"),
              (e.Settings = "settings"),
              (e.SaveChanges = "save-changes"),
              (e.Welcome = "welcome"));
          })(o || (o = {})),
          (function (e) {
            ((e.Show = "show"), (e.Move = "move"));
          })(i || (i = {})),
          (function (e) {
            ((e[(e.Basic = 0)] = "Basic"),
              (e[(e.ChartData = 1)] = "ChartData"));
          })(a || (a = {})));
      },
      72298: (e) => {
        e.exports = require("electron");
      },
      57147: (e) => {
        e.exports = require("fs");
      },
      71017: (e) => {
        e.exports = require("path");
      },
      57310: (e) => {
        e.exports = require("url");
      },
    },
    r = {};
  function n(e) {
    var o = r[e];
    if (void 0 !== o) return o.exports;
    var i = (r[e] = { id: e, exports: {} });
    return (t[e].call(i.exports, i, i.exports, n), i.exports);
  }
  ((n.m = t),
    (e = []),
    (n.O = (t, r, o, i) => {
      if (!r) {
        var a = 1 / 0;
        for (d = 0; d < e.length; d++) {
          for (var [r, o, i] = e[d], l = !0, s = 0; s < r.length; s++)
            (!1 & i || a >= i) && Object.keys(n.O).every((e) => n.O[e](r[s]))
              ? r.splice(s--, 1)
              : ((l = !1), i < a && (a = i));
          if (l) {
            e.splice(d--, 1);
            var c = o();
            void 0 !== c && (t = c);
          }
        }
        return t;
      }
      i = i || 0;
      for (var d = e.length; d > 0 && e[d - 1][2] > i; d--) e[d] = e[d - 1];
      e[d] = [r, o, i];
    }),
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return (n.d(t, { a: t }), t);
    }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      ("undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 }));
    }),
    (() => {
      var e;
      n.g.importScripts && (e = n.g.location + "");
      var t = n.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var r = t.getElementsByTagName("script");
        r.length && (e = r[r.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      ((e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (n.p = e + "../"));
    })(),
    (() => {
      n.b = document.baseURI || self.location.href;
      var e = { 5816: 0 };
      n.O.j = (t) => 0 === e[t];
      var t = (t, r) => {
          var o,
            i,
            [a, l, s] = r,
            c = 0;
          if (a.some((t) => 0 !== e[t])) {
            for (o in l) n.o(l, o) && (n.m[o] = l[o]);
            if (s) var d = s(n);
          }
          for (t && t(r); c < a.length; c++)
            ((i = a[c]), n.o(e, i) && e[i] && e[i][0](), (e[a[c]] = 0));
          return n.O(d);
        },
        r = (global.webpackChunktradingview_desktop =
          global.webpackChunktradingview_desktop || []);
      (r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r))));
    })());
  var o = n.O(
    void 0,
    [7498, 686, 8078, 1070, 3160, 4340, 819, 2184, 567, 6086, 1922],
    () => n(78503),
  );
  o = n.O(o);
})();
