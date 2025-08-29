(() => {
  "use strict";
  var e,
    t,
    n,
    r,
    i,
    o = {
      31166: (e, t, n) => {
        n.d(t, { i: () => x });
        var r = n(50959),
          i = n(97754),
          o = n.n(i);
        const a = JSON.parse(
          '{"divider":"divider-2LgGf736","orientation-horizontal":"orientation-horizontal-1GrzG6F6","orientation-vertical":"orientation-vertical-1ek93l-2","size-xsmall":"size-xsmall-3SrVpGiX","size-small":"size-small-22sZwy9o","size-medium":"size-medium-2SIV6loN","size-large":"size-large-3T6RtD4L","size-xlarge":"size-xlarge-2-9FldHP","size-xxlarge":"size-xxlarge-3w4ex5dj","type-primary":"type-primary-iy8PH_s4","type-secondary":"type-secondary-4Lb6MQdQ"}',
        );
        var s = n(25211),
          l = n.n(s),
          d = n(62962),
          c = n.n(d),
          u = n(20310),
          p = n.n(u),
          g = n(29290),
          h = n.n(g),
          m = n(47289),
          f = n.n(m),
          b = n(24834),
          v = n.n(b),
          y = n(39292),
          w = {};
        function x(e) {
          const {
              className: t,
              type: n = "secondary",
              size: i = "small",
              orientation: s = "horizontal",
            } = e,
            l = o()(
              t,
              a.divider,
              a[`size-${i}`],
              a[`type-${n}`],
              a[`orientation-${s}`],
            );
          return r.createElement("hr", { className: l, "aria-orientation": s });
        }
        ((w.styleTagTransform = v()),
          (w.setAttributes = h()),
          (w.insert = p().bind(null, "head")),
          (w.domAPI = c()),
          (w.insertStyleElement = f()),
          l()(y.Z, w),
          y.Z && y.Z.locals && y.Z.locals);
      },
      79621: (e, t, n) => {
        n.d(t, { J: () => r.J });
        var r = n(44592);
      },
      57418: (e, t, n) => {
        function r(e) {
          return o(e, a);
        }
        function i(e) {
          return o(e, s);
        }
        function o(e, t) {
          const n = Object.entries(e).filter(t),
            r = {};
          for (const [e, t] of n) r[e] = t;
          return r;
        }
        function a(e) {
          const [t, n] = e;
          return 0 === t.indexOf("data-") && "string" == typeof n;
        }
        function s(e) {
          return 0 === e[0].indexOf("aria-");
        }
        n.d(t, {
          _E: () => r,
          __: () => i,
          L6: () => o,
          a1: () => a,
          eH: () => s,
        });
      },
      1142: (e, t, n) => {
        function r(e) {
          return (t) => {
            e.forEach((e) => {
              "function" == typeof e ? e(t) : null != e && (e.current = t);
            });
          };
        }
        function i(e) {
          return r([e]);
        }
        n.d(t, { l: () => r, t: () => i });
      },
      39292: (e, t, n) => {
        n.d(t, { Z: () => s });
        var r = n(43392),
          i = n.n(r),
          o = n(8021),
          a = n.n(o)()(i());
        a.push([
          e.id,
          ".divider-2LgGf736:dir(ltr){border:none;border-color:var(--ui-lib-divider-color,var(--ui-lib-button-default-color-border));margin:0}.divider-2LgGf736.orientation-horizontal-1GrzG6F6:dir(ltr){border-top-style:solid;width:100%}.divider-2LgGf736.orientation-vertical-1ek93l-2:dir(ltr){border-left-style:solid;display:inline-block;height:100%;min-height:2ch;vertical-align:sub}.divider-2LgGf736.size-xsmall-3SrVpGiX:dir(ltr){border-width:1px}.divider-2LgGf736.size-small-22sZwy9o:dir(ltr){border-width:2px}.divider-2LgGf736.size-medium-2SIV6loN:dir(ltr){border-width:3px}.divider-2LgGf736.size-large-3T6RtD4L:dir(ltr){border-width:4px}.divider-2LgGf736.size-xlarge-2-9FldHP:dir(ltr){border-width:5px}.divider-2LgGf736.size-xxlarge-3w4ex5dj:dir(ltr){border-width:6px}.divider-2LgGf736.type-primary-iy8PH_s4:dir(ltr){--ui-lib-button-default-color-border:#ebebeb}html.theme-dark .divider-2LgGf736.type-primary-iy8PH_s4:dir(ltr){--ui-lib-button-default-color-border:#4a4a4a}.divider-2LgGf736.type-secondary-4Lb6MQdQ:dir(ltr){--ui-lib-button-default-color-border:#f2f2f2}html.theme-dark .divider-2LgGf736.type-secondary-4Lb6MQdQ:dir(ltr){--ui-lib-button-default-color-border:#2e2e2e}.divider-2LgGf736:dir(rtl){border:none;border-color:var(--ui-lib-divider-color,var(--ui-lib-button-default-color-border));margin:0}.divider-2LgGf736.orientation-horizontal-1GrzG6F6:dir(rtl){border-top-style:solid;width:100%}.divider-2LgGf736.orientation-vertical-1ek93l-2:dir(rtl){border-right-style:solid;display:inline-block;height:100%;min-height:2ch;vertical-align:sub}.divider-2LgGf736.size-xsmall-3SrVpGiX:dir(rtl){border-width:1px}.divider-2LgGf736.size-small-22sZwy9o:dir(rtl){border-width:2px}.divider-2LgGf736.size-medium-2SIV6loN:dir(rtl){border-width:3px}.divider-2LgGf736.size-large-3T6RtD4L:dir(rtl){border-width:4px}.divider-2LgGf736.size-xlarge-2-9FldHP:dir(rtl){border-width:5px}.divider-2LgGf736.size-xxlarge-3w4ex5dj:dir(rtl){border-width:6px}.divider-2LgGf736.type-primary-iy8PH_s4:dir(rtl){--ui-lib-button-default-color-border:#ebebeb}html.theme-dark .divider-2LgGf736.type-primary-iy8PH_s4:dir(rtl){--ui-lib-button-default-color-border:#4a4a4a}.divider-2LgGf736.type-secondary-4Lb6MQdQ:dir(rtl){--ui-lib-button-default-color-border:#f2f2f2}html.theme-dark .divider-2LgGf736.type-secondary-4Lb6MQdQ:dir(rtl){--ui-lib-button-default-color-border:#2e2e2e}",
          "",
        ]);
        const s = a;
      },
      1271: (e, t, n) => {
        n.d(t, { Z: () => s });
        var r = n(43392),
          i = n.n(r),
          o = n(8021),
          a = n.n(o)()(i());
        a.push([
          e.id,
          "[theme='dark'] {\n\t--color-dialog-title: #DBDBDB;\n\t--color-dialog-text: #DBDBDB;\n}\n\n[theme='light'] {\n\t--color-dialog-title: #0F0F0F;\n\t--color-dialog-text: #0F0F0F;\n}\n\n.dialog {\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tbackground-color: var(--color-dialog-window-bg);\n\n\t&.basic {\n\t\theight: calc(100vh - 80px);\n\t\tpadding: 40px;\n\t}\n\n\t&.options {\n\t\theight: calc(100vh - 38px);\n\t\tpadding: 22px 20px 16px;\n\t}\n\n\t&.credentials {\n\t\theight: calc(100vh - 40px);\n\t\tpadding: 24px 20px 16px;\n\t}\n\n\t&.settings {\n\t\theight: 100vh;\n\t\tpadding: 0;\n\n\t\t& .dialog-title {\n\t\t\tmargin: 22px 20px;\n\t\t}\n\t}\n\n\t&.padding-small {\n\t\tpadding: 20px;\n\t}\n}\n\n[theme=\"dark\"] .dialog.tokyo-night {\n\tfilter: url(#tokyo-filter_svg__filter);\n}\n\n.dialog-title {\n\tcolor: var(--color-dialog-title);\n\tmargin: 0 0 16px;\n}\n\n.dialog-text {\n\tcolor: var(--color-dialog-text);\n\tmargin: 0 0 24px;\n}\n\n.dialog-buttons {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: flex-end;\n\tgap: 12px;\n}\n\n.dialog-close-button {\n\tposition: absolute;\n\n\t/* basic dialog */\n\t.dialog.basic > & {\n\t\ttop: 16px;\n\t}\n\n\t[dir='ltr'] .dialog.basic > & {\n\t\tright: 16px;\n\t}\n\n\t[dir='rtl'] .dialog.basic > & {\n\t\tleft: 16px;\n\t}\n\n\t/* options dialog */\n\t.dialog.options > & {\n\t\ttop: 26px;\n\t}\n\n\t[dir='ltr'] .dialog.options > & {\n\t\tright: 24px;\n\t}\n\n\t[dir='rtl'] .dialog.options > & {\n\t\tleft: 24px;\n\t}\n\n\t/* credentials dialog */\n\t.dialog.credentials > & {\n\t\ttop: 28px;\n\t}\n\n\t[dir='ltr'] .dialog.credentials > & {\n\t\tright: 28px;\n\t}\n\n\t[dir='rtl'] .dialog.credentials > & {\n\t\tleft: 28px;\n\t}\n\n\t/* settings dialog */\n\t.dialog.settings > & {\n\t\ttop: 28px;\n\t}\n\n\t[dir='ltr'] .dialog.settings > & {\n\t\tright: 26px;\n\t}\n\n\t[dir='rtl'] .dialog.settings > & {\n\t\tleft: 26px;\n\t}\n\n\t/* save changes dialog */\n\t.dialog.save-changes > & {\n\t\ttop: 16px;\n\t}\n\n\t[dir='ltr'] .dialog.save-changes > & {\n\t\tright: 16px;\n\t}\n\n\t[dir='rtl'] .dialog.save-changes > & {\n\t\tleft: 16px;\n\t}\n}\n\n.dialog-window-separator {\n\twidth: 100vw !important;\n\n\t[dir='ltr'] & {\n\t\tmargin-left: calc((100% - 100vw) / 2) !important;\n\t}\n\n\t[dir='rtl'] & {\n\t\tmargin-right: calc((100% - 100vw) / 2) !important;\n\t}\n}\n",
          "",
        ]);
        const s = a;
      },
      10422: (e, t, n) => {
        (!(function e() {
          if (
            "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (e) {
              console.error(e);
            }
        })(),
          (e.exports = n(53746)));
      },
      50959: (e, t, n) => {
        e.exports = n(95257);
      },
      69478: (e, t, n) => {
        n.d(t, { nb: () => p, Ku: () => g, Rk: () => h, ZU: () => m });
        var r = n(72298),
          i = n(76133),
          o = n(13855),
          a = n(94850),
          s = n(29060),
          l = n(97003),
          d = n(9448);
        const c = {
          windowControl: null,
          dialogControl: null,
          toastWindowHandler: null,
        };
        let u;
        function p() {
          const e = (0, d.o)(
            new URLSearchParams(window.location.search).get(
              "rendererInitialData",
            ) ?? "{}",
          );
          if (!e) throw new Error("getRendererInitialData() jsonParse error");
          return e;
        }
        function g() {
          return (
            (c.dialogControl = (function (e, t, n) {
              let r =
                window?.remoteServiceInstanceId ?? p().remoteServiceInstanceId;
              if (
                (n && (r = n),
                !t || r !== window?.initialRemoteServiceInstanceId)
              ) {
                (0, o.x$)().debug(
                  `[Renderer] initializeIpcProxyForInstance ${e} id: ${r}; Old id ${window?.initialRemoteServiceInstanceId}`,
                );
                const t = i.hx.createForInstance(r);
                return ((window.initialRemoteServiceInstanceId = r), t);
              }
              return t;
            })("dialogControl", c.dialogControl)),
            c.dialogControl
          );
        }
        function h() {
          return (u || (u = l.UT.instance.create(a.YD)), u);
        }
        function m() {
          r.ipcRenderer.send(s.mZ);
        }
      },
      68068: (e, t, n) => {
        n.d(t, { K: () => Z });
        var r,
          i = n(50959),
          o = n(44478),
          a = n(55442),
          s = n(89597),
          l = n(16602),
          d = n(13855),
          c = n(5306),
          u = n(70612),
          p = n(45602),
          g = n(31166),
          h = n(98078),
          m = n(76133),
          f = n(36458),
          b = n(17184),
          v = n(55622),
          y = n(91115),
          w = n(59391),
          x = n(69478);
        function V() {
          return (
            (V =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
            V.apply(this, arguments)
          );
        }
        const T = function (e) {
          return i.createElement(
            "svg",
            V({ xmlns: "http://www.w3.org/2000/svg" }, e),
            r ||
              (r = i.createElement(
                "defs",
                null,
                i.createElement(
                  "filter",
                  { id: "tokyo-filter_svg__filter" },
                  i.createElement(
                    "feComponentTransfer",
                    { in: "SourceGraphic" },
                    i.createElement("feFuncR", {
                      type: "linear",
                      slope: 1.9,
                      intercept: -0.3,
                    }),
                    i.createElement("feFuncG", {
                      type: "linear",
                      slope: 1.9,
                      intercept: -0.3,
                    }),
                    i.createElement("feFuncB", {
                      type: "linear",
                      slope: 1.9,
                      intercept: -0.3,
                    }),
                  ),
                  i.createElement("feGaussianBlur", { stdDeviation: 15 }),
                  i.createElement("feComposite", {
                    in2: "SourceGraphic",
                    operator: "lighter",
                  }),
                  i.createElement(
                    "feComponentTransfer",
                    null,
                    i.createElement("feFuncR", {
                      type: "linear",
                      slope: 1.35,
                      intercept: -0.1,
                    }),
                    i.createElement("feFuncG", {
                      type: "linear",
                      slope: 1.35,
                      intercept: -0.1,
                    }),
                    i.createElement("feFuncB", {
                      type: "linear",
                      slope: 1.35,
                      intercept: -0.1,
                    }),
                  ),
                ),
              )),
          );
        };
        var k = n(25211),
          E = n.n(k),
          S = n(62962),
          z = n.n(S),
          L = n(20310),
          _ = n.n(L),
          $ = n(29290),
          O = n.n($),
          R = n(47289),
          C = n.n(R),
          G = n(24834),
          D = n.n(G),
          I = n(1271),
          P = {};
        ((P.styleTagTransform = D()),
          (P.setAttributes = O()),
          (P.insert = _().bind(null, "head")),
          (P.domAPI = z()),
          (P.insertStyleElement = C()),
          E()(I.Z, P),
          I.Z && I.Z.locals && I.Z.locals);
        var N = function (e, t, n, r) {
          var i,
            o = arguments.length,
            a =
              o < 3
                ? t
                : null === r
                  ? (r = Object.getOwnPropertyDescriptor(t, n))
                  : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            a = Reflect.decorate(e, t, n, r);
          else
            for (var s = e.length - 1; s >= 0; s--)
              (i = e[s]) &&
                (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
          return (o > 3 && a && Object.defineProperty(t, n, a), a);
        };
        (f.i.initializeRpc(), m.Pd.exists || m.Pd.initialize((0, m.kS)()));
        let j = class extends i.Component {
          dataChangeSubscription = null;
          dialogInput;
          tokyoNightSubscription = null;
          state = { hasTokyoNight: !1 };
          constructor(e) {
            (super(e),
              (this.keyDownHandler = this.keyDownHandler.bind(this)),
              (this.unsubscribeEvents = this.unsubscribeEvents.bind(this)));
          }
          componentDidMount() {
            ((0, v.w0)(document.documentElement), (0, x.ZU)());
            const { dialogData: e } = (0, x.nb)();
            this.setState({ data: e });
            const t = Z.getRenderer(e.type);
            (this.setState({ renderer: t }),
              (0, y.ih)()
                .getTokyoNightStatus()
                .then((e) => {
                  this.setState({ hasTokyoNight: e });
                })
                .catch((e) => {
                  (0, d.x$)().error(
                    "<DialogWindow>.componentDidMount(): windowServiceIpc().getTokyoNightStatus() error",
                    e,
                  );
                }),
              (this.tokyoNightSubscription = (0,
              y.ih)().tokyoNightSubject.subscribe((e) => {
                this.setState({ hasTokyoNight: e });
              })),
              addEventListener("keydown", this.keyDownHandler),
              window?.addEventListener("beforeunload", this.unsubscribeEvents));
          }
          render() {
            if (void 0 === this.state.data)
              return i.createElement(i.Fragment, null);
            if ([s.iR.SaveChanges, s.iR.Welcome].includes(this.state.data.type))
              return this.renderer();
            const e = this.state.data.type === s.iR.Settings;
            return i.createElement(
              i.Fragment,
              null,
              this.state.hasTokyoNight &&
                i.createElement(
                  "div",
                  { style: { display: "none" } },
                  i.createElement(T, null),
                ),
              i.createElement(
                "div",
                {
                  className: `dialog ${this.state.data.type ?? ""} ${this.state.hasTokyoNight ? "tokyo-night" : ""}`,
                },
                i.createElement(
                  h.Z,
                  {
                    tag: "h1",
                    name: "typography-accent-20px-semibold",
                    className: "dialog-title",
                  },
                  e ? this.props.t("Settings") : (this.state.data.title ?? ""),
                ),
                this.state.data.type === s.iR.Options &&
                  i.createElement(g.i, {
                    orientation: "horizontal",
                    type: "primary",
                    size: "xsmall",
                    className: "dialog-window-separator",
                  }),
                i.createElement(
                  "div",
                  { className: "dialog-content" },
                  this.state.data.text &&
                    i.createElement(
                      h.Z,
                      {
                        tag: "p",
                        name: "typography-regular-16px",
                        className: "dialog-text",
                      },
                      this.state.data.text,
                    ),
                  this.renderer(),
                ),
                [s.iR.Credentials, s.iR.Options].includes(
                  this.state.data.type,
                ) &&
                  i.createElement(g.i, {
                    orientation: "horizontal",
                    type: "primary",
                    size: "xsmall",
                    className: "dialog-window-separator",
                  }),
                this.state.data.buttons &&
                  i.createElement(
                    "div",
                    { className: "dialog-buttons" },
                    this.state.data.buttons.map(
                      ({ text: e, color: t, variant: n, id: r }, o) =>
                        i.createElement(
                          p.LE,
                          {
                            key: r,
                            onClick: () => this.submit(r, o),
                            size: "small",
                            color: t,
                            variant: n,
                          },
                          e,
                        ),
                    ),
                  ),
                i.createElement(
                  "div",
                  { className: "dialog-close-button" },
                  i.createElement(u.P, {
                    "aria-label": "close-dialog-window",
                    onClick: () => this.close("cross"),
                    size: "medium",
                    tabIndex: !e || (0, w.Um)() ? -1 : 0,
                  }),
                ),
              ),
            );
          }
          close(e) {
            (0, x.Ku)().closeDialogWindow(e);
          }
          keyDownHandler(e) {
            if (e.code === w.mR.Escape) {
              if (
                this.state.data?.type === s.iR.SaveChanges ||
                (this.state.data?.type === s.iR.Welcome &&
                  !this.state.data.closable)
              )
                return;
              this.close("esc");
            }
          }
          unsubscribeEvents() {
            (removeEventListener("keydown", this.keyDownHandler),
              this.tokyoNightSubscription &&
                (this.tokyoNightSubscription.unsubscribe(),
                (this.tokyoNightSubscription = null)),
              this.dataChangeSubscription &&
                (this.dataChangeSubscription.unsubscribe(),
                (this.dataChangeSubscription = null)),
              window?.removeEventListener(
                "beforeunload",
                this.unsubscribeEvents,
              ));
          }
          submit(e, t) {
            const n = { dialogAction: e, button: t, input: this.dialogInput };
            (0, x.Ku)().submitInput(n);
          }
          onInputChange(e) {
            this.dialogInput = e;
          }
          renderer() {
            return this.state.renderer && this.state.data
              ? this.state.renderer({
                  t: this.props.t,
                  inputChange: (e) => this.onInputChange(e),
                  data: this.state.data,
                })
              : i.createElement(i.Fragment, null);
          }
        };
        (N([b.t], j.prototype, "close", null),
          N([b.t], j.prototype, "keyDownHandler", null),
          N([b.t], j.prototype, "submit", null),
          (j = N([(0, b.r)("DialogWindow")], j)));
        const A = j,
          F = (0, c.Zh)()(A);
        (n(96893), (0, a.sX)(), (0, l.g)());
        const Z = new (class {
          renderers = new Map();
          registerLazyRenderer(e, t) {
            this.renderers.set(e, (e) => {
              const n = t;
              return i.createElement(n, { ...e });
            });
          }
          getRenderer(e) {
            const t = this.renderers.get(e);
            return (
              t ||
                (0, d.x$)().error(
                  `Renderer for type ${e} not registered, check renderers configuration`,
                ),
              t
            );
          }
        })();
        (Z.registerLazyRenderer(
          s.iR.Options,
          i.lazy(() => n.e(7889).then(n.bind(n, 27889))),
        ),
          Z.registerLazyRenderer(
            s.iR.Credentials,
            i.lazy(() =>
              Promise.all([n.e(1589), n.e(5055)]).then(n.bind(n, 76039)),
            ),
          ),
          Z.registerLazyRenderer(
            s.iR.SignIn,
            i.lazy(() =>
              Promise.all([n.e(7590), n.e(6759)]).then(n.bind(n, 26759)),
            ),
          ),
          Z.registerLazyRenderer(
            s.iR.Settings,
            i.lazy(() =>
              Promise.all([
                n.e(4637),
                n.e(1589),
                n.e(6637),
                n.e(8249),
                n.e(1296),
                n.e(813),
                n.e(7950),
              ]).then(n.bind(n, 17950)),
            ),
          ),
          Z.registerLazyRenderer(
            s.iR.SaveChanges,
            i.lazy(() => n.e(5254).then(n.bind(n, 85254))),
          ),
          Z.registerLazyRenderer(
            s.iR.Welcome,
            i.lazy(() =>
              Promise.all([n.e(7590), n.e(1296), n.e(6759), n.e(2)]).then(
                n.bind(n, 80002),
              ),
            ),
          ));
        const H = document.getElementById("root");
        H &&
          (0, o.s)(H).render(
            i.createElement(
              i.Suspense,
              { fallback: !1 },
              i.createElement(function () {
                return i.createElement(F, null);
              }, null),
            ),
          );
      },
      76133: (e, t, n) => {
        n.d(t, { kS: () => r.kS, hx: () => i.h, Pd: () => o.P });
        var r = n(75432),
          i = n(23935),
          o = (n(23577), n(28430));
      },
      55442: (e, t, n) => {
        n.d(t, { sX: () => r.s, n_: () => i.n_, YA: () => i.YA });
        var r = n(17066),
          i = (n(18737), n(10496));
      },
      94850: (e, t, n) => {
        n.d(t, { YD: () => r });
        const r = "tvd:sound-player-contract";
      },
      16693: (e, t, n) => {
        (0, n(87269).Um)();
      },
      55622: (e, t, n) => {
        n.d(t, { X: () => u, w0: () => g });
        var r = n(72298),
          i = n(36458),
          o = n(13855),
          a = n(26063),
          s = n(52296),
          l = n(43891),
          d = n(5778);
        const c = void 0 !== r.ipcMain;
        function u() {
          return i.i.provideProxy(d.R);
        }
        function p(e, t) {
          e.setAttribute("dir", t ? "rtl" : "ltr");
        }
        function g(e) {
          (e && "" === e.dir && p(e, (0, a._f)(s.Z.language)),
            (function (e) {
              let t;
              t = c
                ? i.i.provide(d.R).localeChange.subscribe(e)
                : u().localeChange.subscribe(e);
              const n = () => {
                (t?.unsubscribe(),
                  (t = void 0),
                  window.removeEventListener("beforeunload", n));
              };
              "undefined" != typeof window &&
                window.addEventListener("beforeunload", n);
            })((t) => {
              "" !== t &&
                ((0, l.D)(t).catch((e) => {
                  (0, o.x$)().error(
                    "setupI18nLocaleHandler(): changeLocale() error",
                    e,
                  );
                }),
                e && p(e, (0, a._f)(t)));
            }));
        }
      },
      91115: (e, t, n) => {
        n.d(t, { ih: () => o });
        var r = n(36458),
          i = n(82170);
        function o() {
          return r.i.provideProxy(i.Sd);
        }
      },
      82170: (e, t, n) => {
        n.d(t, { Sd: () => r, tU: () => o });
        const r = "tvd:window-service";
        var i, o;
        (!(function (e) {
          ((e[(e.Ask = 0)] = "Ask"), (e[(e.CheckOnly = 1)] = "CheckOnly"));
        })(i || (i = {})),
          (function (e) {
            ((e.Window = "isWindow"),
              (e.App = "isApp"),
              (e.Chart = "isChart"),
              (e.Debug = "isDebug"));
          })(o || (o = {})));
      },
      89597: (e, t, n) => {
        function r(e) {
          let t = { width: 350, height: 220 };
          const n = new Map([
            ["br", { width: 365 }],
            ["de_DE", { width: 445 }],
            ["es", { width: 430 }],
            ["fr", { width: 395, height: 248 }],
            ["id", { width: 360 }],
            ["ms_MY", { width: 360 }],
            ["pl", { width: 358 }],
            ["ru", { width: 400 }],
            ["zh_CN", { width: 360, height: 196 }],
            ["zh_TW", { width: 360, height: 196 }],
          ]).get(e);
          return (n && (t = { ...t, ...n }), t);
        }
        var i, o, a, s;
        (n.d(t, { BU: () => r, kZ: () => i, iR: () => o }),
          (function (e) {
            ((e[(e.Normal = 0)] = "Normal"),
              (e[(e.Maximized = 1)] = "Maximized"),
              (e[(e.Minimized = 2)] = "Minimized"),
              (e[(e.Hidden = 3)] = "Hidden"),
              (e[(e.Fullscreen = 4)] = "Fullscreen"),
              (e[(e.FullscreenWithPanel = 5)] = "FullscreenWithPanel"));
          })(i || (i = {})),
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
          })(a || (a = {})),
          (function (e) {
            ((e[(e.Basic = 0)] = "Basic"),
              (e[(e.ChartData = 1)] = "ChartData"));
          })(s || (s = {})));
      },
      29060: (e, t, n) => {
        n.d(t, { og: () => r, mZ: () => i });
        const r = "tvd:locale-get-translations",
          i = "tvd:common-view-ready";
      },
      41029: (e, t, n) => {
        (n.d(t, { Um: () => r.Um, IJ: () => r.IJ }), n(96486), n(16693));
        var r = n(87269);
      },
      59391: (e, t, n) => {
        n.d(t, {
          wK: () => r.wK,
          _v: () => r._v,
          Um: () => i.Um,
          IJ: () => i.IJ,
          mR: () => o.mR,
          _f: () => a._f,
          Sj: () => a.Sj,
        });
        var r = n(95091),
          i = n(41029),
          o = n(67644),
          a = n(26063);
        (n(57118), n(19014), n(89183));
      },
      67644: (e, t, n) => {
        var r;
        (n.d(t, { mR: () => r }),
          n(65355),
          n(84011),
          n(41029),
          (function (e) {
            ((e.Enter = "Enter"),
              (e.Space = "Space"),
              (e.Tab = "Tab"),
              (e.ArrowUp = "ArrowUp"),
              (e.ArrowDown = "ArrowDown"),
              (e.Escape = "Escape"));
          })(r || (r = {})));
      },
      26063: (e, t, n) => {
        n.d(t, { _f: () => o, Sj: () => a });
        const r = ["ar", "ar_AE"],
          i = ["he", "he_IL"],
          o = (e) => [...r, ...i].includes(e),
          a = () => "rtl" === window.document.dir;
      },
      87269: (e, t, n) => {
        n.d(t, { Um: () => r, IJ: () => i });
        const r = () => "darwin" === process.platform,
          i = () => "linux" === process.platform;
      },
      57118: (e, t, n) => {
        n(57310);
        var r = n(62771);
        const i = "TARGET_TVD_HOST",
          o = "https://www.tradingview.com/",
          a = (0, r.V)(() => {
            const e = "http(s?):\\/\\/((\\w|-)*\\.)?tradingview\\.com";
            let t = o;
            return (
              i in process.env && (t = process.env[i] ?? o),
              null !== new RegExp(e, "i").exec(t)
                ? e
                : (t.endsWith("/") && (t = t?.substring(0, t.length - 1)),
                  t.replace(/\./gi, "\\.").replace(/\//gi, "\\/"))
            );
          });
        function s(e, t = !0) {
          const n = (e) => {
            let n = e
              .toString()
              .replace(/\./gi, "\\.")
              .replace(/(?<!\))\*/gi, "(.*)");
            return (
              n.match(/\w+(\/\((\.\*\)))/gi) &&
                (n = n.replace(/\/\((\.\*\))/gi, "(/(.*))?")),
              (n = n.replace(/\//gi, "\\/").replace(/\$\{TV\}/gi, a())),
              (n = `^${n}${t ? "$" : ""}`),
              new RegExp(n, "i")
            );
          };
          return "string" == typeof e ? n(e) : e.map(n);
        }
        const l = "${TV}/chart/([a-zA-Z0-9]{0,12})?/?",
          d = "${TV}/(\\w|-)*screener/*";
        ((0, r.V)(() => s(d)),
          (0, r.V)(() => s("${TV}/", !0)),
          (0, r.V)(() => s("${TV}/chart/", !0)),
          (0, r.V)(() => s(l)),
          (0, r.V)(() => s("(${TV}/chart/([a-zA-Z0-9]{0,12})?)/\\?*?")),
          (0, r.V)(() =>
            s(
              "${TV}/chart/[a-z0-9-._~:\\?#@!$&'()*+,;%=]+/[a-z0-9-._~:\\?#@!$&'()*+,;%=]+/",
              !0,
            ),
          ),
          (0, r.V)(() => s("${TV}/screener/*")),
          (0, r.V)(() => s("${TV}/heatmap/*")),
          (0, r.V)(() => s("${TV}/community/*")),
          (0, r.V)(() => s("${TV}/pine-script-docs/en/v5/Introduction.html")),
          (0, r.V)(() => s("${TV}/pine-script-reference/v5/")),
          (0, r.V)(() => s("${TV}/x/*")),
          (0, r.V)(() => s("${TV}/*")),
          (0, r.V)(() => s("${TV}/account-recovery/*")),
          (0, r.V)(() => s("${TV}/chat/*")),
          (0, r.V)(() => /:\/\/s3\..+\/snapshots\//i),
          (0, r.V)(() => s("${TV}/pine/*")),
          (0, r.V)(() => s("${TV}/markets/*")),
          (0, r.V)(() => s("${TV}/markets/*/news/")),
          (0, r.V)(() => s("${TV}/markets/stocks-*/*")),
          (0, r.V)(() => s("${TV}/markets/world-economy/*")),
          (0, r.V)(() => s("${TV}/u/TradingView/")),
          (0, r.V)(() => s("${TV}/news/*")),
          (0, r.V)(() => s("${TV}/news/")),
          (0, r.V)(() => s("${TV}/news/\\?market=*")),
          (0, r.V)(() => s("${TV}/news/\\?market=topstories")),
          (0, r.V)(() =>
            s("${TV}/HTML5-stock-forex-bitcoin-charting-library/"),
          ),
          (0, r.V)(() => s("${TV}/support/*")),
          (0, r.V)(() => s("https://status.tradingview.com/", !0)),
          (0, r.V)(() =>
            s([
              "${TV}/news/*",
              "${TV}/support/*",
              "${TV}/house-rules/*",
              "${TV}/key-events/*",
              "${TV}/symbols/*",
              "${TV}/heatmap/*",
              "${TV}/economic-calendar/",
              d,
              "${TV}/ideas/*",
              "${TV}/community/*",
              "${TV}/markets/*",
              "${TV}/sparks/*",
              "${TV}/education/*",
            ]),
          ),
          (0, r.V)(() => s("${TV}/markets/bonds/*")),
          (0, r.V)(() =>
            s([
              l,
              d,
              "${TV}/markets/*",
              "${TV}/symbols/*",
              "${TV}/(\\w|-)*calendar/*",
            ]),
          ));
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
      84434: (e, t, n) => {
        n.d(t, {
          eN: () => d,
          Tb: () => l,
          cg: () => h,
          YA: () => c,
          yj: () => u,
        });
        var r = n(77751),
          i = n(73386),
          o = n(4352),
          a = n(30310),
          s = n(68080);
        function l(e, t) {
          return (0, o.nZ)().captureException(e, (0, s.U0)(t));
        }
        function d(e, t) {
          return (0, o.nZ)().captureEvent(e, t);
        }
        function c(e, t) {
          (0, o.aF)().setTag(e, t);
        }
        function u(e) {
          const t = (0, o.s3)(),
            n = (0, o.aF)(),
            s = (0, o.nZ)(),
            { release: l, environment: d = i.J } = (t && t.getOptions()) || {},
            { userAgent: c } = r.n.navigator || {},
            u = (0, a.Hv)({
              release: l,
              environment: d,
              user: s.getUser() || n.getUser(),
              ...(c && { userAgent: c }),
              ...e,
            }),
            g = n.getSession();
          return (
            g && "ok" === g.status && (0, a.CT)(g, { status: "exited" }),
            p(),
            n.setSession(u),
            s.setSession(u),
            u
          );
        }
        function p() {
          const e = (0, o.aF)(),
            t = (0, o.nZ)(),
            n = t.getSession() || e.getSession();
          (n && (0, a.RJ)(n), g(), e.setSession(), t.setSession());
        }
        function g() {
          const e = (0, o.aF)(),
            t = (0, o.nZ)(),
            n = (0, o.s3)(),
            r = t.getSession() || e.getSession();
          r && n && n.captureSession(r);
        }
        function h(e = !1) {
          e ? p() : g();
        }
      },
    },
    a = {};
  function s(e) {
    var t = a[e];
    if (void 0 !== t) return t.exports;
    var n = (a[e] = { id: e, exports: {} });
    return (o[e].call(n.exports, n, n.exports, s), n.exports);
  }
  ((s.m = o),
    (e = []),
    (s.O = (t, n, r, i) => {
      if (!n) {
        var o = 1 / 0;
        for (c = 0; c < e.length; c++) {
          for (var [n, r, i] = e[c], a = !0, l = 0; l < n.length; l++)
            (!1 & i || o >= i) && Object.keys(s.O).every((e) => s.O[e](n[l]))
              ? n.splice(l--, 1)
              : ((a = !1), i < o && (o = i));
          if (a) {
            e.splice(c--, 1);
            var d = r();
            void 0 !== d && (t = d);
          }
        }
        return t;
      }
      i = i || 0;
      for (var c = e.length; c > 0 && e[c - 1][2] > i; c--) e[c] = e[c - 1];
      e[c] = [n, r, i];
    }),
    (s.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return (s.d(t, { a: t }), t);
    }),
    (n = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (s.t = function (e, r) {
      if ((1 & r && (e = this(e)), 8 & r)) return e;
      if ("object" == typeof e && e) {
        if (4 & r && e.__esModule) return e;
        if (16 & r && "function" == typeof e.then) return e;
      }
      var i = Object.create(null);
      s.r(i);
      var o = {};
      t = t || [null, n({}), n([]), n(n)];
      for (var a = 2 & r && e; "object" == typeof a && !~t.indexOf(a); a = n(a))
        Object.getOwnPropertyNames(a).forEach((t) => (o[t] = () => e[t]));
      return ((o.default = () => e), s.d(i, o), i);
    }),
    (s.d = (e, t) => {
      for (var n in t)
        s.o(t, n) &&
          !s.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (s.f = {}),
    (s.e = (e) =>
      Promise.all(Object.keys(s.f).reduce((t, n) => (s.f[n](e, t), t), []))),
    (s.u = (e) => e + ".js"),
    (s.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (r = {}),
    (i = "tradingview-desktop:"),
    (s.l = (e, t, n, o) => {
      if (r[e]) r[e].push(t);
      else {
        var a, l;
        if (void 0 !== n)
          for (
            var d = document.getElementsByTagName("script"), c = 0;
            c < d.length;
            c++
          ) {
            var u = d[c];
            if (
              u.getAttribute("src") == e ||
              u.getAttribute("data-webpack") == i + n
            ) {
              a = u;
              break;
            }
          }
        (a ||
          ((l = !0),
          ((a = document.createElement("script")).charset = "utf-8"),
          (a.timeout = 120),
          s.nc && a.setAttribute("nonce", s.nc),
          a.setAttribute("data-webpack", i + n),
          (a.src = e)),
          (r[e] = [t]));
        var p = (t, n) => {
            ((a.onerror = a.onload = null), clearTimeout(g));
            var i = r[e];
            if (
              (delete r[e],
              a.parentNode && a.parentNode.removeChild(a),
              i && i.forEach((e) => e(n)),
              t)
            )
              return t(n);
          },
          g = setTimeout(
            p.bind(null, void 0, { type: "timeout", target: a }),
            12e4,
          );
        ((a.onerror = p.bind(null, a.onerror)),
          (a.onload = p.bind(null, a.onload)),
          l && document.head.appendChild(a));
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
      var t = s.g.document;
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
        (s.p = e + "../"));
    })(),
    (() => {
      s.b = document.baseURI || self.location.href;
      var e = { 9145: 0 };
      ((s.f.j = (t, n) => {
        var r = s.o(e, t) ? e[t] : void 0;
        if (0 !== r)
          if (r) n.push(r[2]);
          else {
            var i = new Promise((n, i) => (r = e[t] = [n, i]));
            n.push((r[2] = i));
            var o = s.p + s.u(t),
              a = new Error();
            s.l(
              o,
              (n) => {
                if (s.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                  var i = n && ("load" === n.type ? "missing" : n.type),
                    o = n && n.target && n.target.src;
                  ((a.message =
                    "Loading chunk " + t + " failed.\n(" + i + ": " + o + ")"),
                    (a.name = "ChunkLoadError"),
                    (a.type = i),
                    (a.request = o),
                    r[1](a));
                }
              },
              "chunk-" + t,
              t,
            );
          }
      }),
        (s.O.j = (t) => 0 === e[t]));
      var t = (t, n) => {
          var r,
            i,
            [o, a, l] = n,
            d = 0;
          if (o.some((t) => 0 !== e[t])) {
            for (r in a) s.o(a, r) && (s.m[r] = a[r]);
            if (l) var c = l(s);
          }
          for (t && t(n); d < o.length; d++)
            ((i = o[d]), s.o(e, i) && e[i] && e[i][0](), (e[o[d]] = 0));
          return s.O(c);
        },
        n = (global.webpackChunktradingview_desktop =
          global.webpackChunktradingview_desktop || []);
      (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
    })());
  var l = s.O(
    void 0,
    [7498, 686, 8078, 1070, 6486, 743, 3970, 819, 2184, 567],
    () => s(68068),
  );
  l = s.O(l);
})();
