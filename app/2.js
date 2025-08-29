"use strict";
(global.webpackChunktradingview_desktop =
  global.webpackChunktradingview_desktop || []).push([
  [2],
  {
    59132: (e, t, n) => {
      n.d(t, { Z: () => s });
      var a = n(43392),
        r = n.n(a),
        o = n(8021),
        i = n.n(o)()(r());
      i.push([
        e.id,
        ".app-onboarding-media-wrapper {\n\tdisplay: flex;\n\tjustify-content: center;\n\tz-index: 1;\n\twidth: 700px;\n\tmargin-top: 36px;\n}\n\n.app-onboarding-media-wrapper > video {\n\tz-index: 2;\n\tobject-fit: cover;\n}\n",
        "",
      ]);
      const s = i;
    },
    41849: (e, t, n) => {
      n.d(t, { Z: () => s });
      var a = n(43392),
        r = n.n(a),
        o = n(8021),
        i = n.n(o)()(r());
      i.push([
        e.id,
        '.app-onboarding-navigation {\n\tposition: absolute;\n\tleft: 0;\n\tbottom: 0;\n\twidth: calc(100% - 40px);\n\tdisplay: grid;\n\talign-items: center;\n\tjustify-content: space-between;\n\tgrid-template-areas: "prev next";\n\tmargin: 0 20px 20px;\n\tz-index: 2;\n}\n\n.app-onboarding-navigation-prev-button {\n\tgrid-area: prev;\n\twidth: fit-content;\n}\n\n.app-onboarding-navigation-next-button {\n\tgrid-area: next;\n\twidth: fit-content;\n}\n',
        "",
      ]);
      const s = i;
    },
    55337: (e, t, n) => {
      n.d(t, { Z: () => s });
      var a = n(43392),
        r = n.n(a),
        o = n(8021),
        i = n.n(o)()(r());
      i.push([
        e.id,
        "[theme='dark'] {\n\t--color-stage-inactive-bg: #363A45;\n\t--color-stage-active-bg: #F0F3FA;\n}\n\n[theme='light'] {\n\t--color-stage-inactive-bg: #E0E3EB;\n\t--color-stage-active-bg: #2A2E39;\n}\n\n.app-onboarding-progress-bar-section-container {\n\tdisplay: flex;\n\tjustify-content: center;\n\theight: 33px;\n\twidth: 100%;\n\tgap: 24px;\n}\n\n.app-onboarding-progress-bar-section {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 12px;\n}\n\n.app-onboarding-progress-bar-section .section-title {\n\tfont-size: 14px;\n\tfont-weight: 590;\n\tmin-height: 17px;\n}\n\n.app-onboarding-progress-bar-section .section-title.title-sign-in {\n\tcolor: var(--color-app-onboarding-sign-in-title);\n}\n\n.app-onboarding-progress-bar-section .section-title.title-workspace-setup-and-tips {\n\tcolor: var(--color-more-tools-text);\n}\n\n.app-onboarding-progress-bar-section .section-title.title-workspace-setup-and-tips > span {\n\tfont-family: Arial, Helvetica, sans-serif;\n}\n\n.app-onboarding-progress-bar-section .items-container {\n\tdisplay: flex;\n\tgap: 6px;\n\talign-items: center;\n\tmin-height: 9px;\n}\n\n.app-onboarding-progress-bar-section .items-container > div.sign-in-item {\n\twidth: 81px;\n\theight: 3px;\n\tbackground-color: var(--color-stage-inactive-bg);\n\tborder-radius: 0px 2px 2px 0px;\n}\n\n.app-onboarding-progress-bar-section .items-container > div.sign-in-icon {\n\tdisplay: flex;\n}\n\n.app-onboarding-progress-bar-section .items-container > div.sign-in-icon > svg {\n\tcolor: var(--color-stage-inactive-bg);\n}\n\n.app-onboarding-progress-bar-section .items-container.workspace-setup-and-tips-bar > div {\n\tborder-radius: 10px;\n\theight: 3px;\n\twidth: 44px;\n\tbackground-color: var(--color-stage-inactive-bg);\n}\n\n.app-onboarding-progress-bar-section .items-container.workspace-setup-and-tips-bar > div.active {\n\tbackground-color: var(--color-stage-active-bg);\n}\n",
        "",
      ]);
      const s = i;
    },
    15697: (e, t, n) => {
      n.d(t, { Z: () => s });
      var a = n(43392),
        r = n.n(a),
        o = n(8021),
        i = n.n(o)()(r());
      i.push([
        e.id,
        ".app-onboarding-content-container {\n\tdisplay: flex;\n\talign-items: center;\n\tflex-direction: column;\n\tflex: 1 1 auto;\n\tpadding-top: 71px;\n}\n\n.app-onboarding-content-title {\n\tcolor: var(--color-more-tools-text);\n\tline-height: 36px;\n\tfont-weight: 700;\n\tfont-size: 28px;\n}\n\n.app-onboarding-content-desc {\n\twidth: 380px;\n\tfont-weight: 400;\n\tfont-size: 16px;\n\tline-height: 24px;\n\tcolor: var(--color-save-changes-dialog-text);\n\ttext-align: center;\n\tmargin-top: 8px;\n\theight: 78px;\n}\n\n.app-onboarding-content-media-container {\n\theight: 278px;\n}\n\n.app-onboarding-multi-monitor-desc-icon {\n\tdisplay: inline-block;\n\twidth: 28px;\n\theight: 28px;\n\tvertical-align: middle;\n\tborder: 1px solid var(--color-border-new-tab);\n\tborder-radius: 5.6px;\n}\n\n[dir='ltr'] .app-onboarding-multi-monitor-desc-icon {\n\tmargin-left: 5px;\n}\n\n[dir='rtl'] .app-onboarding-multi-monitor-desc-icon {\n\tmargin-right: 5px;\n}\n\n.app-onboarding-multi-monitor-desc-icon > div {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\theight: 100%;\n}\n\n.app-onboarding-multi-monitor-desc-icon > div > svg {\n\tcolor: var(--color-more-tools-text);\n}\n\n.app-onboarding-content-media-container > .theme-picker {\n\tmargin-top: 32px;\n}\n\n.theme-picker.large > .theme-option {\n\talign-items: center;\n}\n",
        "",
      ]);
      const s = i;
    },
    96326: (e, t, n) => {
      n.d(t, { Z: () => s });
      var a = n(43392),
        r = n.n(a),
        o = n(8021),
        i = n.n(o)()(r());
      i.push([
        e.id,
        "html {\n\tbackground: var(--app-onboarding-modal-overlay);\n\tbox-sizing: border-box;\n\twidth: 100%;\n\theight: 100vh;\n\tanimation: modal-appereance-animation .2s ease-in;\n\toverflow: hidden;\n}\n\n@keyframes modal-appereance-animation {\n\t0% {\n\t\topacity: 0;\n\t}\n\n\t100% {\n\t\topacity: 1;\n\t}\n}\n\n#root {\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tright: 0;\n\tleft: 0;\n\tmargin: auto;\n\twidth: 700px;\n\theight: 550px;\n}\n\n.welcome-dialog-wrapper {\n\tbackground-color: var(--color-background-tertiary-inverse);\n\theight: 100%;\n\tborder-radius: 12px;\n\tbox-shadow: 0px 2px 4px var(--color-other-shadow-primary-neutral-extra-heavy);\n}\n\n.app-onboarding-container {\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbox-sizing: border-box;\n\tpadding: 16px;\n\theight: 100%;\n}\n\n",
        "",
      ]);
      const s = i;
    },
    71443: (e, t, n) => {
      (n.d(t, { cI: () => a.c, mA: () => r.m, O3: () => o.O }), n(98124));
      var a = n(46580),
        r = (n(27044), n(49114), n(86050)),
        o = n(2251);
      (n(27500), n(75693), n(87365));
    },
    46580: (e, t, n) => {
      n.d(t, { c: () => r });
      var a = n(50959);
      function r(e) {
        const [t, n] = (0, a.useState)(e);
        return {
          values: t,
          setValues: n,
          handleValueChange: (e, t) => {
            n((n) => (n[e] === t ? n : { ...n, [e]: t }));
          },
        };
      }
    },
    80002: (e, t, n) => {
      (n.r(t), n.d(t, { default: () => te }));
      var a,
        r = n(50959),
        o = n(5306),
        i = n(92686),
        s = n(59391),
        l = n(69478),
        c = n(71443),
        p = n(26759);
      !(function (e) {
        ((e.AppFirstLaunch = "App first launch"),
          (e.LaunchedByUser = "Launched by user"));
      })(a || (a = {}));
      var d = n(45602),
        m = n(25211),
        g = n.n(m),
        u = n(62962),
        h = n.n(u),
        b = n(20310),
        v = n.n(b),
        x = n(29290),
        y = n.n(x),
        f = n(47289),
        w = n.n(f),
        E = n(24834),
        k = n.n(E),
        S = n(41849),
        Z = {};
      ((Z.styleTagTransform = k()),
        (Z.setAttributes = y()),
        (Z.insert = v().bind(null, "head")),
        (Z.domAPI = h()),
        (Z.insertStyleElement = w()),
        g()(S.Z, Z),
        S.Z && S.Z.locals && S.Z.locals);
      const A = ({
        setCurrentStageIndex: e,
        currentStageIndex: t,
        stagesAmount: n,
      }) => {
        const { t: a } = (0, o.$G)(),
          i = (0, r.useCallback)(() => {
            0 !== t && e(t - 1);
          }, [t, e]),
          s = (0, r.useCallback)(() => {
            const a = t + 1;
            a !== n ? e(a) : (0, l.Ku)().close();
          }, [t, e, n]);
        return (
          (0, r.useEffect)(() => {
            const e = (e) => {
              "Enter" === e.key && s();
            };
            return (
              addEventListener("keypress", e),
              () => {
                removeEventListener("keypress", e);
              }
            );
          }, [s]),
          r.createElement(
            "nav",
            { className: "app-onboarding-navigation" },
            0 !== t &&
              r.createElement(
                d.LE,
                {
                  size: "small",
                  color: "gray",
                  variant: "secondary",
                  onClick: i,
                  className: "app-onboarding-navigation-prev-button",
                  tabIndex: 1,
                },
                a("Prev"),
              ),
            r.createElement(
              d.LE,
              {
                size: "small",
                color: "black",
                variant: "primary",
                onClick: s,
                className: "app-onboarding-navigation-next-button",
                tabIndex: 1,
              },
              a(t + 1 < n ? "Next" : "Got it"),
            ),
          )
        );
      };
      var N,
        T = n(95045);
      function C() {
        return (
          (C =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }),
          C.apply(this, arguments)
        );
      }
      const I = function (e) {
        return r.createElement(
          "svg",
          C(
            {
              width: 14,
              height: 9,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e,
          ),
          N ||
            (N = r.createElement("path", {
              d: "m2 4.3 3.478 3.2L12 1.5",
              stroke: "currentColor",
              strokeWidth: 2,
              strokeLinecap: "square",
            })),
        );
      };
      var L = n(55337),
        M = {};
      ((M.styleTagTransform = k()),
        (M.setAttributes = y()),
        (M.insert = v().bind(null, "head")),
        (M.domAPI = h()),
        (M.insertStyleElement = w()),
        g()(L.Z, M),
        L.Z && L.Z.locals && L.Z.locals);
      const j = ({ currentStageIndex: e, stagesAmount: t }) => {
        const n = (0, r.useMemo)(
            () =>
              Array.from({ length: t }, (e, t) => t).map((e) => ({
                index: e,
                key: (0, T.Vj)(),
              })),
            [],
          ),
          { t: a, i18n: i } = (0, o.$G)();
        return r.createElement(
          "div",
          { className: "app-onboarding-progress-bar-section-container" },
          r.createElement(
            "div",
            { className: "app-onboarding-progress-bar-section" },
            r.createElement(
              "div",
              { className: "section-title title-sign-in" },
              a("Sign In"),
            ),
            r.createElement(
              "div",
              { className: "items-container" },
              r.createElement("div", { className: "sign-in-item" }),
              r.createElement(
                "div",
                { className: "sign-in-icon" },
                r.createElement(I, null),
              ),
              r.createElement("div", { className: "sign-in-item" }),
            ),
          ),
          r.createElement(
            "div",
            { className: "app-onboarding-progress-bar-section" },
            r.createElement(
              "div",
              { className: "section-title title-workspace-setup-and-tips" },
              "en" !== i.language
                ? a("Workspace setup and tips")
                : r.createElement(
                    r.Fragment,
                    null,
                    "Workspace setup",
                    r.createElement("span", null, " & "),
                    "tips",
                  ),
            ),
            r.createElement(
              "div",
              { className: "items-container workspace-setup-and-tips-bar" },
              n.map((t) =>
                r.createElement("div", {
                  className: e === t.index ? "active" : "",
                  key: t.key,
                }),
              ),
            ),
          ),
        );
      };
      var z = n(98908),
        O = n(95091),
        P = n(59132),
        V = {};
      ((V.styleTagTransform = k()),
        (V.setAttributes = y()),
        (V.insert = v().bind(null, "head")),
        (V.domAPI = h()),
        (V.insertStyleElement = w()),
        g()(P.Z, V),
        P.Z && P.Z.locals && P.Z.locals);
      const D = ({ mediaSource: e, autoplay: t, customStyles: n }) => {
        const a = (0, r.useRef)(null);
        return (
          (0, r.useEffect)(() => {
            a.current &&
              ((a.current.currentTime = 0),
              t ? (0, O.wK)(a.current.play()) : a.current.pause());
          }, [e, t]),
          r.createElement(
            "div",
            { className: "app-onboarding-media-wrapper", style: n },
            r.createElement("video", {
              width: 700,
              height: 278,
              src: e,
              ref: a,
              loop: !0,
            }),
          )
        );
      };
      var F;
      function H() {
        return (
          (H =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }),
          H.apply(this, arguments)
        );
      }
      const G = function (e) {
        return r.createElement(
          "svg",
          H(
            {
              width: 16,
              height: 11,
              fill: "currentColor",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e,
          ),
          F ||
            (F = r.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M1.829.857h5.914c.22 0 .422.08.579.21A.896.896 0 0 1 8.9.858h5.914a.9.9 0 0 1 .9.9v3.986a.9.9 0 0 1-.9.9H8.9a.9.9 0 0 1-.257-.037v3.251h1.928v.643H6.073v-.643H8V6.606a.9.9 0 0 1-.257.037H1.829a.9.9 0 0 1-.9-.9V1.757a.9.9 0 0 1 .9-.9ZM8 5.743V1.757a.257.257 0 0 0-.257-.257H1.829a.257.257 0 0 0-.257.257v3.986c0 .142.115.257.257.257h5.914A.257.257 0 0 0 8 5.743Zm.643-3.986v3.986c0 .142.115.257.257.257h5.914a.257.257 0 0 0 .258-.257V1.757a.257.257 0 0 0-.258-.257H8.9a.257.257 0 0 0-.257.257Z",
              stroke: "currentColor",
              strokeWidth: 0.5,
            })),
        );
      };
      var W = n(15697),
        $ = {};
      (($.styleTagTransform = k()),
        ($.setAttributes = y()),
        ($.insert = v().bind(null, "head")),
        ($.domAPI = h()),
        ($.insertStyleElement = w()),
        g()(W.Z, $),
        W.Z && W.Z.locals && W.Z.locals);
      const R = () => {
          const { t: e } = (0, o.$G)();
          return r.createElement(
            r.Fragment,
            null,
            e(
              "TradingView Desktop allows you to set up and restore your multi-monitor workspace. Сreate a new window with",
            ),
            "  ",
            r.createElement(
              "div",
              { className: "app-onboarding-multi-monitor-desc-icon" },
              r.createElement("div", null, r.createElement(G, null)),
            ),
            ` ${e("or just detach the tab.")}`,
          );
        },
        B = ({ title: e, desc: t, media: n, customStyles: a }) => {
          const o = n
            ? (({ source: e, autoplay: t }) => ({
                mediaSource: Y() ? e.themeDark : e.themeLight,
                autoplay: t,
              }))(n)
            : null;
          return r.createElement(
            "div",
            { className: "app-onboarding-content-container" },
            r.createElement(
              "span",
              { className: "app-onboarding-content-title" },
              e,
            ),
            r.createElement(
              "span",
              { className: "app-onboarding-content-desc" },
              t ?? r.createElement(R, null),
            ),
            r.createElement(
              "div",
              { className: "app-onboarding-content-media-container" },
              o
                ? r.createElement(D, {
                    mediaSource: o.mediaSource,
                    autoplay: o.autoplay,
                    customStyles: a,
                  })
                : r.createElement(z.J, { size: "large", tabIndex: -1 }),
            ),
          );
        };
      var K,
        U = n(13276),
        q = n(52127),
        _ = n(90034),
        J = n(35846),
        Q = n(96326),
        X = {};
      ((X.styleTagTransform = k()),
        (X.setAttributes = y()),
        (X.insert = v().bind(null, "head")),
        (X.domAPI = h()),
        (X.insertStyleElement = w()),
        g()(Q.Z, X),
        Q.Z && Q.Z.locals && Q.Z.locals,
        (function (e) {
          ((e[(e.Themes = 0)] = "Themes"),
            (e[(e.MultiMonitorSupport = 1)] = "MultiMonitorSupport"),
            (e[(e.CrosshairSync = 2)] = "CrosshairSync"),
            (e[(e.TabsLinking = 3)] = "TabsLinking"));
        })(K || (K = {})));
      const Y = () =>
          "dark" === document.querySelector("html")?.getAttribute("theme"),
        ee = () => {
          const [e, t] = (0, r.useState)(0),
            [n, a] = (0, r.useState)(),
            { t: i } = (0, o.$G)(),
            s = [
              K.Themes,
              K.MultiMonitorSupport,
              K.CrosshairSync,
              K.TabsLinking,
            ];
          (0, r.useEffect)(() => {
            a(
              (function (e) {
                return new Map([
                  [
                    K.Themes,
                    () => ({
                      title: e("Let’s start with the theme"),
                      desc: e(
                        "In the first instance, the Desktop app matches its appearance to your system’s existing theme, but you’re welcome to change it here.",
                      ),
                      media: null,
                    }),
                  ],
                  [
                    K.MultiMonitorSupport,
                    () => ({
                      title: e("Native multi-monitor support"),
                      desc: null,
                      media: {
                        source: { themeDark: U, themeLight: q },
                        autoplay: !1,
                      },
                    }),
                  ],
                  [
                    K.CrosshairSync,
                    () => ({
                      title: e("Crosshair sync"),
                      desc: e(
                        "Ideal for a thorough study of the market, your crosshairs will move in sync across all your displays to help you streamline your trading workflow.",
                      ),
                      media: {
                        source: { themeDark: U, themeLight: q },
                        autoplay: !0,
                      },
                    }),
                  ],
                  [
                    K.TabsLinking,
                    () => ({
                      title: e("Symbol syncing in tabs"),
                      desc: e(
                        "When you set the same color for different tabs, any changes to the symbol will automatically load on all tabs of that same color.",
                      ),
                      media: {
                        source: { themeDark: _, themeLight: J },
                        autoplay: !0,
                      },
                      customStyles: { marginTop: 0 },
                    }),
                  ],
                ]);
              })(i),
            );
          }, []);
          const l = n?.get(s[e]);
          if (!l) return r.createElement(r.Fragment, null);
          const { title: c, desc: p, media: d, customStyles: m } = l();
          return r.createElement(
            "div",
            { className: "app-onboarding-container" },
            r.createElement(j, {
              currentStageIndex: e,
              stagesAmount: s.length,
            }),
            r.createElement(B, {
              title: c,
              desc: p,
              media: d,
              customStyles: m,
            }),
            r.createElement(A, {
              currentStageIndex: e,
              stagesAmount: s.length,
              setCurrentStageIndex: t,
            }),
          );
        },
        te = ({ inputChange: e, data: t }) => {
          const n = (0, r.useRef)(null),
            [o, d] = (0, r.useState)(null);
          return (
            (0, c.O3)(
              n,
              !0,
              () => {
                (0, s.Um)() ||
                  (localStorage.getItem("appOnboardingLaunchSource") ??
                    void 0) !== a.LaunchedByUser ||
                  (0, l.Ku)().close();
              },
              { escape: !0 },
            ),
            (0, r.useEffect)(() => {
              const e = (0, i.M8)().userChange.subscribe((e) => {
                const t = new i.n5(e).isAnonymous;
                d(t);
              });
              return () => {
                e.unsubscribe();
              };
            }, []),
            r.createElement(
              "div",
              { ref: n, className: "welcome-dialog-wrapper" },
              !0 === o &&
                r.createElement(p.SignInDialog, { inputChange: e, data: t }),
              !1 === o && r.createElement(ee, null),
            )
          );
        };
    },
    13276: (e, t, n) => {
      e.exports = n.p + "4d5c8286d0a54b98957f.webm";
    },
    52127: (e, t, n) => {
      e.exports = n.p + "a4a20a3d64e1184bad4c.webm";
    },
    90034: (e, t, n) => {
      e.exports = n.p + "f4f89899938da21d4de2.webm";
    },
    35846: (e, t, n) => {
      e.exports = n.p + "727d609157d643c99508.webm";
    },
  },
]);
