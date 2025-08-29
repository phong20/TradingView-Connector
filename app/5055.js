"use strict";
(global.webpackChunktradingview_desktop =
  global.webpackChunktradingview_desktop || []).push([
  [5055],
  {
    50151: (t, e) => {
      ((e.IS = void 0),
        (e.IS = function (t, e) {
          if (void 0 === t)
            throw new Error(
              "".concat(null != e ? e : "Value", " is undefined"),
            );
          return t;
        }));
    },
    18940: (t, e, n) => {
      n.d(e, { Z: () => i });
      var r = n(43392),
        a = n.n(r),
        o = n(8021),
        l = n.n(o)()(a());
      l.push([
        t.id,
        ".text-input-wrapper {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.text-input-container {\n\tposition: relative;\n}\n\n.text-input {\n\twidth: 100%;\n\n\t&:has(input:focus-visible) {\n\t\toutline: 2px solid var(--color-brand);\n\t\toutline-offset: -1px;\n\t}\n}\n\n.text-input-end-adornment {\n\tposition: absolute;\n\ttop: 50%;\n\ttransform: translate(0, -50%);\n\theight: 100%;\n\tdisplay: flex;\n\talign-items: center;\n\n\t[dir='ltr'] & {\n\t\t&.small {\n\t\t\tright: 4px;\n\t\t}\n\n\t\t&.medium {\n\t\t\tright: 11px;\n\t\t}\n\t}\n\n\t[dir='rtl'] & {\n\t\t&.small {\n\t\t\tleft: 4px;\n\t\t}\n\n\t\t&.medium {\n\t\t\tleft: 11px;\n\t\t}\n\t}\n}\n\n.text-input-error-icon {\n\tcolor: var(--color-content-primary-danger);\n}\n\n.text-input-clear-icon {\n\tcolor: var(--color-content-secondary-neutral-bold);\n}\n\n.text-input-password-icon {\n\tcolor: var(--color-content-primary-neutral);\n}\n",
        "",
      ]);
      const i = l;
    },
    40263: (t, e, n) => {
      n.d(e, { Z: () => i });
      var r = n(43392),
        a = n.n(r),
        o = n(8021),
        l = n.n(o)()(a());
      l.push([
        t.id,
        ".dialog.credentials {\n\t& > .dialog-title {\n\t\tmargin-bottom: 24px;\n\n\t\t&:has(+ .dialog-content > .broker-credentials > .broker-credentials-subtitle) {\n\t\t\tmargin-bottom: 0;\n\t\t}\n\t}\n\n\t& > .dialog-buttons {\n\t\tmargin-top: 16px;\n\t}\n}\n\n.broker-credentials {\n\tposition: relative;\n\tmargin-bottom: 24px;\n}\n\n.broker-credentials-subtitle {\n\tcolor: var(--color-dialog-title);\n\tmargin: 0 0 24px;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n}\n\n.broker-credentials-inputs {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 16px;\n}\n\n.broker-credentials-input {\n\t/* TODO: get rid of this rule when ui-lib colors are updated */\n\tbackground-color: transparent !important;\n}\n",
        "",
      ]);
      const i = l;
    },
    72124: (t, e, n) => {
      var r = n(25211),
        a = n.n(r),
        o = n(62962),
        l = n.n(o),
        i = n(20310),
        s = n.n(i),
        c = n(29290),
        d = n.n(c),
        p = n(47289),
        u = n.n(p),
        m = n(24834),
        b = n.n(m),
        g = n(18940),
        h = {};
      ((h.styleTagTransform = b()),
        (h.setAttributes = d()),
        (h.insert = s().bind(null, "head")),
        (h.domAPI = l()),
        (h.insertStyleElement = u()),
        a()(g.Z, h),
        g.Z && g.Z.locals && g.Z.locals);
    },
    75774: (t, e, n) => {
      n.d(e, { o: () => r.o });
      var r = n(79313);
    },
    79313: (t, e, n) => {
      n.d(e, { o: () => u });
      var r = n(50959),
        a = n(99413),
        o = n(47389),
        l = n(79621),
        i = n(3318),
        s = n(40873),
        c = n(869),
        d = n(83432),
        p = n(59391);
      n(72124);
      const u = ({
        value: t,
        onChange: e,
        id: n,
        allowClear: u = !1,
        allowShowPasswordWhenDisabled: m = !1,
        className: b = "",
        disabled: g = !1,
        errorMessage: h,
        inputRef: f,
        label: x,
        maxLength: v,
        name: w,
        onClear: k,
        onFocus: y,
        onBlur: C,
        placeholder: E,
        size: N = "small",
        startSlot: S,
        type: Z = "text",
        valid: P = !0,
      }) => {
        const R = (0, r.useRef)(null),
          D = f ?? R,
          [j, I] = (0, r.useState)(!1),
          [O, T] = (0, r.useState)({}),
          $ = document.activeElement === D.current,
          z = (0, r.useCallback)(
            (t) => {
              if (!t) return;
              const e = Math.round(t.getBoundingClientRect().width),
                n = (function (t) {
                  return { small: 4, medium: 11 }[t] ?? 0;
                })(N),
                r = (0, p.Sj)() ? "paddingLeft" : "paddingRight";
              T({ [r]: `${e + n}px` });
            },
            [N, $],
          ),
          A = u || "password" === Z || !P,
          B = u && ($ || !!t);
        return r.createElement(
          "div",
          { className: `text-input-wrapper ${b}` },
          x && r.createElement(o._, { htmlFor: n }, x),
          r.createElement(
            "div",
            { className: `text-input-container ${b}`, title: h },
            r.createElement(a.I, {
              id: n,
              value: t,
              onChange: e,
              className: `text-input ${b}`,
              disabled: g,
              intent: P ? "default" : "danger",
              maxLength: v,
              name: w,
              onFocus: y,
              onBlur: C,
              reference: D,
              startSlot: S,
              placeholder: E,
              size: N,
              style: O,
              type: "password" !== Z || j ? "text" : "password",
            }),
            A &&
              r.createElement(
                "div",
                { className: `text-input-end-adornment ${N}`, ref: z },
                !P &&
                  r.createElement(l.J, {
                    icon: d.P,
                    className: "ui-lib-icon text-input-error-icon",
                    title: h,
                  }),
                B &&
                  r.createElement(l.J, {
                    icon: i.n,
                    onClick: k,
                    className: "ui-lib-icon text-input-clear-icon",
                  }),
                "password" === Z &&
                  r.createElement(l.J, {
                    icon: j ? c.j : s.r,
                    onClick: () => {
                      (g && !m) || I((t) => !t);
                    },
                    className: "ui-lib-icon text-input-password-icon",
                  }),
              ),
          ),
        );
      };
    },
    76039: (t, e, n) => {
      (n.r(e), n.d(e, { default: () => k }));
      var r = n(50959),
        a = n(98078),
        o = n(17184),
        l = n(75774),
        i = n(25211),
        s = n.n(i),
        c = n(62962),
        d = n.n(c),
        p = n(20310),
        u = n.n(p),
        m = n(29290),
        b = n.n(m),
        g = n(47289),
        h = n.n(g),
        f = n(24834),
        x = n.n(f),
        v = n(40263),
        w = {};
      ((w.styleTagTransform = x()),
        (w.setAttributes = b()),
        (w.insert = u().bind(null, "head")),
        (w.domAPI = d()),
        (w.insertStyleElement = h()),
        s()(v.Z, w),
        v.Z && v.Z.locals && v.Z.locals);
      let k = class extends r.Component {
        componentDidMount() {
          const { enteredCredentials: t } = this.props.data;
          t &&
            this.props.inputChange({
              credentials: { account: t.account, password: t.password },
            });
        }
        render() {
          const {
            enteredCredentials: { account: t, password: e },
            isUpdateSavedPassword: n,
          } = this.props.data;
          return r.createElement(
            "div",
            { className: "broker-credentials" },
            n &&
              r.createElement(
                a.Z,
                {
                  tag: "p",
                  name: "typography-accent-20px-semibold",
                  className: "broker-credentials-subtitle",
                },
                t,
              ),
            r.createElement(
              "div",
              { className: "broker-credentials-inputs" },
              !n &&
                r.createElement(l.o, {
                  value: t,
                  onChange: () => {},
                  className: "broker-credentials-input",
                  label: this.props.t("Username"),
                  disabled: !0,
                  size: "medium",
                }),
              r.createElement(l.o, {
                value: e,
                onChange: () => {},
                className: "broker-credentials-input",
                allowShowPasswordWhenDisabled: !0,
                label: this.props.t("Password"),
                disabled: !0,
                size: "medium",
                type: "password",
              }),
            ),
          );
        }
      };
      k = (function (t, e, n, r) {
        var a,
          o = arguments.length,
          l =
            o < 3
              ? e
              : null === r
                ? (r = Object.getOwnPropertyDescriptor(e, n))
                : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, r);
        else
          for (var i = t.length - 1; i >= 0; i--)
            (a = t[i]) &&
              (l = (o < 3 ? a(l) : o > 3 ? a(e, n, l) : a(e, n)) || l);
        return (o > 3 && l && Object.defineProperty(e, n, l), l);
      })([(0, o.r)("CredentialDialog")], k);
    },
  },
]);
