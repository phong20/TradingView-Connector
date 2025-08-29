(() => {
  "use strict";
  var e,
    r,
    t,
    n = {
      38390: (e, r, t) => {
        t.d(r, { Z: () => a });
        var n = t(43392),
          o = t.n(n),
          s = t(8021),
          i = t.n(s)()(o());
        i.push([
          e.id,
          ".render-toast-container {\n\twidth: max-content;\n}\n",
          "",
        ]);
        const a = i;
      },
      69478: (e, r, t) => {
        t.d(r, { nb: () => d, eX: () => l, ZU: () => u });
        var n = t(72298),
          o = t(76133),
          s = t(13855),
          i = t(29060),
          a = (t(97003), t(9448));
        const c = {
          windowControl: null,
          dialogControl: null,
          toastWindowHandler: null,
        };
        function d() {
          const e = (0, a.o)(
            new URLSearchParams(window.location.search).get(
              "rendererInitialData",
            ) ?? "{}",
          );
          if (!e) throw new Error("getRendererInitialData() jsonParse error");
          return e;
        }
        function l() {
          return (
            (c.toastWindowHandler = (function (e, r, t) {
              let n =
                window?.remoteServiceInstanceId ?? d().remoteServiceInstanceId;
              if (
                (t && (n = t),
                !r || n !== window?.initialRemoteServiceInstanceId)
              ) {
                (0, s.x$)().debug(
                  `[Renderer] initializeIpcProxyForInstance ${e} id: ${n}; Old id ${window?.initialRemoteServiceInstanceId}`,
                );
                const r = o.hx.createForInstance(n);
                return ((window.initialRemoteServiceInstanceId = n), r);
              }
              return r;
            })("toastWindowHandler", c.toastWindowHandler)),
            c.toastWindowHandler
          );
        }
        function u() {
          n.ipcRenderer.send(i.mZ);
        }
      },
      79184: (e, r, t) => {
        t.d(r, { v: () => H });
        var n = t(50959),
          o = t(44478),
          s = t(17066),
          i = (t(18737), t(10496)),
          a = t(13855);
        const c = 1024;
        var d = t(69478);
        let l,
          u = !1,
          h = 0,
          f = 0;
        function p() {
          const e = (0, d.nb)().remoteServiceInstanceId ?? window.location.href,
            r = Math.round(performance.memory.usedJSHeapSize / c),
            t = Math.round(performance.memory.totalJSHeapSize / c),
            n = Math.round(performance.memory.jsHeapSizeLimit / c),
            o = r / n,
            s = `Heap info for renderer - ${e}. Heap Used ${r} Kb. Heap Total ${t} Kb. Heap Limit ${n} Kb.`;
          return o <= 0.8
            ? ((h = 0), void (f = 0))
            : o > 0.8 && h < 2
              ? ((0, a.x$)().warn(s), void h++)
              : void (
                  o > 0.97 &&
                  (u ||
                    ((0, i.n_)({ level: "warning", breadcrumb: s }), (u = !0)),
                  f < 2 && ((0, a.x$)().warn(s), f++))
                );
        }
        var m = t(5306),
          v = t(36458),
          w = t(26063);
        function g({ onUnmount: e, fallbackComponent: r }) {
          return (
            (0, n.useEffect)(() => {
              if (e) return () => e();
            }, []),
            r ?? n.createElement(n.Fragment, null)
          );
        }
        var b = t(25211),
          y = t.n(b),
          S = t(62962),
          R = t.n(S),
          E = t(20310),
          I = t.n(E),
          k = t(29290),
          x = t.n(k),
          j = t(47289),
          O = t.n(j),
          $ = t(24834),
          C = t.n($),
          T = t(38390),
          P = {};
        ((P.styleTagTransform = C()),
          (P.setAttributes = x()),
          (P.insert = I().bind(null, "head")),
          (P.domAPI = R()),
          (P.insertStyleElement = O()),
          y()(T.Z, P),
          T.Z && T.Z.locals && T.Z.locals,
          v.i.initializeRpc());
        class z extends n.Component {
          ref = n.createRef();
          toastView = (0, d.nb)();
          remoteServiceInstanceId = v.i.registerRemoteObject(
            this,
            "tvd:toast-view",
          );
          registerDimensionsCalcView() {
            (0, d.eX)().registerDimensionsCalcView(
              this.remoteServiceInstanceId,
            );
          }
          componentDidMount() {
            (0, w.T4)(this.toastView.isRtl);
          }
          componentWillUnmount() {
            v.i.unregisterRemoteObject(this.remoteServiceInstanceId);
          }
          render() {
            const e = this.toastView.toast,
              r = { toastView: { toast: e }, t: this.props.t },
              t = H.getRenderer(e.rendererType);
            return n.createElement(
              "div",
              { className: "render-toast-container", ref: this.ref },
              n.createElement(
                n.Suspense,
                {
                  fallback: n.createElement(g, {
                    onUnmount: () => this.registerDimensionsCalcView(),
                  }),
                },
                t && t(r),
              ),
            );
          }
          getToastViewDimensions() {
            if (!this.ref.current)
              return Promise.resolve({ width: 0, height: 0 });
            const { width: e, height: r } =
              this.ref.current.getBoundingClientRect();
            return Promise.resolve({
              width: Math.ceil(e),
              height: Math.ceil(r),
            });
          }
        }
        const A = (0, m.Zh)()(z);
        (t(96893),
          (0, s.s)(),
          (function (e = 6e4) {
            (!(function () {
              const e = Math.round(performance.memory.jsHeapSizeLimit / c);
              (0, i.YA)("memory.heapLimit", e.toString());
            })(),
              l
                ? (0, a.x$)().error("Heap log for this renderer already exist")
                : (l = setInterval(p, e)));
          })());
        const H = new (class {
          renderers = new Map();
          registerLazyRenderer(e, r) {
            this.renderers.set(e, (e) => {
              const t = r;
              return n.createElement(t, { ...e });
            });
          }
          getRenderer(e) {
            const r = this.renderers.get(e);
            return (
              r ||
                (0, a.x$)().error(
                  `Renderer for type ${e} not registered, check renderers configuration`,
                ),
              r
            );
          }
        })();
        (H.registerLazyRenderer(
          "notification",
          n.lazy(() => t.e(2899).then(t.bind(t, 52899))),
        ),
          H.registerLazyRenderer(
            "download",
            n.lazy(() =>
              Promise.all([t.e(4637), t.e(6513)]).then(t.bind(t, 16513)),
            ),
          ),
          H.registerLazyRenderer(
            "fullscreen",
            n.lazy(() => t.e(8470).then(t.bind(t, 68470))),
          ),
          H.registerLazyRenderer(
            "zoom",
            n.lazy(() => t.e(8941).then(t.bind(t, 28941))),
          ));
        const U = document.getElementById("root");
        U &&
          (0, o.s)(U).render(
            n.createElement(function () {
              return n.createElement(A, null);
            }, null),
          );
      },
      31937: (e, r, t) => {
        t.d(r, { Y: () => i, V: () => a });
        var n = t(54041),
          o = t(10496),
          s = t(98886);
        let i;
        class a {
          onRequestSubject = new n.Subject();
          onResponseSubject = new n.Subject();
          onRequest = this.onRequestSubject.asObservable();
          onResponse = this.onResponseSubject.asObservable();
          constructor() {
            (this.onMessage(s.f, (e, r) => {
              const t = {
                ...r,
                responseChannel: this.makeResponseChannel(e),
                context: e,
              };
              try {
                ((i = e), this.onRequestSubject.next(t));
              } finally {
                i = void 0;
              }
            }),
              this.onMessage(s.B, (e, r) => {
                try {
                  this.onResponseSubject.next(r);
                } catch (e) {
                  throw (
                    (0, o.n_)({
                      level: "error",
                      breadcrumb: `[BaseIpcInbox.constructor()]: onMessage() error: ${JSON.stringify(r)}`,
                    }),
                    e
                  );
                }
              }));
          }
        }
      },
      76133: (e, r, t) => {
        t.d(r, { kS: () => n.kS, hx: () => o.h, Pd: () => s.P });
        var n = t(75432),
          o = t(23935),
          s = (t(23577), t(28430));
      },
      79946: (e, r, t) => {
        t.d(r, {
          VT: () => a,
          rs: () => l,
          kS: () => u,
          yd: () => h,
          Ry: () => f,
          P3: () => m,
          Q2: () => v,
        });
        var n = t(72298),
          o = t(31937),
          s = t(98886),
          i = t(28321);
        class a {
          static hasHeader(e, r, t) {
            return r in e.headers && (void 0 === t || e.headers[r] === t);
          }
          static headerValue(e, r) {
            return r in e.headers ? e.headers[r] : void 0;
          }
          static response(e, r) {
            const t = {
              headers: { ...e.headers, success: !0, failure: "" },
              body: r,
            };
            e.responseChannel(t);
          }
          static responseFailure(e, r) {
            let t,
              n = "";
            "string" == typeof r
              ? (n = r)
              : r instanceof Error
                ? ((n = `(${r.name}):${r.message}`), (t = r.stack))
                : (n = "Untyped error");
            const o = {
              headers: { ...e.headers, success: !1, failure: n },
              body: {},
            };
            (t && (o.headers.stack = t), e.responseChannel(o));
          }
          static rethrowIfException(e) {
            if (!a.hasHeader(e, "success"))
              throw new Error("Expected response message.");
            if (!e.headers.success) {
              if (
                "failure" in e.headers &&
                "string" == typeof e.headers.failure &&
                "" !== e.headers.failure
              ) {
                const r = new Error(e.headers.failure);
                throw ("stack" in e.headers && (r.stack = e.headers.stack), r);
              }
              throw new Error("Unspecified remoting error");
            }
          }
          static getResponseBody(e) {
            return (a.rethrowIfException(e), e.body);
          }
          static get requestContext() {
            return o.Y;
          }
        }
        let c = null,
          d = null;
        function l() {
          return (c || (c = new i.B()), c);
        }
        function u() {
          return (d || (d = new i.n()), d);
        }
        const h = function (e) {
          n.ipcRenderer.send(s.f, e);
        };
        function f(e) {
          return function (r) {
            e && !e.isDestroyed() && e.send(s.f, r);
          };
        }
        let p;
        function m(e) {
          if (void 0 !== p)
            throw new Error(
              "Service host instance already registered for current process",
            );
          p = e;
        }
        function v() {
          if (!p)
            throw new Error(
              "Service host instance not registered for current process",
            );
          return p;
        }
      },
      75432: (e, r, t) => {
        t.d(r, { kS: () => n.kS });
        var n = t(79946);
        (t(23577), t(28430), t(23935));
      },
      10496: (e, r, t) => {
        t.d(r, { n_: () => o, YA: () => s });
        var n = t(77118);
        function o(e) {
          (0, n.n_)({
            category: "message",
            message: e.breadcrumb,
            level: e.level,
          });
        }
        function s(e, r) {
          (0, n.YA)(e, r);
        }
      },
      29265: (e, r, t) => {
        t(36458);
      },
      29060: (e, r, t) => {
        t.d(r, { og: () => n, mZ: () => o });
        const n = "tvd:locale-get-translations",
          o = "tvd:common-view-ready";
      },
      41029: (e, r, t) => {
        (t.d(r, { Um: () => n.Um }), t(96486), t(16693));
        var n = t(87269);
      },
      59391: (e, r, t) => {
        t.d(r, { wK: () => n.wK, _v: () => n._v, Um: () => o.Um });
        var n = t(95091),
          o = t(41029);
        (t(67644), t(57118), t(19014), t(89183));
      },
      67644: (e, r, t) => {
        var n;
        (t(65355),
          t(84011),
          t(41029),
          (function (e) {
            ((e.Enter = "Enter"),
              (e.Space = "Space"),
              (e.Tab = "Tab"),
              (e.ArrowUp = "ArrowUp"),
              (e.ArrowDown = "ArrowDown"),
              (e.Escape = "Escape"));
          })(n || (n = {})));
      },
      26063: (e, r, t) => {
        t.d(r, { _f: () => s, T4: () => i });
        const n = ["ar", "ar_AE"],
          o = ["he", "he_IL"],
          s = (e) => [...n, ...o].includes(e);
        function i(e) {
          document
            .querySelector("html")
            ?.setAttribute("dir", e ? "rtl" : "ltr");
        }
      },
      87269: (e, r, t) => {
        t.d(r, { Um: () => n });
        const n = () => "darwin" === process.platform;
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
    o = {};
  function s(e) {
    var r = o[e];
    if (void 0 !== r) return r.exports;
    var t = (o[e] = { id: e, exports: {} });
    return (n[e].call(t.exports, t, t.exports, s), t.exports);
  }
  ((s.m = n),
    (e = []),
    (s.O = (r, t, n, o) => {
      if (!t) {
        var i = 1 / 0;
        for (l = 0; l < e.length; l++) {
          for (var [t, n, o] = e[l], a = !0, c = 0; c < t.length; c++)
            (!1 & o || i >= o) && Object.keys(s.O).every((e) => s.O[e](t[c]))
              ? t.splice(c--, 1)
              : ((a = !1), o < i && (i = o));
          if (a) {
            e.splice(l--, 1);
            var d = n();
            void 0 !== d && (r = d);
          }
        }
        return r;
      }
      o = o || 0;
      for (var l = e.length; l > 0 && e[l - 1][2] > o; l--) e[l] = e[l - 1];
      e[l] = [t, n, o];
    }),
    (s.n = (e) => {
      var r = e && e.__esModule ? () => e.default : () => e;
      return (s.d(r, { a: r }), r);
    }),
    (s.d = (e, r) => {
      for (var t in r)
        s.o(r, t) &&
          !s.o(e, t) &&
          Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
    }),
    (s.f = {}),
    (s.e = (e) =>
      Promise.all(Object.keys(s.f).reduce((r, t) => (s.f[t](e, r), r), []))),
    (s.u = (e) => e + ".js"),
    (s.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (s.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (r = {}),
    (t = "tradingview-desktop:"),
    (s.l = (e, n, o, i) => {
      if (r[e]) r[e].push(n);
      else {
        var a, c;
        if (void 0 !== o)
          for (
            var d = document.getElementsByTagName("script"), l = 0;
            l < d.length;
            l++
          ) {
            var u = d[l];
            if (
              u.getAttribute("src") == e ||
              u.getAttribute("data-webpack") == t + o
            ) {
              a = u;
              break;
            }
          }
        (a ||
          ((c = !0),
          ((a = document.createElement("script")).charset = "utf-8"),
          (a.timeout = 120),
          s.nc && a.setAttribute("nonce", s.nc),
          a.setAttribute("data-webpack", t + o),
          (a.src = e)),
          (r[e] = [n]));
        var h = (t, n) => {
            ((a.onerror = a.onload = null), clearTimeout(f));
            var o = r[e];
            if (
              (delete r[e],
              a.parentNode && a.parentNode.removeChild(a),
              o && o.forEach((e) => e(n)),
              t)
            )
              return t(n);
          },
          f = setTimeout(
            h.bind(null, void 0, { type: "timeout", target: a }),
            12e4,
          );
        ((a.onerror = h.bind(null, a.onerror)),
          (a.onload = h.bind(null, a.onload)),
          c && document.head.appendChild(a));
      }
    }),
    (s.r = (e) => {
      ("undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 }));
    }),
    (() => {
      var e;
      s.g.importScripts && (e = s.g.location + "");
      var r = s.g.document;
      if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
        var t = r.getElementsByTagName("script");
        t.length && (e = t[t.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      ((e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (s.p = e + "../"));
    })(),
    (() => {
      s.b = document.baseURI || self.location.href;
      var e = { 578: 0 };
      ((s.f.j = (r, t) => {
        var n = s.o(e, r) ? e[r] : void 0;
        if (0 !== n)
          if (n) t.push(n[2]);
          else {
            var o = new Promise((t, o) => (n = e[r] = [t, o]));
            t.push((n[2] = o));
            var i = s.p + s.u(r),
              a = new Error();
            s.l(
              i,
              (t) => {
                if (s.o(e, r) && (0 !== (n = e[r]) && (e[r] = void 0), n)) {
                  var o = t && ("load" === t.type ? "missing" : t.type),
                    i = t && t.target && t.target.src;
                  ((a.message =
                    "Loading chunk " + r + " failed.\n(" + o + ": " + i + ")"),
                    (a.name = "ChunkLoadError"),
                    (a.type = o),
                    (a.request = i),
                    n[1](a));
                }
              },
              "chunk-" + r,
              r,
            );
          }
      }),
        (s.O.j = (r) => 0 === e[r]));
      var r = (r, t) => {
          var n,
            o,
            [i, a, c] = t,
            d = 0;
          if (i.some((r) => 0 !== e[r])) {
            for (n in a) s.o(a, n) && (s.m[n] = a[n]);
            if (c) var l = c(s);
          }
          for (r && r(t); d < i.length; d++)
            ((o = i[d]), s.o(e, o) && e[o] && e[o][0](), (e[i[d]] = 0));
          return s.O(l);
        },
        t = (global.webpackChunktradingview_desktop =
          global.webpackChunktradingview_desktop || []);
      (t.forEach(r.bind(null, 0)), (t.push = r.bind(null, t.push.bind(t))));
    })());
  var i = s.O(void 0, [7498, 686, 1070, 6486, 8234, 819, 2184, 7734], () =>
    s(79184),
  );
  i = s.O(i);
})();
