(() => {
  "use strict";
  var e,
    t = {
      83453: (e, t, n) => {
        n.d(t, { Z: () => a });
        var r = n(43392),
          s = n.n(r),
          o = n(8021),
          i = n.n(o)()(s());
        i.push([
          e.id,
          ".crash-buttons-container {\n\tborder: 1px solid red;\n\tmargin: auto;\n}\n\n.dialog-btn, .button-container {\n\twidth: 500px;\n}\n\n.process-container {\n\tpadding: 20px;\n}\n",
          "",
        ]);
        const a = i;
      },
      2315: (e, t, n) => {
        n.d(t, { Z: () => a });
        var r = n(43392),
          s = n.n(r),
          o = n(8021),
          i = n.n(o)()(s());
        i.push([
          e.id,
          ".dialog-btn {\n\tborder: 1px solid var(--color-button-bg);\n\tcolor: var(--color-button-bg);\n\tfont-family: var(--font-family-base);\n\tfont-size: 16px;\n\tline-height: 30px;\n\talign-items: center;\n\tjustify-content: center;\n\tpadding: 1px 24px;\n\tdisplay: inline-flex;\n\tmargin-left: 12px;\n\tborder-radius: 4px;\n\twhite-space: nowrap;\n}\n\n.dialog-btn.primary {\n\tborder-color: var(--color-button-bg);\n\tbackground: var(--color-button-bg);\n\tcolor: #FFF;\n}\n\n.dialog-btn:hover {\n\tborder-color: var(--color-button-bg-hover);\n\tbackground: var(--color-button-bg-hover);\n\tcolor: #FFF;\n}\n\n.dialog-btn:active {\n\tborder-color: var(--color-button-bg-active);\n\tbackground: var(--color-button-bg-active);\n\tcolor: #FFF;\n}\n\n.dialog-btn-icon {\n\tdisplay: flex;\n\talign-items: center;\n\tmargin: 0 10px;\n}\n",
          "",
        ]);
        const a = i;
      },
      53442: (e, t, n) => {
        var r = n(50959),
          s = n(44478),
          o = n(72298),
          i = n(77118);
        const a = void 0 !== o.ipcMain;
        var c = n(10496),
          l = n(13855);
        const d = 1024;
        var u = n(79946),
          h = n(23577),
          f = n(97003),
          p = n(59391),
          v = n(91277),
          g = n(66872),
          b = n(23935);
        const m = 3e5;
        let y = !1;
        class w {
          instances = [];
          senders = new Map();
          aliveSenders = [];
          cleanSubscriptionsInterval;
          isClearIntervalSuccess = !0;
          constructor(e) {
            this.cleanSubscriptionsInterval = global.setInterval(
              () => (0, p.wK)(this.cleanSubscriptions()),
              m,
            );
            const t = {
              [g._$]: (e) => {
                const t = e.body;
                y = !0;
                try {
                  const n = f.UT.instance.create(t.contracts),
                    r = e.context?.sender;
                  this.senders.get(r.id) || this.senders.set(r.id, r);
                  const s = this.instances.find((e) =>
                    e.id.includes(t.contracts[0]),
                  );
                  if (s) u.VT.response(e, { instanceId: s.id });
                  else {
                    const t = this.addInstance(n);
                    u.VT.response(e, { instanceId: t });
                  }
                } finally {
                  y = !1;
                }
              },
              [g.GT]: (e) => {
                const t = e.body;
                let n;
                try {
                  n = this.getRequestedInstanceEntry(t);
                } catch (e) {
                  const n = (0, f.UD)(e);
                  (0, l.M2)().error(
                    `[RemoteInstanceManager()] Error while invoke (${t.method}):${n}`,
                    e,
                  );
                }
                if (!n) return;
                const r = n.instance,
                  s = g.R8(t.args, (n) => {
                    const r = e.context?.sender;
                    return b.h.createForInstance(n, r, void 0, t.args);
                  });
                let o = r[t.method];
                if ((o || "function" != typeof r || (o = r), void 0 === o))
                  return void u.VT.responseFailure(
                    e,
                    `Instance (${t.instanceId}) does not provide invocable property: (${t.method})`,
                  );
                const i = o.apply(r, s);
                i instanceof Promise
                  ? i
                      .then((t) => {
                        const n = "function" == typeof t,
                          r = !t || "object" != typeof t,
                          s =
                            !!t &&
                            this.instances.find(
                              (e) =>
                                e.instance.windowPersistentId ===
                                t.windowPersistentId,
                            );
                        n || r || !(0, f.D9)(t) || !s
                          ? u.VT.response(e, g.k2(t))
                          : u.VT.response(e, {
                              dispatchedRemoteInstanceId: s.id,
                            });
                      })
                      .catch((t) => {
                        u.VT.responseFailure(e, t);
                      })
                  : u.VT.response(e, g.k2(i));
              },
              [g.Ez]: (e) => {
                const t = e.context?.sender;
                this.senders.get(t.id) || this.senders.set(t.id, t);
                const n = e.body;
                let r;
                try {
                  r = this.getRequestedInstanceEntry(n);
                } catch (e) {
                  const t = (0, f.UD)(e);
                  (0, l.M2)().error(
                    `[RemoteInstanceManager()] Error while subscribe (${n.method}):${t}`,
                    e,
                  );
                }
                r && r.eventSubscribe(e);
              },
              [g.qy]: (e) => {
                const t = e.body;
                try {
                  this.getRequestedInstanceEntry(t).eventUnsubscribe(t);
                } catch (e) {
                  const n = (0, f.UD)(e);
                  (0, l.M2)().error(
                    `[RemoteInstanceManager()] Error while unsubscribe (${t.method}):${n}`,
                    e,
                  );
                }
              },
              [g.E6]: (e) => {
                const t = e.body;
                let n;
                try {
                  n = this.getRequestedInstanceEntry(t);
                } catch (e) {
                  const n = (0, f.UD)(e);
                  (0, l.M2)().error(
                    `[RemoteInstanceManager()] Error while event next (${t.method}):${n}`,
                    e,
                  );
                }
                if (!n) return;
                const r = n.instance[t.method];
                r && r.next
                  ? (r.next(t.args[0]), u.VT.response(e, void 0))
                  : u.VT.responseFailure(
                      e,
                      `Instance (${t.instanceId}) does not provide nextable subject: (${t.method})`,
                    );
              },
              [g.QK]: (e) => {
                const t = e.body;
                let n;
                try {
                  n = this.getRequestedInstanceEntry(t.instanceId);
                } catch (e) {
                  const n = (0, f.UD)(e);
                  (0, l.M2)().error(
                    `[RemoteInstanceManager()] Error while message reflect (${t.instanceId}):${n}`,
                    e,
                  );
                }
                if (!n) return;
                const r = t.aspects ?? [],
                  s = (0, f.vO)(n.instance, ...r);
                u.VT.response(e, s);
              },
              [g.XK]: (e) => {
                const t = e.body.instanceId;
                this.closeInstance(t);
              },
              [g.uY]: (e) => {
                u.VT.response(e, { aliveSenderId: e.body.aliveSenderId });
              },
            };
            e.onRequest.subscribe((e) => {
              const n = u.VT.headerValue(e, g.zQ);
              try {
                n && n in t && t[n](e);
              } catch (t) {
                u.VT.responseFailure(e, t);
              }
            });
          }
          addInstance(e) {
            const t = new v.X(e);
            return (this.instances.push(t), t.id);
          }
          closeInstance(e) {
            const t = this.instances.findIndex((t) => t.id === e);
            t < 0 || this.instances.splice(t, 1)[0].dispose();
          }
          clearSubscriptionsInterval() {
            clearInterval(this.cleanSubscriptionsInterval);
          }
          async cleanSubscriptions() {
            (o.ipcMain &&
              (0, l.M2)().debug("RemoteInstanceManager.cleanSubscriptions()"),
              this.isClearIntervalSuccess ||
                (this.clearSubscriptionsInterval(),
                (this.isClearIntervalSuccess = !0),
                (this.cleanSubscriptionsInterval = global.setInterval(
                  () => (0, p.wK)(this.cleanSubscriptions()),
                  m,
                ))),
              (this.isClearIntervalSuccess = !1),
              (this.aliveSenders = []));
            try {
              (this.senders.forEach((e) => {
                if (
                  e &&
                  "function" == typeof e.isDestroyed &&
                  !e.isDestroyed()
                ) {
                  const t = {
                      headers: { [g.zQ]: g.uY },
                      body: { aliveSenderId: e.id },
                    },
                    n =
                      e && e.id ? h.w.createForWebContents(e) : h.w.forRenderer;
                  n.send(t)
                    .then((e) => this.aliveSenders.push(e.body.aliveSenderId))
                    .catch((e) =>
                      (0, l.M2)().error(
                        "RemoteInstanceManager().cleanSubscriptions communicator send error",
                        e,
                      ),
                    )
                    .finally(() => {
                      n.dispose();
                    });
                }
              }),
                await (0, p._v)(3e4),
                this.instances.forEach((e) => {
                  e.eventSubscriptions.forEach((t) => {
                    t.subscriptionId.includes("cursorPosition") ||
                      this.aliveSenders.includes(t.senderId) ||
                      e.eventUnsubscribeInternal(t.subscriptionId);
                  });
                }));
              for (const e of this.senders.keys())
                this.aliveSenders.includes(e) || this.senders.delete(e);
              this.isClearIntervalSuccess = !0;
            } catch (e) {
              (0, l.M2)().error(
                'RemoteInstanceManager.cleanSubscriptions(): "communicator send error"',
                e,
              );
            }
          }
          async reflectRemoteInstance(e, t, n) {
            const r = { instanceId: t, aspects: n },
              s = await e.send({ headers: { [g.zQ]: g.QK }, body: r });
            return u.VT.getResponseBody(s);
          }
          getRequestedInstanceEntry(e) {
            const t = "string" == typeof e ? e : e.instanceId,
              n = this.instances.find((e) => e.id === t);
            if (!n) {
              const n = (() => {
                if ("string" == typeof e) return `Instance (${t}) not found`;
                {
                  const t = 10;
                  let n = JSON.stringify(e.args);
                  return (
                    n.length > t && (n = `${n.substr(0, t)}...`),
                    `(${e.instanceId}).(${e.method})(${n}): instance not found`
                  );
                }
              })();
              throw new Error(n);
            }
            return n;
          }
        }
        class I {
          static hostInstance = null;
          instanceManager;
          static initialize(e) {
            if (I.hostInstance)
              throw new Error("Service host already initialized");
            ((I.hostInstance = new I(e)), (0, u.P3)(I.hostInstance));
          }
          static get instance() {
            if (null === I.hostInstance)
              throw new Error("ServiceHost not initialized");
            return I.hostInstance;
          }
          static get exists() {
            return null !== I.hostInstance;
          }
          static destroy() {
            (this.hostInstance?.instanceManager.clearSubscriptionsInterval(),
              (this.hostInstance = null));
          }
          constructor(e) {
            this.instanceManager = new w(e);
          }
          registerRemoteInstance(e) {
            return this.instanceManager.addInstance(e);
          }
          unregisterRemoteInstance(e, t) {
            t
              ? setTimeout(() => this.instanceManager.closeInstance(e), t)
              : this.instanceManager.closeInstance(e);
          }
          reflectRemoteInstance(e, t, n) {
            return this.instanceManager.reflectRemoteInstance(e, t, n);
          }
        }
        let S = class {
          tryCreate(e, ...t) {
            if (!I.exists || y) return;
            const n = e instanceof Array ? e : [e];
            return b.h.createForContracts(n);
          }
          reflectInstance(e, ...t) {
            if (!I.exists) return;
            if (b.h.isProxy(e)) {
              if (!I.exists)
                throw new Error(
                  "Attempt to reflect ipc-service-instance but ServiceHost instance does not exists",
                );
              return (async () => {
                const n = await e.ipcProxyInstanceId();
                return I.instance.reflectRemoteInstance(
                  e.ipcProxyCommunicator(),
                  n,
                  t,
                );
              })();
            }
            const n = (0, f.vO)(e);
            return n ? Promise.resolve(n) : void 0;
          }
        };
        S = (function (e, t, n, r) {
          var s,
            o = arguments.length,
            i =
              o < 3
                ? t
                : null === r
                  ? (r = Object.getOwnPropertyDescriptor(t, n))
                  : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            i = Reflect.decorate(e, t, n, r);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (s = e[a]) &&
                (i = (o < 3 ? s(i) : o > 3 ? s(t, n, i) : s(t, n)) || i);
          return (o > 3 && i && Object.defineProperty(t, n, i), i);
        })([(0, f.nt)()], S);
        var E = n(9448);
        let M,
          x = !1,
          R = 0,
          C = 0;
        function P() {
          const e =
              (function () {
                const e = (0, E.o)(
                  new URLSearchParams(window.location.search).get(
                    "rendererInitialData",
                  ) ?? "{}",
                );
                if (!e)
                  throw new Error("getRendererInitialData() jsonParse error");
                return e;
              })().remoteServiceInstanceId ?? window.location.href,
            t = Math.round(performance.memory.usedJSHeapSize / d),
            n = Math.round(performance.memory.totalJSHeapSize / d),
            r = Math.round(performance.memory.jsHeapSizeLimit / d),
            s = t / r,
            o = `Heap info for renderer - ${e}. Heap Used ${t} Kb. Heap Total ${n} Kb. Heap Limit ${r} Kb.`;
          return s <= 0.8
            ? ((R = 0), void (C = 0))
            : s > 0.8 && R < 2
              ? ((0, l.x$)().warn(o), void R++)
              : void (
                  s > 0.97 &&
                  (x ||
                    ((0, c.n_)({ level: "warning", breadcrumb: o }), (x = !0)),
                  C < 2 && ((0, l.x$)().warn(o), C++))
                );
        }
        var O = n(36458),
          $ = n(57147),
          k = n(71017);
        const T = "tvdbridge";
        let N;
        class j {}
        function F() {
          if (void 0 === N) {
            console.debug("Initializing TVD bridge");
            try {
              ((N = (function (e) {
                const t = "" === k.extname(e) ? `${e}.node` : e,
                  r = (() => {
                    const e = (
                        process && "renderer" === process.type
                          ? n(76699).app
                          : n(72298).app
                      ).getAppPath(),
                      r = k.join(e, "native", t);
                    if (!$.existsSync(r))
                      throw new Error(`Module (${t}) not found`);
                    return r;
                  })(),
                  s = { exports: {} };
                return (process.dlopen(s, r), s.exports);
              })(T)),
                console.log("Got bridge"),
                Object.defineProperty(N, "available", {
                  value: !0,
                  writable: !1,
                  configurable: !1,
                }));
            } catch (e) {
              throw (
                console.log(e),
                (N = new Proxy({ available: !1, shutdown() {} }, new j())),
                (0, i.nZ)().setTag("customError", "bridge-not-loaded"),
                new Error("bridge-not-loaded")
              );
            }
          }
          return N;
        }
        var U, V, D;
        (!(function (e) {
          e[(e.SW_NORMAL = 1)] = "SW_NORMAL";
        })(U || (U = {})),
          (function (e) {
            ((e[(e.None = 0)] = "None"),
              (e[(e.Up = 1)] = "Up"),
              (e[(e.Down = 2)] = "Down"));
          })(V || (V = {})),
          (function (e) {
            ((e[(e.Left = 0)] = "Left"),
              (e[(e.Middle = 1)] = "Middle"),
              (e[(e.Right = 2)] = "Right"));
          })(D || (D = {})));
        const A = "tvd:crashtest-service";
        (n(65726), n(46628));
        let z = class {
          crashNativeProcess() {
            process.crash();
          }
          crashJs() {
            (async () => {
              throw new Error(
                (o.ipcMain ? "Main" : "Renderer") + " process JS error",
              );
            })();
          }
          crashNativeModuleAV() {
            F().crash_emitter.emitAccessViolation();
          }
          crashNativeModuleSO() {
            F().crash_emitter.emitStackOverflow();
          }
        };
        function K() {
          return O.i.provideProxy(A);
        }
        z = (function (e, t, n, r) {
          var s,
            o = arguments.length,
            i =
              o < 3
                ? t
                : null === r
                  ? (r = Object.getOwnPropertyDescriptor(t, n))
                  : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            i = Reflect.decorate(e, t, n, r);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (s = e[a]) &&
                (i = (o < 3 ? s(i) : o > 3 ? s(t, n, i) : s(t, n)) || i);
          return (o > 3 && i && Object.defineProperty(t, n, i), i);
        })([(0, O.L)(A, O.i.getProvider())], z);
        var _ = n(25211),
          H = n.n(_),
          q = n(62962),
          J = n.n(q),
          Z = n(20310),
          L = n.n(Z),
          W = n(29290),
          B = n.n(W),
          Q = n(47289),
          Y = n.n(Q),
          G = n(24834),
          X = n.n(G),
          ee = n(2315),
          te = {};
        ((te.styleTagTransform = X()),
          (te.setAttributes = B()),
          (te.insert = L().bind(null, "head")),
          (te.domAPI = J()),
          (te.insertStyleElement = Y()),
          H()(ee.Z, te),
          ee.Z && ee.Z.locals && ee.Z.locals);
        const ne = ({ highlighted: e, title: t, className: n = "", icon: s }) =>
          r.createElement(
            "div",
            { className: `dialog-btn ${e ? "primary" : ""} ${n}` },
            s && r.createElement("div", { className: "dialog-btn-icon" }, s),
            t,
          );
        var re = n(83453),
          se = {};
        ((se.styleTagTransform = X()),
          (se.setAttributes = B()),
          (se.insert = L().bind(null, "head")),
          (se.domAPI = J()),
          (se.insertStyleElement = Y()),
          H()(re.Z, se),
          re.Z && re.Z.locals && re.Z.locals,
          F().diagnostics.setLogHandler((e, t) => {
            switch (t) {
              case l.in.Debug:
                (0, l.M2)().debug(e);
                break;
              case l.in.Warn:
                (0, l.M2)().warn(e);
                break;
              case l.in.Error:
                (0, l.M2)().error(e);
                break;
              case l.in.Info:
              default:
                (0, l.M2)().info(e);
            }
          }),
          O.i.initializeRpc());
        class oe extends r.Component {
          componentWillUnmount() {
            !(function () {
              if (void 0 !== typeof N)
                try {
                  F().shutdown();
                } catch {}
            })();
          }
          getRendererCrashTestService() {
            return new z();
          }
          render() {
            return r.createElement(
              "div",
              { className: "crash-buttons-container" },
              r.createElement(
                "div",
                { className: "process-container" },
                r.createElement("span", null, "Crash Main Process"),
                r.createElement(
                  "div",
                  {
                    className: "button-container",
                    onClick: () => (0, p.wK)(K().crashNativeProcess()),
                  },
                  r.createElement(ne, {
                    highlighted: !1,
                    title: "Crash Main Process",
                  }),
                ),
                r.createElement(
                  "div",
                  {
                    className: "button-container",
                    onClick: () => (0, p.wK)(K().crashJs()),
                  },
                  r.createElement(ne, {
                    highlighted: !1,
                    title: "Crash Main JS",
                  }),
                ),
                r.createElement(
                  "div",
                  {
                    className: "button-container",
                    onClick: () => (0, p.wK)(K().crashNativeModuleAV()),
                  },
                  r.createElement(ne, {
                    highlighted: !1,
                    title: "Crash Main Native with Access Violation",
                  }),
                ),
                r.createElement(
                  "div",
                  {
                    className: "button-container",
                    onClick: () => (0, p.wK)(K().crashNativeModuleSO()),
                  },
                  r.createElement(ne, {
                    highlighted: !1,
                    title: "Crash Main Native with Stack Overflow",
                  }),
                ),
              ),
              r.createElement(
                "div",
                { className: "process-container" },
                r.createElement("span", null, "Crash Renderer Process"),
                r.createElement(
                  "div",
                  {
                    className: "button-container",
                    onClick: () =>
                      this.getRendererCrashTestService().crashNativeProcess(),
                  },
                  r.createElement(ne, {
                    highlighted: !1,
                    title: "Crash Renderer Process",
                  }),
                ),
                r.createElement(
                  "div",
                  {
                    className: "button-container",
                    onClick: () => this.getRendererCrashTestService().crashJs(),
                  },
                  r.createElement(ne, {
                    highlighted: !1,
                    title: "Crash Renderer JS",
                  }),
                ),
                r.createElement(
                  "div",
                  {
                    className: "button-container",
                    onClick: () =>
                      this.getRendererCrashTestService().crashNativeModuleAV(),
                  },
                  r.createElement(ne, {
                    highlighted: !1,
                    title: "Crash Renderer Native with Access Violation",
                  }),
                ),
                r.createElement(
                  "div",
                  {
                    className: "button-container",
                    onClick: () =>
                      this.getRendererCrashTestService().crashNativeModuleSO(),
                  },
                  r.createElement(ne, {
                    highlighted: !1,
                    title: "Crash Renderer Native with Stack Overflow",
                  }),
                ),
              ),
            );
          }
        }
        (n(96893),
          (function () {
            if (a)
              throw new Error(
                "This initialization must be called from renderer process",
              );
            (0, i.S1)();
          })(),
          (function (e = 6e4) {
            (!(function () {
              const e = Math.round(performance.memory.jsHeapSizeLimit / d);
              (0, c.YA)("memory.heapLimit", e.toString());
            })(),
              M
                ? (0, l.x$)().error("Heap log for this renderer already exist")
                : (M = setInterval(P, e)));
          })());
        const ie = document.getElementById("root");
        ie && (0, s.s)(ie).render(r.createElement(oe, null));
      },
      79946: (e, t, n) => {
        n.d(t, {
          VT: () => a,
          rs: () => d,
          kS: () => u,
          yd: () => h,
          Ry: () => f,
          P3: () => v,
          Q2: () => g,
        });
        var r = n(72298),
          s = n(31937),
          o = n(98886),
          i = n(28321);
        class a {
          static hasHeader(e, t, n) {
            return t in e.headers && (void 0 === n || e.headers[t] === n);
          }
          static headerValue(e, t) {
            return t in e.headers ? e.headers[t] : void 0;
          }
          static response(e, t) {
            const n = {
              headers: { ...e.headers, success: !0, failure: "" },
              body: t,
            };
            e.responseChannel(n);
          }
          static responseFailure(e, t) {
            let n,
              r = "";
            "string" == typeof t
              ? (r = t)
              : t instanceof Error
                ? ((r = `(${t.name}):${t.message}`), (n = t.stack))
                : (r = "Untyped error");
            const s = {
              headers: { ...e.headers, success: !1, failure: r },
              body: {},
            };
            (n && (s.headers.stack = n), e.responseChannel(s));
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
                const t = new Error(e.headers.failure);
                throw ("stack" in e.headers && (t.stack = e.headers.stack), t);
              }
              throw new Error("Unspecified remoting error");
            }
          }
          static getResponseBody(e) {
            return (a.rethrowIfException(e), e.body);
          }
          static get requestContext() {
            return s.Y;
          }
        }
        let c = null,
          l = null;
        function d() {
          return (c || (c = new i.B()), c);
        }
        function u() {
          return (l || (l = new i.n()), l);
        }
        const h = function (e) {
          r.ipcRenderer.send(o.f, e);
        };
        function f(e) {
          return function (t) {
            e && !e.isDestroyed() && e.send(o.f, t);
          };
        }
        let p;
        function v(e) {
          if (void 0 !== p)
            throw new Error(
              "Service host instance already registered for current process",
            );
          p = e;
        }
        function g() {
          if (!p)
            throw new Error(
              "Service host instance not registered for current process",
            );
          return p;
        }
      },
      36458: (e, t, n) => {
        function r(e, t) {
          return (n) => {
            const r = (() => {
              let e = null;
              return (...t) => (
                t.length > 0 &&
                  console.error(
                    `Service (${n.name}) exposed as singleton and can not accept any construction arguments.`,
                  ),
                null === e && (e = new n()),
                e
              );
            })();
            t.registerFactory(e, r);
          };
        }
        (n.d(t, { L: () => r, i: () => s }), n(96485));
        var s = n(21810);
      },
      52364: (e, t, n) => {
        n.d(t, { iC: () => r, in: () => s });
        const r = "tvd:logger-service";
        var s;
        !(function (e) {
          ((e[(e.Debug = 0)] = "Debug"),
            (e[(e.Info = 1)] = "Info"),
            (e[(e.Warn = 2)] = "Warn"),
            (e[(e.Error = 3)] = "Error"));
        })(s || (s = {}));
      },
      13855: (e, t, n) => {
        n.d(t, { in: () => o.in, kK: () => i, M2: () => a, x$: () => c });
        var r = n(72298),
          s = n(36458),
          o = n(52364);
        function i() {
          return r.ipcMain
            ? s.i.getProvider().provide(o.iC)
            : s.i.provideProxy(o.iC);
        }
        function a() {
          return s.i.provide(o.iC);
        }
        function c() {
          return s.i.provideProxy(o.iC);
        }
      },
      10496: (e, t, n) => {
        n.d(t, { n_: () => s, YA: () => o });
        var r = n(77118);
        function s(e) {
          (0, r.n_)({
            category: "message",
            message: e.breadcrumb,
            level: e.level,
          });
        }
        function o(e, t) {
          (0, r.YA)(e, t);
        }
      },
      16693: (e, t, n) => {
        (0, n(87269).Um)();
      },
      89597: (e, t, n) => {
        var r, s, o, i;
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
          })(s || (s = {})),
          (function (e) {
            ((e.Show = "show"), (e.Move = "move"));
          })(o || (o = {})),
          (function (e) {
            ((e[(e.Basic = 0)] = "Basic"),
              (e[(e.ChartData = 1)] = "ChartData"));
          })(i || (i = {})));
      },
      97003: (e, t, n) => {
        n.d(t, {
          nt: () => h,
          ZJ: () => d.ZJ,
          UT: () => l.U,
          UD: () => a.U,
          Kr: () => i.Kr,
          Wf: () => o.W,
          D9: () => u,
          vO: () => d.vO,
        });
        var r,
          s,
          o = n(36842),
          i = n(5603),
          a = n(80271),
          c = (n(95807), n(96485), n(39985)),
          l = n(94232),
          d = n(58789);
        function u(e) {
          if ("object" != typeof e || null === e) return !1;
          const t = e.constructor;
          return !!t && Reflect.hasMetadata(c.f, t);
        }
        function h() {
          return (e) => {
            const t = new e();
            l.U.instance.registerProvider(t);
          };
        }
        (((s = r || (r = {}))[(s.Transient = 0)] = "Transient"),
          (s[(s.Singleton = 1)] = "Singleton"),
          Symbol("ServiceContracts"));
      },
      39985: (e, t, n) => {
        n.d(t, { f: () => r });
        const r = Symbol("ServiceContracts");
      },
      58789: (e, t, n) => {
        n.d(t, { ZJ: () => r, xj: () => i, vO: () => a });
        var r,
          s = n(80271),
          o = n(39985);
        function i(e) {
          return "object" == typeof e && e.reflectInstance instanceof Function;
        }
        function a(e, ...t) {
          if ("object" != typeof e || !e) return;
          const n = (e) => !t || 0 === t.length || t.includes(e),
            i = [];
          if (n(r.Contracts))
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
              const e = t ? Reflect.getMetadata(o.f, t) : void 0;
              e && i.push(...e);
            }
          const a = [];
          if (n(r.Methods))
            for (const { key: t, value: n } of (function* (e) {
              const t = ["constructor", "isMounted", "replaceState"];
              if ("object" == typeof e && e) {
                let n = e;
                for (; n && n.constructor !== Object; ) {
                  const r = Object.getOwnPropertyNames(n).filter(
                    (e) => !t.includes(e),
                  );
                  for (const t of r)
                    try {
                      const n = e[t];
                      yield { key: t, value: n };
                    } catch (e) {
                      console.error(
                        `Fail to get property [${t}]: ${(0, s.U)(e)}`,
                      );
                    }
                  n = Object.getPrototypeOf(n);
                }
              }
            })(e))
              n instanceof Function && a.push({ name: t });
          return { contracts: i, methods: a };
        }
        !(function (e) {
          ((e[(e.Contracts = 0)] = "Contracts"),
            (e[(e.Methods = 1)] = "Methods"));
        })(r || (r = {}));
      },
      94232: (e, t, n) => {
        n.d(t, { U: () => s });
        var r = n(58789);
        class s {
          static instance = new s();
          factories = [];
          providers = [];
          registerFactory(e) {
            this.factories.push(e);
          }
          registerProvider(e) {
            this.providers.push(e);
          }
          tryCreate(e, ...t) {
            const n = e instanceof Array ? e : [e];
            for (const e of this.factories) {
              const r = e(n, ...t);
              if (r) return r;
            }
            for (const e of this.providers) {
              const r = e.tryCreate(n, ...t);
              if (r) return r;
            }
          }
          create(e, ...t) {
            const n = this.tryCreate(e, ...t);
            if (!n) {
              const t = e instanceof Array ? e.join(";") : e;
              throw new Error(
                `Local service with contracts [${t}] not registered, and remoting not configured. Instance can not be created.`,
              );
            }
            return n;
          }
          reflectInstance(e, ...t) {
            for (const n of this.providers)
              if ((0, r.xj)(n)) {
                const r = n.reflectInstance(e, ...t);
                if (r) return r;
              }
            throw new Error(
              "System does not provide acceptable Service Reflector instance",
            );
          }
        }
      },
      59391: (e, t, n) => {
        n.d(t, { wK: () => r.wK, _v: () => r._v, Um: () => s.Um });
        var r = n(95091),
          s = n(41029);
        (n(67644), n(57118), n(19014), n(89183));
      },
      9448: (e, t, n) => {
        n.d(t, { o: () => s });
        var r = n(13855);
        const s = (e, t) => {
          try {
            return JSON.parse(e, t);
          } catch (e) {
            return ((0, r.kK)().error("jsonParse JSON.parse error", e), null);
          }
        };
      },
      72298: (e) => {
        e.exports = require("electron");
      },
      82361: (e) => {
        e.exports = require("events");
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
    n = {};
  function r(e) {
    var s = n[e];
    if (void 0 !== s) return s.exports;
    var o = (n[e] = { id: e, loaded: !1, exports: {} });
    return (t[e].call(o.exports, o, o.exports, r), (o.loaded = !0), o.exports);
  }
  ((r.m = t),
    (e = []),
    (r.O = (t, n, s, o) => {
      if (!n) {
        var i = 1 / 0;
        for (d = 0; d < e.length; d++) {
          for (var [n, s, o] = e[d], a = !0, c = 0; c < n.length; c++)
            (!1 & o || i >= o) && Object.keys(r.O).every((e) => r.O[e](n[c]))
              ? n.splice(c--, 1)
              : ((a = !1), o < i && (i = o));
          if (a) {
            e.splice(d--, 1);
            var l = s();
            void 0 !== l && (t = l);
          }
        }
        return t;
      }
      o = o || 0;
      for (var d = e.length; d > 0 && e[d - 1][2] > o; d--) e[d] = e[d - 1];
      e[d] = [n, s, o];
    }),
    (r.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return (r.d(t, { a: t }), t);
    }),
    (r.d = (e, t) => {
      for (var n in t)
        r.o(t, n) &&
          !r.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (r.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (r.r = (e) => {
      ("undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 }));
    }),
    (r.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      var e;
      r.g.importScripts && (e = r.g.location + "");
      var t = r.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var n = t.getElementsByTagName("script");
        n.length && (e = n[n.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      ((e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (r.p = e + "../"));
    })(),
    (() => {
      r.b = document.baseURI || self.location.href;
      var e = { 6675: 0 };
      r.O.j = (t) => 0 === e[t];
      var t = (t, n) => {
          var s,
            o,
            [i, a, c] = n,
            l = 0;
          if (i.some((t) => 0 !== e[t])) {
            for (s in a) r.o(a, s) && (r.m[s] = a[s]);
            if (c) var d = c(r);
          }
          for (t && t(n); l < i.length; l++)
            ((o = i[l]), r.o(e, o) && e[o] && e[o][0](), (e[i[l]] = 0));
          return r.O(d);
        },
        n = (global.webpackChunktradingview_desktop =
          global.webpackChunktradingview_desktop || []);
      (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
    })());
  var s = r.O(void 0, [7498, 686, 4637, 258, 4796, 819, 914], () => r(53442));
  s = r.O(s);
})();
