"use strict";
(global.webpackChunktradingview_desktop =
  global.webpackChunktradingview_desktop || []).push([
  [2184],
  {
    28430: (e, t, n) => {
      n.d(t, { P: () => g });
      var r = n(72298),
        s = n(13855),
        i = n(97003),
        c = n(59391),
        a = n(91277),
        o = n(23577),
        d = n(79946),
        l = n(66872),
        u = n(23935);
      const p = 3e5;
      let h = !1;
      class f {
        instances = [];
        senders = new Map();
        aliveSenders = [];
        cleanSubscriptionsInterval;
        isClearIntervalSuccess = !0;
        constructor(e) {
          this.cleanSubscriptionsInterval = global.setInterval(
            () => (0, c.wK)(this.cleanSubscriptions()),
            p,
          );
          const t = {
            [l._$]: (e) => {
              const t = e.body;
              h = !0;
              try {
                const n = i.UT.instance.create(t.contracts),
                  r = e.context?.sender;
                this.senders.get(r.id) || this.senders.set(r.id, r);
                const s = this.instances.find((e) =>
                  e.id.includes(t.contracts[0]),
                );
                if (s) d.VT.response(e, { instanceId: s.id });
                else {
                  const t = this.addInstance(n);
                  d.VT.response(e, { instanceId: t });
                }
              } finally {
                h = !1;
              }
            },
            [l.GT]: (e) => {
              const t = e.body;
              let n;
              try {
                n = this.getRequestedInstanceEntry(t);
              } catch (e) {
                const n = (0, i.UD)(e);
                (0, s.M2)().error(
                  `[RemoteInstanceManager()] Error while invoke (${t.method}):${n}`,
                  e,
                );
              }
              if (!n) return;
              const r = n.instance,
                c = l.R8(t.args, (n) => {
                  const r = e.context?.sender;
                  return u.h.createForInstance(n, r, void 0, t.args);
                });
              let a = r[t.method];
              if ((a || "function" != typeof r || (a = r), void 0 === a))
                return void d.VT.responseFailure(
                  e,
                  `Instance (${t.instanceId}) does not provide invocable property: (${t.method})`,
                );
              const o = a.apply(r, c);
              o instanceof Promise
                ? o
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
                      n || r || !(0, i.D9)(t) || !s
                        ? d.VT.response(e, l.k2(t))
                        : d.VT.response(e, {
                            dispatchedRemoteInstanceId: s.id,
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
              let r;
              try {
                r = this.getRequestedInstanceEntry(n);
              } catch (e) {
                const t = (0, i.UD)(e);
                (0, s.M2)().error(
                  `[RemoteInstanceManager()] Error while subscribe (${n.method}):${t}`,
                  e,
                );
              }
              r && r.eventSubscribe(e);
            },
            [l.qy]: (e) => {
              const t = e.body;
              try {
                this.getRequestedInstanceEntry(t).eventUnsubscribe(t);
              } catch (e) {
                const n = (0, i.UD)(e);
                (0, s.M2)().error(
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
                const n = (0, i.UD)(e);
                (0, s.M2)().error(
                  `[RemoteInstanceManager()] Error while event next (${t.method}):${n}`,
                  e,
                );
              }
              if (!n) return;
              const r = n.instance[t.method];
              r && r.next
                ? (r.next(t.args[0]), d.VT.response(e, void 0))
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
                const n = (0, i.UD)(e);
                (0, s.M2)().error(
                  `[RemoteInstanceManager()] Error while message reflect (${t.instanceId}):${n}`,
                  e,
                );
              }
              if (!n) return;
              const r = t.aspects ?? [],
                c = (0, i.vO)(n.instance, ...r);
              d.VT.response(e, c);
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
          (r.ipcMain &&
            (0, s.M2)().debug("RemoteInstanceManager.cleanSubscriptions()"),
            this.isClearIntervalSuccess ||
              (this.clearSubscriptionsInterval(),
              (this.isClearIntervalSuccess = !0),
              (this.cleanSubscriptionsInterval = global.setInterval(
                () => (0, c.wK)(this.cleanSubscriptions()),
                p,
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
                    (0, s.M2)().error(
                      "RemoteInstanceManager().cleanSubscriptions communicator send error",
                      e,
                    ),
                  )
                  .finally(() => {
                    n.dispose();
                  });
              }
            }),
              await (0, c._v)(3e4),
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
            (0, s.M2)().error(
              'RemoteInstanceManager.cleanSubscriptions(): "communicator send error"',
              e,
            );
          }
        }
        async reflectRemoteInstance(e, t, n) {
          const r = { instanceId: t, aspects: n },
            s = await e.send({ headers: { [l.zQ]: l.QK }, body: r });
          return d.VT.getResponseBody(s);
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
      class g {
        static hostInstance = null;
        instanceManager;
        static initialize(e) {
          if (g.hostInstance)
            throw new Error("Service host already initialized");
          ((g.hostInstance = new g(e)), (0, d.P3)(g.hostInstance));
        }
        static get instance() {
          if (null === g.hostInstance)
            throw new Error("ServiceHost not initialized");
          return g.hostInstance;
        }
        static get exists() {
          return null !== g.hostInstance;
        }
        static destroy() {
          (this.hostInstance?.instanceManager.clearSubscriptionsInterval(),
            (this.hostInstance = null));
        }
        constructor(e) {
          this.instanceManager = new f(e);
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
          if (!g.exists || h) return;
          const n = e instanceof Array ? e : [e];
          return u.h.createForContracts(n);
        }
        reflectInstance(e, ...t) {
          if (!g.exists) return;
          if (u.h.isProxy(e)) {
            if (!g.exists)
              throw new Error(
                "Attempt to reflect ipc-service-instance but ServiceHost instance does not exists",
              );
            return (async () => {
              const n = await e.ipcProxyInstanceId();
              return g.instance.reflectRemoteInstance(
                e.ipcProxyCommunicator(),
                n,
                t,
              );
            })();
          }
          const n = (0, i.vO)(e);
          return n ? Promise.resolve(n) : void 0;
        }
      };
      y = (function (e, t, n, r) {
        var s,
          i = arguments.length,
          c =
            i < 3
              ? t
              : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, n))
                : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          c = Reflect.decorate(e, t, n, r);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (s = e[a]) &&
              (c = (i < 3 ? s(c) : i > 3 ? s(t, n, c) : s(t, n)) || c);
        return (i > 3 && c && Object.defineProperty(t, n, c), c);
      })([(0, i.nt)()], y);
    },
    36458: (e, t, n) => {
      (n.d(t, { i: () => r }), n(96485));
      var r = n(21810);
    },
    52364: (e, t, n) => {
      n.d(t, { iC: () => r });
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
      n.d(t, { u1: () => c, kK: () => a, M2: () => o, x$: () => d });
      var r = n(72298),
        s = n(36458),
        i = n(52364);
      function c() {
        return s.i.getProvider().provide(i.iC);
      }
      function a() {
        return r.ipcMain
          ? s.i.getProvider().provide(i.iC)
          : s.i.provideProxy(i.iC);
      }
      function o() {
        return s.i.provide(i.iC);
      }
      function d() {
        return s.i.provideProxy(i.iC);
      }
    },
    46628: (e, t, n) => {
      n.d(t, { P: () => o });
      var r = n(72298),
        s = n(57147),
        i = n(71017),
        c = n(13855),
        a = n(97003);
      class o {
        static appStorageFolderName = "TVAppStorage";
        static appUserStorageFolderName = "TVUserStorage";
        static appStateFileName = "appState.json";
        static encoding = "utf8";
        static exists(e) {
          return s.existsSync(e);
        }
        static createDir(e, t) {
          s.mkdirSync(e, t);
        }
        static deleteDir(e, t) {
          return s.rmdirSync(e, t);
        }
        static delete(e) {
          s.unlinkSync(e);
        }
        static deleteAsync(e) {
          return new Promise((t, n) => {
            s.unlink(e, (e) => {
              e ? n(e) : t();
            });
          });
        }
        static writeFileAsync(e, t, n) {
          return s.promises
            .writeFile(e, t, { encoding: this.encoding, flag: n })
            .catch((e) => (0, c.u1)().error("Error while write file: ", e));
        }
        static readFileAsync(e, t) {
          return new Promise((n, r) => {
            s.readFile(e, { encoding: this.encoding, flag: t }, (e, t) => {
              null !== e ? r(e) : n(t);
            });
          });
        }
        static readFileSync(e) {
          return s.readFileSync(e, { encoding: "utf8" });
        }
        static readDirAsync(e) {
          return new Promise((t, n) => {
            s.readdir(e, { encoding: this.encoding }, (e, r) => {
              null !== e ? n(e) : t(r);
            });
          });
        }
        static readDirSync(e) {
          return s.readdirSync(e);
        }
        static fileStats(e, t) {
          return new Promise((n, r) => {
            s.stat(e, t ?? { bigint: !1 }, (e, t) => {
              null !== e ? r(e) : n(t);
            });
          });
        }
        static async dirContentStats(e) {
          const t = await this.readDirAsync(e);
          return Promise.all(
            t.map(async (t) => {
              const n = (0, i.join)(e, t);
              return { fullPath: n, stats: await this.fileStats(n) };
            }),
          );
        }
        static makeAppDataPath(e) {
          return (0, i.join)(
            o.getDefaultCriticalAppPathOrThrow("appData"),
            r.app.getName(),
            e,
          );
        }
        static makeAppRootPath(e) {
          const t = r.app.getAppPath();
          return (0, i.join)(t, e);
        }
        static createWriteStream(e, t) {
          return s.createWriteStream(e, t);
        }
        static getDefaultAppPath(e) {
          try {
            return r.app.getPath(e);
          } catch (t) {
            (0, c.u1)().error(
              `[FileSystemProvider.getDefaultAppPath()] Exception on getPath(${e}): ${(0, a.UD)(t)}`,
            );
          }
          return null;
        }
        static getDefaultCriticalAppPathOrThrow(e) {
          return r.app.getPath(e);
        }
        static getAppDocumentsPath() {
          const e = o.getDefaultAppPath("documents");
          return e ? (0, i.join)(e, r.app.getName()) : null;
        }
        static getAppUserStorageFolderPath() {
          return (0, i.join)(
            o.getDefaultCriticalAppPathOrThrow("userData"),
            o.appUserStorageFolderName,
          );
        }
        static getAppStateFilePath() {
          const e = o.getDefaultCriticalAppPathOrThrow("userData"),
            t = (0, i.join)(e, o.appStorageFolderName);
          return (
            o.exists(t) || o.createDir(t, { recursive: !0 }),
            (0, i.join)(t, o.appStateFileName)
          );
        }
      }
    },
    39985: (e, t, n) => {
      n.d(t, { f: () => r });
      const r = Symbol("ServiceContracts");
    },
    58789: (e, t, n) => {
      n.d(t, { ZJ: () => r, xj: () => c, vO: () => a });
      var r,
        s = n(80271),
        i = n(39985);
      function c(e) {
        return "object" == typeof e && e.reflectInstance instanceof Function;
      }
      function a(e, ...t) {
        if ("object" != typeof e || !e) return;
        const n = (e) => !t || 0 === t.length || t.includes(e),
          c = [];
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
            const e = t ? Reflect.getMetadata(i.f, t) : void 0;
            e && c.push(...e);
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
        return { contracts: c, methods: a };
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
  },
]);
