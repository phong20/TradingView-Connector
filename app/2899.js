"use strict";
(global.webpackChunktradingview_desktop =
  global.webpackChunktradingview_desktop || []).push([
  [2899],
  {
    91378: (t, n, e) => {
      e.d(n, { Z: () => r });
      var s = e(43392),
        o = e.n(s),
        a = e(8021),
        i = e.n(a)()(o());
      i.push([
        t.id,
        ".notification-toast-container {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tbox-sizing: border-box;\n\tpadding: 0 12px;\n\tborder: 1px solid transparent;\n\tbackground-color: var(--color-dialog-bg);\n\theight: 43px;\n}\n\n.notification-toast-icon {\n\tdisplay: flex;\n}\n\n[dir='rtl'] .notification-toast-icon {\n\tmargin-left: 8px;\n}\n\n[dir='ltr'] .notification-toast-icon  {\n\tmargin-right: 8px;\n}\n\n.notification-toast-text {\n\tcolor: var(--color-main-text);\n\tfont-size: 13px;\n\tfont-weight: 400;\n\tline-height: 19px;\n}\n\n.success,\n.success>svg {\n\tcolor: var(--color-toast-success);\n\tborder-color: var(--color-toast-success);\n}\n",
        "",
      ]);
      const r = i;
    },
    52899: (t, n, e) => {
      (e.r(n), e.d(n, { default: () => C }));
      var s,
        o = e(50959),
        a = e(76133),
        i = e(29649),
        r = e(59391);
      function c() {
        return (
          (c =
            Object.assign ||
            function (t) {
              for (var n = 1; n < arguments.length; n++) {
                var e = arguments[n];
                for (var s in e)
                  Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
              }
              return t;
            }),
          c.apply(this, arguments)
        );
      }
      const l = function (t) {
        return o.createElement(
          "svg",
          c({ xmlns: "http://www.w3.org/2000/svg", width: 18, height: 18 }, t),
          s ||
            (s = o.createElement("path", {
              fillRule: "evenodd",
              d: "M9 0a9 9 0 1 0 0 18A9 9 0 0 0 9 0zm4.15 5.87a.75.75 0 0 0-1.3-.74l-3.51 6.15-2.31-2.31a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.18-.16l4-7z",
              fill: "currentColor",
            })),
        );
      };
      var d = e(25211),
        p = e.n(d),
        u = e(62962),
        h = e.n(u),
        g = e(20310),
        f = e.n(g),
        v = e(29290),
        m = e.n(v),
        x = e(47289),
        b = e.n(x),
        w = e(24834),
        k = e.n(w),
        y = e(91378),
        E = {};
      ((E.styleTagTransform = k()),
        (E.setAttributes = m()),
        (E.insert = f().bind(null, "head")),
        (E.domAPI = h()),
        (E.insertStyleElement = b()),
        p()(y.Z, E),
        y.Z && y.Z.locals && y.Z.locals,
        a.Pd.exists || a.Pd.initialize((0, a.kS)()));
      class C extends o.Component {
        state = { level: i.Rh.Success, text: "" };
        iconMap = new Map([[i.Rh.Success, o.createElement(l, null)]]);
        componentDidMount() {
          this.props.toastView &&
            this.setState(this.props.toastView.toast.message);
        }
        render() {
          const t = { borderRadius: (0, r.Um)() ? "12px" : "4px" };
          return o.createElement(
            "div",
            {
              className: `notification-toast-container ${this.state.level}`,
              style: t,
              onClick: () => {
                this.props.onClick?.();
              },
            },
            o.createElement(
              "span",
              { className: `notification-toast-icon ${this.state.level}` },
              this.iconMap.get(this.state.level),
            ),
            o.createElement(
              "span",
              { className: "notification-toast-text" },
              this.state.text,
            ),
          );
        }
      }
    },
    29649: (t, n, e) => {
      e.d(n, { Rh: () => a, P8: () => i });
      var s = e(36458);
      const o = "tvd:toast-service";
      var a;
      function i() {
        return s.i.provideProxy(o);
      }
      !(function (t) {
        ((t.Danger = "danger"),
          (t.Warning = "warning"),
          (t.Success = "success"),
          (t.Default = "default"));
      })(a || (a = {}));
    },
  },
]);
