"use strict";
(global.webpackChunktradingview_desktop =
  global.webpackChunktradingview_desktop || []).push([
  [1160],
  {
    76346: (t, e, n) => {
      n.d(e, { Z: () => s });
      var r = n(43392),
        o = n.n(r),
        a = n(8021),
        i = n.n(a)()(o());
      i.push([
        t.id,
        ".create-new-tab-button {\n\tposition: absolute;\n\twidth: 27px;\n\theight: 27px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tbackground-color: transparent;\n\tmargin: 4px;\n\tborder: none;\n\tborder-radius: 6px;\n\toutline: none;\n\n\t& > svg {\n\t\twidth: 13px;\n\t\theight: 13px;\n\t\tcolor: var(--color-content-primary-neutral);\n\t}\n\n\t.app:not(.active) &:hover {\n\t\tbackground-color: var(--color-container-fill-primary-neutral-light);\n\t}\n\n\t.app.active &:hover {\n\t\tbackground-color: var(--color-container-fill-primary-neutral-extra-light);\n\t}\n}\n",
        "",
      ]);
      const s = i;
    },
    30586: (t, e, n) => {
      n.d(e, { Z: () => s });
      var r = n(43392),
        o = n.n(r),
        a = n(8021),
        i = n.n(a)()(o());
      i.push([
        t.id,
        ".tab-panel-divider {\n\twidth: 1px;\n\theight: 22px;\n\tbackground-color: var(--color-border-secondary-neutral-normal);\n}\n",
        "",
      ]);
      const s = i;
    },
    56606: (t, e, n) => {
      n.d(e, { Z: () => s });
      var r = n(43392),
        o = n.n(r),
        a = n(8021),
        i = n.n(a)()(o());
      i.push([
        t.id,
        ".tabs {\n\t-webkit-app-region: none;\n\tgrid-area: tabs;\n\tmax-width: 100%;\n\tdisplay: flex;\n\tflex-flow: row nowrap;\n\toverflow-x: scroll;\n\n\t&::-webkit-scrollbar {\n\t\tdisplay: none;\n\t}\n}\n\n.tabs-container {\n\tdisplay: inherit;\n\talign-items: center;\n\tmargin-right: 35px; /* required to move draggable-area so the CreateNewTabButton would work */\n}\n\n.draggable-area {\n\t-webkit-app-region: drag;\n\twidth: 100%;\n\tmin-width: 50px;\n\tflex-shrink: 10;\n}\n\n@media screen and (max-width: 599px) {\n\t.draggable-area {\n\t\tmin-width: 20px;\n\t}\n}\n",
        "",
      ]);
      const s = i;
    },
    64089: (t, e, n) => {
      n.d(e, { Z: () => s });
      var r = n(43392),
        o = n.n(r),
        a = n(8021),
        i = n.n(a)()(o());
      i.push([
        t.id,
        ".extender {\n\tposition: absolute;\n\tdisplay: none;\n\tbottom: 0;\n\twidth: 6px;\n\theight: 6px;\n\toverflow: hidden;\n\n\t/* app NOT active, tab hovered, tab NOT active */\n\t.app:not(.active) .tab:not(.active):hover & {\n\t\tdisplay: flex;\n\t\tcolor: var(--color-container-fill-secondary-neutral-extra-light);\n\t}\n\n\t/* app active, tab hovered, tab NOT active */\n\t.app.active .tab:not(.active):hover & {\n\t\tdisplay: flex;\n\t\tcolor: var(--color-container-fill-secondary-neutral-thin);\n\t}\n\n\t/* tab active */\n\t.app:not(.active) .tab.active &,\n\t.app.active .tab.active & {\n\t\tdisplay: flex;\n\t\tcolor: var(--color-container-fill-secondary-inverse);\n\t}\n\n\t&.left {\n\t\tleft: -6px;\n\t}\n\n\t&.right {\n\t\tright: -6px;\n\n\t\t& > svg {\n\t\t\ttransform: scale(-1, 1);\n\t\t}\n\t}\n}\n",
        "",
      ]);
      const s = i;
    },
    27469: (t, e, n) => {
      n.d(e, { Z: () => s });
      var r = n(43392),
        o = n.n(r),
        a = n(8021),
        i = n.n(a)()(o());
      i.push([
        t.id,
        "[dir='ltr'] {\n\t--fadeout-gradient-direction: 90deg;\n}\n\n[dir='rtl'] {\n\t--fadeout-gradient-direction: 270deg;\n}\n\n.tab {\n\t-webkit-app-region: none;\n\tposition: relative;\n\tmin-width: 25px;\n\theight: 100%;\n\tbox-sizing: border-box;\n\tdisplay: grid;\n\tgrid-template-columns: minmax(0, auto) 1fr auto;\n\tgrid-template-rows: 1fr 3px;\n\talign-items: center;\n\tflex-basis: 250px;\n\tflex-shrink: 1;\n\tborder-radius: 4px 4px 0 0;\n\tcursor: default !important;\n\n\t[dir='ltr'] & {\n\t\tgrid-template-areas: \"layout-icon title close\";\n\t\tpadding: 0 8px 0 12px;\n\t}\n\n\t[dir='rtl'] & {\n\t\tgrid-template-areas: \"close title layout-icon\";\n\t\tpadding: 0 12px 0 8px;\n\t}\n\n\t&:first-of-type {\n\t\t.app.win,\n\t\t.app.darwin.fullscreen & {\n\t\t\tborder-top-left-radius: 0;\n\t\t}\n\t}\n\n\t/* app NOT active, tab NOT hovered, tab NOT active */\n\t.app:not(.active) &:not(.active) {\n\t\tbackground-color: transparent;\n\t}\n\n\t/* app NOT active, tab hovered, tab NOT active */\n\t.app:not(.active) &:not(.active):hover {\n\t\tbackground-color: var(--color-container-fill-secondary-neutral-extra-light);\n\t\tz-index: 1;\n\t}\n\n\t/* app active, tab NOT hovered, tab NOT active */\n\t.app.active &:not(.active) {\n\t\tbackground-color: transparent;\n\t}\n\n\t/* app active, tab hovered, tab NOT active */\n\t.app.active &:not(.active):hover {\n\t\tbackground-color: var(--color-container-fill-secondary-neutral-thin);\n\t\tz-index: 1;\n\t}\n\n\t/* tab active */\n\t.app:not(.active) &.active,\n\t.app.active &.active {\n\t\tbackground-color: var(--color-container-fill-secondary-inverse);\n\t\tz-index: 2;\n\n\t\t&.xxsmall {\n\t\t\tgrid-template-columns: 1fr;\n\t\t\tgrid-template-areas: \"close\";\n\t\t\talign-items: center;\n\t\t\tjustify-content: center;\n\t\t\tpadding: 0 10px;\n\n\t\t\t& > .tab-link-indicator {\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t}\n\t}\n\n\t& > .tab-panel-divider {\n\t\tposition: absolute;\n\t\tright: 0;\n\t}\n\n\t/* do not show divider for: */\n\t/* tab preceding hovered inactive tab */\n\t&:has(+ &:not(.active):hover) > .tab-panel-divider,\n\t/* hovered inactive tab */\n\t&:not(.active):hover > .tab-panel-divider,\n\t/* tab preceding active */\n\t&:has(+ &.active) > .tab-panel-divider,\n\t/* active tab */\n\t&.active > .tab-panel-divider {\n\t\tdisplay: none;\n\t}\n}\n\n.tab-link-indicator {\n\theight: 3px;\n\tbox-sizing: border-box;\n\tbackground-color: transparent;\n\tgrid-row: 2;\n\tgrid-column: 1/span2;\n\tz-index: 99;\n\talign-self: center;\n\tmargin: 0 4px 0 0;\n\tborder-radius: 3px;\n}\n\n.tab-title {\n\tdisplay: flex;\n\talign-items: center;\n\tgrid-area: title;\n\tgrid-row: 1/span2;\n\toverflow: hidden;\n\twhite-space: nowrap;\n\n\t.tab.active > &.xxsmall {\n\t\tdisplay: none;\n\t}\n\n\t[dir='ltr'] & {\n\t\tjustify-content: flex-start;\n\t}\n\n\t[dir='rtl'] & {\n\t\tjustify-content: flex-end;\n\t}\n}\n\n.tab-close-button-container {\n\tgrid-area: close;\n\tgrid-row: 1/span2;\n\tposition: relative;\n\theight: 100%;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.fadeout {\n\tposition: absolute;\n\twidth: 36px;\n\theight: 18px;\n\n\t/* normal tab size */\n\t[dir='ltr'] & {\n\t\tleft: -36px;\n\t}\n\n\t[dir='rtl'] & {\n\t\tright: -36px;\n\t}\n\n\t/* small tab size */\n\t.tab.small > .tab-close-button-container > & {\n\t\twidth: 24px;\n\t}\n\n\t[dir='ltr'] .tab.small > .tab-close-button-container > & {\n\t\tleft: -24px;\n\t}\n\n\t[dir='rtl'] .tab.small > .tab-close-button-container > & {\n\t\tright: -24px;\n\t}\n\n\t/* xsmall and xxsmall tab sizes */\n\t.tab.xsmall > .tab-close-button-container > &,\n\t.tab.xxsmall > .tab-close-button-container > & {\n\t\twidth: 16px;\n\t}\n\n\t[dir='ltr'] .tab.xsmall > .tab-close-button-container > &,\n\t[dir='ltr'] .tab.xxsmall > .tab-close-button-container > & {\n\t\tleft: -16px;\n\t}\n\n\t[dir='rtl'] .tab.xsmall > .tab-close-button-container > &,\n\t[dir='rtl'] .tab.xxsmall > .tab-close-button-container > & {\n\t\tright: -16px;\n\t}\n\n\t.tab.active.xxsmall > .tab-close-button-container > & {\n\t\tdisplay: none;\n\t}\n\n\t/* app NOT active, tab NOT hovered, tab NOT active */\n\t.app:not(.active) .tab:not(.active) > .tab-close-button-container > & {\n\t\tbackground: linear-gradient(\n\t\t\tvar(--fadeout-gradient-direction),\n\t\t\ttransparent,\n\t\t\tvar(--color-container-fill-secondary-neutral-thin)\n\t\t);\n\t}\n\n\t/* app active, tab NOT hovered, tab NOT active */\n\t.app.active .tab:not(.active) > .tab-close-button-container > & {\n\t\tbackground: linear-gradient(\n\t\t\tvar(--fadeout-gradient-direction),\n\t\t\ttransparent,\n\t\t\tvar(--color-container-fill-primary-neutral-light)\n\t\t);\n\t}\n\n\t/* app NOT active, tab hovered, tab NOT active */\n\t.app:not(.active) .tab:not(.active):hover > .tab-close-button-container > & {\n\t\tbackground: linear-gradient(\n\t\t\tvar(--fadeout-gradient-direction),\n\t\t\ttransparent,\n\t\t\tvar(--color-container-fill-secondary-neutral-extra-light)\n\t\t);\n\t}\n\n\t/* app active, tab hovered, tab NOT active */\n\t.app.active .tab:not(.active):hover > .tab-close-button-container > & {\n\t\tbackground: linear-gradient(\n\t\t\tvar(--fadeout-gradient-direction),\n\t\t\ttransparent,\n\t\t\tvar(--color-container-fill-secondary-neutral-thin)\n\t\t);\n\t}\n\n\t/* tab active */\n\t.app:not(.active) .tab.active > .tab-close-button-container > &,\n\t.app.active .tab.active > .tab-close-button-container > & {\n\t\tbackground: linear-gradient(\n\t\t\tvar(--fadeout-gradient-direction),\n\t\t\ttransparent,\n\t\t\tvar(--color-container-fill-secondary-inverse)\n\t\t);\n\t}\n}\n",
        "",
      ]);
      const s = i;
    },
    68902: (t, e, n) => {
      var r = n(25211),
        o = n.n(r),
        a = n(62962),
        i = n.n(a),
        s = n(20310),
        l = n.n(s),
        c = n(29290),
        d = n.n(c),
        p = n(47289),
        u = n.n(p),
        h = n(24834),
        b = n.n(h),
        v = n(56606),
        g = {};
      ((g.styleTagTransform = b()),
        (g.setAttributes = d()),
        (g.insert = l().bind(null, "head")),
        (g.domAPI = i()),
        (g.insertStyleElement = u()),
        o()(v.Z, g),
        v.Z && v.Z.locals && v.Z.locals);
    },
    69478: (t, e, n) => {
      n.d(e, { nb: () => c, Bz: () => d, ZU: () => p });
      var r = n(72298),
        o = n(76133),
        a = n(13855),
        i = n(29060),
        s = (n(97003), n(9448));
      const l = {
        windowControl: null,
        dialogControl: null,
        toastWindowHandler: null,
      };
      function c() {
        const t = (0, s.o)(
          new URLSearchParams(window.location.search).get(
            "rendererInitialData",
          ) ?? "{}",
        );
        if (!t) throw new Error("getRendererInitialData() jsonParse error");
        return t;
      }
      function d(t) {
        return (
          (l.windowControl = (function (t, e, n) {
            let r =
              window?.remoteServiceInstanceId ?? c().remoteServiceInstanceId;
            if (
              (n && (r = n), !e || r !== window?.initialRemoteServiceInstanceId)
            ) {
              (0, a.x$)().debug(
                `[Renderer] initializeIpcProxyForInstance ${t} id: ${r}; Old id ${window?.initialRemoteServiceInstanceId}`,
              );
              const e = o.hx.createForInstance(r);
              return ((window.initialRemoteServiceInstanceId = r), e);
            }
            return e;
          })("windowControl", l.windowControl, t)),
          l.windowControl
        );
      }
      function p() {
        r.ipcRenderer.send(i.mZ);
      }
    },
    39499: (t, e, n) => {
      function r(t, e, n, r) {
        if (n < 0) return;
        const o = (function (t, e) {
          if (!t) return [];
          const n = [];
          return (
            t.forEach((t, r) => {
              let o = r;
              if (t.offset && 0 !== t.offset && t.id !== e)
                o = t.offset > 0 ? o + 1 : o - 1;
              else if (n[o]) return;
              n[o] = t;
            }),
            n
          );
        })(r, t);
        let a,
          i,
          s,
          l = o.findIndex((t) => !t);
        if (
          (l < 0 &&
            (l =
              o.length < r.length
                ? r.length - 1
                : o.findIndex((e) => e.id === t)),
          n < l)
        )
          ((a = n), (i = l), (s = e));
        else {
          if (!(n > l)) return { tabState: r, holeIndex: l };
          ((a = l + 1), (i = n + 1), (s = -e));
        }
        for (let t = a; t < i; t++) {
          const e = r.find((e) => e === o[t]);
          e && (e.offset || (e.offset = 0), (e.offset += s));
        }
        return { tabState: r, holeIndex: l };
      }
      function o(t) {
        if (t) {
          for (const e of t) e.offset = void 0;
          return t;
        }
      }
      n.d(e, { F: () => r, M: () => o });
    },
    98702: (t, e, n) => {
      n.d(e, { a: () => s });
      var r = n(96486),
        o = n(50959),
        a = n(54041),
        i = n(89597);
      const s = o.createContext({
        windowStateSubject: new a.BehaviorSubject(i.kZ.Normal),
        windowResizeSubject: new a.Subject(),
        hoverCheckSubject: new a.Subject(),
        windowFocused: !1,
        windowId: "",
        isRtlSystem: !1,
      });
      o.createContext({ t: r.ZP.t });
    },
    16602: (t, e, n) => {
      n.d(e, { g: () => u });
      var r = n(13855),
        o = n(55442),
        a = n(85930),
        i = n(69478);
      let s,
        l = !1,
        c = 0,
        d = 0;
      function p() {
        const t = (0, i.nb)().remoteServiceInstanceId ?? window.location.href,
          e = Math.round(performance.memory.usedJSHeapSize / a.k4),
          n = Math.round(performance.memory.totalJSHeapSize / a.k4),
          s = Math.round(performance.memory.jsHeapSizeLimit / a.k4),
          p = e / s,
          u = `Heap info for renderer - ${t}. Heap Used ${e} Kb. Heap Total ${n} Kb. Heap Limit ${s} Kb.`;
        return p <= a.wj
          ? ((c = 0), void (d = 0))
          : p > a.wj && c < 2
            ? ((0, r.x$)().warn(u), void c++)
            : void (
                p > a.fL &&
                (l ||
                  ((0, o.n_)({ level: "warning", breadcrumb: u }), (l = !0)),
                d < 2 && ((0, r.x$)().warn(u), d++))
              );
      }
      function u(t = a.bA) {
        (!(function () {
          const t = Math.round(performance.memory.jsHeapSizeLimit / a.k4);
          (0, o.YA)("memory.heapLimit", t.toString());
        })(),
          s
            ? (0, r.x$)().error("Heap log for this renderer already exist")
            : (s = setInterval(p, t)));
      }
    },
    82678: (t, e, n) => {
      n.d(e, { s: () => T });
      var r,
        o = n(50959),
        a = n(69478);
      function i() {
        return (
          (i =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }),
          i.apply(this, arguments)
        );
      }
      const s = function (t) {
        return o.createElement(
          "svg",
          i({ xmlns: "http://www.w3.org/2000/svg", width: 13, height: 13 }, t),
          r ||
            (r = o.createElement("path", {
              d: "M0 6h13v1H0zm6-6h1v13H6z",
              fill: "currentColor",
            })),
        );
      };
      var l = n(25211),
        c = n.n(l),
        d = n(62962),
        p = n.n(d),
        u = n(20310),
        h = n.n(u),
        b = n(29290),
        v = n.n(b),
        g = n(47289),
        f = n.n(g),
        m = n(24834),
        w = n.n(m),
        x = n(76346),
        y = {};
      ((y.styleTagTransform = w()),
        (y.setAttributes = v()),
        (y.insert = h().bind(null, "head")),
        (y.domAPI = p()),
        (y.insertStyleElement = f()),
        c()(x.Z, y),
        x.Z && x.Z.locals && x.Z.locals);
      const T = ({ offset: t }) =>
        o.createElement(
          "button",
          {
            onClick: () => {
              (0, a.Bz)().createAndAddTab({});
            },
            className: "create-new-tab-button",
            style: { left: `${t}px` },
            tabIndex: -1,
          },
          o.createElement(s, null),
        );
    },
    20313: (t, e, n) => {
      n.d(e, { Q: () => m });
      var r = n(50959),
        o = n(25211),
        a = n.n(o),
        i = n(62962),
        s = n.n(i),
        l = n(20310),
        c = n.n(l),
        d = n(29290),
        p = n.n(d),
        u = n(47289),
        h = n.n(u),
        b = n(24834),
        v = n.n(b),
        g = n(30586),
        f = {};
      ((f.styleTagTransform = v()),
        (f.setAttributes = p()),
        (f.insert = c().bind(null, "head")),
        (f.domAPI = s()),
        (f.insertStyleElement = h()),
        a()(g.Z, f),
        g.Z && g.Z.locals && g.Z.locals);
      const m = () =>
        r.createElement("div", { className: "tab-panel-divider" });
    },
    45101: (t, e, n) => {
      n.d(e, { G: () => r, $: () => M });
      var r,
        o = n(82130),
        a = n(84255),
        i = n(85410),
        s = n(52238),
        l = n(31049),
        c = n(14713),
        d = n(28511),
        p = n(48298),
        u = n(88907),
        h = n(64913),
        b = n(99560),
        v = n(95649),
        g = n(91337),
        f = n(28359),
        m = n(54972),
        w = n(16456),
        x = n(72731),
        y = n(31559),
        T = n(82539),
        Z = n(29293),
        S = n(26320),
        k = n(9276),
        O = n(3673),
        I = n(5216),
        C = n(41662),
        E = n(1979);
      !(function (t) {
        ((t.Normal = ""),
          (t.Small = "small"),
          (t.XSmall = "xsmall"),
          (t.XXSmall = "xxsmall"));
      })(r || (r = {}));
      const M = new Map([
        ["about", C.Z],
        ["advertising-info", p.Z],
        ["athletes", C.Z],
        ["bounty", x.Z],
        ["broker-awards", a.Z],
        ["brokerage-integration", p.Z],
        ["brokers", a.Z],
        ["careers", C.Z],
        [o.sl.community, i.Z],
        ["cookies-policy", x.Z],
        ["countries", s.Z],
        ["data-coverage", C.Z],
        ["disclaimer", l.Z],
        [o.sl.economicCalendar, c.Z],
        ["education", b.Z],
        ["errorView", d.Z],
        ["features", C.Z],
        ["follow", C.Z],
        ["heatmap", u.Z],
        ["home", C.Z],
        ["house-rules", C.Z],
        ["html5-stock-forex-bitcoin-charting-library", p.Z],
        ["ideas", b.Z],
        ["licenses", v.Z],
        ["lightweight-charts", p.Z],
        ["manifesto", C.Z],
        ["markets", E.Z],
        ["mobile", g.Z],
        ["moderators", f.Z],
        ["news", m.Z],
        [o.sl.newsFlow, m.Z],
        [o.sl.options, w.Z],
        ["partner-program", p.Z],
        ["pine-script-docs", Z.Z],
        ["pine-script-reference", Z.Z],
        ["pine-wizards", Z.Z],
        ["policies", x.Z],
        ["privacy-policy", x.Z],
        ["referral-program", p.Z],
        ["screener", T.Z],
        ["script", Z.Z],
        ["scripts", Z.Z],
        ["share-your-love", y.Z],
        ["snaps", S.Z],
        ["sparks", k.Z],
        ["status", O.Z],
        ["streams", I.Z],
        [o.sl.helpCenter, h.Z],
        ["tradingview-for-the-web", p.Z],
        ["wall-of-love", C.Z],
        ["widget", p.Z],
        ["worldEconomy", E.Z],
      ]);
    },
    55973: (t, e, n) => {
      n.d(e, { O: () => U });
      var r = n(50959),
        o = n(70612),
        a = n(36458),
        i = n(13855),
        s = n(17184),
        l = n(11213),
        c = n(94850),
        d = n(28305),
        p = n(89597),
        u = n(59391),
        h = n(69478),
        b = n(96486);
      new Map([
        ["Red", () => b.ZP.t("Red")],
        ["Green", () => b.ZP.t("Green")],
        ["Blue", () => b.ZP.t("Blue")],
        ["Yellow", () => b.ZP.t("Yellow")],
        ["Orange", () => b.ZP.t("Orange")],
        ["Sky Blue", () => b.ZP.t("Sky Blue")],
        ["Grapes Purple", () => b.ZP.t("Grapes Purple")],
        ["Rose", () => b.ZP.t("Rose")],
        ["Purple", () => b.ZP.t("Purple")],
      ]);
      const v = "1px solid",
        g = new Map([
          ["Red", { background: "#F23645", border: `${v} #801922` }],
          ["Green", { background: "#4CAF50", border: `${v} #2E7D32` }],
          ["Blue", { background: "#3179F5", border: `${v} #1848CC` }],
          ["Yellow", { background: "#FDD835", border: `${v} #FBC02D` }],
          ["Orange", { background: "#FB8C00", border: `${v} #E65100` }],
          ["Sky Blue", { background: "#00BCD4", border: `${v} #00838F` }],
          ["Grapes Purple", { background: "#9C27B0", border: `${v} #6A1B9A` }],
          ["Rose", { background: "#FF80AB", border: `${v} #D81B60` }],
          ["Purple", { background: "#651FFF", border: `${v} #311B92` }],
        ]);
      var f,
        m = n(98702),
        w = n(20313),
        x = n(45101);
      function y() {
        return (
          (y =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }),
          y.apply(this, arguments)
        );
      }
      const T = function (t) {
        return r.createElement(
          "svg",
          y({ width: 6, height: 6, xmlns: "http://www.w3.org/2000/svg" }, t),
          f ||
            (f = r.createElement("path", {
              d: "M6 0v6H0a6 6 0 0 0 6-6Z",
              fill: "currentColor",
            })),
        );
      };
      var Z = n(25211),
        S = n.n(Z),
        k = n(62962),
        O = n.n(k),
        I = n(20310),
        C = n.n(I),
        E = n(29290),
        M = n.n(E),
        z = n(47289),
        B = n.n(z),
        $ = n(24834),
        N = n.n($),
        D = n(64089),
        P = {};
      ((P.styleTagTransform = N()),
        (P.setAttributes = M()),
        (P.insert = C().bind(null, "head")),
        (P.domAPI = O()),
        (P.insertStyleElement = B()),
        S()(D.Z, P),
        D.Z && D.Z.locals && D.Z.locals);
      const R = () =>
        r.createElement(
          "div",
          { className: "extenders" },
          r.createElement(
            "div",
            { className: "extender left" },
            r.createElement(T, null),
          ),
          r.createElement(
            "div",
            { className: "extender right" },
            r.createElement(T, null),
          ),
        );
      var A = n(59238),
        j = n(27469),
        H = {};
      ((H.styleTagTransform = N()),
        (H.setAttributes = M()),
        (H.insert = C().bind(null, "head")),
        (H.domAPI = O()),
        (H.insertStyleElement = B()),
        S()(j.Z, H),
        j.Z && j.Z.locals && j.Z.locals);
      var F = function (t, e, n, r) {
        var o,
          a = arguments.length,
          i =
            a < 3
              ? e
              : null === r
                ? (r = Object.getOwnPropertyDescriptor(e, n))
                : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          i = Reflect.decorate(t, e, n, r);
        else
          for (var s = t.length - 1; s >= 0; s--)
            (o = t[s]) &&
              (i = (a < 3 ? o(i) : a > 3 ? o(e, n, i) : o(e, n)) || i);
        return (a > 3 && i && Object.defineProperty(e, n, i), i);
      };
      a.i.initializeRpc();
      let U = class extends r.Component {
        static contextType = m.a;
        remoteServiceInstanceId;
        tabRef;
        timeoutOnMouseOver;
        state = { title: { type: p.g2.Basic, title: "" } };
        componentDidMount() {
          ((this.tabRef = r.createRef()), this.props.setRef(this.tabRef));
          (this.remoteServiceInstanceId ||
            ((this.remoteServiceInstanceId = a.i.registerRemoteObject(
              this,
              c.E$,
            )),
            (0, h.Bz)()
              .registerTabController(
                this.props.id,
                this.remoteServiceInstanceId,
              )
              .then(() =>
                (0, i.x$)().debug(
                  `<Tab>.componentDidMount(): "registered controller for tab ${(0, l.uJ)(this.remoteServiceInstanceId)}"`,
                ),
              )
              .catch((t) =>
                (0, i.x$)().error(
                  `Failed to register tab controller for ${(0, l.uJ)(this.remoteServiceInstanceId)}`,
                  t,
                ),
              ),
            (0, u.wK)(
              (async () => {
                if (this.remoteServiceInstanceId)
                  try {
                    const t = (0, d.N8)();
                    (await t.registerDraggable(
                      this.remoteServiceInstanceId,
                      this.context.windowId,
                    ),
                      (0, i.x$)().debug(
                        `<Tab>.componentDidMount(): "registered draggable with id ${(0, l.uJ)(this.remoteServiceInstanceId)}"`,
                      ));
                  } catch (t) {
                    (0, i.x$)().error(
                      `Could not register draggable ${this.remoteServiceInstanceId}`,
                      t,
                    );
                  }
              })(),
            )),
            this.context.windowResizeSubject.subscribe(() => {
              this.hideTooltipHandler();
            }));
        }
        componentWillUnmount() {
          ((0, i.x$)().debug(
            `<Tab>.componentWillUnmount(): "Unmounting ${(0, l.uJ)(this.remoteServiceInstanceId)}"`,
          ),
            this.remoteServiceInstanceId &&
              a.i.unregisterRemoteObject(this.remoteServiceInstanceId),
            clearTimeout(this.timeoutOnMouseOver));
        }
        shouldComponentUpdate(t) {
          return this.props.isTooltipVisibleGlobal === t.isTooltipVisibleGlobal;
        }
        getBounds() {
          const t = this.tabRef?.current?.getBoundingClientRect() ?? d.rw;
          return Promise.resolve({
            x: Math.round(t.x),
            y: Math.round(t.y),
            width: Math.round(t.width),
            height: Math.round(t.height),
          });
        }
        setTitle(t) {
          return (this.setState({ title: t }), Promise.resolve());
        }
        setLinkColor(t) {
          this.setState({ linkColor: t ?? void 0 });
        }
        closeTab(t, e) {
          (t.stopPropagation(),
            this.props.mouseOverTab(null),
            this.props.setLastTabClickedId(e),
            (0, h.Bz)()
              .closeTab(e, { silent: !1, addToHistory: !0 })
              .catch((t) => {
                (0, i.x$)().error(
                  "<Tab>.closeTab(): getWindowControl().closeTab() error",
                  t,
                );
              }));
        }
        changeActiveTab(t) {
          (this.hideTooltipHandler(),
            this.props.active ||
              ((0, u.wK)((0, h.Bz)().changeTab(t)),
              (0, h.Bz)().activateTooltip(!0)));
        }
        duplicateActiveTab(t) {
          (this.hideTooltipHandler(), (0, u.wK)((0, h.Bz)().duplicateTab(t)));
        }
        tabClick({ detail: t }) {
          const {
            id: e,
            lastTabClickedId: n,
            setLastTabClickedId: r,
          } = this.props;
          2 !== t || n !== e
            ? (r(e), this.changeActiveTab(e))
            : this.duplicateActiveTab(e);
        }
        htmlDragStart(t) {
          (t.preventDefault(),
            this.remoteServiceInstanceId &&
              ((0, h.Bz)().triggerMenuCloseEvent("tab-panel-click"),
              (0, d.N8)()
                .startDrag(this.remoteServiceInstanceId)
                .catch((t) => {
                  (0, i.x$)().warn(
                    `IDragService.startDrag(${JSON.stringify(this.remoteServiceInstanceId)}): ${JSON.stringify(t)}`,
                  );
                })));
        }
        onDragStart(t) {
          (this.hideTooltipHandler(),
            this.timeoutOnMouseOver && clearTimeout(this.timeoutOnMouseOver),
            console.log("tab drag start"),
            this.props.active || this.changeActiveTab(this.props.id));
          const e = { x: t.x, y: t.y };
          if ((this.setState({ prevCursorPoint: e }), !this.context.windowId))
            return;
          const n = { tabId: this.props.id };
          (0, d.N8)()
            .setDragData(n)
            .catch((t) => {
              (0, i.x$)().warn(
                `IDragService.setDragData(${JSON.stringify(n)}): ${JSON.stringify(t)}`,
              );
            });
        }
        onDragEnd(t, e) {}
        onDragOver(t) {}
        onDragEnter(t) {}
        onDragLeave(t) {}
        onDrop(t) {}
        showMenu(t) {
          (this.timeoutOnMouseOver && clearTimeout(this.timeoutOnMouseOver),
            (this.timeoutOnMouseOver = void 0),
            this.hideTooltipHandler(),
            (0, h.Bz)().showTabMenu(
              this.props.id,
              t.shiftKey,
              this.context.windowId,
              { x: t.clientX, y: t.clientY },
            ));
        }
        mouseUp(t) {
          1 === t.button &&
            (t.stopPropagation(),
            this.hideTooltipHandler(),
            (0, h.Bz)()
              .closeTab(this.props.id)
              .catch((t) => {
                (0, i.x$)().error(
                  "<Tab>.mouseUp(): getWindowControl().closeTab() error",
                  t,
                );
              }));
        }
        updateTooltipBounds() {
          const t = this.tabRef?.current;
          t &&
            this.context.windowFocused &&
            (0, h.Bz)().setTooltipOffset(t.offsetLeft);
        }
        async moveTooltip() {
          if (!this.props.isChart) return void this.hideTooltipHandler();
          this.updateTooltipBounds();
          const t = this.state.title;
          ((0, h.Bz)().setTooltipText({ text: t, type: p.aA.Move }),
            await (0, h.Bz)().moveTooltip(10, 4, this.props.active),
            (0, h.Bz)().setTooltipText({ text: t, type: p.aA.Show }));
        }
        async showTooltipHandler() {
          const t = await this.getBounds();
          if (
            !this.context.windowFocused ||
            t.width > 224 ||
            !this.props.isChart
          )
            return;
          const e = this.state.title;
          ((0, h.Bz)().setTooltipText({ text: e, type: p.aA.Show }),
            this.updateTooltipBounds(),
            this.tabRef &&
              this.tabRef.current &&
              ((0, h.Bz)().activateTooltip(this.props.active),
              (0, h.Bz)().showTooltip(this.props.id)));
        }
        hideTooltipHandler() {
          (this.props.isTooltipVisibleGlobalChange(!1),
            (0, h.Bz)().closeTooltip());
        }
        mouseEnter(t) {
          if (
            (this.timeoutOnMouseOver && clearTimeout(this.timeoutOnMouseOver),
            this.props.isTooltipVisibleGlobal)
          )
            (0, u.wK)(this.moveTooltip());
          else {
            const t = async () => {
              (await this.showTooltipHandler(),
                this.props.isTooltipVisibleGlobalChange(!0));
            };
            this.timeoutOnMouseOver = setTimeout(t, 1e3);
          }
          t.buttons || this.props.mouseOverTab(this.props.index);
        }
        mouseLeave() {
          (this.timeoutOnMouseOver && clearTimeout(this.timeoutOnMouseOver),
            (this.timeoutOnMouseOver = void 0));
        }
        render() {
          const t = this.getTabStyle(),
            e =
              !this.props.pinned &&
              !this.props.hideCloseTabButton &&
              (this.props.active || this.props.tabSize === x.G.Normal);
          return r.createElement(
            "div",
            {
              id: this.props.id,
              className: `tab ${this.props.active ? "active" : ""} ${this.props.tabSize}`,
              draggable: !0,
              onDragStart: (t) => this.htmlDragStart(t),
              onMouseEnter: (t) => this.mouseEnter(t),
              onMouseLeave: () => this.mouseLeave(),
              onClick: (t) => this.tabClick(t),
              onMouseUp: (t) => this.mouseUp(t),
              onContextMenuCapture: () =>
                (0, h.Bz)().triggerMenuCloseEvent("tab-context-menu"),
              onContextMenu: (t) => this.showMenu(t),
              style: t,
              key: this.props.id,
              ref: this.tabRef,
            },
            r.createElement("div", {
              className: "tab-link-indicator",
              style: this.getTabLinkingColor(),
            }),
            r.createElement(
              "div",
              { className: `tab-title ${this.props.tabSize}` },
              r.createElement(A.J, {
                title: this.state.title,
                isLogoVisible: !0,
                active: this.props.active,
                t: this.props.t,
              }),
            ),
            r.createElement(
              "div",
              { className: "tab-close-button-container" },
              r.createElement("div", { className: "fadeout" }),
              e &&
                r.createElement(o.P, {
                  "aria-label": "close-tab-button",
                  onClick: (t) => {
                    this.closeTab(t, this.props.id);
                  },
                  size: "xsmall",
                  tabIndex: -1,
                }),
            ),
            r.createElement(w.Q, null),
            r.createElement(R, null),
          );
        }
        getTabLinkingColor() {
          if (!this.state.linkColor) return;
          const t = g.get(this.state.linkColor);
          return t ? { backgroundColor: t.background } : void 0;
        }
        getTabStyle() {
          const t = {};
          if (
            (this.props.active ||
              void 0 === this.props.offset ||
              (t.transition = "transform 0.2s ease-out"),
            this.props.offset)
          ) {
            const e = Math.round(this.props.offset);
            t.transform = `translate(${e || 0}px, 0px)`;
          }
          return (
            this.props.initialWidth && (t.flexBasis = this.props.initialWidth),
            t
          );
        }
      };
      (F([s.t], U.prototype, "closeTab", null),
        F([s.t], U.prototype, "changeActiveTab", null),
        F([s.t], U.prototype, "duplicateActiveTab", null),
        F([s.t], U.prototype, "tabClick", null),
        F([s.t], U.prototype, "htmlDragStart", null),
        F([s.t], U.prototype, "onDragStart", null),
        F([s.t], U.prototype, "showMenu", null),
        (U = F([(0, s.r)("Tab")], U)));
    },
    79946: (t, e, n) => {
      n.d(e, {
        VT: () => s,
        rs: () => d,
        kS: () => p,
        yd: () => u,
        Ry: () => h,
        P3: () => v,
        Q2: () => g,
      });
      var r = n(72298),
        o = n(31937),
        a = n(98886),
        i = n(28321);
      class s {
        static hasHeader(t, e, n) {
          return e in t.headers && (void 0 === n || t.headers[e] === n);
        }
        static headerValue(t, e) {
          return e in t.headers ? t.headers[e] : void 0;
        }
        static response(t, e) {
          const n = {
            headers: { ...t.headers, success: !0, failure: "" },
            body: e,
          };
          t.responseChannel(n);
        }
        static responseFailure(t, e) {
          let n,
            r = "";
          "string" == typeof e
            ? (r = e)
            : e instanceof Error
              ? ((r = `(${e.name}):${e.message}`), (n = e.stack))
              : (r = "Untyped error");
          const o = {
            headers: { ...t.headers, success: !1, failure: r },
            body: {},
          };
          (n && (o.headers.stack = n), t.responseChannel(o));
        }
        static rethrowIfException(t) {
          if (!s.hasHeader(t, "success"))
            throw new Error("Expected response message.");
          if (!t.headers.success) {
            if (
              "failure" in t.headers &&
              "string" == typeof t.headers.failure &&
              "" !== t.headers.failure
            ) {
              const e = new Error(t.headers.failure);
              throw ("stack" in t.headers && (e.stack = t.headers.stack), e);
            }
            throw new Error("Unspecified remoting error");
          }
        }
        static getResponseBody(t) {
          return (s.rethrowIfException(t), t.body);
        }
        static get requestContext() {
          return o.Y;
        }
      }
      let l = null,
        c = null;
      function d() {
        return (l || (l = new i.B()), l);
      }
      function p() {
        return (c || (c = new i.n()), c);
      }
      const u = function (t) {
        r.ipcRenderer.send(a.f, t);
      };
      function h(t) {
        return function (e) {
          t && !t.isDestroyed() && t.send(a.f, e);
        };
      }
      let b;
      function v(t) {
        if (void 0 !== b)
          throw new Error(
            "Service host instance already registered for current process",
          );
        b = t;
      }
      function g() {
        if (!b)
          throw new Error(
            "Service host instance not registered for current process",
          );
        return b;
      }
    },
    75432: (t, e, n) => {
      n.d(e, { kS: () => r.kS });
      var r = n(79946);
      (n(23577), n(28430), n(23935));
    },
    10496: (t, e, n) => {
      n.d(e, { n_: () => o, YA: () => a });
      var r = n(77118);
      function o(t) {
        (0, r.n_)({
          category: "message",
          message: t.breadcrumb,
          level: t.level,
        });
      }
      function a(t, e) {
        (0, r.YA)(t, e);
      }
    },
    17066: (t, e, n) => {
      n.d(e, { s: () => i });
      var r = n(72298),
        o = n(77118);
      const a = void 0 !== r.ipcMain;
      function i() {
        if (a)
          throw new Error(
            "This initialization must be called from renderer process",
          );
        (0, o.S1)();
      }
    },
    16693: (t, e, n) => {
      n.d(e, { cj: () => o, Ai: () => a });
      var r = n(87269);
      const o = 76,
        a = (0, r.Um)() ? o : 0;
    },
    28305: (t, e, n) => {
      n.d(e, { N8: () => r.N8, rw: () => r.rw });
      var r = n(96203);
    },
    93367: (t, e, n) => {
      n.d(e, { l: () => a });
      var r = n(36458);
      const o = "tvd:tab-drag-handler";
      function a() {
        return r.i.provideProxy(o);
      }
    },
    82170: (t, e, n) => {
      n.d(e, { Sd: () => r });
      const r = "tvd:window-service";
      var o, a;
      (!(function (t) {
        ((t[(t.Ask = 0)] = "Ask"), (t[(t.CheckOnly = 1)] = "CheckOnly"));
      })(o || (o = {})),
        (function (t) {
          ((t.Window = "isWindow"),
            (t.App = "isApp"),
            (t.Chart = "isChart"),
            (t.Debug = "isDebug"));
        })(a || (a = {})));
    },
    85930: (t, e, n) => {
      n.d(e, { bA: () => r, k4: () => o, wj: () => a, fL: () => i });
      const r = 6e4,
        o = 1024,
        a = 0.8,
        i = 0.97;
    },
    89597: (t, e, n) => {
      n.d(e, { E7: () => r, kZ: () => o, aA: () => i, g2: () => s });
      const r = 38;
      var o, a, i, s;
      (!(function (t) {
        ((t[(t.Normal = 0)] = "Normal"),
          (t[(t.Maximized = 1)] = "Maximized"),
          (t[(t.Minimized = 2)] = "Minimized"),
          (t[(t.Hidden = 3)] = "Hidden"),
          (t[(t.Fullscreen = 4)] = "Fullscreen"),
          (t[(t.FullscreenWithPanel = 5)] = "FullscreenWithPanel"));
      })(o || (o = {})),
        (function (t) {
          ((t.Basic = "basic"),
            (t.Options = "options"),
            (t.Credentials = "credentials"),
            (t.SignIn = "sign-in"),
            (t.Settings = "settings"),
            (t.SaveChanges = "save-changes"),
            (t.Welcome = "welcome"));
        })(a || (a = {})),
        (function (t) {
          ((t.Show = "show"), (t.Move = "move"));
        })(i || (i = {})),
        (function (t) {
          ((t[(t.Basic = 0)] = "Basic"), (t[(t.ChartData = 1)] = "ChartData"));
        })(s || (s = {})));
    },
    26770: (t, e, n) => {
      n.d(e, { DF: () => a, W2: () => i });
      var r = n(36458);
      const o = "tvd:tv-feature-service",
        a = "tvd_last_tab_close_button";
      function i() {
        return r.i.provideProxy(o);
      }
    },
    97003: (t, e, n) => {
      n.d(e, {
        nt: () => b,
        ZJ: () => d.ZJ,
        t6: () => h,
        UT: () => c.U,
        Xp: () => u,
        UD: () => s.U,
        Kr: () => i.Kr,
        Wf: () => a.W,
        D9: () => p,
        vO: () => d.vO,
      });
      var r,
        o,
        a = n(36842),
        i = n(5603),
        s = n(80271),
        l = (n(95807), n(96485), n(39985)),
        c = n(94232),
        d = n(58789);
      function p(t) {
        if ("object" != typeof t || null === t) return !1;
        const e = t.constructor;
        return !!e && Reflect.hasMetadata(l.f, e);
      }
      function u(t) {
        const e = (0, d.vO)(t, d.ZJ.Contracts)?.contracts;
        if (!e)
          throw new Error(
            "Object does not provide contracts. Use Service decorator",
          );
        c.U.instance.registerFactory(
          (n, ...r) => (
            r.length > 0 &&
              console.debug("Using non zero arguments for singleton factory"),
            n.every((t) => e.includes(t)) ? t : void 0
          ),
        );
      }
      function h(...t) {
        return (e) => {
          Reflect.defineMetadata(l.f, t, e);
        };
      }
      function b() {
        return (t) => {
          const e = new t();
          c.U.instance.registerProvider(e);
        };
      }
      (((o = r || (r = {}))[(o.Transient = 0)] = "Transient"),
        (o[(o.Singleton = 1)] = "Singleton"),
        Symbol("ServiceContracts"));
    },
  },
]);
