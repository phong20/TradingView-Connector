(global.webpackChunktradingview_desktop =
  global.webpackChunktradingview_desktop || []).push([
  [4796],
  {
    3704: (e, t, n) => {
      "use strict";
      n(3082);
    },
    69058: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = (e, t) => `${e.id}-${t}`;
      t.default = new (class {
        constructor() {
          ((this.nextId = 0),
            (this.storage = {}),
            (this.owners = {}),
            (this.electronIds = new WeakMap()));
        }
        add(e, t, r) {
          const o = this.saveToStorage(r),
            s = n(e, t);
          let i = this.owners[s];
          return (
            i ||
              ((i = this.owners[s] = new Map()),
              this.registerDeleteListener(e, t)),
            i.has(o) || (i.set(o, 0), this.storage[o].count++),
            i.set(o, i.get(o) + 1),
            o
          );
        }
        get(e) {
          const t = this.storage[e];
          if (null != t) return t.object;
        }
        remove(e, t, r) {
          const o = n(e, t),
            s = this.owners[o];
          if (s && s.has(r)) {
            const e = s.get(r) - 1;
            e <= 0 ? (s.delete(r), this.dereference(r)) : s.set(r, e);
          }
        }
        clear(e, t) {
          const r = n(e, t),
            o = this.owners[r];
          if (o) {
            for (const e of o.keys()) this.dereference(e);
            delete this.owners[r];
          }
        }
        saveToStorage(e) {
          let t = this.electronIds.get(e);
          return (
            t ||
              ((t = ++this.nextId),
              (this.storage[t] = { count: 0, object: e }),
              this.electronIds.set(e, t)),
            t
          );
        }
        dereference(e) {
          const t = this.storage[e];
          null != t &&
            ((t.count -= 1),
            0 === t.count &&
              (this.electronIds.delete(t.object), delete this.storage[e]));
        }
        registerDeleteListener(e, t) {
          const n = t.split("-")[0],
            r = (o, s) => {
              s &&
                s.toString() === n &&
                (e.removeListener("render-view-deleted", r), this.clear(e, t));
            };
          e.on("render-view-deleted", r);
        }
      })();
    },
    3082: function (e, t, n) {
      "use strict";
      e = n.nmd(e);
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.initialize =
          t.isInitialized =
          t.enable =
          t.isRemoteModuleEnabled =
            void 0));
      const o = n(82361),
        s = r(n(69058)),
        i = n(59970),
        a = n(72298),
        u = n(81435),
        { Promise: l } = global,
        c = u.getElectronBinding("v8_util"),
        d = (() => {
          var e, t;
          const n = Number(
            null ===
              (t =
                null === (e = process.versions.electron) || void 0 === e
                  ? void 0
                  : e.split(".")) || void 0 === t
              ? void 0
              : t[0],
          );
          return Number.isNaN(n) || n < 14;
        })(),
        f = ["length", "name", "arguments", "caller", "prototype"],
        m = new Map(),
        E = new FinalizationRegistry((e) => {
          const t = e.id[0] + "~" + e.id[1],
            n = m.get(t);
          if (
            void 0 !== n &&
            void 0 === n.deref() &&
            (m.delete(t), !e.webContents.isDestroyed())
          )
            try {
              e.webContents.sendToFrame(
                e.frameId,
                "REMOTE_RENDERER_RELEASE_CALLBACK",
                e.id[0],
                e.id[1],
              );
            } catch (e) {
              console.warn(`sendToFrame() failed: ${e}`);
            }
        });
      function g(e) {
        const t = e[0] + "~" + e[1],
          n = m.get(t);
        if (void 0 !== n) {
          const e = n.deref();
          if (void 0 !== e) return e;
        }
      }
      const R = new WeakMap(),
        b = function (e) {
          let t = Object.getOwnPropertyNames(e);
          return (
            "function" == typeof e && (t = t.filter((e) => !f.includes(e))),
            t.map((t) => {
              const n = Object.getOwnPropertyDescriptor(e, t);
              let r,
                o = !1;
              return (
                void 0 === n.get && "function" == typeof e[t]
                  ? (r = "method")
                  : ((n.set || n.writable) && (o = !0), (r = "get")),
                { name: t, enumerable: n.enumerable, writable: o, type: r }
              );
            })
          );
        },
        h = function (e) {
          const t = Object.getPrototypeOf(e);
          return null === t || t === Object.prototype
            ? null
            : { members: b(t), proto: h(t) };
        },
        v = function (e, t, n, r = !1) {
          let o;
          switch (typeof n) {
            case "object":
              o =
                n instanceof Buffer
                  ? "buffer"
                  : n && n.constructor && "NativeImage" === n.constructor.name
                    ? "nativeimage"
                    : Array.isArray(n)
                      ? "array"
                      : n instanceof Error
                        ? "error"
                        : i.isSerializableObject(n)
                          ? "value"
                          : i.isPromise(n)
                            ? "promise"
                            : Object.prototype.hasOwnProperty.call(
                                  n,
                                  "callee",
                                ) && null != n.length
                              ? "array"
                              : r && c.getHiddenValue(n, "simple")
                                ? "value"
                                : "object";
              break;
            case "function":
              o = "function";
              break;
            default:
              o = "value";
          }
          return "array" === o
            ? { type: o, members: n.map((n) => v(e, t, n, r)) }
            : "nativeimage" === o
              ? { type: o, value: i.serialize(n) }
              : "object" === o || "function" === o
                ? {
                    type: o,
                    name: n.constructor ? n.constructor.name : "",
                    id: s.default.add(e, t, n),
                    members: b(n),
                    proto: h(n),
                  }
                : "buffer" === o
                  ? { type: o, value: n }
                  : "promise" === o
                    ? (n.then(
                        function () {},
                        function () {},
                      ),
                      {
                        type: o,
                        then: v(e, t, function (e, t) {
                          n.then(e, t);
                        }),
                      })
                    : "error" === o
                      ? {
                          type: o,
                          value: n,
                          members: Object.keys(n).map((r) => ({
                            name: r,
                            value: v(e, t, n[r]),
                          })),
                        }
                      : { type: "value", value: n };
        },
        p = function (e) {
          const t = new Error(e);
          throw ((t.code = "EBADRPC"), (t.errno = -72), t);
        },
        w = (e, t) => {
          let n = `Attempting to call a function in a renderer window that has been closed or released.\nFunction provided here: ${R.get(t)}`;
          if (e instanceof o.EventEmitter) {
            const r = e.eventNames().filter((n) => e.listeners(n).includes(t));
            r.length > 0 &&
              ((n += `\nRemote event names: ${r.join(", ")}`),
              r.forEach((n) => {
                e.removeListener(n, t);
              }));
          }
          console.warn(n);
        },
        O = function (e, t, n, r) {
          const o = function (r) {
            switch (r.type) {
              case "nativeimage":
                return i.deserialize(r.value);
              case "value":
                return r.value;
              case "remote-object":
                return s.default.get(r.id);
              case "array":
                return O(e, t, n, r.value);
              case "buffer":
                return Buffer.from(
                  r.value.buffer,
                  r.value.byteOffset,
                  r.value.byteLength,
                );
              case "promise":
                return l.resolve({ then: o(r.then) });
              case "object": {
                const e =
                  "Object" !== r.name
                    ? Object.create({
                        constructor:
                          ((a = r.name),
                          new Proxy(Object, {
                            get: (e, t, n) =>
                              "name" === t ? a : Reflect.get(e, t, n),
                          })),
                      })
                    : {};
                for (const { name: t, value: n } of r.members) e[t] = o(n);
                return e;
              }
              case "function-with-return-value": {
                const e = o(r.value);
                return function () {
                  return e;
                };
              }
              case "function": {
                const o = [n, r.id],
                  s = g(o);
                if (void 0 !== s) return s;
                const i = function (...o) {
                  let s = !1;
                  if (!e.isDestroyed())
                    try {
                      s =
                        !1 !==
                        e.sendToFrame(
                          t,
                          "REMOTE_RENDERER_CALLBACK",
                          n,
                          r.id,
                          v(e, n, o),
                        );
                    } catch (e) {
                      console.warn(`sendToFrame() failed: ${e}`);
                    }
                  s || w(this, i);
                };
                return (
                  R.set(i, r.location),
                  Object.defineProperty(i, "length", { value: r.length }),
                  (function (e, t, n, r) {
                    const o = new WeakRef(r),
                      s = e[0] + "~" + e[1];
                    (m.set(s, o),
                      E.register(r, { id: e, webContents: t, frameId: n }));
                  })(o, e, t, i),
                  i
                );
              }
              default:
                throw new TypeError(`Unknown type: ${r.type}`);
            }
            var a;
          };
          return r.map(o);
        },
        _ = new WeakMap();
      ((t.isRemoteModuleEnabled = function (e) {
        return (
          d &&
            !_.has(e) &&
            _.set(
              e,
              (function (e) {
                const t = e.getLastWebPreferences() || {};
                return null != t.enableRemoteModule && !!t.enableRemoteModule;
              })(e),
            ),
          _.get(e)
        );
      }),
        (t.enable = function (e) {
          _.set(e, !0);
        }));
      const y = function (e, n) {
          a.ipcMain.on(e, (e, r, ...o) => {
            let s;
            if (t.isRemoteModuleEnabled(e.sender)) {
              try {
                s = n(e, r, ...o);
              } catch (t) {
                s = { type: "exception", value: v(e.sender, r, t) };
              }
              void 0 !== s && (e.returnValue = s);
            } else
              e.returnValue = {
                type: "exception",
                value: v(
                  e.sender,
                  r,
                  new Error(
                    '@electron/remote is disabled for this WebContents. Call require("@electron/remote/main").enable(webContents) to enable it.',
                  ),
                ),
              };
          });
        },
        C = function (e, t, ...n) {
          const r = { sender: e, returnValue: void 0, defaultPrevented: !1 };
          return (a.app.emit(t, r, e, ...n), e.emit(t, r, ...n), r);
        },
        T = function (e, t, n) {
          n && console.warn(`WebContents (${e.id}): ${t}`, n);
        };
      let M = !1;
      ((t.isInitialized = function () {
        return M;
      }),
        (t.initialize = function () {
          if (M)
            throw new Error("@electron/remote has already been initialized");
          ((M = !0),
            y("REMOTE_BROWSER_WRONG_CONTEXT_ERROR", function (e, t, n, r) {
              const o = g([n, r]);
              void 0 !== o && w(e.sender, o);
            }),
            y("REMOTE_BROWSER_REQUIRE", function (t, n, r, o) {
              T(t.sender, `remote.require('${r}')`, o);
              const s = C(t.sender, "remote-require", r);
              if (void 0 === s.returnValue) {
                if (s.defaultPrevented)
                  throw new Error(`Blocked remote.require('${r}')`);
                if (process.mainModule)
                  s.returnValue = process.mainModule.require(r);
                else {
                  let t = e;
                  for (; t.parent; ) t = t.parent;
                  s.returnValue = t.require(r);
                }
              }
              return v(t.sender, n, s.returnValue);
            }),
            y("REMOTE_BROWSER_GET_BUILTIN", function (e, t, r, o) {
              T(e.sender, `remote.getBuiltin('${r}')`, o);
              const s = C(e.sender, "remote-get-builtin", r);
              if (void 0 === s.returnValue) {
                if (s.defaultPrevented)
                  throw new Error(`Blocked remote.getBuiltin('${r}')`);
                s.returnValue = n(72298)[r];
              }
              return v(e.sender, t, s.returnValue);
            }),
            y("REMOTE_BROWSER_GET_GLOBAL", function (e, t, n, r) {
              T(e.sender, `remote.getGlobal('${n}')`, r);
              const o = C(e.sender, "remote-get-global", n);
              if (void 0 === o.returnValue) {
                if (o.defaultPrevented)
                  throw new Error(`Blocked remote.getGlobal('${n}')`);
                o.returnValue = global[n];
              }
              return v(e.sender, t, o.returnValue);
            }),
            y("REMOTE_BROWSER_GET_CURRENT_WINDOW", function (e, t, n) {
              T(e.sender, "remote.getCurrentWindow()", n);
              const r = C(e.sender, "remote-get-current-window");
              if (void 0 === r.returnValue) {
                if (r.defaultPrevented)
                  throw new Error("Blocked remote.getCurrentWindow()");
                r.returnValue = e.sender.getOwnerBrowserWindow();
              }
              return v(e.sender, t, r.returnValue);
            }),
            y("REMOTE_BROWSER_GET_CURRENT_WEB_CONTENTS", function (e, t, n) {
              T(e.sender, "remote.getCurrentWebContents()", n);
              const r = C(e.sender, "remote-get-current-web-contents");
              if (void 0 === r.returnValue) {
                if (r.defaultPrevented)
                  throw new Error("Blocked remote.getCurrentWebContents()");
                r.returnValue = e.sender;
              }
              return v(e.sender, t, r.returnValue);
            }),
            y("REMOTE_BROWSER_CONSTRUCTOR", function (e, t, n, r) {
              r = O(e.sender, e.frameId, t, r);
              const o = s.default.get(n);
              return (
                null == o &&
                  p(`Cannot call constructor on missing remote object ${n}`),
                v(e.sender, t, new o(...r))
              );
            }),
            y("REMOTE_BROWSER_FUNCTION_CALL", function (e, t, n, r) {
              r = O(e.sender, e.frameId, t, r);
              const o = s.default.get(n);
              null == o &&
                p(`Cannot call function on missing remote object ${n}`);
              try {
                return v(e.sender, t, o(...r), !0);
              } catch (e) {
                const t = new Error(
                  `Could not call remote function '${o.name || "anonymous"}'. Check that the function signature is correct. Underlying error: ${e}\n` +
                    (e instanceof Error
                      ? `Underlying stack: ${e.stack}\n`
                      : ""),
                );
                throw ((t.cause = e), t);
              }
            }),
            y("REMOTE_BROWSER_MEMBER_CONSTRUCTOR", function (e, t, n, r, o) {
              o = O(e.sender, e.frameId, t, o);
              const i = s.default.get(n);
              return (
                null == i &&
                  p(
                    `Cannot call constructor '${r}' on missing remote object ${n}`,
                  ),
                v(e.sender, t, new i[r](...o))
              );
            }),
            y("REMOTE_BROWSER_MEMBER_CALL", function (e, t, n, r, o) {
              o = O(e.sender, e.frameId, t, o);
              const i = s.default.get(n);
              null == i &&
                p(`Cannot call method '${r}' on missing remote object ${n}`);
              try {
                return v(e.sender, t, i[r](...o), !0);
              } catch (e) {
                const t = new Error(
                  `Could not call remote method '${r}'. Check that the method signature is correct. Underlying error: ${e}` +
                    (e instanceof Error
                      ? `Underlying stack: ${e.stack}\n`
                      : ""),
                );
                throw ((t.cause = e), t);
              }
            }),
            y("REMOTE_BROWSER_MEMBER_SET", function (e, t, n, r, o) {
              o = O(e.sender, e.frameId, t, o);
              const i = s.default.get(n);
              return (
                null == i &&
                  p(`Cannot set property '${r}' on missing remote object ${n}`),
                (i[r] = o[0]),
                null
              );
            }),
            y("REMOTE_BROWSER_MEMBER_GET", function (e, t, n, r) {
              const o = s.default.get(n);
              return (
                null == o &&
                  p(`Cannot get property '${r}' on missing remote object ${n}`),
                v(e.sender, t, o[r])
              );
            }),
            y("REMOTE_BROWSER_DEREFERENCE", function (e, t, n) {
              s.default.remove(e.sender, t, n);
            }),
            y(
              "REMOTE_BROWSER_CONTEXT_RELEASE",
              (e, t) => (s.default.clear(e.sender, t), null),
            ));
        }));
    },
    65726: (e, t, n) => {
      n(3704);
    },
    76699: (e, t, n) => {
      e.exports = n(14637);
    },
    50959: (e, t, n) => {
      "use strict";
      e.exports = n(95257);
    },
    77118: (e, t, n) => {
      "use strict";
      n.d(t, { n_: () => r.n, nZ: () => o.nZ, YA: () => s.YA, S1: () => i.S });
      var r = n(14547),
        o = n(4352),
        s = n(84434),
        i = (n(76191), n(16331), n(70686));
      (n(60203), n(48057));
    },
  },
]);
