/*! For license information please see 4409.js.LICENSE.txt */
(global.webpackChunktradingview_desktop =
  global.webpackChunktradingview_desktop || []).push([
  [4409],
  {
    16414: (e, i, a) => {
      "use strict";
      (a.d(i, { O: () => t.O }), a(50959), a(97754), a(52446));
      var t = a(77658);
    },
    62756: (e, i, a) => {
      "use strict";
      a.d(i, { y: () => w });
      var t = a(97754),
        r = a(50959),
        l = a(16414);
      const o = JSON.parse(
        '{"badge":"badge-2SlTesSR","background":"background-1M-rvSMu","content":"content-lJygnqla","xsmall":"xsmall-1mN8LmSe","small":"small-1NQlo3fP","medium":"medium-3yqiGSKC","large":"large-3wi-ZDit","xlarge":"xlarge-3LhYcIIb","xxlarge":"xxlarge-9OE0Hxdk"}',
      );
      var n = a.t(o, 2),
        d = a(25211),
        s = a.n(d),
        u = a(62962),
        c = a.n(u),
        g = a(20310),
        p = a.n(g),
        b = a(29290),
        f = a.n(b),
        h = a(47289),
        x = a.n(h),
        m = a(24834),
        v = a.n(m),
        S = a(11102),
        z = {};
      function w(e) {
        const {
            children: i,
            ariaLabel: a,
            size: d = l.O.Small,
            href: s,
            title: u,
            className: c,
            ...g
          } = e,
          p = s ? "a" : "span";
        return r.createElement(
          p,
          {
            className: t(o.badge, n[d], u && "apply-common-tooltip", c),
            title: u,
            "aria-label": a,
            href: s,
            dir: "ltr",
            lang: "en",
            target: s ? "_blank" : void 0,
            ...g,
          },
          r.createElement("span", { className: o.background }),
          r.createElement("span", { className: o.content }, i),
        );
      }
      ((z.styleTagTransform = v()),
        (z.setAttributes = f()),
        (z.insert = p().bind(null, "head")),
        (z.domAPI = c()),
        (z.insertStyleElement = x()),
        s()(S.Z, z),
        S.Z && S.Z.locals && S.Z.locals);
    },
    42968: (e, i, a) => {
      "use strict";
      a.d(i, { c: () => Z });
      var t = a(50959),
        r = a(97754),
        l = a.n(r);
      const o = JSON.parse(
        '{"wrapper":"wrapper-3zAMiNFN","animated":"animated-26-ZioKX","pulsation":"pulsation-2le515jn"}',
      );
      var n = a.t(o, 2),
        d = a(25211),
        s = a.n(d),
        u = a(62962),
        c = a.n(u),
        g = a(20310),
        p = a.n(g),
        b = a(29290),
        f = a.n(b),
        h = a(47289),
        x = a.n(h),
        m = a(24834),
        v = a.n(m),
        S = a(8121),
        z = {};
      ((z.styleTagTransform = v()),
        (z.setAttributes = f()),
        (z.insert = p().bind(null, "head")),
        (z.domAPI = c()),
        (z.insertStyleElement = x()),
        s()(S.Z, z),
        S.Z && S.Z.locals && S.Z.locals);
      const w = n,
        k = JSON.parse(
          '{"logo":"logo-YPDlZUG3","hidden":"hidden-3jZ99k67","xxceptionallysmalldonotusebrv1023":"xxceptionallysmalldonotusebrv1023-2scjn4O_","xxxsmall":"xxxsmall-1qVc9c_1","xxsmall":"xxsmall-3n8xzbYz","xsmall":"xsmall-EWH-kEzj","small":"small-hxlwdAJS","medium":"medium-1K1Q0a_r","large":"large-2q-YHGhw","xlarge":"xlarge-3lrTzNHP","xxlarge":"xxlarge-3ee_r5Pw","xxxlarge":"xxxlarge-2Z971szk","skeleton":"skeleton-23DpHV9z","letter":"letter-1wQsj4tl"}',
        );
      var y = a(42979),
        T = {};
      function Z(e) {
        const i = (function (e) {
            return (
              "logoUrl" in e &&
              null !== e.logoUrl &&
              void 0 !== e.logoUrl &&
              0 !== e.logoUrl.length
            );
          })(e),
          [a, r] = (0, t.useState)(0),
          o = (0, t.useRef)(null),
          n = (function (e, i = 2, a) {
            return l()(
              k.logo,
              k[e],
              a,
              0 === i || 1 === i ? l()(w.wrapper, k.skeleton) : k.letter,
              1 === i && w.animated,
            );
          })(e.size, a, e.className),
          d = e.alt ?? e.title ?? "",
          s = i ? d[0] : e.placeholderLetter;
        return (
          (0, t.useEffect)(() => r((o.current?.complete ?? !i) ? 2 : 1), [i]),
          i && 3 !== a
            ? t.createElement("img", {
                ref: o,
                className: n,
                crossOrigin: "",
                src: e.logoUrl,
                alt: d,
                title: e.title,
                loading: e.loading,
                onLoad: () => r(2),
                onError: () => r(3),
                "aria-label": e["aria-label"],
                "aria-hidden": e["aria-hidden"],
              })
            : t.createElement(
                "span",
                {
                  className: n,
                  title: e.title,
                  "aria-label": e["aria-label"],
                  "aria-hidden": e["aria-hidden"],
                },
                s,
              )
        );
      }
      ((T.styleTagTransform = v()),
        (T.setAttributes = f()),
        (T.insert = p().bind(null, "head")),
        (T.domAPI = c()),
        (T.insertStyleElement = x()),
        s()(y.Z, T),
        y.Z && y.Z.locals && y.Z.locals,
        k.hidden);
    },
    79621: (e, i, a) => {
      "use strict";
      a.d(i, { J: () => t.J });
      var t = a(44592);
    },
    97754: (e, i) => {
      var a;
      !(function () {
        "use strict";
        var t = {}.hasOwnProperty;
        function r() {
          for (var e = [], i = 0; i < arguments.length; i++) {
            var a = arguments[i];
            if (a) {
              var l = typeof a;
              if ("string" === l || "number" === l) e.push(a);
              else if (Array.isArray(a) && a.length) {
                var o = r.apply(null, a);
                o && e.push(o);
              } else if ("object" === l)
                for (var n in a) t.call(a, n) && a[n] && e.push(n);
            }
          }
          return e.join(" ");
        }
        e.exports
          ? ((r.default = r), (e.exports = r))
          : void 0 ===
              (a = function () {
                return r;
              }.apply(i, [])) || (e.exports = a);
      })();
    },
    11102: (e, i, a) => {
      "use strict";
      a.d(i, { Z: () => n });
      var t = a(43392),
        r = a.n(t),
        l = a(8021),
        o = a.n(l)()(r());
      o.push([
        e.id,
        '.badge-2SlTesSR:dir(ltr){--ui-lib-size-defaulted:var(--ui-lib-size,4);--ui-lib-size-defaulted-xsmall:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 2) * (var(--ui-lib-size-defaulted) - 2)));--ui-lib-size-defaulted-small:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 3) * (var(--ui-lib-size-defaulted) - 3)));--ui-lib-size-defaulted-medium:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 4) * (var(--ui-lib-size-defaulted) - 4)));--ui-lib-size-defaulted-large:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 5) * (var(--ui-lib-size-defaulted) - 5)));--ui-lib-size-defaulted-xlarge:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 6) * (var(--ui-lib-size-defaulted) - 6)));--height:calc(var(--ui-lib-size-defaulted-xsmall)*12px + var(--ui-lib-size-defaulted-small)*16px + var(--ui-lib-size-defaulted-medium)*20px + var(--ui-lib-size-defaulted-large)*24px + var(--ui-lib-size-defaulted-xlarge)*32px);height:var(--height);--ui-lib-badge-border-radius:calc(var(--ui-lib-size-defaulted-xsmall)*3px + var(--ui-lib-size-defaulted-small)*3px + var(--ui-lib-size-defaulted-medium)*4px + var(--ui-lib-size-defaulted-large)*6px + var(--ui-lib-size-defaulted-xlarge)*8px);--ui-lib-badgeSkewed-skewed-background:#0f0f0f;align-items:center;background:none;border-radius:var(--ui-lib-badge-border-radius);color:#fff;display:inline-flex;justify-content:center;text-transform:uppercase;-webkit-user-select:none;user-select:none;--ui-lib-badgeSkewed-angle-rad:0.3178;--pi:3.1416;--angle:calc(var(--pi)/2 - var(--ui-lib-badgeSkewed-angle-rad));--padding:calc(var(--height)/var(--tan));padding-left:calc(var(--ui-lib-size-defaulted-xsmall)*4px + var(--ui-lib-size-defaulted-small)*6px + var(--ui-lib-size-defaulted-medium)*8px + var(--ui-lib-size-defaulted-large)*10px + var(--ui-lib-size-defaulted-xlarge)*12px);padding-right:calc(var(--padding) + var(--ui-lib-badge-border-radius))}html.theme-dark .badge-2SlTesSR:dir(ltr){color:#000}html.theme-dark .badge-2SlTesSR:dir(ltr){--ui-lib-badgeSkewed-skewed-background:#dbdbdb}@media (any-hover:hover){.badge-2SlTesSR:hover:dir(ltr){--ui-lib-badgeSkewed-skewed-background:#707070}}@media (any-hover:hover){html.theme-dark .badge-2SlTesSR:hover:dir(ltr){--ui-lib-badgeSkewed-skewed-background:#8c8c8c}}.badge-2SlTesSR:dir(ltr){outline:none;overflow:visible;position:relative}.badge-2SlTesSR:focus:dir(ltr){outline:none}.badge-2SlTesSR:focus-visible:dir(ltr){outline:none}.badge-2SlTesSR:dir(ltr):after{border-style:solid;border-width:2px;box-sizing:border-box;content:"";display:none;height:calc(100% + 8px);left:-4px;pointer-events:none;position:absolute;top:-4px;width:calc(100% + 8px);z-index:1}.badge-2SlTesSR:focus:dir(ltr):after{display:block}.badge-2SlTesSR:focus-visible:dir(ltr):after{display:block}.badge-2SlTesSR:focus:not(:focus-visible):dir(ltr):after{display:none}.badge-2SlTesSR:dir(ltr):after{border-color:#2962ff}html.theme-dark .badge-2SlTesSR:dir(ltr):after{border-color:#2962ff}.badge-2SlTesSR:dir(ltr):after{border-radius:calc(var(--ui-lib-badge-border-radius, var(--ui-lib-badge-default-border-radius)) + 2px)}@supports (transform:scale(tan(1rad))){.badge-2SlTesSR:dir(ltr){--tan:tan(var(--angle) * 1rad)}}@supports not (transform:scale(tan(1rad))){.badge-2SlTesSR:dir(ltr){--tan:calc( var(--angle) * var(--angle) * var(--angle) * var(--angle) + var(--angle) )}}.background-1M-rvSMu:dir(ltr){border-radius:var(--ui-lib-badge-border-radius);height:100%;overflow:hidden;position:absolute;right:0;top:0;width:100%}.background-1M-rvSMu:dir(ltr):after{background:var(--ui-lib-badgeSkewed-skewed-background);border-radius:var(--ui-lib-badge-border-radius);content:" ";height:100%;left:calc(var(--padding)*-1);position:absolute;top:0;transform:skew(calc(var(--ui-lib-badgeSkewed-angle-rad)*-1rad),0);width:calc(100% + var(--padding)/2)}.content-lJygnqla:dir(ltr){font-size:calc(var(--ui-lib-size-defaulted-xsmall)*8px + var(--ui-lib-size-defaulted-small)*11px + var(--ui-lib-size-defaulted-medium)*11px + var(--ui-lib-size-defaulted-large)*14px + var(--ui-lib-size-defaulted-xlarge)*17px);font-weight:calc(var(--ui-lib-size-defaulted-xsmall)*700 + var(--ui-lib-size-defaulted-small)*600 + var(--ui-lib-size-defaulted-medium)*600 + var(--ui-lib-size-defaulted-large)*600 + var(--ui-lib-size-defaulted-xlarge)*700);letter-spacing:calc(var(--ui-lib-size-defaulted-xsmall)*.5px + var(--ui-lib-size-defaulted-small)*.02em + var(--ui-lib-size-defaulted-medium)*.05em + var(--ui-lib-size-defaulted-large)*0px + var(--ui-lib-size-defaulted-xlarge)*.02em);position:relative}.xsmall-1mN8LmSe:dir(ltr){--ui-lib-size:2}.small-1NQlo3fP:dir(ltr){--ui-lib-size:3}.medium-3yqiGSKC:dir(ltr){--ui-lib-size:4}.large-3wi-ZDit:dir(ltr){--ui-lib-size:5}.xlarge-3LhYcIIb:dir(ltr){--ui-lib-size:6}.xxlarge-9OE0Hxdk:dir(ltr){--ui-lib-size:7}.badge-2SlTesSR:dir(rtl){--ui-lib-size-defaulted:var(--ui-lib-size,4);--ui-lib-size-defaulted-xsmall:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 2) * (var(--ui-lib-size-defaulted) - 2)));--ui-lib-size-defaulted-small:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 3) * (var(--ui-lib-size-defaulted) - 3)));--ui-lib-size-defaulted-medium:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 4) * (var(--ui-lib-size-defaulted) - 4)));--ui-lib-size-defaulted-large:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 5) * (var(--ui-lib-size-defaulted) - 5)));--ui-lib-size-defaulted-xlarge:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 6) * (var(--ui-lib-size-defaulted) - 6)));--height:calc(var(--ui-lib-size-defaulted-xsmall)*12px + var(--ui-lib-size-defaulted-small)*16px + var(--ui-lib-size-defaulted-medium)*20px + var(--ui-lib-size-defaulted-large)*24px + var(--ui-lib-size-defaulted-xlarge)*32px);height:var(--height);--ui-lib-badge-border-radius:calc(var(--ui-lib-size-defaulted-xsmall)*3px + var(--ui-lib-size-defaulted-small)*3px + var(--ui-lib-size-defaulted-medium)*4px + var(--ui-lib-size-defaulted-large)*6px + var(--ui-lib-size-defaulted-xlarge)*8px);--ui-lib-badgeSkewed-skewed-background:#0f0f0f;align-items:center;background:none;border-radius:var(--ui-lib-badge-border-radius);color:#fff;display:inline-flex;justify-content:center;text-transform:uppercase;-webkit-user-select:none;user-select:none;--ui-lib-badgeSkewed-angle-rad:0.3178;--pi:3.1416;--angle:calc(var(--pi)/2 - var(--ui-lib-badgeSkewed-angle-rad));--padding:calc(var(--height)/var(--tan));padding-left:calc(var(--padding) + var(--ui-lib-badge-border-radius));padding-right:calc(var(--ui-lib-size-defaulted-xsmall)*4px + var(--ui-lib-size-defaulted-small)*6px + var(--ui-lib-size-defaulted-medium)*8px + var(--ui-lib-size-defaulted-large)*10px + var(--ui-lib-size-defaulted-xlarge)*12px)}html.theme-dark .badge-2SlTesSR:dir(rtl){color:#000}html.theme-dark .badge-2SlTesSR:dir(rtl){--ui-lib-badgeSkewed-skewed-background:#dbdbdb}@media (any-hover:hover){.badge-2SlTesSR:hover:dir(rtl){--ui-lib-badgeSkewed-skewed-background:#707070}}@media (any-hover:hover){html.theme-dark .badge-2SlTesSR:hover:dir(rtl){--ui-lib-badgeSkewed-skewed-background:#8c8c8c}}.badge-2SlTesSR:dir(rtl){outline:none;overflow:visible;position:relative}.badge-2SlTesSR:focus:dir(rtl){outline:none}.badge-2SlTesSR:focus-visible:dir(rtl){outline:none}.badge-2SlTesSR:dir(rtl):after{border-style:solid;border-width:2px;box-sizing:border-box;content:"";display:none;height:calc(100% + 8px);pointer-events:none;position:absolute;right:-4px;top:-4px;width:calc(100% + 8px);z-index:1}.badge-2SlTesSR:focus:dir(rtl):after{display:block}.badge-2SlTesSR:focus-visible:dir(rtl):after{display:block}.badge-2SlTesSR:focus:not(:focus-visible):dir(rtl):after{display:none}.badge-2SlTesSR:dir(rtl):after{border-color:#2962ff}html.theme-dark .badge-2SlTesSR:dir(rtl):after{border-color:#2962ff}.badge-2SlTesSR:dir(rtl):after{border-radius:calc(var(--ui-lib-badge-border-radius, var(--ui-lib-badge-default-border-radius)) + 2px)}@supports (transform:scale(tan(1rad))){.badge-2SlTesSR:dir(rtl){--tan:tan(var(--angle) * 1rad)}}@supports not (transform:scale(tan(1rad))){.badge-2SlTesSR:dir(rtl){--tan:calc( var(--angle) * var(--angle) * var(--angle) * var(--angle) + var(--angle) )}}.background-1M-rvSMu:dir(rtl){border-radius:var(--ui-lib-badge-border-radius);height:100%;left:0;overflow:hidden;position:absolute;top:0;width:100%}.background-1M-rvSMu:dir(rtl):after{background:var(--ui-lib-badgeSkewed-skewed-background);border-radius:var(--ui-lib-badge-border-radius);content:" ";height:100%;position:absolute;right:calc(var(--padding)*-1);top:0;transform:skew(calc((var(--ui-lib-badgeSkewed-angle-rad)*-1rad)*-1),0);width:calc(100% + var(--padding)/2)}.content-lJygnqla:dir(rtl){font-size:calc(var(--ui-lib-size-defaulted-xsmall)*8px + var(--ui-lib-size-defaulted-small)*11px + var(--ui-lib-size-defaulted-medium)*11px + var(--ui-lib-size-defaulted-large)*14px + var(--ui-lib-size-defaulted-xlarge)*17px);font-weight:calc(var(--ui-lib-size-defaulted-xsmall)*700 + var(--ui-lib-size-defaulted-small)*600 + var(--ui-lib-size-defaulted-medium)*600 + var(--ui-lib-size-defaulted-large)*600 + var(--ui-lib-size-defaulted-xlarge)*700);letter-spacing:calc(var(--ui-lib-size-defaulted-xsmall)*.5px + var(--ui-lib-size-defaulted-small)*.02em + var(--ui-lib-size-defaulted-medium)*.05em + var(--ui-lib-size-defaulted-large)*0px + var(--ui-lib-size-defaulted-xlarge)*.02em);position:relative}.xsmall-1mN8LmSe:dir(rtl){--ui-lib-size:2}.small-1NQlo3fP:dir(rtl){--ui-lib-size:3}.medium-3yqiGSKC:dir(rtl){--ui-lib-size:4}.large-3wi-ZDit:dir(rtl){--ui-lib-size:5}.xlarge-3LhYcIIb:dir(rtl){--ui-lib-size:6}.xxlarge-9OE0Hxdk:dir(rtl){--ui-lib-size:7}',
        "",
      ]);
      const n = o;
    },
    42979: (e, i, a) => {
      "use strict";
      a.d(i, { Z: () => n });
      var t = a(43392),
        r = a.n(t),
        l = a(8021),
        o = a.n(l)()(r());
      o.push([
        e.id,
        ".logo-YPDlZUG3:dir(ltr){align-items:center;border-radius:50%;display:inline-flex;justify-content:center}.logo-YPDlZUG3:not(img):dir(ltr){background-color:#ebebeb}html.theme-dark .logo-YPDlZUG3:not(img):dir(ltr){background-color:#2e2e2e}.hidden-3jZ99k67:dir(ltr){opacity:0;position:absolute}.xxceptionallysmalldonotusebrv1023-2scjn4O_:dir(ltr){font-size:10px;height:12px;line-height:10px;width:12px}.xxxsmall-1qVc9c_1:dir(ltr){font-size:11px;height:18px;line-height:16px;width:18px}.xxsmall-3n8xzbYz:dir(ltr){font-size:11px;height:20px;line-height:16px;width:20px}.xsmall-EWH-kEzj:dir(ltr){font-size:11px;height:24px;line-height:16px;width:24px}.small-hxlwdAJS:dir(ltr){font-size:14px;height:28px;line-height:16px;width:28px}.medium-1K1Q0a_r:dir(ltr){font-size:16px;height:36px;line-height:16px;width:36px}.large-2q-YHGhw:dir(ltr){font-size:24px;height:48px;line-height:32px;width:48px}.xlarge-3lrTzNHP:dir(ltr){font-size:40px;height:56px;line-height:40px;width:56px}.xxlarge-3ee_r5Pw:dir(ltr){font-size:80px;height:112px;line-height:80px;width:112px}.xxxlarge-2Z971szk:dir(ltr){font-size:160px;height:168px;line-height:160px;width:168px}.skeleton-23DpHV9z:dir(ltr){background-color:currentColor}.letter-1wQsj4tl:dir(ltr){color:#fff;font-style:normal;font-weight:700}html.theme-dark .letter-1wQsj4tl:dir(ltr){color:#636363}.logo-YPDlZUG3:dir(rtl){align-items:center;border-radius:50%;display:inline-flex;justify-content:center}.logo-YPDlZUG3:not(img):dir(rtl){background-color:#ebebeb}html.theme-dark .logo-YPDlZUG3:not(img):dir(rtl){background-color:#2e2e2e}.hidden-3jZ99k67:dir(rtl){opacity:0;position:absolute}.xxceptionallysmalldonotusebrv1023-2scjn4O_:dir(rtl){font-size:10px;height:12px;line-height:10px;width:12px}.xxxsmall-1qVc9c_1:dir(rtl){font-size:11px;height:18px;line-height:16px;width:18px}.xxsmall-3n8xzbYz:dir(rtl){font-size:11px;height:20px;line-height:16px;width:20px}.xsmall-EWH-kEzj:dir(rtl){font-size:11px;height:24px;line-height:16px;width:24px}.small-hxlwdAJS:dir(rtl){font-size:14px;height:28px;line-height:16px;width:28px}.medium-1K1Q0a_r:dir(rtl){font-size:16px;height:36px;line-height:16px;width:36px}.large-2q-YHGhw:dir(rtl){font-size:24px;height:48px;line-height:32px;width:48px}.xlarge-3lrTzNHP:dir(rtl){font-size:40px;height:56px;line-height:40px;width:56px}.xxlarge-3ee_r5Pw:dir(rtl){font-size:80px;height:112px;line-height:80px;width:112px}.xxxlarge-2Z971szk:dir(rtl){font-size:160px;height:168px;line-height:160px;width:168px}.skeleton-23DpHV9z:dir(rtl){background-color:currentColor}.letter-1wQsj4tl:dir(rtl){color:#fff;font-style:normal;font-weight:700}html.theme-dark .letter-1wQsj4tl:dir(rtl){color:#636363}",
        "",
      ]);
      const n = o;
    },
    8121: (e, i, a) => {
      "use strict";
      a.d(i, { Z: () => n });
      var t = a(43392),
        r = a.n(t),
        l = a(8021),
        o = a.n(l)()(r());
      o.push([
        e.id,
        ".wrapper-3zAMiNFN:dir(ltr){color:#f2f2f2}html.theme-dark .wrapper-3zAMiNFN:dir(ltr){color:#2e2e2e}.animated-26-ZioKX:dir(ltr){animation:1s ease-in-out 0s infinite alternate none running;animation-name:pulsation-2le515jn}.wrapper-3zAMiNFN:dir(rtl){color:#f2f2f2}html.theme-dark .wrapper-3zAMiNFN:dir(rtl){color:#2e2e2e}.animated-26-ZioKX:dir(rtl){animation:1s ease-in-out 0s infinite alternate none running;animation-name:pulsation-2le515jn}@keyframes pulsation-2le515jn{0%{opacity:1}to{opacity:.4}}",
        "",
      ]);
      const n = o;
    },
    10422: (e, i, a) => {
      "use strict";
      (!(function e() {
        if (
          "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
          "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
        )
          try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
          } catch (e) {
            console.error(e);
          }
      })(),
        (e.exports = a(53746)));
    },
    50959: (e, i, a) => {
      "use strict";
      e.exports = a(95257);
    },
    84434: (e, i, a) => {
      "use strict";
      a.d(i, { eN: () => s, Tb: () => d, cg: () => p, yj: () => u });
      var t = a(77751),
        r = a(73386),
        l = a(4352),
        o = a(30310),
        n = a(68080);
      function d(e, i) {
        return (0, l.nZ)().captureException(e, (0, n.U0)(i));
      }
      function s(e, i) {
        return (0, l.nZ)().captureEvent(e, i);
      }
      function u(e) {
        const i = (0, l.s3)(),
          a = (0, l.aF)(),
          n = (0, l.nZ)(),
          { release: d, environment: s = r.J } = (i && i.getOptions()) || {},
          { userAgent: u } = t.n.navigator || {},
          g = (0, o.Hv)({
            release: d,
            environment: s,
            user: n.getUser() || a.getUser(),
            ...(u && { userAgent: u }),
            ...e,
          }),
          p = a.getSession();
        return (
          p && "ok" === p.status && (0, o.CT)(p, { status: "exited" }),
          c(),
          a.setSession(g),
          n.setSession(g),
          g
        );
      }
      function c() {
        const e = (0, l.aF)(),
          i = (0, l.nZ)(),
          a = i.getSession() || e.getSession();
        (a && (0, o.RJ)(a), g(), e.setSession(), i.setSession());
      }
      function g() {
        const e = (0, l.aF)(),
          i = (0, l.nZ)(),
          a = (0, l.s3)(),
          t = i.getSession() || e.getSession();
        t && a && a.captureSession(t);
      }
      function p(e = !1) {
        e ? c() : g();
      }
    },
    77118: (e, i, a) => {
      "use strict";
      a.d(i, { n_: () => t.n, S1: () => r.S });
      var t = a(14547),
        r = (a(76191), a(16331), a(70686));
      (a(60203), a(48057));
    },
    94102: (e, i, a) => {
      "use strict";
      a.d(i, { Z: () => z });
      var t = a(27915),
        r = a(92449),
        l = [],
        o = l.forEach,
        n = l.slice,
        d = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
        s = {
          name: "cookie",
          lookup: function (e) {
            var i;
            if (e.lookupCookie && "undefined" != typeof document) {
              var a = (function (e) {
                for (
                  var i = "".concat(e, "="),
                    a = document.cookie.split(";"),
                    t = 0;
                  t < a.length;
                  t++
                ) {
                  for (var r = a[t]; " " === r.charAt(0); )
                    r = r.substring(1, r.length);
                  if (0 === r.indexOf(i))
                    return r.substring(i.length, r.length);
                }
                return null;
              })(e.lookupCookie);
              a && (i = a);
            }
            return i;
          },
          cacheUserLanguage: function (e, i) {
            i.lookupCookie &&
              "undefined" != typeof document &&
              (function (e, i, a, t) {
                var r =
                  arguments.length > 4 && void 0 !== arguments[4]
                    ? arguments[4]
                    : { path: "/", sameSite: "strict" };
                (a &&
                  ((r.expires = new Date()),
                  r.expires.setTime(r.expires.getTime() + 60 * a * 1e3)),
                  t && (r.domain = t),
                  (document.cookie = (function (e, i, a) {
                    var t = a || {};
                    t.path = t.path || "/";
                    var r = encodeURIComponent(i),
                      l = "".concat(e, "=").concat(r);
                    if (t.maxAge > 0) {
                      var o = t.maxAge - 0;
                      if (Number.isNaN(o))
                        throw new Error("maxAge should be a Number");
                      l += "; Max-Age=".concat(Math.floor(o));
                    }
                    if (t.domain) {
                      if (!d.test(t.domain))
                        throw new TypeError("option domain is invalid");
                      l += "; Domain=".concat(t.domain);
                    }
                    if (t.path) {
                      if (!d.test(t.path))
                        throw new TypeError("option path is invalid");
                      l += "; Path=".concat(t.path);
                    }
                    if (t.expires) {
                      if ("function" != typeof t.expires.toUTCString)
                        throw new TypeError("option expires is invalid");
                      l += "; Expires=".concat(t.expires.toUTCString());
                    }
                    if (
                      (t.httpOnly && (l += "; HttpOnly"),
                      t.secure && (l += "; Secure"),
                      t.sameSite)
                    )
                      switch (
                        "string" == typeof t.sameSite
                          ? t.sameSite.toLowerCase()
                          : t.sameSite
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
                  })(e, encodeURIComponent(i), r)));
              })(
                i.lookupCookie,
                e,
                i.cookieMinutes,
                i.cookieDomain,
                i.cookieOptions,
              );
          },
        },
        u = {
          name: "querystring",
          lookup: function (e) {
            var i;
            if ("undefined" != typeof window) {
              var a = window.location.search;
              !window.location.search &&
                window.location.hash &&
                window.location.hash.indexOf("?") > -1 &&
                (a = window.location.hash.substring(
                  window.location.hash.indexOf("?"),
                ));
              for (
                var t = a.substring(1).split("&"), r = 0;
                r < t.length;
                r++
              ) {
                var l = t[r].indexOf("=");
                l > 0 &&
                  t[r].substring(0, l) === e.lookupQuerystring &&
                  (i = t[r].substring(l + 1));
              }
            }
            return i;
          },
        },
        c = null,
        g = function () {
          if (null !== c) return c;
          try {
            c = "undefined" !== window && null !== window.localStorage;
            var e = "i18next.translate.boo";
            (window.localStorage.setItem(e, "foo"),
              window.localStorage.removeItem(e));
          } catch (e) {
            c = !1;
          }
          return c;
        },
        p = {
          name: "localStorage",
          lookup: function (e) {
            var i;
            if (e.lookupLocalStorage && g()) {
              var a = window.localStorage.getItem(e.lookupLocalStorage);
              a && (i = a);
            }
            return i;
          },
          cacheUserLanguage: function (e, i) {
            i.lookupLocalStorage &&
              g() &&
              window.localStorage.setItem(i.lookupLocalStorage, e);
          },
        },
        b = null,
        f = function () {
          if (null !== b) return b;
          try {
            b = "undefined" !== window && null !== window.sessionStorage;
            var e = "i18next.translate.boo";
            (window.sessionStorage.setItem(e, "foo"),
              window.sessionStorage.removeItem(e));
          } catch (e) {
            b = !1;
          }
          return b;
        },
        h = {
          name: "sessionStorage",
          lookup: function (e) {
            var i;
            if (e.lookupSessionStorage && f()) {
              var a = window.sessionStorage.getItem(e.lookupSessionStorage);
              a && (i = a);
            }
            return i;
          },
          cacheUserLanguage: function (e, i) {
            i.lookupSessionStorage &&
              f() &&
              window.sessionStorage.setItem(i.lookupSessionStorage, e);
          },
        },
        x = {
          name: "navigator",
          lookup: function (e) {
            var i = [];
            if ("undefined" != typeof navigator) {
              if (navigator.languages)
                for (var a = 0; a < navigator.languages.length; a++)
                  i.push(navigator.languages[a]);
              (navigator.userLanguage && i.push(navigator.userLanguage),
                navigator.language && i.push(navigator.language));
            }
            return i.length > 0 ? i : void 0;
          },
        },
        m = {
          name: "htmlTag",
          lookup: function (e) {
            var i,
              a =
                e.htmlTag ||
                ("undefined" != typeof document
                  ? document.documentElement
                  : null);
            return (
              a &&
                "function" == typeof a.getAttribute &&
                (i = a.getAttribute("lang")),
              i
            );
          },
        },
        v = {
          name: "path",
          lookup: function (e) {
            var i;
            if ("undefined" != typeof window) {
              var a = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
              if (a instanceof Array)
                if ("number" == typeof e.lookupFromPathIndex) {
                  if ("string" != typeof a[e.lookupFromPathIndex]) return;
                  i = a[e.lookupFromPathIndex].replace("/", "");
                } else i = a[0].replace("/", "");
            }
            return i;
          },
        },
        S = {
          name: "subdomain",
          lookup: function (e) {
            var i =
                "number" == typeof e.lookupFromSubdomainIndex
                  ? e.lookupFromSubdomainIndex + 1
                  : 1,
              a =
                "undefined" != typeof window &&
                window.location &&
                window.location.hostname &&
                window.location.hostname.match(
                  /^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i,
                );
            if (a) return a[i];
          },
        },
        z = (function () {
          function e(i) {
            var a =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            ((0, t.Z)(this, e),
              (this.type = "languageDetector"),
              (this.detectors = {}),
              this.init(i, a));
          }
          return (
            (0, r.Z)(e, [
              {
                key: "init",
                value: function (e) {
                  var i =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    a =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {};
                  ((this.services = e || { languageUtils: {} }),
                    (this.options = (function (e) {
                      return (
                        o.call(n.call(arguments, 1), function (i) {
                          if (i)
                            for (var a in i) void 0 === e[a] && (e[a] = i[a]);
                        }),
                        e
                      );
                    })(i, this.options || {}, {
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
                      convertDetectedLanguage: function (e) {
                        return e;
                      },
                    })),
                    "string" == typeof this.options.convertDetectedLanguage &&
                      this.options.convertDetectedLanguage.indexOf("15897") >
                        -1 &&
                      (this.options.convertDetectedLanguage = function (e) {
                        return e.replace("-", "_");
                      }),
                    this.options.lookupFromUrlIndex &&
                      (this.options.lookupFromPathIndex =
                        this.options.lookupFromUrlIndex),
                    (this.i18nOptions = a),
                    this.addDetector(s),
                    this.addDetector(u),
                    this.addDetector(p),
                    this.addDetector(h),
                    this.addDetector(x),
                    this.addDetector(m),
                    this.addDetector(v),
                    this.addDetector(S));
                },
              },
              {
                key: "addDetector",
                value: function (e) {
                  this.detectors[e.name] = e;
                },
              },
              {
                key: "detect",
                value: function (e) {
                  var i = this;
                  e || (e = this.options.order);
                  var a = [];
                  return (
                    e.forEach(function (e) {
                      if (i.detectors[e]) {
                        var t = i.detectors[e].lookup(i.options);
                        (t && "string" == typeof t && (t = [t]),
                          t && (a = a.concat(t)));
                      }
                    }),
                    (a = a.map(function (e) {
                      return i.options.convertDetectedLanguage(e);
                    })),
                    this.services.languageUtils.getBestMatchFromCodes
                      ? a
                      : a.length > 0
                        ? a[0]
                        : null
                  );
                },
              },
              {
                key: "cacheUserLanguage",
                value: function (e, i) {
                  var a = this;
                  (i || (i = this.options.caches),
                    i &&
                      ((this.options.excludeCacheFor &&
                        this.options.excludeCacheFor.indexOf(e) > -1) ||
                        i.forEach(function (i) {
                          a.detectors[i] &&
                            a.detectors[i].cacheUserLanguage(e, a.options);
                        })));
                },
              },
            ]),
            e
          );
        })();
      z.type = "languageDetector";
    },
  },
]);
