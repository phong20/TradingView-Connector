"use strict";
(global.webpackChunktradingview_desktop =
  global.webpackChunktradingview_desktop || []).push([
  [813],
  {
    18940: (t, e, n) => {
      n.d(e, { Z: () => a });
      var o = n(43392),
        r = n.n(o),
        i = n(8021),
        s = n.n(i)()(r());
      s.push([
        t.id,
        ".text-input-wrapper {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.text-input-container {\n\tposition: relative;\n}\n\n.text-input {\n\twidth: 100%;\n\n\t&:has(input:focus-visible) {\n\t\toutline: 2px solid var(--color-brand);\n\t\toutline-offset: -1px;\n\t}\n}\n\n.text-input-end-adornment {\n\tposition: absolute;\n\ttop: 50%;\n\ttransform: translate(0, -50%);\n\theight: 100%;\n\tdisplay: flex;\n\talign-items: center;\n\n\t[dir='ltr'] & {\n\t\t&.small {\n\t\t\tright: 4px;\n\t\t}\n\n\t\t&.medium {\n\t\t\tright: 11px;\n\t\t}\n\t}\n\n\t[dir='rtl'] & {\n\t\t&.small {\n\t\t\tleft: 4px;\n\t\t}\n\n\t\t&.medium {\n\t\t\tleft: 11px;\n\t\t}\n\t}\n}\n\n.text-input-error-icon {\n\tcolor: var(--color-content-primary-danger);\n}\n\n.text-input-clear-icon {\n\tcolor: var(--color-content-secondary-neutral-bold);\n}\n\n.text-input-password-icon {\n\tcolor: var(--color-content-primary-neutral);\n}\n",
        "",
      ]);
      const a = s;
    },
    24809: (t, e, n) => {
      n.d(e, { Z: () => a });
      var o = n(43392),
        r = n.n(o),
        i = n(8021),
        s = n.n(i)()(r());
      s.push([
        t.id,
        ".combobox-container {\n\tposition: relative;\n\twidth: 100%;\n\theight: 34px;\n\tbox-sizing: border-box;\n\tdisplay: inline-flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tpadding: 5px 7px;\n\tcolor: var(--color-content-primary-neutral-bold);\n\tbackground-color: transparent;\n\tborder: 1px solid var(--color-border-primary-neutral-light);\n\tborder-radius: 6px;\n\n\t&:not(.disabled):not(.expanded):hover {\n\t\tborder-color: var(--color-border-primary-neutral);\n\t}\n\n\t&:focus-visible {\n\t\toutline: none;\n\t}\n\n\t&:focus-visible,\n\t&.expanded {\n\t\tborder-color: var(--color-border-primary-accent);\n\t}\n\n\t&.disabled {\n\t\tcolor: var(--color-content-primary-neutral);\n\t\tbackground-color: var(--color-container-fill-primary-neutral-extra-light);\n\t\tborder-color: var(--color-border-primary-neutral-normal);\n\t}\n}\n\n.combobox-label {\n\tfont-size: 14px;\n\twhite-space: nowrap;\n\toverflow-x: hidden;\n\ttext-overflow: ellipsis;\n\tmax-width: 300px;\n}\n\n.combobox-icon {\n\tline-height: 4px;\n\ttransition: transform .35s ease;\n\n\t&.rotated {\n\t\ttransform: rotate(180deg);\n\t}\n\n\t& > svg {\n\t\tcolor: var(--color-content-primary-neutral);\n\n\t\t.combobox-container.disabled & {\n\t\t\tcolor: var(--color-content-primary-neutral-light);\n\t\t}\n\t}\n}\n\n.combobox-dropdown {\n\tdisplay: flex;\n\tflex-direction: column;\n\tposition: absolute;\n\tlist-style: none;\n\twidth: inherit;\n\tbackground-color: var(--color-container-fill-tertiary-inverse);\n\tborder: 1px solid var(--color-border);\n\tborder-radius: 4px;\n\n\tmargin: 0;\n\tleft: 0;\n\ttop: 32px;\n\tpadding: 0px;\n\tbox-sizing: border-box;\n\tz-index: 1;\n\n\toverflow: hidden;\n\tvisibility: hidden;\n\n\t&:focus {\n\t\toutline: none;\n\t}\n\n\t&.visible {\n\t\tvisibility: visible;\n\t}\n}\n\n.combobox-dropdown-item {\n\tfont-size: 14px;\n\theight: 32px;\n\tposition: relative;\n\tpadding: 7px 7px;\n\tbox-sizing: border-box;\n\n\tdisplay: inline-block;\n\n\ttext-overflow: ellipsis;\n\twhite-space: nowrap;\n\twidth: 390px;\n\toverflow: hidden;\n\tflex-shrink: 0;\n\n\t&.selected {\n\t\tcolor: var(--color-content-primary-inverse);\n\t\tbackground-color: var(--color-container-fill-primary-neutral-extra-bold);\n\t}\n\n\t&:hover:not(.selected),\n\t&.key-tab-focus {\n\t\tbackground-color: var(--color-container-fill-primary-neutral-extra-light);\n\t}\n}\n",
        "",
      ]);
      const a = s;
    },
    72124: (t, e, n) => {
      var o = n(25211),
        r = n.n(o),
        i = n(62962),
        s = n.n(i),
        a = n(20310),
        l = n.n(a),
        c = n(29290),
        d = n.n(c),
        p = n(47289),
        u = n.n(p),
        h = n(24834),
        m = n.n(h),
        b = n(18940),
        w = {};
      ((w.styleTagTransform = m()),
        (w.setAttributes = d()),
        (w.insert = l().bind(null, "head")),
        (w.domAPI = s()),
        (w.insertStyleElement = u()),
        r()(b.Z, w),
        b.Z && b.Z.locals && b.Z.locals);
    },
    70969: (t, e, n) => {
      var o;
      (n.d(e, { v: () => o }),
        (function (t) {
          ((t.Down = "ArrowDown"),
            (t.Up = "ArrowUp"),
            (t.Right = "ArrowRight"),
            (t.Left = "ArrowLeft"));
        })(o || (o = {})));
    },
    75774: (t, e, n) => {
      n.d(e, { o: () => o.o });
      var o = n(79313);
    },
    79313: (t, e, n) => {
      n.d(e, { o: () => u });
      var o = n(50959),
        r = n(99413),
        i = n(47389),
        s = n(79621),
        a = n(3318),
        l = n(40873),
        c = n(869),
        d = n(83432),
        p = n(59391);
      n(72124);
      const u = ({
        value: t,
        onChange: e,
        id: n,
        allowClear: u = !1,
        allowShowPasswordWhenDisabled: h = !1,
        className: m = "",
        disabled: b = !1,
        errorMessage: w,
        inputRef: f,
        label: v,
        maxLength: x,
        name: g,
        onClear: y,
        onFocus: D,
        onBlur: k,
        placeholder: R,
        size: S = "small",
        startSlot: I,
        type: E = "text",
        valid: C = !0,
      }) => {
        const L = (0, o.useRef)(null),
          N = f ?? L,
          [j, Z] = (0, o.useState)(!1),
          [O, T] = (0, o.useState)({}),
          z = document.activeElement === N.current,
          A = (0, o.useCallback)(
            (t) => {
              if (!t) return;
              const e = Math.round(t.getBoundingClientRect().width),
                n = (function (t) {
                  return { small: 4, medium: 11 }[t] ?? 0;
                })(S),
                o = (0, p.Sj)() ? "paddingLeft" : "paddingRight";
              T({ [o]: `${e + n}px` });
            },
            [S, z],
          ),
          H = u || "password" === E || !C,
          P = u && (z || !!t);
        return o.createElement(
          "div",
          { className: `text-input-wrapper ${m}` },
          v && o.createElement(i._, { htmlFor: n }, v),
          o.createElement(
            "div",
            { className: `text-input-container ${m}`, title: w },
            o.createElement(r.I, {
              id: n,
              value: t,
              onChange: e,
              className: `text-input ${m}`,
              disabled: b,
              intent: C ? "default" : "danger",
              maxLength: x,
              name: g,
              onFocus: D,
              onBlur: k,
              reference: N,
              startSlot: I,
              placeholder: R,
              size: S,
              style: O,
              type: "password" !== E || j ? "text" : "password",
            }),
            H &&
              o.createElement(
                "div",
                { className: `text-input-end-adornment ${S}`, ref: A },
                !C &&
                  o.createElement(s.J, {
                    icon: d.P,
                    className: "ui-lib-icon text-input-error-icon",
                    title: w,
                  }),
                P &&
                  o.createElement(s.J, {
                    icon: a.n,
                    onClick: y,
                    className: "ui-lib-icon text-input-clear-icon",
                  }),
                "password" === E &&
                  o.createElement(s.J, {
                    icon: j ? c.j : l.r,
                    onClick: () => {
                      (b && !h) || Z((t) => !t);
                    },
                    className: "ui-lib-icon text-input-password-icon",
                  }),
              ),
          ),
        );
      };
    },
    5223: (t, e, n) => {
      n.d(e, { Z: () => L });
      var o = n(50959),
        r = n(17184),
        i = n(70969),
        s = n(96486),
        a = n(54041),
        l = n(89597);
      o.createContext({
        windowStateSubject: new a.BehaviorSubject(l.kZ.Normal),
        windowResizeSubject: new a.Subject(),
        hoverCheckSubject: new a.Subject(),
        windowFocused: !1,
        windowId: "",
        isRtlSystem: !1,
      });
      const c = o.createContext({ t: s.ZP.t });
      var d;
      function p() {
        return (
          (p =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n)
                  Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
              }
              return t;
            }),
          p.apply(this, arguments)
        );
      }
      const u = function (t) {
        return o.createElement(
          "svg",
          p(
            {
              width: 11,
              height: 7,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            t,
          ),
          d ||
            (d = o.createElement("path", {
              d: "m.5 1.5 5 4 5-4",
              stroke: "currentColor",
              strokeWidth: 1.5,
            })),
        );
      };
      var h = n(25211),
        m = n.n(h),
        b = n(62962),
        w = n.n(b),
        f = n(20310),
        v = n.n(f),
        x = n(29290),
        g = n.n(x),
        y = n(47289),
        D = n.n(y),
        k = n(24834),
        R = n.n(k),
        S = n(24809),
        I = {};
      ((I.styleTagTransform = R()),
        (I.setAttributes = g()),
        (I.insert = v().bind(null, "head")),
        (I.domAPI = w()),
        (I.insertStyleElement = D()),
        m()(S.Z, I),
        S.Z && S.Z.locals && S.Z.locals);
      var E = function (t, e, n, o) {
        var r,
          i = arguments.length,
          s =
            i < 3
              ? e
              : null === o
                ? (o = Object.getOwnPropertyDescriptor(e, n))
                : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          s = Reflect.decorate(t, e, n, o);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (r = t[a]) &&
              (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
        return (i > 3 && s && Object.defineProperty(e, n, s), s);
      };
      let C = class extends o.Component {
        static contextType = c;
        shiftDropdown = "32px";
        state = { showDropdown: !1, selectedId: void 0, currentId: void 0 };
        comboDropdownRef;
        containerDropdownRef;
        componentDidMount() {
          (this.props.hasKeyboardNavigation &&
            document.addEventListener("keyup", this.keyUpHandler),
            document.addEventListener("click", this.onClickOutsideDropdown),
            this.props.defaultSelectedId ||
              this.setState({
                selectedId: this.props.items[0]?.id,
                currentId: this.props.items[0]?.id,
              }),
            (this.comboDropdownRef = o.createRef()),
            (this.containerDropdownRef = o.createRef()));
        }
        componentWillUnmount() {
          (this.props.hasKeyboardNavigation &&
            document.removeEventListener("keyup", this.keyUpHandler),
            document.removeEventListener("click", this.onClickOutsideDropdown));
        }
        keyUpHandler = (t) => {
          if (
            !(
              t.target &&
              t.target instanceof HTMLElement &&
              this.containerDropdownRef?.current?.contains(t.target)
            )
          )
            return;
          const { showDropdown: e } = this.state;
          if (
            "Space" !== t.code &&
            "Enter" !== t.code &&
            (e || (t.code !== i.v.Down && t.code !== i.v.Up))
          ) {
            if (Object.values(i.v).includes(t.key)) {
              t.preventDefault();
              const e = this.containerDropdownRef?.current?.querySelector(
                ".combobox-dropdown-item.key-tab-focus",
              );
              if (e instanceof HTMLElement) {
                const {
                    dataset: { id: n },
                  } = e,
                  { items: o } = this.props,
                  r = o.findIndex((t) => t.id === n);
                if (!n) return;
                switch (t.key) {
                  case i.v.Down:
                  case i.v.Right: {
                    const t = r === o.length - 1 ? 0 : r + 1;
                    this.changeItemFocus(e, t);
                    break;
                  }
                  case i.v.Up:
                  case i.v.Left: {
                    const t = r - 1 >= 0 ? r - 1 : o.length - 1;
                    this.changeItemFocus(e, t);
                    break;
                  }
                }
              }
            }
          } else if ((t.preventDefault(), this.state.showDropdown)) {
            const t = this.containerDropdownRef?.current?.querySelector(
              ".combobox-dropdown-item.key-tab-focus",
            );
            if (!t) return;
            if (t instanceof HTMLElement) {
              const {
                  dataset: { id: e },
                } = t,
                { items: n } = this.props,
                o = n.findIndex((t) => t.id === e);
              if (!e) return;
              (this.props.onChange(e, n[o].label),
                this.setState({ showDropdown: !1 }));
            }
          } else {
            const t = this.containerDropdownRef?.current?.querySelector(
              ".combobox-dropdown-item.selected",
            );
            if (!t) return;
            t instanceof HTMLElement &&
              (this.setState({ showDropdown: !0, currentId: t.dataset.id }),
              t.focus());
          }
        };
        changeItemFocus(t, e) {
          const n = this.containerDropdownRef?.current?.querySelectorAll(
            ".combobox-dropdown-item",
          );
          n &&
            (t.classList.remove("key-tab-focus"),
            n[e] &&
              n[e] instanceof HTMLElement &&
              n[e].classList.add("key-tab-focus"));
        }
        render() {
          return o.createElement(
            "div",
            {
              ref: this.containerDropdownRef,
              tabIndex: this.props.tabIndex || 0,
              onBlur: () => {
                this.setState({ showDropdown: !1 });
              },
              className: `combobox-container ${this.props.isDisabled ? "disabled" : ""} ${this.state.showDropdown ? "expanded" : ""}`,
              onClick: (t) => this.toggleDropdown(t),
            },
            o.createElement(
              "span",
              { className: "combobox-label" },
              this.getSelectedItemLabel(),
            ),
            o.createElement(
              "span",
              {
                className:
                  "combobox-icon" + (this.state.showDropdown ? " rotated" : ""),
              },
              o.createElement(u, null),
            ),
            !this.props.isDisabled &&
              o.createElement(
                "ul",
                {
                  ref: this.comboDropdownRef,
                  className:
                    "combobox-dropdown" +
                    (this.state.showDropdown ? " visible" : ""),
                },
                this.renderDropdownItems(),
              ),
          );
        }
        onClickOutsideDropdown = (t) => {
          t.target instanceof Node &&
            !this.containerDropdownRef?.current?.contains(t.target) &&
            this.state.showDropdown &&
            (t.preventDefault(), this.setState({ showDropdown: !1 }));
        };
        toggleDropdown(t) {
          if (
            !this.props.isDisabled &&
            (t.preventDefault(),
            !this.props.isDisabled &&
              (this.setState({ showDropdown: !this.state.showDropdown }),
              this.comboDropdownRef?.current))
          ) {
            const t = this.comboDropdownRef.current.getBoundingClientRect();
            t.height + t.y > document.body.clientHeight
              ? ((this.comboDropdownRef.current.style.top = "auto"),
                (this.comboDropdownRef.current.style.bottom =
                  this.shiftDropdown))
              : ((this.comboDropdownRef.current.style.top = this.shiftDropdown),
                (this.comboDropdownRef.current.style.bottom = "auto"));
          }
        }
        getSelectedItemLabel() {
          const t = this.state.selectedId ?? this.props.defaultSelectedId,
            e = this.props.items.find((e) => e.id === t);
          return e?.label ?? this.props.items[0]?.label;
        }
        renderDropdownItems() {
          const t = this.state.selectedId ?? this.props.defaultSelectedId;
          return this.props.items.map((e) =>
            o.createElement(
              "li",
              {
                key: e.id,
                "data-id": e.id,
                className: `combobox-dropdown-item${e.id === t ? " selected" : ""}${e.id === this.state.currentId ? " key-tab-focus" : ""}`,
                onClick: (t) => this.onDropdownItemClick(t, e.id, e.label),
              },
              e.label,
            ),
          );
        }
        onDropdownItemClick(t, e, n) {
          (t.stopPropagation(),
            this.setState({ selectedId: e, showDropdown: !1 }),
            this.props.onChange(e, n));
        }
      };
      (E([r.t], C.prototype, "toggleDropdown", null),
        E([r.t], C.prototype, "onDropdownItemClick", null),
        (C = E([(0, r.r)("ComboboxComponent")], C)));
      const L = C;
    },
  },
]);
