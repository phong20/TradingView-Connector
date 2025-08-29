(() => {
  "use strict";
  var e,
    t = {
      50959: (e, t, r) => {
        e.exports = r(95257);
      },
      87620: (e, t, r) => {
        var o = r(50959),
          n = r(44478),
          i = r(36458),
          a = r(72298),
          c = r(77118);
        const s = void 0 !== a.ipcMain;
        var l = r(10496),
          u = r(13855);
        const d = 1024;
        var f = r(79946),
          h = (r(23577), r(28430));
        r(23935);
        var p = r(97003),
          v = r(9448);
        let m,
          g = !1,
          b = 0,
          y = 0;
        function w() {
          const e =
              (function () {
                const e = (0, v.o)(
                  new URLSearchParams(window.location.search).get(
                    "rendererInitialData",
                  ) ?? "{}",
                );
                if (!e)
                  throw new Error("getRendererInitialData() jsonParse error");
                return e;
              })().remoteServiceInstanceId ?? window.location.href,
            t = Math.round(performance.memory.usedJSHeapSize / d),
            r = Math.round(performance.memory.totalJSHeapSize / d),
            o = Math.round(performance.memory.jsHeapSizeLimit / d),
            n = t / o,
            i = `Heap info for renderer - ${e}. Heap Used ${t} Kb. Heap Total ${r} Kb. Heap Limit ${o} Kb.`;
          return n <= 0.8
            ? ((b = 0), void (y = 0))
            : n > 0.8 && b < 2
              ? ((0, u.x$)().warn(i), void b++)
              : void (
                  n > 0.97 &&
                  (g ||
                    ((0, l.n_)({ level: "warning", breadcrumb: i }), (g = !0)),
                  y < 2 && ((0, u.x$)().warn(i), y++))
                );
        }
        h.P.exists || h.P.initialize((0, f.kS)());
        let S = class {
          constructor() {
            (0, p.Xp)(this);
          }
          getIsOnline() {
            return Promise.resolve(navigator.onLine);
          }
        };
        S = (function (e, t, r, o) {
          var n,
            i = arguments.length,
            a =
              i < 3
                ? t
                : null === o
                  ? (o = Object.getOwnPropertyDescriptor(t, r))
                  : o;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            a = Reflect.decorate(e, t, r, o);
          else
            for (var c = e.length - 1; c >= 0; c--)
              (n = e[c]) &&
                (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
          return (i > 3 && a && Object.defineProperty(t, r, a), a);
        })([(0, p.t6)("tvd:get-is-online-contract")], S);
        h.P.exists || h.P.initialize((0, f.kS)());
        let C = class {
          constructor() {
            (0, p.Xp)(this);
          }
          generateCircleImg(e, t) {
            return Promise.resolve(
              this.drawCircleCommon(t, (r, o) => {
                this.drawCircleContent(r, t, e, o);
              }),
            );
          }
          generateRadioImg(e, t) {
            return Promise.resolve(
              this.drawCircleCommon(t, (t, r) => {
                e && this.drawInnerCircle(t, r.width, r.height);
              }),
            );
          }
          drawCircleCommon(e, t) {
            const r = this.createCanvas(e),
              o = r.getContext("2d");
            return o ? (this.drawCircle(o, e, r), t(o, r), r.toDataURL()) : "";
          }
          createCanvas(e) {
            ((e.radius *= e.scaleFactor),
              e.height &&
                e.width &&
                ((e.height *= e.scaleFactor), (e.width *= e.scaleFactor)));
            const t = e.radius,
              r = document.createElement("canvas");
            return (
              (r.width = e.width ?? Math.ceil(2 * t)),
              (r.height = e.height ?? Math.ceil(2 * t)),
              r
            );
          }
          drawCircle(e, t, r) {
            const o = r.width / 2,
              n = r.height / 2;
            (e.clearRect(0, 0, r.width, r.height),
              (e.fillStyle = t.color),
              e.beginPath(),
              e.arc(o, n, t.radius, 0, 2 * Math.PI),
              e.fill(),
              t.borderWidth &&
                t.borderColor &&
                ((e.lineWidth = t.borderWidth),
                (e.strokeStyle = t.borderColor),
                e.stroke()));
          }
          drawInnerCircle(e, t, r) {
            (e.beginPath(),
              (e.globalCompositeOperation = "destination-out"),
              e.arc(t / 2, r / 2, t / 6, 0, 2 * Math.PI),
              e.fill());
          }
          drawCircleContent(e, t, r, o) {
            const n = o.width / 2,
              i = o.height / 2;
            ((e.font = t.font),
              (e.textAlign = "center"),
              (e.textBaseline = "middle"),
              (e.fillStyle = t.fontColor));
            const a = Number(/[0-9\.]+/.exec(e.font));
            if (!t.fit || isNaN(a)) e.fillText(r, n, i);
            else {
              const o = e.measureText(r).width,
                c = (Math.cos(Math.atan(a / o)) * t.radius * 2) / o;
              (e.setTransform(c, 0, 0, c, n, i),
                e.fillText(r, 0, 1),
                e.setTransform(1, 0, 0, 1, 0, 0));
            }
          }
        };
        C = (function (e, t, r, o) {
          var n,
            i = arguments.length,
            a =
              i < 3
                ? t
                : null === o
                  ? (o = Object.getOwnPropertyDescriptor(t, r))
                  : o;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            a = Reflect.decorate(e, t, r, o);
          else
            for (var c = e.length - 1; c >= 0; c--)
              (n = e[c]) &&
                (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
          return (i > 3 && a && Object.defineProperty(t, r, a), a);
        })([(0, p.t6)("tvd:image-creator-contract")], C);
        var O = r(59391);
        h.P.exists || h.P.initialize((0, f.kS)());
        let P = class {
          audio;
          timeoutAudio;
          volumeSubscribe;
          play = !1;
          constructor() {
            (0, p.Xp)(this);
          }
          playRepeat = () => {
            this.play && this.audio && (0, O.wK)(this.audio.play());
          };
          playSound(e) {
            this.play ||
              ((this.audio = new Audio(e.name)),
              this.audio.load(),
              (this.audio.volume = e.volume),
              this.changeVolumeSubscribe(),
              e.duration > 0 &&
                (this.audio.addEventListener("ended", this.playRepeat),
                (this.play = !0),
                this.timeoutAudio && clearTimeout(this.timeoutAudio),
                (this.timeoutAudio = setTimeout(() => {
                  this.stopSound();
                }, e.duration))),
              (0, O.wK)(this.audio.play()));
          }
          stopSound() {
            (this.timeoutAudio && clearTimeout(this.timeoutAudio),
              this.volumeSubscribe?.unsubscribe(),
              (this.volumeSubscribe = void 0),
              (this.timeoutAudio = void 0),
              (this.play = !1),
              this.audio?.removeEventListener("ended", this.playRepeat));
          }
          changeVolumeSubscribe() {
            this.volumeSubscribe ||
              (this.volumeSubscribe = i.i
                .provideProxy("tvd:settings-provider-service")
                .alertVolumeChange.subscribe((e) => {
                  this.audio && (this.audio.volume = e / 100);
                }));
          }
        };
        P = (function (e, t, r, o) {
          var n,
            i = arguments.length,
            a =
              i < 3
                ? t
                : null === o
                  ? (o = Object.getOwnPropertyDescriptor(t, r))
                  : o;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            a = Reflect.decorate(e, t, r, o);
          else
            for (var c = e.length - 1; c >= 0; c--)
              (n = e[c]) &&
                (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
          return (i > 3 && a && Object.defineProperty(t, r, a), a);
        })([(0, p.t6)("tvd:sound-player-contract")], P);
        class j extends o.Component {
          soundPlayer = new P();
          imageCreator = new C();
          getIsOnline = new S();
          componentDidMount() {
            a.ipcRenderer.send("tvd:common-view-ready");
          }
          render() {
            return o.createElement(o.Fragment, null);
          }
        }
        (r(96893),
          (function () {
            if (s)
              throw new Error(
                "This initialization must be called from renderer process",
              );
            (0, c.S1)();
          })(),
          (function (e = 6e4) {
            (!(function () {
              const e = Math.round(performance.memory.jsHeapSizeLimit / d);
              (0, l.YA)("memory.heapLimit", e.toString());
            })(),
              m
                ? (0, u.x$)().error("Heap log for this renderer already exist")
                : (m = setInterval(w, e)));
          })(),
          i.i.initializeRpc());
        const x = document.getElementById("root");
        x && (0, n.s)(x).render(o.createElement(j, null));
      },
      52364: (e, t, r) => {
        r.d(t, { iC: () => o });
        const o = "tvd:logger-service";
        var n;
        !(function (e) {
          ((e[(e.Debug = 0)] = "Debug"),
            (e[(e.Info = 1)] = "Info"),
            (e[(e.Warn = 2)] = "Warn"),
            (e[(e.Error = 3)] = "Error"));
        })(n || (n = {}));
      },
      13855: (e, t, r) => {
        r.d(t, { kK: () => a, M2: () => c, x$: () => s });
        var o = r(72298),
          n = r(36458),
          i = r(52364);
        function a() {
          return o.ipcMain
            ? n.i.getProvider().provide(i.iC)
            : n.i.provideProxy(i.iC);
        }
        function c() {
          return n.i.provide(i.iC);
        }
        function s() {
          return n.i.provideProxy(i.iC);
        }
      },
      10496: (e, t, r) => {
        r.d(t, { n_: () => n, YA: () => i });
        var o = r(77118);
        function n(e) {
          (0, o.n_)({
            category: "message",
            message: e.breadcrumb,
            level: e.level,
          });
        }
        function i(e, t) {
          (0, o.YA)(e, t);
        }
      },
      89597: (e, t, r) => {
        var o, n, i, a;
        (!(function (e) {
          ((e[(e.Normal = 0)] = "Normal"),
            (e[(e.Maximized = 1)] = "Maximized"),
            (e[(e.Minimized = 2)] = "Minimized"),
            (e[(e.Hidden = 3)] = "Hidden"),
            (e[(e.Fullscreen = 4)] = "Fullscreen"),
            (e[(e.FullscreenWithPanel = 5)] = "FullscreenWithPanel"));
        })(o || (o = {})),
          (function (e) {
            ((e.Basic = "basic"),
              (e.Options = "options"),
              (e.Credentials = "credentials"),
              (e.SignIn = "sign-in"),
              (e.Settings = "settings"),
              (e.SaveChanges = "save-changes"),
              (e.Welcome = "welcome"));
          })(n || (n = {})),
          (function (e) {
            ((e.Show = "show"), (e.Move = "move"));
          })(i || (i = {})),
          (function (e) {
            ((e[(e.Basic = 0)] = "Basic"),
              (e[(e.ChartData = 1)] = "ChartData"));
          })(a || (a = {})));
      },
      97003: (e, t, r) => {
        r.d(t, {
          nt: () => p,
          ZJ: () => u.ZJ,
          t6: () => h,
          UT: () => l.U,
          Xp: () => f,
          UD: () => c.U,
          Kr: () => a.Kr,
          Wf: () => i.W,
          D9: () => d,
          vO: () => u.vO,
        });
        var o,
          n,
          i = r(36842),
          a = r(5603),
          c = r(80271),
          s = (r(95807), r(96485), r(39985)),
          l = r(94232),
          u = r(58789);
        function d(e) {
          if ("object" != typeof e || null === e) return !1;
          const t = e.constructor;
          return !!t && Reflect.hasMetadata(s.f, t);
        }
        function f(e) {
          const t = (0, u.vO)(e, u.ZJ.Contracts)?.contracts;
          if (!t)
            throw new Error(
              "Object does not provide contracts. Use Service decorator",
            );
          l.U.instance.registerFactory(
            (r, ...o) => (
              o.length > 0 &&
                console.debug("Using non zero arguments for singleton factory"),
              r.every((e) => t.includes(e)) ? e : void 0
            ),
          );
        }
        function h(...e) {
          return (t) => {
            Reflect.defineMetadata(s.f, e, t);
          };
        }
        function p() {
          return (e) => {
            const t = new e();
            l.U.instance.registerProvider(t);
          };
        }
        (((n = o || (o = {}))[(n.Transient = 0)] = "Transient"),
          (n[(n.Singleton = 1)] = "Singleton"),
          Symbol("ServiceContracts"));
      },
      39985: (e, t, r) => {
        r.d(t, { f: () => o });
        const o = Symbol("ServiceContracts");
      },
      58789: (e, t, r) => {
        r.d(t, { ZJ: () => o, xj: () => a, vO: () => c });
        var o,
          n = r(80271),
          i = r(39985);
        function a(e) {
          return "object" == typeof e && e.reflectInstance instanceof Function;
        }
        function c(e, ...t) {
          if ("object" != typeof e || !e) return;
          const r = (e) => !t || 0 === t.length || t.includes(e),
            a = [];
          if (r(o.Contracts))
            for (const t of (function* (e) {
              if ("object" == typeof e && e) {
                let t = e.constructor;
                for (; t; ) {
                  yield t;
                  const e = Object.getPrototypeOf(t);
                  if ("function" != typeof e || e === Object) break;
                  t = e;
                }
              }
            })(e)) {
              const e = t ? Reflect.getMetadata(i.f, t) : void 0;
              e && a.push(...e);
            }
          const c = [];
          if (r(o.Methods))
            for (const { key: t, value: r } of (function* (e) {
              const t = ["constructor", "isMounted", "replaceState"];
              if ("object" == typeof e && e) {
                let r = e;
                for (; r && r.constructor !== Object; ) {
                  const o = Object.getOwnPropertyNames(r).filter(
                    (e) => !t.includes(e),
                  );
                  for (const t of o)
                    try {
                      const r = e[t];
                      yield { key: t, value: r };
                    } catch (e) {
                      console.error(
                        `Fail to get property [${t}]: ${(0, n.U)(e)}`,
                      );
                    }
                  r = Object.getPrototypeOf(r);
                }
              }
            })(e))
              r instanceof Function && c.push({ name: t });
          return { contracts: a, methods: c };
        }
        !(function (e) {
          ((e[(e.Contracts = 0)] = "Contracts"),
            (e[(e.Methods = 1)] = "Methods"));
        })(o || (o = {}));
      },
      94232: (e, t, r) => {
        r.d(t, { U: () => n });
        var o = r(58789);
        class n {
          static instance = new n();
          factories = [];
          providers = [];
          registerFactory(e) {
            this.factories.push(e);
          }
          registerProvider(e) {
            this.providers.push(e);
          }
          tryCreate(e, ...t) {
            const r = e instanceof Array ? e : [e];
            for (const e of this.factories) {
              const o = e(r, ...t);
              if (o) return o;
            }
            for (const e of this.providers) {
              const o = e.tryCreate(r, ...t);
              if (o) return o;
            }
          }
          create(e, ...t) {
            const r = this.tryCreate(e, ...t);
            if (!r) {
              const t = e instanceof Array ? e.join(";") : e;
              throw new Error(
                `Local service with contracts [${t}] not registered, and remoting not configured. Instance can not be created.`,
              );
            }
            return r;
          }
          reflectInstance(e, ...t) {
            for (const r of this.providers)
              if ((0, o.xj)(r)) {
                const o = r.reflectInstance(e, ...t);
                if (o) return o;
              }
            throw new Error(
              "System does not provide acceptable Service Reflector instance",
            );
          }
        }
      },
      59391: (e, t, r) => {
        r.d(t, { wK: () => o.wK, _v: () => o._v, Um: () => n.Um });
        var o = r(95091),
          n = r(41029);
        (r(67644), r(57118), r(19014), r(89183));
      },
      9448: (e, t, r) => {
        r.d(t, { o: () => n });
        var o = r(13855);
        const n = (e, t) => {
          try {
            return JSON.parse(e, t);
          } catch (e) {
            return ((0, o.kK)().error("jsonParse JSON.parse error", e), null);
          }
        };
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
      77118: (e, t, r) => {
        r.d(t, { n_: () => o.n, YA: () => n.YA, S1: () => i.S });
        var o = r(14547),
          n = r(84434),
          i = (r(76191), r(16331), r(70686));
        (r(60203), r(48057));
      },
    },
    r = {};
  function o(e) {
    var n = r[e];
    if (void 0 !== n) return n.exports;
    var i = (r[e] = { id: e, exports: {} });
    return (t[e].call(i.exports, i, i.exports, o), i.exports);
  }
  ((o.m = t),
    (e = []),
    (o.O = (t, r, n, i) => {
      if (!r) {
        var a = 1 / 0;
        for (u = 0; u < e.length; u++) {
          for (var [r, n, i] = e[u], c = !0, s = 0; s < r.length; s++)
            (!1 & i || a >= i) && Object.keys(o.O).every((e) => o.O[e](r[s]))
              ? r.splice(s--, 1)
              : ((c = !1), i < a && (a = i));
          if (c) {
            e.splice(u--, 1);
            var l = n();
            void 0 !== l && (t = l);
          }
        }
        return t;
      }
      i = i || 0;
      for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
      e[u] = [r, n, i];
    }),
    (o.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return (o.d(t, { a: t }), t);
    }),
    (o.d = (e, t) => {
      for (var r in t)
        o.o(t, r) &&
          !o.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (o.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (o.r = (e) => {
      ("undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 }));
    }),
    (() => {
      var e;
      o.g.importScripts && (e = o.g.location + "");
      var t = o.g.document;
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
        (o.p = e + "../"));
    })(),
    (() => {
      o.b = document.baseURI || self.location.href;
      var e = { 4327: 0 };
      o.O.j = (t) => 0 === e[t];
      var t = (t, r) => {
          var n,
            i,
            [a, c, s] = r,
            l = 0;
          if (a.some((t) => 0 !== e[t])) {
            for (n in c) o.o(c, n) && (o.m[n] = c[n]);
            if (s) var u = s(o);
          }
          for (t && t(r); l < a.length; l++)
            ((i = a[l]), o.o(e, i) && e[i] && e[i][0](), (e[a[l]] = 0));
          return o.O(u);
        },
        r = (global.webpackChunktradingview_desktop =
          global.webpackChunktradingview_desktop || []);
      (r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r))));
    })());
  var n = o.O(void 0, [7498, 686, 258, 819, 914, 8655], () => o(87620));
  n = o.O(n);
})();
