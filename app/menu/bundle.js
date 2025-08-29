(() => {
  "use strict";
  var e,
    t,
    n,
    r = {
      36315: (e, t, n) => {
        n.d(t, { Z: () => l });
        var r = n(43392),
          o = n.n(r),
          a = n(8021),
          i = n.n(a)()(o());
        i.push([
          e.id,
          ".wrapper-tooltip {\n\tposition: relative;\n}\n\n.wrapper-tooltip:where(.right, .left) {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.wrapper-tooltip.left {\n\tflex-direction: row-reverse;\n}\n\n.wrapper-tooltip.right {\n\tflex-direction: row;\n}\n\n.wrapper-tooltip > *:first-child:hover + .tooltip {\n\tvisibility: visible;\n\topacity: 1;\n}\n\n.tooltip {\n\tposition: absolute;\n\tdisplay: flex;\n\talign-items: center;\n\tmax-width: max(100%, 400px);\n\twidth: max-content;\n\tvisibility: hidden;\n\topacity: 0;\n\ttransition-duration: 0.3s;\n}\n\n.wrapper-tooltip.top > .tooltip,\n.wrapper-tooltip.bottom > .tooltip {\n\tleft: 50%;\n\ttransform: translate(-50%, 0);\n}\n\n/* start tooltip top */\n.wrapper-tooltip.top > .tooltip {\n\tflex-direction: column;\n}\n/* end tooltip top */\n\n/* start tooltip right */\n.wrapper-tooltip.right > .tooltip {\n\tmargin-left: 1px;\n}\n\n[dir='ltr'] .wrapper-tooltip.right > .tooltip {\n\tflex-direction: row-reverse;\n}\n\n[dir='rtl'] .wrapper-tooltip.right > .tooltip {\n\tflex-direction: row;\n}\n/* end tooltip right */\n\n/* start tooltip bottom */\n.wrapper-tooltip.bottom > .tooltip {\n\tflex-direction: column-reverse;\n}\n/* end tooltip bottom */\n\n/* start tooltip left */\n.wrapper-tooltip.left > .tooltip {\n\tmargin-right: 1px;\n}\n\n[dir='ltr'] .wrapper-tooltip.left > .tooltip {\n\tflex-direction: row;\n}\n\n[dir='rtl'] .wrapper-tooltip.left > .tooltip {\n\tflex-direction: row-reverse;\n}\n/* end tooltip left */\n\n.tooltip-text {\n\tcolor: #FFFFFF;\n\tbackground-color: #363A45;\n\tpadding: 4px 6px;\n\tborder: 1px solid #363A45;\n\tborder-radius: 4px;\n\tdisplay: -webkit-box;\n\t-webkit-line-clamp: 3;\n\t-webkit-box-orient: vertical;\n\toverflow: hidden;\n}\n\n.tooltip-arrow {\n\tborder: 6px solid transparent;\n}\n\n.wrapper-tooltip.left .tooltip-arrow {\n\tborder-left: 4px solid #363A45;\n\tborder-right: 0;\n}\n\n.wrapper-tooltip.top .tooltip-arrow {\n\tborder-top: 4px solid #363A45;\n\tborder-bottom: 0;\n}\n\n.wrapper-tooltip.right .tooltip-arrow {\n\tborder-right: 4px solid #363A45;\n\tborder-left: 0;\n}\n\n.wrapper-tooltip.bottom .tooltip-arrow {\n\tborder-bottom: 4px solid #363A45;\n\tborder-top: 0;\n}\n",
          "",
        ]);
        const l = i;
      },
      46697: (e, t, n) => {
        n.d(t, { Z: () => l });
        var r = n(43392),
          o = n.n(r),
          a = n(8021),
          i = n.n(a)()(o());
        i.push([
          e.id,
          "[theme='dark'] {\n\t--color-content: #D1D4DC;\n\t--color-content-bg-hover: #2A2E39;\n\t--color-content-disabled: #50535E;\n\t--color-shortcut: #868993;\n\t--color-title: #868993;\n}\n\n[theme='light'] {\n\t--color-content: #131722;\n\t--color-content-bg-hover: #F0F3FA;\n\t--color-content-disabled: #B2B5BE;\n\t--color-shortcut: #6A6D78;\n\t--color-title: #6A6D78;\n}\n\n.menu-item {\n\tposition: relative;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\theight: 32px;\n\tcolor: var(--color-content);\n\tlist-style-type: none;\n}\n\n.menu-item.title {\n\theight: 24px;\n\tcolor: var(--color-title);\n}\n\n.menu-item:not(.active):not(.title):not(.zoom):not(.theme):hover {\n\tbackground-color: var(--color-content-bg-hover);\n}\n\n.menu-item.active {\n\tcolor: #FFFFFF;\n\tbackground: var(--color-button-bg);\n}\n\n.menu-item.theme {\n\theight: 100%;\n\tmargin: 14px 0 4px;\n}\n\n.menu-item.theme > .theme-picker {\n\tjustify-content: space-evenly;\n\tpadding: 0 12px;\n}\n\n.menu-item-icon {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n\n.menu-item-icon.with-linking {\n\twidth: 48px;\n}\n\n.menu-item-icon.without-linking {\n\twidth: 42px;\n}\n\n.menu-item-title {\n\tdisplay: inherit;\n\talign-items: inherit;\n\theight: inherit;\n\tflex-grow: 1;\n}\n\n[dir='ltr'] .menu-item-title {\n\tpadding-right: 10px;\n}\n\n[dir='rtl'] .menu-item-title {\n\tpadding-left: 10px;\n}\n\n.menu-item-title.menu-item-title-tab-subtitle {\n\tfont-size: 11px;\n\tline-height: 16px;\n\ttext-transform: uppercase;\n}\n\n[dir='ltr'] .menu-item-title-without-icon {\n\tmargin-left: 12px;\n}\n\n[dir='rtl'] .menu-item-title-without-icon {\n\tmargin-right: 12px;\n}\n\n.menu-item-shortcut {\n\tdisplay: flex;\n\tjustify-content: end;\n\tfont-size: 12px;\n\tline-height: 16px;\n\tmin-width: 30px;\n\tcolor: var(--color-shortcut);\n}\n\n[dir='ltr'] .menu-item-shortcut {\n\tmargin-right: 12px;\n}\n\n[dir='rtl'] .menu-item-shortcut {\n\tmargin-left: 12px;\n}\n\n.disabled {\n\tcolor: var(--color-content-disabled);\n}\n",
          "",
        ]);
        const l = i;
      },
      29282: (e, t, n) => {
        n.d(t, { Z: () => l });
        var r = n(43392),
          o = n.n(r),
          a = n(8021),
          i = n.n(a)()(o());
        i.push([
          e.id,
          ".zoom-container {\n\tdisplay: flex;\n\talign-items: center;\n\tpadding: 0 9px;\n}\n\n.zoom-button {\n\tfont-size: 18px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\theight: 28px;\n\twidth: 28px;\n\tborder-radius: 6px;\n\tcolor: var(--color-signin-main-text);\n\tbackground-color: var(--color-wnd-buttons-bg-hover-active);\n}\n\n.zoom-button:hover {\n\tbackground-color: var(--color-menu-zoom-button-hover);\n}\n\n.zoom-value {\n\tfont-size: 14px;\n\tmargin: 0 8px;\n\ttext-align: right;\n}\n\n.zoom-value.zoom-value-win32 {\n\twidth: 30px;\n}\n\n.zoom-value.zoom-value-other {\n\twidth: 36px;\n}\n",
          "",
        ]);
        const l = i;
      },
      29813: (e, t, n) => {
        n.d(t, { Z: () => l });
        var r = n(43392),
          o = n.n(r),
          a = n(8021),
          i = n.n(a)()(o());
        i.push([
          e.id,
          "body {\n\tbackground: transparent;\n}\n\n.invisible-root {\n\tvisibility: hidden;\n}\n\n.menu-container {\n\tdisplay: flex;\n\twidth: 100%;\n\theight: 100%;\n}\n\n.menu-container.menu-container-main > .menu-item-container {\n\tmin-width: 258px;\n}\n\n[dir='ltr'] .menu-container.menu-container-main {\n\tjustify-content: end;\n}\n\n[dir='rtl'] .menu-container.menu-container-main {\n\tjustify-content: start;\n}\n\n[dir='ltr'] .menu-container.menu-container-tab {\n\tjustify-content: start;\n}\n\n[dir='rtl'] .menu-container.menu-container-tab {\n\tjustify-content: end;\n}\n\n.menu-content {\n\tborder-radius: 8px;\n\tbackground: var(--color-dialog-bg);\n\tpadding: 6px 0;\n}\n\n.menu-content-with-margin {\n\tmargin: 4px;\n\tbox-shadow: 0px 1px 4px var(--color-menu-shadow);\n}\n\n.menu-content-context {\n\twidth: 100%;\n}\n\n[theme='light'] .menu-content-context {\n\tbox-shadow: 0px 1px 4px var(--color-menu-shadow);\n}\n\n[theme='dark'] .menu-content-context {\n\tbox-shadow: 0px 2px 4px var(--color-tooltip-border-shadow);\n}\n\n.menu-items {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style-type: none;\n}\n\n.linking-icon {\n\twidth: 16px;\n\theight: 16px;\n\tborder-radius: 100%;\n}\n",
          "",
        ]);
        const l = i;
      },
      86305: (e, t, n) => {
        n.d(t, { Z: () => l });
        var r = n(43392),
          o = n.n(r),
          a = n(8021),
          i = n.n(a)()(o());
        i.push([
          e.id,
          ".separator {\n\tpadding-top: 6px;\n\tborder-bottom: 1px solid var(--color-layout-separator);\n\tmargin-bottom: 6px;\n}\n",
          "",
        ]);
        const l = i;
      },
      42758: (e, t, n) => {
        n.d(t, { Z: () => l });
        var r = n(43392),
          o = n.n(r),
          a = n(8021),
          i = n.n(a)()(o());
        i.push([
          e.id,
          "[theme='dark'] {\n\t--color-available-background: #00332A;\n\t--color-available-background-hover: #004D40;\n\t--color-warning-background: #33261A;\n\t--color-warning-background-hover: #593A1B;\n\t--color-text: #FFF;\n}\n\n[theme='light'] {\n\t--color-available-background: #DAF2EE;\n\t--color-available-background-hover: #ACE5DC;\n\t--color-warning-background: #FFF3E0;\n\t--color-warning-background-hover: #FFE0B2;\n\t--color-text: #131722;\n}\n\n.update-app-menu-item {\n\twidth: 100%;\n\theight: 40px;\n\tdisplay: flex;\n\talign-items: center;\n\tbackground-color: transparent;\n\tcolor: var(--color-text);\n\tmargin-bottom: 6px;\n\tpadding: 0 12px;\n\tborder: none;\n}\n\n.update-app-menu-item.available {\n\tbackground-color: var(--color-available-background);\n}\n\n.update-app-menu-item.available:hover {\n\tbackground-color: var(--color-available-background-hover);\n}\n\n.update-app-menu-item.warning {\n\tbackground-color: var(--color-warning-background);\n}\n\n.update-app-menu-item.warning:hover {\n\tbackground-color: var(--color-warning-background-hover);\n}\n\n.update-app-menu-item > svg {\n\twidth: 28px;\n\theight: 28px;\n}\n\n[dir='ltr'] .update-app-menu-item > span {\n\tmargin-left: 4px;\n}\n\n[dir='rtl'] .update-app-menu-item > span {\n\tmargin-right: 4px;\n}\n\n.update-app-menu-item.available > svg {\n\tcolor: #22AB94;\n}\n\n.update-app-menu-item.warning > svg {\n\tcolor: #FF9800;\n}\n",
          "",
        ]);
        const l = i;
      },
      15671: (e, t, n) => {
        n.d(t, { Z: () => l });
        var r = n(43392),
          o = n.n(r),
          a = n(8021),
          i = n.n(a)()(o());
        i.push([
          e.id,
          '[theme="dark"] {\n\t--color-trial-bg-hover: var(--color-cold-gray-550);\n}\n\n[theme="light"] {\n\t--color-trial-bg-hover: var(--color-cold-gray-450);\n}\n.trial {\n\t--ui-lib-badgeSkewed-skewed-background: var(--color-default-gray) !important;\n\t&:hover {\n\t\t--ui-lib-badgeSkewed-skewed-background: var(--color-trial-bg-hover) !important;\n\t}\n}\n',
          "",
        ]);
        const l = i;
      },
      82309: (e, t, n) => {
        n.d(t, { Z: () => l });
        var r = n(43392),
          o = n.n(r),
          a = n(8021),
          i = n.n(a)()(o());
        i.push([
          e.id,
          "[theme='dark'] {\n\t--color-avatar-background: #2A2E39;\n\t--color-anonymous-icon: #D1D4DC;\n\t--color-button-name: #D1D4DC;\n\t--color-button-name-hover: #3179F5;\n}\n\n[theme='light'] {\n\t--color-avatar-background: #F0F3FA;\n\t--color-anonymous-icon: #131722;\n\t--color-button-name: #131722;\n\t--color-button-name-hover: #1E53E5;\n}\n\n.user-card {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 8px;\n\tpadding: 6px 0 8px;\n}\n\n.user-card-avatar-container {\n\tbackground-color: var(--color-avatar-background);\n\tcolor: var(--color-anonymous-icon);\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.user-card-avatar-container {\n\twidth: 36px;\n\theight: 36px;\n\tborder-radius: 50%;\n}\n\n.user-card-avatar-container > svg {\n\twidth: 28px;\n\theight: 28px;\n}\n\n.user-card-button {\n\tdisplay: flex;\n\talign-items: center;\n\tbackground-color: transparent;\n\tmargin: 0;\n\tpadding: 0;\n\tborder: none;\n}\n\n.user-card-button.sign-in {\n\tcolor: var(--color-link);\n}\n\n.user-card-button.name {\n\tdisplay: flex;\n\tgap: 4px;\n\tcolor: var(--color-button-name);\n}\n\n.user-card-button.sign-in,\n.user-card-button.name {\n\t&:hover {\n\t\tcolor: var(--color-link-hover);\n\t}\n\n\t&:active {\n\t\tcolor: var(--color-link-active);\n\t}\n}\n",
          "",
        ]);
        const l = i;
      },
      71443: (e, t, n) => {
        (n.d(t, { mA: () => r.m, O3: () => o.O }),
          n(98124),
          n(46580),
          n(27044),
          n(49114));
        var r = n(86050),
          o = n(2251);
        (n(27500), n(75693), n(87365));
      },
      46580: (e, t, n) => {
        n(50959);
      },
      77582: (e, t, n) => {
        var r,
          o = n(50959),
          a = n(44478),
          i = n(17066),
          l = (n(18737), n(10496), n(52296)),
          c = n(59391),
          s = n(5306),
          u = n(79946),
          p = n(28430),
          d = n(36458),
          m = n(13855),
          h = n(55622),
          v = n(29265);
        (!(function (e) {
          ((e[(e.Main = 0)] = "Main"),
            (e[(e.Tab = 1)] = "Tab"),
            (e[(e.Context = 2)] = "Context"));
        })(r || (r = {})),
          n(57310),
          n(41602),
          n(72298),
          n(23577));
        var g = n(23935),
          b = (n(97003), n(9448));
        const f = {
          windowControl: null,
          dialogControl: null,
          toastWindowHandler: null,
        };
        function w() {
          const e = (0, b.o)(
            new URLSearchParams(window.location.search).get(
              "rendererInitialData",
            ) ?? "{}",
          );
          if (!e) throw new Error("getRendererInitialData() jsonParse error");
          return e;
        }
        function y(e) {
          return (
            (f.windowControl = (function (e, t, n) {
              let r =
                window?.remoteServiceInstanceId ?? w().remoteServiceInstanceId;
              if (
                (n && (r = n),
                !t || r !== window?.initialRemoteServiceInstanceId)
              ) {
                (0, m.x$)().debug(
                  `[Renderer] initializeIpcProxyForInstance ${e} id: ${r}; Old id ${window?.initialRemoteServiceInstanceId}`,
                );
                const t = g.h.createForInstance(r);
                return ((window.initialRemoteServiceInstanceId = r), t);
              }
              return t;
            })("windowControl", f.windowControl, e)),
            f.windowControl
          );
        }
        var x = n(71443),
          E = n(98078),
          k = n(25211),
          Z = n.n(k),
          C = n(62962),
          A = n.n(C),
          O = n(20310),
          P = n.n(O),
          R = n(29290),
          M = n.n(R),
          S = n(47289),
          F = n.n(S),
          T = n(24834),
          j = n.n(T),
          I = n(36315),
          V = {};
        ((V.styleTagTransform = j()),
          (V.setAttributes = M()),
          (V.insert = P().bind(null, "head")),
          (V.domAPI = A()),
          (V.insertStyleElement = F()),
          Z()(I.Z, V),
          I.Z && I.Z.locals && I.Z.locals);
        const $ = ({
          children: e,
          text: t,
          showTooltip: n = !0,
          tooltipPosition: r = "top",
        }) => {
          const [a, i] = (0, o.useState)(),
            l = (0, o.useRef)(null);
          return (
            (0, o.useEffect)(() => {
              if (l.current)
                switch (r) {
                  case "top":
                    return void i({
                      bottom: `${l.current.getBoundingClientRect().height + 1}px`,
                    });
                  case "right":
                    return void i({
                      left: `${l.current.getBoundingClientRect().width}px`,
                    });
                  case "bottom":
                    return void i({
                      top: `${l.current.getBoundingClientRect().height + 1}px`,
                    });
                  case "left":
                    return void i({
                      right: `${l.current.getBoundingClientRect().width}px`,
                    });
                  default:
                    i({ top: "auto" });
                }
            }, [r]),
            n
              ? o.createElement(
                  "div",
                  { className: `wrapper-tooltip ${r}` },
                  o.createElement("div", { ref: l }, e),
                  o.createElement(
                    "div",
                    { className: "tooltip", style: a },
                    o.createElement(
                      E.Z,
                      {
                        tag: "span",
                        name: "typography-regular-13px",
                        className: "tooltip-text",
                      },
                      t,
                    ),
                    o.createElement("div", { className: "tooltip-arrow" }),
                  ),
                )
              : o.createElement(o.Fragment, null, e)
          );
        };
        var D = n(86305),
          B = {};
        ((B.styleTagTransform = j()),
          (B.setAttributes = M()),
          (B.insert = P().bind(null, "head")),
          (B.domAPI = A()),
          (B.insertStyleElement = F()),
          Z()(D.Z, B),
          D.Z && D.Z.locals && D.Z.locals);
        const N = () => o.createElement("div", { className: "separator" });
        var H;
        function U() {
          return (
            (U =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
            U.apply(this, arguments)
          );
        }
        const z = function (e) {
          return o.createElement(
            "svg",
            U(
              {
                width: 9,
                height: 1,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e,
            ),
            H ||
              (H = o.createElement("path", {
                d: "M0 0h9v1H0V0Z",
                fill: "currentColor",
              })),
          );
        };
        var _;
        function L() {
          return (
            (L =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
            L.apply(this, arguments)
          );
        }
        const G = function (e) {
          return o.createElement(
            "svg",
            L(
              {
                width: 9,
                height: 9,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e,
            ),
            _ ||
              (_ = o.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M5 0H4v4H0v1h4v4h1V5h4V4H5V0Z",
                fill: "currentColor",
              })),
          );
        };
        var q = n(29282),
          K = {};
        ((K.styleTagTransform = j()),
          (K.setAttributes = M()),
          (K.insert = P().bind(null, "head")),
          (K.domAPI = A()),
          (K.insertStyleElement = F()),
          Z()(q.Z, K),
          q.Z && q.Z.locals && q.Z.locals);
        const W = (e) => {
          const [t, n] = (0, o.useState)(e.zoom),
            r = (0, o.useCallback)(
              async (e) => {
                const t = e
                  ? await (0, v.k)().increaseZoom()
                  : await (0, v.k)().decreaseZoom();
                t &&
                  n((n) =>
                    ((e, t, n) => {
                      const r = Math.round(100 * t);
                      return (n ? r > e : r < e) ? r : e;
                    })(n, t, e),
                  );
              },
              [n],
            );
          return o.createElement(
            "div",
            { className: "zoom-container" },
            o.createElement(
              "div",
              { className: "zoom-button", onClick: () => (0, c.wK)(r(!1)) },
              o.createElement(z, null),
            ),
            o.createElement(
              "div",
              {
                className:
                  "zoom-value " +
                  ((0, c.IK)() ? "zoom-value-win32" : "zoom-value-other"),
              },
              t,
              "%",
            ),
            o.createElement(
              "div",
              { className: "zoom-button", onClick: () => (0, c.wK)(r(!0)) },
              o.createElement(G, null),
            ),
          );
        };
        var Y = n(46697),
          Q = {};
        ((Q.styleTagTransform = j()),
          (Q.setAttributes = M()),
          (Q.insert = P().bind(null, "head")),
          (Q.domAPI = A()),
          (Q.insertStyleElement = F()),
          Z()(Y.Z, Q),
          Y.Z && Y.Z.locals && Y.Z.locals);
        const J = new Map([
            [8, "theme"],
            [5, "title"],
            [2, "zoom"],
          ]),
          X = ({
            type: e,
            checked: t,
            cb: n,
            children: r,
            icon: a,
            shortcut: i,
            title: l,
            titleModifier: c,
            zoom: s,
            disabled: u,
          }) =>
            o.createElement(
              "div",
              {
                className: `menu-item ${J.get(e) ?? ""} ${t ? "active" : ""} ${u ? "disabled" : ""}`,
                onClick: (e) => {
                  (e.preventDefault(),
                    e.stopPropagation(),
                    n?.()?.catch((e) => {
                      (0, m.x$)().error("<Item>.onClick(): cb() error", e);
                    }));
                },
              },
              a &&
                o.createElement(
                  "div",
                  {
                    className:
                      "menu-item-icon " +
                      (4 === e ? "with-linking" : "without-linking"),
                  },
                  a,
                ),
              r,
              l &&
                o.createElement(
                  "div",
                  {
                    className: `menu-item-title ${a ? "" : "menu-item-title-without-icon"} ${c ?? ""}`,
                  },
                  o.createElement(
                    E.Z,
                    { tag: "span", name: "typography-regular-14px" },
                    l,
                  ),
                ),
              1 === e &&
                o.createElement("div", { className: "menu-item-shortcut" }, i),
              2 === e && s && o.createElement(W, { zoom: s }),
            ),
          ee = (e) => {
            const { tooltip: t, type: n, ...r } = e;
            return 7 === n
              ? o.createElement(o.Fragment, null)
              : 6 === n
                ? o.createElement(N, null)
                : o.createElement(
                    "li",
                    null,
                    t
                      ? o.createElement(
                          $,
                          { text: t, tooltipPosition: "top" },
                          o.createElement(X, { ...r, type: n }),
                        )
                      : o.createElement(X, { ...r, type: n }),
                  );
          };
        var te,
          ne,
          re = n(79621),
          oe = n(77701);
        (((ne = te || (te = {}))[(ne.NewTab = 0)] = "NewTab"),
          (ne[(ne.NewWindow = 1)] = "NewWindow"),
          (ne[(ne.Browser = 2)] = "Browser"));
        var ae = n(96486);
        const ie = new Map([
            ["Red", () => ae.ZP.t("Red")],
            ["Green", () => ae.ZP.t("Green")],
            ["Blue", () => ae.ZP.t("Blue")],
            ["Yellow", () => ae.ZP.t("Yellow")],
            ["Orange", () => ae.ZP.t("Orange")],
            ["Sky Blue", () => ae.ZP.t("Sky Blue")],
            ["Grapes Purple", () => ae.ZP.t("Grapes Purple")],
            ["Rose", () => ae.ZP.t("Rose")],
            ["Purple", () => ae.ZP.t("Purple")],
          ]),
          le = "1px solid",
          ce = new Map([
            ["Red", { background: "#F23645", border: `${le} #801922` }],
            ["Green", { background: "#4CAF50", border: `${le} #2E7D32` }],
            ["Blue", { background: "#3179F5", border: `${le} #1848CC` }],
            ["Yellow", { background: "#FDD835", border: `${le} #FBC02D` }],
            ["Orange", { background: "#FB8C00", border: `${le} #E65100` }],
            ["Sky Blue", { background: "#00BCD4", border: `${le} #00838F` }],
            [
              "Grapes Purple",
              { background: "#9C27B0", border: `${le} #6A1B9A` },
            ],
            ["Rose", { background: "#FF80AB", border: `${le} #D81B60` }],
            ["Purple", { background: "#651FFF", border: `${le} #311B92` }],
          ]);
        var se,
          ue,
          pe,
          de,
          me,
          he = n(98908);
        function ve() {
          return (
            (ve =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
            ve.apply(this, arguments)
          );
        }
        const ge = function (e) {
          return o.createElement(
            "svg",
            ve(
              {
                width: 28,
                height: 28,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e,
            ),
            se ||
              (se = o.createElement("path", {
                d: "M15 15h-1v6h1v-6Z",
                fill: "currentColor",
              })),
            ue ||
              (ue = o.createElement("path", {
                d: "M11 20v1h7v-1h-7Z",
                fill: "currentColor",
              })),
            pe ||
              (pe = o.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M4.4 7h9.2A1.4 1.4 0 0 1 15 8.4v6.2a1.4 1.4 0 0 1-1.4 1.4H4.4A1.4 1.4 0 0 1 3 14.6V8.4A1.4 1.4 0 0 1 4.4 7Zm0 1a.4.4 0 0 0-.4.4v6.2c0 .22.18.4.4.4h9.2a.4.4 0 0 0 .4-.4V8.4a.4.4 0 0 0-.4-.4H4.4Z",
                fill: "currentColor",
              })),
            de ||
              (de = o.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M15.4 7h9.2A1.4 1.4 0 0 1 26 8.4v6.2a1.4 1.4 0 0 1-1.4 1.4h-9.2a1.4 1.4 0 0 1-1.4-1.4V8.4A1.4 1.4 0 0 1 15.4 7Zm0 1a.4.4 0 0 0-.4.4v6.2c0 .22.18.4.4.4h9.2a.4.4 0 0 0 .4-.4V8.4a.4.4 0 0 0-.4-.4h-9.2Z",
                fill: "currentColor",
              })),
            me ||
              (me = o.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M4.4 7h9.2c.343 0 .657.123.9.328.243-.205.557-.328.9-.328h9.2A1.4 1.4 0 0 1 26 8.4v6.2a1.4 1.4 0 0 1-1.4 1.4h-9.2a1.4 1.4 0 0 1-.4-.058V20h3v1h-7v-1h3v-4.058a1.4 1.4 0 0 1-.4.058H4.4A1.4 1.4 0 0 1 3 14.6V8.4A1.4 1.4 0 0 1 4.4 7Zm9.6 7.6V8.4a.4.4 0 0 0-.4-.4H4.4a.4.4 0 0 0-.4.4v6.2c0 .22.18.4.4.4h9.2a.4.4 0 0 0 .4-.4Zm1-6.2v6.2c0 .22.18.4.4.4h9.2a.4.4 0 0 0 .4-.4V8.4a.4.4 0 0 0-.4-.4h-9.2a.4.4 0 0 0-.4.4Z",
                fill: "currentColor",
              })),
          );
        };
        var be;
        function fe() {
          return (
            (fe =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
            fe.apply(this, arguments)
          );
        }
        const we = function (e) {
          return o.createElement(
            "svg",
            fe(
              {
                width: 20,
                height: 20,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e,
            ),
            be ||
              (be = o.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M11.082 1.75a5.068 5.068 0 0 1 7.168 7.168l-3.23 3.23-.707-.707 3.23-3.23a4.068 4.068 0 1 0-5.754-5.754l-3.23 3.23-.707-.707 3.23-3.23ZM1.75 11.082a5.068 5.068 0 1 0 7.168 7.168l3.23-3.23-.707-.707-3.23 3.23a4.068 4.068 0 1 1-5.754-5.754l3.23-3.23-.707-.707-3.23 3.23Zm10.768-4.307-5.743 5.743.707.707 5.743-5.743-.707-.707Z",
                fill: "currentColor",
              })),
          );
        };
        var ye;
        function xe() {
          return (
            (xe =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
            xe.apply(this, arguments)
          );
        }
        const Ee = function (e) {
          return o.createElement(
            "svg",
            xe(
              {
                width: 17,
                height: 17,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e,
            ),
            ye ||
              (ye = o.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M7.9 9.1V17h1.2V9.1H17V7.9H9.1V0H7.9v7.9H0v1.2h7.9Z",
                fill: "currentColor",
              })),
          );
        };
        var ke;
        function Ze() {
          return (
            (Ze =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
            Ze.apply(this, arguments)
          );
        }
        const Ce = function (e) {
          return o.createElement(
            "svg",
            Ze(
              {
                width: 20,
                height: 20,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e,
            ),
            ke ||
              (ke = o.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M11.082 1.75a5.068 5.068 0 0 1 7.168 7.168l-3.23 3.23-.707-.707 3.23-3.23a4.068 4.068 0 1 0-5.754-5.754l-3.23 3.23-.707-.707 3.23-3.23ZM1.75 11.082a5.068 5.068 0 1 0 7.168 7.168l3.23-3.23-.707-.707-3.23 3.23a4.068 4.068 0 1 1-5.754-5.754l3.23-3.23-.707-.707-3.23 3.23Zm10.768-4.307-5.743 5.743.707.707 5.743-5.743-.707-.707Z",
                fill: "currentColor",
              })),
          );
        };
        var Ae;
        function Oe() {
          return (
            (Oe =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
            Oe.apply(this, arguments)
          );
        }
        const Pe = function (e) {
          return o.createElement(
            "svg",
            Oe(
              {
                width: 21,
                height: 19,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e,
            ),
            Ae ||
              (Ae = o.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M4.5 0A4.5 4.5 0 0 0 0 4.5v10A4.5 4.5 0 0 0 4.5 19H12v-1H4.5A3.5 3.5 0 0 1 1 14.5v-10A3.5 3.5 0 0 1 4.5 1H12V0H4.5Zm12.354 5.646a.5.5 0 0 0-.708.708L18.793 9H9a.5.5 0 0 0 0 1h9.793l-2.647 2.646a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5Z",
                fill: "currentColor",
              })),
          );
        };
        var Re;
        function Me() {
          return (
            (Me =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
            Me.apply(this, arguments)
          );
        }
        const Se = function (e) {
          return o.createElement(
            "svg",
            Me(
              {
                width: 18,
                height: 22,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e,
            ),
            Re ||
              (Re = o.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "m3.707 5 2.647 2.646-.708.708L1.793 4.5 5.646.646l.708.708L3.707 4H9a9 9 0 1 1-9 9h1a8 8 0 1 0 8-8H3.707Z",
                fill: "currentColor",
              })),
          );
        };
        var Fe;
        function Te() {
          return (
            (Te =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
            Te.apply(this, arguments)
          );
        }
        const je = function (e) {
          return o.createElement(
            "svg",
            Te(
              {
                width: 18,
                height: 16,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e,
            ),
            Fe ||
              (Fe = o.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M1.5 1a.5.5 0 0 0-.5.5V5H0V1.5A1.5 1.5 0 0 1 1.5 0H5v1H1.5Zm15 0H13V0h3.5A1.5 1.5 0 0 1 18 1.5V5h-1V1.5a.5.5 0 0 0-.5-.5ZM1 11v3.5a.5.5 0 0 0 .5.5H5v1H1.5A1.5 1.5 0 0 1 0 14.5V11h1Zm16 3.5V11h1v3.5a1.5 1.5 0 0 1-1.5 1.5H13v-1h3.5a.5.5 0 0 0 .5-.5Z",
                fill: "currentColor",
              })),
          );
        };
        var Ie;
        function Ve() {
          return (
            (Ve =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
            Ve.apply(this, arguments)
          );
        }
        const $e = function (e) {
          return o.createElement(
            "svg",
            Ve(
              {
                width: 16,
                height: 16,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e,
            ),
            Ie ||
              (Ie = o.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M2.5 0A2.5 2.5 0 0 0 0 2.5v11A2.5 2.5 0 0 0 2.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-3h-1v3a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 13.5v-11A1.5 1.5 0 0 1 2.5 1h3V0h-3Zm7 1h4.793l-7.48 7.48.707.707L15 1.707V6.5h1V0H9.5v1Z",
                fill: "currentColor",
              })),
          );
        };
        var De;
        function Be() {
          return (
            (Be =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
            Be.apply(this, arguments)
          );
        }
        const Ne = function (e) {
          return o.createElement(
            "svg",
            Be(
              {
                width: 18,
                height: 18,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e,
            ),
            De ||
              (De = o.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M4 1.5A1.5 1.5 0 0 1 5.5 0h11A1.5 1.5 0 0 1 18 1.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 4 12.5v-11ZM5.5 1a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-11Zm-4 4a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V15h1v1.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 16.5v-11A1.5 1.5 0 0 1 1.5 4H3v1H1.5Z",
                fill: "currentColor",
              })),
          );
        };
        var He;
        function Ue() {
          return (
            (Ue =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
            Ue.apply(this, arguments)
          );
        }
        const ze = function (e) {
          return o.createElement(
            "svg",
            Ue(
              {
                width: 15,
                height: 20,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e,
            ),
            He ||
              (He = o.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M7 15v5h1v-5h7v-.5a7.502 7.502 0 0 0-4-6.635V4.874c1.725-.444 3-2.01 3-3.874V0H1v1a4.002 4.002 0 0 0 3 3.874v2.991A7.501 7.501 0 0 0 0 14.5v.5h7Zm-5.981-1H13.98a6.502 6.502 0 0 0-3.448-5.25L10 8.467v-4.37l.75-.192A3.002 3.002 0 0 0 13 1H2c0 1.397.955 2.572 2.25 2.906l.75.193v4.369l-.533.281A6.501 6.501 0 0 0 1.02 14Z",
                fill: "currentColor",
              })),
          );
        };
        var _e;
        function Le() {
          return (
            (Le =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
            Le.apply(this, arguments)
          );
        }
        const Ge = function (e) {
          return o.createElement(
            "svg",
            Le(
              {
                width: 22,
                height: 18,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e,
            ),
            _e ||
              (_e = o.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M11 1a8.003 8.003 0 0 0-7.876 6.588l-.984-.176C2.89 3.2 6.57 0 11 0c4.329 0 7.943 3.055 8.805 7.128l1.28-1.907.83.558-2.293 3.414-3.4-2.278.556-.83 2.077 1.39A8.003 8.003 0 0 0 11 1ZM2.378 8.807l3.4 2.278-.556.83-2.077-1.39a8.003 8.003 0 0 0 15.73-.113l.985.176C19.11 14.8 15.43 18 11 18c-4.328 0-7.943-3.056-8.805-7.127l-1.28 1.906-.83-.558 2.293-3.414Z",
                fill: "currentColor",
              })),
          );
        };
        var qe;
        function Ke() {
          return (
            (Ke =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
            Ke.apply(this, arguments)
          );
        }
        const We = function (e) {
            return o.createElement(
              "svg",
              Ke(
                {
                  width: 20,
                  height: 21,
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                e,
              ),
              qe ||
                (qe = o.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M19.707.707 19 0 0 19l.707.707 19-19ZM3 1v1a4.002 4.002 0 0 0 3 3.874v2.991A7.501 7.501 0 0 0 2 15.5v.086l1.075-1.075a6.506 6.506 0 0 1 3.392-4.762L7 9.468v-4.37l-.75-.192A3.002 3.002 0 0 1 4 2h11l1-1H3Zm6 20h1v-5h7v-.5a7.502 7.502 0 0 0-4-6.635l-.734.743.267.141A6.502 6.502 0 0 1 15.98 15H6.832l-1.008 1H9v5Z",
                  fill: "currentColor",
                })),
            );
          },
          Ye = "⌘",
          Qe = { type: 6 },
          Je = { type: 7 };
        var Xe = n(42758),
          et = {};
        ((et.styleTagTransform = j()),
          (et.setAttributes = M()),
          (et.insert = P().bind(null, "head")),
          (et.domAPI = A()),
          (et.insertStyleElement = F()),
          Z()(Xe.Z, et),
          Xe.Z && Xe.Z.locals && Xe.Z.locals);
        const tt = ({ onClick: e, icon: t, text: n, type: r }) =>
          o.createElement(
            "button",
            { onClick: e, className: `update-app-menu-item ${r}` },
            t,
            o.createElement(
              E.Z,
              { tag: "span", name: "typography-regular-14px" },
              n,
            ),
          );
        var nt = n(42968),
          rt = n(16414),
          ot = n(62756),
          at = n(15671),
          it = {};
        function lt(e) {
          return e.includes("_trial");
        }
        ((it.styleTagTransform = j()),
          (it.setAttributes = M()),
          (it.insert = P().bind(null, "head")),
          (it.domAPI = A()),
          (it.insertStyleElement = F()),
          Z()(at.Z, it),
          at.Z && at.Z.locals && at.Z.locals);
        const ct = ({ userPlanBadgeName: e }) => {
          const t = (function (e) {
            switch (e) {
              case "pro:pro_expert":
                return "Expert";
              case "pro:pro_premium_expert":
                return "Ultimate";
              case "pro:pro_premium":
              case "pro:pro_premium_trial":
                return "Premium";
              case "pro:pro_realtime":
              case "pro:pro_realtime_trial":
                return "Plus";
              case "pro:pro":
              case "pro:pro_trial":
                return "Essential";
              default:
                return "";
            }
          })(e);
          return t
            ? o.createElement(
                ot.y,
                { className: lt(e) ? "trial" : "", size: rt.O.XSmall },
                " ",
                t,
                " ",
              )
            : o.createElement(o.Fragment, null);
        };
        var st;
        function ut() {
          return (
            (ut =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
            ut.apply(this, arguments)
          );
        }
        const pt = function (e) {
          return o.createElement(
            "svg",
            ut(
              { viewBox: "0 0 28 28", xmlns: "http://www.w3.org/2000/svg" },
              e,
            ),
            st ||
              (st = o.createElement("path", {
                d: "M14 5c-1.7 0-2.98.54-3.82 1.49A5.19 5.19 0 0 0 9 10c0 1.32.35 2.58 1.18 3.51.84.95 2.12 1.49 3.82 1.49 1.7 0 2.98-.54 3.82-1.49A5.19 5.19 0 0 0 19 10c0-1.32-.35-2.58-1.18-3.51C16.98 5.54 15.7 5 14 5Zm0 1.5c1.37 0 2.2.42 2.7.99.52.58.8 1.44.8 2.51a3.7 3.7 0 0 1-.8 2.51c-.5.57-1.33.99-2.7.99s-2.2-.42-2.7-.99a3.7 3.7 0 0 1-.8-2.51c0-1.07.28-1.93.8-2.51.5-.57 1.33-.99 2.7-.99Zm-3 12c-3 0-4.5 2.5-4.5 4.5H5c0-2.85 2.17-6 6-6h6c3.83 0 6 3.15 6 6h-1.5c0-2-1.5-4.5-4.5-4.5h-6Z",
                fill: "currentColor",
              })),
          );
        };
        var dt = n(82309),
          mt = {};
        ((mt.styleTagTransform = j()),
          (mt.setAttributes = M()),
          (mt.insert = P().bind(null, "head")),
          (mt.domAPI = A()),
          (mt.insertStyleElement = F()),
          Z()(dt.Z, mt),
          dt.Z && dt.Z.locals && dt.Z.locals);
        const ht = ({
          name: e,
          avatar: t,
          isAnonymous: n,
          isPro: r,
          userPlanBadgeName: a,
        }) => {
          const { t: i } = (0, s.$G)(),
            l = () => {
              (0, v.k)()
                .openUserPage(e)
                .catch((t) => {
                  (0, m.x$)().error(
                    `<UserCard>.onProfileClick(): mainMenuServiceProxy().openUserPage(name: ${e}) error`,
                    t,
                  );
                });
            };
          return o.createElement(
            "section",
            { className: "user-card" },
            n
              ? o.createElement(
                  o.Fragment,
                  null,
                  o.createElement(
                    "div",
                    { className: "user-card-avatar-container" },
                    o.createElement(pt, null),
                  ),
                  o.createElement(
                    "button",
                    {
                      className: "user-card-button sign-in",
                      onClick: () => {
                        (0, v.k)()
                          .signIn()
                          .catch((e) => {
                            (0, m.x$)().error(
                              "<UserCard>.onSignIn(): mainMenuServiceProxy().signIn() error",
                              e,
                            );
                          });
                      },
                      tabIndex: -1,
                    },
                    o.createElement(
                      E.Z,
                      { tag: "span", name: "typography-accent-14px-semibold" },
                      i("Sign in"),
                    ),
                  ),
                )
              : o.createElement(
                  o.Fragment,
                  null,
                  o.createElement(
                    "button",
                    {
                      className: "user-card-button avatar",
                      onClick: l,
                      tabIndex: -1,
                    },
                    o.createElement(nt.c, { logoUrl: t, size: "medium" }),
                  ),
                  o.createElement(
                    "button",
                    {
                      className: "user-card-button name",
                      onClick: l,
                      tabIndex: -1,
                    },
                    o.createElement(
                      E.Z,
                      { tag: "span", name: "typography-accent-14px-semibold" },
                      e,
                    ),
                    r && o.createElement(ct, { userPlanBadgeName: a }),
                  ),
                ),
          );
        };
        var vt;
        function gt() {
          return (
            (gt =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
            gt.apply(this, arguments)
          );
        }
        const bt = function (e) {
          return o.createElement(
            "svg",
            gt(
              { viewBox: "0 0 28 28", xmlns: "http://www.w3.org/2000/svg" },
              e,
            ),
            vt ||
              (vt = o.createElement("path", {
                fillRule: "evenodd",
                d: "M14 24a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm-.47-6.28 6.17-6-1.4-1.44-5.47 5.33-3.13-3.05-1.4 1.43 3.83 3.73.7.67.7-.67Z",
                fill: "currentColor",
              })),
          );
        };
        var ft;
        function wt() {
          return (
            (wt =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
            wt.apply(this, arguments)
          );
        }
        const yt = function (e) {
          return o.createElement(
            "svg",
            wt(
              { viewBox: "0 0 28 28", xmlns: "http://www.w3.org/2000/svg" },
              e,
            ),
            ft ||
              (ft = o.createElement("path", {
                d: "M14 24a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm.95-15.71v7.61h-1.9V8.3h1.9Zm0 10.47a.95.95 0 1 1-1.9 0 .95.95 0 0 1 1.9 0Z",
                fill: "currentColor",
              })),
          );
        };
        var xt = n(29813),
          Et = {};
        ((Et.styleTagTransform = j()),
          (Et.setAttributes = M()),
          (Et.insert = P().bind(null, "head")),
          (Et.domAPI = A()),
          (Et.insertStyleElement = F()),
          Z()(xt.Z, Et),
          xt.Z && xt.Z.locals && xt.Z.locals,
          d.i.initializeRpc(),
          p.P.exists || p.P.initialize((0, u.kS)()));
        const kt = (e) => {
          const { t } = (0, s.$G)(),
            n = (0, o.useRef)(null),
            [a, i] = (0, o.useState)((0, c.Um)()),
            [l, u] = (0, o.useState)(!1),
            [p, d] = (0, o.useState)(),
            [g, b] = (0, o.useState)();
          if (
            ((0, o.useLayoutEffect)(() => {
              (0, c.Um)() ||
                setTimeout(() => {
                  i(!0);
                }, 100);
            }),
            (0, o.useEffect)(() => {
              d(w());
            }, []),
            (0, o.useEffect)(() => {
              b(e.menuItems);
            }, [e.menuItems]),
            (0, o.useEffect)(() => {
              p &&
                (0, h.D0)(p.locale)
                  .then(() => {
                    if (p.type === r.Main) {
                      const {
                        isDebugMode: e,
                        undoLabel: n,
                        zoom: r,
                        isValidClipboard: a,
                      } = p;
                      b(
                        (function ({
                          isDebugMode: e,
                          showFirstSeparator: t,
                          t: n,
                          undoLabel: r,
                          zoom: a,
                          isValidClipboard: i,
                        }) {
                          const l = {
                              type: 1,
                              title: n("Settings"),
                              icon: o.createElement(re.J, {
                                icon: oe.M,
                                className: "ui-lib-icon",
                              }),
                              shortcut: (0, c.Um)() ? `${Ye} ,` : "Ctrl + ,",
                              cb: (0, v.k)().showSettings,
                            },
                            s = {
                              type: a ? 2 : 7,
                              title: n("Zoom"),
                              icon: o.createElement(je, null),
                              zoom: a,
                            },
                            u = {
                              type: 1,
                              title: n("New Tab"),
                              icon: o.createElement(Ee, null),
                              shortcut: (0, c.Um)() ? `${Ye}T` : "Ctrl + T",
                              cb: (0, v.k)().createNewTab,
                            },
                            p = {
                              type: 1,
                              title: n("New Window"),
                              icon: o.createElement(ge, null),
                              shortcut: (0, c.Um)() ? `${Ye}N` : "Ctrl + N",
                              cb: (0, v.k)().createNewWindow,
                            },
                            d = {
                              type: r ? 1 : 7,
                              title: r,
                              icon: o.createElement(Se, null),
                              shortcut: (0, c.Um)()
                                ? `⇧${Ye}T`
                                : "Ctrl + Shift + T",
                              cb: (0, v.k)().undo,
                            },
                            h = {
                              type: 0,
                              title: n("Open link from clipboard"),
                              disabled: !i,
                              tooltip: i
                                ? void 0
                                : n("No link to chart copied"),
                              icon: o.createElement(Ce, null),
                              cb: () => {
                                i
                                  ? (0, v.k)()
                                      .openLinkFromClipboard()
                                      .catch((e) => {
                                        (0, m.x$)().error(
                                          "<Menu>.getMenuItems(): mainMenuServiceProxy().openLinkFromClipboard() error",
                                          e,
                                        );
                                      })
                                  : (0, m.x$)().debug(
                                      "<MenuItem>.cb: Invalid url in clipboard",
                                    );
                              },
                            },
                            g = {
                              type: 8,
                              children: o.createElement(he.J, {
                                tabIndex: -1,
                                afterThemeIsChangedCb: (0, v.k)().hideMenu,
                                size: "small",
                              }),
                            },
                            b = {
                              type: 1,
                              title: (0, c.IK)()
                                ? n("Exit TradingView")
                                : n("Quit TradingView"),
                              icon: o.createElement(Pe, null),
                              shortcut: (0, c.Um)()
                                ? `${Ye}Q`
                                : "Ctrl + Shift + Q",
                              cb: (0, v.k)().exit,
                            },
                            f = {
                              type: e ? 0 : 7,
                              title: n("Open Crash View"),
                              cb: (0, v.k)().openCrashView,
                            };
                          return [
                            t ? Qe : Je,
                            l,
                            u,
                            p,
                            d,
                            h,
                            Qe,
                            s,
                            a ? Qe : Je,
                            g,
                            Qe,
                            b,
                            e ? Qe : Je,
                            f,
                          ];
                        })({
                          isDebugMode: e,
                          showFirstSeparator:
                            !p?.isUpdateAvailable && !p?.dontMeetRequirements,
                          t,
                          undoLabel: n,
                          zoom: r,
                          isValidClipboard: a,
                        }),
                      );
                    }
                    if (p.type === r.Tab) {
                      const {
                        isDebugMode: e,
                        tabId: n,
                        copyLink: r,
                        pinned: a,
                        isDetachTabVisible: i,
                        isCloseOtherTabsVisible: l,
                        isCloseTabsToTheRightVisible: s,
                        canGoBack: u,
                        canGoForward: d,
                        linkingTabState: m,
                        isLinkable: h,
                      } = p;
                      b(
                        (function ({
                          t: e,
                          isDebugMode: t,
                          tabId: n,
                          copyLink: r,
                          pinned: a,
                          isDetachTabVisible: i,
                          isCloseOtherTabsVisible: l,
                          isCloseTabsToTheRightVisible: s,
                          canGoBack: u,
                          canGoForward: p,
                          linkingTabState: d,
                          isLinkable: m,
                        }) {
                          const h = (function (e, t, n, r) {
                              if (!n && !r) return [];
                              const o = {
                                  type: n ? 1 : 7,
                                  title: e("Go Back"),
                                  shortcut: "",
                                  cb: () => {
                                    t && y().goBackFromMenu(t);
                                  },
                                },
                                a = {
                                  type: r ? 1 : 7,
                                  title: e("Go Forward"),
                                  shortcut: "",
                                  cb: () => {
                                    t && y().goForwardFromMenu(t);
                                  },
                                };
                              return [Qe, o, a];
                            })(e, n, u, p),
                            v = n
                              ? (function ({
                                  t: e,
                                  tabId: t,
                                  linkingTabState: n,
                                  isLinkable: r,
                                }) {
                                  if (!r) return [];
                                  const a = {
                                      type: 5,
                                      title: e("Symbol syncing"),
                                      titleModifier:
                                        "menu-item-title-tab-subtitle",
                                    },
                                    i = [];
                                  for (const [e, r] of ie.entries()) {
                                    const a = n?.color === e,
                                      l = {
                                        type: 4,
                                        icon: o.createElement("div", {
                                          className: "linking-icon",
                                          style: { ...ce.get(e) },
                                        }),
                                        title: r(),
                                        cb: () => {
                                          a
                                            ? y().unlinkFromMenu(e, t)
                                            : y().linkFromMenu(e, t);
                                        },
                                        checked: a,
                                      };
                                    i.push(l);
                                  }
                                  return [Qe, a, ...i];
                                })({
                                  t: e,
                                  tabId: n,
                                  linkingTabState: d,
                                  isLinkable: m,
                                })
                              : [],
                            g = {
                              type: 1,
                              title: e("Duplicate tab"),
                              icon: o.createElement(Ne, null),
                              shortcut: (0, c.Um)() ? `${Ye}U` : "Ctrl + U",
                              cb: () => {
                                n && y().duplicateTabFromMenu(n);
                              },
                            },
                            b = {
                              type: 1,
                              title: e("Reload tab"),
                              icon: o.createElement(Ge, null),
                              shortcut: (0, c.Um)() ? `${Ye}R` : "Ctrl + R",
                              cb: () => {
                                n && y().reloadTabFromMenu(n);
                              },
                            },
                            f = {
                              type: r ? 1 : 7,
                              title: e("Copy link"),
                              icon: o.createElement(we, null),
                              shortcut: "",
                              cb: () => {
                                r && y().copyLink(r);
                              },
                            },
                            w = {
                              type: 0,
                              title: e(a ? "Unpin tab" : "Pin tab"),
                              icon: a
                                ? o.createElement(We, null)
                                : o.createElement(ze, null),
                              shortcut: "",
                              cb: () => {
                                n && y().togglePinnedTabFromMenu(n, !a);
                              },
                            },
                            x = {
                              type: i ? 1 : 7,
                              title: e("Detach tab"),
                              icon: o.createElement($e, null),
                              shortcut: "",
                              cb: () => {
                                n && y().detachTabAction(n);
                              },
                            },
                            E = {
                              type: 1,
                              title: e("Close"),
                              shortcut: (0, c.Um)() ? `${Ye}W` : "Ctrl + W",
                              cb: () => {
                                n && y().closeTabFromMenu(n);
                              },
                            },
                            k = {
                              type: l ? 1 : 7,
                              title: e("Close other tabs"),
                              shortcut: "",
                              cb: () => {
                                n && y().closeOtherTabsFromMenu(n);
                              },
                            },
                            Z = {
                              type: s ? 1 : 7,
                              title: e("Close tabs to the right"),
                              shortcut: "",
                              cb: () => {
                                n && y().closeTabsToTheRightFromMenu(n);
                              },
                            },
                            C = {
                              type: t ? 0 : 7,
                              title: e("Developer tools"),
                              shortcut: "",
                              cb: () => {
                                n && y().openTabDevTools(n);
                              },
                            };
                          return [g, b, f, w, x, ...h, Qe, E, k, Z, C, ...v];
                        })({
                          t,
                          isDebugMode: e,
                          tabId: n,
                          copyLink: r,
                          pinned: a,
                          isDetachTabVisible: i,
                          isCloseOtherTabsVisible: l,
                          isCloseTabsToTheRightVisible: s,
                          canGoBack: u,
                          canGoForward: d,
                          linkingTabState: m,
                          isLinkable: h,
                        }),
                      );
                    }
                    u(!0);
                  })
                  .catch((e) => {
                    (0, m.x$)().error(
                      "<Menu>.useEffect: changeLanguage() error",
                      e,
                    );
                  });
            }, [p]),
            (0, x.O3)(
              n,
              a,
              () => {
                ((0, v.k)()
                  .hideMenu()
                  .catch((e) => {
                    (0, m.x$)().error(
                      "<Menu>.useOutsideClick callback: mainMenuServiceProxy().hideMenu() error",
                      e,
                    );
                  }),
                  y().hideMenu());
              },
              { escape: !0 },
            ),
            !a || (!l && e.type !== r.Context))
          )
            return o.createElement(o.Fragment, null);
          const f = p?.isInFullscreen
            ? {
                margin: p?.position
                  ? `${p.position.y}px 0 0 ${p.position.x}px`
                  : "35px 4px 0 0",
              }
            : {};
          return o.createElement(
            "div",
            {
              className:
                "menu-container " +
                (p?.type && p.type === r.Tab
                  ? "menu-container-tab"
                  : "menu-container-main"),
            },
            o.createElement(
              "div",
              {
                style: f,
                ref: n,
                className:
                  "menu-content " +
                  (e.type === r.Context
                    ? "menu-content-context"
                    : "menu-content-with-margin"),
              },
              p?.user &&
                o.createElement(ht, {
                  avatar: p.user.avatar,
                  userPlanBadgeName: p.user.userPlanBadgeName,
                  isAnonymous: p.user.isAnonymous,
                  isPro: p.user.isPro,
                  name: p.user.name,
                }),
              p?.isUpdateAvailable &&
                o.createElement(tt, {
                  onClick: (e) => {
                    (e.stopPropagation(),
                      (0, v.k)()
                        .updateAndRelaunch()
                        .catch((e) => {
                          (0, m.x$)().error(
                            "<Menu>.updateAndRelaunch(): mainMenuServiceProxy().updateAndRelaunch() error",
                            e,
                          );
                        }));
                  },
                  icon: o.createElement(bt, null),
                  text: t("Relaunch for update"),
                  type: "available",
                }),
              p?.dontMeetRequirements &&
                o.createElement(tt, {
                  onClick: (e) => {
                    (e.stopPropagation(),
                      (0, v.k)()
                        .openLink(
                          "https://www.tradingview.com/?solution=43000706464",
                        )
                        .catch((e) => {
                          (0, m.x$)().error(
                            "<Menu>.openUnableUpdateAppHelp(): mainMenuServiceProxy().openLink() error",
                            e,
                          );
                        }));
                  },
                  icon: o.createElement(yt, null),
                  text: t("Can't update app"),
                  type: "warning",
                }),
              o.createElement(
                "ul",
                { className: "menu-items" },
                g?.map((e, t) =>
                  o.createElement(ee, { ...e, key: e.title ?? t }),
                ),
              ),
            ),
          );
        };
        (n(96893),
          (0, i.s)(),
          (0, c.mU)(l.Z),
          l.Z.on("languageChanged", () => {
            (0, c.mU)(l.Z);
          }));
        const Zt = document.getElementById("root");
        Zt &&
          (Zt.classList.remove("invisible-root"),
          (0, a.s)(Zt).render(o.createElement(kt, null)));
      },
      31937: (e, t, n) => {
        n.d(t, { Y: () => i, V: () => l });
        var r = n(54041),
          o = n(10496),
          a = n(98886);
        let i;
        class l {
          onRequestSubject = new r.Subject();
          onResponseSubject = new r.Subject();
          onRequest = this.onRequestSubject.asObservable();
          onResponse = this.onResponseSubject.asObservable();
          constructor() {
            (this.onMessage(a.f, (e, t) => {
              const n = {
                ...t,
                responseChannel: this.makeResponseChannel(e),
                context: e,
              };
              try {
                ((i = e), this.onRequestSubject.next(n));
              } finally {
                i = void 0;
              }
            }),
              this.onMessage(a.B, (e, t) => {
                try {
                  this.onResponseSubject.next(t);
                } catch (e) {
                  throw (
                    (0, o.n_)({
                      level: "error",
                      breadcrumb: `[BaseIpcInbox.constructor()]: onMessage() error: ${JSON.stringify(t)}`,
                    }),
                    e
                  );
                }
              }));
          }
        }
      },
      79946: (e, t, n) => {
        n.d(t, {
          VT: () => l,
          rs: () => u,
          kS: () => p,
          yd: () => d,
          Ry: () => m,
          P3: () => v,
          Q2: () => g,
        });
        var r = n(72298),
          o = n(31937),
          a = n(98886),
          i = n(28321);
        class l {
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
            const o = {
              headers: { ...e.headers, success: !1, failure: r },
              body: {},
            };
            (n && (o.headers.stack = n), e.responseChannel(o));
          }
          static rethrowIfException(e) {
            if (!l.hasHeader(e, "success"))
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
            return (l.rethrowIfException(e), e.body);
          }
          static get requestContext() {
            return o.Y;
          }
        }
        let c = null,
          s = null;
        function u() {
          return (c || (c = new i.B()), c);
        }
        function p() {
          return (s || (s = new i.n()), s);
        }
        const d = function (e) {
          r.ipcRenderer.send(a.f, e);
        };
        function m(e) {
          return function (t) {
            e && !e.isDestroyed() && e.send(a.f, t);
          };
        }
        let h;
        function v(e) {
          if (void 0 !== h)
            throw new Error(
              "Service host instance already registered for current process",
            );
          h = e;
        }
        function g() {
          if (!h)
            throw new Error(
              "Service host instance not registered for current process",
            );
          return h;
        }
      },
      10496: (e, t, n) => {
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
      43891: (e, t, n) => {
        n.d(t, { D: () => a });
        var r = n(96486),
          o = n(52296);
        const a = async (e) => {
          o.Z.language !== e && (await r.ZP.changeLanguage(e));
        };
      },
      52296: (e, t, n) => {
        n.d(t, { Z: () => d });
        var r = n(71017),
          o = n(72298),
          a = n(96486),
          i = n(94102),
          l = n(5306),
          c = n(46628),
          s = n(29060),
          u = n(9448);
        let p;
        if (o.ipcMain) {
          function m() {
            const e = {},
              t = r.join(o.app.getAppPath(), "resources", "locales");
            for (const n of c.P.readDirSync(t)) {
              const o = c.P.readFileSync(r.join(t, n)),
                a = r.parse(n).name,
                i = (0, u.o)(o);
              i && (e[a] = { translation: i });
            }
            return e;
          }
          ((p = m()),
            o.ipcMain.on(s.og, (e) => {
              e.returnValue = p;
            }));
        } else p = o.ipcRenderer.sendSync(s.og);
        a.ZP.use(i.Z)
          .use(l.Db)
          .init({
            keySeparator: "::",
            nsSeparator: ":::",
            resources: p,
            fallbackLng: "en",
            returnEmptyString: !1,
            interpolation: { escapeValue: !1 },
          });
        const d = a.ZP;
      },
      5778: (e, t, n) => {
        n.d(t, { R: () => r });
        const r = "tvd:locale-service";
      },
      55622: (e, t, n) => {
        n.d(t, { D0: () => a.D, X: () => l });
        var r = n(72298),
          o = n(36458),
          a = (n(13855), n(52296), n(43891)),
          i = n(5778);
        function l() {
          return o.i.provideProxy(i.R);
        }
        r.ipcMain;
      },
      95240: (e, t, n) => {
        n.d(t, { l: () => r });
        const r = "tvd:main-menu-service";
      },
      29265: (e, t, n) => {
        n.d(t, { k: () => a });
        var r = n(36458),
          o = n(95240);
        function a() {
          return r.i.provideProxy(o.l);
        }
      },
      91115: (e, t, n) => {
        (n(36458), n(82170));
      },
      82170: (e, t, n) => {
        var r, o;
        (!(function (e) {
          ((e[(e.Ask = 0)] = "Ask"), (e[(e.CheckOnly = 1)] = "CheckOnly"));
        })(r || (r = {})),
          (function (e) {
            ((e.Window = "isWindow"),
              (e.App = "isApp"),
              (e.Chart = "isChart"),
              (e.Debug = "isDebug"));
          })(o || (o = {})));
      },
      29060: (e, t, n) => {
        n.d(t, { og: () => r });
        const r = "tvd:locale-get-translations";
      },
      41029: (e, t, n) => {
        (n.d(t, { Um: () => r.Um, IK: () => r.IK }), n(96486), n(16693));
        var r = n(87269);
      },
      59391: (e, t, n) => {
        n.d(t, {
          wK: () => r.wK,
          _v: () => r._v,
          Um: () => o.Um,
          IK: () => o.IK,
          mR: () => a.mR,
          mU: () => i.mU,
        });
        var r = n(95091),
          o = n(41029),
          a = n(67644),
          i = n(26063);
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
        function r(e) {
          document.dir = (function (e) {
            return e.dir(e.language.split("_")[0]);
          })(e);
        }
        n.d(t, { mU: () => r });
      },
      87269: (e, t, n) => {
        n.d(t, { Um: () => r, IK: () => o });
        const r = () => "darwin" === process.platform,
          o = () => "win32" === process.platform;
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
    },
    o = {};
  function a(e) {
    var t = o[e];
    if (void 0 !== t) return t.exports;
    var n = (o[e] = { id: e, exports: {} });
    return (r[e].call(n.exports, n, n.exports, a), n.exports);
  }
  ((a.m = r),
    (e = []),
    (a.O = (t, n, r, o) => {
      if (!n) {
        var i = 1 / 0;
        for (u = 0; u < e.length; u++) {
          for (var [n, r, o] = e[u], l = !0, c = 0; c < n.length; c++)
            (!1 & o || i >= o) && Object.keys(a.O).every((e) => a.O[e](n[c]))
              ? n.splice(c--, 1)
              : ((l = !1), o < i && (i = o));
          if (l) {
            e.splice(u--, 1);
            var s = r();
            void 0 !== s && (t = s);
          }
        }
        return t;
      }
      o = o || 0;
      for (var u = e.length; u > 0 && e[u - 1][2] > o; u--) e[u] = e[u - 1];
      e[u] = [n, r, o];
    }),
    (a.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return (a.d(t, { a: t }), t);
    }),
    (n = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (a.t = function (e, r) {
      if ((1 & r && (e = this(e)), 8 & r)) return e;
      if ("object" == typeof e && e) {
        if (4 & r && e.__esModule) return e;
        if (16 & r && "function" == typeof e.then) return e;
      }
      var o = Object.create(null);
      a.r(o);
      var i = {};
      t = t || [null, n({}), n([]), n(n)];
      for (var l = 2 & r && e; "object" == typeof l && !~t.indexOf(l); l = n(l))
        Object.getOwnPropertyNames(l).forEach((t) => (i[t] = () => e[t]));
      return ((i.default = () => e), a.d(o, i), o);
    }),
    (a.d = (e, t) => {
      for (var n in t)
        a.o(t, n) &&
          !a.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (a.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (a.r = (e) => {
      ("undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 }));
    }),
    (() => {
      var e;
      a.g.importScripts && (e = a.g.location + "");
      var t = a.g.document;
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
        (a.p = e + "../"));
    })(),
    (() => {
      a.b = document.baseURI || self.location.href;
      var e = { 8860: 0 };
      a.O.j = (t) => 0 === e[t];
      var t = (t, n) => {
          var r,
            o,
            [i, l, c] = n,
            s = 0;
          if (i.some((t) => 0 !== e[t])) {
            for (r in l) a.o(l, r) && (a.m[r] = l[r]);
            if (c) var u = c(a);
          }
          for (t && t(n); s < i.length; s++)
            ((o = i[s]), a.o(e, o) && e[o] && e[o][0](), (e[i[s]] = 0));
          return a.O(u);
        },
        n = (global.webpackChunktradingview_desktop =
          global.webpackChunktradingview_desktop || []);
      (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
    })());
  var i = a.O(
    void 0,
    [7498, 686, 8078, 1070, 6486, 4168, 4409, 819, 2184, 1296, 7734],
    () => a(77582),
  );
  i = a.O(i);
})();
