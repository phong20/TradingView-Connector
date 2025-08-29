"use strict";
(global.webpackChunktradingview_desktop =
  global.webpackChunktradingview_desktop || []).push([
  [8655],
  {
    79946: (e, t, n) => {
      n.d(t, {
        VT: () => a,
        rs: () => l,
        kS: () => h,
        yd: () => u,
        Ry: () => f,
        P3: () => p,
        Q2: () => y,
      });
      var s = n(72298),
        r = n(31937),
        c = n(98886),
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
            s = "";
          "string" == typeof t
            ? (s = t)
            : t instanceof Error
              ? ((s = `(${t.name}):${t.message}`), (n = t.stack))
              : (s = "Untyped error");
          const r = {
            headers: { ...e.headers, success: !1, failure: s },
            body: {},
          };
          (n && (r.headers.stack = n), e.responseChannel(r));
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
          return r.Y;
        }
      }
      let o = null,
        d = null;
      function l() {
        return (o || (o = new i.B()), o);
      }
      function h() {
        return (d || (d = new i.n()), d);
      }
      const u = function (e) {
        s.ipcRenderer.send(c.f, e);
      };
      function f(e) {
        return function (t) {
          e && !e.isDestroyed() && e.send(c.f, t);
        };
      }
      let I;
      function p(e) {
        if (void 0 !== I)
          throw new Error(
            "Service host instance already registered for current process",
          );
        I = e;
      }
      function y() {
        if (!I)
          throw new Error(
            "Service host instance not registered for current process",
          );
        return I;
      }
    },
    28430: (e, t, n) => {
      n.d(t, { P: () => p });
      var s = n(72298),
        r = n(13855),
        c = n(97003),
        i = n(59391),
        a = n(91277),
        o = n(23577),
        d = n(79946),
        l = n(66872),
        h = n(23935);
      const u = 3e5;
      let f = !1;
      class I {
        instances = [];
        senders = new Map();
        aliveSenders = [];
        cleanSubscriptionsInterval;
        isClearIntervalSuccess = !0;
        constructor(e) {
          this.cleanSubscriptionsInterval = global.setInterval(
            () => (0, i.wK)(this.cleanSubscriptions()),
            u,
          );
          const t = {
            [l._$]: (e) => {
              const t = e.body;
              f = !0;
              try {
                const n = c.UT.instance.create(t.contracts),
                  s = e.context?.sender;
                this.senders.get(s.id) || this.senders.set(s.id, s);
                const r = this.instances.find((e) =>
                  e.id.includes(t.contracts[0]),
                );
                if (r) d.VT.response(e, { instanceId: r.id });
                else {
                  const t = this.addInstance(n);
                  d.VT.response(e, { instanceId: t });
                }
              } finally {
                f = !1;
              }
            },
            [l.GT]: (e) => {
              const t = e.body;
              let n;
              try {
                n = this.getRequestedInstanceEntry(t);
              } catch (e) {
                const n = (0, c.UD)(e);
                (0, r.M2)().error(
                  `[RemoteInstanceManager()] Error while invoke (${t.method}):${n}`,
                  e,
                );
              }
              if (!n) return;
              const s = n.instance,
                i = l.R8(t.args, (n) => {
                  const s = e.context?.sender;
                  return h.h.createForInstance(n, s, void 0, t.args);
                });
              let a = s[t.method];
              if ((a || "function" != typeof s || (a = s), void 0 === a))
                return void d.VT.responseFailure(
                  e,
                  `Instance (${t.instanceId}) does not provide invocable property: (${t.method})`,
                );
              const o = a.apply(s, i);
              o instanceof Promise
                ? o
                    .then((t) => {
                      const n = "function" == typeof t,
                        s = !t || "object" != typeof t,
                        r =
                          !!t &&
                          this.instances.find(
                            (e) =>
                              e.instance.windowPersistentId ===
                              t.windowPersistentId,
                          );
                      n || s || !(0, c.D9)(t) || !r
                        ? d.VT.response(e, l.k2(t))
                        : d.VT.response(e, {
                            dispatchedRemoteInstanceId: r.id,
                          });
                    })
                    .catch((t) => {
                      d.VT.responseFailure(e, t);
                    })
                : d.VT.response(e, l.k2(o));
            },
            [l.Ez]: (e) => {
              const t = e.context?.sender;
              this.senders.get(t.id) || this.senders.set(t.id, t);
              const n = e.body;
              let s;
              try {
                s = this.getRequestedInstanceEntry(n);
              } catch (e) {
                const t = (0, c.UD)(e);
                (0, r.M2)().error(
                  `[RemoteInstanceManager()] Error while subscribe (${n.method}):${t}`,
                  e,
                );
              }
              s && s.eventSubscribe(e);
            },
            [l.qy]: (e) => {
              const t = e.body;
              try {
                this.getRequestedInstanceEntry(t).eventUnsubscribe(t);
              } catch (e) {
                const n = (0, c.UD)(e);
                (0, r.M2)().error(
                  `[RemoteInstanceManager()] Error while unsubscribe (${t.method}):${n}`,
                  e,
                );
              }
            },
            [l.E6]: (e) => {
              const t = e.body;
              let n;
              try {
                n = this.getRequestedInstanceEntry(t);
              } catch (e) {
                const n = (0, c.UD)(e);
                (0, r.M2)().error(
                  `[RemoteInstanceManager()] Error while event next (${t.method}):${n}`,
                  e,
                );
              }
              if (!n) return;
              const s = n.instance[t.method];
              s && s.next
                ? (s.next(t.args[0]), d.VT.response(e, void 0))
                : d.VT.responseFailure(
                    e,
                    `Instance (${t.instanceId}) does not provide nextable subject: (${t.method})`,
                  );
            },
            [l.QK]: (e) => {
              const t = e.body;
              let n;
              try {
                n = this.getRequestedInstanceEntry(t.instanceId);
              } catch (e) {
                const n = (0, c.UD)(e);
                (0, r.M2)().error(
                  `[RemoteInstanceManager()] Error while message reflect (${t.instanceId}):${n}`,
                  e,
                );
              }
              if (!n) return;
              const s = t.aspects ?? [],
                i = (0, c.vO)(n.instance, ...s);
              d.VT.response(e, i);
            },
            [l.XK]: (e) => {
              const t = e.body.instanceId;
              this.closeInstance(t);
            },
            [l.uY]: (e) => {
              d.VT.response(e, { aliveSenderId: e.body.aliveSenderId });
            },
          };
          e.onRequest.subscribe((e) => {
            const n = d.VT.headerValue(e, l.zQ);
            try {
              n && n in t && t[n](e);
            } catch (t) {
              d.VT.responseFailure(e, t);
            }
          });
        }
        addInstance(e) {
          const t = new a.X(e);
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
          (s.ipcMain &&
            (0, r.M2)().debug("RemoteInstanceManager.cleanSubscriptions()"),
            this.isClearIntervalSuccess ||
              (this.clearSubscriptionsInterval(),
              (this.isClearIntervalSuccess = !0),
              (this.cleanSubscriptionsInterval = global.setInterval(
                () => (0, i.wK)(this.cleanSubscriptions()),
                u,
              ))),
            (this.isClearIntervalSuccess = !1),
            (this.aliveSenders = []));
          try {
            (this.senders.forEach((e) => {
              if (e && "function" == typeof e.isDestroyed && !e.isDestroyed()) {
                const t = {
                    headers: { [l.zQ]: l.uY },
                    body: { aliveSenderId: e.id },
                  },
                  n = e && e.id ? o.w.createForWebContents(e) : o.w.forRenderer;
                n.send(t)
                  .then((e) => this.aliveSenders.push(e.body.aliveSenderId))
                  .catch((e) =>
                    (0, r.M2)().error(
                      "RemoteInstanceManager().cleanSubscriptions communicator send error",
                      e,
                    ),
                  )
                  .finally(() => {
                    n.dispose();
                  });
              }
            }),
              await (0, i._v)(3e4),
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
            (0, r.M2)().error(
              'RemoteInstanceManager.cleanSubscriptions(): "communicator send error"',
              e,
            );
          }
        }
        async reflectRemoteInstance(e, t, n) {
          const s = { instanceId: t, aspects: n },
            r = await e.send({ headers: { [l.zQ]: l.QK }, body: s });
          return d.VT.getResponseBody(r);
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
      class p {
        static hostInstance = null;
        instanceManager;
        static initialize(e) {
          if (p.hostInstance)
            throw new Error("Service host already initialized");
          ((p.hostInstance = new p(e)), (0, d.P3)(p.hostInstance));
        }
        static get instance() {
          if (null === p.hostInstance)
            throw new Error("ServiceHost not initialized");
          return p.hostInstance;
        }
        static get exists() {
          return null !== p.hostInstance;
        }
        static destroy() {
          (this.hostInstance?.instanceManager.clearSubscriptionsInterval(),
            (this.hostInstance = null));
        }
        constructor(e) {
          this.instanceManager = new I(e);
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
      let y = class {
        tryCreate(e, ...t) {
          if (!p.exists || f) return;
          const n = e instanceof Array ? e : [e];
          return h.h.createForContracts(n);
        }
        reflectInstance(e, ...t) {
          if (!p.exists) return;
          if (h.h.isProxy(e)) {
            if (!p.exists)
              throw new Error(
                "Attempt to reflect ipc-service-instance but ServiceHost instance does not exists",
              );
            return (async () => {
              const n = await e.ipcProxyInstanceId();
              return p.instance.reflectRemoteInstance(
                e.ipcProxyCommunicator(),
                n,
                t,
              );
            })();
          }
          const n = (0, c.vO)(e);
          return n ? Promise.resolve(n) : void 0;
        }
      };
      y = (function (e, t, n, s) {
        var r,
          c = arguments.length,
          i =
            c < 3
              ? t
              : null === s
                ? (s = Object.getOwnPropertyDescriptor(t, n))
                : s;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          i = Reflect.decorate(e, t, n, s);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (r = e[a]) &&
              (i = (c < 3 ? r(i) : c > 3 ? r(t, n, i) : r(t, n)) || i);
        return (c > 3 && i && Object.defineProperty(t, n, i), i);
      })([(0, c.nt)()], y);
    },
    36458: (e, t, n) => {
      (n.d(t, { i: () => s }), n(96485));
      var s = n(21810);
    },
    16693: (e, t, n) => {
      (0, n(87269).Um)();
    },
  },
]);
