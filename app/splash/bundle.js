/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  var t,
    e = {
      97754: (t, e) => {
        var n;
        !(function () {
          "use strict";
          var r = {}.hasOwnProperty;
          function o() {
            for (var t = [], e = 0; e < arguments.length; e++) {
              var n = arguments[e];
              if (n) {
                var i = typeof n;
                if ("string" === i || "number" === i) t.push(n);
                else if (Array.isArray(n) && n.length) {
                  var a = o.apply(null, n);
                  a && t.push(a);
                } else if ("object" === i)
                  for (var s in n) r.call(n, s) && n[s] && t.push(s);
              }
            }
            return t.join(" ");
          }
          t.exports
            ? ((o.default = o), (t.exports = o))
            : void 0 ===
                (n = function () {
                  return o;
                }.apply(e, [])) || (t.exports = n);
        })();
      },
      93392: (t, e, n) => {
        "use strict";
        n.d(e, { Z: () => M });
        var r = n(43392),
          o = n.n(r),
          i = n(8021),
          a = n.n(i),
          s = n(78375),
          c = n.n(s),
          l = new URL(n(70660), n.b),
          p = new URL(n(53287), n.b),
          d = new URL(n(18572), n.b),
          u = new URL(n(37283), n.b),
          f = new URL(n(76126), n.b),
          h = new URL(n(28229), n.b),
          g = new URL(n(27869), n.b),
          v = new URL(n(10815), n.b),
          m = new URL(n(14294), n.b),
          b = a()(o()),
          y = c()(l),
          x = c()(p),
          w = c()(d),
          S = c()(u),
          k = c()(f),
          F = c()(h),
          j = c()(g),
          O = c()(v),
          E = c()(m);
        b.push([
          t.id,
          "#root {\n\theight: 100vh;\n\twidth: 100%;\n}\n\n.splash {\n\theight: 100%;\n\twidth: 100%;\n\tdisplay: flex;\n\tbackground-size: contain;\n\n\t> .splash-content {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tflex-direction: column;\n\t\tfont-size: 12px;\n\t\tline-height: 18px;\n\t\tmargin: 32px auto;\n\t\tjustify-content: flex-end;\n\n\t\t.splash-title {\n\t\t\tcolor: #FFFFFF;\n\t\t}\n\t}\n\n\t/* alex splash */\n\t&.alex {\n\t\tbackground-image: url(" +
            y +
            ");\n\n\t\t> .splash-content {\n\t\t\tmargin: 0 0 95px 305px;\n\t\t\twidth: 300px;\n\t\t}\n\t}\n\n\t/* look first then leap splash */\n\t&.lftl {\n\t\tbackground-image: url(" +
            x +
            ");\n\n\t\t> .splash-content {\n\t\t\tmargin: 100px auto;\n\n\t\t\t> .version-info {\n\t\t\t\tmargin-top: 135px;\n\t\t\t}\n\t\t}\n\t}\n\n\t/* logo splash */\n\t&.logo {\n\t\tbackground-image: url(" +
            w +
            ");\n\n\t\t> .splash-content {\n\t\t\tmargin: 56px auto;\n\n\t\t\t> .version-info {\n\t\t\t\tmargin-top: 4px;\n\t\t\t}\n\t\t}\n\t}\n\n\t/* first april splash */\n\t&.first-april {\n\t\tbackground-image: url(" +
            S +
            ");\n\n\t\t> .splash-content {\n\t\t\tmargin: 0 0 134px 51px;\n\t\t\twidth: 226px;\n\n\t\t\t> .version-info {\n\t\t\t\tmargin-top: 7px;\n\t\t\t\twhite-space: nowrap;\n\t\t\t}\n\t\t}\n\t}\n\n\t/* halloween splash */\n\t&.halloween {\n\t\tbackground-image: url(" +
            k +
            ");\n\t}\n\n\t/* black friday splash */\n\t&.black-friday {\n\t\tbackground-image: url(" +
            F +
            ");\n\t\tcolor: var(--error-message-color);\n\n\t\t.splash-event-title {\n\t\t\tbackground: linear-gradient(90deg, #FF2E3E 46.59%, #FC5901 77.06%, #FF9800 106.5%);\n\t\t}\n\t}\n\n\t/* cyber monday splash */\n\t&.cyber-monday {\n\t\tbackground-image: url(" +
            j +
            ");\n\t\tcolor: #00E5FF;\n\n\t\t.splash-event-title {\n\t\t\tbackground: linear-gradient(90deg, #03E6FE 0%, #61FFD0 75.52%);\n\t\t}\n\t}\n\n\t&.black-friday,\n\t&.cyber-monday {\n\t\t.splash-event-title {\n\t\t\t-webkit-background-clip: text;\n\t\t\t-webkit-text-fill-color: transparent;\n\t\t}\n\t}\n\n\t/* christmas holidays splash */\n\t&.christmas-holidays {\n\t\tbackground-image: url(" +
            O +
            ");\n\n\t\t> .splash-content {\n\t\t\twidth: 228px;\n\t\t\tmargin: 146px 0 0 48px;\n\t\t\tjustify-content: flex-start;\n\n\t\t\t> .version-info {\n\t\t\t\tmargin-top: 8px;\n\t\t\t\twhite-space: nowrap;\n\t\t\t}\n\t\t}\n\t}\n\n\t&.bull-and-bear {\n\t\tbackground-image: url(" +
            E +
            ");\n\t}\n}\n",
          "",
        ]);
        const M = b;
      },
      28454: (t, e, n) => {
        "use strict";
        n.d(e, { Z: () => s });
        var r = n(43392),
          o = n.n(r),
          i = n(8021),
          a = n.n(i)()(o());
        a.push([
          t.id,
          ".version-info {\n\tcolor: #B2B5BE;\n\tfont-family: -apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, SegoeUI, Ubuntu, sans-serif;\n\tfont-size: 12px;\n\tline-height: 18px;\n\theight: 22px;\n\tpadding-top: 4px;\n}\n\n.version-info.build-date {\n\tpadding-top: 0;\n}\n\n.happy-holidays .version-info,\n.new-year-tv .version-info {\n\tcolor: #F8F9FD;\n}\n",
          "",
        ]);
        const s = a;
      },
      50959: (t, e, n) => {
        "use strict";
        t.exports = n(95257);
      },
      80718: (t, e, n) => {
        "use strict";
        var r = n(50959),
          o = n(44478),
          i = n(72298),
          a = n(77118);
        const s = void 0 !== i.ipcMain;
        var c = n(10496),
          l = n(13855);
        const p = 1024;
        var d = n(79946),
          u = (n(23577), n(28430)),
          f = (n(23935), n(97003), n(9448));
        function h() {
          const t = (0, f.o)(
            new URLSearchParams(window.location.search).get(
              "rendererInitialData",
            ) ?? "{}",
          );
          if (!t) throw new Error("getRendererInitialData() jsonParse error");
          return t;
        }
        let g,
          v = !1,
          m = 0,
          b = 0;
        function y() {
          const t = h().remoteServiceInstanceId ?? window.location.href,
            e = Math.round(performance.memory.usedJSHeapSize / p),
            n = Math.round(performance.memory.totalJSHeapSize / p),
            r = Math.round(performance.memory.jsHeapSizeLimit / p),
            o = e / r,
            i = `Heap info for renderer - ${t}. Heap Used ${e} Kb. Heap Total ${n} Kb. Heap Limit ${r} Kb.`;
          return o <= 0.8
            ? ((m = 0), void (b = 0))
            : o > 0.8 && m < 2
              ? ((0, l.x$)().warn(i), void m++)
              : void (
                  o > 0.97 &&
                  (v ||
                    ((0, c.n_)({ level: "warning", breadcrumb: i }), (v = !0)),
                  b < 2 && ((0, l.x$)().warn(i), b++))
                );
        }
        var x = n(98078),
          w = n(36458),
          S = n(59391),
          k = n(25211),
          F = n.n(k),
          j = n(62962),
          O = n.n(j),
          E = n(20310),
          M = n.n(E),
          P = n(29290),
          U = n.n(P),
          C = n(47289),
          $ = n.n(C),
          D = n(24834),
          I = n.n(D),
          R = n(28454),
          T = {};
        ((T.styleTagTransform = I()),
          (T.setAttributes = U()),
          (T.insert = M().bind(null, "head")),
          (T.domAPI = O()),
          (T.insertStyleElement = $()),
          F()(R.Z, T),
          R.Z && R.Z.locals && R.Z.locals,
          w.i.initializeRpc());
        class L extends r.Component {
          state = { version: "", buildDate: "" };
          componentDidMount() {
            (0, S.wK)(this.initVersion());
          }
          async initVersion() {
            const t = await w.i
                .provideProxy("tvd:main-service")
                .getVersionInfo(),
              e = new Date(t.buildDate).toLocaleDateString();
            this.setState({ version: `Version ${t.appVersion}`, buildDate: e });
          }
          render() {
            return r.createElement(
              "div",
              { className: "version-info" },
              `${this.state.version} ${this.state.version ? "·" : ""} ${this.state.buildDate}`,
            );
          }
        }
        var z = n(93392),
          A = {};
        ((A.styleTagTransform = I()),
          (A.setAttributes = U()),
          (A.insert = M().bind(null, "head")),
          (A.domAPI = O()),
          (A.insertStyleElement = $()),
          F()(z.Z, A),
          z.Z && z.Z.locals && z.Z.locals);
        const Z = new Map([
          ["alex", "typography-accent-adaptive-2xs-semibold-desktop"],
          ["logo", "typography-accent-adaptive-xs-euclid-desktop"],
          ["first-april", "typography-accent-adaptive-xs-euclid-desktop"],
          ["halloween", "typography-accent-adaptive-2xs-semibold-desktop"],
          ["black-friday", "typography-accent-adaptive-2xs-semibold-desktop"],
          ["cyber-monday", "typography-accent-adaptive-2xs-semibold-desktop"],
          [
            "christmas-holidays",
            "typography-accent-adaptive-xs-euclid-desktop",
          ],
          ["bull-and-bear", "typography-accent-adaptive-2xs-semibold-desktop"],
        ]);
        u.P.exists || u.P.initialize((0, d.kS)());
        const _ = () => {
          const { splashData: t } = h();
          return r.createElement(
            "div",
            { className: `splash ${t.postfix}` },
            r.createElement(
              "div",
              { className: "splash-content" },
              r.createElement(
                x.Z,
                {
                  tag: "span",
                  name: Z.get(t.postfix) ?? "typography-regular-14px",
                  className: "splash-title",
                },
                t.title,
                t.eventTitle &&
                  r.createElement(
                    r.Fragment,
                    null,
                    " · ",
                    r.createElement(
                      "span",
                      { className: "splash-event-title" },
                      t.eventTitle,
                    ),
                  ),
              ),
              r.createElement(L, null),
            ),
          );
        };
        (n(96893),
          (function () {
            if (s)
              throw new Error(
                "This initialization must be called from renderer process",
              );
            (0, a.S1)();
          })(),
          (function (t = 6e4) {
            (!(function () {
              const t = Math.round(performance.memory.jsHeapSizeLimit / p);
              (0, c.YA)("memory.heapLimit", t.toString());
            })(),
              g
                ? (0, l.x$)().error("Heap log for this renderer already exist")
                : (g = setInterval(y, t)));
          })());
        const H = document.getElementById("root");
        H && (0, o.s)(H).render(r.createElement(_, null));
      },
      52364: (t, e, n) => {
        "use strict";
        n.d(e, { iC: () => r });
        const r = "tvd:logger-service";
        var o;
        !(function (t) {
          ((t[(t.Debug = 0)] = "Debug"),
            (t[(t.Info = 1)] = "Info"),
            (t[(t.Warn = 2)] = "Warn"),
            (t[(t.Error = 3)] = "Error"));
        })(o || (o = {}));
      },
      13855: (t, e, n) => {
        "use strict";
        n.d(e, { kK: () => a, M2: () => s, x$: () => c });
        var r = n(72298),
          o = n(36458),
          i = n(52364);
        function a() {
          return r.ipcMain
            ? o.i.getProvider().provide(i.iC)
            : o.i.provideProxy(i.iC);
        }
        function s() {
          return o.i.provide(i.iC);
        }
        function c() {
          return o.i.provideProxy(i.iC);
        }
      },
      10496: (t, e, n) => {
        "use strict";
        n.d(e, { n_: () => o, YA: () => i });
        var r = n(77118);
        function o(t) {
          (0, r.n_)({
            category: "message",
            message: t.breadcrumb,
            level: t.level,
          });
        }
        function i(t, e) {
          (0, r.YA)(t, e);
        }
      },
      89597: (t, e, n) => {
        "use strict";
        var r, o, i, a;
        (!(function (t) {
          ((t[(t.Normal = 0)] = "Normal"),
            (t[(t.Maximized = 1)] = "Maximized"),
            (t[(t.Minimized = 2)] = "Minimized"),
            (t[(t.Hidden = 3)] = "Hidden"),
            (t[(t.Fullscreen = 4)] = "Fullscreen"),
            (t[(t.FullscreenWithPanel = 5)] = "FullscreenWithPanel"));
        })(r || (r = {})),
          (function (t) {
            ((t.Basic = "basic"),
              (t.Options = "options"),
              (t.Credentials = "credentials"),
              (t.SignIn = "sign-in"),
              (t.Settings = "settings"),
              (t.SaveChanges = "save-changes"),
              (t.Welcome = "welcome"));
          })(o || (o = {})),
          (function (t) {
            ((t.Show = "show"), (t.Move = "move"));
          })(i || (i = {})),
          (function (t) {
            ((t[(t.Basic = 0)] = "Basic"),
              (t[(t.ChartData = 1)] = "ChartData"));
          })(a || (a = {})));
      },
      97003: (t, e, n) => {
        "use strict";
        n.d(e, {
          nt: () => u,
          ZJ: () => p.ZJ,
          UT: () => l.U,
          UD: () => s.U,
          Kr: () => a.Kr,
          Wf: () => i.W,
          D9: () => d,
          vO: () => p.vO,
        });
        var r,
          o,
          i = n(36842),
          a = n(5603),
          s = n(80271),
          c = (n(95807), n(96485), n(39985)),
          l = n(94232),
          p = n(58789);
        function d(t) {
          if ("object" != typeof t || null === t) return !1;
          const e = t.constructor;
          return !!e && Reflect.hasMetadata(c.f, e);
        }
        function u() {
          return (t) => {
            const e = new t();
            l.U.instance.registerProvider(e);
          };
        }
        (((o = r || (r = {}))[(o.Transient = 0)] = "Transient"),
          (o[(o.Singleton = 1)] = "Singleton"),
          Symbol("ServiceContracts"));
      },
      39985: (t, e, n) => {
        "use strict";
        n.d(e, { f: () => r });
        const r = Symbol("ServiceContracts");
      },
      58789: (t, e, n) => {
        "use strict";
        n.d(e, { ZJ: () => r, xj: () => a, vO: () => s });
        var r,
          o = n(80271),
          i = n(39985);
        function a(t) {
          return "object" == typeof t && t.reflectInstance instanceof Function;
        }
        function s(t, ...e) {
          if ("object" != typeof t || !t) return;
          const n = (t) => !e || 0 === e.length || e.includes(t),
            a = [];
          if (n(r.Contracts))
            for (const e of (function* (t) {
              if ("object" == typeof t && t) {
                let e = t.constructor;
                for (; e; ) {
                  yield e;
                  const t = Object.getPrototypeOf(e);
                  if ("function" != typeof t || t === Object) break;
                  e = t;
                }
              }
            })(t)) {
              const t = e ? Reflect.getMetadata(i.f, e) : void 0;
              t && a.push(...t);
            }
          const s = [];
          if (n(r.Methods))
            for (const { key: e, value: n } of (function* (t) {
              const e = ["constructor", "isMounted", "replaceState"];
              if ("object" == typeof t && t) {
                let n = t;
                for (; n && n.constructor !== Object; ) {
                  const r = Object.getOwnPropertyNames(n).filter(
                    (t) => !e.includes(t),
                  );
                  for (const e of r)
                    try {
                      const n = t[e];
                      yield { key: e, value: n };
                    } catch (t) {
                      console.error(
                        `Fail to get property [${e}]: ${(0, o.U)(t)}`,
                      );
                    }
                  n = Object.getPrototypeOf(n);
                }
              }
            })(t))
              n instanceof Function && s.push({ name: e });
          return { contracts: a, methods: s };
        }
        !(function (t) {
          ((t[(t.Contracts = 0)] = "Contracts"),
            (t[(t.Methods = 1)] = "Methods"));
        })(r || (r = {}));
      },
      94232: (t, e, n) => {
        "use strict";
        n.d(e, { U: () => o });
        var r = n(58789);
        class o {
          static instance = new o();
          factories = [];
          providers = [];
          registerFactory(t) {
            this.factories.push(t);
          }
          registerProvider(t) {
            this.providers.push(t);
          }
          tryCreate(t, ...e) {
            const n = t instanceof Array ? t : [t];
            for (const t of this.factories) {
              const r = t(n, ...e);
              if (r) return r;
            }
            for (const t of this.providers) {
              const r = t.tryCreate(n, ...e);
              if (r) return r;
            }
          }
          create(t, ...e) {
            const n = this.tryCreate(t, ...e);
            if (!n) {
              const e = t instanceof Array ? t.join(";") : t;
              throw new Error(
                `Local service with contracts [${e}] not registered, and remoting not configured. Instance can not be created.`,
              );
            }
            return n;
          }
          reflectInstance(t, ...e) {
            for (const n of this.providers)
              if ((0, r.xj)(n)) {
                const r = n.reflectInstance(t, ...e);
                if (r) return r;
              }
            throw new Error(
              "System does not provide acceptable Service Reflector instance",
            );
          }
        }
      },
      59391: (t, e, n) => {
        "use strict";
        n.d(e, { wK: () => r.wK, _v: () => r._v, Um: () => o.Um });
        var r = n(95091),
          o = n(41029);
        (n(67644), n(57118), n(19014), n(89183));
      },
      9448: (t, e, n) => {
        "use strict";
        n.d(e, { o: () => o });
        var r = n(13855);
        const o = (t, e) => {
          try {
            return JSON.parse(t, e);
          } catch (t) {
            return ((0, r.kK)().error("jsonParse JSON.parse error", t), null);
          }
        };
      },
      70660: (t, e, n) => {
        "use strict";
        t.exports = n.p + "7ce5807a8b1422a92275.png";
      },
      28229: (t, e, n) => {
        "use strict";
        t.exports = n.p + "a405b1e16e931f3b9106.png";
      },
      14294: (t, e, n) => {
        "use strict";
        t.exports = n.p + "796a3062187e0a5f7747.png";
      },
      10815: (t, e, n) => {
        "use strict";
        t.exports = n.p + "ef54da929d102fba360a.png";
      },
      27869: (t, e, n) => {
        "use strict";
        t.exports = n.p + "851cba6f31dd7fa71015.png";
      },
      37283: (t, e, n) => {
        "use strict";
        t.exports = n.p + "132dbb67e4d6457a5d0a.png";
      },
      76126: (t, e, n) => {
        "use strict";
        t.exports = n.p + "5d3775bf39ca295e26cb.png";
      },
      53287: (t, e, n) => {
        "use strict";
        t.exports = n.p + "974044dd593d3803e066.png";
      },
      18572: (t, e, n) => {
        "use strict";
        t.exports = n.p + "2d160a7bd5513313b021.png";
      },
      72298: (t) => {
        "use strict";
        t.exports = require("electron");
      },
      57147: (t) => {
        "use strict";
        t.exports = require("fs");
      },
      71017: (t) => {
        "use strict";
        t.exports = require("path");
      },
      57310: (t) => {
        "use strict";
        t.exports = require("url");
      },
      77118: (t, e, n) => {
        "use strict";
        n.d(e, { n_: () => r.n, YA: () => o.YA, S1: () => i.S });
        var r = n(14547),
          o = n(84434),
          i = (n(76191), n(16331), n(70686));
        (n(60203), n(48057));
      },
    },
    n = {};
  function r(t) {
    var o = n[t];
    if (void 0 !== o) return o.exports;
    var i = (n[t] = { id: t, exports: {} });
    return (e[t].call(i.exports, i, i.exports, r), i.exports);
  }
  ((r.m = e),
    (t = []),
    (r.O = (e, n, o, i) => {
      if (!n) {
        var a = 1 / 0;
        for (p = 0; p < t.length; p++) {
          for (var [n, o, i] = t[p], s = !0, c = 0; c < n.length; c++)
            (!1 & i || a >= i) && Object.keys(r.O).every((t) => r.O[t](n[c]))
              ? n.splice(c--, 1)
              : ((s = !1), i < a && (a = i));
          if (s) {
            t.splice(p--, 1);
            var l = o();
            void 0 !== l && (e = l);
          }
        }
        return e;
      }
      i = i || 0;
      for (var p = t.length; p > 0 && t[p - 1][2] > i; p--) t[p] = t[p - 1];
      t[p] = [n, o, i];
    }),
    (r.n = (t) => {
      var e = t && t.__esModule ? () => t.default : () => t;
      return (r.d(e, { a: e }), e);
    }),
    (r.d = (t, e) => {
      for (var n in e)
        r.o(e, n) &&
          !r.o(t, n) &&
          Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
    }),
    (r.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (r.r = (t) => {
      ("undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 }));
    }),
    (() => {
      var t;
      r.g.importScripts && (t = r.g.location + "");
      var e = r.g.document;
      if (!t && e && (e.currentScript && (t = e.currentScript.src), !t)) {
        var n = e.getElementsByTagName("script");
        n.length && (t = n[n.length - 1].src);
      }
      if (!t)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      ((t = t
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (r.p = t + "../"));
    })(),
    (() => {
      r.b = document.baseURI || self.location.href;
      var t = { 4759: 0 };
      r.O.j = (e) => 0 === t[e];
      var e = (e, n) => {
          var o,
            i,
            [a, s, c] = n,
            l = 0;
          if (a.some((e) => 0 !== t[e])) {
            for (o in s) r.o(s, o) && (r.m[o] = s[o]);
            if (c) var p = c(r);
          }
          for (e && e(n); l < a.length; l++)
            ((i = a[l]), r.o(t, i) && t[i] && t[i][0](), (t[a[l]] = 0));
          return r.O(p);
        },
        n = (global.webpackChunktradingview_desktop =
          global.webpackChunktradingview_desktop || []);
      (n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n))));
    })());
  var o = r.O(void 0, [7498, 686, 8078, 258, 819, 914, 8655], () => r(80718));
  o = r.O(o);
})();
