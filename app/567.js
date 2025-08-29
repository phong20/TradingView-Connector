"use strict";
(global.webpackChunktradingview_desktop =
  global.webpackChunktradingview_desktop || []).push([
  [567],
  {
    16602: (e, r, n) => {
      n.d(r, { g: () => f });
      var t = n(13855),
        s = n(55442),
        o = n(85930),
        a = n(69478);
      let i,
        c = !1,
        u = 0,
        d = 0;
      function l() {
        const e = (0, a.nb)().remoteServiceInstanceId ?? window.location.href,
          r = Math.round(performance.memory.usedJSHeapSize / o.k4),
          n = Math.round(performance.memory.totalJSHeapSize / o.k4),
          i = Math.round(performance.memory.jsHeapSizeLimit / o.k4),
          l = r / i,
          f = `Heap info for renderer - ${e}. Heap Used ${r} Kb. Heap Total ${n} Kb. Heap Limit ${i} Kb.`;
        return l <= o.wj
          ? ((u = 0), void (d = 0))
          : l > o.wj && u < 2
            ? ((0, t.x$)().warn(f), void u++)
            : void (
                l > o.fL &&
                (c ||
                  ((0, s.n_)({ level: "warning", breadcrumb: f }), (c = !0)),
                d < 2 && ((0, t.x$)().warn(f), d++))
              );
      }
      function f(e = o.bA) {
        (!(function () {
          const e = Math.round(performance.memory.jsHeapSizeLimit / o.k4);
          (0, s.YA)("memory.heapLimit", e.toString());
        })(),
          i
            ? (0, t.x$)().error("Heap log for this renderer already exist")
            : (i = setInterval(l, e)));
      }
    },
    31937: (e, r, n) => {
      n.d(r, { Y: () => a, V: () => i });
      var t = n(54041),
        s = n(10496),
        o = n(98886);
      let a;
      class i {
        onRequestSubject = new t.Subject();
        onResponseSubject = new t.Subject();
        onRequest = this.onRequestSubject.asObservable();
        onResponse = this.onResponseSubject.asObservable();
        constructor() {
          (this.onMessage(o.f, (e, r) => {
            const n = {
              ...r,
              responseChannel: this.makeResponseChannel(e),
              context: e,
            };
            try {
              ((a = e), this.onRequestSubject.next(n));
            } finally {
              a = void 0;
            }
          }),
            this.onMessage(o.B, (e, r) => {
              try {
                this.onResponseSubject.next(r);
              } catch (e) {
                throw (
                  (0, s.n_)({
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
    79946: (e, r, n) => {
      n.d(r, {
        VT: () => i,
        rs: () => d,
        kS: () => l,
        yd: () => f,
        Ry: () => p,
        P3: () => g,
        Q2: () => v,
      });
      var t = n(72298),
        s = n(31937),
        o = n(98886),
        a = n(28321);
      class i {
        static hasHeader(e, r, n) {
          return r in e.headers && (void 0 === n || e.headers[r] === n);
        }
        static headerValue(e, r) {
          return r in e.headers ? e.headers[r] : void 0;
        }
        static response(e, r) {
          const n = {
            headers: { ...e.headers, success: !0, failure: "" },
            body: r,
          };
          e.responseChannel(n);
        }
        static responseFailure(e, r) {
          let n,
            t = "";
          "string" == typeof r
            ? (t = r)
            : r instanceof Error
              ? ((t = `(${r.name}):${r.message}`), (n = r.stack))
              : (t = "Untyped error");
          const s = {
            headers: { ...e.headers, success: !1, failure: t },
            body: {},
          };
          (n && (s.headers.stack = n), e.responseChannel(s));
        }
        static rethrowIfException(e) {
          if (!i.hasHeader(e, "success"))
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
          return (i.rethrowIfException(e), e.body);
        }
        static get requestContext() {
          return s.Y;
        }
      }
      let c = null,
        u = null;
      function d() {
        return (c || (c = new a.B()), c);
      }
      function l() {
        return (u || (u = new a.n()), u);
      }
      const f = function (e) {
        t.ipcRenderer.send(o.f, e);
      };
      function p(e) {
        return function (r) {
          e && !e.isDestroyed() && e.send(o.f, r);
        };
      }
      let h;
      function g(e) {
        if (void 0 !== h)
          throw new Error(
            "Service host instance already registered for current process",
          );
        h = e;
      }
      function v() {
        if (!h)
          throw new Error(
            "Service host instance not registered for current process",
          );
        return h;
      }
    },
    75432: (e, r, n) => {
      n.d(r, { kS: () => t.kS });
      var t = n(79946);
      (n(23577), n(28430), n(23935));
    },
    11213: (e, r, n) => {
      function t(e) {
        return e ? (e.length ? e.split("-")[0] : e) : "";
      }
      (n.d(r, { uJ: () => t }), n(57118), n(52364));
    },
    10496: (e, r, n) => {
      n.d(r, { n_: () => s, YA: () => o });
      var t = n(77118);
      function s(e) {
        (0, t.n_)({
          category: "message",
          message: e.breadcrumb,
          level: e.level,
        });
      }
      function o(e, r) {
        (0, t.YA)(e, r);
      }
    },
    17066: (e, r, n) => {
      n.d(r, { s: () => a });
      var t = n(72298),
        s = n(77118);
      const o = void 0 !== t.ipcMain;
      function a() {
        if (o)
          throw new Error(
            "This initialization must be called from renderer process",
          );
        (0, s.S1)();
      }
    },
    18737: (e, r, n) => {
      n(77118);
    },
    43891: (e, r, n) => {
      n.d(r, { D: () => o });
      var t = n(96486),
        s = n(52296);
      const o = async (e) => {
        s.Z.language !== e && (await t.ZP.changeLanguage(e));
      };
    },
    52296: (e, r, n) => {
      n.d(r, { Z: () => f });
      var t = n(71017),
        s = n(72298),
        o = n(96486),
        a = n(94102),
        i = n(5306),
        c = n(46628),
        u = n(29060),
        d = n(9448);
      let l;
      if (s.ipcMain) {
        function p() {
          const e = {},
            r = t.join(s.app.getAppPath(), "resources", "locales");
          for (const n of c.P.readDirSync(r)) {
            const s = c.P.readFileSync(t.join(r, n)),
              o = t.parse(n).name,
              a = (0, d.o)(s);
            a && (e[o] = { translation: a });
          }
          return e;
        }
        ((l = p()),
          s.ipcMain.on(u.og, (e) => {
            e.returnValue = l;
          }));
      } else l = s.ipcRenderer.sendSync(u.og);
      o.ZP.use(a.Z)
        .use(i.Db)
        .init({
          keySeparator: "::",
          nsSeparator: ":::",
          resources: l,
          fallbackLng: "en",
          returnEmptyString: !1,
          interpolation: { escapeValue: !1 },
        });
      const f = o.ZP;
    },
    5778: (e, r, n) => {
      n.d(r, { R: () => t });
      const t = "tvd:locale-service";
    },
    29265: (e, r, n) => {
      n(36458);
    },
    85930: (e, r, n) => {
      n.d(r, { bA: () => t, k4: () => s, wj: () => o, fL: () => a });
      const t = 6e4,
        s = 1024,
        o = 0.8,
        a = 0.97;
    },
    97003: (e, r, n) => {
      n.d(r, {
        nt: () => f,
        ZJ: () => d.ZJ,
        UT: () => u.U,
        UD: () => i.U,
        Kr: () => a.Kr,
        Wf: () => o.W,
        D9: () => l,
        vO: () => d.vO,
      });
      var t,
        s,
        o = n(36842),
        a = n(5603),
        i = n(80271),
        c = (n(95807), n(96485), n(39985)),
        u = n(94232),
        d = n(58789);
      function l(e) {
        if ("object" != typeof e || null === e) return !1;
        const r = e.constructor;
        return !!r && Reflect.hasMetadata(c.f, r);
      }
      function f() {
        return (e) => {
          const r = new e();
          u.U.instance.registerProvider(r);
        };
      }
      (((s = t || (t = {}))[(s.Transient = 0)] = "Transient"),
        (s[(s.Singleton = 1)] = "Singleton"),
        Symbol("ServiceContracts"));
    },
    95091: (e, r, n) => {
      (n.d(r, { _v: () => s, wK: () => o }), n(13855));
      var t = n(97003);
      function s(e, r) {
        return r && r.signal.aborted
          ? Promise.resolve(!1)
          : new Promise((n) => {
              let t;
              const s = () => {
                t && (clearTimeout(t), (t = void 0), n(!1));
              };
              (r && r.signal.addEventListener("abort", s, { once: !0 }),
                (t = setTimeout(() => {
                  ((t = void 0),
                    r?.signal.removeEventListener("abort", s),
                    n(!0));
                }, e)));
            });
      }
      function o(e) {
        e.catch((e) => {
          const r = (0, t.UD)(e);
          (console.warn(`Ignoring promise, but error: ${r}`),
            console.warn(e.stack));
        });
      }
    },
  },
]);
