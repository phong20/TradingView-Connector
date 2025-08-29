/*! For license information please see 743.js.LICENSE.txt */
(global.webpackChunktradingview_desktop =
  global.webpackChunktradingview_desktop || []).push([
  [743],
  {
    43049: (t, r, e) => {
      "use strict";
      function o(t) {
        return "brand" === t ? "black" : "blue" === t ? "brand" : t;
      }
      e.d(r, { C: () => o });
    },
    45602: (t, r, e) => {
      "use strict";
      e.d(r, { LE: () => A });
      var o = e(50959),
        i = e(97754),
        l = e.n(i),
        a = e(9968),
        n = e(43049);
      const d = JSON.parse(
        '{"button":"button-qM2OSl9-","content":"content-1UNGmyXO","iconOnly":"iconOnly-LdllQmY_","link":"link-2jLVEuCD","brand":"brand-KAkAQX16","primary":"primary-LCiGJGSZ","secondary":"secondary--jp1G1oF","gray":"gray-2_1Iqa8n","green":"green-3PPYMCey","red":"red-T8Q0A2dV","black":"black-3eIOrpGN","black-friday":"black-friday-imtBaxE1","cyber-monday":"cyber-monday-GrykOCUa","slot":"slot-3p0JfExG","xsmall":"xsmall-1NscMQXH","withStartSlot":"withStartSlot-1SmHbPb8","withEndSlot":"withEndSlot-3chHJlH6","startSlotWrap":"startSlotWrap-8fC_hnI8","endSlotWrap":"endSlotWrap-1PfeXjk4","small":"small-3N5nvfWy","medium":"medium-3K3bD2no","large":"large-2-TJnftc","xlarge":"xlarge-3XdWhtv1","animated":"animated-FJhsKjPT","stretch":"stretch-1Wufk-aY","grouped":"grouped-1mJ_9XNG","adjustPosition":"adjustPosition-1Imf4RAu","firstRow":"firstRow-2mfRuQED","firstCol":"firstCol-AkuZmoX5","no-corner-top-left":"no-corner-top-left-1dhEuLwK","no-corner-top-right":"no-corner-top-right-2B-9Lz7Y","no-corner-bottom-right":"no-corner-bottom-right-2YOfeKyh","no-corner-bottom-left":"no-corner-bottom-left-3MsE9Q0B","textWrap":"textWrap-1M754_dy","multilineContent":"multilineContent-YXmoP0Av","secondaryText":"secondaryText-LOZPCPXL","primaryText":"primaryText-3OwPhnQN"}',
      );
      var u = e(25211),
        b = e.n(u),
        c = e(62962),
        f = e.n(c),
        m = e(20310),
        h = e.n(m),
        p = e(29290),
        s = e.n(p),
        y = e(47289),
        g = e.n(y),
        v = e(24834),
        G = e.n(v),
        k = e(88870),
        x = {};
      ((x.styleTagTransform = G()),
        (x.setAttributes = s()),
        (x.insert = h().bind(null, "head")),
        (x.domAPI = f()),
        (x.insertStyleElement = g()),
        b()(k.Z, x),
        k.Z && k.Z.locals && k.Z.locals);
      const S =
        "apply-overflow-tooltip apply-overflow-tooltip--check-children-recursively apply-overflow-tooltip--allow-text apply-common-tooltip";
      function C(t) {
        const {
          startSlot: r,
          iconOnly: e,
          children: i,
          endSlot: a,
          primaryText: n,
          secondaryText: u,
        } = t;
        if (r && a && e)
          return o.createElement(
            "span",
            { className: l()(d.slot, d.startSlotWrap) },
            r,
          );
        const b = e && (r ?? a),
          c = !r && !a && !e && !i && n && u;
        return o.createElement(
          o.Fragment,
          null,
          r &&
            o.createElement(
              "span",
              { className: l()(d.slot, d.startSlotWrap) },
              r,
            ),
          i && !b && o.createElement("span", { className: d.content }, i),
          a &&
            o.createElement(
              "span",
              { className: l()(d.slot, d.endSlotWrap) },
              a,
            ),
          c &&
            !b &&
            (function (t) {
              return (
                t.primaryText &&
                t.secondaryText &&
                o.createElement(
                  "div",
                  { className: l()(d.textWrap, S) },
                  o.createElement(
                    "span",
                    { className: d.primaryText },
                    " ",
                    t.primaryText,
                    " ",
                  ),
                  "string" == typeof t.secondaryText
                    ? o.createElement(
                        "span",
                        { className: d.secondaryText },
                        " ",
                        t.secondaryText,
                        " ",
                      )
                    : o.createElement(
                        "span",
                        { className: d.secondaryText },
                        o.createElement(
                          "span",
                          null,
                          t.secondaryText.firstLine,
                        ),
                        o.createElement(
                          "span",
                          null,
                          t.secondaryText.secondLine,
                        ),
                      ),
                )
              );
            })(t),
        );
      }
      const L = (t) => (0, o.isValidElement)(t) && Boolean(t.props.children),
        J = (t) =>
          null == t || "boolean" == typeof t || "{}" === JSON.stringify(t)
            ? ""
            : t.toString() + " ",
        O = (t) =>
          Array.isArray(t) || (0, o.isValidElement)(t)
            ? o.Children.toArray(t)
                .reduce((t, r) => {
                  let e = "";
                  return (
                    (e =
                      (0, o.isValidElement)(r) && L(r)
                        ? O(r.props.children)
                        : (0, o.isValidElement)(r) && !L(r)
                          ? ""
                          : J(r)),
                    t.concat(e)
                  );
                }, "")
                .trim()
            : J(t);
      var j = e(94882),
        F = e(57418);
      function w(t, r) {
        return (e) => {
          if (r) return (e.preventDefault(), void e.stopPropagation());
          t?.(e);
        };
      }
      function P(t) {
        const {
          className: r,
          color: e,
          variant: o,
          size: i,
          stretch: l,
          animated: a,
          iconOnly: n,
          startSlot: d,
          endSlot: u,
          primaryText: b,
          secondaryText: c,
          ...f
        } = t;
        return { ...f, ...(0, F._E)(t), ...(0, F.__)(t) };
      }
      function A(t) {
        const {
            reference: r,
            tooltipText: e,
            disabled: i,
            onClick: u,
            onMouseOver: b,
            onMouseOut: c,
            onMouseDown: f,
            onMouseEnter: m,
            "aria-disabled": h,
            ...p
          } = t,
          {
            isGrouped: s,
            cellState: y,
            disablePositionAdjustment: g,
          } = (0, o.useContext)(j.G),
          v = (function (t) {
            const {
                size: r = "medium",
                variant: e = "primary",
                stretch: o = !1,
                startSlot: i,
                endSlot: u,
                iconOnly: b = !1,
                className: c,
                isGrouped: f,
                cellState: m,
                disablePositionAdjustment: h = !1,
                primaryText: p,
                secondaryText: s,
                isAnchor: y = !1,
              } = t,
              g = (0, n.C)(t.color ?? "brand"),
              v = (function (t) {
                let r = "";
                return (
                  0 !== t &&
                    (1 & t && (r = l()(r, d["no-corner-top-left"])),
                    2 & t && (r = l()(r, d["no-corner-top-right"])),
                    4 & t && (r = l()(r, d["no-corner-bottom-right"])),
                    8 & t && (r = l()(r, d["no-corner-bottom-left"]))),
                  r
                );
              })((0, a.n)(m)),
              G = b && (i || u);
            return l()(
              c,
              d.button,
              d[r],
              d[g],
              d[e],
              o && d.stretch,
              i && d.withStartIcon,
              u && d.withEndIcon,
              G && d.iconOnly,
              v,
              f && d.grouped,
              f && !h && d.adjustPosition,
              f && m.isTop && d.firstRow,
              f && m.isLeft && d.firstCol,
              p && s && d.multilineContent,
              y && d.link,
              S,
            );
          })({
            ...p,
            isGrouped: s,
            cellState: y,
            disablePositionAdjustment: g,
          }),
          G =
            e ??
            (t.primaryText
              ? [t.primaryText, t.secondaryText].join(" ")
              : O(t.children));
        return o.createElement(
          "button",
          {
            ...P(p),
            "aria-disabled": i || h,
            tabIndex: t.tabIndex ?? (i ? -1 : 0),
            className: v,
            ref: r,
            onClick: w(u, i),
            onMouseDown: w(f, i),
            onMouseOver: w(b, i),
            onMouseOut: w(c, i),
            onMouseEnter: w(m, i),
            "data-overflow-tooltip-text": G,
          },
          o.createElement(C, { ...p }),
        );
      }
    },
    94882: (t, r, e) => {
      "use strict";
      e.d(r, { G: () => o });
      const o = e(50959).createContext({
        isGrouped: !1,
        cellState: { isTop: !0, isRight: !0, isBottom: !0, isLeft: !0 },
      });
    },
    9968: (t, r, e) => {
      "use strict";
      function o(t) {
        let r = 0;
        return (
          (t.isTop && t.isLeft) || (r += 1),
          (t.isTop && t.isRight) || (r += 2),
          (t.isBottom && t.isLeft) || (r += 8),
          (t.isBottom && t.isRight) || (r += 4),
          r
        );
      }
      e.d(r, { n: () => o });
    },
    97754: (t, r) => {
      var e;
      !(function () {
        "use strict";
        var o = {}.hasOwnProperty;
        function i() {
          for (var t = [], r = 0; r < arguments.length; r++) {
            var e = arguments[r];
            if (e) {
              var l = typeof e;
              if ("string" === l || "number" === l) t.push(e);
              else if (Array.isArray(e) && e.length) {
                var a = i.apply(null, e);
                a && t.push(a);
              } else if ("object" === l)
                for (var n in e) o.call(e, n) && e[n] && t.push(n);
            }
          }
          return t.join(" ");
        }
        t.exports
          ? ((i.default = i), (t.exports = i))
          : void 0 ===
              (e = function () {
                return i;
              }.apply(r, [])) || (t.exports = e);
      })();
    },
    88870: (t, r, e) => {
      "use strict";
      e.d(r, { Z: () => n });
      var o = e(43392),
        i = e.n(o),
        l = e(8021),
        a = e.n(l)()(i());
      a.push([
        t.id,
        '.button-qM2OSl9-:dir(ltr){align-items:center;background-color:var(--ui-lib-button-color-bg,var(--ui-lib-button-default-color-bg));border-color:var(--ui-lib-button-color-border,var(--ui-lib-button-default-color-border));border-style:solid;border-width:1px;box-sizing:border-box;color:var(--ui-lib-button-color-content,var(--ui-lib-button-default-color-content));display:inline-flex;justify-content:center;max-width:100%;padding-bottom:0;padding-left:var(--ui-lib-button-padding-left,var(--ui-lib-button-default-padding-left));padding-right:var(--ui-lib-button-padding-right,var(--ui-lib-button-default-padding-right));padding-top:0}.button-qM2OSl9-:dir(ltr){outline:none;overflow:visible;position:relative}.button-qM2OSl9-:focus:dir(ltr){outline:none}.button-qM2OSl9-:focus-visible:dir(ltr){outline:none}.button-qM2OSl9-:dir(ltr):after{border-style:solid;border-width:2px;box-sizing:border-box;content:"";display:none;height:calc(100% + 10px);left:-5px;pointer-events:none;position:absolute;top:-5px;width:calc(100% + 10px);z-index:1}.button-qM2OSl9-:focus:dir(ltr):after{display:block}.button-qM2OSl9-:focus-visible:dir(ltr):after{display:block}.button-qM2OSl9-:focus:not(:focus-visible):dir(ltr):after{display:none}.button-qM2OSl9-:dir(ltr):after{border-color:#2962ff}html.theme-dark .button-qM2OSl9-:dir(ltr):after{border-color:#2962ff}.content-1UNGmyXO:dir(ltr){overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.iconOnly-LdllQmY_ .content-1UNGmyXO:dir(ltr){border:0;height:1px;margin:-1px;padding:0;position:absolute;width:1px;clip:rect(0 0 0 0);overflow:hidden}.link-2jLVEuCD:dir(ltr){cursor:pointer;-webkit-user-select:none;user-select:none}.brand-KAkAQX16.primary-LCiGJGSZ:dir(ltr){--ui-lib-button-default-color-bg:#2962ff;--ui-lib-button-default-color-border:#2962ff;--ui-lib-button-default-color-content:#fff}html.theme-dark .brand-KAkAQX16.primary-LCiGJGSZ:dir(ltr){--ui-lib-button-default-color-content:#fff}html.theme-dark .brand-KAkAQX16.primary-LCiGJGSZ:dir(ltr){--ui-lib-button-default-color-border:#2962ff}html.theme-dark .brand-KAkAQX16.primary-LCiGJGSZ:dir(ltr){--ui-lib-button-default-color-bg:#2962ff}@media not (pointer:coarse){@media (any-hover:hover){.brand-KAkAQX16.primary-LCiGJGSZ:hover:dir(ltr){--ui-lib-button-default-color-bg:#1e53e5;--ui-lib-button-default-color-border:#1e53e5;--ui-lib-button-default-color-content:#fff}}@media (any-hover:hover){html.theme-dark .brand-KAkAQX16.primary-LCiGJGSZ:hover:dir(ltr){--ui-lib-button-default-color-content:#fff}}@media (any-hover:hover){html.theme-dark .brand-KAkAQX16.primary-LCiGJGSZ:hover:dir(ltr){--ui-lib-button-default-color-border:#1e53e5}}@media (any-hover:hover){html.theme-dark .brand-KAkAQX16.primary-LCiGJGSZ:hover:dir(ltr){--ui-lib-button-default-color-bg:#1e53e5}}}.brand-KAkAQX16.primary-LCiGJGSZ:active:dir(ltr){--ui-lib-button-default-color-bg:#1848cc;--ui-lib-button-default-color-border:#1848cc;--ui-lib-button-default-color-content:#fff}html.theme-dark .brand-KAkAQX16.primary-LCiGJGSZ:active:dir(ltr){--ui-lib-button-default-color-content:#fff}html.theme-dark .brand-KAkAQX16.primary-LCiGJGSZ:active:dir(ltr){--ui-lib-button-default-color-border:#1848cc}html.theme-dark .brand-KAkAQX16.primary-LCiGJGSZ:active:dir(ltr){--ui-lib-button-default-color-bg:#1848cc}.brand-KAkAQX16.secondary--jp1G1oF:dir(ltr){--ui-lib-button-default-color-bg:#0000;--ui-lib-button-default-color-border:#2962ff;--ui-lib-button-default-color-content:#2962ff}html.theme-dark .brand-KAkAQX16.secondary--jp1G1oF:dir(ltr){--ui-lib-button-default-color-content:#2962ff}html.theme-dark .brand-KAkAQX16.secondary--jp1G1oF:dir(ltr){--ui-lib-button-default-color-border:#2962ff}html.theme-dark .brand-KAkAQX16.secondary--jp1G1oF:dir(ltr){--ui-lib-button-default-color-bg:#0000}@media not (pointer:coarse){@media (any-hover:hover){.brand-KAkAQX16.secondary--jp1G1oF:hover:dir(ltr){--ui-lib-button-default-color-bg:#1e53e5;--ui-lib-button-default-color-border:#1e53e5;--ui-lib-button-default-color-content:#fff}}@media (any-hover:hover){html.theme-dark .brand-KAkAQX16.secondary--jp1G1oF:hover:dir(ltr){--ui-lib-button-default-color-content:#fff}}@media (any-hover:hover){html.theme-dark .brand-KAkAQX16.secondary--jp1G1oF:hover:dir(ltr){--ui-lib-button-default-color-border:#1e53e5}}@media (any-hover:hover){html.theme-dark .brand-KAkAQX16.secondary--jp1G1oF:hover:dir(ltr){--ui-lib-button-default-color-bg:#1e53e5}}}.brand-KAkAQX16.secondary--jp1G1oF:active:dir(ltr){--ui-lib-button-default-color-bg:#1848cc;--ui-lib-button-default-color-border:#1848cc;--ui-lib-button-default-color-content:#fff}html.theme-dark .brand-KAkAQX16.secondary--jp1G1oF:active:dir(ltr){--ui-lib-button-default-color-content:#fff}html.theme-dark .brand-KAkAQX16.secondary--jp1G1oF:active:dir(ltr){--ui-lib-button-default-color-border:#1848cc}html.theme-dark .brand-KAkAQX16.secondary--jp1G1oF:active:dir(ltr){--ui-lib-button-default-color-bg:#1848cc}.gray-2_1Iqa8n.primary-LCiGJGSZ:dir(ltr){--ui-lib-button-default-color-bg:#f2f2f2;--ui-lib-button-default-color-border:#f2f2f2;--ui-lib-button-default-color-content:#0f0f0f}html.theme-dark .gray-2_1Iqa8n.primary-LCiGJGSZ:dir(ltr){--ui-lib-button-default-color-content:#fff}html.theme-dark .gray-2_1Iqa8n.primary-LCiGJGSZ:dir(ltr){--ui-lib-button-default-color-border:#2e2e2e}html.theme-dark .gray-2_1Iqa8n.primary-LCiGJGSZ:dir(ltr){--ui-lib-button-default-color-bg:#2e2e2e}@media not (pointer:coarse){@media (any-hover:hover){.gray-2_1Iqa8n.primary-LCiGJGSZ:hover:dir(ltr){--ui-lib-button-default-color-bg:#ebebeb;--ui-lib-button-default-color-border:#ebebeb;--ui-lib-button-default-color-content:#0f0f0f}}@media (any-hover:hover){html.theme-dark .gray-2_1Iqa8n.primary-LCiGJGSZ:hover:dir(ltr){--ui-lib-button-default-color-content:#fff}}@media (any-hover:hover){html.theme-dark .gray-2_1Iqa8n.primary-LCiGJGSZ:hover:dir(ltr){--ui-lib-button-default-color-border:#3d3d3d}}@media (any-hover:hover){html.theme-dark .gray-2_1Iqa8n.primary-LCiGJGSZ:hover:dir(ltr){--ui-lib-button-default-color-bg:#3d3d3d}}}.gray-2_1Iqa8n.primary-LCiGJGSZ:active:dir(ltr){--ui-lib-button-default-color-bg:#dbdbdb;--ui-lib-button-default-color-border:#dbdbdb;--ui-lib-button-default-color-content:#0f0f0f}html.theme-dark .gray-2_1Iqa8n.primary-LCiGJGSZ:active:dir(ltr){--ui-lib-button-default-color-content:#fff}html.theme-dark .gray-2_1Iqa8n.primary-LCiGJGSZ:active:dir(ltr){--ui-lib-button-default-color-border:#4a4a4a}html.theme-dark .gray-2_1Iqa8n.primary-LCiGJGSZ:active:dir(ltr){--ui-lib-button-default-color-bg:#4a4a4a}.gray-2_1Iqa8n.secondary--jp1G1oF:dir(ltr){--ui-lib-button-default-color-bg:#0000;--ui-lib-button-default-color-border:#ebebeb;--ui-lib-button-default-color-content:#0f0f0f}html.theme-dark .gray-2_1Iqa8n.secondary--jp1G1oF:dir(ltr){--ui-lib-button-default-color-content:#dbdbdb}html.theme-dark .gray-2_1Iqa8n.secondary--jp1G1oF:dir(ltr){--ui-lib-button-default-color-border:#4a4a4a}html.theme-dark .gray-2_1Iqa8n.secondary--jp1G1oF:dir(ltr){--ui-lib-button-default-color-bg:#0000}@media not (pointer:coarse){@media (any-hover:hover){.gray-2_1Iqa8n.secondary--jp1G1oF:hover:dir(ltr){--ui-lib-button-default-color-bg:#f2f2f2;--ui-lib-button-default-color-border:#f2f2f2;--ui-lib-button-default-color-content:#0f0f0f}}@media (any-hover:hover){html.theme-dark .gray-2_1Iqa8n.secondary--jp1G1oF:hover:dir(ltr){--ui-lib-button-default-color-content:#fff}}@media (any-hover:hover){html.theme-dark .gray-2_1Iqa8n.secondary--jp1G1oF:hover:dir(ltr){--ui-lib-button-default-color-border:#2e2e2e}}@media (any-hover:hover){html.theme-dark .gray-2_1Iqa8n.secondary--jp1G1oF:hover:dir(ltr){--ui-lib-button-default-color-bg:#2e2e2e}}}.gray-2_1Iqa8n.secondary--jp1G1oF:active:dir(ltr){--ui-lib-button-default-color-bg:#ebebeb;--ui-lib-button-default-color-border:#ebebeb;--ui-lib-button-default-color-content:#0f0f0f}html.theme-dark .gray-2_1Iqa8n.secondary--jp1G1oF:active:dir(ltr){--ui-lib-button-default-color-content:#fff}html.theme-dark .gray-2_1Iqa8n.secondary--jp1G1oF:active:dir(ltr){--ui-lib-button-default-color-border:#3d3d3d}html.theme-dark .gray-2_1Iqa8n.secondary--jp1G1oF:active:dir(ltr){--ui-lib-button-default-color-bg:#3d3d3d}.green-3PPYMCey.primary-LCiGJGSZ:dir(ltr){--ui-lib-button-default-color-bg:#089981;--ui-lib-button-default-color-border:#089981;--ui-lib-button-default-color-content:#fff}html.theme-dark .green-3PPYMCey.primary-LCiGJGSZ:dir(ltr){--ui-lib-button-default-color-content:#fff}html.theme-dark .green-3PPYMCey.primary-LCiGJGSZ:dir(ltr){--ui-lib-button-default-color-border:#089981}html.theme-dark .green-3PPYMCey.primary-LCiGJGSZ:dir(ltr){--ui-lib-button-default-color-bg:#089981}@media not (pointer:coarse){@media (any-hover:hover){.green-3PPYMCey.primary-LCiGJGSZ:hover:dir(ltr){--ui-lib-button-default-color-bg:#06806b;--ui-lib-button-default-color-border:#06806b;--ui-lib-button-default-color-content:#fff}}@media (any-hover:hover){html.theme-dark .green-3PPYMCey.primary-LCiGJGSZ:hover:dir(ltr){--ui-lib-button-default-color-content:#fff}}@media (any-hover:hover){html.theme-dark .green-3PPYMCey.primary-LCiGJGSZ:hover:dir(ltr){--ui-lib-button-default-color-border:#06806b}}@media (any-hover:hover){html.theme-dark .green-3PPYMCey.primary-LCiGJGSZ:hover:dir(ltr){--ui-lib-button-default-color-bg:#06806b}}}.green-3PPYMCey.primary-LCiGJGSZ:active:dir(ltr){--ui-lib-button-default-color-bg:#056656;--ui-lib-button-default-color-border:#056656;--ui-lib-button-default-color-content:#fff}html.theme-dark .green-3PPYMCey.primary-LCiGJGSZ:active:dir(ltr){--ui-lib-button-default-color-content:#fff}html.theme-dark .green-3PPYMCey.primary-LCiGJGSZ:active:dir(ltr){--ui-lib-button-default-color-border:#056656}html.theme-dark .green-3PPYMCey.primary-LCiGJGSZ:active:dir(ltr){--ui-lib-button-default-color-bg:#056656}.green-3PPYMCey.secondary--jp1G1oF:dir(ltr){--ui-lib-button-default-color-bg:#0000;--ui-lib-button-default-color-border:#089981;--ui-lib-button-default-color-content:#089981}html.theme-dark .green-3PPYMCey.secondary--jp1G1oF:dir(ltr){--ui-lib-button-default-color-content:#089981}html.theme-dark .green-3PPYMCey.secondary--jp1G1oF:dir(ltr){--ui-lib-button-default-color-border:#089981}html.theme-dark .green-3PPYMCey.secondary--jp1G1oF:dir(ltr){--ui-lib-button-default-color-bg:#0000}@media not (pointer:coarse){@media (any-hover:hover){.green-3PPYMCey.secondary--jp1G1oF:hover:dir(ltr){--ui-lib-button-default-color-bg:#06806b;--ui-lib-button-default-color-border:#06806b;--ui-lib-button-default-color-content:#fff}}@media (any-hover:hover){html.theme-dark .green-3PPYMCey.secondary--jp1G1oF:hover:dir(ltr){--ui-lib-button-default-color-content:#fff}}@media (any-hover:hover){html.theme-dark .green-3PPYMCey.secondary--jp1G1oF:hover:dir(ltr){--ui-lib-button-default-color-border:#06806b}}@media (any-hover:hover){html.theme-dark .green-3PPYMCey.secondary--jp1G1oF:hover:dir(ltr){--ui-lib-button-default-color-bg:#06806b}}}.green-3PPYMCey.secondary--jp1G1oF:active:dir(ltr){--ui-lib-button-default-color-bg:#056656;--ui-lib-button-default-color-border:#056656;--ui-lib-button-default-color-content:#fff}html.theme-dark .green-3PPYMCey.secondary--jp1G1oF:active:dir(ltr){--ui-lib-button-default-color-content:#fff}html.theme-dark .green-3PPYMCey.secondary--jp1G1oF:active:dir(ltr){--ui-lib-button-default-color-border:#056656}html.theme-dark .green-3PPYMCey.secondary--jp1G1oF:active:dir(ltr){--ui-lib-button-default-color-bg:#056656}.red-T8Q0A2dV.primary-LCiGJGSZ:dir(ltr){--ui-lib-button-default-color-bg:#f23645;--ui-lib-button-default-color-border:#f23645;--ui-lib-button-default-color-content:#fff}html.theme-dark .red-T8Q0A2dV.primary-LCiGJGSZ:dir(ltr){--ui-lib-button-default-color-content:#fff}html.theme-dark .red-T8Q0A2dV.primary-LCiGJGSZ:dir(ltr){--ui-lib-button-default-color-border:#f23645}html.theme-dark .red-T8Q0A2dV.primary-LCiGJGSZ:dir(ltr){--ui-lib-button-default-color-bg:#f23645}@media not (pointer:coarse){@media (any-hover:hover){.red-T8Q0A2dV.primary-LCiGJGSZ:hover:dir(ltr){--ui-lib-button-default-color-bg:#cc2f3c;--ui-lib-button-default-color-border:#cc2f3c;--ui-lib-button-default-color-content:#fff}}@media (any-hover:hover){html.theme-dark .red-T8Q0A2dV.primary-LCiGJGSZ:hover:dir(ltr){--ui-lib-button-default-color-content:#fff}}@media (any-hover:hover){html.theme-dark .red-T8Q0A2dV.primary-LCiGJGSZ:hover:dir(ltr){--ui-lib-button-default-color-border:#cc2f3c}}@media (any-hover:hover){html.theme-dark .red-T8Q0A2dV.primary-LCiGJGSZ:hover:dir(ltr){--ui-lib-button-default-color-bg:#cc2f3c}}}.red-T8Q0A2dV.primary-LCiGJGSZ:active:dir(ltr){--ui-lib-button-default-color-bg:#b22833;--ui-lib-button-default-color-border:#b22833;--ui-lib-button-default-color-content:#fff}html.theme-dark .red-T8Q0A2dV.primary-LCiGJGSZ:active:dir(ltr){--ui-lib-button-default-color-content:#fff}html.theme-dark .red-T8Q0A2dV.primary-LCiGJGSZ:active:dir(ltr){--ui-lib-button-default-color-border:#b22833}html.theme-dark .red-T8Q0A2dV.primary-LCiGJGSZ:active:dir(ltr){--ui-lib-button-default-color-bg:#b22833}.red-T8Q0A2dV.secondary--jp1G1oF:dir(ltr){--ui-lib-button-default-color-bg:#0000;--ui-lib-button-default-color-border:#f23645;--ui-lib-button-default-color-content:#f23645}html.theme-dark .red-T8Q0A2dV.secondary--jp1G1oF:dir(ltr){--ui-lib-button-default-color-content:#f23645}html.theme-dark .red-T8Q0A2dV.secondary--jp1G1oF:dir(ltr){--ui-lib-button-default-color-border:#f23645}html.theme-dark .red-T8Q0A2dV.secondary--jp1G1oF:dir(ltr){--ui-lib-button-default-color-bg:#0000}@media not (pointer:coarse){@media (any-hover:hover){.red-T8Q0A2dV.secondary--jp1G1oF:hover:dir(ltr){--ui-lib-button-default-color-bg:#cc2f3c;--ui-lib-button-default-color-border:#cc2f3c;--ui-lib-button-default-color-content:#fff}}@media (any-hover:hover){html.theme-dark .red-T8Q0A2dV.secondary--jp1G1oF:hover:dir(ltr){--ui-lib-button-default-color-content:#fff}}@media (any-hover:hover){html.theme-dark .red-T8Q0A2dV.secondary--jp1G1oF:hover:dir(ltr){--ui-lib-button-default-color-border:#cc2f3c}}@media (any-hover:hover){html.theme-dark .red-T8Q0A2dV.secondary--jp1G1oF:hover:dir(ltr){--ui-lib-button-default-color-bg:#cc2f3c}}}.red-T8Q0A2dV.secondary--jp1G1oF:active:dir(ltr){--ui-lib-button-default-color-bg:#b22833;--ui-lib-button-default-color-border:#b22833;--ui-lib-button-default-color-content:#fff}html.theme-dark .red-T8Q0A2dV.secondary--jp1G1oF:active:dir(ltr){--ui-lib-button-default-color-content:#fff}html.theme-dark .red-T8Q0A2dV.secondary--jp1G1oF:active:dir(ltr){--ui-lib-button-default-color-border:#b22833}html.theme-dark .red-T8Q0A2dV.secondary--jp1G1oF:active:dir(ltr){--ui-lib-button-default-color-bg:#b22833}.black-3eIOrpGN.primary-LCiGJGSZ:dir(ltr){--ui-lib-button-default-color-bg:#0f0f0f;--ui-lib-button-default-color-border:#0f0f0f;--ui-lib-button-default-color-content:#fff}html.theme-dark .black-3eIOrpGN.primary-LCiGJGSZ:dir(ltr){--ui-lib-button-default-color-content:#0f0f0f}html.theme-dark .black-3eIOrpGN.primary-LCiGJGSZ:dir(ltr){--ui-lib-button-default-color-border:#fff}html.theme-dark .black-3eIOrpGN.primary-LCiGJGSZ:dir(ltr){--ui-lib-button-default-color-bg:#fff}@media not (pointer:coarse){@media (any-hover:hover){.black-3eIOrpGN.primary-LCiGJGSZ:hover:dir(ltr){--ui-lib-button-default-color-bg:#2e2e2e;--ui-lib-button-default-color-border:#2e2e2e;--ui-lib-button-default-color-content:#fff}}@media (any-hover:hover){html.theme-dark .black-3eIOrpGN.primary-LCiGJGSZ:hover:dir(ltr){--ui-lib-button-default-color-content:#0f0f0f}}@media (any-hover:hover){html.theme-dark .black-3eIOrpGN.primary-LCiGJGSZ:hover:dir(ltr){--ui-lib-button-default-color-border:#f2f2f2}}@media (any-hover:hover){html.theme-dark .black-3eIOrpGN.primary-LCiGJGSZ:hover:dir(ltr){--ui-lib-button-default-color-bg:#f2f2f2}}}.black-3eIOrpGN.primary-LCiGJGSZ:active:dir(ltr){--ui-lib-button-default-color-bg:#4a4a4a;--ui-lib-button-default-color-border:#4a4a4a;--ui-lib-button-default-color-content:#fff}html.theme-dark .black-3eIOrpGN.primary-LCiGJGSZ:active:dir(ltr){--ui-lib-button-default-color-content:#0f0f0f}html.theme-dark .black-3eIOrpGN.primary-LCiGJGSZ:active:dir(ltr){--ui-lib-button-default-color-border:#dbdbdb}html.theme-dark .black-3eIOrpGN.primary-LCiGJGSZ:active:dir(ltr){--ui-lib-button-default-color-bg:#dbdbdb}.black-3eIOrpGN.secondary--jp1G1oF:dir(ltr){--ui-lib-button-default-color-bg:#0000;--ui-lib-button-default-color-border:#0f0f0f;--ui-lib-button-default-color-content:#0f0f0f}html.theme-dark .black-3eIOrpGN.secondary--jp1G1oF:dir(ltr){--ui-lib-button-default-color-content:#fff}html.theme-dark .black-3eIOrpGN.secondary--jp1G1oF:dir(ltr){--ui-lib-button-default-color-border:#fff}html.theme-dark .black-3eIOrpGN.secondary--jp1G1oF:dir(ltr){--ui-lib-button-default-color-bg:#0000}@media not (pointer:coarse){@media (any-hover:hover){.black-3eIOrpGN.secondary--jp1G1oF:hover:dir(ltr){--ui-lib-button-default-color-bg:#2e2e2e;--ui-lib-button-default-color-border:#2e2e2e;--ui-lib-button-default-color-content:#fff}}@media (any-hover:hover){html.theme-dark .black-3eIOrpGN.secondary--jp1G1oF:hover:dir(ltr){--ui-lib-button-default-color-content:#0f0f0f}}@media (any-hover:hover){html.theme-dark .black-3eIOrpGN.secondary--jp1G1oF:hover:dir(ltr){--ui-lib-button-default-color-border:#f2f2f2}}@media (any-hover:hover){html.theme-dark .black-3eIOrpGN.secondary--jp1G1oF:hover:dir(ltr){--ui-lib-button-default-color-bg:#f2f2f2}}}.black-3eIOrpGN.secondary--jp1G1oF:active:dir(ltr){--ui-lib-button-default-color-bg:#4a4a4a;--ui-lib-button-default-color-border:#4a4a4a;--ui-lib-button-default-color-content:#fff}html.theme-dark .black-3eIOrpGN.secondary--jp1G1oF:active:dir(ltr){--ui-lib-button-default-color-content:#0f0f0f}html.theme-dark .black-3eIOrpGN.secondary--jp1G1oF:active:dir(ltr){--ui-lib-button-default-color-border:#dbdbdb}html.theme-dark .black-3eIOrpGN.secondary--jp1G1oF:active:dir(ltr){--ui-lib-button-default-color-bg:#dbdbdb}.primary-LCiGJGSZ[aria-disabled=true]:dir(ltr){transform:none}.primary-LCiGJGSZ[aria-disabled=true]:dir(ltr),.primary-LCiGJGSZ[aria-disabled=true]:link:dir(ltr),.primary-LCiGJGSZ[aria-disabled=true]:visited:dir(ltr){background-color:#ebebeb;border-color:#ebebeb;color:#b8b8b8}html.theme-dark .primary-LCiGJGSZ[aria-disabled=true]:dir(ltr),html.theme-dark .primary-LCiGJGSZ[aria-disabled=true]:link:dir(ltr),html.theme-dark .primary-LCiGJGSZ[aria-disabled=true]:visited:dir(ltr){color:#636363}html.theme-dark .primary-LCiGJGSZ[aria-disabled=true]:dir(ltr),html.theme-dark .primary-LCiGJGSZ[aria-disabled=true]:link:dir(ltr),html.theme-dark .primary-LCiGJGSZ[aria-disabled=true]:visited:dir(ltr){border-color:#3d3d3d}html.theme-dark .primary-LCiGJGSZ[aria-disabled=true]:dir(ltr),html.theme-dark .primary-LCiGJGSZ[aria-disabled=true]:link:dir(ltr),html.theme-dark .primary-LCiGJGSZ[aria-disabled=true]:visited:dir(ltr){background-color:#3d3d3d}.secondary--jp1G1oF[aria-disabled=true]:dir(ltr){transform:none}.secondary--jp1G1oF[aria-disabled=true]:dir(ltr),.secondary--jp1G1oF[aria-disabled=true]:link:dir(ltr),.secondary--jp1G1oF[aria-disabled=true]:visited:dir(ltr){background-color:initial;border-color:#ebebeb;color:#b8b8b8}html.theme-dark .secondary--jp1G1oF[aria-disabled=true]:dir(ltr),html.theme-dark .secondary--jp1G1oF[aria-disabled=true]:link:dir(ltr),html.theme-dark .secondary--jp1G1oF[aria-disabled=true]:visited:dir(ltr){color:#636363}html.theme-dark .secondary--jp1G1oF[aria-disabled=true]:dir(ltr),html.theme-dark .secondary--jp1G1oF[aria-disabled=true]:link:dir(ltr),html.theme-dark .secondary--jp1G1oF[aria-disabled=true]:visited:dir(ltr){border-color:#3d3d3d}html.theme-dark .secondary--jp1G1oF[aria-disabled=true]:dir(ltr),html.theme-dark .secondary--jp1G1oF[aria-disabled=true]:link:dir(ltr),html.theme-dark .secondary--jp1G1oF[aria-disabled=true]:visited:dir(ltr){background-color:initial}.black-friday-imtBaxE1.primary-LCiGJGSZ:dir(ltr){background:linear-gradient(90deg,#ff2e3e,#ff2e3e,#ff9800,#ff2e3e,#ff2e3e);background-size:200% 100%;border:none;transition:.4s;--ui-lib-button-default-color-content:#fff}html.theme-dark .black-friday-imtBaxE1.primary-LCiGJGSZ:dir(ltr){--ui-lib-button-default-color-content:#fff}@media not (pointer:coarse){@media (any-hover:hover){.black-friday-imtBaxE1.primary-LCiGJGSZ:hover:dir(ltr){background-position:-100%;--ui-lib-button-default-color-content:#fff}}@media (any-hover:hover){html.theme-dark .black-friday-imtBaxE1.primary-LCiGJGSZ:hover:dir(ltr){--ui-lib-button-default-color-content:#fff}}}.black-friday-imtBaxE1.primary-LCiGJGSZ:active:dir(ltr){background-position:-20%;background-size:300% 100%;--ui-lib-button-default-color-content:#fff}html.theme-dark .black-friday-imtBaxE1.primary-LCiGJGSZ:active:dir(ltr){--ui-lib-button-default-color-content:#fff}.black-friday-imtBaxE1.primary-LCiGJGSZ[aria-disabled=true]:dir(ltr){background:none}.black-friday-imtBaxE1.secondary--jp1G1oF:dir(ltr){--ui-lib-button-default-color-bg:#0000;--ui-lib-button-default-color-border:#f23645;--ui-lib-button-default-color-content:#f23645}html.theme-dark .black-friday-imtBaxE1.secondary--jp1G1oF:dir(ltr){--ui-lib-button-default-color-content:#f23645}html.theme-dark .black-friday-imtBaxE1.secondary--jp1G1oF:dir(ltr){--ui-lib-button-default-color-border:#f23645}html.theme-dark .black-friday-imtBaxE1.secondary--jp1G1oF:dir(ltr){--ui-lib-button-default-color-bg:#0000}@media not (pointer:coarse){@media (any-hover:hover){.black-friday-imtBaxE1.secondary--jp1G1oF:hover:dir(ltr){--ui-lib-button-default-color-bg:#cc2f3c;--ui-lib-button-default-color-border:#cc2f3c;--ui-lib-button-default-color-content:#fff}}@media (any-hover:hover){html.theme-dark .black-friday-imtBaxE1.secondary--jp1G1oF:hover:dir(ltr){--ui-lib-button-default-color-content:#fff}}@media (any-hover:hover){html.theme-dark .black-friday-imtBaxE1.secondary--jp1G1oF:hover:dir(ltr){--ui-lib-button-default-color-border:#cc2f3c}}@media (any-hover:hover){html.theme-dark .black-friday-imtBaxE1.secondary--jp1G1oF:hover:dir(ltr){--ui-lib-button-default-color-bg:#cc2f3c}}}.black-friday-imtBaxE1.secondary--jp1G1oF:active:dir(ltr){--ui-lib-button-default-color-bg:#b22833;--ui-lib-button-default-color-border:#b22833;--ui-lib-button-default-color-content:#fff}html.theme-dark .black-friday-imtBaxE1.secondary--jp1G1oF:active:dir(ltr){--ui-lib-button-default-color-content:#fff}html.theme-dark .black-friday-imtBaxE1.secondary--jp1G1oF:active:dir(ltr){--ui-lib-button-default-color-border:#b22833}html.theme-dark .black-friday-imtBaxE1.secondary--jp1G1oF:active:dir(ltr){--ui-lib-button-default-color-bg:#b22833}.cyber-monday-GrykOCUa.primary-LCiGJGSZ:dir(ltr){background:linear-gradient(90deg,#03e6fe,#03e6fe,#61ffd0,#03e6fe,#03e6fe);background-size:200% 100%;border:none;transition:.4s;--ui-lib-button-default-color-content:#0f0f0f}html.theme-dark .cyber-monday-GrykOCUa.primary-LCiGJGSZ:dir(ltr){--ui-lib-button-default-color-content:#0f0f0f}@media not (pointer:coarse){@media (any-hover:hover){.cyber-monday-GrykOCUa.primary-LCiGJGSZ:hover:dir(ltr){background-position:-100%;--ui-lib-button-default-color-content:#0f0f0f}}@media (any-hover:hover){html.theme-dark .cyber-monday-GrykOCUa.primary-LCiGJGSZ:hover:dir(ltr){--ui-lib-button-default-color-content:#0f0f0f}}}.cyber-monday-GrykOCUa.primary-LCiGJGSZ:active:dir(ltr){background-position:-20%;background-size:300% 100%;--ui-lib-button-default-color-content:#0f0f0f}html.theme-dark .cyber-monday-GrykOCUa.primary-LCiGJGSZ:active:dir(ltr){--ui-lib-button-default-color-content:#0f0f0f}.cyber-monday-GrykOCUa.primary-LCiGJGSZ[aria-disabled=true]:dir(ltr){background:none}.cyber-monday-GrykOCUa.secondary--jp1G1oF:dir(ltr){--ui-lib-button-default-color-bg:#0000;--ui-lib-button-default-color-border:#00e5ff;--ui-lib-button-default-color-content:#00e5ff}html.theme-dark .cyber-monday-GrykOCUa.secondary--jp1G1oF:dir(ltr){--ui-lib-button-default-color-content:#00e5ff}html.theme-dark .cyber-monday-GrykOCUa.secondary--jp1G1oF:dir(ltr){--ui-lib-button-default-color-border:#00e5ff}html.theme-dark .cyber-monday-GrykOCUa.secondary--jp1G1oF:dir(ltr){--ui-lib-button-default-color-bg:#0000}@media not (pointer:coarse){@media (any-hover:hover){.cyber-monday-GrykOCUa.secondary--jp1G1oF:hover:dir(ltr){--ui-lib-button-default-color-bg:#00e5ff;--ui-lib-button-default-color-border:#00e5ff;--ui-lib-button-default-color-content:#0f0f0f}}@media (any-hover:hover){html.theme-dark .cyber-monday-GrykOCUa.secondary--jp1G1oF:hover:dir(ltr){--ui-lib-button-default-color-content:#0f0f0f}}@media (any-hover:hover){html.theme-dark .cyber-monday-GrykOCUa.secondary--jp1G1oF:hover:dir(ltr){--ui-lib-button-default-color-border:#00e5ff}}@media (any-hover:hover){html.theme-dark .cyber-monday-GrykOCUa.secondary--jp1G1oF:hover:dir(ltr){--ui-lib-button-default-color-bg:#00e5ff}}}.cyber-monday-GrykOCUa.secondary--jp1G1oF:active:dir(ltr){--ui-lib-button-default-color-bg:#00b8d4;--ui-lib-button-default-color-border:#00b8d4;--ui-lib-button-default-color-content:#0f0f0f}html.theme-dark .cyber-monday-GrykOCUa.secondary--jp1G1oF:active:dir(ltr){--ui-lib-button-default-color-content:#0f0f0f}html.theme-dark .cyber-monday-GrykOCUa.secondary--jp1G1oF:active:dir(ltr){--ui-lib-button-default-color-border:#00b8d4}html.theme-dark .cyber-monday-GrykOCUa.secondary--jp1G1oF:active:dir(ltr){--ui-lib-button-default-color-bg:#00b8d4}.slot-3p0JfExG:dir(ltr){align-items:center;display:flex;justify-content:center}.xsmall-1NscMQXH:dir(ltr){border-radius:6px;height:28px;--ui-lib-button-default-padding-left:7px;--ui-lib-button-default-padding-right:7px}.xsmall-1NscMQXH:dir(ltr):after{border-radius:10px}.xsmall-1NscMQXH.iconOnly-LdllQmY_:dir(ltr){height:28px;width:28px;--ui-lib-button-default-padding-left:0;--ui-lib-button-default-padding-right:0}.xsmall-1NscMQXH:not(.iconOnly-LdllQmY_).withStartSlot-1SmHbPb8:dir(ltr){--ui-lib-button-default-padding-left:7px}.xsmall-1NscMQXH:not(.iconOnly-LdllQmY_).withEndSlot-3chHJlH6:dir(ltr){--ui-lib-button-default-padding-right:7px}.xsmall-1NscMQXH:not(.iconOnly-LdllQmY_) .startSlotWrap-8fC_hnI8:dir(ltr){margin-right:4px}.xsmall-1NscMQXH:not(.iconOnly-LdllQmY_) .endSlotWrap-1PfeXjk4:dir(ltr){margin-left:4px}.small-3N5nvfWy:dir(ltr){border-radius:6px;height:34px;--ui-lib-button-default-padding-left:11px;--ui-lib-button-default-padding-right:11px}.small-3N5nvfWy:dir(ltr):after{border-radius:10px}.small-3N5nvfWy.iconOnly-LdllQmY_:dir(ltr){height:34px;width:34px;--ui-lib-button-default-padding-left:0;--ui-lib-button-default-padding-right:0}.small-3N5nvfWy:not(.iconOnly-LdllQmY_).withStartSlot-1SmHbPb8:dir(ltr){--ui-lib-button-default-padding-left:11px}.small-3N5nvfWy:not(.iconOnly-LdllQmY_).withEndSlot-3chHJlH6:dir(ltr){--ui-lib-button-default-padding-right:11px}.small-3N5nvfWy:not(.iconOnly-LdllQmY_) .startSlotWrap-8fC_hnI8:dir(ltr){margin-right:4px}.small-3N5nvfWy:not(.iconOnly-LdllQmY_) .endSlotWrap-1PfeXjk4:dir(ltr){margin-left:4px}.medium-3K3bD2no:dir(ltr){border-radius:8px;height:40px;--ui-lib-button-default-padding-left:15px;--ui-lib-button-default-padding-right:15px}.medium-3K3bD2no:dir(ltr):after{border-radius:12px}.medium-3K3bD2no.iconOnly-LdllQmY_:dir(ltr){height:40px;width:40px;--ui-lib-button-default-padding-left:0;--ui-lib-button-default-padding-right:0}.medium-3K3bD2no:not(.iconOnly-LdllQmY_).withStartSlot-1SmHbPb8:dir(ltr){--ui-lib-button-default-padding-left:15px}.medium-3K3bD2no:not(.iconOnly-LdllQmY_).withEndSlot-3chHJlH6:dir(ltr){--ui-lib-button-default-padding-right:15px}.medium-3K3bD2no:not(.iconOnly-LdllQmY_) .startSlotWrap-8fC_hnI8:dir(ltr){margin-right:4px}.medium-3K3bD2no:not(.iconOnly-LdllQmY_) .endSlotWrap-1PfeXjk4:dir(ltr){margin-left:4px}.large-2-TJnftc:dir(ltr){border-radius:8px;height:48px;--ui-lib-button-default-padding-left:23px;--ui-lib-button-default-padding-right:23px}.large-2-TJnftc:dir(ltr):after{border-radius:12px}.large-2-TJnftc.iconOnly-LdllQmY_:dir(ltr){height:48px;width:48px;--ui-lib-button-default-padding-left:0;--ui-lib-button-default-padding-right:0}.large-2-TJnftc:not(.iconOnly-LdllQmY_).withStartSlot-1SmHbPb8:dir(ltr){--ui-lib-button-default-padding-left:23px}.large-2-TJnftc:not(.iconOnly-LdllQmY_).withEndSlot-3chHJlH6:dir(ltr){--ui-lib-button-default-padding-right:23px}.large-2-TJnftc:not(.iconOnly-LdllQmY_) .startSlotWrap-8fC_hnI8:dir(ltr){margin-right:8px}.large-2-TJnftc:not(.iconOnly-LdllQmY_) .endSlotWrap-1PfeXjk4:dir(ltr){margin-left:8px}.xlarge-3XdWhtv1:dir(ltr){border-radius:12px;height:56px;--ui-lib-button-default-padding-left:31px;--ui-lib-button-default-padding-right:31px}.xlarge-3XdWhtv1:dir(ltr):after{border-radius:16px}.xlarge-3XdWhtv1.iconOnly-LdllQmY_:dir(ltr){height:56px;width:56px;--ui-lib-button-default-padding-left:0;--ui-lib-button-default-padding-right:0}.xlarge-3XdWhtv1:not(.iconOnly-LdllQmY_).withStartSlot-1SmHbPb8:dir(ltr){--ui-lib-button-default-padding-left:31px}.xlarge-3XdWhtv1:not(.iconOnly-LdllQmY_).withEndSlot-3chHJlH6:dir(ltr){--ui-lib-button-default-padding-right:31px}.xlarge-3XdWhtv1:not(.iconOnly-LdllQmY_) .startSlotWrap-8fC_hnI8:dir(ltr){margin-right:8px}.xlarge-3XdWhtv1:not(.iconOnly-LdllQmY_) .endSlotWrap-1PfeXjk4:dir(ltr){margin-left:8px}.xsmall-1NscMQXH .content-1UNGmyXO:dir(ltr){font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;font-style:normal;--ui-lib-typography-font-size:14px;font-size:var(--ui-lib-typography-font-size);font-weight:400;--ui-lib-typography-line-height:18px;line-height:var(--ui-lib-typography-line-height)}.small-3N5nvfWy .content-1UNGmyXO:dir(ltr){font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;font-style:normal;--ui-lib-typography-font-size:16px;font-size:var(--ui-lib-typography-font-size);font-weight:400;--ui-lib-typography-line-height:24px;line-height:var(--ui-lib-typography-line-height)}.large-2-TJnftc .content-1UNGmyXO:dir(ltr),.medium-3K3bD2no .content-1UNGmyXO:dir(ltr){font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;font-style:normal;--ui-lib-typography-font-size:16px;font-size:var(--ui-lib-typography-font-size);font-weight:500;--ui-lib-typography-line-height:24px;line-height:var(--ui-lib-typography-line-height)}.xlarge-3XdWhtv1 .content-1UNGmyXO:dir(ltr){font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;font-style:normal;--ui-lib-typography-font-size:18px;font-size:var(--ui-lib-typography-font-size);font-weight:600;--ui-lib-typography-line-height:24px;line-height:var(--ui-lib-typography-line-height)}.animated-FJhsKjPT:dir(ltr){transition-duration:.2s;transition-property:border-color,background-color,color;transition-timing-function:ease-in-out}.animated-FJhsKjPT:dir(ltr):after{display:block}.animated-FJhsKjPT:dir(ltr):after{opacity:0;transition:opacity .2s ease-in-out,visibility 0s ease-in-out .2s;visibility:hidden}.animated-FJhsKjPT:focus:dir(ltr):after{opacity:1;transition:opacity .2s ease-in-out;visibility:visible}.animated-FJhsKjPT:focus-visible:dir(ltr):after{opacity:1;transition:opacity .2s ease-in-out;visibility:visible}.animated-FJhsKjPT:focus:not(:focus-visible):dir(ltr):after{opacity:0;transition:opacity .2s ease-in-out,visibility 0s ease-in-out .2s;visibility:hidden}.stretch-1Wufk-aY:dir(ltr){width:100%}.button-qM2OSl9-.grouped-1mJ_9XNG.adjustPosition-1Imf4RAu:not(.firstRow-2mfRuQED):dir(ltr){margin-top:-1px}.button-qM2OSl9-.grouped-1mJ_9XNG.adjustPosition-1Imf4RAu:not(.firstCol-AkuZmoX5):dir(ltr){margin-left:-1px;max-width:calc(100% + 1px);width:calc(100% + 1px)}.button-qM2OSl9-.grouped-1mJ_9XNG.adjustPosition-1Imf4RAu:active:not([aria-disabled=true]):dir(ltr){transform:none}.button-qM2OSl9-.grouped-1mJ_9XNG:focus:dir(ltr){z-index:1}.button-qM2OSl9-.grouped-1mJ_9XNG:focus-visible:dir(ltr){z-index:1}.button-qM2OSl9-.grouped-1mJ_9XNG:focus:not(:focus-visible):dir(ltr){z-index:auto}.button-qM2OSl9-.grouped-1mJ_9XNG.no-corner-top-left-1dhEuLwK:dir(ltr),.button-qM2OSl9-.grouped-1mJ_9XNG.no-corner-top-left-1dhEuLwK:dir(ltr):after{border-top-left-radius:0}.button-qM2OSl9-.grouped-1mJ_9XNG.no-corner-top-right-2B-9Lz7Y:dir(ltr),.button-qM2OSl9-.grouped-1mJ_9XNG.no-corner-top-right-2B-9Lz7Y:dir(ltr):after{border-top-right-radius:0}.button-qM2OSl9-.grouped-1mJ_9XNG.no-corner-bottom-right-2YOfeKyh:dir(ltr),.button-qM2OSl9-.grouped-1mJ_9XNG.no-corner-bottom-right-2YOfeKyh:dir(ltr):after{border-bottom-right-radius:0}.button-qM2OSl9-.grouped-1mJ_9XNG.no-corner-bottom-left-3MsE9Q0B:dir(ltr),.button-qM2OSl9-.grouped-1mJ_9XNG.no-corner-bottom-left-3MsE9Q0B:dir(ltr):after{border-bottom-left-radius:0}.textWrap-1M754_dy:dir(ltr){display:flex;flex-direction:column;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.multilineContent-YXmoP0Av:dir(ltr){height:min-content}.multilineContent-YXmoP0Av.medium-3K3bD2no:dir(ltr){height:auto;max-height:56px;padding:2px 15px}.multilineContent-YXmoP0Av.medium-3K3bD2no .secondaryText-LOZPCPXL:dir(ltr){display:-webkit-box;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical;line-height:16px;max-height:32px;white-space:normal}.multilineContent-YXmoP0Av.large-2-TJnftc:dir(ltr){height:auto;max-height:64px;padding:5px 23px}.multilineContent-YXmoP0Av.large-2-TJnftc .secondaryText-LOZPCPXL:dir(ltr){display:-webkit-box;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical;line-height:18px;max-height:36px;white-space:normal}.multilineContent-YXmoP0Av.xlarge-3XdWhtv1:dir(ltr){height:auto;max-height:72px;padding:6px 23px}.multilineContent-YXmoP0Av.xlarge-3XdWhtv1 .secondaryText-LOZPCPXL:dir(ltr){display:-webkit-box;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical;line-height:18px;max-height:36px;white-space:normal}.multilineContent-YXmoP0Av .primaryText-3OwPhnQN:dir(ltr){overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.multilineContent-YXmoP0Av.medium-3K3bD2no .primaryText-3OwPhnQN:dir(ltr){font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;font-style:normal;--ui-lib-typography-font-size:14px;font-size:var(--ui-lib-typography-font-size);font-weight:600;--ui-lib-typography-line-height:18px;line-height:var(--ui-lib-typography-line-height)}.multilineContent-YXmoP0Av.medium-3K3bD2no .secondaryText-LOZPCPXL:dir(ltr){font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;font-style:normal;--ui-lib-typography-font-size:12px;font-size:var(--ui-lib-typography-font-size);font-weight:400;--ui-lib-typography-line-height:16px;line-height:var(--ui-lib-typography-line-height)}.multilineContent-YXmoP0Av.large-2-TJnftc .primaryText-3OwPhnQN:dir(ltr){font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;font-style:normal;--ui-lib-typography-font-size:14px;font-size:var(--ui-lib-typography-font-size);font-weight:600;--ui-lib-typography-line-height:18px;line-height:var(--ui-lib-typography-line-height)}.multilineContent-YXmoP0Av.large-2-TJnftc .secondaryText-LOZPCPXL:dir(ltr){font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;font-style:normal;--ui-lib-typography-font-size:13px;font-size:var(--ui-lib-typography-font-size);font-weight:400;--ui-lib-typography-line-height:18px;line-height:var(--ui-lib-typography-line-height)}.multilineContent-YXmoP0Av.xlarge-3XdWhtv1 .primaryText-3OwPhnQN:dir(ltr){font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;font-style:normal;--ui-lib-typography-font-size:16px;font-size:var(--ui-lib-typography-font-size);font-weight:600;--ui-lib-typography-line-height:24px;line-height:var(--ui-lib-typography-line-height)}.multilineContent-YXmoP0Av.xlarge-3XdWhtv1 .secondaryText-LOZPCPXL:dir(ltr){font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;font-style:normal;--ui-lib-typography-font-size:13px;font-size:var(--ui-lib-typography-font-size);font-weight:400;--ui-lib-typography-line-height:18px;line-height:var(--ui-lib-typography-line-height)}.button-qM2OSl9-:dir(rtl){align-items:center;background-color:var(--ui-lib-button-color-bg,var(--ui-lib-button-default-color-bg));border-color:var(--ui-lib-button-color-border,var(--ui-lib-button-default-color-border));border-style:solid;border-width:1px;box-sizing:border-box;color:var(--ui-lib-button-color-content,var(--ui-lib-button-default-color-content));display:inline-flex;justify-content:center;max-width:100%;padding-bottom:0;padding-left:var(--ui-lib-button-padding-right,var(--ui-lib-button-default-padding-right));padding-right:var(--ui-lib-button-padding-left,var(--ui-lib-button-default-padding-left));padding-top:0}.button-qM2OSl9-:dir(rtl){outline:none;overflow:visible;position:relative}.button-qM2OSl9-:focus:dir(rtl){outline:none}.button-qM2OSl9-:focus-visible:dir(rtl){outline:none}.button-qM2OSl9-:dir(rtl):after{border-style:solid;border-width:2px;box-sizing:border-box;content:"";display:none;height:calc(100% + 10px);pointer-events:none;position:absolute;right:-5px;top:-5px;width:calc(100% + 10px);z-index:1}.button-qM2OSl9-:focus:dir(rtl):after{display:block}.button-qM2OSl9-:focus-visible:dir(rtl):after{display:block}.button-qM2OSl9-:focus:not(:focus-visible):dir(rtl):after{display:none}.button-qM2OSl9-:dir(rtl):after{border-color:#2962ff}html.theme-dark .button-qM2OSl9-:dir(rtl):after{border-color:#2962ff}.content-1UNGmyXO:dir(rtl){overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.iconOnly-LdllQmY_ .content-1UNGmyXO:dir(rtl){border:0;height:1px;margin:-1px;padding:0;position:absolute;width:1px;clip:rect(0 0 0 0);overflow:hidden}.link-2jLVEuCD:dir(rtl){cursor:pointer;-webkit-user-select:none;user-select:none}.brand-KAkAQX16.primary-LCiGJGSZ:dir(rtl){--ui-lib-button-default-color-bg:#2962ff;--ui-lib-button-default-color-border:#2962ff;--ui-lib-button-default-color-content:#fff}html.theme-dark .brand-KAkAQX16.primary-LCiGJGSZ:dir(rtl){--ui-lib-button-default-color-content:#fff}html.theme-dark .brand-KAkAQX16.primary-LCiGJGSZ:dir(rtl){--ui-lib-button-default-color-border:#2962ff}html.theme-dark .brand-KAkAQX16.primary-LCiGJGSZ:dir(rtl){--ui-lib-button-default-color-bg:#2962ff}@media not (pointer:coarse){@media (any-hover:hover){.brand-KAkAQX16.primary-LCiGJGSZ:hover:dir(rtl){--ui-lib-button-default-color-bg:#1e53e5;--ui-lib-button-default-color-border:#1e53e5;--ui-lib-button-default-color-content:#fff}}@media (any-hover:hover){html.theme-dark .brand-KAkAQX16.primary-LCiGJGSZ:hover:dir(rtl){--ui-lib-button-default-color-content:#fff}}@media (any-hover:hover){html.theme-dark .brand-KAkAQX16.primary-LCiGJGSZ:hover:dir(rtl){--ui-lib-button-default-color-border:#1e53e5}}@media (any-hover:hover){html.theme-dark .brand-KAkAQX16.primary-LCiGJGSZ:hover:dir(rtl){--ui-lib-button-default-color-bg:#1e53e5}}}.brand-KAkAQX16.primary-LCiGJGSZ:active:dir(rtl){--ui-lib-button-default-color-bg:#1848cc;--ui-lib-button-default-color-border:#1848cc;--ui-lib-button-default-color-content:#fff}html.theme-dark .brand-KAkAQX16.primary-LCiGJGSZ:active:dir(rtl){--ui-lib-button-default-color-content:#fff}html.theme-dark .brand-KAkAQX16.primary-LCiGJGSZ:active:dir(rtl){--ui-lib-button-default-color-border:#1848cc}html.theme-dark .brand-KAkAQX16.primary-LCiGJGSZ:active:dir(rtl){--ui-lib-button-default-color-bg:#1848cc}.brand-KAkAQX16.secondary--jp1G1oF:dir(rtl){--ui-lib-button-default-color-bg:#0000;--ui-lib-button-default-color-border:#2962ff;--ui-lib-button-default-color-content:#2962ff}html.theme-dark .brand-KAkAQX16.secondary--jp1G1oF:dir(rtl){--ui-lib-button-default-color-content:#2962ff}html.theme-dark .brand-KAkAQX16.secondary--jp1G1oF:dir(rtl){--ui-lib-button-default-color-border:#2962ff}html.theme-dark .brand-KAkAQX16.secondary--jp1G1oF:dir(rtl){--ui-lib-button-default-color-bg:#0000}@media not (pointer:coarse){@media (any-hover:hover){.brand-KAkAQX16.secondary--jp1G1oF:hover:dir(rtl){--ui-lib-button-default-color-bg:#1e53e5;--ui-lib-button-default-color-border:#1e53e5;--ui-lib-button-default-color-content:#fff}}@media (any-hover:hover){html.theme-dark .brand-KAkAQX16.secondary--jp1G1oF:hover:dir(rtl){--ui-lib-button-default-color-content:#fff}}@media (any-hover:hover){html.theme-dark .brand-KAkAQX16.secondary--jp1G1oF:hover:dir(rtl){--ui-lib-button-default-color-border:#1e53e5}}@media (any-hover:hover){html.theme-dark .brand-KAkAQX16.secondary--jp1G1oF:hover:dir(rtl){--ui-lib-button-default-color-bg:#1e53e5}}}.brand-KAkAQX16.secondary--jp1G1oF:active:dir(rtl){--ui-lib-button-default-color-bg:#1848cc;--ui-lib-button-default-color-border:#1848cc;--ui-lib-button-default-color-content:#fff}html.theme-dark .brand-KAkAQX16.secondary--jp1G1oF:active:dir(rtl){--ui-lib-button-default-color-content:#fff}html.theme-dark .brand-KAkAQX16.secondary--jp1G1oF:active:dir(rtl){--ui-lib-button-default-color-border:#1848cc}html.theme-dark .brand-KAkAQX16.secondary--jp1G1oF:active:dir(rtl){--ui-lib-button-default-color-bg:#1848cc}.gray-2_1Iqa8n.primary-LCiGJGSZ:dir(rtl){--ui-lib-button-default-color-bg:#f2f2f2;--ui-lib-button-default-color-border:#f2f2f2;--ui-lib-button-default-color-content:#0f0f0f}html.theme-dark .gray-2_1Iqa8n.primary-LCiGJGSZ:dir(rtl){--ui-lib-button-default-color-content:#fff}html.theme-dark .gray-2_1Iqa8n.primary-LCiGJGSZ:dir(rtl){--ui-lib-button-default-color-border:#2e2e2e}html.theme-dark .gray-2_1Iqa8n.primary-LCiGJGSZ:dir(rtl){--ui-lib-button-default-color-bg:#2e2e2e}@media not (pointer:coarse){@media (any-hover:hover){.gray-2_1Iqa8n.primary-LCiGJGSZ:hover:dir(rtl){--ui-lib-button-default-color-bg:#ebebeb;--ui-lib-button-default-color-border:#ebebeb;--ui-lib-button-default-color-content:#0f0f0f}}@media (any-hover:hover){html.theme-dark .gray-2_1Iqa8n.primary-LCiGJGSZ:hover:dir(rtl){--ui-lib-button-default-color-content:#fff}}@media (any-hover:hover){html.theme-dark .gray-2_1Iqa8n.primary-LCiGJGSZ:hover:dir(rtl){--ui-lib-button-default-color-border:#3d3d3d}}@media (any-hover:hover){html.theme-dark .gray-2_1Iqa8n.primary-LCiGJGSZ:hover:dir(rtl){--ui-lib-button-default-color-bg:#3d3d3d}}}.gray-2_1Iqa8n.primary-LCiGJGSZ:active:dir(rtl){--ui-lib-button-default-color-bg:#dbdbdb;--ui-lib-button-default-color-border:#dbdbdb;--ui-lib-button-default-color-content:#0f0f0f}html.theme-dark .gray-2_1Iqa8n.primary-LCiGJGSZ:active:dir(rtl){--ui-lib-button-default-color-content:#fff}html.theme-dark .gray-2_1Iqa8n.primary-LCiGJGSZ:active:dir(rtl){--ui-lib-button-default-color-border:#4a4a4a}html.theme-dark .gray-2_1Iqa8n.primary-LCiGJGSZ:active:dir(rtl){--ui-lib-button-default-color-bg:#4a4a4a}.gray-2_1Iqa8n.secondary--jp1G1oF:dir(rtl){--ui-lib-button-default-color-bg:#0000;--ui-lib-button-default-color-border:#ebebeb;--ui-lib-button-default-color-content:#0f0f0f}html.theme-dark .gray-2_1Iqa8n.secondary--jp1G1oF:dir(rtl){--ui-lib-button-default-color-content:#dbdbdb}html.theme-dark .gray-2_1Iqa8n.secondary--jp1G1oF:dir(rtl){--ui-lib-button-default-color-border:#4a4a4a}html.theme-dark .gray-2_1Iqa8n.secondary--jp1G1oF:dir(rtl){--ui-lib-button-default-color-bg:#0000}@media not (pointer:coarse){@media (any-hover:hover){.gray-2_1Iqa8n.secondary--jp1G1oF:hover:dir(rtl){--ui-lib-button-default-color-bg:#f2f2f2;--ui-lib-button-default-color-border:#f2f2f2;--ui-lib-button-default-color-content:#0f0f0f}}@media (any-hover:hover){html.theme-dark .gray-2_1Iqa8n.secondary--jp1G1oF:hover:dir(rtl){--ui-lib-button-default-color-content:#fff}}@media (any-hover:hover){html.theme-dark .gray-2_1Iqa8n.secondary--jp1G1oF:hover:dir(rtl){--ui-lib-button-default-color-border:#2e2e2e}}@media (any-hover:hover){html.theme-dark .gray-2_1Iqa8n.secondary--jp1G1oF:hover:dir(rtl){--ui-lib-button-default-color-bg:#2e2e2e}}}.gray-2_1Iqa8n.secondary--jp1G1oF:active:dir(rtl){--ui-lib-button-default-color-bg:#ebebeb;--ui-lib-button-default-color-border:#ebebeb;--ui-lib-button-default-color-content:#0f0f0f}html.theme-dark .gray-2_1Iqa8n.secondary--jp1G1oF:active:dir(rtl){--ui-lib-button-default-color-content:#fff}html.theme-dark .gray-2_1Iqa8n.secondary--jp1G1oF:active:dir(rtl){--ui-lib-button-default-color-border:#3d3d3d}html.theme-dark .gray-2_1Iqa8n.secondary--jp1G1oF:active:dir(rtl){--ui-lib-button-default-color-bg:#3d3d3d}.green-3PPYMCey.primary-LCiGJGSZ:dir(rtl){--ui-lib-button-default-color-bg:#089981;--ui-lib-button-default-color-border:#089981;--ui-lib-button-default-color-content:#fff}html.theme-dark .green-3PPYMCey.primary-LCiGJGSZ:dir(rtl){--ui-lib-button-default-color-content:#fff}html.theme-dark .green-3PPYMCey.primary-LCiGJGSZ:dir(rtl){--ui-lib-button-default-color-border:#089981}html.theme-dark .green-3PPYMCey.primary-LCiGJGSZ:dir(rtl){--ui-lib-button-default-color-bg:#089981}@media not (pointer:coarse){@media (any-hover:hover){.green-3PPYMCey.primary-LCiGJGSZ:hover:dir(rtl){--ui-lib-button-default-color-bg:#06806b;--ui-lib-button-default-color-border:#06806b;--ui-lib-button-default-color-content:#fff}}@media (any-hover:hover){html.theme-dark .green-3PPYMCey.primary-LCiGJGSZ:hover:dir(rtl){--ui-lib-button-default-color-content:#fff}}@media (any-hover:hover){html.theme-dark .green-3PPYMCey.primary-LCiGJGSZ:hover:dir(rtl){--ui-lib-button-default-color-border:#06806b}}@media (any-hover:hover){html.theme-dark .green-3PPYMCey.primary-LCiGJGSZ:hover:dir(rtl){--ui-lib-button-default-color-bg:#06806b}}}.green-3PPYMCey.primary-LCiGJGSZ:active:dir(rtl){--ui-lib-button-default-color-bg:#056656;--ui-lib-button-default-color-border:#056656;--ui-lib-button-default-color-content:#fff}html.theme-dark .green-3PPYMCey.primary-LCiGJGSZ:active:dir(rtl){--ui-lib-button-default-color-content:#fff}html.theme-dark .green-3PPYMCey.primary-LCiGJGSZ:active:dir(rtl){--ui-lib-button-default-color-border:#056656}html.theme-dark .green-3PPYMCey.primary-LCiGJGSZ:active:dir(rtl){--ui-lib-button-default-color-bg:#056656}.green-3PPYMCey.secondary--jp1G1oF:dir(rtl){--ui-lib-button-default-color-bg:#0000;--ui-lib-button-default-color-border:#089981;--ui-lib-button-default-color-content:#089981}html.theme-dark .green-3PPYMCey.secondary--jp1G1oF:dir(rtl){--ui-lib-button-default-color-content:#089981}html.theme-dark .green-3PPYMCey.secondary--jp1G1oF:dir(rtl){--ui-lib-button-default-color-border:#089981}html.theme-dark .green-3PPYMCey.secondary--jp1G1oF:dir(rtl){--ui-lib-button-default-color-bg:#0000}@media not (pointer:coarse){@media (any-hover:hover){.green-3PPYMCey.secondary--jp1G1oF:hover:dir(rtl){--ui-lib-button-default-color-bg:#06806b;--ui-lib-button-default-color-border:#06806b;--ui-lib-button-default-color-content:#fff}}@media (any-hover:hover){html.theme-dark .green-3PPYMCey.secondary--jp1G1oF:hover:dir(rtl){--ui-lib-button-default-color-content:#fff}}@media (any-hover:hover){html.theme-dark .green-3PPYMCey.secondary--jp1G1oF:hover:dir(rtl){--ui-lib-button-default-color-border:#06806b}}@media (any-hover:hover){html.theme-dark .green-3PPYMCey.secondary--jp1G1oF:hover:dir(rtl){--ui-lib-button-default-color-bg:#06806b}}}.green-3PPYMCey.secondary--jp1G1oF:active:dir(rtl){--ui-lib-button-default-color-bg:#056656;--ui-lib-button-default-color-border:#056656;--ui-lib-button-default-color-content:#fff}html.theme-dark .green-3PPYMCey.secondary--jp1G1oF:active:dir(rtl){--ui-lib-button-default-color-content:#fff}html.theme-dark .green-3PPYMCey.secondary--jp1G1oF:active:dir(rtl){--ui-lib-button-default-color-border:#056656}html.theme-dark .green-3PPYMCey.secondary--jp1G1oF:active:dir(rtl){--ui-lib-button-default-color-bg:#056656}.red-T8Q0A2dV.primary-LCiGJGSZ:dir(rtl){--ui-lib-button-default-color-bg:#f23645;--ui-lib-button-default-color-border:#f23645;--ui-lib-button-default-color-content:#fff}html.theme-dark .red-T8Q0A2dV.primary-LCiGJGSZ:dir(rtl){--ui-lib-button-default-color-content:#fff}html.theme-dark .red-T8Q0A2dV.primary-LCiGJGSZ:dir(rtl){--ui-lib-button-default-color-border:#f23645}html.theme-dark .red-T8Q0A2dV.primary-LCiGJGSZ:dir(rtl){--ui-lib-button-default-color-bg:#f23645}@media not (pointer:coarse){@media (any-hover:hover){.red-T8Q0A2dV.primary-LCiGJGSZ:hover:dir(rtl){--ui-lib-button-default-color-bg:#cc2f3c;--ui-lib-button-default-color-border:#cc2f3c;--ui-lib-button-default-color-content:#fff}}@media (any-hover:hover){html.theme-dark .red-T8Q0A2dV.primary-LCiGJGSZ:hover:dir(rtl){--ui-lib-button-default-color-content:#fff}}@media (any-hover:hover){html.theme-dark .red-T8Q0A2dV.primary-LCiGJGSZ:hover:dir(rtl){--ui-lib-button-default-color-border:#cc2f3c}}@media (any-hover:hover){html.theme-dark .red-T8Q0A2dV.primary-LCiGJGSZ:hover:dir(rtl){--ui-lib-button-default-color-bg:#cc2f3c}}}.red-T8Q0A2dV.primary-LCiGJGSZ:active:dir(rtl){--ui-lib-button-default-color-bg:#b22833;--ui-lib-button-default-color-border:#b22833;--ui-lib-button-default-color-content:#fff}html.theme-dark .red-T8Q0A2dV.primary-LCiGJGSZ:active:dir(rtl){--ui-lib-button-default-color-content:#fff}html.theme-dark .red-T8Q0A2dV.primary-LCiGJGSZ:active:dir(rtl){--ui-lib-button-default-color-border:#b22833}html.theme-dark .red-T8Q0A2dV.primary-LCiGJGSZ:active:dir(rtl){--ui-lib-button-default-color-bg:#b22833}.red-T8Q0A2dV.secondary--jp1G1oF:dir(rtl){--ui-lib-button-default-color-bg:#0000;--ui-lib-button-default-color-border:#f23645;--ui-lib-button-default-color-content:#f23645}html.theme-dark .red-T8Q0A2dV.secondary--jp1G1oF:dir(rtl){--ui-lib-button-default-color-content:#f23645}html.theme-dark .red-T8Q0A2dV.secondary--jp1G1oF:dir(rtl){--ui-lib-button-default-color-border:#f23645}html.theme-dark .red-T8Q0A2dV.secondary--jp1G1oF:dir(rtl){--ui-lib-button-default-color-bg:#0000}@media not (pointer:coarse){@media (any-hover:hover){.red-T8Q0A2dV.secondary--jp1G1oF:hover:dir(rtl){--ui-lib-button-default-color-bg:#cc2f3c;--ui-lib-button-default-color-border:#cc2f3c;--ui-lib-button-default-color-content:#fff}}@media (any-hover:hover){html.theme-dark .red-T8Q0A2dV.secondary--jp1G1oF:hover:dir(rtl){--ui-lib-button-default-color-content:#fff}}@media (any-hover:hover){html.theme-dark .red-T8Q0A2dV.secondary--jp1G1oF:hover:dir(rtl){--ui-lib-button-default-color-border:#cc2f3c}}@media (any-hover:hover){html.theme-dark .red-T8Q0A2dV.secondary--jp1G1oF:hover:dir(rtl){--ui-lib-button-default-color-bg:#cc2f3c}}}.red-T8Q0A2dV.secondary--jp1G1oF:active:dir(rtl){--ui-lib-button-default-color-bg:#b22833;--ui-lib-button-default-color-border:#b22833;--ui-lib-button-default-color-content:#fff}html.theme-dark .red-T8Q0A2dV.secondary--jp1G1oF:active:dir(rtl){--ui-lib-button-default-color-content:#fff}html.theme-dark .red-T8Q0A2dV.secondary--jp1G1oF:active:dir(rtl){--ui-lib-button-default-color-border:#b22833}html.theme-dark .red-T8Q0A2dV.secondary--jp1G1oF:active:dir(rtl){--ui-lib-button-default-color-bg:#b22833}.black-3eIOrpGN.primary-LCiGJGSZ:dir(rtl){--ui-lib-button-default-color-bg:#0f0f0f;--ui-lib-button-default-color-border:#0f0f0f;--ui-lib-button-default-color-content:#fff}html.theme-dark .black-3eIOrpGN.primary-LCiGJGSZ:dir(rtl){--ui-lib-button-default-color-content:#0f0f0f}html.theme-dark .black-3eIOrpGN.primary-LCiGJGSZ:dir(rtl){--ui-lib-button-default-color-border:#fff}html.theme-dark .black-3eIOrpGN.primary-LCiGJGSZ:dir(rtl){--ui-lib-button-default-color-bg:#fff}@media not (pointer:coarse){@media (any-hover:hover){.black-3eIOrpGN.primary-LCiGJGSZ:hover:dir(rtl){--ui-lib-button-default-color-bg:#2e2e2e;--ui-lib-button-default-color-border:#2e2e2e;--ui-lib-button-default-color-content:#fff}}@media (any-hover:hover){html.theme-dark .black-3eIOrpGN.primary-LCiGJGSZ:hover:dir(rtl){--ui-lib-button-default-color-content:#0f0f0f}}@media (any-hover:hover){html.theme-dark .black-3eIOrpGN.primary-LCiGJGSZ:hover:dir(rtl){--ui-lib-button-default-color-border:#f2f2f2}}@media (any-hover:hover){html.theme-dark .black-3eIOrpGN.primary-LCiGJGSZ:hover:dir(rtl){--ui-lib-button-default-color-bg:#f2f2f2}}}.black-3eIOrpGN.primary-LCiGJGSZ:active:dir(rtl){--ui-lib-button-default-color-bg:#4a4a4a;--ui-lib-button-default-color-border:#4a4a4a;--ui-lib-button-default-color-content:#fff}html.theme-dark .black-3eIOrpGN.primary-LCiGJGSZ:active:dir(rtl){--ui-lib-button-default-color-content:#0f0f0f}html.theme-dark .black-3eIOrpGN.primary-LCiGJGSZ:active:dir(rtl){--ui-lib-button-default-color-border:#dbdbdb}html.theme-dark .black-3eIOrpGN.primary-LCiGJGSZ:active:dir(rtl){--ui-lib-button-default-color-bg:#dbdbdb}.black-3eIOrpGN.secondary--jp1G1oF:dir(rtl){--ui-lib-button-default-color-bg:#0000;--ui-lib-button-default-color-border:#0f0f0f;--ui-lib-button-default-color-content:#0f0f0f}html.theme-dark .black-3eIOrpGN.secondary--jp1G1oF:dir(rtl){--ui-lib-button-default-color-content:#fff}html.theme-dark .black-3eIOrpGN.secondary--jp1G1oF:dir(rtl){--ui-lib-button-default-color-border:#fff}html.theme-dark .black-3eIOrpGN.secondary--jp1G1oF:dir(rtl){--ui-lib-button-default-color-bg:#0000}@media not (pointer:coarse){@media (any-hover:hover){.black-3eIOrpGN.secondary--jp1G1oF:hover:dir(rtl){--ui-lib-button-default-color-bg:#2e2e2e;--ui-lib-button-default-color-border:#2e2e2e;--ui-lib-button-default-color-content:#fff}}@media (any-hover:hover){html.theme-dark .black-3eIOrpGN.secondary--jp1G1oF:hover:dir(rtl){--ui-lib-button-default-color-content:#0f0f0f}}@media (any-hover:hover){html.theme-dark .black-3eIOrpGN.secondary--jp1G1oF:hover:dir(rtl){--ui-lib-button-default-color-border:#f2f2f2}}@media (any-hover:hover){html.theme-dark .black-3eIOrpGN.secondary--jp1G1oF:hover:dir(rtl){--ui-lib-button-default-color-bg:#f2f2f2}}}.black-3eIOrpGN.secondary--jp1G1oF:active:dir(rtl){--ui-lib-button-default-color-bg:#4a4a4a;--ui-lib-button-default-color-border:#4a4a4a;--ui-lib-button-default-color-content:#fff}html.theme-dark .black-3eIOrpGN.secondary--jp1G1oF:active:dir(rtl){--ui-lib-button-default-color-content:#0f0f0f}html.theme-dark .black-3eIOrpGN.secondary--jp1G1oF:active:dir(rtl){--ui-lib-button-default-color-border:#dbdbdb}html.theme-dark .black-3eIOrpGN.secondary--jp1G1oF:active:dir(rtl){--ui-lib-button-default-color-bg:#dbdbdb}.primary-LCiGJGSZ[aria-disabled=true]:dir(rtl){transform:none}.primary-LCiGJGSZ[aria-disabled=true]:dir(rtl),.primary-LCiGJGSZ[aria-disabled=true]:link:dir(rtl),.primary-LCiGJGSZ[aria-disabled=true]:visited:dir(rtl){background-color:#ebebeb;border-color:#ebebeb;color:#b8b8b8}html.theme-dark .primary-LCiGJGSZ[aria-disabled=true]:dir(rtl),html.theme-dark .primary-LCiGJGSZ[aria-disabled=true]:link:dir(rtl),html.theme-dark .primary-LCiGJGSZ[aria-disabled=true]:visited:dir(rtl){color:#636363}html.theme-dark .primary-LCiGJGSZ[aria-disabled=true]:dir(rtl),html.theme-dark .primary-LCiGJGSZ[aria-disabled=true]:link:dir(rtl),html.theme-dark .primary-LCiGJGSZ[aria-disabled=true]:visited:dir(rtl){border-color:#3d3d3d}html.theme-dark .primary-LCiGJGSZ[aria-disabled=true]:dir(rtl),html.theme-dark .primary-LCiGJGSZ[aria-disabled=true]:link:dir(rtl),html.theme-dark .primary-LCiGJGSZ[aria-disabled=true]:visited:dir(rtl){background-color:#3d3d3d}.secondary--jp1G1oF[aria-disabled=true]:dir(rtl){transform:none}.secondary--jp1G1oF[aria-disabled=true]:dir(rtl),.secondary--jp1G1oF[aria-disabled=true]:link:dir(rtl),.secondary--jp1G1oF[aria-disabled=true]:visited:dir(rtl){background-color:initial;border-color:#ebebeb;color:#b8b8b8}html.theme-dark .secondary--jp1G1oF[aria-disabled=true]:dir(rtl),html.theme-dark .secondary--jp1G1oF[aria-disabled=true]:link:dir(rtl),html.theme-dark .secondary--jp1G1oF[aria-disabled=true]:visited:dir(rtl){color:#636363}html.theme-dark .secondary--jp1G1oF[aria-disabled=true]:dir(rtl),html.theme-dark .secondary--jp1G1oF[aria-disabled=true]:link:dir(rtl),html.theme-dark .secondary--jp1G1oF[aria-disabled=true]:visited:dir(rtl){border-color:#3d3d3d}html.theme-dark .secondary--jp1G1oF[aria-disabled=true]:dir(rtl),html.theme-dark .secondary--jp1G1oF[aria-disabled=true]:link:dir(rtl),html.theme-dark .secondary--jp1G1oF[aria-disabled=true]:visited:dir(rtl){background-color:initial}.black-friday-imtBaxE1.primary-LCiGJGSZ:dir(rtl){background:linear-gradient(-90deg,#ff2e3e,#ff2e3e,#ff9800,#ff2e3e,#ff2e3e);background-size:200% 100%;border:none;transition:.4s;--ui-lib-button-default-color-content:#fff}html.theme-dark .black-friday-imtBaxE1.primary-LCiGJGSZ:dir(rtl){--ui-lib-button-default-color-content:#fff}@media not (pointer:coarse){@media (any-hover:hover){.black-friday-imtBaxE1.primary-LCiGJGSZ:hover:dir(rtl){background-position:200%;--ui-lib-button-default-color-content:#fff}}@media (any-hover:hover){html.theme-dark .black-friday-imtBaxE1.primary-LCiGJGSZ:hover:dir(rtl){--ui-lib-button-default-color-content:#fff}}}.black-friday-imtBaxE1.primary-LCiGJGSZ:active:dir(rtl){background-position:120%;background-size:300% 100%;--ui-lib-button-default-color-content:#fff}html.theme-dark .black-friday-imtBaxE1.primary-LCiGJGSZ:active:dir(rtl){--ui-lib-button-default-color-content:#fff}.black-friday-imtBaxE1.primary-LCiGJGSZ[aria-disabled=true]:dir(rtl){background:none}.black-friday-imtBaxE1.secondary--jp1G1oF:dir(rtl){--ui-lib-button-default-color-bg:#0000;--ui-lib-button-default-color-border:#f23645;--ui-lib-button-default-color-content:#f23645}html.theme-dark .black-friday-imtBaxE1.secondary--jp1G1oF:dir(rtl){--ui-lib-button-default-color-content:#f23645}html.theme-dark .black-friday-imtBaxE1.secondary--jp1G1oF:dir(rtl){--ui-lib-button-default-color-border:#f23645}html.theme-dark .black-friday-imtBaxE1.secondary--jp1G1oF:dir(rtl){--ui-lib-button-default-color-bg:#0000}@media not (pointer:coarse){@media (any-hover:hover){.black-friday-imtBaxE1.secondary--jp1G1oF:hover:dir(rtl){--ui-lib-button-default-color-bg:#cc2f3c;--ui-lib-button-default-color-border:#cc2f3c;--ui-lib-button-default-color-content:#fff}}@media (any-hover:hover){html.theme-dark .black-friday-imtBaxE1.secondary--jp1G1oF:hover:dir(rtl){--ui-lib-button-default-color-content:#fff}}@media (any-hover:hover){html.theme-dark .black-friday-imtBaxE1.secondary--jp1G1oF:hover:dir(rtl){--ui-lib-button-default-color-border:#cc2f3c}}@media (any-hover:hover){html.theme-dark .black-friday-imtBaxE1.secondary--jp1G1oF:hover:dir(rtl){--ui-lib-button-default-color-bg:#cc2f3c}}}.black-friday-imtBaxE1.secondary--jp1G1oF:active:dir(rtl){--ui-lib-button-default-color-bg:#b22833;--ui-lib-button-default-color-border:#b22833;--ui-lib-button-default-color-content:#fff}html.theme-dark .black-friday-imtBaxE1.secondary--jp1G1oF:active:dir(rtl){--ui-lib-button-default-color-content:#fff}html.theme-dark .black-friday-imtBaxE1.secondary--jp1G1oF:active:dir(rtl){--ui-lib-button-default-color-border:#b22833}html.theme-dark .black-friday-imtBaxE1.secondary--jp1G1oF:active:dir(rtl){--ui-lib-button-default-color-bg:#b22833}.cyber-monday-GrykOCUa.primary-LCiGJGSZ:dir(rtl){background:linear-gradient(-90deg,#03e6fe,#03e6fe,#61ffd0,#03e6fe,#03e6fe);background-size:200% 100%;border:none;transition:.4s;--ui-lib-button-default-color-content:#0f0f0f}html.theme-dark .cyber-monday-GrykOCUa.primary-LCiGJGSZ:dir(rtl){--ui-lib-button-default-color-content:#0f0f0f}@media not (pointer:coarse){@media (any-hover:hover){.cyber-monday-GrykOCUa.primary-LCiGJGSZ:hover:dir(rtl){background-position:200%;--ui-lib-button-default-color-content:#0f0f0f}}@media (any-hover:hover){html.theme-dark .cyber-monday-GrykOCUa.primary-LCiGJGSZ:hover:dir(rtl){--ui-lib-button-default-color-content:#0f0f0f}}}.cyber-monday-GrykOCUa.primary-LCiGJGSZ:active:dir(rtl){background-position:120%;background-size:300% 100%;--ui-lib-button-default-color-content:#0f0f0f}html.theme-dark .cyber-monday-GrykOCUa.primary-LCiGJGSZ:active:dir(rtl){--ui-lib-button-default-color-content:#0f0f0f}.cyber-monday-GrykOCUa.primary-LCiGJGSZ[aria-disabled=true]:dir(rtl){background:none}.cyber-monday-GrykOCUa.secondary--jp1G1oF:dir(rtl){--ui-lib-button-default-color-bg:#0000;--ui-lib-button-default-color-border:#00e5ff;--ui-lib-button-default-color-content:#00e5ff}html.theme-dark .cyber-monday-GrykOCUa.secondary--jp1G1oF:dir(rtl){--ui-lib-button-default-color-content:#00e5ff}html.theme-dark .cyber-monday-GrykOCUa.secondary--jp1G1oF:dir(rtl){--ui-lib-button-default-color-border:#00e5ff}html.theme-dark .cyber-monday-GrykOCUa.secondary--jp1G1oF:dir(rtl){--ui-lib-button-default-color-bg:#0000}@media not (pointer:coarse){@media (any-hover:hover){.cyber-monday-GrykOCUa.secondary--jp1G1oF:hover:dir(rtl){--ui-lib-button-default-color-bg:#00e5ff;--ui-lib-button-default-color-border:#00e5ff;--ui-lib-button-default-color-content:#0f0f0f}}@media (any-hover:hover){html.theme-dark .cyber-monday-GrykOCUa.secondary--jp1G1oF:hover:dir(rtl){--ui-lib-button-default-color-content:#0f0f0f}}@media (any-hover:hover){html.theme-dark .cyber-monday-GrykOCUa.secondary--jp1G1oF:hover:dir(rtl){--ui-lib-button-default-color-border:#00e5ff}}@media (any-hover:hover){html.theme-dark .cyber-monday-GrykOCUa.secondary--jp1G1oF:hover:dir(rtl){--ui-lib-button-default-color-bg:#00e5ff}}}.cyber-monday-GrykOCUa.secondary--jp1G1oF:active:dir(rtl){--ui-lib-button-default-color-bg:#00b8d4;--ui-lib-button-default-color-border:#00b8d4;--ui-lib-button-default-color-content:#0f0f0f}html.theme-dark .cyber-monday-GrykOCUa.secondary--jp1G1oF:active:dir(rtl){--ui-lib-button-default-color-content:#0f0f0f}html.theme-dark .cyber-monday-GrykOCUa.secondary--jp1G1oF:active:dir(rtl){--ui-lib-button-default-color-border:#00b8d4}html.theme-dark .cyber-monday-GrykOCUa.secondary--jp1G1oF:active:dir(rtl){--ui-lib-button-default-color-bg:#00b8d4}.slot-3p0JfExG:dir(rtl){align-items:center;display:flex;justify-content:center}.xsmall-1NscMQXH:dir(rtl){border-radius:6px;height:28px;--ui-lib-button-default-padding-left:7px;--ui-lib-button-default-padding-right:7px}.xsmall-1NscMQXH:dir(rtl):after{border-radius:10px}.xsmall-1NscMQXH.iconOnly-LdllQmY_:dir(rtl){height:28px;width:28px;--ui-lib-button-default-padding-left:0;--ui-lib-button-default-padding-right:0}.xsmall-1NscMQXH:not(.iconOnly-LdllQmY_).withStartSlot-1SmHbPb8:dir(rtl){--ui-lib-button-default-padding-left:7px}.xsmall-1NscMQXH:not(.iconOnly-LdllQmY_).withEndSlot-3chHJlH6:dir(rtl){--ui-lib-button-default-padding-right:7px}.xsmall-1NscMQXH:not(.iconOnly-LdllQmY_) .startSlotWrap-8fC_hnI8:dir(rtl){margin-left:4px}.xsmall-1NscMQXH:not(.iconOnly-LdllQmY_) .endSlotWrap-1PfeXjk4:dir(rtl){margin-right:4px}.small-3N5nvfWy:dir(rtl){border-radius:6px;height:34px;--ui-lib-button-default-padding-left:11px;--ui-lib-button-default-padding-right:11px}.small-3N5nvfWy:dir(rtl):after{border-radius:10px}.small-3N5nvfWy.iconOnly-LdllQmY_:dir(rtl){height:34px;width:34px;--ui-lib-button-default-padding-left:0;--ui-lib-button-default-padding-right:0}.small-3N5nvfWy:not(.iconOnly-LdllQmY_).withStartSlot-1SmHbPb8:dir(rtl){--ui-lib-button-default-padding-left:11px}.small-3N5nvfWy:not(.iconOnly-LdllQmY_).withEndSlot-3chHJlH6:dir(rtl){--ui-lib-button-default-padding-right:11px}.small-3N5nvfWy:not(.iconOnly-LdllQmY_) .startSlotWrap-8fC_hnI8:dir(rtl){margin-left:4px}.small-3N5nvfWy:not(.iconOnly-LdllQmY_) .endSlotWrap-1PfeXjk4:dir(rtl){margin-right:4px}.medium-3K3bD2no:dir(rtl){border-radius:8px;height:40px;--ui-lib-button-default-padding-left:15px;--ui-lib-button-default-padding-right:15px}.medium-3K3bD2no:dir(rtl):after{border-radius:12px}.medium-3K3bD2no.iconOnly-LdllQmY_:dir(rtl){height:40px;width:40px;--ui-lib-button-default-padding-left:0;--ui-lib-button-default-padding-right:0}.medium-3K3bD2no:not(.iconOnly-LdllQmY_).withStartSlot-1SmHbPb8:dir(rtl){--ui-lib-button-default-padding-left:15px}.medium-3K3bD2no:not(.iconOnly-LdllQmY_).withEndSlot-3chHJlH6:dir(rtl){--ui-lib-button-default-padding-right:15px}.medium-3K3bD2no:not(.iconOnly-LdllQmY_) .startSlotWrap-8fC_hnI8:dir(rtl){margin-left:4px}.medium-3K3bD2no:not(.iconOnly-LdllQmY_) .endSlotWrap-1PfeXjk4:dir(rtl){margin-right:4px}.large-2-TJnftc:dir(rtl){border-radius:8px;height:48px;--ui-lib-button-default-padding-left:23px;--ui-lib-button-default-padding-right:23px}.large-2-TJnftc:dir(rtl):after{border-radius:12px}.large-2-TJnftc.iconOnly-LdllQmY_:dir(rtl){height:48px;width:48px;--ui-lib-button-default-padding-left:0;--ui-lib-button-default-padding-right:0}.large-2-TJnftc:not(.iconOnly-LdllQmY_).withStartSlot-1SmHbPb8:dir(rtl){--ui-lib-button-default-padding-left:23px}.large-2-TJnftc:not(.iconOnly-LdllQmY_).withEndSlot-3chHJlH6:dir(rtl){--ui-lib-button-default-padding-right:23px}.large-2-TJnftc:not(.iconOnly-LdllQmY_) .startSlotWrap-8fC_hnI8:dir(rtl){margin-left:8px}.large-2-TJnftc:not(.iconOnly-LdllQmY_) .endSlotWrap-1PfeXjk4:dir(rtl){margin-right:8px}.xlarge-3XdWhtv1:dir(rtl){border-radius:12px;height:56px;--ui-lib-button-default-padding-left:31px;--ui-lib-button-default-padding-right:31px}.xlarge-3XdWhtv1:dir(rtl):after{border-radius:16px}.xlarge-3XdWhtv1.iconOnly-LdllQmY_:dir(rtl){height:56px;width:56px;--ui-lib-button-default-padding-left:0;--ui-lib-button-default-padding-right:0}.xlarge-3XdWhtv1:not(.iconOnly-LdllQmY_).withStartSlot-1SmHbPb8:dir(rtl){--ui-lib-button-default-padding-left:31px}.xlarge-3XdWhtv1:not(.iconOnly-LdllQmY_).withEndSlot-3chHJlH6:dir(rtl){--ui-lib-button-default-padding-right:31px}.xlarge-3XdWhtv1:not(.iconOnly-LdllQmY_) .startSlotWrap-8fC_hnI8:dir(rtl){margin-left:8px}.xlarge-3XdWhtv1:not(.iconOnly-LdllQmY_) .endSlotWrap-1PfeXjk4:dir(rtl){margin-right:8px}.xsmall-1NscMQXH .content-1UNGmyXO:dir(rtl){font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;font-style:normal;--ui-lib-typography-font-size:14px;font-size:var(--ui-lib-typography-font-size);font-weight:400;--ui-lib-typography-line-height:18px;line-height:var(--ui-lib-typography-line-height)}.small-3N5nvfWy .content-1UNGmyXO:dir(rtl){font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;font-style:normal;--ui-lib-typography-font-size:16px;font-size:var(--ui-lib-typography-font-size);font-weight:400;--ui-lib-typography-line-height:24px;line-height:var(--ui-lib-typography-line-height)}.large-2-TJnftc .content-1UNGmyXO:dir(rtl),.medium-3K3bD2no .content-1UNGmyXO:dir(rtl){font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;font-style:normal;--ui-lib-typography-font-size:16px;font-size:var(--ui-lib-typography-font-size);font-weight:500;--ui-lib-typography-line-height:24px;line-height:var(--ui-lib-typography-line-height)}.xlarge-3XdWhtv1 .content-1UNGmyXO:dir(rtl){font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;font-style:normal;--ui-lib-typography-font-size:18px;font-size:var(--ui-lib-typography-font-size);font-weight:600;--ui-lib-typography-line-height:24px;line-height:var(--ui-lib-typography-line-height)}.animated-FJhsKjPT:dir(rtl){transition-duration:.2s;transition-property:border-color,background-color,color;transition-timing-function:ease-in-out}.animated-FJhsKjPT:dir(rtl):after{display:block}.animated-FJhsKjPT:dir(rtl):after{opacity:0;transition:opacity .2s ease-in-out,visibility 0s ease-in-out .2s;visibility:hidden}.animated-FJhsKjPT:focus:dir(rtl):after{opacity:1;transition:opacity .2s ease-in-out;visibility:visible}.animated-FJhsKjPT:focus-visible:dir(rtl):after{opacity:1;transition:opacity .2s ease-in-out;visibility:visible}.animated-FJhsKjPT:focus:not(:focus-visible):dir(rtl):after{opacity:0;transition:opacity .2s ease-in-out,visibility 0s ease-in-out .2s;visibility:hidden}.stretch-1Wufk-aY:dir(rtl){width:100%}.button-qM2OSl9-.grouped-1mJ_9XNG.adjustPosition-1Imf4RAu:not(.firstRow-2mfRuQED):dir(rtl){margin-top:-1px}.button-qM2OSl9-.grouped-1mJ_9XNG.adjustPosition-1Imf4RAu:not(.firstCol-AkuZmoX5):dir(rtl){margin-right:-1px;max-width:calc(100% + 1px);width:calc(100% + 1px)}.button-qM2OSl9-.grouped-1mJ_9XNG.adjustPosition-1Imf4RAu:active:not([aria-disabled=true]):dir(rtl){transform:none}.button-qM2OSl9-.grouped-1mJ_9XNG:focus:dir(rtl){z-index:1}.button-qM2OSl9-.grouped-1mJ_9XNG:focus-visible:dir(rtl){z-index:1}.button-qM2OSl9-.grouped-1mJ_9XNG:focus:not(:focus-visible):dir(rtl){z-index:auto}.button-qM2OSl9-.grouped-1mJ_9XNG.no-corner-top-left-1dhEuLwK:dir(rtl),.button-qM2OSl9-.grouped-1mJ_9XNG.no-corner-top-left-1dhEuLwK:dir(rtl):after{border-top-right-radius:0}.button-qM2OSl9-.grouped-1mJ_9XNG.no-corner-top-right-2B-9Lz7Y:dir(rtl),.button-qM2OSl9-.grouped-1mJ_9XNG.no-corner-top-right-2B-9Lz7Y:dir(rtl):after{border-top-left-radius:0}.button-qM2OSl9-.grouped-1mJ_9XNG.no-corner-bottom-right-2YOfeKyh:dir(rtl),.button-qM2OSl9-.grouped-1mJ_9XNG.no-corner-bottom-right-2YOfeKyh:dir(rtl):after{border-bottom-left-radius:0}.button-qM2OSl9-.grouped-1mJ_9XNG.no-corner-bottom-left-3MsE9Q0B:dir(rtl),.button-qM2OSl9-.grouped-1mJ_9XNG.no-corner-bottom-left-3MsE9Q0B:dir(rtl):after{border-bottom-right-radius:0}.textWrap-1M754_dy:dir(rtl){display:flex;flex-direction:column;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.multilineContent-YXmoP0Av:dir(rtl){height:min-content}.multilineContent-YXmoP0Av.medium-3K3bD2no:dir(rtl){height:auto;max-height:56px;padding:2px 15px}.multilineContent-YXmoP0Av.medium-3K3bD2no .secondaryText-LOZPCPXL:dir(rtl){display:-webkit-box;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical;line-height:16px;max-height:32px;white-space:normal}.multilineContent-YXmoP0Av.large-2-TJnftc:dir(rtl){height:auto;max-height:64px;padding:5px 23px}.multilineContent-YXmoP0Av.large-2-TJnftc .secondaryText-LOZPCPXL:dir(rtl){display:-webkit-box;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical;line-height:18px;max-height:36px;white-space:normal}.multilineContent-YXmoP0Av.xlarge-3XdWhtv1:dir(rtl){height:auto;max-height:72px;padding:6px 23px}.multilineContent-YXmoP0Av.xlarge-3XdWhtv1 .secondaryText-LOZPCPXL:dir(rtl){display:-webkit-box;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical;line-height:18px;max-height:36px;white-space:normal}.multilineContent-YXmoP0Av .primaryText-3OwPhnQN:dir(rtl){overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.multilineContent-YXmoP0Av.medium-3K3bD2no .primaryText-3OwPhnQN:dir(rtl){font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;font-style:normal;--ui-lib-typography-font-size:14px;font-size:var(--ui-lib-typography-font-size);font-weight:600;--ui-lib-typography-line-height:18px;line-height:var(--ui-lib-typography-line-height)}.multilineContent-YXmoP0Av.medium-3K3bD2no .secondaryText-LOZPCPXL:dir(rtl){font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;font-style:normal;--ui-lib-typography-font-size:12px;font-size:var(--ui-lib-typography-font-size);font-weight:400;--ui-lib-typography-line-height:16px;line-height:var(--ui-lib-typography-line-height)}.multilineContent-YXmoP0Av.large-2-TJnftc .primaryText-3OwPhnQN:dir(rtl){font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;font-style:normal;--ui-lib-typography-font-size:14px;font-size:var(--ui-lib-typography-font-size);font-weight:600;--ui-lib-typography-line-height:18px;line-height:var(--ui-lib-typography-line-height)}.multilineContent-YXmoP0Av.large-2-TJnftc .secondaryText-LOZPCPXL:dir(rtl){font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;font-style:normal;--ui-lib-typography-font-size:13px;font-size:var(--ui-lib-typography-font-size);font-weight:400;--ui-lib-typography-line-height:18px;line-height:var(--ui-lib-typography-line-height)}.multilineContent-YXmoP0Av.xlarge-3XdWhtv1 .primaryText-3OwPhnQN:dir(rtl){font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;font-style:normal;--ui-lib-typography-font-size:16px;font-size:var(--ui-lib-typography-font-size);font-weight:600;--ui-lib-typography-line-height:24px;line-height:var(--ui-lib-typography-line-height)}.multilineContent-YXmoP0Av.xlarge-3XdWhtv1 .secondaryText-LOZPCPXL:dir(rtl){font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;font-style:normal;--ui-lib-typography-font-size:13px;font-size:var(--ui-lib-typography-font-size);font-weight:400;--ui-lib-typography-line-height:18px;line-height:var(--ui-lib-typography-line-height)}',
        "",
      ]);
      const n = a;
    },
    94102: (t, r, e) => {
      "use strict";
      e.d(r, { Z: () => k });
      var o = e(27915),
        i = e(92449),
        l = [],
        a = l.forEach,
        n = l.slice,
        d = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
        u = {
          name: "cookie",
          lookup: function (t) {
            var r;
            if (t.lookupCookie && "undefined" != typeof document) {
              var e = (function (t) {
                for (
                  var r = "".concat(t, "="),
                    e = document.cookie.split(";"),
                    o = 0;
                  o < e.length;
                  o++
                ) {
                  for (var i = e[o]; " " === i.charAt(0); )
                    i = i.substring(1, i.length);
                  if (0 === i.indexOf(r))
                    return i.substring(r.length, i.length);
                }
                return null;
              })(t.lookupCookie);
              e && (r = e);
            }
            return r;
          },
          cacheUserLanguage: function (t, r) {
            r.lookupCookie &&
              "undefined" != typeof document &&
              (function (t, r, e, o) {
                var i =
                  arguments.length > 4 && void 0 !== arguments[4]
                    ? arguments[4]
                    : { path: "/", sameSite: "strict" };
                (e &&
                  ((i.expires = new Date()),
                  i.expires.setTime(i.expires.getTime() + 60 * e * 1e3)),
                  o && (i.domain = o),
                  (document.cookie = (function (t, r, e) {
                    var o = e || {};
                    o.path = o.path || "/";
                    var i = encodeURIComponent(r),
                      l = "".concat(t, "=").concat(i);
                    if (o.maxAge > 0) {
                      var a = o.maxAge - 0;
                      if (Number.isNaN(a))
                        throw new Error("maxAge should be a Number");
                      l += "; Max-Age=".concat(Math.floor(a));
                    }
                    if (o.domain) {
                      if (!d.test(o.domain))
                        throw new TypeError("option domain is invalid");
                      l += "; Domain=".concat(o.domain);
                    }
                    if (o.path) {
                      if (!d.test(o.path))
                        throw new TypeError("option path is invalid");
                      l += "; Path=".concat(o.path);
                    }
                    if (o.expires) {
                      if ("function" != typeof o.expires.toUTCString)
                        throw new TypeError("option expires is invalid");
                      l += "; Expires=".concat(o.expires.toUTCString());
                    }
                    if (
                      (o.httpOnly && (l += "; HttpOnly"),
                      o.secure && (l += "; Secure"),
                      o.sameSite)
                    )
                      switch (
                        "string" == typeof o.sameSite
                          ? o.sameSite.toLowerCase()
                          : o.sameSite
                      ) {
                        case !0:
                          l += "; SameSite=Strict";
                          break;
                        case "lax":
                          l += "; SameSite=Lax";
                          break;
                        case "strict":
                          l += "; SameSite=Strict";
                          break;
                        case "none":
                          l += "; SameSite=None";
                          break;
                        default:
                          throw new TypeError("option sameSite is invalid");
                      }
                    return l;
                  })(t, encodeURIComponent(r), i)));
              })(
                r.lookupCookie,
                t,
                r.cookieMinutes,
                r.cookieDomain,
                r.cookieOptions,
              );
          },
        },
        b = {
          name: "querystring",
          lookup: function (t) {
            var r;
            if ("undefined" != typeof window) {
              var e = window.location.search;
              !window.location.search &&
                window.location.hash &&
                window.location.hash.indexOf("?") > -1 &&
                (e = window.location.hash.substring(
                  window.location.hash.indexOf("?"),
                ));
              for (
                var o = e.substring(1).split("&"), i = 0;
                i < o.length;
                i++
              ) {
                var l = o[i].indexOf("=");
                l > 0 &&
                  o[i].substring(0, l) === t.lookupQuerystring &&
                  (r = o[i].substring(l + 1));
              }
            }
            return r;
          },
        },
        c = null,
        f = function () {
          if (null !== c) return c;
          try {
            c = "undefined" !== window && null !== window.localStorage;
            var t = "i18next.translate.boo";
            (window.localStorage.setItem(t, "foo"),
              window.localStorage.removeItem(t));
          } catch (t) {
            c = !1;
          }
          return c;
        },
        m = {
          name: "localStorage",
          lookup: function (t) {
            var r;
            if (t.lookupLocalStorage && f()) {
              var e = window.localStorage.getItem(t.lookupLocalStorage);
              e && (r = e);
            }
            return r;
          },
          cacheUserLanguage: function (t, r) {
            r.lookupLocalStorage &&
              f() &&
              window.localStorage.setItem(r.lookupLocalStorage, t);
          },
        },
        h = null,
        p = function () {
          if (null !== h) return h;
          try {
            h = "undefined" !== window && null !== window.sessionStorage;
            var t = "i18next.translate.boo";
            (window.sessionStorage.setItem(t, "foo"),
              window.sessionStorage.removeItem(t));
          } catch (t) {
            h = !1;
          }
          return h;
        },
        s = {
          name: "sessionStorage",
          lookup: function (t) {
            var r;
            if (t.lookupSessionStorage && p()) {
              var e = window.sessionStorage.getItem(t.lookupSessionStorage);
              e && (r = e);
            }
            return r;
          },
          cacheUserLanguage: function (t, r) {
            r.lookupSessionStorage &&
              p() &&
              window.sessionStorage.setItem(r.lookupSessionStorage, t);
          },
        },
        y = {
          name: "navigator",
          lookup: function (t) {
            var r = [];
            if ("undefined" != typeof navigator) {
              if (navigator.languages)
                for (var e = 0; e < navigator.languages.length; e++)
                  r.push(navigator.languages[e]);
              (navigator.userLanguage && r.push(navigator.userLanguage),
                navigator.language && r.push(navigator.language));
            }
            return r.length > 0 ? r : void 0;
          },
        },
        g = {
          name: "htmlTag",
          lookup: function (t) {
            var r,
              e =
                t.htmlTag ||
                ("undefined" != typeof document
                  ? document.documentElement
                  : null);
            return (
              e &&
                "function" == typeof e.getAttribute &&
                (r = e.getAttribute("lang")),
              r
            );
          },
        },
        v = {
          name: "path",
          lookup: function (t) {
            var r;
            if ("undefined" != typeof window) {
              var e = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
              if (e instanceof Array)
                if ("number" == typeof t.lookupFromPathIndex) {
                  if ("string" != typeof e[t.lookupFromPathIndex]) return;
                  r = e[t.lookupFromPathIndex].replace("/", "");
                } else r = e[0].replace("/", "");
            }
            return r;
          },
        },
        G = {
          name: "subdomain",
          lookup: function (t) {
            var r =
                "number" == typeof t.lookupFromSubdomainIndex
                  ? t.lookupFromSubdomainIndex + 1
                  : 1,
              e =
                "undefined" != typeof window &&
                window.location &&
                window.location.hostname &&
                window.location.hostname.match(
                  /^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i,
                );
            if (e) return e[r];
          },
        },
        k = (function () {
          function t(r) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            ((0, o.Z)(this, t),
              (this.type = "languageDetector"),
              (this.detectors = {}),
              this.init(r, e));
          }
          return (
            (0, i.Z)(t, [
              {
                key: "init",
                value: function (t) {
                  var r =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    e =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {};
                  ((this.services = t || { languageUtils: {} }),
                    (this.options = (function (t) {
                      return (
                        a.call(n.call(arguments, 1), function (r) {
                          if (r)
                            for (var e in r) void 0 === t[e] && (t[e] = r[e]);
                        }),
                        t
                      );
                    })(r, this.options || {}, {
                      order: [
                        "querystring",
                        "cookie",
                        "localStorage",
                        "sessionStorage",
                        "navigator",
                        "htmlTag",
                      ],
                      lookupQuerystring: "lng",
                      lookupCookie: "i18next",
                      lookupLocalStorage: "i18nextLng",
                      lookupSessionStorage: "i18nextLng",
                      caches: ["localStorage"],
                      excludeCacheFor: ["cimode"],
                      convertDetectedLanguage: function (t) {
                        return t;
                      },
                    })),
                    "string" == typeof this.options.convertDetectedLanguage &&
                      this.options.convertDetectedLanguage.indexOf("15897") >
                        -1 &&
                      (this.options.convertDetectedLanguage = function (t) {
                        return t.replace("-", "_");
                      }),
                    this.options.lookupFromUrlIndex &&
                      (this.options.lookupFromPathIndex =
                        this.options.lookupFromUrlIndex),
                    (this.i18nOptions = e),
                    this.addDetector(u),
                    this.addDetector(b),
                    this.addDetector(m),
                    this.addDetector(s),
                    this.addDetector(y),
                    this.addDetector(g),
                    this.addDetector(v),
                    this.addDetector(G));
                },
              },
              {
                key: "addDetector",
                value: function (t) {
                  this.detectors[t.name] = t;
                },
              },
              {
                key: "detect",
                value: function (t) {
                  var r = this;
                  t || (t = this.options.order);
                  var e = [];
                  return (
                    t.forEach(function (t) {
                      if (r.detectors[t]) {
                        var o = r.detectors[t].lookup(r.options);
                        (o && "string" == typeof o && (o = [o]),
                          o && (e = e.concat(o)));
                      }
                    }),
                    (e = e.map(function (t) {
                      return r.options.convertDetectedLanguage(t);
                    })),
                    this.services.languageUtils.getBestMatchFromCodes
                      ? e
                      : e.length > 0
                        ? e[0]
                        : null
                  );
                },
              },
              {
                key: "cacheUserLanguage",
                value: function (t, r) {
                  var e = this;
                  (r || (r = this.options.caches),
                    r &&
                      ((this.options.excludeCacheFor &&
                        this.options.excludeCacheFor.indexOf(t) > -1) ||
                        r.forEach(function (r) {
                          e.detectors[r] &&
                            e.detectors[r].cacheUserLanguage(t, e.options);
                        })));
                },
              },
            ]),
            t
          );
        })();
      k.type = "languageDetector";
    },
  },
]);
