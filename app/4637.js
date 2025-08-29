"use strict";
(global.webpackChunktradingview_desktop =
  global.webpackChunktradingview_desktop || []).push([
  [4637],
  {
    81435: (e, t) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getElectronBinding = void 0),
        (t.getElectronBinding = (e) =>
          process._linkedBinding
            ? process._linkedBinding("electron_common_" + e)
            : process.electronBinding
              ? process.electronBinding(e)
              : null));
    },
    22083: (e, t, n) => {
      var r, o;
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.browserModuleNames = t.commonModuleNames = void 0));
      const i = n(81435);
      ((t.commonModuleNames = ["clipboard", "nativeImage", "shell"]),
        (t.browserModuleNames = [
          "app",
          "autoUpdater",
          "BaseWindow",
          "BrowserView",
          "BrowserWindow",
          "contentTracing",
          "crashReporter",
          "dialog",
          "globalShortcut",
          "ipcMain",
          "inAppPurchase",
          "Menu",
          "MenuItem",
          "nativeTheme",
          "net",
          "netLog",
          "MessageChannelMain",
          "Notification",
          "powerMonitor",
          "powerSaveBlocker",
          "protocol",
          "pushNotifications",
          "safeStorage",
          "screen",
          "session",
          "ShareMenu",
          "systemPreferences",
          "TopLevelWindow",
          "TouchBar",
          "Tray",
          "utilityProcess",
          "View",
          "webContents",
          "WebContentsView",
          "webFrameMain",
        ].concat(t.commonModuleNames)));
      const c = i.getElectronBinding("features");
      (!1 !==
        (null === (r = null == c ? void 0 : c.isDesktopCapturerEnabled) ||
        void 0 === r
          ? void 0
          : r.call(c)) && t.browserModuleNames.push("desktopCapturer"),
        !1 !==
          (null === (o = null == c ? void 0 : c.isViewApiEnabled) ||
          void 0 === o
            ? void 0
            : o.call(c)) && t.browserModuleNames.push("ImageView"));
    },
    59970: (e, t, n) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.deserialize =
          t.serialize =
          t.isSerializableObject =
          t.isPromise =
            void 0));
      const r = n(72298);
      t.isPromise = function (e) {
        return (
          e &&
          e.then &&
          e.then instanceof Function &&
          e.constructor &&
          e.constructor.reject &&
          e.constructor.reject instanceof Function &&
          e.constructor.resolve &&
          e.constructor.resolve instanceof Function
        );
      };
      const o = [Boolean, Number, String, Date, Error, RegExp, ArrayBuffer];
      function i(e) {
        return (
          null === e || ArrayBuffer.isView(e) || o.some((t) => e instanceof t)
        );
      }
      t.isSerializableObject = i;
      const c = function (e, t) {
        const n = Object.entries(e).map(([e, n]) => [e, t(n)]);
        return Object.fromEntries(n);
      };
      ((t.serialize = function e(t) {
        return t && t.constructor && "NativeImage" === t.constructor.name
          ? (function (e) {
              const t = [],
                n = e.getScaleFactors();
              if (1 === n.length) {
                const r = n[0],
                  o = e.getSize(r),
                  i = e.toBitmap({ scaleFactor: r });
                t.push({ scaleFactor: r, size: o, buffer: i });
              } else
                for (const r of n) {
                  const n = e.getSize(r),
                    o = e.toDataURL({ scaleFactor: r });
                  t.push({ scaleFactor: r, size: n, dataURL: o });
                }
              return {
                __ELECTRON_SERIALIZED_NativeImage__: !0,
                representations: t,
              };
            })(t)
          : Array.isArray(t)
            ? t.map(e)
            : i(t)
              ? t
              : t instanceof Object
                ? c(t, e)
                : t;
      }),
        (t.deserialize = function e(t) {
          return t && t.__ELECTRON_SERIALIZED_NativeImage__
            ? (function (e) {
                const t = r.nativeImage.createEmpty();
                if (1 === e.representations.length) {
                  const {
                      buffer: n,
                      size: r,
                      scaleFactor: o,
                    } = e.representations[0],
                    { width: i, height: c } = r;
                  t.addRepresentation({
                    buffer: n,
                    scaleFactor: o,
                    width: i,
                    height: c,
                  });
                } else
                  for (const n of e.representations) {
                    const { dataURL: e, size: r, scaleFactor: o } = n,
                      { width: i, height: c } = r;
                    t.addRepresentation({
                      dataURL: e,
                      scaleFactor: o,
                      width: i,
                      height: c,
                    });
                  }
                return t;
              })(t)
            : Array.isArray(t)
              ? t.map(e)
              : i(t)
                ? t
                : t instanceof Object
                  ? c(t, e)
                  : t;
        }));
    },
    8317: (e, t) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CallbacksRegistry = void 0),
        (t.CallbacksRegistry = class {
          constructor() {
            ((this.nextId = 0),
              (this.callbacks = {}),
              (this.callbackIds = new WeakMap()),
              (this.locationInfo = new WeakMap()));
          }
          add(e) {
            let t = this.callbackIds.get(e);
            if (null != t) return t;
            ((t = this.nextId += 1),
              (this.callbacks[t] = e),
              this.callbackIds.set(e, t));
            const n = /at (.*)/gi,
              r = new Error().stack;
            if (!r) return t;
            let o, i;
            for (; null !== (i = n.exec(r)); ) {
              const e = i[1];
              if (e.includes("(native)")) continue;
              if (e.includes("(<anonymous>)")) continue;
              if (e.includes("callbacks-registry.js")) continue;
              if (e.includes("remote.js")) continue;
              if (e.includes("@electron/remote/dist")) continue;
              const t = /([^/^)]*)\)?$/gi.exec(e);
              t && (o = t[1]);
              break;
            }
            return (this.locationInfo.set(e, o), t);
          }
          get(e) {
            return this.callbacks[e] || function () {};
          }
          getLocation(e) {
            return this.locationInfo.get(e);
          }
          apply(e, ...t) {
            return this.get(e).apply(global, ...t);
          }
          remove(e) {
            const t = this.callbacks[e];
            t && (this.callbackIds.delete(t), delete this.callbacks[e]);
          }
        }));
    },
    14637: function (e, t, n) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
              }
            : function (e, t, n, r) {
                (void 0 === r && (r = n), (e[r] = t[n]));
              }),
        o =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var n in e)
              "default" === n ||
                Object.prototype.hasOwnProperty.call(t, n) ||
                r(t, e, n);
          };
      if (
        (Object.defineProperty(t, "__esModule", { value: !0 }),
        "browser" === process.type)
      )
        throw new Error(
          '"@electron/remote" cannot be required in the browser process. Instead require("@electron/remote/main").',
        );
      o(n(9434), t);
    },
    9434: (e, t, n) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createFunctionWithReturnValue =
          t.getGlobal =
          t.getCurrentWebContents =
          t.getCurrentWindow =
          t.getBuiltin =
            void 0));
      const r = n(8317),
        o = n(59970),
        i = n(72298),
        c = n(22083),
        s = n(81435),
        { Promise: a } = global,
        u = new r.CallbacksRegistry(),
        l = new Map(),
        d = new FinalizationRegistry((e) => {
          const t = l.get(e);
          void 0 !== t &&
            void 0 === t.deref() &&
            (l.delete(e),
            i.ipcRenderer.send("REMOTE_BROWSER_DEREFERENCE", E, e, 0));
        }),
        f = new WeakMap(),
        p = new WeakSet(),
        E =
          process.contextId ||
          (function () {
            const e = s.getElectronBinding("v8_util");
            if (e) return e.getHiddenValue(global, "contextId");
            throw new Error(
              "Electron >=v13.0.0-beta.6 required to support sandboxed renderers",
            );
          })();
      process.on("exit", () => {
        i.ipcRenderer.send("REMOTE_BROWSER_CONTEXT_RELEASE", E);
      });
      const R = Symbol("is-remote-proxy");
      function b(e, t = new Set()) {
        const n = (e) => {
          if (t.has(e)) return { type: "value", value: null };
          if (e && e.constructor && "NativeImage" === e.constructor.name)
            return { type: "nativeimage", value: o.serialize(e) };
          if (Array.isArray(e)) {
            t.add(e);
            const n = { type: "array", value: b(e, t) };
            return (t.delete(e), n);
          }
          if (e instanceof Buffer) return { type: "buffer", value: e };
          if (o.isSerializableObject(e)) return { type: "value", value: e };
          if ("object" == typeof e) {
            if (o.isPromise(e))
              return {
                type: "promise",
                then: n(function (t, n) {
                  e.then(t, n);
                }),
              };
            if (f.has(e)) return { type: "remote-object", id: f.get(e) };
            const r = {
              type: "object",
              name: e.constructor ? e.constructor.name : "",
              members: [],
            };
            t.add(e);
            for (const t in e) r.members.push({ name: t, value: n(e[t]) });
            return (t.delete(e), r);
          }
          return "function" == typeof e && p.has(e)
            ? { type: "function-with-return-value", value: n(e()) }
            : "function" == typeof e
              ? {
                  type: "function",
                  id: u.add(e),
                  location: u.getLocation(e),
                  length: e.length,
                }
              : { type: "value", value: e };
        };
        return e.map(n);
      }
      function g(e, t, n, r) {
        if (Array.isArray(r))
          for (const o of r) {
            if (Object.prototype.hasOwnProperty.call(t, o.name)) continue;
            const r = { enumerable: o.enumerable };
            if ("method" === o.type) {
              const t = function (...e) {
                let r;
                return (
                  (r =
                    this && this.constructor === t
                      ? "REMOTE_BROWSER_MEMBER_CONSTRUCTOR"
                      : "REMOTE_BROWSER_MEMBER_CALL"),
                  _(i.ipcRenderer.sendSync(r, E, n, o.name, b(e)))
                );
              };
              let c = m(t, n, o.name);
              ((r.get = () => ((c.ref = e), c)),
                (r.set = (e) => ((c = e), e)),
                (r.configurable = !0));
            } else
              "get" === o.type &&
                ((r.get = () =>
                  _(
                    i.ipcRenderer.sendSync(
                      "REMOTE_BROWSER_MEMBER_GET",
                      E,
                      n,
                      o.name,
                    ),
                  )),
                o.writable &&
                  (r.set = (e) => {
                    const t = b([e]),
                      r = i.ipcRenderer.sendSync(
                        "REMOTE_BROWSER_MEMBER_SET",
                        E,
                        n,
                        o.name,
                        t,
                      );
                    return (null != r && _(r), e);
                  }));
            Object.defineProperty(t, o.name, r);
          }
      }
      function y(e, t, n, r) {
        if (null === r) return;
        const o = {};
        (g(e, o, n, r.members),
          y(e, o, n, r.proto),
          Object.setPrototypeOf(t, o));
      }
      function m(e, t, n) {
        let r = !1;
        const o = () => {
          if (r) return;
          r = !0;
          const o = i.ipcRenderer.sendSync(
            "REMOTE_BROWSER_MEMBER_GET",
            E,
            t,
            n,
          );
          g(e, e, o.id, o.members);
        };
        return new Proxy(e, {
          set: (e, t, n) => ("ref" !== t && o(), (e[t] = n), !0),
          get: (e, t) => {
            if (t === R) return !0;
            Object.prototype.hasOwnProperty.call(e, t) || o();
            const n = e[t];
            return "toString" === t && "function" == typeof n ? n.bind(e) : n;
          },
          ownKeys: (e) => (o(), Object.getOwnPropertyNames(e)),
          getOwnPropertyDescriptor: (e, t) =>
            Object.getOwnPropertyDescriptor(e, t) ||
            (o(), Object.getOwnPropertyDescriptor(e, t)),
        });
      }
      function _(e) {
        if (!e) return {};
        if ("value" === e.type) return e.value;
        if ("array" === e.type) return e.members.map((e) => _(e));
        if ("nativeimage" === e.type) return o.deserialize(e.value);
        if ("buffer" === e.type)
          return Buffer.from(
            e.value.buffer,
            e.value.byteOffset,
            e.value.byteLength,
          );
        if ("promise" === e.type) return a.resolve({ then: _(e.then) });
        if ("error" === e.type) return O(e);
        if ("exception" === e.type)
          throw "error" === e.value.type
            ? O(e.value)
            : new Error(`Unexpected value type in exception: ${e.value.type}`);
        {
          let t;
          if ("id" in e) {
            const t = (function (e) {
              const t = l.get(e);
              if (void 0 !== t) {
                const e = t.deref();
                if (void 0 !== e) return e;
              }
            })(e.id);
            if (void 0 !== t) return t;
          }
          if ("function" === e.type) {
            const n = function (...t) {
              let r;
              return (
                (r =
                  this && this.constructor === n
                    ? "REMOTE_BROWSER_CONSTRUCTOR"
                    : "REMOTE_BROWSER_FUNCTION_CALL"),
                _(i.ipcRenderer.sendSync(r, E, e.id, b(t)))
              );
            };
            t = n;
          } else t = {};
          return (
            g(t, t, e.id, e.members),
            y(t, t, e.id, e.proto),
            t.constructor &&
              t.constructor[R] &&
              Object.defineProperty(t.constructor, "name", { value: e.name }),
            f.set(t, e.id),
            (function (e, t) {
              const n = new WeakRef(t);
              (l.set(e, n), d.register(t, e));
            })(e.id, t),
            t
          );
        }
      }
      function O(e) {
        const t = e.value;
        for (const { name: n, value: r } of e.members) t[n] = _(r);
        return t;
      }
      function h(e, t) {
        i.ipcRenderer.on(e, (n, r, o, ...c) => {
          "number" != typeof n.senderId ||
          0 === n.senderId ||
          void 0 === n.senderId
            ? r === E
              ? t(o, ...c)
              : i.ipcRenderer.send(
                  "REMOTE_BROWSER_WRONG_CONTEXT_ERROR",
                  E,
                  r,
                  o,
                )
            : console.error(
                `Message ${e} sent by unexpected WebContents (${n.senderId})`,
              );
        });
      }
      const v = process.argv.includes("--enable-api-filtering-logging");
      function w() {
        const e = { stack: void 0 };
        return (v && Error.captureStackTrace(e, w), e.stack);
      }
      (h("REMOTE_RENDERER_CALLBACK", (e, t) => {
        u.apply(e, _(t));
      }),
        h("REMOTE_RENDERER_RELEASE_CALLBACK", (e) => {
          u.remove(e);
        }),
        (t.require = (e) =>
          _(i.ipcRenderer.sendSync("REMOTE_BROWSER_REQUIRE", E, e, w()))),
        (t.getBuiltin = function (e) {
          return _(
            i.ipcRenderer.sendSync("REMOTE_BROWSER_GET_BUILTIN", E, e, w()),
          );
        }),
        (t.getCurrentWindow = function () {
          return _(
            i.ipcRenderer.sendSync("REMOTE_BROWSER_GET_CURRENT_WINDOW", E, w()),
          );
        }),
        (t.getCurrentWebContents = function () {
          return _(
            i.ipcRenderer.sendSync(
              "REMOTE_BROWSER_GET_CURRENT_WEB_CONTENTS",
              E,
              w(),
            ),
          );
        }),
        (t.getGlobal = function (e) {
          return _(
            i.ipcRenderer.sendSync("REMOTE_BROWSER_GET_GLOBAL", E, e, w()),
          );
        }),
        Object.defineProperty(t, "process", {
          enumerable: !0,
          get: () => t.getGlobal("process"),
        }),
        (t.createFunctionWithReturnValue = function (e) {
          const t = () => e;
          return (p.add(t), t);
        }),
        c.browserModuleNames.forEach((e) => {
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: () => t.getBuiltin(e),
          });
        }));
    },
  },
]);
