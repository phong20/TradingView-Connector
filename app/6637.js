"use strict";
(global.webpackChunktradingview_desktop =
  global.webpackChunktradingview_desktop || []).push([
  [6637],
  {
    96637: (e, o, r) => {
      r.d(o, { XZ: () => _ });
      var i = r(50959),
        t = r(97754),
        c = r.n(t);
      const a = function () {},
        l = (0, i.createContext)({
          getName: () => "",
          getValues: () => [],
          getOnChange: () => a,
          subscribe: a,
          unsubscribe: a,
        });
      i.PureComponent;
      var n = r(57418),
        d = r(79621);
      const b =
          '<svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.999878 4L3.99988 7L9.99988 1" stroke-width="2" stroke="currentColor"/></svg>',
        s = JSON.parse(
          '{"box":"box-14az0zU6","noOutline":"noOutline-U61cHE0g","disabled":"disabled-xjGTMR9d","intent-danger":"intent-danger-3UwDcY_6","checked":"checked-2C5pvG6y","check":"check-J7WybJpv","icon":"icon-3ccexQMV","dot":"dot-Zm1UqPMe","disableActiveStyles":"disableActiveStyles-2UZMQMGz"}',
        );
      var h = r(25211),
        p = r.n(h),
        v = r(62962),
        x = r.n(v),
        u = r(20310),
        k = r.n(u),
        m = r(29290),
        g = r.n(m),
        f = r(47289),
        y = r.n(f),
        w = r(24834),
        z = r.n(w),
        U = r(80040),
        I = {};
      function G(e) {
        const {
            indeterminate: o,
            checked: r,
            tabIndex: t,
            className: a,
            disabled: l,
            disableActiveStyles: n,
            intent: h,
            hideIcon: p,
            ...v
          } = e,
          x = o || !r || p ? "" : b,
          u = c()(
            s.box,
            s[`intent-${h}`],
            !o && s.check,
            !!o && s.dot,
            -1 === t && s.noOutline,
            a,
            r && s.checked,
            l && s.disabled,
            n && s.disableActiveStyles,
          );
        return i.createElement(
          "span",
          { className: u, ...v },
          i.createElement(d.J, { icon: x, className: s.icon }),
        );
      }
      ((I.styleTagTransform = z()),
        (I.setAttributes = g()),
        (I.insert = k().bind(null, "head")),
        (I.domAPI = x()),
        (I.insertStyleElement = y()),
        p()(U.Z, I),
        U.Z && U.Z.locals && U.Z.locals);
      const T = JSON.parse(
        '{"wrapper":"wrapper-21v50zE8","input":"input-24iGIobO","view":"view-2By9coT7","danger":"danger-2biHRIpo"}',
      );
      var M = r(98801),
        V = {};
      function C(e) {
        const o = c()(T.wrapper, e.className);
        return i.createElement(
          "span",
          { className: o, title: e.title, style: e.style },
          i.createElement("input", {
            id: e.id,
            tabIndex: e.tabIndex,
            className: c()(e.intent && T[e.intent], T.input),
            type: "checkbox",
            name: e.name,
            checked: e.checked,
            disabled: e.disabled,
            value: e.value,
            autoFocus: e.autoFocus,
            role: e.role,
            onChange: function () {
              e.onChange?.(e.value);
            },
            ref: e.reference,
            "aria-required": e["aria-required"],
            "aria-describedby": e["aria-describedby"],
            "aria-invalid": e["aria-invalid"],
            ...(0, n._E)(e),
          }),
          i.createElement(G, {
            className: T.view,
            indeterminate: e.indeterminate,
            checked: e.checked,
            disabled: e.disabled,
            intent: e.intent,
            tabIndex: e.tabIndex,
          }),
        );
      }
      ((V.styleTagTransform = z()),
        (V.setAttributes = g()),
        (V.insert = k().bind(null, "head")),
        (V.domAPI = x()),
        (V.insertStyleElement = y()),
        p()(M.Z, V),
        M.Z && M.Z.locals && M.Z.locals);
      const R = JSON.parse(
        '{"MJ":"checkbox-3xZUD-2M","GY":"reverse-3xeTx96y","PS":"label-cyItEVpF","j9":"baseline-6TXKro4X"}',
      );
      var O,
        Z = r(26029),
        B = {};
      ((B.styleTagTransform = z()),
        (B.setAttributes = g()),
        (B.insert = k().bind(null, "head")),
        (B.domAPI = x()),
        (B.insertStyleElement = y()),
        p()(Z.Z, B),
        Z.Z && Z.Z.locals && Z.Z.locals);
      class _ extends i.PureComponent {
        render() {
          const { inputClassName: e, labelClassName: o, ...r } = this.props,
            t = c()(this.props.className, R.MJ, {
              [R.GY]: Boolean(this.props.labelPositionReverse),
              [R.j9]: Boolean(this.props.labelAlignBaseline),
            }),
            a = c()(R.PS, o, { [R.disabled]: this.props.disabled });
          let l = null;
          return (
            this.props.label &&
              (l = i.createElement(
                "span",
                { className: a, title: this.props.title },
                this.props.label,
              )),
            i.createElement(
              "label",
              { className: t },
              i.createElement(C, { ...r, className: e }),
              l,
            )
          );
        }
      }
      ((_.defaultProps = { value: "on" }),
        (O = _),
        (class extends i.PureComponent {
          constructor() {
            (super(...arguments),
              (this._onChange = (e) => {
                this.context.getOnChange()(e);
              }),
              (this._onUpdate = (e) => {
                e.includes(this.props.value) && this.forceUpdate();
              }));
          }
          componentDidMount() {
            this.context.subscribe(this._onUpdate);
          }
          render() {
            return i.createElement(O, {
              ...this.props,
              name: this._getName(),
              onChange: this._onChange,
              checked: this._isChecked(),
            });
          }
          componentWillUnmount() {
            this.context.unsubscribe(this._onUpdate);
          }
          _getName() {
            return this.context.getName();
          }
          _isChecked() {
            return this.context.getValues().includes(this.props.value);
          }
        }.contextType = l));
    },
    98801: (e, o, r) => {
      r.d(o, { Z: () => l });
      var i = r(43392),
        t = r.n(i),
        c = r(8021),
        a = r.n(c)()(t());
      a.push([
        e.id,
        ".wrapper-21v50zE8:dir(ltr){display:inline-block;flex:none;height:18px;position:relative;width:18px;--ui-lib-checkboxView-mark-color:var(--ui-lib-checkboxInput-mark-color);--ui-lib-checkboxView-color:var(--ui-lib-checkboxInput-color)}.input-24iGIobO:dir(ltr){cursor:inherit;height:100%;left:0;margin:0;opacity:0;padding:0;position:absolute;top:0;width:100%}.input-24iGIobO:focus+.view-2By9coT7:dir(ltr):before{opacity:1;transform:scale(1)}.input-24iGIobO:focus-visible+.view-2By9coT7:dir(ltr):before{opacity:1;transform:scale(1)}.input-24iGIobO:focus:not(:focus-visible)+.view-2By9coT7:dir(ltr):before{opacity:0;transform:scale(.69231)}@media (any-hover:hover){.input-24iGIobO:hover:not(:focus):not(:disabled):not(.danger-2biHRIpo)~.view-2By9coT7:dir(ltr){border-color:#4a4a4a}}@media (any-hover:hover){html.theme-dark .input-24iGIobO:hover:not(:focus):not(:disabled):not(.danger-2biHRIpo)~.view-2By9coT7:dir(ltr){border-color:#dbdbdb}}@media (any-hover:hover){.input-24iGIobO:hover:checked:not(:focus):not(:disabled):not(.danger-2biHRIpo)~.view-2By9coT7:dir(ltr){background-color:var(--ui-lib-checkboxInput-color,#4a4a4a);border-color:var(--ui-lib-checkboxInput-color,#4a4a4a)}}@media (any-hover:hover){html.theme-dark .input-24iGIobO:hover:checked:not(:focus):not(:disabled):not(.danger-2biHRIpo)~.view-2By9coT7:dir(ltr){background-color:var(--ui-lib-checkboxInput-color,#dbdbdb)}}@media (any-hover:hover){html.theme-dark .input-24iGIobO:hover:checked:not(:focus):not(:disabled):not(.danger-2biHRIpo)~.view-2By9coT7:dir(ltr){border-color:var(--ui-lib-checkboxInput-color,#dbdbdb)}}.input-24iGIobO:active:not(:disabled):not(.danger-2biHRIpo):active~.view-2By9coT7:dir(ltr){border-color:var(--ui-lib-checkboxInput-color,#707070)}html.theme-dark .input-24iGIobO:active:not(:disabled):not(.danger-2biHRIpo):active~.view-2By9coT7:dir(ltr){border-color:var(--ui-lib-checkboxInput-color,#8c8c8c)}.input-24iGIobO:checked:active:not(:disabled):not(.danger-2biHRIpo):active~.view-2By9coT7:dir(ltr){background-color:var(--ui-lib-checkboxInput-color,#707070)}html.theme-dark .input-24iGIobO:checked:active:not(:disabled):not(.danger-2biHRIpo):active~.view-2By9coT7:dir(ltr){background-color:var(--ui-lib-checkboxInput-color,#8c8c8c)}.wrapper-21v50zE8:dir(rtl){display:inline-block;flex:none;height:18px;position:relative;width:18px;--ui-lib-checkboxView-mark-color:var(--ui-lib-checkboxInput-mark-color);--ui-lib-checkboxView-color:var(--ui-lib-checkboxInput-color)}.input-24iGIobO:dir(rtl){cursor:inherit;height:100%;margin:0;opacity:0;padding:0;position:absolute;right:0;top:0;width:100%}.input-24iGIobO:focus+.view-2By9coT7:dir(rtl):before{opacity:1;transform:scale(1)}.input-24iGIobO:focus-visible+.view-2By9coT7:dir(rtl):before{opacity:1;transform:scale(1)}.input-24iGIobO:focus:not(:focus-visible)+.view-2By9coT7:dir(rtl):before{opacity:0;transform:scale(.69231)}@media (any-hover:hover){.input-24iGIobO:hover:not(:focus):not(:disabled):not(.danger-2biHRIpo)~.view-2By9coT7:dir(rtl){border-color:#4a4a4a}}@media (any-hover:hover){html.theme-dark .input-24iGIobO:hover:not(:focus):not(:disabled):not(.danger-2biHRIpo)~.view-2By9coT7:dir(rtl){border-color:#dbdbdb}}@media (any-hover:hover){.input-24iGIobO:hover:checked:not(:focus):not(:disabled):not(.danger-2biHRIpo)~.view-2By9coT7:dir(rtl){background-color:var(--ui-lib-checkboxInput-color,#4a4a4a);border-color:var(--ui-lib-checkboxInput-color,#4a4a4a)}}@media (any-hover:hover){html.theme-dark .input-24iGIobO:hover:checked:not(:focus):not(:disabled):not(.danger-2biHRIpo)~.view-2By9coT7:dir(rtl){background-color:var(--ui-lib-checkboxInput-color,#dbdbdb)}}@media (any-hover:hover){html.theme-dark .input-24iGIobO:hover:checked:not(:focus):not(:disabled):not(.danger-2biHRIpo)~.view-2By9coT7:dir(rtl){border-color:var(--ui-lib-checkboxInput-color,#dbdbdb)}}.input-24iGIobO:active:not(:disabled):not(.danger-2biHRIpo):active~.view-2By9coT7:dir(rtl){border-color:var(--ui-lib-checkboxInput-color,#707070)}html.theme-dark .input-24iGIobO:active:not(:disabled):not(.danger-2biHRIpo):active~.view-2By9coT7:dir(rtl){border-color:var(--ui-lib-checkboxInput-color,#8c8c8c)}.input-24iGIobO:checked:active:not(:disabled):not(.danger-2biHRIpo):active~.view-2By9coT7:dir(rtl){background-color:var(--ui-lib-checkboxInput-color,#707070)}html.theme-dark .input-24iGIobO:checked:active:not(:disabled):not(.danger-2biHRIpo):active~.view-2By9coT7:dir(rtl){background-color:var(--ui-lib-checkboxInput-color,#8c8c8c)}",
        "",
      ]);
      const l = a;
    },
    80040: (e, o, r) => {
      r.d(o, { Z: () => l });
      var i = r(43392),
        t = r.n(i),
        c = r(8021),
        a = r.n(c)()(t());
      a.push([
        e.id,
        '.box-14az0zU6:dir(ltr){align-items:center;border:1px solid #2e2e2e;border-radius:3px;box-sizing:border-box;display:flex;height:18px;justify-content:center;position:relative;transition:background-color .35s ease;width:18px}html.theme-dark .box-14az0zU6:dir(ltr){border:1px solid #f2f2f2}.box-14az0zU6:dir(ltr):before{border:2px solid #2962ff;border-radius:6px;box-sizing:border-box;content:"";height:26px;left:-5px;opacity:0;position:absolute;top:-5px;transform:scale(.69231);width:26px}.box-14az0zU6.noOutline-U61cHE0g:dir(ltr):before{content:none}.box-14az0zU6:dir(ltr):after{background-color:initial;border-radius:50%;content:"";height:6px;left:calc(50% - 3px);position:absolute;top:calc(50% - 3px);width:6px}@media (any-hover:hover){.box-14az0zU6:hover:not(:focus):not(.disabled-xjGTMR9d):not(:active):not(.intent-danger-3UwDcY_6):dir(ltr){border-color:#4a4a4a}}@media (any-hover:hover){html.theme-dark .box-14az0zU6:hover:not(:focus):not(.disabled-xjGTMR9d):not(:active):not(.intent-danger-3UwDcY_6):dir(ltr){border-color:#dbdbdb}}@media (any-hover:hover){.box-14az0zU6:hover.checked-2C5pvG6y:not(:focus):not(.disabled-xjGTMR9d):not(.intent-danger-3UwDcY_6):dir(ltr){background-color:var(--ui-lib-checkboxView-color,#4a4a4a);border-color:var(--ui-lib-checkboxView-color,#4a4a4a)}}@media (any-hover:hover){html.theme-dark .box-14az0zU6:hover.checked-2C5pvG6y:not(:focus):not(.disabled-xjGTMR9d):not(.intent-danger-3UwDcY_6):dir(ltr){background-color:var(--ui-lib-checkboxView-color,#dbdbdb)}}@media (any-hover:hover){html.theme-dark .box-14az0zU6:hover.checked-2C5pvG6y:not(:focus):not(.disabled-xjGTMR9d):not(.intent-danger-3UwDcY_6):dir(ltr){border-color:var(--ui-lib-checkboxView-color,#dbdbdb)}}.box-14az0zU6.checked-2C5pvG6y:dir(ltr){background-color:var(--ui-lib-checkboxView-color,#2e2e2e);border-color:var(--ui-lib-checkboxView-color,#2e2e2e)}html.theme-dark .box-14az0zU6.checked-2C5pvG6y:dir(ltr){border-color:var(--ui-lib-checkboxView-color,#f2f2f2)}html.theme-dark .box-14az0zU6.checked-2C5pvG6y:dir(ltr){background-color:var(--ui-lib-checkboxView-color,#f2f2f2)}.box-14az0zU6.checked-2C5pvG6y.check-J7WybJpv .icon-3ccexQMV:dir(ltr){color:var(--ui-lib-checkboxView-mark-color,#fff)}html.theme-dark .box-14az0zU6.checked-2C5pvG6y.check-J7WybJpv .icon-3ccexQMV:dir(ltr){color:var(--ui-lib-checkboxView-mark-color,#2e2e2e)}.box-14az0zU6.checked-2C5pvG6y.dot-Zm1UqPMe:dir(ltr):after{background-color:var(--ui-lib-checkboxView-mark-color,#fff)}html.theme-dark .box-14az0zU6.checked-2C5pvG6y.dot-Zm1UqPMe:dir(ltr):after{background-color:var(--ui-lib-checkboxView-mark-color,#2e2e2e)}.box-14az0zU6.disabled-xjGTMR9d:dir(ltr){opacity:.3}.box-14az0zU6:active:not(.disabled-xjGTMR9d):not(.disableActiveStyles-2UZMQMGz):active:dir(ltr){border-color:var(--ui-lib-checkboxView-color,#707070)}html.theme-dark .box-14az0zU6:active:not(.disabled-xjGTMR9d):not(.disableActiveStyles-2UZMQMGz):active:dir(ltr){border-color:var(--ui-lib-checkboxView-color,#8c8c8c)}.box-14az0zU6.checked-2C5pvG6y:active:not(.disabled-xjGTMR9d):active:dir(ltr){background-color:var(--ui-lib-checkboxView-color,#707070)}html.theme-dark .box-14az0zU6.checked-2C5pvG6y:active:not(.disabled-xjGTMR9d):active:dir(ltr){background-color:var(--ui-lib-checkboxView-color,#8c8c8c)}.box-14az0zU6.intent-danger-3UwDcY_6:dir(ltr){border-color:#f23645}html.theme-dark .box-14az0zU6.intent-danger-3UwDcY_6:dir(ltr){border-color:#f23645}.icon-3ccexQMV:dir(ltr){align-items:center;box-sizing:border-box;display:inline-flex}.icon-3ccexQMV svg:dir(ltr),.icon-3ccexQMV:dir(ltr){height:9px;width:11px}.box-14az0zU6:dir(rtl){align-items:center;border:1px solid #2e2e2e;border-radius:3px;box-sizing:border-box;display:flex;height:18px;justify-content:center;position:relative;transition:background-color .35s ease;width:18px}html.theme-dark .box-14az0zU6:dir(rtl){border:1px solid #f2f2f2}.box-14az0zU6:dir(rtl):before{border:2px solid #2962ff;border-radius:6px;box-sizing:border-box;content:"";height:26px;opacity:0;position:absolute;right:-5px;top:-5px;transform:scale(.69231);width:26px}.box-14az0zU6.noOutline-U61cHE0g:dir(rtl):before{content:none}.box-14az0zU6:dir(rtl):after{background-color:initial;border-radius:50%;content:"";height:6px;position:absolute;right:calc(50% - 3px);top:calc(50% - 3px);width:6px}@media (any-hover:hover){.box-14az0zU6:hover:not(:focus):not(.disabled-xjGTMR9d):not(:active):not(.intent-danger-3UwDcY_6):dir(rtl){border-color:#4a4a4a}}@media (any-hover:hover){html.theme-dark .box-14az0zU6:hover:not(:focus):not(.disabled-xjGTMR9d):not(:active):not(.intent-danger-3UwDcY_6):dir(rtl){border-color:#dbdbdb}}@media (any-hover:hover){.box-14az0zU6:hover.checked-2C5pvG6y:not(:focus):not(.disabled-xjGTMR9d):not(.intent-danger-3UwDcY_6):dir(rtl){background-color:var(--ui-lib-checkboxView-color,#4a4a4a);border-color:var(--ui-lib-checkboxView-color,#4a4a4a)}}@media (any-hover:hover){html.theme-dark .box-14az0zU6:hover.checked-2C5pvG6y:not(:focus):not(.disabled-xjGTMR9d):not(.intent-danger-3UwDcY_6):dir(rtl){background-color:var(--ui-lib-checkboxView-color,#dbdbdb)}}@media (any-hover:hover){html.theme-dark .box-14az0zU6:hover.checked-2C5pvG6y:not(:focus):not(.disabled-xjGTMR9d):not(.intent-danger-3UwDcY_6):dir(rtl){border-color:var(--ui-lib-checkboxView-color,#dbdbdb)}}.box-14az0zU6.checked-2C5pvG6y:dir(rtl){background-color:var(--ui-lib-checkboxView-color,#2e2e2e);border-color:var(--ui-lib-checkboxView-color,#2e2e2e)}html.theme-dark .box-14az0zU6.checked-2C5pvG6y:dir(rtl){border-color:var(--ui-lib-checkboxView-color,#f2f2f2)}html.theme-dark .box-14az0zU6.checked-2C5pvG6y:dir(rtl){background-color:var(--ui-lib-checkboxView-color,#f2f2f2)}.box-14az0zU6.checked-2C5pvG6y.check-J7WybJpv .icon-3ccexQMV:dir(rtl){color:var(--ui-lib-checkboxView-mark-color,#fff)}html.theme-dark .box-14az0zU6.checked-2C5pvG6y.check-J7WybJpv .icon-3ccexQMV:dir(rtl){color:var(--ui-lib-checkboxView-mark-color,#2e2e2e)}.box-14az0zU6.checked-2C5pvG6y.dot-Zm1UqPMe:dir(rtl):after{background-color:var(--ui-lib-checkboxView-mark-color,#fff)}html.theme-dark .box-14az0zU6.checked-2C5pvG6y.dot-Zm1UqPMe:dir(rtl):after{background-color:var(--ui-lib-checkboxView-mark-color,#2e2e2e)}.box-14az0zU6.disabled-xjGTMR9d:dir(rtl){opacity:.3}.box-14az0zU6:active:not(.disabled-xjGTMR9d):not(.disableActiveStyles-2UZMQMGz):active:dir(rtl){border-color:var(--ui-lib-checkboxView-color,#707070)}html.theme-dark .box-14az0zU6:active:not(.disabled-xjGTMR9d):not(.disableActiveStyles-2UZMQMGz):active:dir(rtl){border-color:var(--ui-lib-checkboxView-color,#8c8c8c)}.box-14az0zU6.checked-2C5pvG6y:active:not(.disabled-xjGTMR9d):active:dir(rtl){background-color:var(--ui-lib-checkboxView-color,#707070)}html.theme-dark .box-14az0zU6.checked-2C5pvG6y:active:not(.disabled-xjGTMR9d):active:dir(rtl){background-color:var(--ui-lib-checkboxView-color,#8c8c8c)}.box-14az0zU6.intent-danger-3UwDcY_6:dir(rtl){border-color:#f23645}html.theme-dark .box-14az0zU6.intent-danger-3UwDcY_6:dir(rtl){border-color:#f23645}.icon-3ccexQMV:dir(rtl){align-items:center;box-sizing:border-box;display:inline-flex}.icon-3ccexQMV svg:dir(rtl),.icon-3ccexQMV:dir(rtl){height:9px;width:11px}',
        "",
      ]);
      const l = a;
    },
    26029: (e, o, r) => {
      r.d(o, { Z: () => l });
      var i = r(43392),
        t = r.n(i),
        c = r(8021),
        a = r.n(c)()(t());
      a.push([
        e.id,
        ".checkbox-3xZUD-2M:dir(ltr){align-items:center;display:inline-flex;position:relative;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;cursor:default;font-size:14px;font-stretch:normal;font-style:normal;font-weight:400;letter-spacing:normal;line-height:normal}.checkbox-3xZUD-2M.reverse-3xeTx96y:dir(ltr){flex-direction:row-reverse}.checkbox-3xZUD-2M.reverse-3xeTx96y .label-cyItEVpF:dir(ltr){margin-left:0;margin-right:8px}.checkbox-3xZUD-2M.baseline-6TXKro4X:dir(ltr){align-items:baseline}.label-cyItEVpF:dir(ltr){color:#0f0f0f;margin-left:8px;min-width:0}html.theme-dark .label-cyItEVpF:dir(ltr){color:#dbdbdb}.checkbox-3xZUD-2M:dir(rtl){align-items:center;display:inline-flex;position:relative;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;cursor:default;font-size:14px;font-stretch:normal;font-style:normal;font-weight:400;letter-spacing:normal;line-height:normal}.checkbox-3xZUD-2M.reverse-3xeTx96y:dir(rtl){flex-direction:row-reverse}.checkbox-3xZUD-2M.reverse-3xeTx96y .label-cyItEVpF:dir(rtl){margin-left:8px;margin-right:0}.checkbox-3xZUD-2M.baseline-6TXKro4X:dir(rtl){align-items:baseline}.label-cyItEVpF:dir(rtl){color:#0f0f0f;margin-right:8px;min-width:0}html.theme-dark .label-cyItEVpF:dir(rtl){color:#dbdbdb}",
        "",
      ]);
      const l = a;
    },
  },
]);
