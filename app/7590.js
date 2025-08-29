"use strict";
(global.webpackChunktradingview_desktop =
  global.webpackChunktradingview_desktop || []).push([
  [7590],
  {
    34192: (r, e, t) => {
      t.d(e, { X: () => R });
      var i = t(50959),
        n = t(97754),
        o = t.n(n),
        l = t(79621),
        a = t(70612),
        c = t(57418);
      const h =
          '<svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16ZM9 4c-.79 0-1.38.7-1.25 1.48l.67 4.03a.59.59 0 0 0 1.16 0l.67-4.03A1.27 1.27 0 0 0 9 4Zm0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" fill="currentColor"/></svg>',
        d = JSON.parse(
          '{"container":"container-9ckn123c","container-danger":"container-danger-3U4WdGto","light-title":"light-title-3m1htpRH","light-icon":"light-icon-2lTx6rj6","icon":"icon-2ZK1Y3zH","header":"header-287NeSeQ","light-container-danger":"light-container-danger-3a-tOHX-","container-warning":"container-warning-1jkRTadj","light-container-warning":"light-container-warning-2Fk7saIj","container-success":"container-success-2srhYBbo","light-container-success":"light-container-success-2usIdWUz","container-default":"container-default-2MDEpAUG","light-container-default":"light-container-default-3KiA9i9m","text-wrap":"text-wrap-26IUyzzc","light-text-wrap":"light-text-wrap-2UPqgIr9","close-button":"close-button-2LkcSirN","light-close-button":"light-close-button-kWoGLml_","informerBody":"informerBody-1vdi7VUp","mainProblem":"mainProblem-3faP9PDh","header-inline":"header-inline-3pspOlWC","header-new-line":"header-new-line-2L5lGhNb"}',
        );
      var s = t(25211),
        f = t.n(s),
        u = t(62962),
        m = t.n(u),
        k = t(20310),
        p = t.n(k),
        y = t(29290),
        g = t.n(y),
        b = t(47289),
        v = t.n(b),
        w = t(24834),
        x = t.n(w),
        T = t(97143),
        z = {};
      ((z.styleTagTransform = x()),
        (z.setAttributes = g()),
        (z.insert = p().bind(null, "head")),
        (z.domAPI = m()),
        (z.insertStyleElement = v()),
        f()(T.Z, z),
        T.Z && T.Z.locals && T.Z.locals);
      const F = {
        danger: h,
        warning: h,
        success:
          '<svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16Zm4-9.97L11.9 6 8.3 9.82 6.1 7.46 4.99 8.5 8.32 12 13 7.03Z" fill="currentColor"/></svg>',
        default:
          '<svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16Zm1-12a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM8.5 9.5H7V8h3v6H8.5V9.5Z" fill="currentColor"/></svg>',
      };
      function R(r) {
        const {
          informerIntent: e,
          content: t,
          className: n,
          header: h,
          isIconShown: s = !0,
          isCloseButtonShown: f,
          icon: u,
          onCloseClick: m,
          closeButtonLabel: k = "Close",
          headerPlacement: p = "inline",
          children: y,
          isLight: g,
        } = r;
        return i.createElement(
          "div",
          {
            className: o()(
              d.container,
              d[`container-${e}`],
              g && d[`light-container-${e}`],
              n,
            ),
            ...(0, c._E)(r),
            ...(0, c.__)(r),
          },
          i.createElement(
            "div",
            { className: d.informerBody },
            t &&
              i.createElement(
                "div",
                { className: d.mainProblem },
                s &&
                  i.createElement(l.J, {
                    className: o()(d.icon, g && d["light-icon"]),
                    icon: u ?? F[e],
                  }),
                i.createElement(
                  "div",
                  { className: o()(d["text-wrap"], g && d["light-text-wrap"]) },
                  h &&
                    i.createElement(
                      "span",
                      {
                        className: o()(
                          g && d["light-title"],
                          d.header,
                          d[`header-${g ? "new-line" : p}`],
                        ),
                      },
                      h,
                    ),
                  i.createElement("span", { "aria-live": "assertive" }, " ", t),
                ),
              ),
            y,
          ),
          f &&
            i.createElement(a.P, {
              "aria-label": k,
              onClick: m,
              className: o()(g && d["light-close-button"], d["close-button"]),
              size: g ? "xxsmall" : "xsmall",
              preservePaddings: !g,
            }),
        );
      }
    },
    97143: (r, e, t) => {
      t.d(e, { Z: () => a });
      var i = t(43392),
        n = t.n(i),
        o = t(8021),
        l = t.n(o)()(n());
      l.push([
        r.id,
        '.container-9ckn123c:dir(ltr){align-items:flex-start;background:#fff;border:1px solid;border-radius:8px;color:#0f0f0f;display:flex;font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;font-style:normal;justify-content:space-between;padding:11px 12px;--ui-lib-typography-font-size:14px;font-size:var(--ui-lib-typography-font-size);font-weight:400;--ui-lib-typography-line-height:18px;line-height:var(--ui-lib-typography-line-height)}html.theme-dark .container-9ckn123c:dir(ltr){color:#dbdbdb}html.theme-dark .container-9ckn123c:dir(ltr){background:#1f1f1f}.container-9ckn123c.container-danger-3U4WdGto:dir(ltr){border-color:#f23645}html.theme-dark .container-9ckn123c.container-danger-3U4WdGto:dir(ltr){border-color:#f23645}.container-9ckn123c.container-danger-3U4WdGto .light-title-3m1htpRH:dir(ltr){font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;--ui-lib-typography-line-height:16px;line-height:var(--ui-lib-typography-line-height);--ui-lib-typography-font-size:12px;font-size:var(--ui-lib-typography-font-size);font-style:normal;font-weight:600;margin-bottom:2px}.container-9ckn123c.container-danger-3U4WdGto .light-icon-2lTx6rj6:dir(ltr){margin-right:4px}.container-9ckn123c.container-danger-3U4WdGto .header-287NeSeQ:dir(ltr),.container-9ckn123c.container-danger-3U4WdGto .icon-2ZK1Y3zH:dir(ltr){color:#f23645}html.theme-dark .container-9ckn123c.container-danger-3U4WdGto .header-287NeSeQ:dir(ltr),html.theme-dark .container-9ckn123c.container-danger-3U4WdGto .icon-2ZK1Y3zH:dir(ltr){color:#f23645}.container-9ckn123c.light-container-danger-3a-tOHX-:dir(ltr){background:#ffebec;border:none;border-radius:4px;font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;font-style:normal;padding:8px;--ui-lib-typography-font-size:12px;font-size:var(--ui-lib-typography-font-size);font-weight:400;--ui-lib-typography-line-height:16px;line-height:var(--ui-lib-typography-line-height)}html.theme-dark .container-9ckn123c.light-container-danger-3a-tOHX-:dir(ltr){background:#331f20}.container-9ckn123c.container-warning-1jkRTadj:dir(ltr){border-color:#ff9800}html.theme-dark .container-9ckn123c.container-warning-1jkRTadj:dir(ltr){border-color:#ff9800}.container-9ckn123c.container-warning-1jkRTadj .light-title-3m1htpRH:dir(ltr){font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;--ui-lib-typography-line-height:16px;line-height:var(--ui-lib-typography-line-height);--ui-lib-typography-font-size:12px;font-size:var(--ui-lib-typography-font-size);font-style:normal;font-weight:600;margin-bottom:2px}.container-9ckn123c.container-warning-1jkRTadj .light-icon-2lTx6rj6:dir(ltr){margin-right:4px}.container-9ckn123c.container-warning-1jkRTadj .header-287NeSeQ:dir(ltr),.container-9ckn123c.container-warning-1jkRTadj .icon-2ZK1Y3zH:dir(ltr){color:#ff9800}html.theme-dark .container-9ckn123c.container-warning-1jkRTadj .header-287NeSeQ:dir(ltr),html.theme-dark .container-9ckn123c.container-warning-1jkRTadj .icon-2ZK1Y3zH:dir(ltr){color:#ff9800}.container-9ckn123c.light-container-warning-2Fk7saIj:dir(ltr){background:#fff3e0;border:none;border-radius:4px;font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;font-style:normal;padding:8px;--ui-lib-typography-font-size:12px;font-size:var(--ui-lib-typography-font-size);font-weight:400;--ui-lib-typography-line-height:16px;line-height:var(--ui-lib-typography-line-height)}html.theme-dark .container-9ckn123c.light-container-warning-2Fk7saIj:dir(ltr){background:#33261a}.container-9ckn123c.container-success-2srhYBbo:dir(ltr){border-color:#089981}html.theme-dark .container-9ckn123c.container-success-2srhYBbo:dir(ltr){border-color:#089981}.container-9ckn123c.container-success-2srhYBbo .light-title-3m1htpRH:dir(ltr){font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;--ui-lib-typography-line-height:16px;line-height:var(--ui-lib-typography-line-height);--ui-lib-typography-font-size:12px;font-size:var(--ui-lib-typography-font-size);font-style:normal;font-weight:600;margin-bottom:2px}.container-9ckn123c.container-success-2srhYBbo .light-icon-2lTx6rj6:dir(ltr){margin-right:4px}.container-9ckn123c.container-success-2srhYBbo .header-287NeSeQ:dir(ltr),.container-9ckn123c.container-success-2srhYBbo .icon-2ZK1Y3zH:dir(ltr){color:#089981}html.theme-dark .container-9ckn123c.container-success-2srhYBbo .header-287NeSeQ:dir(ltr),html.theme-dark .container-9ckn123c.container-success-2srhYBbo .icon-2ZK1Y3zH:dir(ltr){color:#089981}.container-9ckn123c.light-container-success-2usIdWUz:dir(ltr){background:#daf2ee;border:none;border-radius:4px;font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;font-style:normal;padding:8px;--ui-lib-typography-font-size:12px;font-size:var(--ui-lib-typography-font-size);font-weight:400;--ui-lib-typography-line-height:16px;line-height:var(--ui-lib-typography-line-height)}html.theme-dark .container-9ckn123c.light-container-success-2usIdWUz:dir(ltr){background:#082621}.container-9ckn123c.container-default-2MDEpAUG:dir(ltr){border-color:#ebebeb}html.theme-dark .container-9ckn123c.container-default-2MDEpAUG:dir(ltr){border-color:#4a4a4a}.container-9ckn123c.container-default-2MDEpAUG .light-title-3m1htpRH:dir(ltr){font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;--ui-lib-typography-line-height:16px;line-height:var(--ui-lib-typography-line-height);--ui-lib-typography-font-size:12px;font-size:var(--ui-lib-typography-font-size);font-style:normal;font-weight:600;margin-bottom:2px}.container-9ckn123c.container-default-2MDEpAUG .light-icon-2lTx6rj6:dir(ltr){margin-right:4px}.container-9ckn123c.container-default-2MDEpAUG .header-287NeSeQ:dir(ltr),.container-9ckn123c.container-default-2MDEpAUG .icon-2ZK1Y3zH:dir(ltr){color:#707070}html.theme-dark .container-9ckn123c.container-default-2MDEpAUG .header-287NeSeQ:dir(ltr),html.theme-dark .container-9ckn123c.container-default-2MDEpAUG .icon-2ZK1Y3zH:dir(ltr){color:#8c8c8c}.container-9ckn123c.light-container-default-3KiA9i9m:dir(ltr){background:#f2f2f2;border:none;border-radius:4px;font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;font-style:normal;padding:8px;--ui-lib-typography-font-size:12px;font-size:var(--ui-lib-typography-font-size);font-weight:400;--ui-lib-typography-line-height:16px;line-height:var(--ui-lib-typography-line-height)}html.theme-dark .container-9ckn123c.light-container-default-3KiA9i9m:dir(ltr){background:#2e2e2e}.container-9ckn123c .icon-2ZK1Y3zH:dir(ltr){display:flex;margin-right:8px}.container-9ckn123c .text-wrap-26IUyzzc:dir(ltr){align-self:center;margin-right:4px;white-space:pre-line;word-break:break-word}.container-9ckn123c .light-text-wrap-2UPqgIr9:dir(ltr){margin-right:8px}.container-9ckn123c .header-287NeSeQ:dir(ltr){font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;font-style:normal;--ui-lib-typography-font-size:14px;font-size:var(--ui-lib-typography-font-size);font-weight:600;--ui-lib-typography-line-height:18px;line-height:var(--ui-lib-typography-line-height)}.close-button-2LkcSirN:dir(ltr){flex-shrink:0;padding:4px}.light-close-button-kWoGLml_:dir(ltr){padding:0}.informerBody-1vdi7VUp:dir(ltr){display:flex;flex-direction:column}.mainProblem-3faP9PDh:dir(ltr){display:flex}.header-inline-3pspOlWC:dir(ltr){display:inline}.header-new-line-2L5lGhNb:dir(ltr){display:block;margin-bottom:4px}.container-9ckn123c:dir(rtl){align-items:flex-start;background:#fff;border:1px solid;border-radius:8px;color:#0f0f0f;display:flex;font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;font-style:normal;justify-content:space-between;padding:11px 12px;--ui-lib-typography-font-size:14px;font-size:var(--ui-lib-typography-font-size);font-weight:400;--ui-lib-typography-line-height:18px;line-height:var(--ui-lib-typography-line-height)}html.theme-dark .container-9ckn123c:dir(rtl){color:#dbdbdb}html.theme-dark .container-9ckn123c:dir(rtl){background:#1f1f1f}.container-9ckn123c.container-danger-3U4WdGto:dir(rtl){border-color:#f23645}html.theme-dark .container-9ckn123c.container-danger-3U4WdGto:dir(rtl){border-color:#f23645}.container-9ckn123c.container-danger-3U4WdGto .light-title-3m1htpRH:dir(rtl){font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;--ui-lib-typography-line-height:16px;line-height:var(--ui-lib-typography-line-height);--ui-lib-typography-font-size:12px;font-size:var(--ui-lib-typography-font-size);font-style:normal;font-weight:600;margin-bottom:2px}.container-9ckn123c.container-danger-3U4WdGto .light-icon-2lTx6rj6:dir(rtl){margin-left:4px}.container-9ckn123c.container-danger-3U4WdGto .header-287NeSeQ:dir(rtl),.container-9ckn123c.container-danger-3U4WdGto .icon-2ZK1Y3zH:dir(rtl){color:#f23645}html.theme-dark .container-9ckn123c.container-danger-3U4WdGto .header-287NeSeQ:dir(rtl),html.theme-dark .container-9ckn123c.container-danger-3U4WdGto .icon-2ZK1Y3zH:dir(rtl){color:#f23645}.container-9ckn123c.light-container-danger-3a-tOHX-:dir(rtl){background:#ffebec;border:none;border-radius:4px;font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;font-style:normal;padding:8px;--ui-lib-typography-font-size:12px;font-size:var(--ui-lib-typography-font-size);font-weight:400;--ui-lib-typography-line-height:16px;line-height:var(--ui-lib-typography-line-height)}html.theme-dark .container-9ckn123c.light-container-danger-3a-tOHX-:dir(rtl){background:#331f20}.container-9ckn123c.container-warning-1jkRTadj:dir(rtl){border-color:#ff9800}html.theme-dark .container-9ckn123c.container-warning-1jkRTadj:dir(rtl){border-color:#ff9800}.container-9ckn123c.container-warning-1jkRTadj .light-title-3m1htpRH:dir(rtl){font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;--ui-lib-typography-line-height:16px;line-height:var(--ui-lib-typography-line-height);--ui-lib-typography-font-size:12px;font-size:var(--ui-lib-typography-font-size);font-style:normal;font-weight:600;margin-bottom:2px}.container-9ckn123c.container-warning-1jkRTadj .light-icon-2lTx6rj6:dir(rtl){margin-left:4px}.container-9ckn123c.container-warning-1jkRTadj .header-287NeSeQ:dir(rtl),.container-9ckn123c.container-warning-1jkRTadj .icon-2ZK1Y3zH:dir(rtl){color:#ff9800}html.theme-dark .container-9ckn123c.container-warning-1jkRTadj .header-287NeSeQ:dir(rtl),html.theme-dark .container-9ckn123c.container-warning-1jkRTadj .icon-2ZK1Y3zH:dir(rtl){color:#ff9800}.container-9ckn123c.light-container-warning-2Fk7saIj:dir(rtl){background:#fff3e0;border:none;border-radius:4px;font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;font-style:normal;padding:8px;--ui-lib-typography-font-size:12px;font-size:var(--ui-lib-typography-font-size);font-weight:400;--ui-lib-typography-line-height:16px;line-height:var(--ui-lib-typography-line-height)}html.theme-dark .container-9ckn123c.light-container-warning-2Fk7saIj:dir(rtl){background:#33261a}.container-9ckn123c.container-success-2srhYBbo:dir(rtl){border-color:#089981}html.theme-dark .container-9ckn123c.container-success-2srhYBbo:dir(rtl){border-color:#089981}.container-9ckn123c.container-success-2srhYBbo .light-title-3m1htpRH:dir(rtl){font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;--ui-lib-typography-line-height:16px;line-height:var(--ui-lib-typography-line-height);--ui-lib-typography-font-size:12px;font-size:var(--ui-lib-typography-font-size);font-style:normal;font-weight:600;margin-bottom:2px}.container-9ckn123c.container-success-2srhYBbo .light-icon-2lTx6rj6:dir(rtl){margin-left:4px}.container-9ckn123c.container-success-2srhYBbo .header-287NeSeQ:dir(rtl),.container-9ckn123c.container-success-2srhYBbo .icon-2ZK1Y3zH:dir(rtl){color:#089981}html.theme-dark .container-9ckn123c.container-success-2srhYBbo .header-287NeSeQ:dir(rtl),html.theme-dark .container-9ckn123c.container-success-2srhYBbo .icon-2ZK1Y3zH:dir(rtl){color:#089981}.container-9ckn123c.light-container-success-2usIdWUz:dir(rtl){background:#daf2ee;border:none;border-radius:4px;font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;font-style:normal;padding:8px;--ui-lib-typography-font-size:12px;font-size:var(--ui-lib-typography-font-size);font-weight:400;--ui-lib-typography-line-height:16px;line-height:var(--ui-lib-typography-line-height)}html.theme-dark .container-9ckn123c.light-container-success-2usIdWUz:dir(rtl){background:#082621}.container-9ckn123c.container-default-2MDEpAUG:dir(rtl){border-color:#ebebeb}html.theme-dark .container-9ckn123c.container-default-2MDEpAUG:dir(rtl){border-color:#4a4a4a}.container-9ckn123c.container-default-2MDEpAUG .light-title-3m1htpRH:dir(rtl){font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;--ui-lib-typography-line-height:16px;line-height:var(--ui-lib-typography-line-height);--ui-lib-typography-font-size:12px;font-size:var(--ui-lib-typography-font-size);font-style:normal;font-weight:600;margin-bottom:2px}.container-9ckn123c.container-default-2MDEpAUG .light-icon-2lTx6rj6:dir(rtl){margin-left:4px}.container-9ckn123c.container-default-2MDEpAUG .header-287NeSeQ:dir(rtl),.container-9ckn123c.container-default-2MDEpAUG .icon-2ZK1Y3zH:dir(rtl){color:#707070}html.theme-dark .container-9ckn123c.container-default-2MDEpAUG .header-287NeSeQ:dir(rtl),html.theme-dark .container-9ckn123c.container-default-2MDEpAUG .icon-2ZK1Y3zH:dir(rtl){color:#8c8c8c}.container-9ckn123c.light-container-default-3KiA9i9m:dir(rtl){background:#f2f2f2;border:none;border-radius:4px;font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;font-style:normal;padding:8px;--ui-lib-typography-font-size:12px;font-size:var(--ui-lib-typography-font-size);font-weight:400;--ui-lib-typography-line-height:16px;line-height:var(--ui-lib-typography-line-height)}html.theme-dark .container-9ckn123c.light-container-default-3KiA9i9m:dir(rtl){background:#2e2e2e}.container-9ckn123c .icon-2ZK1Y3zH:dir(rtl){display:flex;margin-left:8px}.container-9ckn123c .text-wrap-26IUyzzc:dir(rtl){align-self:center;margin-left:4px;white-space:pre-line;word-break:break-word}.container-9ckn123c .light-text-wrap-2UPqgIr9:dir(rtl){margin-left:8px}.container-9ckn123c .header-287NeSeQ:dir(rtl){font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;font-style:normal;--ui-lib-typography-font-size:14px;font-size:var(--ui-lib-typography-font-size);font-weight:600;--ui-lib-typography-line-height:18px;line-height:var(--ui-lib-typography-line-height)}.close-button-2LkcSirN:dir(rtl){flex-shrink:0;padding:4px}.light-close-button-kWoGLml_:dir(rtl){padding:0}.informerBody-1vdi7VUp:dir(rtl){display:flex;flex-direction:column}.mainProblem-3faP9PDh:dir(rtl){display:flex}.header-inline-3pspOlWC:dir(rtl){display:inline}.header-new-line-2L5lGhNb:dir(rtl){display:block;margin-bottom:4px}',
        "",
      ]);
      const a = l;
    },
    30519: (r, e, t) => {
      t.d(e, { Z: () => a });
      var i = t(43392),
        n = t.n(i),
        o = t(8021),
        l = t.n(o)()(n());
      l.push([
        r.id,
        ".link-colors-1JyPtuQF:dir(ltr){color:#2962ff;fill:#2962ff}html.theme-dark .link-colors-1JyPtuQF:dir(ltr){fill:#5b9cf6}html.theme-dark .link-colors-1JyPtuQF:dir(ltr){color:#5b9cf6}.link-colors-1JyPtuQF:visited:dir(ltr){color:#2962ff;fill:#2962ff}html.theme-dark .link-colors-1JyPtuQF:visited:dir(ltr){fill:#5b9cf6}html.theme-dark .link-colors-1JyPtuQF:visited:dir(ltr){color:#5b9cf6}@media (any-hover:hover){.link-colors-1JyPtuQF:hover:dir(ltr){color:#1e53e5;fill:#1e53e5}}@media (any-hover:hover){html.theme-dark .link-colors-1JyPtuQF:hover:dir(ltr){fill:#3179f5}}@media (any-hover:hover){html.theme-dark .link-colors-1JyPtuQF:hover:dir(ltr){color:#3179f5}}.link-colors-1JyPtuQF:active:dir(ltr){color:#1848cc;fill:#1848cc}html.theme-dark .link-colors-1JyPtuQF:active:dir(ltr){fill:#2962ff}html.theme-dark .link-colors-1JyPtuQF:active:dir(ltr){color:#2962ff}.link-colors-1JyPtuQF:focus:dir(ltr){outline:auto;outline-offset:2px}.link-colors-1JyPtuQF:focus-visible:dir(ltr){outline:auto;outline-offset:2px}.link-colors-1JyPtuQF:focus:not(:focus-visible):dir(ltr){outline:none}.link-colors-with-underline-3EJoCRFW:dir(ltr){color:#2962ff;fill:#2962ff}html.theme-dark .link-colors-with-underline-3EJoCRFW:dir(ltr){fill:#5b9cf6}html.theme-dark .link-colors-with-underline-3EJoCRFW:dir(ltr){color:#5b9cf6}.link-colors-with-underline-3EJoCRFW:visited:dir(ltr){color:#2962ff;fill:#2962ff}html.theme-dark .link-colors-with-underline-3EJoCRFW:visited:dir(ltr){fill:#5b9cf6}html.theme-dark .link-colors-with-underline-3EJoCRFW:visited:dir(ltr){color:#5b9cf6}@media (any-hover:hover){.link-colors-with-underline-3EJoCRFW:hover:dir(ltr){color:#1e53e5;fill:#1e53e5}}@media (any-hover:hover){html.theme-dark .link-colors-with-underline-3EJoCRFW:hover:dir(ltr){fill:#3179f5}}@media (any-hover:hover){html.theme-dark .link-colors-with-underline-3EJoCRFW:hover:dir(ltr){color:#3179f5}}.link-colors-with-underline-3EJoCRFW:active:dir(ltr){color:#1848cc;fill:#1848cc}html.theme-dark .link-colors-with-underline-3EJoCRFW:active:dir(ltr){fill:#2962ff}html.theme-dark .link-colors-with-underline-3EJoCRFW:active:dir(ltr){color:#2962ff}.link-colors-with-underline-3EJoCRFW:focus:dir(ltr){outline:auto;outline-offset:2px}.link-colors-with-underline-3EJoCRFW:focus-visible:dir(ltr){outline:auto;outline-offset:2px}.link-colors-with-underline-3EJoCRFW:focus:not(:focus-visible):dir(ltr){outline:none}@media (any-hover:hover){.link-colors-with-underline-3EJoCRFW:hover:dir(ltr){text-decoration:underline}}.link-colors-secondary-1Ar0hhqH:dir(ltr){color:#5b9cf6;fill:#5b9cf6}html.theme-dark .link-colors-secondary-1Ar0hhqH:dir(ltr){fill:#448aff}html.theme-dark .link-colors-secondary-1Ar0hhqH:dir(ltr){color:#448aff}.link-colors-secondary-1Ar0hhqH:visited:dir(ltr){color:#5b9cf6;fill:#5b9cf6}html.theme-dark .link-colors-secondary-1Ar0hhqH:visited:dir(ltr){fill:#448aff}html.theme-dark .link-colors-secondary-1Ar0hhqH:visited:dir(ltr){color:#448aff}@media (any-hover:hover){.link-colors-secondary-1Ar0hhqH:hover:dir(ltr){color:#3179f5;fill:#3179f5}}@media (any-hover:hover){html.theme-dark .link-colors-secondary-1Ar0hhqH:hover:dir(ltr){fill:#3179f5}}@media (any-hover:hover){html.theme-dark .link-colors-secondary-1Ar0hhqH:hover:dir(ltr){color:#3179f5}}.link-colors-secondary-1Ar0hhqH:active:dir(ltr){color:#2962ff;fill:#2962ff}html.theme-dark .link-colors-secondary-1Ar0hhqH:active:dir(ltr){fill:#2962ff}html.theme-dark .link-colors-secondary-1Ar0hhqH:active:dir(ltr){color:#2962ff}.link-colors-secondary-1Ar0hhqH:focus:dir(ltr){outline:auto;outline-offset:2px}.link-colors-secondary-1Ar0hhqH:focus-visible:dir(ltr){outline:auto;outline-offset:2px}.link-colors-secondary-1Ar0hhqH:focus:not(:focus-visible):dir(ltr){outline:none}.link-colors-secondary-with-underline-37kYaTlT:dir(ltr){color:#5b9cf6;fill:#5b9cf6}html.theme-dark .link-colors-secondary-with-underline-37kYaTlT:dir(ltr){fill:#448aff}html.theme-dark .link-colors-secondary-with-underline-37kYaTlT:dir(ltr){color:#448aff}.link-colors-secondary-with-underline-37kYaTlT:visited:dir(ltr){color:#5b9cf6;fill:#5b9cf6}html.theme-dark .link-colors-secondary-with-underline-37kYaTlT:visited:dir(ltr){fill:#448aff}html.theme-dark .link-colors-secondary-with-underline-37kYaTlT:visited:dir(ltr){color:#448aff}@media (any-hover:hover){.link-colors-secondary-with-underline-37kYaTlT:hover:dir(ltr){color:#3179f5;fill:#3179f5}}@media (any-hover:hover){html.theme-dark .link-colors-secondary-with-underline-37kYaTlT:hover:dir(ltr){fill:#3179f5}}@media (any-hover:hover){html.theme-dark .link-colors-secondary-with-underline-37kYaTlT:hover:dir(ltr){color:#3179f5}}.link-colors-secondary-with-underline-37kYaTlT:active:dir(ltr){color:#2962ff;fill:#2962ff}html.theme-dark .link-colors-secondary-with-underline-37kYaTlT:active:dir(ltr){fill:#2962ff}html.theme-dark .link-colors-secondary-with-underline-37kYaTlT:active:dir(ltr){color:#2962ff}.link-colors-secondary-with-underline-37kYaTlT:focus:dir(ltr){outline:auto;outline-offset:2px}.link-colors-secondary-with-underline-37kYaTlT:focus-visible:dir(ltr){outline:auto;outline-offset:2px}.link-colors-secondary-with-underline-37kYaTlT:focus:not(:focus-visible):dir(ltr){outline:none}@media (any-hover:hover){.link-colors-secondary-with-underline-37kYaTlT:hover:dir(ltr){text-decoration:underline}}.link-colors-1JyPtuQF:dir(rtl){color:#2962ff;fill:#2962ff}html.theme-dark .link-colors-1JyPtuQF:dir(rtl){fill:#5b9cf6}html.theme-dark .link-colors-1JyPtuQF:dir(rtl){color:#5b9cf6}.link-colors-1JyPtuQF:visited:dir(rtl){color:#2962ff;fill:#2962ff}html.theme-dark .link-colors-1JyPtuQF:visited:dir(rtl){fill:#5b9cf6}html.theme-dark .link-colors-1JyPtuQF:visited:dir(rtl){color:#5b9cf6}@media (any-hover:hover){.link-colors-1JyPtuQF:hover:dir(rtl){color:#1e53e5;fill:#1e53e5}}@media (any-hover:hover){html.theme-dark .link-colors-1JyPtuQF:hover:dir(rtl){fill:#3179f5}}@media (any-hover:hover){html.theme-dark .link-colors-1JyPtuQF:hover:dir(rtl){color:#3179f5}}.link-colors-1JyPtuQF:active:dir(rtl){color:#1848cc;fill:#1848cc}html.theme-dark .link-colors-1JyPtuQF:active:dir(rtl){fill:#2962ff}html.theme-dark .link-colors-1JyPtuQF:active:dir(rtl){color:#2962ff}.link-colors-1JyPtuQF:focus:dir(rtl){outline:auto;outline-offset:2px}.link-colors-1JyPtuQF:focus-visible:dir(rtl){outline:auto;outline-offset:2px}.link-colors-1JyPtuQF:focus:not(:focus-visible):dir(rtl){outline:none}.link-colors-with-underline-3EJoCRFW:dir(rtl){color:#2962ff;fill:#2962ff}html.theme-dark .link-colors-with-underline-3EJoCRFW:dir(rtl){fill:#5b9cf6}html.theme-dark .link-colors-with-underline-3EJoCRFW:dir(rtl){color:#5b9cf6}.link-colors-with-underline-3EJoCRFW:visited:dir(rtl){color:#2962ff;fill:#2962ff}html.theme-dark .link-colors-with-underline-3EJoCRFW:visited:dir(rtl){fill:#5b9cf6}html.theme-dark .link-colors-with-underline-3EJoCRFW:visited:dir(rtl){color:#5b9cf6}@media (any-hover:hover){.link-colors-with-underline-3EJoCRFW:hover:dir(rtl){color:#1e53e5;fill:#1e53e5}}@media (any-hover:hover){html.theme-dark .link-colors-with-underline-3EJoCRFW:hover:dir(rtl){fill:#3179f5}}@media (any-hover:hover){html.theme-dark .link-colors-with-underline-3EJoCRFW:hover:dir(rtl){color:#3179f5}}.link-colors-with-underline-3EJoCRFW:active:dir(rtl){color:#1848cc;fill:#1848cc}html.theme-dark .link-colors-with-underline-3EJoCRFW:active:dir(rtl){fill:#2962ff}html.theme-dark .link-colors-with-underline-3EJoCRFW:active:dir(rtl){color:#2962ff}.link-colors-with-underline-3EJoCRFW:focus:dir(rtl){outline:auto;outline-offset:2px}.link-colors-with-underline-3EJoCRFW:focus-visible:dir(rtl){outline:auto;outline-offset:2px}.link-colors-with-underline-3EJoCRFW:focus:not(:focus-visible):dir(rtl){outline:none}@media (any-hover:hover){.link-colors-with-underline-3EJoCRFW:hover:dir(rtl){text-decoration:underline}}.link-colors-secondary-1Ar0hhqH:dir(rtl){color:#5b9cf6;fill:#5b9cf6}html.theme-dark .link-colors-secondary-1Ar0hhqH:dir(rtl){fill:#448aff}html.theme-dark .link-colors-secondary-1Ar0hhqH:dir(rtl){color:#448aff}.link-colors-secondary-1Ar0hhqH:visited:dir(rtl){color:#5b9cf6;fill:#5b9cf6}html.theme-dark .link-colors-secondary-1Ar0hhqH:visited:dir(rtl){fill:#448aff}html.theme-dark .link-colors-secondary-1Ar0hhqH:visited:dir(rtl){color:#448aff}@media (any-hover:hover){.link-colors-secondary-1Ar0hhqH:hover:dir(rtl){color:#3179f5;fill:#3179f5}}@media (any-hover:hover){html.theme-dark .link-colors-secondary-1Ar0hhqH:hover:dir(rtl){fill:#3179f5}}@media (any-hover:hover){html.theme-dark .link-colors-secondary-1Ar0hhqH:hover:dir(rtl){color:#3179f5}}.link-colors-secondary-1Ar0hhqH:active:dir(rtl){color:#2962ff;fill:#2962ff}html.theme-dark .link-colors-secondary-1Ar0hhqH:active:dir(rtl){fill:#2962ff}html.theme-dark .link-colors-secondary-1Ar0hhqH:active:dir(rtl){color:#2962ff}.link-colors-secondary-1Ar0hhqH:focus:dir(rtl){outline:auto;outline-offset:2px}.link-colors-secondary-1Ar0hhqH:focus-visible:dir(rtl){outline:auto;outline-offset:2px}.link-colors-secondary-1Ar0hhqH:focus:not(:focus-visible):dir(rtl){outline:none}.link-colors-secondary-with-underline-37kYaTlT:dir(rtl){color:#5b9cf6;fill:#5b9cf6}html.theme-dark .link-colors-secondary-with-underline-37kYaTlT:dir(rtl){fill:#448aff}html.theme-dark .link-colors-secondary-with-underline-37kYaTlT:dir(rtl){color:#448aff}.link-colors-secondary-with-underline-37kYaTlT:visited:dir(rtl){color:#5b9cf6;fill:#5b9cf6}html.theme-dark .link-colors-secondary-with-underline-37kYaTlT:visited:dir(rtl){fill:#448aff}html.theme-dark .link-colors-secondary-with-underline-37kYaTlT:visited:dir(rtl){color:#448aff}@media (any-hover:hover){.link-colors-secondary-with-underline-37kYaTlT:hover:dir(rtl){color:#3179f5;fill:#3179f5}}@media (any-hover:hover){html.theme-dark .link-colors-secondary-with-underline-37kYaTlT:hover:dir(rtl){fill:#3179f5}}@media (any-hover:hover){html.theme-dark .link-colors-secondary-with-underline-37kYaTlT:hover:dir(rtl){color:#3179f5}}.link-colors-secondary-with-underline-37kYaTlT:active:dir(rtl){color:#2962ff;fill:#2962ff}html.theme-dark .link-colors-secondary-with-underline-37kYaTlT:active:dir(rtl){fill:#2962ff}html.theme-dark .link-colors-secondary-with-underline-37kYaTlT:active:dir(rtl){color:#2962ff}.link-colors-secondary-with-underline-37kYaTlT:focus:dir(rtl){outline:auto;outline-offset:2px}.link-colors-secondary-with-underline-37kYaTlT:focus-visible:dir(rtl){outline:auto;outline-offset:2px}.link-colors-secondary-with-underline-37kYaTlT:focus:not(:focus-visible):dir(rtl){outline:none}@media (any-hover:hover){.link-colors-secondary-with-underline-37kYaTlT:hover:dir(rtl){text-decoration:underline}}",
        "",
      ]);
      const a = l;
    },
    85981: (r, e, t) => {
      var i = t(25211),
        n = t.n(i),
        o = t(62962),
        l = t.n(o),
        a = t(20310),
        c = t.n(a),
        h = t(29290),
        d = t.n(h),
        s = t(47289),
        f = t.n(s),
        u = t(24834),
        m = t.n(u),
        k = t(30519),
        p = {};
      ((p.styleTagTransform = m()),
        (p.setAttributes = d()),
        (p.insert = c().bind(null, "head")),
        (p.domAPI = l()),
        (p.insertStyleElement = f()),
        n()(k.Z, p),
        k.Z && k.Z.locals && k.Z.locals);
    },
    65279: (r) => {
      r.exports = JSON.parse(
        '{"link-colors":"link-colors-1JyPtuQF","link-colors-with-underline":"link-colors-with-underline-3EJoCRFW","link-colors-secondary":"link-colors-secondary-1Ar0hhqH","link-colors-secondary-with-underline":"link-colors-secondary-with-underline-37kYaTlT"}',
      );
    },
  },
]);
