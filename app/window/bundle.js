(() => {
  "use strict";
  var t,
    e,
    n,
    i = {
      92775: (t, e, n) => {
        n.d(e, { Z: () => a });
        var i = n(43392),
          r = n.n(i),
          o = n(8021),
          s = n.n(o)()(r());
        s.push([
          t.id,
          "/* Thanks to google guys for the original <paper-spinner> =)\n * https://github.com/PolymerElements/paper-spinner */\n\n.tv-spinner {\n\tdisplay: none;\n\tposition: absolute;\n\twidth: 1em;\n\theight: 1em;\n\ttop: calc(50% - 25px);\n\tleft: calc(50% - 25px);\n\tmargin: 0 auto;\n\tcolor: var(--color-spinner-spin);\n\tanimation: tv-spinner__container-rotate 0.9s linear infinite;\n\twill-change: transform;\n\tfont-size: 56px;\n\tborder-width: 4px;\n\n\t/* The spinner does not have any contents that would have to be\n\t * flipped if the direction changes. Always use ltr so that the\n\t * style works out correctly in both cases. */\n\tdirection: ltr;\n}\n\t/* &--size {\n\t\t&_mini {\n\t\t\tfont-size: 16px;\n\t\t}\n\n\t\t&_medium {\n\t\t\tfont-size: 32px;\n\t\t}\n\n\t\t&_large {\n\t\t\tfont-size: 56px;\n\t\t}\n\t} */\n\n\t.tv-spinner--size_mini .tv-spinner__width_element:after {\n\t\tborder-width: 2px;\n\t}\n\n\t.tv-spinner--size_medium .tv-spinner__width_element:after {\n\t\tborder-width: 3px;\n\t}\n\n\t.tv-spinner--size_large .tv-spinner__width_element:after {\n\t\tborder-width: 4px;\n\t}\n\n\t.tv-spinner--shown {\n\t\tdisplay: block;\n\t}\n\n\t.tv-spinner__spinner-layer {\n\t\tposition: absolute;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\twhite-space: nowrap;\n\t\tcolor: currentColor;\n\t\ttransform: rotate(90deg);\n\t}\n\t\t/**\n\t\t * Patch the gap that appear between the two adjacent div.circle-clipper while the\n\t\t * spinner is rotating (appears on Chrome 50, Safari 9.1.1, and Edge).\n\t\t */\n\t\t.tv-spinner__spinner-layer::after {\n\t\t\tcontent: '';\n\t\t\tposition: absolute;\n\t\t\tbox-sizing: border-box;\n\t\t\ttop: 0;\n\t\t\tborder-width: 0.07em;\n\t\t\tborder-radius: 50%;\n\t\t\tleft: 45%;\n\t\t\twidth: 10%;\n\t\t\tborder-top-style: solid;\n\t\t}\n\t\n\n\t.tv-spinner__background {\n\t\tdisplay: inline-block;\n\t\tposition: absolute;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\toverflow: hidden;\n\t}\n\t\n\t.tv-spinner__background::after {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\tbox-sizing: border-box;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tborder-radius: 50%;\n\t\tbottom: 0;\n\t\twidth: 100%;\n\t\tborder-color: var(--color-spinner-bg);\n\t\tborder-style: solid;\n\t}\n\t\n\n\t.tv-spinner__circle-clipper {\n\t\tdisplay: inline-block;\n\t\tposition: relative;\n\t\twidth: 50%;\n\t\theight: 100%;\n\t\toverflow: hidden;\n\t}\n\t.tv-spinner__circle-clipper::after {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\tbox-sizing: border-box;\n\t\ttop: 0;\n\t\tborder-radius: 50%;\n\t\tbottom: 0;\n\t\twidth: 200%;\n\t\tborder-style: solid;\n\t\tborder-bottom-color: transparent;\n\t\tanimation-duration: 5s;\n\t\tanimation-timing-function: cubic-bezier(.36, 0, .37, .99);\n\t\t/*  */\n\t\tanimation-iteration-count: 1;\n\t\twill-change: transform;\n\t}\n\n\t.tv-spinner__circle-clipper--left::after {\n\t\tleft: 0;\n\t\tborder-right-color: transparent;\n\t\ttransform: rotate(0deg);\n\t\tanimation-name: tv-spinner__left-spin;\n\t}\n\n\t.tv-spinner__circle-clipper--right::after {\n\t\tleft: -100%;\n\t\tborder-left-color: transparent;\n\t\ttransform: rotate(-124deg); \n\t\tanimation-name: tv-spinner__right-spin;\n\t}\n\t\n\n\n@keyframes tv-spinner__container-rotate {\n\t100% {\n\t\ttransform: rotate(360deg);\n\t}\n}\n\n@keyframes tv-spinner__left-spin {\n\t0% { transform: rotate(130deg) }\n\tto { transform: rotate(0deg) }\n}\n\n@keyframes tv-spinner__right-spin {\n\t0% { transform: rotate(-130deg) }\n\tto { transform: rotate(-124deg) }\n}\n",
          "",
        ]);
        const a = s;
      },
      65948: (t, e, n) => {
        n.d(e, { Z: () => a });
        var i = n(43392),
          r = n.n(i),
          o = n(8021),
          s = n.n(o)()(r());
        s.push([
          t.id,
          ".action-button {\n\t-webkit-app-region: none;\n\twidth: 50px;\n\theight: 35px;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tcolor: var(--color-content-primary-neutral);\n\tmargin: 0;\n\tpadding: 0;\n\tbackground-color: transparent;\n\tborder: none;\n\toutline: none;\n\n\t.app:not(.active) &:hover {\n\t\tbackground-color: var(--color-container-fill-primary-neutral-light);\n\t}\n\n\t.app.active &:hover {\n\t\tbackground-color: var(--color-container-fill-primary-neutral-extra-light);\n\t}\n}\n",
          "",
        ]);
        const a = s;
      },
      29998: (t, e, n) => {
        n.d(e, { Z: () => a });
        var i = n(43392),
          r = n.n(i),
          o = n(8021),
          s = n.n(o)()(r());
        s.push([
          t.id,
          ".app {\n\tbackground-color: var(--color-container-fill-secondary-neutral-thin);\n\n\t&.active {\n\t\tbackground-color: var(--color-container-fill-primary-neutral-light);\n\t}\n\n\t&.hidden {\n\t\tvisibility: hidden;\n\t}\n}\n\n.header {\n\t-webkit-app-region: drag;\n\tdirection: ltr;\n\twidth: 100%;\n\theight: 35px;\n\tdisplay: grid;\n\n\t.app.ltr-system.darwin > & {\n\t\tgrid-template-columns: min-content auto min-content;\n\t\tgrid-template-areas: 'window-controls tabs tab-panel-actions';\n\t}\n\n\t.app.rtl-system.darwin > & {\n\t\tgrid-template-columns: auto min-content min-content;\n\t\tgrid-template-areas: 'tabs tab-panel-actions window-controls';\n\t}\n\n\t.app.win > & {\n\t\tgrid-template-columns: 1fr min-content auto;\n\t\tgrid-template-areas: 'tabs tab-panel-actions window-controls';\n\t}\n}\n\n.window-title {\n\talign-self: center;\n\tcolor: var(--color-main-text);\n\n\t.app:not(.darwin) & {\n\t\tmargin: 0 15px;\n\t}\n}\n\n.underline {\n\tbox-sizing: border-box;\n\twidth: 100%;\n\theight: 3px;\n\tbackground-color: var(--color-background-secondary-inverse);\n}\n\n@keyframes fade {\n\tfrom {\n\t\topacity: 1;\n\t}\n\t50% {\n\t\topacity: 0.5;\n\t}\n\tto {\n\t\topacity: 1;\n\t}\n}\n\n@-webkit-keyframes fade {\n\tfrom {\n\t\topacity: 1;\n\t}\n\t50% {\n\t\topacity: 0.5;\n\t}\n\tto {\n\t\topacity: 1;\n\t}\n}\n",
          "",
        ]);
        const a = s;
      },
      3164: (t, e, n) => {
        n.d(e, { Z: () => a });
        var i = n(43392),
          r = n.n(i),
          o = n(8021),
          s = n.n(o)()(r());
        s.push([
          t.id,
          ".close-button {\n\t.app:not(.active) &:hover,\n\t.app.active &:hover {\n\t\tbackground-color: #F7525F;\n\n\t\t& > svg {\n\t\t\tcolor: #FFFFFF;\n\t\t}\n\t}\n}\n",
          "",
        ]);
        const a = s;
      },
      76859: (t, e, n) => {
        n.d(e, { Z: () => a });
        var i = n(43392),
          r = n.n(i),
          o = n(8021),
          s = n.n(o)()(r());
        s.push([
          t.id,
          ".window-controls {\n\theight: 100%;\n\tgrid-area: window-controls;\n\tdisplay: flex;\n\tflex-flow: row nowrap;\n\n\t&.darwin {\n\t\t.app:not(.fullscreen) & {\n\t\t\twidth: 76px;\n\t\t}\n\n\t\t.app.fullscreen & {\n\t\t\tdisplay: none;\n\t\t}\n\t}\n}\n\n.window-control {\n\tcolor: var(--color-content-primary-neutral-bold);\n}\n",
          "",
        ]);
        const a = s;
      },
      79181: (t, e, n) => {
        n.d(e, { Z: () => a });
        var i = n(43392),
          r = n.n(i),
          o = n(8021),
          s = n.n(o)()(r());
        s.push([
          t.id,
          "/* Thanks to google guys for the original <paper-spinner> =)\n * https://github.com/PolymerElements/paper-spinner */\n\n.tv-spinner {\n\tdisplay: none;\n\tposition: absolute;\n\twidth: 1em;\n\theight: 1em;\n\ttop: calc(50% - 25px);\n\tleft: calc(50% - 25px);\n\tmargin: 0 auto;\n\tcolor: var(--color-spinner-spin);\n\tanimation: tv-spinner__container-rotate 0.9s linear infinite;\n\twill-change: transform;\n\tfont-size: 56px;\n\tborder-width: 4px;\n\n\t/* The spinner does not have any contents that would have to be\n\t * flipped if the direction changes. Always use ltr so that the\n\t * style works out correctly in both cases. */\n\tdirection: ltr;\n}\n\t/* &--size {\n\t\t&_mini {\n\t\t\tfont-size: 16px;\n\t\t}\n\n\t\t&_medium {\n\t\t\tfont-size: 32px;\n\t\t}\n\n\t\t&_large {\n\t\t\tfont-size: 56px;\n\t\t}\n\t} */\n\n\t.tv-spinner--size_mini .tv-spinner__width_element:after {\n\t\tborder-width: 2px;\n\t}\n\n\t.tv-spinner--size_medium .tv-spinner__width_element:after {\n\t\tborder-width: 3px;\n\t}\n\n\t.tv-spinner--size_large .tv-spinner__width_element:after {\n\t\tborder-width: 4px;\n\t}\n\n\t.tv-spinner--shown {\n\t\tdisplay: block;\n\t}\n\n\t.tv-spinner__spinner-layer {\n\t\tposition: absolute;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\twhite-space: nowrap;\n\t\tcolor: currentColor;\n\t\ttransform: rotate(90deg);\n\t}\n\t\t/**\n\t\t * Patch the gap that appear between the two adjacent div.circle-clipper while the\n\t\t * spinner is rotating (appears on Chrome 50, Safari 9.1.1, and Edge).\n\t\t */\n\t\t.tv-spinner__spinner-layer::after {\n\t\t\tcontent: '';\n\t\t\tposition: absolute;\n\t\t\tbox-sizing: border-box;\n\t\t\ttop: 0;\n\t\t\tborder-width: 0.07em;\n\t\t\tborder-radius: 50%;\n\t\t\tleft: 45%;\n\t\t\twidth: 10%;\n\t\t\tborder-top-style: solid;\n\t\t}\n\t\n\n\t.tv-spinner__background {\n\t\tdisplay: inline-block;\n\t\tposition: absolute;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\toverflow: hidden;\n\t}\n\t\n\t.tv-spinner__background::after {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\tbox-sizing: border-box;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tborder-radius: 50%;\n\t\tbottom: 0;\n\t\twidth: 100%;\n\t\tborder-color: var(--color-spinner-bg);\n\t\tborder-style: solid;\n\t}\n\t\n\n\t.tv-spinner__circle-clipper {\n\t\tdisplay: inline-block;\n\t\tposition: relative;\n\t\twidth: 50%;\n\t\theight: 100%;\n\t\toverflow: hidden;\n\t}\n\t.tv-spinner__circle-clipper::after {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\tbox-sizing: border-box;\n\t\ttop: 0;\n\t\tborder-radius: 50%;\n\t\tbottom: 0;\n\t\twidth: 200%;\n\t\tborder-style: solid;\n\t\tborder-bottom-color: transparent;\n\t\tanimation-duration: 5s;\n\t\tanimation-timing-function: cubic-bezier(.36, 0, .37, .99);\n\t\t/*  */\n\t\tanimation-iteration-count: 1;\n\t\twill-change: transform;\n\t}\n\n\t.tv-spinner__circle-clipper--left::after {\n\t\tleft: 0;\n\t\tborder-right-color: transparent;\n\t\ttransform: rotate(0deg);\n\t\tanimation-name: tv-spinner__left-spin;\n\t}\n\n\t.tv-spinner__circle-clipper--right::after {\n\t\tleft: -100%;\n\t\tborder-left-color: transparent;\n\t\ttransform: rotate(-124deg); \n\t\tanimation-name: tv-spinner__right-spin;\n\t}\n\t\n\n\n@keyframes tv-spinner__container-rotate {\n\t100% {\n\t\ttransform: rotate(360deg);\n\t}\n}\n\n@keyframes tv-spinner__left-spin {\n\t0% { transform: rotate(130deg) }\n\tto { transform: rotate(0deg) }\n}\n\n@keyframes tv-spinner__right-spin {\n\t0% { transform: rotate(-130deg) }\n\tto { transform: rotate(-124deg) }\n}\n",
          "",
        ]);
        const a = s;
      },
      21433: (t, e, n) => {
        n.d(e, { Z: () => a });
        var i = n(43392),
          r = n.n(i),
          o = n(8021),
          s = n.n(o)()(r());
        s.push([
          t.id,
          ".bad-connection-icon-wrapper {\n\tdisplay: flex;\n\tmargin: auto 5px;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 35px;\n\theight: 35px;\n\t-webkit-app-region: none;\n}\n\n.bad-connection-icon {\n\tmargin-top: 2px;\n}\n\n.blinking-dot {\n\tposition: relative;\n\ttop: 4px;\n\tleft: -5px;\n\tanimation:fade 1000ms infinite;\n\t-webkit-animation:fade 1000ms infinite;\n}\n",
          "",
        ]);
        const a = s;
      },
      91369: (t, e, n) => {
        n.d(e, { Z: () => a });
        var i = n(43392),
          r = n.n(i),
          o = n(8021),
          s = n.n(o)()(r());
        s.push([
          t.id,
          ".main-menu-button.opened {\n\tbackground-color: var(--color-container-fill-primary-neutral-extra-light);\n}\n",
          "",
        ]);
        const a = s;
      },
      22047: (t, e, n) => {
        n.d(e, { Z: () => a });
        var i = n(43392),
          r = n.n(i),
          o = n(8021),
          s = n.n(o)()(r());
        s.push([
          t.id,
          ".tab-panel-actions {\n\tgrid-area: tab-panel-actions;\n\tdisplay: flex;\n\talign-items: center;\n}\n",
          "",
        ]);
        const a = s;
      },
      56769: (t, e, n) => {
        var i = n(50959),
          r = n(44478),
          o = n(55442),
          s = n(16602),
          a = n(5306),
          l = n(4814),
          c = n(54041),
          d = n(7455),
          u = n(98078),
          h = n(76133),
          p = n(36458),
          b = n(13855),
          g = n(17184),
          m = n(11213),
          f = n(94850),
          w = n(72298);
        const v = ["ar", "ar_AE"],
          y = ["he", "he_IL"],
          T = (t) => [...v, ...y].includes(t);
        var x = n(71017),
          S = n(96486),
          _ = n(94102),
          E = n(46628),
          C = n(29060),
          k = n(9448);
        let P;
        if (w.ipcMain) {
          function Re() {
            const t = {},
              e = x.join(w.app.getAppPath(), "resources", "locales");
            for (const n of E.P.readDirSync(e)) {
              const i = E.P.readFileSync(x.join(e, n)),
                r = x.parse(n).name,
                o = (0, k.o)(i);
              o && (t[r] = { translation: o });
            }
            return t;
          }
          ((P = Re()),
            w.ipcMain.on(C.og, (t) => {
              t.returnValue = P;
            }));
        } else P = w.ipcRenderer.sendSync(C.og);
        S.ZP.use(_.Z)
          .use(a.Db)
          .init({
            keySeparator: "::",
            nsSeparator: ":::",
            resources: P,
            fallbackLng: "en",
            returnEmptyString: !1,
            interpolation: { escapeValue: !1 },
          });
        const V = S.ZP,
          $ = "tvd:locale-service",
          R = void 0 !== w.ipcMain;
        function M() {
          return p.i.provideProxy($);
        }
        function z(t, e) {
          t.setAttribute("dir", e ? "rtl" : "ltr");
        }
        function O(t) {
          (t && "" === t.dir && z(t, T(V.language)),
            (function (t) {
              let e;
              e = R
                ? p.i.provide($).localeChange.subscribe(t)
                : M().localeChange.subscribe(t);
              const n = () => {
                (e?.unsubscribe(),
                  (e = void 0),
                  window.removeEventListener("beforeunload", n));
              };
              "undefined" != typeof window &&
                window.addEventListener("beforeunload", n);
            })((e) => {
              "" !== e &&
                ((async (t) => {
                  V.language !== t && (await S.ZP.changeLanguage(t));
                })(e).catch((t) => {
                  (0, b.x$)().error(
                    "setupI18nLocaleHandler(): changeLocale() error",
                    t,
                  );
                }),
                t && z(t, T(e)));
            }));
        }
        var j = n(23748),
          I = n(82170);
        function Z() {
          return p.i.provideProxy(I.Sd);
        }
        var W,
          A = n(89597);
        (!(function (t) {
          ((t[(t.AllWindowsClosed = 0)] = "AllWindowsClosed"),
            (t[(t.Initialize = 1)] = "Initialize"),
            (t[(t.Dispose = 2)] = "Dispose"));
        })(W || (W = {})),
          (function (t, e, n, i) {
            var r,
              o = arguments.length,
              s =
                o < 3
                  ? e
                  : null === i
                    ? (i = Object.getOwnPropertyDescriptor(e, n))
                    : i;
            if (
              "object" == typeof Reflect &&
              "function" == typeof Reflect.decorate
            )
              s = Reflect.decorate(t, e, n, i);
            else
              for (var a = t.length - 1; a >= 0; a--)
                (r = t[a]) &&
                  (s = (o < 3 ? r(s) : o > 3 ? r(e, n, s) : r(e, n)) || s);
            o > 3 && s && Object.defineProperty(e, n, s);
          })(
            [g.t],
            class {
              eventListeners = new Map();
              on(t, e) {
                const n = this.eventListeners.get(t) ?? [];
                (n.push(e), this.eventListeners.set(t, n));
              }
              notifyListeners(t, e = !0) {
                const n = this.eventListeners.get(t);
                if (n) {
                  for (const t of n) t();
                  e && this.eventListeners.delete(t);
                }
              }
              clearListeners() {
                this.eventListeners.clear();
              }
            }.prototype,
            "notifyListeners",
            null,
          ));
        var B = n(95091),
          L = n(87269),
          N = n(69478),
          D = n(98702),
          F = n(25211),
          H = n.n(F),
          U = n(62962),
          G = n.n(U),
          K = n(20310),
          q = n.n(K),
          J = n(29290),
          X = n.n(J),
          Y = n(47289),
          Q = n.n(Y),
          tt = n(24834),
          et = n.n(tt),
          nt = n(92775),
          it = {};
        ((it.styleTagTransform = et()),
          (it.setAttributes = X()),
          (it.insert = q().bind(null, "head")),
          (it.domAPI = G()),
          (it.insertStyleElement = Q()),
          H()(nt.Z, it),
          nt.Z && nt.Z.locals && nt.Z.locals);
        const rt = () =>
          i.createElement(
            "div",
            {
              className: "tv-spinner tv-spinner--size_large tv-spinner--shown",
              role: "progressbar",
            },
            i.createElement(
              "div",
              { className: "tv-spinner__spinner-layer" },
              i.createElement("div", {
                className: "tv-spinner__background tv-spinner__width_element",
              }),
              i.createElement("div", {
                className:
                  "tv-spinner__circle-clipper tv-spinner__width_element tv-spinner__circle-clipper--left",
              }),
              i.createElement("div", {
                className:
                  "tv-spinner__circle-clipper tv-spinner__width_element tv-spinner__circle-clipper--right",
              }),
            ),
          );
        function ot(t, e, n = []) {
          (0, i.useEffect)(() => {
            if (!t) return;
            let n = t.subscribe(e);
            const i = () => {
              (n?.unsubscribe(), (n = null));
            };
            return (
              window.addEventListener("beforeunload", i),
              () => {
                (window.removeEventListener("beforeunload", i), i());
              }
            );
          }, n);
        }
        var st,
          at,
          lt = n(59391);
        (!(function (t) {
          ((t[(t.None = 0)] = "None"),
            (t[(t.Up = 1)] = "Up"),
            (t[(t.Down = 2)] = "Down"));
        })(st || (st = {})),
          (function (t) {
            ((t[(t.Left = 0)] = "Left"),
              (t[(t.Middle = 1)] = "Middle"),
              (t[(t.Right = 2)] = "Right"));
          })(at || (at = {})));
        var ct = n(65948),
          dt = {};
        ((dt.styleTagTransform = et()),
          (dt.setAttributes = X()),
          (dt.insert = q().bind(null, "head")),
          (dt.domAPI = G()),
          (dt.insertStyleElement = Q()),
          H()(ct.Z, dt),
          ct.Z && ct.Z.locals && ct.Z.locals);
        const ut = ({
          onClick: t,
          icon: e,
          id: n,
          className: r = "",
          onMouseMove: o,
          onMouseLeave: s,
          title: a,
        }) =>
          i.createElement(
            "button",
            {
              id: n,
              onMouseUp: (e) => {
                e.button === at.Left && t(e);
              },
              onMouseMove: o,
              onMouseLeave: s,
              className: `action-button ${r}`,
              title: a,
              tabIndex: -1,
            },
            e,
          );
        var ht,
          pt = n(76699);
        function bt() {
          return (
            (bt =
              Object.assign ||
              function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
                }
                return t;
              }),
            bt.apply(this, arguments)
          );
        }
        const gt = function (t) {
          return i.createElement(
            "svg",
            bt(
              { xmlns: "http://www.w3.org/2000/svg", width: 12, height: 12 },
              t,
            ),
            ht ||
              (ht = i.createElement("path", {
                d: "m10.65.65-10 10 .7.7 10-10zm-9.3 0-.7.7 10 10 .7-.7z",
                fill: "currentColor",
              })),
          );
        };
        var mt;
        function ft() {
          return (
            (ft =
              Object.assign ||
              function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
                }
                return t;
              }),
            ft.apply(this, arguments)
          );
        }
        const wt = function (t) {
          return i.createElement(
            "svg",
            ft(
              {
                width: 18,
                height: 13,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              t,
            ),
            mt ||
              (mt = i.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M.5 0H0v13h10v-3H9v2H1V1h8v2h1V0H.5Zm13.763 2.668-.333-.374-.747.664.332.374L15.887 6H7v1h8.887l-2.372 2.668-.332.373.747.665.333-.374 3.11-3.5.296-.332-.295-.332-3.111-3.5Z",
                fill: "currentColor",
              })),
          );
        };
        var vt = n(3164),
          yt = {};
        ((yt.styleTagTransform = et()),
          (yt.setAttributes = X()),
          (yt.insert = q().bind(null, "head")),
          (yt.domAPI = G()),
          (yt.insertStyleElement = Q()),
          H()(vt.Z, yt),
          vt.Z && vt.Z.locals && vt.Z.locals);
        const Tt = (t, e, n) => {
            (e(n), t(n >= 1));
          },
          xt = () => {
            const { t } = (0, a.$G)(),
              [e, n] = (0, i.useState)(!1),
              [r, o] = (0, i.useState)(1);
            ((0, i.useEffect)(() => {
              Z()
                .getCountWindows()
                .then((t) => {
                  Tt(n, o, t);
                })
                .catch((t) => {
                  (0, b.x$)().error(
                    "<ButtonClose>.useEffect(): getWindowService().getCountWindows() error",
                    t,
                  );
                });
            }, []),
              ot(Z().chartWindowSubject, (t) => {
                Tt(n, o, t);
              }));
            const s = (0, i.useCallback)(
                (t) => {
                  if (e && !t.shiftKey)
                    return (
                      (0, b.x$)().info("Close button clicked - quitting app"),
                      void pt.app.quit()
                    );
                  ((0, b.x$)().info("Close button clicked - closing window"),
                    (0, N.Bz)().close());
                },
                [e],
              ),
              l = (0, i.useCallback)(
                (t) => {
                  t.shiftKey && e && n(!1);
                },
                [e],
              ),
              c = (0, i.useCallback)(
                (t) => {
                  t.shiftKey || e || n(r > 1);
                },
                [r, e],
              ),
              d = (0, i.useCallback)(() => {
                Z()
                  .getCountWindows()
                  .then((t) => {
                    Tt(n, o, t);
                  })
                  .catch((t) =>
                    (0, b.x$)().error(
                      "<ButtonClose>: getWindowService().getCountWindows() error in handleMouseLeave()",
                      t,
                    ),
                  );
              }, []),
              u = t("Click to quit the app"),
              h = t("Use Shift+click or Alt+F4 to close only this window");
            return e
              ? i.createElement(ut, {
                  onClick: s,
                  icon:
                    1 === r
                      ? i.createElement(gt, null)
                      : i.createElement(wt, null),
                  id: "close",
                  className: "window-control close-button",
                  onMouseMove: l,
                  title: `${u}\n${h}`,
                })
              : i.createElement(ut, {
                  onClick: s,
                  icon: i.createElement(gt, null),
                  id: "close",
                  className: "window-control close-button",
                  onMouseMove: c,
                  onMouseLeave: d,
                  title: t("Close window"),
                });
          };
        var St;
        function _t() {
          return (
            (_t =
              Object.assign ||
              function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
                }
                return t;
              }),
            _t.apply(this, arguments)
          );
        }
        const Et = function (t) {
          return i.createElement(
            "svg",
            _t(
              {
                width: 10,
                height: 11,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              t,
            ),
            St ||
              (St = i.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M6 3.793V.5H5v5h5v-1H6.707l3.281-3.281L9.293.5 6 3.793ZM.5.5H0v10h10v-3H9v2H1v-8h2v-1H.5Z",
                fill: "currentColor",
              })),
          );
        };
        var Ct;
        function kt() {
          return (
            (kt =
              Object.assign ||
              function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
                }
                return t;
              }),
            kt.apply(this, arguments)
          );
        }
        const Pt = function (t) {
          return i.createElement(
            "svg",
            kt(
              { xmlns: "http://www.w3.org/2000/svg", width: 12, height: 12 },
              t,
            ),
            Ct ||
              (Ct = i.createElement("path", {
                d: "M1 1v10h10V1H1zm1 1h8v8H2V2z",
                fill: "currentColor",
              })),
          );
        };
        var Vt;
        function $t() {
          return (
            ($t =
              Object.assign ||
              function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
                }
                return t;
              }),
            $t.apply(this, arguments)
          );
        }
        const Rt = function (t) {
          return i.createElement(
            "svg",
            $t(
              { xmlns: "http://www.w3.org/2000/svg", width: 12, height: 12 },
              t,
            ),
            Vt ||
              (Vt = i.createElement("path", {
                d: "M1 6h10v1H1z",
                fill: "currentColor",
              })),
          );
        };
        var Mt;
        function zt() {
          return (
            (zt =
              Object.assign ||
              function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
                }
                return t;
              }),
            zt.apply(this, arguments)
          );
        }
        const Ot = function (t) {
          return i.createElement(
            "svg",
            zt(
              { xmlns: "http://www.w3.org/2000/svg", width: 12, height: 12 },
              t,
            ),
            Mt ||
              (Mt = i.createElement("path", {
                d: "M3 1v2H1v8h8V9h2V1zm1 1h6v6H9V3H4zM2 4h6v6H2z",
                fill: "currentColor",
              })),
          );
        };
        var jt = n(76859),
          It = {};
        ((It.styleTagTransform = et()),
          (It.setAttributes = X()),
          (It.insert = q().bind(null, "head")),
          (It.domAPI = G()),
          (It.insertStyleElement = Q()),
          H()(jt.Z, It),
          jt.Z && jt.Z.locals && jt.Z.locals);
        const Zt = ({ windowStateSubject: t }) => {
          const { t: e } = (0, a.$G)(),
            [n, r] = (0, i.useState)(),
            [o] = (0, i.useState)((0, N.nb)().titleBarOptions);
          ot(t, r);
          const s = (function (t, e) {
            return t === A.kZ.FullscreenWithPanel
              ? {
                  icon: i.createElement(Et, null),
                  title: e("Exit full screen"),
                }
              : t === A.kZ.Maximized
                ? { icon: i.createElement(Ot, null), title: e("Restore") }
                : { icon: i.createElement(Pt, null), title: e("Maximize") };
          })(n, e);
          return i.createElement(
            i.Fragment,
            null,
            (0, L.Um)()
              ? i.createElement("div", { className: "window-controls darwin" })
              : i.createElement(
                  "div",
                  { className: "window-controls" },
                  o.showMinimize &&
                    i.createElement(ut, {
                      onClick: () => {
                        (0, N.Bz)()
                          .closeHTMLFullscreen()
                          .then(() => {
                            (0, N.Bz)().toggleMinimize();
                          })
                          .catch((t) => {
                            (0, b.x$)().error(
                              "<Controls>: getWindowControl().closeHTMLFullscreen() error in minimize()",
                              t,
                            );
                          });
                      },
                      icon: i.createElement(Rt, null),
                      id: "minimize",
                      className: "window-control",
                      title: e("Minimize"),
                    }),
                  o.showMaximize &&
                    i.createElement(ut, {
                      onClick: () => {
                        n !== A.kZ.FullscreenWithPanel
                          ? (0, N.Bz)().toggleMaximize()
                          : (0, N.Bz)().toggleFullscreen();
                      },
                      icon: s.icon,
                      id: "maximize",
                      className: "window-control",
                      title: s.title,
                    }),
                  i.createElement(xt, null),
                ),
          );
        };
        var Wt = n(16693),
          At = n(28305),
          Bt = n(93367),
          Lt = n(26770),
          Nt = n(97003),
          Dt = n(39499),
          Ft = n(82678),
          Ht = n(55973),
          Ut = n(45101),
          Gt =
            (n(68902),
            function (t, e, n, i) {
              var r,
                o = arguments.length,
                s =
                  o < 3
                    ? e
                    : null === i
                      ? (i = Object.getOwnPropertyDescriptor(e, n))
                      : i;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                s = Reflect.decorate(t, e, n, i);
              else
                for (var a = t.length - 1; a >= 0; a--)
                  (r = t[a]) &&
                    (s = (o < 3 ? r(s) : o > 3 ? r(e, n, s) : r(e, n)) || s);
              return (o > 3 && s && Object.defineProperty(e, n, s), s);
            });
        let Kt = class extends i.Component {
          static contextType = D.a;
          windowCountSubscription;
          state = {
            tabs: null,
            hoveredTabIndex: null,
            isLastWindow: !1,
            isTooltipVisibleGlobal: !1,
            lastTabRightBorder: 0,
            lastTabClickedId: "",
          };
          id = "";
          tabsMap = new Map();
          mounted = !1;
          tabPanelRef = i.createRef();
          getBounds() {
            const t =
              this.tabPanelRef?.current?.getBoundingClientRect() ?? At.rw;
            return Promise.resolve({
              x: t.x,
              y: t.y,
              width: t.width,
              height: t.height,
            });
          }
          async componentDidMount() {
            const t = async () => {
              try {
                const t = (0, At.N8)();
                (await t.registerDroppable(this.id, this.context.windowId),
                  (0, b.x$)().debug(
                    `TabPanel.componentDidMount(): "Registered droppable with id: ${(0, m.uJ)(this.id)}"`,
                  ));
              } catch (t) {
                (0, b.x$)().error(
                  `Could not register droppable ${(0, m.uJ)(this.id)}`,
                  t,
                );
              }
            };
            this.id ||
              ((this.id = p.i.registerRemoteObject(this, f.Y1)),
              (async () => {
                for (; !this.context.windowId; ) await (0, lt._v)(100);
              })().then(() => {
                (t(), (0, N.Bz)().registerTabPanel(this.id));
              }));
            const e = async () => {
              if (!(await (0, Lt.W2)().isFeatureEnabled(Lt.DF, !1))) return;
              const t = await Z().getCountWindows();
              (this.setState({ isLastWindow: 1 === t }),
                (this.windowCountSubscription =
                  Z().chartWindowSubject.subscribe((t) => {
                    this.setState({ isLastWindow: 1 === t });
                  })));
            };
            try {
              await e();
            } catch (t) {
              (0, b.x$)().error(
                "<TabPanel>.componentDidMount(): setShowLastTabCloseButton() error",
                t,
              );
            }
          }
          componentDidUpdate() {
            const t = this.getLastTab();
            if (this.tabPanelRef?.current && t) {
              this.tabPanelRef.current.scrollLeft =
                this.tabPanelRef.current.scrollWidth;
              const e = this.tabsMap
                .get(t.id)
                ?.current?.getBoundingClientRect().right;
              e &&
                e !== this.state.lastTabRightBorder &&
                this.setState({ lastTabRightBorder: e });
            }
          }
          componentWillUnmount() {
            (p.i.unregisterRemoteObject(this.id),
              this.windowCountSubscription?.unsubscribe(),
              (this.windowCountSubscription = void 0));
          }
          updateTabUrl(t, e) {
            return this.mounted
              ? (this.setState((n) => ({
                  ...n,
                  tabs:
                    n?.tabs?.map((n) => (n.id === t ? { ...n, url: e } : n)) ??
                    [],
                })),
                Promise.resolve())
              : Promise.resolve();
          }
          updateTabs(t, e) {
            if (!this.mounted) return Promise.resolve();
            if (t.length > 1) {
              const e = t[t.length - 1];
              e.offset && (e.offset = this.normalizeOffset(e.id, e.offset, t));
            }
            return (
              e && this.mouseOverTab(null),
              this.setState({ tabs: t }),
              Promise.resolve()
            );
          }
          render() {
            return (
              this.props.appReady &&
                !this.mounted &&
                ((this.mounted = !0),
                (0, Nt.Xp)(this),
                (0, b.x$)().debug(
                  'TabPanel.render(): "Tabs panel registered"',
                )),
              i.createElement(
                "div",
                { className: "tabs", ref: this.tabPanelRef },
                this.state.tabs &&
                  i.createElement(
                    "div",
                    {
                      className: "tabs-container",
                      style: { flexBasis: 250 * this.state.tabs.length + "px" },
                      onMouseLeave: () => this.mouseLeave(),
                    },
                    this.renderTabs(this.state.tabs),
                  ),
                i.createElement(Ft.s, {
                  offset: Math.round(this.state.lastTabRightBorder),
                }),
                i.createElement("div", { id: "placeholder" }),
                i.createElement("div", {
                  className: "draggable-area",
                  onDoubleClick: () => (0, N.Bz)().toggleMaximize(),
                }),
              )
            );
          }
          mouseLeave() {
            ((0, N.Bz)().closeTooltip(),
              this.setState({ isTooltipVisibleGlobal: !1 }),
              this.mouseOverTab(null));
          }
          renderTabs(t) {
            const e = (function (t, e) {
              if (0 === t) return Ut.G.Normal;
              const n = e / t;
              return n <= 44
                ? Ut.G.XXSmall
                : n <= 75
                  ? Ut.G.XSmall
                  : n <= 110
                    ? Ut.G.Small
                    : Ut.G.Normal;
            })(t.length, this.tabPanelRef?.current?.scrollWidth ?? 0);
            return t.map((n, r) =>
              i.createElement(Ht.O, {
                key: n.id,
                setRef: (t) => this.setTabRef(n.id, t),
                id: n.id,
                active: n.active,
                pinned: n.pinned,
                isChart: n.isChart ?? !1,
                hideCloseTabButton: this.state.isLastWindow && 1 === t.length,
                index: r,
                offset: n.offset,
                initialWidth: 1 === this.state.tabs?.length ? n.width : void 0,
                tabSize: e,
                lastTabClickedId: this.state.lastTabClickedId,
                setLastTabClickedId: (t) =>
                  this.setState({ lastTabClickedId: t }),
                tabsQuantity: this.state.tabs ? this.state.tabs.length : null,
                isTooltipVisibleGlobal: this.state.isTooltipVisibleGlobal,
                isTooltipVisibleGlobalChange: (t) =>
                  this.isTooltipVisibleGlobalChange(t),
                mouseOverTab: (t) => this.mouseOverTab(t),
                t: this.props.t,
              }),
            );
          }
          setTabRef(t, e) {
            this.tabsMap.set(t, e);
          }
          getLastTab() {
            if (this.state.tabs && 0 !== this.state.tabs.length)
              return this.getRealTabsWidth()
                ? this.state.tabs.reduce((t, e) => {
                    if (!t) return e;
                    const n = this.tabsMap
                        .get(t.id)
                        ?.current?.getBoundingClientRect(),
                      i = this.tabsMap
                        .get(e.id)
                        ?.current?.getBoundingClientRect();
                    return n && i ? (n.right > i.right ? t : e) : n ? t : e;
                  })
                : this.state.tabs[this.state.tabs.length - 1];
          }
          mouseOverTab(t) {
            this.setState({ hoveredTabIndex: t });
          }
          isTooltipVisibleGlobalChange(t) {
            this.setState({ isTooltipVisibleGlobal: t });
          }
          getTabPanelRightBound() {
            let t = this.tabPanelRef?.current?.getBoundingClientRect()?.right;
            return (t && (t -= 20), t);
          }
          getControlsAreaWidth() {
            const t = this.tabPanelRef?.current;
            if (!t || !t.lastElementChild) return;
            const e =
              window.innerWidth -
              t.lastElementChild.getBoundingClientRect().right;
            return { leftControlWidth: t.offsetLeft, rightControlWidth: e };
          }
          getRealTabsWidth() {
            const t =
              this.tabPanelRef?.current?.lastElementChild
                ?.previousElementSibling;
            if (!t) return;
            const e = t.getBoundingClientRect().right;
            return e
              ? "darwin" === process.platform
                ? e - this.getDarwinControlWidth()
                : e
              : void 0;
          }
          getTabsWidth() {
            const t = this.getLastTab();
            if (!t) return;
            let e = this.tabsMap
              .get(t.id)
              ?.current?.getBoundingClientRect()?.right;
            return e
              ? (t.offset && (e += t.offset),
                "darwin" === process.platform
                  ? e - this.getDarwinControlWidth()
                  : e)
              : void 0;
          }
          onDragStart(t) {}
          onDragEnd(t, e) {}
          async onDragOver(t) {
            const e = this.state.tabs,
              n = await this.getDragData();
            if (!e || !n || !this.state.prevCursorPoint) return;
            const i = e.find((t) => t.id === n.tabId);
            if (!i) return void this.attachTab(t.x, n.tabId);
            if (1 === this.state.tabs?.length) return;
            const r = t.x - this.state.prevCursorPoint.x;
            if (r >= -1 && r <= 1) return;
            const o = this.tabsMap.get(n.tabId)?.current;
            if (!o) return;
            const s = o.getBoundingClientRect();
            if (
              s.left > this.state.prevCursorPoint.x ||
              this.state.prevCursorPoint.x > s.right
            )
              return void this.setState({ prevCursorPoint: t });
            const a = this.getTabPanelRightBound();
            if (!a) return;
            const l = o.offsetWidth,
              c = o.getBoundingClientRect().left,
              d = c - (i.offset ?? 0);
            ((i.offset = this.getFittingOffset(
              r + (i.offset ?? 0),
              d,
              l,
              a - 25,
            )),
              this.setState({ tabs: e, prevCursorPoint: t }),
              this.onTabMove(n.tabId, { x: c, y: 0, width: l, height: A.E7 }));
          }
          async onDragEnter(t) {
            (console.log("drag enter"), (0, N.Bz)().bringToFront());
            const e = await this.getDragData();
            e &&
              (1 === this.state.tabs?.length &&
              this.state.tabs.find((t) => t.id === e.tabId)
                ? (0, Bt.l)().startWindowDrag(this.context.windowId, e.tabId, t)
                : (this.setState({ prevCursorPoint: t }),
                  this.attachTab(t.x, e.tabId)));
          }
          async onDragLeave(t) {
            if (
              (console.log("drag leave"),
              !this.state.tabs || 1 === this.state.tabs.length)
            )
              return;
            const e = await this.getDragData();
            if (!e) return;
            const n = this.tabsMap
                .get(e.tabId)
                ?.current?.getBoundingClientRect(),
              i = this.getTabPanelRightBound();
            if (i) {
              if (n) {
                const e = Math.round(n.width / 2);
                t.x >= i - e ? (t.x = i - e) : t.x <= 0 && (t.x = e);
              }
              ((0, Bt.l)().dragTabOut(
                this.context.windowId,
                e.tabId,
                t,
                n?.width,
                this.getControlsAreaWidth(),
              ),
                this.resetTabsOffset());
            }
          }
          async onDrop() {
            if (!this.state.tabs) return;
            const t = await this.getDragData();
            if (!t) return;
            const e = this.tabsMap
              .get(t.tabId)
              ?.current?.getBoundingClientRect();
            if (!e) return;
            const n = e.left + e.width / 2,
              i = this.state.tabs.findIndex((e) => e.id === t.tabId),
              r = this.getTabIndexByCoordinate(n);
            if (
              ((0, b.x$)().debug(
                `TabPanel.onDrop(): "New tab index: ${r}, oldTabIndex: ${i}"`,
              ),
              setTimeout(() => {
                ((0, lt.wK)((0, N.Bz)().resetTabs()), this.resetTabsOffset());
              }, 100),
              !(i < 0 || r < 0) && i !== r)
            ) {
              const { pinned: t } = this.state.tabs[i];
              (0, lt.wK)(
                this.onDropControllerToMoveTab({
                  oldIndex: i,
                  newIndex: r,
                  tabs: this.state.tabs,
                  isPinned: t,
                }),
              );
            }
          }
          async onDropControllerToMoveTab({
            oldIndex: t,
            newIndex: e,
            tabs: n,
            isPinned: i,
          }) {
            let r = e;
            const o = n.findIndex(({ pinned: t }) => !t);
            (i
              ? -1 !== o && e >= o
                ? (r = o - 1)
                : e >= n.length && (r = n.length - 1)
              : e < o
                ? (r = o)
                : e >= n.length && (r = n.length - 1),
              this.mouseOverTab(r),
              await (0, N.Bz)().moveTab(t, r));
          }
          getTabIndexByCoordinate(t, e) {
            if (!this.state.tabs) return -1;
            const n = this.getRealTabsWidth();
            if (!n) return -1;
            const i = n / (e ?? this.state.tabs.length),
              r =
                "darwin" === process.platform
                  ? t - this.getDarwinControlWidth()
                  : t,
              o = Math.floor(r / i);
            return Math.min(o, e ?? this.state.tabs.length);
          }
          resetTabsOffset() {
            (this.isTooltipVisibleGlobalChange(!1),
              this.setState((t) => ({ ...t, tabs: (0, Dt.M)(t.tabs) })));
          }
          onTabMove(t, e) {
            const n = this.state.tabs;
            if (!n) return;
            const i = Math.min(this.getHoveredTab(e), n.length - 1),
              r = (0, Dt.F)(t, e.width, i, n);
            r && this.setState({ tabs: r.tabState });
          }
          attachTab(t, e) {
            const n = this.state.tabs;
            if (!n) return;
            if (n.find((t) => t.id === e))
              return void (0, b.x$)().debug(
                'TabPanel.attachTab(): "Skipping tab attach, tab already belongs to current window"',
              );
            const i = this.getTabsWidth();
            if (!i) return;
            const r = n.length,
              o = this.getTabIndexByCoordinate(t, r + 1);
            if (o < 0) return;
            (0, b.x$)().debug(
              `TabPanel.attachTab(): "Tabswidth: ${i}, tabs count: ${r}"`,
            );
            let s = 0;
            (console.log(`newtabindex: ${o}, tabscount: ${r}`),
              o === r + 1 &&
                ((s = t - i / (r + 1) / 2 - i - Wt.Ai), s < 0 && (s = 0)),
              (0, Bt.l)().dragTabIn(this.context.windowId, o, s));
          }
          getFittingOffset(t, e, n, i) {
            if (
              (0, lt.Um)() &&
              this.context.windowStateSubject.value !== A.kZ.Fullscreen &&
              e + t <= this.getDarwinControlWidth()
            )
              return -e + this.getDarwinControlWidth();
            if (e + t <= 0) return -e;
            if (e + n + t >= i) {
              const t = i - e - n;
              return t < 0 ? 0 : t;
            }
            return t;
          }
          normalizeOffset(t, e, n) {
            (0, b.x$)().debug(
              `TabPanel.normalizeOffset(): "will normalize tab offset ${e}"`,
            );
            const i = this.tabsMap.get(t)?.current,
              r = this.getTabsWidth();
            if (!r) return e;
            const o = this.getTabPanelRightBound();
            if (!o)
              return (
                (0, b.x$)().warn(
                  'TabPanel.normalizeOffset(): "No tab panel right bound"',
                ),
                e
              );
            const s = r / (i ? n.length : n.length - 1),
              a = i ? i.getBoundingClientRect().left : r;
            return (
              (0, b.x$)().debug(
                `TabPanel.normalizeOffset(): "Tab width: ${s}, tabs right bound: ${r}, tab left: ${a}, tabs count: ${n.length}, panel right bound: ${o}"`,
              ),
              this.getFittingOffset(e, a, s, o)
            );
          }
          async getDragData() {
            return (0, At.N8)().getDragData();
          }
          getHoveredTab(t) {
            return this.getTabIndexByCoordinate(t.x + t.width / 2);
          }
          getDarwinControlWidth() {
            return this.context.isRtlSystem ? 0 : Wt.cj;
          }
        };
        (Gt([g.t], Kt.prototype, "updateTabUrl", null),
          Gt([g.t], Kt.prototype, "updateTabs", null),
          (Kt = Gt([(0, Nt.t6)(f.Y1), (0, g.r)("TabPanel")], Kt)));
        var qt,
          Jt = n(58931),
          Xt = n(60375);
        (!(function (t) {
          ((t[(t.NoAuthentication = 0)] = "NoAuthentication"),
            (t[(t.WaitingToken = 1)] = "WaitingToken"),
            (t[(t.TokenReady = 2)] = "TokenReady"),
            (t[(t.Waiting2FA = 3)] = "Waiting2FA"),
            (t[(t.Authenticated = 4)] = "Authenticated"),
            (t[(t.Error = 5)] = "Error"));
        })(qt || (qt = {})),
          n(57310),
          n(41602));
        const Yt = "user:id";
        function Qt(t, e) {
          return t.find((t) => t.type === e);
        }
        class te {
          claims;
          session;
          constructor(t, e) {
            ((this.claims = t), (this.session = e));
          }
          get id() {
            return this.getClaim(Yt, "");
          }
          get username() {
            return this.getClaim("user:username", this.id);
          }
          get isAuthenticated() {
            return (function (t, e) {
              const n = Qt(t, e);
              return void 0 !== n?.value;
            })(this.claims, Yt);
          }
          get isAnonymous() {
            return !this.isAuthenticated;
          }
          get userpic() {
            return this.getClaim("user:pic", "");
          }
          get isPro() {
            return !!this.getClaim("user:pro", "");
          }
          get plan() {
            return this.getClaim("user:plan", "");
          }
          get userPlanBadgeName() {
            return this.getClaim("user:pro_badge_name") ?? "free";
          }
          getClaim(t, e) {
            const n = Qt(this.claims, t);
            return n?.value ?? e;
          }
          hasClaim(t, e) {
            return (function (t, e, n) {
              const i = t.find((t) => t.type === e);
              return void 0 !== i && (void 0 === n || i.value === n);
            })(this.claims, t, e);
          }
        }
        var ee = n(79621);
        const ne = ({ className: t = "", ...e }) =>
          i.createElement(ee.J, { ...e, className: `ui-lib-icon ${t}` });
        var ie,
          re = n(20313);
        function oe() {
          return (
            (oe =
              Object.assign ||
              function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
                }
                return t;
              }),
            oe.apply(this, arguments)
          );
        }
        const se = function (t) {
          return i.createElement(
            "svg",
            oe(
              {
                width: 21,
                height: 16,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              t,
            ),
            ie ||
              (ie = i.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M20 1h-4v7.6a5.507 5.507 0 0 0-1 .657V5h-4v10h2.207c.099.349.23.683.393 1H0v-5h5V7h5V4h5V0h6v8.6a5.465 5.465 0 0 0-1-.393V1ZM10 8H6v7h4V8Z",
                fill: "#787B86",
              })),
          );
        };
        var ae;
        function le() {
          return (
            (le =
              Object.assign ||
              function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
                }
                return t;
              }),
            le.apply(this, arguments)
          );
        }
        const ce = function (t) {
          return i.createElement(
            "svg",
            le(
              {
                width: 7,
                height: 7,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              t,
            ),
            ae ||
              (ae = i.createElement("circle", {
                cx: 3.5,
                cy: 3.5,
                r: 3.5,
                fill: "#FB8C00",
              })),
          );
        };
        var de = n(21433),
          ue = {};
        ((ue.styleTagTransform = et()),
          (ue.setAttributes = X()),
          (ue.insert = q().bind(null, "head")),
          (ue.domAPI = G()),
          (ue.insertStyleElement = Q()),
          H()(de.Z, ue),
          de.Z && de.Z.locals && de.Z.locals);
        const he = () => {
          const { t } = (0, a.$G)();
          return i.createElement(
            "div",
            {
              className: "bad-connection-icon-wrapper",
              title: t(
                "Poor signal means delays. Leave the woodland for flawless updates.",
              ),
            },
            i.createElement(
              "div",
              { className: "bad-connection-icon" },
              i.createElement(se, null),
            ),
            i.createElement(
              "div",
              { className: "blinking-dot" },
              i.createElement(ce, null),
            ),
          );
        };
        var pe = n(29265),
          be = n(91369),
          ge = {};
        ((ge.styleTagTransform = et()),
          (ge.setAttributes = X()),
          (ge.insert = q().bind(null, "head")),
          (ge.domAPI = G()),
          (ge.insertStyleElement = Q()),
          H()(be.Z, ge),
          be.Z && be.Z.locals && be.Z.locals);
        const me = ({ icon: t }) => {
          const { t: e } = (0, a.$G)(),
            { windowId: n } = (0, i.useContext)(D.a),
            [r, o] = (0, i.useState)(!1);
          return (
            ot((0, pe.k)().isMenuOpenedChange, o),
            i.createElement(ut, {
              onClick: () => {
                (0, pe.k)()
                  .showMenu(n)
                  .catch((t) => {
                    (0, b.x$)().error(
                      "<UserButton.showMainMenu()>: mainMenuServiceProxy().showMenu()",
                      t,
                    );
                  });
              },
              icon: t,
              id: "main-menu-button",
              className: "main-menu-button " + (r ? "opened" : ""),
              title: e("Main menu"),
            })
          );
        };
        var fe = n(31787);
        const we = () => {
          const { t } = (0, a.$G)();
          return i.createElement(ut, {
            onClick: () => {
              ((0, b.x$)().info("App render(): on new window click"),
                Z()
                  .openNewWindow()
                  .catch((t) => {
                    (0, b.x$)().error("", t);
                  }));
            },
            icon: i.createElement(ne, { icon: fe.R }),
            id: "new-window-button",
            title: t("Open new window"),
          });
        };
        var ve = n(22047),
          ye = {};
        ((ye.styleTagTransform = et()),
          (ye.setAttributes = X()),
          (ye.insert = q().bind(null, "head")),
          (ye.domAPI = G()),
          (ye.insertStyleElement = Q()),
          H()(ve.Z, ye),
          ve.Z && ve.Z.locals && ve.Z.locals);
        const Te = () => {
          const [t, e] = (0, i.useState)(null),
            [n, r] = (0, i.useState)(!0);
          return (
            ot(p.i.provideProxy(f.a0).networkStatusChange, r),
            ot(p.i.provideProxy("tvd:user-service").userChange, (t) => {
              e(new te(t));
            }),
            i.createElement(
              "div",
              { className: "tab-panel-actions" },
              !n && i.createElement(he, null),
              !t?.isAnonymous &&
                i.createElement(
                  i.Fragment,
                  null,
                  i.createElement(we, null),
                  i.createElement(re.Q, null),
                ),
              t &&
                i.createElement(me, {
                  icon: i.createElement(ne, { icon: t.id ? Jt.P : Xt.S }),
                }),
            )
          );
        };
        var xe = n(29998),
          Se = {};
        ((Se.styleTagTransform = et()),
          (Se.setAttributes = X()),
          (Se.insert = q().bind(null, "head")),
          (Se.domAPI = G()),
          (Se.insertStyleElement = Q()),
          H()(xe.Z, Se),
          xe.Z && xe.Z.locals && xe.Z.locals);
        var _e = n(79181),
          Ee = {};
        ((Ee.styleTagTransform = et()),
          (Ee.setAttributes = X()),
          (Ee.insert = q().bind(null, "head")),
          (Ee.domAPI = G()),
          (Ee.insertStyleElement = Q()),
          H()(_e.Z, Ee),
          _e.Z && _e.Z.locals && _e.Z.locals);
        var Ce = function (t, e, n, i) {
          var r,
            o = arguments.length,
            s =
              o < 3
                ? e
                : null === i
                  ? (i = Object.getOwnPropertyDescriptor(e, n))
                  : i;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            s = Reflect.decorate(t, e, n, i);
          else
            for (var a = t.length - 1; a >= 0; a--)
              (r = t[a]) &&
                (s = (o < 3 ? r(s) : o > 3 ? r(e, n, s) : r(e, n)) || s);
          return (o > 3 && s && Object.defineProperty(e, n, s), s);
        };
        (p.i.initializeRpc(), h.Pd.exists || h.Pd.initialize((0, h.kS)()));
        const ke = ["keydown", "keyup", "keypress"];
        let Pe = class extends i.Component {
          state = {
            isReady: !1,
            windowWidth: window.innerWidth,
            isAppWindowFocused: !0,
            isLoading: !0,
            windowState: A.kZ.Normal,
            hoverCheckSubject: new c.Subject(),
            windowResizeSubject: new c.Subject(),
            tabHintPosition: -1,
            isConnectionGood: !0,
            isRtlSystem: !1,
            unload: !1,
            hasTokyoNight: !1,
            hideTabsFullscreenMacOS: !1,
          };
          windowId = "";
          windowStateSubject = new c.BehaviorSubject(A.kZ.Normal);
          eventListeners = new Map();
          macosHideTabsInFullscreenSubscription;
          initialize() {
            this.subscribeOnWindowEvents();
          }
          componentDidMount() {
            (O(document.documentElement),
              M()
                .isRtlSystem()
                .then((t) => {
                  this.setState({ isRtlSystem: t });
                })
                .catch((t) => {
                  (0, b.x$)().error(
                    '<App>.componentDidMount(): "localeServiceProxy().isRtlSystem() error"',
                    t,
                  );
                }),
              this.tokyoNightInitialize(),
              (0, B.wK)(this.setParentId()),
              this.state.windowResizeSubject
                .pipe((0, d.bh)(100))
                .subscribe((t) => {
                  this.setState({ windowWidth: t });
                }),
              this.windowStateSubject.subscribe((t) => {
                this.setState({ windowState: t });
              }),
              Promise.allSettled([
                (0, N.Bz)().getWindowStateAsync(),
                (async () => {
                  for (; !this.props.tReady; ) await (0, B._v)(100);
                })(),
              ])
                .then(([t, e]) => {
                  ("fulfilled" === t.status &&
                    ((0, b.x$)().debug(
                      `<App>.componentDidMount(): "Will update window state: ${t.value}"`,
                    ),
                    this.windowStateChanged(t.value)),
                    "fulfilled" === e.status &&
                      (p.i.registerRemoteService(this, f.NB),
                      this.setState({ isReady: !0 }, () => {
                        ((0, b.x$)().debug(
                          '<App>.componentDidMount(): "App sends ready event"',
                        ),
                          (0, N.ZU)());
                      })));
                })
                .catch((t) => {
                  (0, b.x$)().error(
                    "<App>.componentDidMount(): Promise.allSettled() error",
                    t,
                  );
                }));
          }
          componentWillUnmount() {
            this.unsubscribeEvents();
          }
          render() {
            if (!this.props.tReady)
              return (
                (0, b.x$)().warn(
                  `[${(0, m.uJ)(this.windowId)}] App.render(): "translations not ready, loading stub markdown"`,
                ),
                this.renderStub()
              );
            if (this.state.unload) return i.createElement(i.Fragment, null);
            const { t } = this.props,
              { titleBarOptions: e } = (0, N.nb)(),
              n = (0, l.W)({
                app: !0,
                hidden:
                  this.state.windowState === A.kZ.Fullscreen &&
                  this.state.hideTabsFullscreenMacOS,
                [this.state.isRtlSystem ? "rtl-system" : "ltr-system"]: !0,
                active: this.state.isAppWindowFocused,
                [(0, L.Um)() ? "darwin" : "win"]: !0,
                fullscreen: this.state.windowState === A.kZ.Fullscreen,
              }),
              r = {
                windowStateSubject: this.windowStateSubject,
                windowResizeSubject: this.state.windowResizeSubject,
                hoverCheckSubject: this.state.hoverCheckSubject,
                windowFocused: this.state.isAppWindowFocused,
                windowId: this.windowId,
                isRtlSystem: this.state.isRtlSystem,
              };
            return i.createElement(
              "div",
              {
                className: n,
                onClick: () => {
                  (0, N.Bz)().triggerMenuCloseEvent("tab-panel-click");
                },
              },
              i.createElement(
                "header",
                {
                  className:
                    "header " + (this.state.hasTokyoNight ? "tokyo-night" : ""),
                },
                i.createElement(Zt, {
                  windowStateSubject: this.windowStateSubject,
                }),
                e.showTabs &&
                  i.createElement(
                    D.a.Provider,
                    { value: r },
                    i.createElement(Kt, { appReady: this.state.isReady, t }),
                    i.createElement(Te, null),
                  ),
                !e.showTabs &&
                  e.title &&
                  i.createElement(
                    u.Z,
                    {
                      tag: "span",
                      name: "typography-regular-12px",
                      className: "window-title",
                    },
                    e.title,
                  ),
              ),
              i.createElement("div", { className: "underline" }),
              this.state.isLoading && i.createElement(rt, null),
            );
          }
          tokyoNightInitialize() {
            const t = Z().tokyoNightSubject.subscribe((t) =>
                this.setState({ hasTokyoNight: t }),
              ),
              e = () => {
                (t?.unsubscribe(), removeEventListener("beforeunload", e));
              };
            addEventListener("beforeunload", e);
          }
          renderStub() {
            return i.createElement(
              i.Fragment,
              null,
              i.createElement("div", { className: "header" }),
              i.createElement("div", { className: "underline tabs-underline" }),
            );
          }
          async setParentId() {
            ((this.windowId = await (0, N.Bz)().getWindowId()),
              (0, b.x$)().debug(
                `App.setParentId(): "Registered window id: ${(0, m.V$)(this.windowId)}"`,
              ));
          }
          subscribeOnWindowEvents() {
            ((0, N.Bz)().on(W.Dispose, () => {
              (this.setState({ unload: !0 }), this.unsubscribeEvents());
            }),
              (0, N.Bz)().isWindowFocusedChange.subscribe((t) => {
                this.setState({ isAppWindowFocused: t });
              }),
              (0, N.Bz)().windowLoadingChange.subscribe((t) => {
                this.setState({ isLoading: t });
              }),
              (0, L.Um)() &&
                (this.macosHideTabsInFullscreenSubscription = (0,
                j.f)().macosHideTabsInFullscreenChange.subscribe((t) => {
                  this.setState({ hideTabsFullscreenMacOS: t });
                })));
            const t = (t) => ({
              key: t.key,
              code: t.code,
              which: t.which,
              altKey: t.altKey,
              shiftKey: t.shiftKey,
              metaKey: t.metaKey,
              ctrlKey: t.ctrlKey,
              charCode: t.charCode,
              keyCode: t.keyCode,
              location: t.location,
              composed: t.composed,
              isComposing: t.isComposing,
            });
            for (const e of ke) {
              const n = (n) => {
                const i = [];
                if (
                  (window &&
                    window.navigator &&
                    i.push(...window.navigator.languages),
                  n instanceof KeyboardEvent)
                ) {
                  if ("F1" === n.key) return;
                  (0, B.wK)((0, N.Bz)().notifyInputEvent(e, t(n), i));
                }
              };
              (window.addEventListener(e, n), this.eventListeners.set(e, n));
            }
            const e = () =>
              this.state.windowResizeSubject.next(window.innerWidth);
            (window.addEventListener("resize", e),
              this.eventListeners.set("resize", e));
          }
          unsubscribeEvents() {
            this.macosHideTabsInFullscreenSubscription?.unsubscribe();
            for (const t of this.eventListeners.keys()) {
              const e = this.eventListeners.get(t);
              e &&
                (console.log(`Will remove listener for event ${t}`),
                window.removeEventListener(t, e));
            }
          }
          windowStateChanged(t) {
            this.windowStateSubject.next(t);
          }
          async getReport() {
            let t = process.getCPUUsage();
            return (
              await (0, B._v)(1e3),
              (t = process.getCPUUsage()),
              {
                memReport: process.getBlinkMemoryInfo(),
                procMemReport: await process.getProcessMemoryInfo(),
                cpuReport: t,
              }
            );
          }
        };
        (Ce([g.t], Pe.prototype, "initialize", null),
          Ce([g.t], Pe.prototype, "componentDidMount", null),
          Ce([g.t], Pe.prototype, "componentWillUnmount", null),
          Ce([g.t], Pe.prototype, "tokyoNightInitialize", null),
          Ce([g.t], Pe.prototype, "setParentId", null),
          Ce([g.t], Pe.prototype, "subscribeOnWindowEvents", null),
          Ce([g.t], Pe.prototype, "getReport", null),
          (Pe = Ce([(0, g.r)("App")], Pe)));
        const Ve = (0, a.Zh)()(Pe);
        (n(96893), (0, o.sX)(), (0, s.g)());
        const $e = document.getElementById("root");
        $e &&
          (0, r.s)($e).render(
            i.createElement(function () {
              return i.createElement(Ve, { useSuspense: !1 });
            }, null),
          );
      },
      31937: (t, e, n) => {
        n.d(e, { Y: () => s, V: () => a });
        var i = n(54041),
          r = n(10496),
          o = n(98886);
        let s;
        class a {
          onRequestSubject = new i.Subject();
          onResponseSubject = new i.Subject();
          onRequest = this.onRequestSubject.asObservable();
          onResponse = this.onResponseSubject.asObservable();
          constructor() {
            (this.onMessage(o.f, (t, e) => {
              const n = {
                ...e,
                responseChannel: this.makeResponseChannel(t),
                context: t,
              };
              try {
                ((s = t), this.onRequestSubject.next(n));
              } finally {
                s = void 0;
              }
            }),
              this.onMessage(o.B, (t, e) => {
                try {
                  this.onResponseSubject.next(e);
                } catch (t) {
                  throw (
                    (0, r.n_)({
                      level: "error",
                      breadcrumb: `[BaseIpcInbox.constructor()]: onMessage() error: ${JSON.stringify(e)}`,
                    }),
                    t
                  );
                }
              }));
          }
        }
      },
      11213: (t, e, n) => {
        n.d(e, { uJ: () => r, V$: () => o });
        var i = n(57118);
        function r(t) {
          return t ? (t.length ? t.split("-")[0] : t) : "";
        }
        function o(t) {
          if (!t) return "";
          if ((0, i.bV)(t)) return t;
          const e = t.split("?")[0].replace(/^(?:file\:\/\/)/, "");
          let n = __dirname;
          if (((n += "/"), e.includes(__dirname)))
            return e.replace(__dirname, "");
          n.includes("\\") && (n = n.replace(/\\/gm, "/"));
          const r = encodeURIComponent(n);
          if (e.includes(r)) return e.replace(r, "");
          const o = n.split("/")?.filter((t) => !!t);
          return (
            (n = o[o.length - 1] ?? ""),
            e.includes(n) ? (e.split(n)?.at(-1) ?? e) : e
          );
        }
        n(52364);
      },
      55442: (t, e, n) => {
        n.d(e, { sX: () => i.s, n_: () => r.n_, YA: () => r.YA });
        var i = n(17066),
          r = (n(18737), n(10496));
      },
      18737: (t, e, n) => {
        n(77118);
      },
      94850: (t, e, n) => {
        n.d(e, { a0: () => i, NB: () => r, Y1: () => o, E$: () => s });
        const i = "tvd:network-indication-service",
          r = "tvd:tabbed-window-events",
          o = "tvd:tabs-container",
          s = "tvd:tab";
      },
      95240: (t, e, n) => {
        n.d(e, { l: () => i });
        const i = "tvd:main-menu-service";
      },
      29265: (t, e, n) => {
        n.d(e, { k: () => o });
        var i = n(36458),
          r = n(95240);
        function o() {
          return i.i.provideProxy(r.l);
        }
      },
      96203: (t, e, n) => {
        n.d(e, { N8: () => o, rw: () => s });
        var i = n(36458);
        const r = "tvd:drag-service";
        function o() {
          return i.i.provideProxy(r);
        }
        const s = { x: 0, y: 0, width: 0, height: 0 };
      },
      29060: (t, e, n) => {
        n.d(e, { og: () => i, mZ: () => r });
        const i = "tvd:locale-get-translations",
          r = "tvd:common-view-ready";
      },
      95091: (t, e, n) => {
        (n.d(e, { _v: () => r, wK: () => o }), n(13855));
        var i = n(97003);
        function r(t, e) {
          return e && e.signal.aborted
            ? Promise.resolve(!1)
            : new Promise((n) => {
                let i;
                const r = () => {
                  i && (clearTimeout(i), (i = void 0), n(!1));
                };
                (e && e.signal.addEventListener("abort", r, { once: !0 }),
                  (i = setTimeout(() => {
                    ((i = void 0),
                      e?.signal.removeEventListener("abort", r),
                      n(!0));
                  }, t)));
              });
        }
        function o(t) {
          t.catch((t) => {
            const e = (0, i.UD)(t);
            (console.warn(`Ignoring promise, but error: ${e}`),
              console.warn(t.stack));
          });
        }
      },
      41029: (t, e, n) => {
        (n.d(e, { Um: () => i.Um }), n(96486), n(16693));
        var i = n(87269);
      },
      67644: (t, e, n) => {
        var i;
        (n(65355),
          n(84011),
          n(41029),
          (function (t) {
            ((t.Enter = "Enter"),
              (t.Space = "Space"),
              (t.Tab = "Tab"),
              (t.ArrowUp = "ArrowUp"),
              (t.ArrowDown = "ArrowDown"),
              (t.Escape = "Escape"));
          })(i || (i = {})));
      },
      87269: (t, e, n) => {
        n.d(e, { Um: () => i });
        const i = () => "darwin" === process.platform;
      },
      57118: (t, e, n) => {
        (n.d(e, { bV: () => u }), n(57310));
        var i = n(62771);
        const r = "TARGET_TVD_HOST",
          o = "https://www.tradingview.com/",
          s = (0, i.V)(() => {
            const t = "http(s?):\\/\\/((\\w|-)*\\.)?tradingview\\.com";
            let e = o;
            return (
              r in process.env && (e = process.env[r] ?? o),
              null !== new RegExp(t, "i").exec(e)
                ? t
                : (e.endsWith("/") && (e = e?.substring(0, e.length - 1)),
                  e.replace(/\./gi, "\\.").replace(/\//gi, "\\/"))
            );
          });
        function a(t, e = !0) {
          const n = (t) => {
            let n = t
              .toString()
              .replace(/\./gi, "\\.")
              .replace(/(?<!\))\*/gi, "(.*)");
            return (
              n.match(/\w+(\/\((\.\*\)))/gi) &&
                (n = n.replace(/\/\((\.\*\))/gi, "(/(.*))?")),
              (n = n.replace(/\//gi, "\\/").replace(/\$\{TV\}/gi, s())),
              (n = `^${n}${e ? "$" : ""}`),
              new RegExp(n, "i")
            );
          };
          return "string" == typeof t ? n(t) : t.map(n);
        }
        const l = "${TV}/chart/([a-zA-Z0-9]{0,12})?/?",
          c = "${TV}/(\\w|-)*screener/*",
          d =
            ((0, i.V)(() => a(c)),
            (0, i.V)(() => a("${TV}/", !0)),
            (0, i.V)(() => a("${TV}/chart/", !0)),
            (0, i.V)(() => a(l)),
            (0, i.V)(() => a("(${TV}/chart/([a-zA-Z0-9]{0,12})?)/\\?*?")),
            (0, i.V)(() =>
              a(
                "${TV}/chart/[a-z0-9-._~:\\?#@!$&'()*+,;%=]+/[a-z0-9-._~:\\?#@!$&'()*+,;%=]+/",
                !0,
              ),
            ),
            (0, i.V)(() => a("${TV}/screener/*")),
            (0, i.V)(() => a("${TV}/heatmap/*")),
            (0, i.V)(() => a("${TV}/community/*")),
            (0, i.V)(() => a("${TV}/pine-script-docs/en/v5/Introduction.html")),
            (0, i.V)(() => a("${TV}/pine-script-reference/v5/")),
            (0, i.V)(() => a("${TV}/x/*")),
            (0, i.V)(() => a("${TV}/*")));
        function u(t) {
          return (function (t, e) {
            const n = t.split("\n").join("");
            return e instanceof RegExp ? e.test(n) : e.some((t) => t.test(n));
          })(t, d());
        }
        ((0, i.V)(() => a("${TV}/account-recovery/*")),
          (0, i.V)(() => a("${TV}/chat/*")),
          (0, i.V)(() => /:\/\/s3\..+\/snapshots\//i),
          (0, i.V)(() => a("${TV}/pine/*")),
          (0, i.V)(() => a("${TV}/markets/*")),
          (0, i.V)(() => a("${TV}/markets/*/news/")),
          (0, i.V)(() => a("${TV}/markets/stocks-*/*")),
          (0, i.V)(() => a("${TV}/markets/world-economy/*")),
          (0, i.V)(() => a("${TV}/u/TradingView/")),
          (0, i.V)(() => a("${TV}/news/*")),
          (0, i.V)(() => a("${TV}/news/")),
          (0, i.V)(() => a("${TV}/news/\\?market=*")),
          (0, i.V)(() => a("${TV}/news/\\?market=topstories")),
          (0, i.V)(() =>
            a("${TV}/HTML5-stock-forex-bitcoin-charting-library/"),
          ),
          (0, i.V)(() => a("${TV}/support/*")),
          (0, i.V)(() => a("https://status.tradingview.com/", !0)),
          (0, i.V)(() =>
            a([
              "${TV}/news/*",
              "${TV}/support/*",
              "${TV}/house-rules/*",
              "${TV}/key-events/*",
              "${TV}/symbols/*",
              "${TV}/heatmap/*",
              "${TV}/economic-calendar/",
              c,
              "${TV}/ideas/*",
              "${TV}/community/*",
              "${TV}/markets/*",
              "${TV}/sparks/*",
              "${TV}/education/*",
            ]),
          ),
          (0, i.V)(() => a("${TV}/markets/bonds/*")),
          (0, i.V)(() =>
            a([
              l,
              c,
              "${TV}/markets/*",
              "${TV}/symbols/*",
              "${TV}/(\\w|-)*calendar/*",
            ]),
          ));
      },
      72298: (t) => {
        t.exports = require("electron");
      },
      57147: (t) => {
        t.exports = require("fs");
      },
      71017: (t) => {
        t.exports = require("path");
      },
      57310: (t) => {
        t.exports = require("url");
      },
    },
    r = {};
  function o(t) {
    var e = r[t];
    if (void 0 !== e) return e.exports;
    var n = (r[t] = { id: t, exports: {} });
    return (i[t].call(n.exports, n, n.exports, o), n.exports);
  }
  ((o.m = i),
    (t = []),
    (o.O = (e, n, i, r) => {
      if (!n) {
        var s = 1 / 0;
        for (d = 0; d < t.length; d++) {
          for (var [n, i, r] = t[d], a = !0, l = 0; l < n.length; l++)
            (!1 & r || s >= r) && Object.keys(o.O).every((t) => o.O[t](n[l]))
              ? n.splice(l--, 1)
              : ((a = !1), r < s && (s = r));
          if (a) {
            t.splice(d--, 1);
            var c = i();
            void 0 !== c && (e = c);
          }
        }
        return e;
      }
      r = r || 0;
      for (var d = t.length; d > 0 && t[d - 1][2] > r; d--) t[d] = t[d - 1];
      t[d] = [n, i, r];
    }),
    (o.n = (t) => {
      var e = t && t.__esModule ? () => t.default : () => t;
      return (o.d(e, { a: e }), e);
    }),
    (n = Object.getPrototypeOf
      ? (t) => Object.getPrototypeOf(t)
      : (t) => t.__proto__),
    (o.t = function (t, i) {
      if ((1 & i && (t = this(t)), 8 & i)) return t;
      if ("object" == typeof t && t) {
        if (4 & i && t.__esModule) return t;
        if (16 & i && "function" == typeof t.then) return t;
      }
      var r = Object.create(null);
      o.r(r);
      var s = {};
      e = e || [null, n({}), n([]), n(n)];
      for (var a = 2 & i && t; "object" == typeof a && !~e.indexOf(a); a = n(a))
        Object.getOwnPropertyNames(a).forEach((e) => (s[e] = () => t[e]));
      return ((s.default = () => t), o.d(r, s), r);
    }),
    (o.d = (t, e) => {
      for (var n in e)
        o.o(e, n) &&
          !o.o(t, n) &&
          Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
    }),
    (o.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (o.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (o.r = (t) => {
      ("undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 }));
    }),
    (() => {
      var t;
      o.g.importScripts && (t = o.g.location + "");
      var e = o.g.document;
      if (!t && e && (e.currentScript && (t = e.currentScript.src), !t)) {
        var n = e.getElementsByTagName("script");
        n.length && (t = n[n.length - 1].src);
      }
      if (!t)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      ((t = t
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (o.p = t + "../"));
    })(),
    (() => {
      o.b = document.baseURI || self.location.href;
      var t = { 7778: 0 };
      o.O.j = (e) => 0 === t[e];
      var e = (e, n) => {
          var i,
            r,
            [s, a, l] = n,
            c = 0;
          if (s.some((e) => 0 !== t[e])) {
            for (i in a) o.o(a, i) && (o.m[i] = a[i]);
            if (l) var d = l(o);
          }
          for (e && e(n); c < s.length; c++)
            ((r = s[c]), o.o(t, r) && t[r] && t[r][0](), (t[s[c]] = 0));
          return o.O(d);
        },
        n = (global.webpackChunktradingview_desktop =
          global.webpackChunktradingview_desktop || []);
      (n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n))));
    })());
  var s = o.O(
    void 0,
    [7498, 686, 8078, 1070, 4637, 3160, 3970, 612, 819, 2184, 6086, 1160],
    () => o(56769),
  );
  s = o.O(s);
})();
