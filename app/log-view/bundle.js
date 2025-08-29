/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  var e,
    t = {
      50151: (e, t) => {
        "use strict";
        ((t.IS = void 0),
          (t.IS = function (e, t) {
            if (void 0 === e)
              throw new Error(
                "".concat(null != t ? t : "Value", " is undefined"),
              );
            return e;
          }));
      },
      94882: (e, t, n) => {
        "use strict";
        n.d(t, { G: () => r });
        const r = n(50959).createContext({
          isGrouped: !1,
          cellState: { isTop: !0, isRight: !0, isBottom: !0, isLeft: !0 },
        });
      },
      9968: (e, t, n) => {
        "use strict";
        function r(e) {
          let t = 0;
          return (
            (e.isTop && e.isLeft) || (t += 1),
            (e.isTop && e.isRight) || (t += 2),
            (e.isBottom && e.isLeft) || (t += 8),
            (e.isBottom && e.isRight) || (t += 4),
            t
          );
        }
        n.d(t, { n: () => r });
      },
      44592: (e, t, n) => {
        "use strict";
        n.d(t, { J: () => o });
        var r = n(50959);
        const o = r.forwardRef((e, t) => {
          const {
              icon: n = "",
              title: o,
              ariaLabel: i,
              ariaLabelledby: s,
              ariaHidden: a,
              ...l
            } = e,
            c = !!(o || i || s);
          return r.createElement("span", {
            role: "img",
            ...l,
            ref: t,
            "aria-label": i,
            "aria-labelledby": s,
            "aria-hidden": a || !c,
            title: o,
            dangerouslySetInnerHTML: { __html: n },
          });
        });
      },
      79621: (e, t, n) => {
        "use strict";
        n.d(t, { J: () => r.J });
        var r = n(44592);
      },
      57418: (e, t, n) => {
        "use strict";
        function r(e) {
          return i(e, s);
        }
        function o(e) {
          return i(e, a);
        }
        function i(e, t) {
          const n = Object.entries(e).filter(t),
            r = {};
          for (const [e, t] of n) r[e] = t;
          return r;
        }
        function s(e) {
          const [t, n] = e;
          return 0 === t.indexOf("data-") && "string" == typeof n;
        }
        function a(e) {
          return 0 === e[0].indexOf("aria-");
        }
        n.d(t, {
          _E: () => r,
          __: () => o,
          L6: () => i,
          a1: () => s,
          eH: () => a,
        });
      },
      1142: (e, t, n) => {
        "use strict";
        function r(e) {
          return (t) => {
            e.forEach((e) => {
              "function" == typeof e ? e(t) : null != e && (e.current = t);
            });
          };
        }
        n.d(t, { l: () => r });
      },
      97754: (e, t) => {
        var n;
        !(function () {
          "use strict";
          var r = {}.hasOwnProperty;
          function o() {
            for (var e = [], t = 0; t < arguments.length; t++) {
              var n = arguments[t];
              if (n) {
                var i = typeof n;
                if ("string" === i || "number" === i) e.push(n);
                else if (Array.isArray(n) && n.length) {
                  var s = o.apply(null, n);
                  s && e.push(s);
                } else if ("object" === i)
                  for (var a in n) r.call(n, a) && n[a] && e.push(a);
              }
            }
            return e.join(" ");
          }
          e.exports
            ? ((o.default = o), (e.exports = o))
            : void 0 ===
                (n = function () {
                  return o;
                }.apply(t, [])) || (e.exports = n);
        })();
      },
      2315: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => a });
        var r = n(43392),
          o = n.n(r),
          i = n(8021),
          s = n.n(i)()(o());
        s.push([
          e.id,
          ".dialog-btn {\n\tborder: 1px solid var(--color-button-bg);\n\tcolor: var(--color-button-bg);\n\tfont-family: var(--font-family-base);\n\tfont-size: 16px;\n\tline-height: 30px;\n\talign-items: center;\n\tjustify-content: center;\n\tpadding: 1px 24px;\n\tdisplay: inline-flex;\n\tmargin-left: 12px;\n\tborder-radius: 4px;\n\twhite-space: nowrap;\n}\n\n.dialog-btn.primary {\n\tborder-color: var(--color-button-bg);\n\tbackground: var(--color-button-bg);\n\tcolor: #FFF;\n}\n\n.dialog-btn:hover {\n\tborder-color: var(--color-button-bg-hover);\n\tbackground: var(--color-button-bg-hover);\n\tcolor: #FFF;\n}\n\n.dialog-btn:active {\n\tborder-color: var(--color-button-bg-active);\n\tbackground: var(--color-button-bg-active);\n\tcolor: #FFF;\n}\n\n.dialog-btn-icon {\n\tdisplay: flex;\n\talign-items: center;\n\tmargin: 0 10px;\n}\n",
          "",
        ]);
        const a = s;
      },
      70614: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => a });
        var r = n(43392),
          o = n.n(r),
          i = n(8021),
          s = n.n(i)()(o());
        s.push([
          e.id,
          ".label {\n\tcolor: var(--color-tab-text-section-name);\n\tfont-size: 13px;\n\tline-height: 19px;\n\tpadding: 8px 0px;\n}\n",
          "",
        ]);
        const a = s;
      },
      17915: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => a });
        var r = n(43392),
          o = n.n(r),
          i = n(8021),
          s = n.n(i)()(o());
        s.push([
          e.id,
          "[theme='dark'] {\n\t--color-input: #FFFFFF;\n}\n\n[theme='light'] {\n\t--color-input: #000000;\n}\n\nbody {\n\toverflow: hidden;\n}\n\n.log-tools-panel {\n\theight: 80px;\n\tborder-bottom: 1px solid var(--color-border);\n\tdisplay: grid;\n\talign-content: center;\n\talign-items: center;\n\tgrid-template-columns: 4fr auto auto 3fr;\n\tgrid-template-rows: auto auto;\n\twidth: 100%;\n}\n\n.text-input-wrapper.log-view-input {\n\tmargin-left: 20px;\n}\n\n.log-view-input input {\n\tcolor: var(--color-input);\n}\n\n.clear-button-container {\n\tgrid-column: 2;\n\tmargin-left: 15px;\n\tgrid-row: 1;\n}\n\n.log-filter-checkbox {\n\tmargin-left: 8px;\n}\n\n.level-selector-section {\n\tborder-left: 1px solid var(--color-border);\n\theight: 100%;\n\tmargin-left: 20px;\n\tmargin-right: 20px;\n\tpadding-left: 20px;\n\tdisplay: inline-flex;\n\talign-items: center;\n\tgrid-column: 4;\n\tgrid-row: 1/span2;\n}\n\n.level-combobox-container {\n\twidth: 100%;\n\tpadding-left: 20px;\n\tcolor: var(--color-main-text);\n}\n\n.combobox-container {\n\theight: 30px;\n}\n\n.label {\n\twhite-space: nowrap;\n}\n\n.log-panel {\n\tpadding: 10px 5px 0 10px;\n\tuser-select: text;\n\toverflow: scroll;\n\theight: calc(100vh - 85px);\n}\n\n.log-message {\n\tcolor: var(--color-main-text);\n\tfont-size: 12px;\n\tfont-family: Consolas, monospace;\n}\n\n.log-timestamp {\n\twidth: 180px;\n\tdisplay: inline-block;\n}\n\n.log-body {\n\tdisplay: inline;\n}\n\n.log-body.debug {\n\tcolor: #8a8a8a;\n}\n\n.log-body.error {\n\tcolor: #CC2F3C;\n\tfont-weight: 700;\n}\n\n.log-body.warn {\n\tcolor: #F57C00;\n\tfont-weight: 700;\n}\n\n.log-body.info {\n\tcolor: #0068ad;\n}\n\n.stack-trace {\n\tcolor: rgb(255, 117, 117);\n}\n\n.search-text-highlight {\n\tbackground-color: #FFF9C4;\n}\n",
          "",
        ]);
        const a = s;
      },
      50959: (e, t, n) => {
        "use strict";
        e.exports = n(95257);
      },
      45623: (e, t, n) => {
        "use strict";
        var r = n(50959),
          o = n(44478),
          i = n(54041),
          s = n(96637),
          a = n(79946),
          l = (n(23577), n(28430)),
          c = (n(23935), n(36458)),
          u = n(13855),
          d = n(75774),
          g = n(25211),
          h = n.n(g),
          f = n(62962),
          p = n.n(f),
          m = n(20310),
          v = n.n(m),
          b = n(29290),
          y = n.n(b),
          x = n(47289),
          w = n.n(x),
          S = n(24834),
          E = n.n(S),
          C = n(2315),
          L = {};
        ((L.styleTagTransform = E()),
          (L.setAttributes = y()),
          (L.insert = v().bind(null, "head")),
          (L.domAPI = p()),
          (L.insertStyleElement = w()),
          h()(C.Z, L),
          C.Z && C.Z.locals && C.Z.locals);
        const k = ({ highlighted: e, title: t, className: n = "", icon: o }) =>
          r.createElement(
            "div",
            { className: `dialog-btn ${e ? "primary" : ""} ${n}` },
            o && r.createElement("div", { className: "dialog-btn-icon" }, o),
            t,
          );
        var P = n(5223),
          F = n(70614),
          j = {};
        ((j.styleTagTransform = E()),
          (j.setAttributes = y()),
          (j.insert = v().bind(null, "head")),
          (j.domAPI = p()),
          (j.insertStyleElement = w()),
          h()(F.Z, j),
          F.Z && F.Z.locals && F.Z.locals);
        class I extends r.Component {
          render() {
            return r.createElement(
              "div",
              { className: "label" },
              this.props.str,
            );
          }
        }
        var O = n(17915),
          R = {};
        ((R.styleTagTransform = E()),
          (R.setAttributes = y()),
          (R.insert = v().bind(null, "head")),
          (R.domAPI = p()),
          (R.insertStyleElement = w()),
          h()(O.Z, R),
          O.Z && O.Z.locals && O.Z.locals,
          c.i.initializeRpc(),
          l.P.exists || l.P.initialize((0, a.kS)()));
        class T extends r.Component {
          level = u.in.Debug;
          isReady = !1;
          bufferSize = 100;
          messageQueue = new i.ReplaySubject(this.bufferSize);
          windowControl;
          logPanelRef;
          keyUpListener;
          shouldScrollToLatest = !0;
          state = {
            messages: [],
            logLevel: this.level,
            filterLogs: !1,
            searchValue: "",
          };
          write(e) {
            this.state.logLevel > e.level ||
              (this.isReady
                ? this.writeInternal(e)
                : this.messageQueue.next(e));
          }
          writeInternal(e) {
            const t = this.state.messages;
            (t.push(e), this.setState({ messages: t }));
          }
          dispose() {}
          componentWillMount() {
            (c.i.registerRemoteService(this, u.Do),
              this.messageQueue.subscribe(
                (e) => this.writeInternal(e),
                (e) => console.log(e),
                () => console.log("completed"),
              ));
          }
          componentDidMount() {
            ((this.windowControl = (0, u.dY)()),
              this.windowControl
                .getProps()
                .then((e) => {
                  (this.setState({ logLevel: e.logLevel }),
                    (this.isReady = !0));
                })
                .catch(() => {
                  (0, u.x$)().error(
                    "[LogView.componentDidMount()] getProps is failed",
                  );
                }),
              (this.logPanelRef = r.createRef()));
          }
          componentDidUpdate() {
            this.logPanelRef?.current &&
              this.shouldScrollToLatest &&
              (this.logPanelRef.current.scrollTop =
                this.logPanelRef.current.scrollHeight);
          }
          componentWillUnmount() {
            ((0, u.x$)().debug("LogView.componentWillUnmount()"),
              c.i.unregisterRemoteObject(u.Do),
              this.keyUpListener &&
                window.removeEventListener("keyup", this.keyUpListener));
          }
          render() {
            return r.createElement(
              r.Fragment,
              null,
              r.createElement(
                "div",
                { className: "log-tools-panel" },
                r.createElement(d.o, {
                  value: this.state.searchValue,
                  onChange: this.onInputChange,
                  className: "log-view-input",
                  size: "small",
                }),
                r.createElement(
                  "span",
                  {
                    className: "clear-button-container",
                    onClick: () => this.clearLogs(),
                  },
                  r.createElement(k, { highlighted: !0, title: "Clear Log" }),
                ),
                r.createElement(s.XZ, {
                  checked: this.state.filterLogs,
                  onChange: () => {
                    this.setState({ filterLogs: !this.state.filterLogs });
                  },
                  label: "Filter",
                  className: "log-filter-checkbox",
                }),
                r.createElement(
                  "div",
                  { className: "level-selector-section" },
                  r.createElement(I, { str: "Log Level:" }),
                  r.createElement(
                    "div",
                    { className: "level-combobox-container" },
                    r.createElement(P.Z, {
                      defaultSelectedId: this.level.toString(),
                      tabIndex: 0,
                      items: this.getLevelItems(),
                      onChange: (e) =>
                        this.onDropdownItemChange(parseInt(e, 10)),
                    }),
                  ),
                ),
              ),
              r.createElement(
                "div",
                {
                  className: "log-panel",
                  ref: this.logPanelRef,
                  onScroll: () => this.onPanelScroll(),
                },
                this.renderMessages(),
                r.createElement("br", null),
              ),
            );
          }
          onPanelScroll() {
            const e = this.logPanelRef?.current;
            e &&
              (this.shouldScrollToLatest =
                e.scrollTop + e.offsetHeight >= e.scrollHeight);
          }
          onInputChange = ({ target: { value: e } }) => {
            this.setState({ searchValue: e });
            const t = e ? new RegExp(e, "ig") : void 0;
            this.setState({ searchRegex: t });
          };
          clearLogs() {
            this.setState({ messages: [] });
          }
          getLevelItems() {
            return [
              { id: "0", label: "Debug" },
              { id: "1", label: "Info" },
              { id: "2", label: "Warning" },
              { id: "3", label: "Error" },
            ];
          }
          onDropdownItemChange(e) {
            this.setState({ logLevel: e });
          }
          renderMessages() {
            const e = new Map([
                [u.in.Debug, "debug"],
                [u.in.Info, "info"],
                [u.in.Warn, "warn"],
                [u.in.Error, "error"],
              ]),
              t = (e) =>
                !this.state.searchRegex ||
                this.state.searchRegex.test(e.body) ||
                (!!e.stackTrace && this.state.searchRegex.test(e.stackTrace));
            return this.state.messages
              .filter((e) => e.level >= this.state.logLevel)
              .filter((e) => !this.state.filterLogs || t(e))
              .map((t, n) =>
                r.createElement(
                  "div",
                  { className: "log-message", key: n },
                  r.createElement(
                    "div",
                    { className: "log-timestamp" },
                    t.timestamp,
                  ),
                  r.createElement(
                    "div",
                    { className: `log-body ${e.get(t.level) ?? ""}` },
                    this.highlightSearchString(t.body),
                  ),
                  !!t.stackTrace &&
                    r.createElement(
                      "div",
                      { className: "stack-trace" },
                      this.highlightSearchString(t.stackTrace),
                    ),
                ),
              );
          }
          highlightSearchString(e) {
            if (!this.state.searchRegex) return e;
            const t = e.replace(
              this.state.searchRegex,
              '<span class="search-text-highlight">$&</span>',
            );
            return r.createElement("span", {
              dangerouslySetInnerHTML: { __html: t },
            });
          }
        }
        (n(96893), (document.documentElement.dir = "ltr"));
        const M = document.getElementById("root");
        M && (0, o.s)(M).render(r.createElement(T, null));
      },
      52364: (e, t, n) => {
        "use strict";
        n.d(t, { iC: () => r, Do: () => o, n$: () => i, in: () => s });
        const r = "tvd:logger-service",
          o = "tvd:log-sink",
          i = "tvd:logview-controller";
        var s;
        !(function (e) {
          ((e[(e.Debug = 0)] = "Debug"),
            (e[(e.Info = 1)] = "Info"),
            (e[(e.Warn = 2)] = "Warn"),
            (e[(e.Error = 3)] = "Error"));
        })(s || (s = {}));
      },
      13855: (e, t, n) => {
        "use strict";
        n.d(t, {
          Do: () => i.Do,
          in: () => i.in,
          kK: () => s,
          M2: () => a,
          x$: () => l,
          dY: () => c,
        });
        var r = n(72298),
          o = n(36458),
          i = n(52364);
        function s() {
          return r.ipcMain
            ? o.i.getProvider().provide(i.iC)
            : o.i.provideProxy(i.iC);
        }
        function a() {
          return o.i.provide(i.iC);
        }
        function l() {
          return o.i.provideProxy(i.iC);
        }
        function c() {
          return o.i.provideProxy(i.n$);
        }
      },
      10496: (e, t, n) => {
        "use strict";
        n.d(t, { n_: () => o });
        var r = n(77118);
        function o(e) {
          (0, r.n_)({
            category: "message",
            message: e.breadcrumb,
            level: e.level,
          });
        }
      },
      89597: (e, t, n) => {
        "use strict";
        var r, o, i, s;
        (n.d(t, { kZ: () => r }),
          (function (e) {
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
          })(o || (o = {})),
          (function (e) {
            ((e.Show = "show"), (e.Move = "move"));
          })(i || (i = {})),
          (function (e) {
            ((e[(e.Basic = 0)] = "Basic"),
              (e[(e.ChartData = 1)] = "ChartData"));
          })(s || (s = {})));
      },
      97003: (e, t, n) => {
        "use strict";
        n.d(t, {
          nt: () => g,
          ZJ: () => u.ZJ,
          UT: () => c.U,
          UD: () => a.U,
          Kr: () => s.Kr,
          Wf: () => i.W,
          D9: () => d,
          vO: () => u.vO,
        });
        var r,
          o,
          i = n(36842),
          s = n(5603),
          a = n(80271),
          l = (n(95807), n(96485), n(39985)),
          c = n(94232),
          u = n(58789);
        function d(e) {
          if ("object" != typeof e || null === e) return !1;
          const t = e.constructor;
          return !!t && Reflect.hasMetadata(l.f, t);
        }
        function g() {
          return (e) => {
            const t = new e();
            c.U.instance.registerProvider(t);
          };
        }
        (((o = r || (r = {}))[(o.Transient = 0)] = "Transient"),
          (o[(o.Singleton = 1)] = "Singleton"),
          Symbol("ServiceContracts"));
      },
      39985: (e, t, n) => {
        "use strict";
        n.d(t, { f: () => r });
        const r = Symbol("ServiceContracts");
      },
      58789: (e, t, n) => {
        "use strict";
        n.d(t, { ZJ: () => r, xj: () => s, vO: () => a });
        var r,
          o = n(80271),
          i = n(39985);
        function s(e) {
          return "object" == typeof e && e.reflectInstance instanceof Function;
        }
        function a(e, ...t) {
          if ("object" != typeof e || !e) return;
          const n = (e) => !t || 0 === t.length || t.includes(e),
            s = [];
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
              e && s.push(...e);
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
                        `Fail to get property [${t}]: ${(0, o.U)(e)}`,
                      );
                    }
                  n = Object.getPrototypeOf(n);
                }
              }
            })(e))
              n instanceof Function && a.push({ name: t });
          return { contracts: s, methods: a };
        }
        !(function (e) {
          ((e[(e.Contracts = 0)] = "Contracts"),
            (e[(e.Methods = 1)] = "Methods"));
        })(r || (r = {}));
      },
      94232: (e, t, n) => {
        "use strict";
        n.d(t, { U: () => o });
        var r = n(58789);
        class o {
          static instance = new o();
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
        "use strict";
        n.d(t, {
          wK: () => r.wK,
          _v: () => r._v,
          Um: () => o.Um,
          Sj: () => i.Sj,
        });
        var r = n(95091),
          o = n(41029),
          i = (n(67644), n(26063));
        (n(57118), n(19014), n(89183));
      },
      9448: (e, t, n) => {
        "use strict";
        n(13855);
      },
      26063: (e, t, n) => {
        "use strict";
        n.d(t, { Sj: () => r });
        const r = () => "rtl" === window.document.dir;
      },
      72298: (e) => {
        "use strict";
        e.exports = require("electron");
      },
      57147: (e) => {
        "use strict";
        e.exports = require("fs");
      },
      71017: (e) => {
        "use strict";
        e.exports = require("path");
      },
      57310: (e) => {
        "use strict";
        e.exports = require("url");
      },
    },
    n = {};
  function r(e) {
    var o = n[e];
    if (void 0 !== o) return o.exports;
    var i = (n[e] = { id: e, exports: {} });
    return (t[e].call(i.exports, i, i.exports, r), i.exports);
  }
  ((r.m = t),
    (e = []),
    (r.O = (t, n, o, i) => {
      if (!n) {
        var s = 1 / 0;
        for (u = 0; u < e.length; u++) {
          for (var [n, o, i] = e[u], a = !0, l = 0; l < n.length; l++)
            (!1 & i || s >= i) && Object.keys(r.O).every((e) => r.O[e](n[l]))
              ? n.splice(l--, 1)
              : ((a = !1), i < s && (s = i));
          if (a) {
            e.splice(u--, 1);
            var c = o();
            void 0 !== c && (t = c);
          }
        }
        return t;
      }
      i = i || 0;
      for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
      e[u] = [n, o, i];
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
      var e = { 8247: 0 };
      r.O.j = (t) => 0 === e[t];
      var t = (t, n) => {
          var o,
            i,
            [s, a, l] = n,
            c = 0;
          if (s.some((t) => 0 !== e[t])) {
            for (o in a) r.o(a, o) && (r.m[o] = a[o]);
            if (l) var u = l(r);
          }
          for (t && t(n); c < s.length; c++)
            ((i = s[c]), r.o(e, i) && e[i] && e[i][0](), (e[s[c]] = 0));
          return r.O(u);
        },
        n = (global.webpackChunktradingview_desktop =
          global.webpackChunktradingview_desktop || []);
      (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
    })());
  var o = r.O(void 0, [7498, 6486, 1589, 8813, 6637, 819, 914, 8655, 813], () =>
    r(45623),
  );
  o = r.O(o);
})();
