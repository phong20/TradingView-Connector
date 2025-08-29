"use strict";
(global.webpackChunktradingview_desktop =
  global.webpackChunktradingview_desktop || []).push([
  [3970],
  {
    70612: (t, e, r) => {
      r.d(e, { P: () => Y });
      var i = r(50959),
        n = r(97754),
        a = r.n(n),
        o = r(79621);
      const l = JSON.parse(
        '{"nav-button":"nav-button-2cN30JEa","link":"link-2aUaONPo","background":"background-2YFDQd-u","icon":"icon-1pH5g1sP","flip-icon":"flip-icon-1XsSJqRE","size-large":"size-large-5U5F1CcL","preserve-paddings":"preserve-paddings-J2f9hENl","size-medium":"size-medium-L7GVV67S","size-small":"size-small-1dZzWsrT","size-xsmall":"size-xsmall-KI8BVtZT","size-xxsmall":"size-xxsmall-2F3lw9V2","visually-hidden":"visually-hidden-22sFdlHz"}',
      );
      var d = r.t(l, 2),
        u = r(25211),
        s = r.n(u),
        c = r(62962),
        b = r.n(c),
        p = r(20310),
        f = r.n(p),
        g = r(29290),
        h = r.n(g),
        v = r(47289),
        x = r.n(v),
        m = r(24834),
        w = r.n(m),
        k = r(18923),
        z = {};
      function F(t) {
        const {
          size: e = "large",
          preservePaddings: r,
          isLink: i,
          flipIconOnRtl: n,
          className: o,
        } = t;
        return a()(
          l["nav-button"],
          d[`size-${e}`],
          r && l["preserve-paddings"],
          n && l["flip-icon"],
          i && l.link,
          o,
        );
      }
      function E(t) {
        const { children: e, icon: r } = t;
        return i.createElement(
          i.Fragment,
          null,
          i.createElement("span", { className: l.background }),
          i.createElement(o.J, {
            icon: r,
            className: l.icon,
            "aria-hidden": !0,
          }),
          e && i.createElement("span", { className: l["visually-hidden"] }, e),
        );
      }
      ((z.styleTagTransform = w()),
        (z.setAttributes = h()),
        (z.insert = f().bind(null, "head")),
        (z.domAPI = b()),
        (z.insertStyleElement = x()),
        s()(k.Z, z),
        k.Z && k.Z.locals && k.Z.locals);
      const N = (0, i.forwardRef)((t, e) => {
        const {
          icon: r,
          type: n = "button",
          preservePaddings: a,
          flipIconOnRtl: o,
          size: l,
          "aria-label": d,
          ...u
        } = t;
        return i.createElement(
          "button",
          { ...u, className: F({ ...t, children: d }), ref: e, type: n },
          i.createElement(E, { icon: r }, d),
        );
      });
      N.displayName = "NavButton";
      var J = r(1053),
        y = r(1142);
      function D(t = "large") {
        switch (t) {
          case "large":
            return '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m1.5 1.5 21 21m0-21-21 21" stroke="currentColor" stroke-width="1.2"/></svg>';
          case "medium":
          default:
            return '<svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="m1.5 1.5 15 15m0-15-15 15" stroke="currentColor" stroke-width="1.2"/></svg>';
          case "small":
            return '<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><path d="m1.5 1.5 11 11m0-11-11 11" stroke="currentColor" stroke-width="1.2"/></svg>';
          case "xsmall":
            return '<svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="m1.5 1.5 9 9m0-9-9 9" stroke="currentColor" stroke-width="1.2"/></svg>';
          case "xxsmall":
            return '<svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="m1.5 1.5 7 7m0-7-7 7" stroke="currentColor" stroke-width="1.2"/></svg>';
        }
      }
      (0, i.forwardRef)((t, e) => {
        const { icon: r, renderComponent: n, "aria-label": a, ...o } = t,
          l = n ?? J.t;
        return i.createElement(
          l,
          {
            ...o,
            className: F({ ...t, children: a, isLink: !0 }),
            reference: (0, y.t)(e),
          },
          i.createElement(E, { icon: r }, a),
        );
      }).displayName = "NavAnchorButton";
      const Y = i.forwardRef((t, e) =>
        i.createElement(N, { ...t, ref: e, icon: D(t.size) }),
      );
    },
    1053: (t, e, r) => {
      r.d(e, { t: () => a });
      var i = r(50959);
      function n(t) {
        const { reference: e, ...r } = t;
        return { ...r, ref: e };
      }
      function a(t) {
        return i.createElement("a", { ...n(t) });
      }
      i.PureComponent;
    },
    44592: (t, e, r) => {
      r.d(e, { J: () => n });
      var i = r(50959);
      const n = i.forwardRef((t, e) => {
        const {
            icon: r = "",
            title: n,
            ariaLabel: a,
            ariaLabelledby: o,
            ariaHidden: l,
            ...d
          } = t,
          u = !!(n || a || o);
        return i.createElement("span", {
          role: "img",
          ...d,
          ref: e,
          "aria-label": a,
          "aria-labelledby": o,
          "aria-hidden": l || !u,
          title: n,
          dangerouslySetInnerHTML: { __html: r },
        });
      });
    },
    18923: (t, e, r) => {
      r.d(e, { Z: () => l });
      var i = r(43392),
        n = r.n(i),
        a = r(8021),
        o = r.n(a)()(n());
      o.push([
        t.id,
        '.nav-button-2cN30JEa:dir(ltr){border:none;box-sizing:initial;display:flex;outline:none;padding:0;position:relative;--ui-lib-nav-button-default-color-content:#0f0f0f;--ui-lib-nav-button-default-color-bg:#0000;background:#0000;color:var(--ui-lib-nav-button-color-content,var(--ui-lib-nav-button-default-color-content))}html.theme-dark .nav-button-2cN30JEa:dir(ltr){--ui-lib-nav-button-default-color-content:#dbdbdb}.nav-button-2cN30JEa.link-2aUaONPo:dir(ltr){cursor:pointer}@media (any-hover:hover){.nav-button-2cN30JEa:hover:dir(ltr){--ui-lib-nav-button-default-color-content:#0f0f0f;--ui-lib-nav-button-default-color-bg:#f2f2f2}}@media (any-hover:hover){html.theme-dark .nav-button-2cN30JEa:hover:dir(ltr){--ui-lib-nav-button-default-color-bg:#2e2e2e}}@media (any-hover:hover){html.theme-dark .nav-button-2cN30JEa:hover:dir(ltr){--ui-lib-nav-button-default-color-content:#fff}}.nav-button-2cN30JEa:active:dir(ltr){--ui-lib-nav-button-default-color-content:#0f0f0f;--ui-lib-nav-button-default-color-bg:#ebebeb}html.theme-dark .nav-button-2cN30JEa:active:dir(ltr){--ui-lib-nav-button-default-color-bg:#3d3d3d}html.theme-dark .nav-button-2cN30JEa:active:dir(ltr){--ui-lib-nav-button-default-color-content:#fff}.nav-button-2cN30JEa:focus .background-2YFDQd-u:dir(ltr):after{display:block}.nav-button-2cN30JEa:focus-visible .background-2YFDQd-u:dir(ltr):after{display:block}.nav-button-2cN30JEa:focus:not(:focus-visible) .background-2YFDQd-u:dir(ltr):after{display:none}.nav-button-2cN30JEa:disabled:dir(ltr),.nav-button-2cN30JEa[aria-disabled=true]:dir(ltr){--ui-lib-nav-button-default-color-content:#b8b8b8;cursor:default}html.theme-dark .nav-button-2cN30JEa:disabled:dir(ltr),html.theme-dark .nav-button-2cN30JEa[aria-disabled=true]:dir(ltr){--ui-lib-nav-button-default-color-content:#636363}.nav-button-2cN30JEa:disabled .background-2YFDQd-u:dir(ltr),.nav-button-2cN30JEa[aria-disabled=true] .background-2YFDQd-u:dir(ltr){display:none}.background-2YFDQd-u:dir(ltr){--ui-lib-nav-button-color-outline-default:#2962ff;background:var(--ui-lib-nav-button-color-bg,var(--ui-lib-nav-button-default-color-bg));display:block}.background-2YFDQd-u:dir(ltr){outline:none;overflow:visible;position:absolute}.background-2YFDQd-u:focus:dir(ltr){outline:none}.background-2YFDQd-u:focus-visible:dir(ltr){outline:none}.background-2YFDQd-u:dir(ltr):after{border-style:solid;border-width:2px;box-sizing:border-box;content:"";display:none;height:calc(100% + 8px);left:-4px;pointer-events:none;position:absolute;top:-4px;width:calc(100% + 8px);z-index:1}.background-2YFDQd-u:dir(ltr):after{border-color:var(--ui-lib-nav-button-color-outline,var(--ui-lib-nav-button-color-outline-default))}.icon-1pH5g1sP:dir(ltr){z-index:0}.icon-1pH5g1sP svg:dir(ltr),.icon-1pH5g1sP:dir(ltr){display:flex}.flip-icon-1XsSJqRE svg:dir(ltr),.flip-icon-1XsSJqRE:dir(ltr){transform:rotate(90deg)}.size-large-5U5F1CcL:dir(ltr){height:24px;width:24px;--ui-lib-nav-button-basic-offset:8px;--ui-lib-nav-button-safe-offset:12px}.size-large-5U5F1CcL.preserve-paddings-J2f9hENl:dir(ltr){padding:8px}.size-large-5U5F1CcL .background-2YFDQd-u:dir(ltr){border-radius:8px;height:calc(100% + 16px);left:-8px;top:-8px;width:calc(100% + 16px)}.size-large-5U5F1CcL .background-2YFDQd-u:dir(ltr):after{border-radius:12px}.size-large-5U5F1CcL.preserve-paddings-J2f9hENl .background-2YFDQd-u:dir(ltr){height:100%;left:0;top:0;width:100%}.size-medium-L7GVV67S:dir(ltr){height:18px;width:18px;--ui-lib-nav-button-basic-offset:8px;--ui-lib-nav-button-safe-offset:12px}.size-medium-L7GVV67S.preserve-paddings-J2f9hENl:dir(ltr){padding:8px}.size-medium-L7GVV67S .background-2YFDQd-u:dir(ltr){border-radius:8px;height:calc(100% + 16px);left:-8px;top:-8px;width:calc(100% + 16px)}.size-medium-L7GVV67S .background-2YFDQd-u:dir(ltr):after{border-radius:12px}.size-medium-L7GVV67S.preserve-paddings-J2f9hENl .background-2YFDQd-u:dir(ltr){height:100%;left:0;top:0;width:100%}.size-small-1dZzWsrT:dir(ltr){height:14px;width:14px;--ui-lib-nav-button-basic-offset:8px;--ui-lib-nav-button-safe-offset:12px}.size-small-1dZzWsrT.preserve-paddings-J2f9hENl:dir(ltr){padding:8px}.size-small-1dZzWsrT .background-2YFDQd-u:dir(ltr){border-radius:6px;height:calc(100% + 16px);left:-8px;top:-8px;width:calc(100% + 16px)}.size-small-1dZzWsrT .background-2YFDQd-u:dir(ltr):after{border-radius:10px}.size-small-1dZzWsrT.preserve-paddings-J2f9hENl .background-2YFDQd-u:dir(ltr){height:100%;left:0;top:0;width:100%}.size-xsmall-KI8BVtZT:dir(ltr){height:12px;width:12px;--ui-lib-nav-button-basic-offset:4px;--ui-lib-nav-button-safe-offset:8px}.size-xsmall-KI8BVtZT.preserve-paddings-J2f9hENl:dir(ltr){padding:4px}.size-xsmall-KI8BVtZT .background-2YFDQd-u:dir(ltr){border-radius:4px;height:calc(100% + 8px);left:-4px;top:-4px;width:calc(100% + 8px)}.size-xsmall-KI8BVtZT .background-2YFDQd-u:dir(ltr):after{border-radius:8px}.size-xsmall-KI8BVtZT.preserve-paddings-J2f9hENl .background-2YFDQd-u:dir(ltr){height:100%;left:0;top:0;width:100%}.size-xxsmall-2F3lw9V2:dir(ltr){height:10px;width:10px;--ui-lib-nav-button-basic-offset:4px;--ui-lib-nav-button-safe-offset:8px}.size-xxsmall-2F3lw9V2.preserve-paddings-J2f9hENl:dir(ltr){padding:4px}.size-xxsmall-2F3lw9V2 .background-2YFDQd-u:dir(ltr){border-radius:4px;height:calc(100% + 8px);left:-4px;top:-4px;width:calc(100% + 8px)}.size-xxsmall-2F3lw9V2 .background-2YFDQd-u:dir(ltr):after{border-radius:8px}.size-xxsmall-2F3lw9V2.preserve-paddings-J2f9hENl .background-2YFDQd-u:dir(ltr){height:100%;left:0;top:0;width:100%}.visually-hidden-22sFdlHz:dir(ltr){border:0;height:1px;margin:-1px;padding:0;position:absolute;width:1px;clip:rect(0 0 0 0);overflow:hidden}.nav-button-2cN30JEa:dir(rtl){border:none;box-sizing:initial;display:flex;outline:none;padding:0;position:relative;--ui-lib-nav-button-default-color-content:#0f0f0f;--ui-lib-nav-button-default-color-bg:#0000;background:#0000;color:var(--ui-lib-nav-button-color-content,var(--ui-lib-nav-button-default-color-content))}html.theme-dark .nav-button-2cN30JEa:dir(rtl){--ui-lib-nav-button-default-color-content:#dbdbdb}.nav-button-2cN30JEa.link-2aUaONPo:dir(rtl){cursor:pointer}@media (any-hover:hover){.nav-button-2cN30JEa:hover:dir(rtl){--ui-lib-nav-button-default-color-content:#0f0f0f;--ui-lib-nav-button-default-color-bg:#f2f2f2}}@media (any-hover:hover){html.theme-dark .nav-button-2cN30JEa:hover:dir(rtl){--ui-lib-nav-button-default-color-bg:#2e2e2e}}@media (any-hover:hover){html.theme-dark .nav-button-2cN30JEa:hover:dir(rtl){--ui-lib-nav-button-default-color-content:#fff}}.nav-button-2cN30JEa:active:dir(rtl){--ui-lib-nav-button-default-color-content:#0f0f0f;--ui-lib-nav-button-default-color-bg:#ebebeb}html.theme-dark .nav-button-2cN30JEa:active:dir(rtl){--ui-lib-nav-button-default-color-bg:#3d3d3d}html.theme-dark .nav-button-2cN30JEa:active:dir(rtl){--ui-lib-nav-button-default-color-content:#fff}.nav-button-2cN30JEa:focus .background-2YFDQd-u:dir(rtl):after{display:block}.nav-button-2cN30JEa:focus-visible .background-2YFDQd-u:dir(rtl):after{display:block}.nav-button-2cN30JEa:focus:not(:focus-visible) .background-2YFDQd-u:dir(rtl):after{display:none}.nav-button-2cN30JEa:disabled:dir(rtl),.nav-button-2cN30JEa[aria-disabled=true]:dir(rtl){--ui-lib-nav-button-default-color-content:#b8b8b8;cursor:default}html.theme-dark .nav-button-2cN30JEa:disabled:dir(rtl),html.theme-dark .nav-button-2cN30JEa[aria-disabled=true]:dir(rtl){--ui-lib-nav-button-default-color-content:#636363}.nav-button-2cN30JEa:disabled .background-2YFDQd-u:dir(rtl),.nav-button-2cN30JEa[aria-disabled=true] .background-2YFDQd-u:dir(rtl){display:none}.background-2YFDQd-u:dir(rtl){--ui-lib-nav-button-color-outline-default:#2962ff;background:var(--ui-lib-nav-button-color-bg,var(--ui-lib-nav-button-default-color-bg));display:block}.background-2YFDQd-u:dir(rtl){outline:none;overflow:visible;position:absolute}.background-2YFDQd-u:focus:dir(rtl){outline:none}.background-2YFDQd-u:focus-visible:dir(rtl){outline:none}.background-2YFDQd-u:dir(rtl):after{border-style:solid;border-width:2px;box-sizing:border-box;content:"";display:none;height:calc(100% + 8px);pointer-events:none;position:absolute;right:-4px;top:-4px;width:calc(100% + 8px);z-index:1}.background-2YFDQd-u:dir(rtl):after{border-color:var(--ui-lib-nav-button-color-outline,var(--ui-lib-nav-button-color-outline-default))}.icon-1pH5g1sP:dir(rtl){z-index:0}.icon-1pH5g1sP svg:dir(rtl),.icon-1pH5g1sP:dir(rtl){display:flex}.flip-icon-1XsSJqRE svg:dir(rtl),.flip-icon-1XsSJqRE:dir(rtl){transform:rotate(-90deg)}.size-large-5U5F1CcL:dir(rtl){height:24px;width:24px;--ui-lib-nav-button-basic-offset:8px;--ui-lib-nav-button-safe-offset:12px}.size-large-5U5F1CcL.preserve-paddings-J2f9hENl:dir(rtl){padding:8px}.size-large-5U5F1CcL .background-2YFDQd-u:dir(rtl){border-radius:8px;height:calc(100% + 16px);right:-8px;top:-8px;width:calc(100% + 16px)}.size-large-5U5F1CcL .background-2YFDQd-u:dir(rtl):after{border-radius:12px}.size-large-5U5F1CcL.preserve-paddings-J2f9hENl .background-2YFDQd-u:dir(rtl){height:100%;right:0;top:0;width:100%}.size-medium-L7GVV67S:dir(rtl){height:18px;width:18px;--ui-lib-nav-button-basic-offset:8px;--ui-lib-nav-button-safe-offset:12px}.size-medium-L7GVV67S.preserve-paddings-J2f9hENl:dir(rtl){padding:8px}.size-medium-L7GVV67S .background-2YFDQd-u:dir(rtl){border-radius:8px;height:calc(100% + 16px);right:-8px;top:-8px;width:calc(100% + 16px)}.size-medium-L7GVV67S .background-2YFDQd-u:dir(rtl):after{border-radius:12px}.size-medium-L7GVV67S.preserve-paddings-J2f9hENl .background-2YFDQd-u:dir(rtl){height:100%;right:0;top:0;width:100%}.size-small-1dZzWsrT:dir(rtl){height:14px;width:14px;--ui-lib-nav-button-basic-offset:8px;--ui-lib-nav-button-safe-offset:12px}.size-small-1dZzWsrT.preserve-paddings-J2f9hENl:dir(rtl){padding:8px}.size-small-1dZzWsrT .background-2YFDQd-u:dir(rtl){border-radius:6px;height:calc(100% + 16px);right:-8px;top:-8px;width:calc(100% + 16px)}.size-small-1dZzWsrT .background-2YFDQd-u:dir(rtl):after{border-radius:10px}.size-small-1dZzWsrT.preserve-paddings-J2f9hENl .background-2YFDQd-u:dir(rtl){height:100%;right:0;top:0;width:100%}.size-xsmall-KI8BVtZT:dir(rtl){height:12px;width:12px;--ui-lib-nav-button-basic-offset:4px;--ui-lib-nav-button-safe-offset:8px}.size-xsmall-KI8BVtZT.preserve-paddings-J2f9hENl:dir(rtl){padding:4px}.size-xsmall-KI8BVtZT .background-2YFDQd-u:dir(rtl){border-radius:4px;height:calc(100% + 8px);right:-4px;top:-4px;width:calc(100% + 8px)}.size-xsmall-KI8BVtZT .background-2YFDQd-u:dir(rtl):after{border-radius:8px}.size-xsmall-KI8BVtZT.preserve-paddings-J2f9hENl .background-2YFDQd-u:dir(rtl){height:100%;right:0;top:0;width:100%}.size-xxsmall-2F3lw9V2:dir(rtl){height:10px;width:10px;--ui-lib-nav-button-basic-offset:4px;--ui-lib-nav-button-safe-offset:8px}.size-xxsmall-2F3lw9V2.preserve-paddings-J2f9hENl:dir(rtl){padding:4px}.size-xxsmall-2F3lw9V2 .background-2YFDQd-u:dir(rtl){border-radius:4px;height:calc(100% + 8px);right:-4px;top:-4px;width:calc(100% + 8px)}.size-xxsmall-2F3lw9V2 .background-2YFDQd-u:dir(rtl):after{border-radius:8px}.size-xxsmall-2F3lw9V2.preserve-paddings-J2f9hENl .background-2YFDQd-u:dir(rtl){height:100%;right:0;top:0;width:100%}.visually-hidden-22sFdlHz:dir(rtl){border:0;height:1px;margin:-1px;padding:0;position:absolute;width:1px;clip:rect(0 0 0 0);overflow:hidden}',
        "",
      ]);
      const l = o;
    },
    77118: (t, e, r) => {
      r.d(e, { n_: () => i.n, YA: () => n.YA, S1: () => a.S });
      var i = r(14547),
        n = r(84434),
        a = (r(76191), r(16331), r(70686));
      (r(60203), r(48057));
    },
    5306: (t, e, r) => {
      (r.d(e, { Db: () => p.D, $G: () => i.$, Zh: () => b }),
        r(30315),
        r(19147));
      var i = r(65399),
        n = r(51020),
        a = r(12999),
        o = r(48278),
        l = r(50959),
        d = r(53776),
        u = ["forwardedRef"];
      function s(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          (e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, i));
        }
        return r;
      }
      function c(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? s(Object(r), !0).forEach(function (e) {
                n(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : s(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e),
                  );
                });
        }
        return t;
      }
      function b(t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return function (r) {
          function n(n) {
            var d = n.forwardedRef,
              s = o(n, u),
              b = (0, i.$)(t, c(c({}, s), {}, { keyPrefix: e.keyPrefix })),
              p = a(b, 3),
              f = p[0],
              g = p[1],
              h = p[2],
              v = c(c({}, s), {}, { t: f, i18n: g, tReady: h });
            return (
              e.withRef && d
                ? (v.ref = d)
                : !e.withRef && d && (v.forwardedRef = d),
              (0, l.createElement)(r, v)
            );
          }
          return (
            (n.displayName = "withI18nextTranslation(".concat(
              (0, d.Gf)(r),
              ")",
            )),
            (n.WrappedComponent = r),
            e.withRef
              ? (0, l.forwardRef)(function (t, e) {
                  return (0, l.createElement)(
                    n,
                    Object.assign({}, t, { forwardedRef: e }),
                  );
                })
              : n
          );
        };
      }
      (r(32028), r(70566), r(67589), r(80236));
      var p = r(33634);
      (r(45240), r(72936));
    },
    53776: (t, e, r) => {
      function i() {
        if (console && console.warn) {
          for (var t, e = arguments.length, r = new Array(e), i = 0; i < e; i++)
            r[i] = arguments[i];
          ("string" == typeof r[0] && (r[0] = "react-i18next:: ".concat(r[0])),
            (t = console).warn.apply(t, r));
        }
      }
      r.d(e, { O4: () => a, DC: () => o, F0: () => l, Gf: () => d });
      var n = {};
      function a() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        ("string" == typeof e[0] && n[e[0]]) ||
          ("string" == typeof e[0] && (n[e[0]] = new Date()),
          i.apply(void 0, e));
      }
      function o(t, e, r) {
        t.loadNamespaces(e, function () {
          t.isInitialized
            ? r()
            : t.on("initialized", function e() {
                (setTimeout(function () {
                  t.off("initialized", e);
                }, 0),
                  r());
              });
        });
      }
      function l(t, e) {
        var r =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return e.languages && e.languages.length
          ? void 0 !== e.options.ignoreJSONStructure
            ? e.hasLoadedNamespace(t, {
                precheck: function (e, i) {
                  if (
                    r.bindI18n &&
                    r.bindI18n.indexOf("languageChanging") > -1 &&
                    e.services.backendConnector.backend &&
                    e.isLanguageChangingTo &&
                    !i(e.isLanguageChangingTo, t)
                  )
                    return !1;
                },
              })
            : (function (t, e) {
                var r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  i = e.languages[0],
                  n = !!e.options && e.options.fallbackLng,
                  a = e.languages[e.languages.length - 1];
                if ("cimode" === i.toLowerCase()) return !0;
                var o = function (t, r) {
                  var i =
                    e.services.backendConnector.state[
                      "".concat(t, "|").concat(r)
                    ];
                  return -1 === i || 2 === i;
                };
                return !(
                  (r.bindI18n &&
                    r.bindI18n.indexOf("languageChanging") > -1 &&
                    e.services.backendConnector.backend &&
                    e.isLanguageChangingTo &&
                    !o(e.isLanguageChangingTo, t)) ||
                  (!e.hasResourceBundle(i, t) &&
                    e.services.backendConnector.backend &&
                    (!e.options.resources ||
                      e.options.partialBundledLanguages) &&
                    (!o(i, t) || (n && !o(a, t))))
                );
              })(t, e, r)
          : (a("i18n.languages were undefined or empty", e.languages), !0);
      }
      function d(t) {
        return (
          t.displayName ||
          t.name ||
          ("string" == typeof t && t.length > 0 ? t : "Unknown")
        );
      }
    },
  },
]);
