"use strict";
(global.webpackChunktradingview_desktop =
  global.webpackChunktradingview_desktop || []).push([
  [1296],
  {
    38628: (t, e, n) => {
      n.d(e, { Z: () => M });
      var o = n(43392),
        r = n.n(o),
        i = n(8021),
        a = n.n(i),
        d = n(78375),
        s = n.n(d),
        m = new URL(n(58372), n.b),
        l = new URL(n(98721), n.b),
        g = new URL(n(36022), n.b),
        h = new URL(n(35205), n.b),
        p = a()(r()),
        c = s()(m),
        u = s()(l),
        b = s()(g),
        I = s()(h);
      p.push([
        t.id,
        "* {\n\t--theme-option-border-dark: #575757;\n\t--theme-option-border-light: #EBEBEB;\n\t--theme-option-border-radius-small: 6px;\n\t--theme-option-border-radius-medium: 8px;\n\t--theme-option-border-radius-large: 9px;\n}\n\n.theme-option {\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: transparent;\n\tcolor: var(--color-content-primary-neutral-bold);\n\tborder: none;\n\tpadding: 0;\n\n\t& > .theme-option-icon {\n\t\tbox-sizing: border-box;\n\n\t\t&:not(.system) {\n\t\t\tbackground-size: cover;\n\t\t\tbackground-repeat: no-repeat;\n\t\t\toutline-offset: -1px;\n\t\t}\n\t}\n\n\t& > .theme-option-icon.system {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\talign-items: center;\n\n\t\t& > .dark,\n\t\t& > .light {\n\t\t\twidth: calc(100% / 2);\n\t\t\theight: 100%;\n\t\t\tbox-sizing: border-box;\n\t\t\tbackground-size: cover;\n\t\t\tbackground-repeat: no-repeat;\n\t\t\toutline-offset: -1px;\n\t\t}\n\n\t\t& > .dark {\n\t\t\tbackground-image: url(" +
          c +
          ");\n\t\t\toutline: 1px solid var(--theme-option-border-dark);\n\t\t}\n\n\t\t& > .light {\n\t\t\tbackground-image: url(" +
          u +
          ");\n\t\t\toutline: 1px solid var(--theme-option-border-light);\n\t\t}\n\t}\n\n\t& > .theme-option-icon.dark {\n\t\tbackground-image: url(" +
          b +
          ");\n\t\toutline: 1px solid var(--theme-option-border-dark);\n\t}\n\n\t& > .theme-option-icon.light {\n\t\tbackground-image: url(" +
          I +
          ");\n\t\toutline: 1px solid var(--theme-option-border-light);\n\t}\n}\n\n/* theme option small size */\n.theme-option.small {\n\tgap: 3px;\n\n\t& > .theme-option-icon {\n\t\twidth: 70px;\n\t\theight: 42px;\n\t\tborder-radius: var(--theme-option-border-radius-small);\n\t}\n}\n\n/* such complex styles are used so the border radiuses work correctly in both ltr and rtl */\n[dir='ltr'] .theme-option.small > .theme-option-icon.system > .dark,\n[dir='rtl'] .theme-option.small > .theme-option-icon.system > .light {\n\tborder-top-left-radius: var(--theme-option-border-radius-small);\n\tborder-bottom-left-radius: var(--theme-option-border-radius-small);\n}\n\n[dir='ltr'] .theme-option.small > .theme-option-icon.system > .light,\n[dir='rtl'] .theme-option.small > .theme-option-icon.system > .dark {\n\tborder-top-right-radius: var(--theme-option-border-radius-small);\n\tborder-bottom-right-radius: var(--theme-option-border-radius-small);\n}\n\n/* theme option medium size */\n.theme-option.medium {\n\tgap: 4px;\n\n\t& > .theme-option-icon {\n\t\twidth: 80px;\n\t\theight: 48px;\n\t\tborder-radius: var(--theme-option-border-radius-medium);\n\t}\n}\n\n/* such complex styles are used so the border radiuses work correctly in both ltr and rtl */\n[dir='ltr'] .theme-option.medium > .theme-option-icon.system > .dark,\n[dir='rtl'] .theme-option.medium > .theme-option-icon.system > .light {\n\tborder-top-left-radius: var(--theme-option-border-radius-medium);\n\tborder-bottom-left-radius: var(--theme-option-border-radius-medium);\n}\n\n[dir='ltr'] .theme-option.medium > .theme-option-icon.system > .light,\n[dir='rtl'] .theme-option.medium > .theme-option-icon.system > .dark {\n\tborder-top-right-radius: var(--theme-option-border-radius-medium);\n\tborder-bottom-right-radius: var(--theme-option-border-radius-medium);\n}\n\n/* theme option large size */\n.theme-option.large {\n\tgap: 8px;\n\n\t& > .theme-option-icon {\n\t\twidth: 125px;\n\t\theight: 75px;\n\t\tborder-radius: var(--theme-option-border-radius-large);\n\t}\n}\n\n/* such complex styles are used so the border radiuses work correctly in both ltr and rtl */\n[dir='ltr'] .theme-option.large > .theme-option-icon.system > .dark,\n[dir='rtl'] .theme-option.large > .theme-option-icon.system > .light {\n\tborder-top-left-radius: var(--theme-option-border-radius-large);\n\tborder-bottom-left-radius: var(--theme-option-border-radius-large);\n}\n\n[dir='ltr'] .theme-option.large > .theme-option-icon.system > .light,\n[dir='rtl'] .theme-option.large > .theme-option-icon.system > .dark {\n\tborder-top-right-radius: var(--theme-option-border-radius-large);\n\tborder-bottom-right-radius: var(--theme-option-border-radius-large);\n}\n\n.theme-option.active {\n\t& > .theme-option-icon {\n\t\tposition: relative;\n\t\toutline: 2px solid var(--color-container-fill-primary-neutral-extra-bold);\n\t\toutline-offset: -2px;\n\n\t\t& > .theme-option-icon-active-inner-outline {\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\toutline: 2px solid var(--color-container-fill-tertiary-inverse);\n\t\t\toutline-offset: -4px;\n\t\t}\n\t}\n\n\t&.small > .theme-option-icon > .theme-option-icon-active-inner-outline {\n\t\tborder-radius: var(--theme-option-border-radius-small);\n\t}\n\n\t&.medium > .theme-option-icon > .theme-option-icon-active-inner-outline {\n\t\tborder-radius: var(--theme-option-border-radius-medium);\n\t}\n\n\t&.large > .theme-option-icon > .theme-option-icon-active-inner-outline {\n\t\tborder-radius: var(--theme-option-border-radius-large);\n\t}\n}\n\n.theme-option:focus-visible {\n\toutline: 2px solid #2962FF;\n\toutline-offset: 2px;\n\n\t&.small {\n\t\tborder-radius: var(--theme-option-border-radius-small);\n\t}\n\n\t&.medium {\n\t\tborder-radius: var(--theme-option-border-radius-medium);\n\t}\n\n\t&.large {\n\t\tborder-radius: var(--theme-option-border-radius-large);\n\t}\n}\n\n.no-focus-outline {\n\toutline: none;\n}\n",
        "",
      ]);
      const M = p;
    },
    84063: (t, e, n) => {
      n.d(e, { Z: () => d });
      var o = n(43392),
        r = n.n(o),
        i = n(8021),
        a = n.n(i)()(r());
      a.push([
        t.id,
        ".theme-picker {\n\twidth: 100%;\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 12px;\n\n\t&.large {\n\t\tgap: 20px;\n\t}\n}\n",
        "",
      ]);
      const d = a;
    },
    98124: (t, e, n) => {
      n(50959);
    },
    27044: (t, e, n) => {
      n(50959);
    },
    49114: (t, e, n) => {
      (n(50959), n(5306), n(55622));
    },
    86050: (t, e, n) => {
      n.d(e, { m: () => r });
      var o = n(50959);
      function r(t, e, n = []) {
        (0, o.useEffect)(() => {
          if (!t) return;
          let n = t.subscribe(e);
          const o = () => {
            (n?.unsubscribe(), (n = null));
          };
          return (
            window.addEventListener("beforeunload", o),
            () => {
              (window.removeEventListener("beforeunload", o), o());
            }
          );
        }, n);
      }
    },
    2251: (t, e, n) => {
      n.d(e, { O: () => d });
      var o = n(50959),
        r = n(59391);
      const i = ["mousedown", "click", "mouseup", "contextmenu"],
        a = 150;
      function d(t, e, n, d = {}) {
        const { escape: s = !1, scroll: m = !1, resize: l = !1 } = d,
          g = (0, o.useCallback)(() => {
            n(!1);
          }, []);
        (0, o.useEffect)(() => {
          if (!e) return;
          const n = (e) => {
              t.current?.contains(e.target) ||
                (e.stopPropagation(), e.preventDefault(), g());
            },
            o = (t) => {
              t.key === r.mR.Escape && g();
            };
          return (
            i.forEach((t) => {
              setTimeout(() => {
                document.addEventListener(t, n, !0);
              }, a);
            }),
            s && document.addEventListener("keydown", o),
            m && document.addEventListener("scroll", g),
            l && window.addEventListener("resize", g),
            () => {
              (i.forEach((t) => {
                setTimeout(() => {
                  document.removeEventListener(t, n, !0);
                }, a);
              }),
                s && document.removeEventListener("keydown", o),
                m && document.removeEventListener("scroll", g),
                l && window.removeEventListener("resize", g));
            }
          );
        }, [t, s, g, e, l, m]);
      }
    },
    27500: (t, e, n) => {
      (n(50959), n(39001), n(86050));
    },
    75693: (t, e, n) => {
      (n(50959), n(13855), n(91115), n(86050), n(27500));
    },
    87365: (t, e, n) => {
      (n(50959), n(5306), n(13855), n(55622), n(59391));
    },
    98908: (t, e, n) => {
      n.d(e, { J: () => k });
      var o = n(50959),
        r = n(13855),
        i = n(55622),
        a = n(39001),
        d = n(71443),
        s = n(98078),
        m = n(25211),
        l = n.n(m),
        g = n(62962),
        h = n.n(g),
        p = n(20310),
        c = n.n(p),
        u = n(29290),
        b = n.n(u),
        I = n(47289),
        M = n.n(I),
        y = n(24834),
        x = n.n(y),
        v = n(38628),
        A = {};
      ((A.styleTagTransform = x()),
        (A.setAttributes = b()),
        (A.insert = c().bind(null, "head")),
        (A.domAPI = h()),
        (A.insertStyleElement = M()),
        l()(v.Z, A),
        v.Z && v.Z.locals && v.Z.locals);
      const D = new Map([
          ["small", "typography-regular-13px"],
          ["medium", "typography-regular-14px"],
          ["large", "typography-accent-16px-semibold"],
        ]),
        w = ({
          onClick: t,
          theme: e,
          isActive: n,
          showLabel: r = !0,
          size: i = "medium",
          tabIndex: a,
        }) =>
          o.createElement(
            "button",
            {
              onClick: () => {
                t(e.id);
              },
              className: `theme-option ${i} ${n ? "active" : ""} ${a && a < 0 ? "no-focus-outline" : ""}`,
              tabIndex: a,
            },
            o.createElement(
              "div",
              { className: `theme-option-icon ${e.id}` },
              "system" === e.id &&
                o.createElement(
                  o.Fragment,
                  null,
                  o.createElement("div", { className: "dark" }),
                  o.createElement("div", { className: "light" }),
                ),
              n &&
                o.createElement("div", {
                  className: "theme-option-icon-active-inner-outline",
                }),
            ),
            r &&
              o.createElement(
                s.Z,
                { tag: "span", name: D.get(i) ?? "typography-regular-14px" },
                e.label,
              ),
          );
      var E = n(84063),
        z = {};
      ((z.styleTagTransform = x()),
        (z.setAttributes = b()),
        (z.insert = c().bind(null, "head")),
        (z.domAPI = h()),
        (z.insertStyleElement = M()),
        l()(E.Z, z),
        E.Z && E.Z.locals && E.Z.locals);
      const k = ({
        afterThemeIsChangedCb: t,
        size: e = "medium",
        tabIndex: n,
      }) => {
        const [s, m] = (0, o.useState)([]),
          [l, g] = (0, o.useState)("system");
        ((0, d.mA)((0, a._9)().themeChange, g),
          (0, d.mA)((0, i.X)().localeChange, () => {
            (async () => {
              const t = await (0, a._9)().availableThemes();
              m(t);
            })().catch((t) => {
              (0, r.x$)().error(
                "<ThemePicker>.localeChangeHandler(): getAvailableThemes() error",
                t,
              );
            });
          }));
        const h = (e) => {
          l !== e &&
            ((0, a._9)().themeChange.next(e),
            t?.()?.catch((t) => {
              (0, r.x$)().error(
                "<ThemePicker>.onThemeClick(): afterThemeIsChangedCb() error",
                t,
              );
            }));
        };
        return o.createElement(
          "div",
          { className: `theme-picker ${e}` },
          s.map((t) =>
            o.createElement(w, {
              key: t.id,
              onClick: h,
              theme: t,
              isActive: l === t.id,
              showLabel: !0,
              size: e,
              tabIndex: n,
            }),
          ),
        );
      };
    },
    39001: (t, e, n) => {
      n.d(e, { _9: () => i });
      var o = n(36458);
      const r = "tvd:theme-manager-service";
      function i() {
        return o.i.provideProxy(r);
      }
    },
    36022: (t) => {
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgODAgNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg4MHY0OEgwVjBaIiBmaWxsPSIjM0QzRDNEIi8+PHBhdGggZD0iTTggMTJhNCA0IDAgMCAxIDQtNGg2OHY0MEg4VjEyWiIgZmlsbD0iIzFGMUYxRiIvPjxwYXRoIGQ9Ik0xNCAxN2EzIDMgMCAwIDEgMy0zaDEyYTMgMyAwIDAgMSAzIDN2MzFIMTRWMTdabTIxIDBhMyAzIDAgMCAxIDMtM2gxMmEzIDMgMCAwIDEgMyAzdjMxSDM1VjE3Wm0yMSAwYTMgMyAwIDAgMSAzLTNoMTJhMyAzIDAgMCAxIDMgM3YzMUg1NlYxN1oiIGZpbGw9IiMyRTJFMkUiLz48L3N2Zz4K";
    },
    35205: (t) => {
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgODAgNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg4MHY0OEgwVjBaIiBmaWxsPSIjRjJGMkYyIi8+PHBhdGggZD0iTTggMTJhNCA0IDAgMCAxIDQtNGg2OHY0MEg4VjEyWiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xNCAxN2EzIDMgMCAwIDEgMy0zaDEyYTMgMyAwIDAgMSAzIDN2MzFIMTRWMTdabTIxIDBhMyAzIDAgMCAxIDMtM2gxMmEzIDMgMCAwIDEgMyAzdjMxSDM1VjE3Wm0yMSAwYTMgMyAwIDAgMSAzLTNoMTJhMyAzIDAgMCAxIDMgM3YzMUg1NlYxN1oiIGZpbGw9IiNFQkVCRUIiLz48L3N2Zz4K";
    },
    58372: (t) => {
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDAgNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0OEgwVjBaIiBmaWxsPSIjM0QzRDNEIi8+PHBhdGggZD0iTTcgMTNhNSA1IDAgMCAxIDUtNWgyOHY0MEg3VjEzWiIgZmlsbD0iIzFGMUYxRiIvPjxwYXRoIGQ9Ik0xMyAxN2EzIDMgMCAwIDEgMy0zaDE0YTMgMyAwIDAgMSAzIDN2MzFIMTNWMTdaIiBmaWxsPSIjMkUyRTJFIi8+PC9zdmc+Cg==";
    },
    98721: (t) => {
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDAgNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0OEgwVjBaIiBmaWxsPSIjRjJGMkYyIi8+PHBhdGggZD0iTTcgMTJhNCA0IDAgMCAxIDQtNGgyOXY0MEg3VjEyWiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMyAxN2EzIDMgMCAwIDEgMy0zaDE0YTMgMyAwIDAgMSAzIDN2MzFIMTNWMTdaIiBmaWxsPSIjRUJFQkVCIi8+PC9zdmc+Cg==";
    },
  },
]);
