"use strict";
(global.webpackChunktradingview_desktop =
  global.webpackChunktradingview_desktop || []).push([
  [1589],
  {
    69162: (i, r, t) => {
      t.d(r, { OD: () => v, wx: () => y });
      var e = t(50959),
        l = t(97754),
        o = t.n(l);
      const n = JSON.parse(
        '{"ku":"inner-slot-2OKMGqSc","Pr":"inner-middle-slot-FxLdcHA0","v_":"before-slot-3KAG-INy"}',
      );
      var a = t(25211),
        d = t.n(a),
        c = t(62962),
        h = t.n(c),
        s = t(20310),
        b = t.n(s),
        u = t(29290),
        m = t.n(u),
        p = t(47289),
        f = t.n(p),
        g = t(24834),
        k = t.n(g),
        x = t(45023),
        w = {};
      function v(i) {
        const { className: r, children: t } = i;
        return e.createElement("span", { className: o()(n.v_, r) }, t);
      }
      function y(i) {
        const { className: r, children: t } = i;
        return e.createElement("span", { className: o()(n.ku, n.Pr, r) }, t);
      }
      ((w.styleTagTransform = k()),
        (w.setAttributes = m()),
        (w.insert = b().bind(null, "head")),
        (w.domAPI = h()),
        (w.insertStyleElement = f()),
        d()(x.Z, w),
        x.Z && x.Z.locals && x.Z.locals);
    },
    99413: (i, r, t) => {
      t.d(r, { I: () => A });
      var e = t(50959),
        l = t(97754),
        o = t.n(l);
      function n(i) {
        return null != i;
      }
      function a(i, r) {
        return [i, r].filter(n).join(" ");
      }
      var d = t(57418),
        c = t(1142);
      function h(i) {
        return (0, e.useCallback)((0, c.l)(i), i);
      }
      var s = t(50151),
        b = t(94882),
        u = t(9968);
      const m = JSON.parse(
        '{"container":"container-q0mjim9E","container-xxsmall":"container-xxsmall-28przFI4","container-xsmall":"container-xsmall-ZTAFSNng","container-small":"container-small-1keGnkP6","container-medium":"container-medium-3wqHEUNK","container-large":"container-large-2Xg4gfyM","intent-default":"intent-default-1iFRsAl_","focused":"focused-3_QrLayY","readonly":"readonly-2O87siLj","disabled":"disabled-1IdBwvKU","with-highlight":"with-highlight-1fw5sABK","grouped":"grouped-OqOAs_gO","adjust-position":"adjust-position-CZNDwrAs","first-row":"first-row-1TtmkJB5","first-col":"first-col-3gkQgeTB","stretch":"stretch-1ZwMxhiW","font-size-medium":"font-size-medium-2X_Vsy16","font-size-large":"font-size-large-3XsO4Jyv","no-corner-top-left":"no-corner-top-left-1CiWWKym","no-corner-top-right":"no-corner-top-right-3FhGiM-K","no-corner-bottom-right":"no-corner-bottom-right-7_q0YPc_","no-corner-bottom-left":"no-corner-bottom-left-3MCGXDki","size-xxsmall":"size-xxsmall-3PBCOFHd","size-xsmall":"size-xsmall-60W28scv","size-small":"size-small-1yttw7pF","size-medium":"size-medium-JO0bzDKQ","size-large":"size-large-3NHYwkZf","intent-success":"intent-success-3d9hoQq6","intent-warning":"intent-warning-2R7B-fcl","intent-danger":"intent-danger-2aIQ0kCh","intent-primary":"intent-primary-1uA2IWJE","border-none":"border-none-1THKKmlu","border-thin":"border-thin-xydp6U9V","border-thick":"border-thick-2gyRxvRu","highlight":"highlight-1k6YPfiQ","shown":"shown-2dwiJlCW"}',
      );
      var p = t(25211),
        f = t.n(p),
        g = t(62962),
        k = t.n(g),
        x = t(20310),
        w = t.n(x),
        v = t(29290),
        y = t.n(v),
        z = t(47289),
        E = t.n(z),
        M = t(24834),
        G = t.n(M),
        j = t(47557),
        _ = {};
      function q(i) {
        let r = "";
        return (
          0 !== i &&
            (1 & i && (r = o()(r, m["no-corner-top-left"])),
            2 & i && (r = o()(r, m["no-corner-top-right"])),
            4 & i && (r = o()(r, m["no-corner-bottom-right"])),
            8 & i && (r = o()(r, m["no-corner-bottom-left"]))),
          r
        );
      }
      function P(i, r, t, e) {
        const {
            removeRoundBorder: l,
            className: n,
            intent: a = "default",
            borderStyle: d = "thin",
            size: c,
            highlight: h,
            disabled: s,
            readonly: b,
            stretch: p,
            noReadonlyStyles: f,
            isFocused: g,
          } = i,
          k = q(l ?? (0, u.n)(t));
        return o()(
          m.container,
          m[`container-${c}`],
          m[`intent-${a}`],
          m[`border-${d}`],
          c && m[`size-${c}`],
          k,
          h && m["with-highlight"],
          s && m.disabled,
          b && !f && m.readonly,
          g && m.focused,
          p && m.stretch,
          r && m.grouped,
          !e && m["adjust-position"],
          t.isTop && m["first-row"],
          t.isLeft && m["first-col"],
          n,
        );
      }
      function C(i, r, t) {
        const { highlight: e, highlightRemoveRoundBorder: l } = i;
        if (!e) return m.highlight;
        const n = q(l ?? (0, u.n)(r));
        return o()(m.highlight, m.shown, m[`size-${t}`], n);
      }
      ((_.styleTagTransform = G()),
        (_.setAttributes = y()),
        (_.insert = w().bind(null, "head")),
        (_.domAPI = k()),
        (_.insertStyleElement = E()),
        f()(j.Z, _),
        j.Z && j.Z.locals && j.Z.locals,
        (0, s.IS)(m["font-size-medium"]),
        (0, s.IS)(m["font-size-large"]));
      const O = { passive: !1 };
      function K(i, r) {
        const {
            style: t,
            id: l,
            role: o,
            onFocus: n,
            onBlur: a,
            onMouseOver: c,
            onMouseOut: s,
            onMouseDown: u,
            onMouseUp: m,
            onKeyDown: p,
            onClick: f,
            tabIndex: g,
            startSlot: k,
            middleSlot: x,
            endSlot: w,
            onWheel: v,
            onWheelNoPassive: y = null,
            size: z,
            tag: E = "span",
            type: M,
          } = i,
          {
            isGrouped: G,
            cellState: j,
            disablePositionAdjustment: _ = !1,
          } = (0, e.useContext)(b.G),
          q = (function (i, r = null, t) {
            const l = (0, e.useRef)(null),
              o = (0, e.useRef)(null),
              n = (0, e.useCallback)(() => {
                if (null === l.current || null === o.current) return;
                const [i, r, t] = o.current;
                null !== r && l.current.addEventListener(i, r, t);
              }, []),
              a = (0, e.useCallback)(() => {
                if (null === l.current || null === o.current) return;
                const [i, r, t] = o.current;
                null !== r && l.current.removeEventListener(i, r, t);
              }, []),
              d = (0, e.useCallback)((i) => {
                (a(), (l.current = i), n());
              }, []);
            return (
              (0, e.useEffect)(
                () => ((o.current = [i, r, t]), n(), a),
                [i, r, t],
              ),
              d
            );
          })("wheel", y, O),
          K = E;
        return e.createElement(
          K,
          {
            type: M,
            style: t,
            id: l,
            role: o,
            className: P(i, G, j, _),
            tabIndex: g,
            ref: h([r, q]),
            onFocus: n,
            onBlur: a,
            onMouseOver: c,
            onMouseOut: s,
            onMouseDown: u,
            onMouseUp: m,
            onKeyDown: p,
            onClick: f,
            onWheel: v,
            ...(0, d._E)(i),
            ...(0, d.__)(i),
          },
          k,
          x,
          w,
          e.createElement("span", { className: C(i, j, z) }),
        );
      }
      K.displayName = "ControlSkeleton";
      const Q = e.forwardRef(K);
      var Y = t(69162);
      const B = JSON.parse(
        '{"input":"input-3bEGcMc9","size-xxsmall":"size-xxsmall-27e6wS6H","size-xsmall":"size-xsmall-1_VJDaNU","size-small":"size-small-1b3jdGP_","size-medium":"size-medium-1L1JkxT_","size-large":"size-large-fbdORjfB","with-start-slot":"with-start-slot-16sVynIv","with-end-slot":"with-end-slot-S5RrC8PC"}',
      );
      var S = t(64016),
        J = {};
      function F(i) {
        return !(0, d.eH)(i) && !(0, d.a1)(i);
      }
      function A(i) {
        const {
            id: r,
            title: t,
            role: l,
            tabIndex: n,
            placeholder: c,
            name: h,
            type: s,
            value: b,
            defaultValue: u,
            draggable: m,
            autoComplete: p,
            autoFocus: f,
            autoCapitalize: g,
            autoCorrect: k,
            maxLength: x,
            min: w,
            max: v,
            step: y,
            pattern: z,
            inputMode: E,
            onSelect: M,
            onFocus: G,
            onBlur: j,
            onKeyDown: _,
            onKeyUp: q,
            onKeyPress: P,
            onChange: C,
            onDragStart: O,
            size: K = "small",
            className: S,
            inputClassName: J,
            disabled: A,
            readonly: L,
            containerTabIndex: N,
            startSlot: D,
            endSlot: R,
            reference: U,
            containerReference: H,
            onContainerFocus: W,
            dataQaId: I,
            ...Z
          } = i,
          T = (0, d.L6)(Z, F),
          V = {
            ...(0, d.__)(Z),
            ...(0, d._E)(Z),
            id: r,
            title: t,
            role: l,
            tabIndex: n,
            placeholder: c,
            name: h,
            type: s,
            value: b,
            defaultValue: u,
            draggable: m,
            autoComplete: p,
            autoFocus: f,
            autoCapitalize: g,
            autoCorrect: k,
            maxLength: x,
            min: w,
            max: v,
            step: y,
            pattern: z,
            inputMode: E,
            onSelect: M,
            onFocus: G,
            onBlur: j,
            onKeyDown: _,
            onKeyUp: q,
            onKeyPress: P,
            onChange: C,
            onDragStart: O,
          };
        return e.createElement(Q, {
          ...T,
          disabled: A,
          readonly: L,
          tabIndex: N,
          className: o()(B.container, S),
          size: K,
          ref: H,
          onFocus: W,
          startSlot: D,
          middleSlot: e.createElement(
            Y.wx,
            null,
            e.createElement("input", {
              ...V,
              className: o()(
                B.input,
                B[`size-${K}`],
                J,
                D && B["with-start-slot"],
                R && B["with-end-slot"],
              ),
              disabled: A,
              readOnly: L,
              ref: U,
              "data-qa-id": "ui-lib-Input-input",
            }),
          ),
          endSlot: R,
          "data-qa-id": a("ui-lib-Input", I),
        });
      }
      ((J.styleTagTransform = G()),
        (J.setAttributes = y()),
        (J.insert = w().bind(null, "head")),
        (J.domAPI = k()),
        (J.insertStyleElement = E()),
        f()(S.Z, J),
        S.Z && S.Z.locals && S.Z.locals);
    },
    47389: (i, r, t) => {
      t.d(r, { _: () => y });
      var e = t(50959),
        l = t(97754),
        o = t.n(l),
        n = t(69162);
      const a = JSON.parse('{"P":"label-15cmWyVp"}');
      var d = t(25211),
        c = t.n(d),
        h = t(62962),
        s = t.n(h),
        b = t(20310),
        u = t.n(b),
        m = t(29290),
        p = t.n(m),
        f = t(47289),
        g = t.n(f),
        k = t(24834),
        x = t.n(k),
        w = t(86566),
        v = {};
      function y(i) {
        const { htmlFor: r, children: t, className: l, id: d, ...c } = i;
        return e.createElement(
          n.OD,
          { ...c, className: o()(a.P, l) },
          e.createElement("label", { id: d, htmlFor: r }, t),
        );
      }
      ((v.styleTagTransform = x()),
        (v.setAttributes = p()),
        (v.insert = u().bind(null, "head")),
        (v.domAPI = s()),
        (v.insertStyleElement = g()),
        c()(w.Z, v),
        w.Z && w.Z.locals && w.Z.locals);
    },
    3318: (i, r, t) => {
      t.d(r, { n: () => e });
      const e =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M13.35 5.35a.5.5 0 0 0-.7-.7L9 8.29 5.35 4.65a.5.5 0 1 0-.7.7L8.29 9l-3.64 3.65a.5.5 0 0 0 .7.7L9 9.71l3.65 3.64a.5.5 0 0 0 .7-.7L9.71 9l3.64-3.65z" fill="currentColor"/></svg>';
    },
    869: (i, r, t) => {
      t.d(r, { j: () => e });
      const e =
        '<svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path d="M22.2 6.5 6.5 22.2l-.7-.7L21.5 5.8l.7.7ZM14 6c1.54 0 2.9.4 4.1 1l-.74.75A8 8 0 0 0 14 7c-3.05 0-5.42 1.76-7.07 3.59A17.13 17.13 0 0 0 4.56 14a17.13 17.13 0 0 0 2.77 3.84l-.7.7-.44-.45c-1.1-1.24-2-2.61-2.74-4.09a17.7 17.7 0 0 1 2.74-4.08C7.92 7.99 10.55 6 14 6ZM21.8 9.92l-.41-.45-.7.7.38.42c1.29 1.43 2.1 2.88 2.37 3.41-.27.53-1.08 1.98-2.37 3.42C19.42 19.24 17.05 21 14 21a7.99 7.99 0 0 1-3.35-.75L9.9 21c1.2.6 2.57 1 4.1 1 3.45 0 6.08-2 7.8-3.91 1.11-1.23 2.03-2.6 2.75-4.09a17.82 17.82 0 0 0-2.74-4.08Z" fill="currentColor"/><path d="M13.01 17.88A4 4 0 0 0 17.87 13l-.87.87V14a3 3 0 0 1-3.11 3l-.88.88ZM10.13 15.02l.87-.88V14a3 3 0 0 1 3.13-3l.87-.87a4 4 0 0 0-4.87 4.89Z" fill="currentColor"/></svg>';
    },
    40873: (i, r, t) => {
      t.d(r, { r: () => e });
      const e =
        '<svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path d="M21.8 9.92C20.09 7.99 17.46 6 14 6S7.92 8 6.2 9.92A17.7 17.7 0 0 0 3.44 14a18.56 18.56 0 0 0 2.74 4.08C7.92 20.01 10.55 22 14 22c3.45 0 6.08-2 7.8-3.92 1.11-1.22 2.03-2.6 2.75-4.08a17.82 17.82 0 0 0-2.74-4.08ZM14 21c-3.05 0-5.42-1.76-7.07-3.58A17.13 17.13 0 0 1 4.56 14c.27-.53 1.08-1.98 2.37-3.42C8.58 8.76 10.95 7 14 7c3.05 0 5.42 1.76 7.07 3.58 1.29 1.44 2.1 2.89 2.37 3.42-.27.53-1.08 1.98-2.37 3.42C19.42 19.24 17.05 21 14 21Z" fill="currentColor"/><path fill-rule="evenodd" d="M10 14a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm1 0a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z" fill="currentColor"/></svg>';
    },
    83432: (i, r, t) => {
      t.d(r, { P: () => e });
      const e =
        '<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 19C13 18.4477 13.4477 18 14 18C14.5523 18 15 18.4477 15 19C15 19.5523 14.5523 20 14 20C13.4477 20 13 19.5523 13 19Z" fill="currentColor"/><path d="M14.427 15.6225C14.3653 16.1261 13.6351 16.1261 13.5734 15.6225L12.8017 9.32695C12.7135 8.60724 13.2751 8 14.0002 8C14.7253 8 15.2868 8.60724 15.1986 9.32695L14.427 15.6225Z" fill="currentColor"/><path fill-rule="evenodd" d="M14 25C20.0751 25 25 20.0751 25 14C25 7.92487 20.0751 3 14 3C7.92487 3 3 7.92487 3 14C3 20.0751 7.92487 25 14 25ZM14 24C19.5228 24 24 19.5228 24 14C24 8.47715 19.5228 4 14 4C8.47715 4 4 8.47715 4 14C4 19.5228 8.47715 24 14 24Z" fill="currentColor"/></svg>';
    },
    47557: (i, r, t) => {
      t.d(r, { Z: () => a });
      var e = t(43392),
        l = t.n(e),
        o = t(8021),
        n = t.n(o)()(l());
      n.push([
        i.id,
        '.container-q0mjim9E:dir(ltr){align-items:center;border-color:var(--ui-lib-intent-color,#dbdbdb);border-radius:8px;border-style:solid;border-width:var(--ui-lib-control-border-width,1px);box-sizing:border-box;color:#0f0f0f;display:inline-flex;position:relative;--ui-lib-control-default-slot-color:#707070;height:var(--ui-lib-control-skeleton-height,auto)}html.theme-dark .container-q0mjim9E:dir(ltr){--ui-lib-control-default-slot-color:#8c8c8c}html.theme-dark .container-q0mjim9E:dir(ltr){color:#dbdbdb}html.theme-dark .container-q0mjim9E:dir(ltr){border-color:var(--ui-lib-intent-color,#575757)}.container-q0mjim9E.container-xxsmall-28przFI4:dir(ltr){border-radius:var(--ui-lib-buttonAnchor-border-radius,4px)}.container-q0mjim9E.container-xsmall-ZTAFSNng:dir(ltr){border-radius:var(--ui-lib-buttonAnchor-border-radius,6px)}.container-q0mjim9E.container-small-1keGnkP6:dir(ltr){border-radius:var(--ui-lib-buttonAnchor-border-radius,6px)}.container-q0mjim9E.container-medium-3wqHEUNK:dir(ltr){border-radius:var(--ui-lib-buttonAnchor-border-radius,8px)}.container-q0mjim9E.container-large-2Xg4gfyM:dir(ltr){border-radius:var(--ui-lib-buttonAnchor-border-radius,8px)}@media (any-hover:hover){.container-q0mjim9E.intent-default-1iFRsAl_:hover:dir(ltr){border-color:#a8a8a8;--ui-lib-control-default-slot-color:#0f0f0f}}@media (any-hover:hover){html.theme-dark .container-q0mjim9E.intent-default-1iFRsAl_:hover:dir(ltr){--ui-lib-control-default-slot-color:#dbdbdb}}@media (any-hover:hover){html.theme-dark .container-q0mjim9E.intent-default-1iFRsAl_:hover:dir(ltr){border-color:#707070}}.container-q0mjim9E.focused-3_QrLayY:dir(ltr){border-color:#2962ff}@media (any-hover:hover){.container-q0mjim9E.focused-3_QrLayY:hover:dir(ltr){border-color:#2962ff}}html.theme-dark .container-q0mjim9E.focused-3_QrLayY:dir(ltr){border-color:#2962ff}@media (any-hover:hover){html.theme-dark .container-q0mjim9E.focused-3_QrLayY:hover:dir(ltr){border-color:#2962ff}}.container-q0mjim9E.readonly-2O87siLj:dir(ltr){background-color:#f2f2f2;border-color:#dbdbdb}@media (any-hover:hover){.container-q0mjim9E.readonly-2O87siLj:hover:dir(ltr){background-color:#f2f2f2;border-color:#dbdbdb}}html.theme-dark .container-q0mjim9E.readonly-2O87siLj:dir(ltr){background-color:#2e2e2e}@media (any-hover:hover){html.theme-dark .container-q0mjim9E.readonly-2O87siLj:hover:dir(ltr){background-color:#2e2e2e}}html.theme-dark .container-q0mjim9E.readonly-2O87siLj:dir(ltr){border-color:#575757}@media (any-hover:hover){html.theme-dark .container-q0mjim9E.readonly-2O87siLj:hover:dir(ltr){border-color:#575757}}.container-q0mjim9E.disabled-1IdBwvKU:dir(ltr){background-color:#f2f2f2;border-color:#dbdbdb;color:#707070;--ui-lib-control-text-fill-color:#707070;--ui-lib-control-default-slot-color:#707070}@media (any-hover:hover){.container-q0mjim9E.disabled-1IdBwvKU:hover:dir(ltr){background-color:#f2f2f2;border-color:#dbdbdb;color:#707070;--ui-lib-control-text-fill-color:#707070;--ui-lib-control-default-slot-color:#707070}}html.theme-dark .container-q0mjim9E.disabled-1IdBwvKU:dir(ltr){--ui-lib-control-default-slot-color:#8c8c8c}@media (any-hover:hover){html.theme-dark .container-q0mjim9E.disabled-1IdBwvKU:hover:dir(ltr){--ui-lib-control-default-slot-color:#8c8c8c}}html.theme-dark .container-q0mjim9E.disabled-1IdBwvKU:dir(ltr){--ui-lib-control-text-fill-color:#575757}@media (any-hover:hover){html.theme-dark .container-q0mjim9E.disabled-1IdBwvKU:hover:dir(ltr){--ui-lib-control-text-fill-color:#575757}}html.theme-dark .container-q0mjim9E.disabled-1IdBwvKU:dir(ltr){color:#575757}@media (any-hover:hover){html.theme-dark .container-q0mjim9E.disabled-1IdBwvKU:hover:dir(ltr){color:#575757}}html.theme-dark .container-q0mjim9E.disabled-1IdBwvKU:dir(ltr){background-color:#2e2e2e}@media (any-hover:hover){html.theme-dark .container-q0mjim9E.disabled-1IdBwvKU:hover:dir(ltr){background-color:#2e2e2e}}html.theme-dark .container-q0mjim9E.disabled-1IdBwvKU:dir(ltr){border-color:#575757}@media (any-hover:hover){html.theme-dark .container-q0mjim9E.disabled-1IdBwvKU:hover:dir(ltr){border-color:#575757}}.container-q0mjim9E.with-highlight-1fw5sABK.focused-3_QrLayY:dir(ltr),.container-q0mjim9E.with-highlight-1fw5sABK:dir(ltr){border-color:#dbdbdb;outline:none}@media (any-hover:hover){.container-q0mjim9E.with-highlight-1fw5sABK:hover:dir(ltr){border-color:#dbdbdb;outline:none}}html.theme-dark .container-q0mjim9E.with-highlight-1fw5sABK.focused-3_QrLayY:dir(ltr),html.theme-dark .container-q0mjim9E.with-highlight-1fw5sABK:dir(ltr){border-color:#575757}@media (any-hover:hover){html.theme-dark .container-q0mjim9E.with-highlight-1fw5sABK:hover:dir(ltr){border-color:#575757}}.container-q0mjim9E.grouped-OqOAs_gO.adjust-position-CZNDwrAs:not(.first-row-1TtmkJB5):dir(ltr){margin-top:calc(var(--ui-lib-control-border-width, 1px)*-1)}.container-q0mjim9E.grouped-OqOAs_gO.adjust-position-CZNDwrAs:not(.first-col-3gkQgeTB):dir(ltr){margin-left:calc(var(--ui-lib-control-border-width, 1px)*-1)}@media (any-hover:hover){.container-q0mjim9E.grouped-OqOAs_gO:hover:dir(ltr){z-index:1}}.container-q0mjim9E.grouped-OqOAs_gO.focused-3_QrLayY:dir(ltr){z-index:2}.container-q0mjim9E.stretch-1ZwMxhiW:dir(ltr){width:100%}.container-q0mjim9E.font-size-medium-2X_Vsy16:dir(ltr){font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;font-style:normal;--ui-lib-typography-font-size:14px;font-size:var(--ui-lib-typography-font-size);font-weight:400;--ui-lib-typography-line-height:18px;line-height:var(--ui-lib-typography-line-height)}.container-q0mjim9E.font-size-large-3XsO4Jyv:dir(ltr){font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;font-style:normal;--ui-lib-typography-font-size:16px;font-size:var(--ui-lib-typography-font-size);font-weight:400;--ui-lib-typography-line-height:24px;line-height:var(--ui-lib-typography-line-height)}.container-q0mjim9E.no-corner-top-left-1CiWWKym:dir(ltr){border-top-left-radius:0}.container-q0mjim9E.no-corner-top-right-3FhGiM-K:dir(ltr){border-top-right-radius:0}.container-q0mjim9E.no-corner-bottom-right-7_q0YPc_:dir(ltr){border-bottom-right-radius:0}.container-q0mjim9E.no-corner-bottom-left-3MCGXDki:dir(ltr){border-bottom-left-radius:0}.size-xxsmall-3PBCOFHd:dir(ltr){--ui-lib-control-skeleton-height:24px;border-radius:4px}.size-xsmall-60W28scv:dir(ltr){--ui-lib-control-skeleton-height:28px;border-radius:6px}.size-small-1yttw7pF:dir(ltr){--ui-lib-control-skeleton-height:34px;border-radius:6px}.size-medium-JO0bzDKQ:dir(ltr){--ui-lib-control-skeleton-height:40px;border-radius:8px}.size-large-3NHYwkZf:dir(ltr){--ui-lib-control-skeleton-height:48px;border-radius:8px}.intent-default-1iFRsAl_:dir(ltr){--ui-lib-intent-color:#dbdbdb;--ui-lib-intent-highlight-color:#b8b8b8}html.theme-dark .intent-default-1iFRsAl_:dir(ltr){--ui-lib-intent-highlight-color:#8c8c8c}html.theme-dark .intent-default-1iFRsAl_:dir(ltr){--ui-lib-intent-color:#575757}.intent-success-3d9hoQq6:dir(ltr){--ui-lib-intent-color:#089981;--ui-lib-intent-highlight-color:#089981}html.theme-dark .intent-success-3d9hoQq6:dir(ltr){--ui-lib-intent-color:#089981}.intent-warning-2R7B-fcl:dir(ltr){--ui-lib-intent-color:#ff9800;--ui-lib-intent-highlight-color:#ff9800}html.theme-dark .intent-warning-2R7B-fcl:dir(ltr){--ui-lib-intent-color:#ff9800}.intent-danger-2aIQ0kCh:dir(ltr){--ui-lib-intent-color:#f23645;--ui-lib-intent-highlight-color:#f23645}html.theme-dark .intent-danger-2aIQ0kCh:dir(ltr){--ui-lib-intent-color:#f23645}.intent-primary-1uA2IWJE:dir(ltr){--ui-lib-intent-color:#2962ff;--ui-lib-intent-highlight-color:#2962ff}html.theme-dark .intent-primary-1uA2IWJE:dir(ltr){--ui-lib-intent-color:#2962ff}.border-none-1THKKmlu:dir(ltr){--ui-lib-control-border-width:0px}.border-thin-xydp6U9V:dir(ltr){--ui-lib-control-border-width:1px}.border-thick-2gyRxvRu:dir(ltr){--ui-lib-control-border-width:2px}.highlight-1k6YPfiQ:dir(ltr){border:2px solid;border-color:var(--ui-lib-intent-highlight-color,#b8b8b8);border-radius:var(--ui-lib-control-highlight-border-radius,8px);bottom:0;left:0;margin:calc(var(--ui-lib-control-border-width, 1px)*-1);pointer-events:none;position:absolute;right:0;top:0;visibility:hidden;z-index:3}html.theme-dark .highlight-1k6YPfiQ:dir(ltr){border-color:var(--ui-lib-intent-highlight-color,#8c8c8c)}.highlight-1k6YPfiQ.shown-2dwiJlCW:dir(ltr){visibility:visible}.highlight-1k6YPfiQ.no-corner-top-left-1CiWWKym:dir(ltr){border-top-left-radius:0}.highlight-1k6YPfiQ.no-corner-top-right-3FhGiM-K:dir(ltr){border-top-right-radius:0}.highlight-1k6YPfiQ.no-corner-bottom-right-7_q0YPc_:dir(ltr){border-bottom-right-radius:0}.highlight-1k6YPfiQ.no-corner-bottom-left-3MCGXDki:dir(ltr){border-bottom-left-radius:0}.highlight-1k6YPfiQ.size-xxsmall-3PBCOFHd:dir(ltr){border-radius:4px}.highlight-1k6YPfiQ.size-xxsmall-3PBCOFHd.no-corner-top-left-1CiWWKym:dir(ltr){border-top-left-radius:0}.highlight-1k6YPfiQ.size-xxsmall-3PBCOFHd.no-corner-top-right-3FhGiM-K:dir(ltr){border-top-right-radius:0}.highlight-1k6YPfiQ.size-xxsmall-3PBCOFHd.no-corner-bottom-right-7_q0YPc_:dir(ltr){border-bottom-right-radius:0}.highlight-1k6YPfiQ.size-xxsmall-3PBCOFHd.no-corner-bottom-left-3MCGXDki:dir(ltr){border-bottom-left-radius:0}.highlight-1k6YPfiQ.size-xsmall-60W28scv:dir(ltr){border-radius:6px}.highlight-1k6YPfiQ.size-xsmall-60W28scv.no-corner-top-left-1CiWWKym:dir(ltr){border-top-left-radius:0}.highlight-1k6YPfiQ.size-xsmall-60W28scv.no-corner-top-right-3FhGiM-K:dir(ltr){border-top-right-radius:0}.highlight-1k6YPfiQ.size-xsmall-60W28scv.no-corner-bottom-right-7_q0YPc_:dir(ltr){border-bottom-right-radius:0}.highlight-1k6YPfiQ.size-xsmall-60W28scv.no-corner-bottom-left-3MCGXDki:dir(ltr){border-bottom-left-radius:0}.highlight-1k6YPfiQ.size-small-1yttw7pF:dir(ltr){border-radius:6px}.highlight-1k6YPfiQ.size-small-1yttw7pF.no-corner-top-left-1CiWWKym:dir(ltr){border-top-left-radius:0}.highlight-1k6YPfiQ.size-small-1yttw7pF.no-corner-top-right-3FhGiM-K:dir(ltr){border-top-right-radius:0}.highlight-1k6YPfiQ.size-small-1yttw7pF.no-corner-bottom-right-7_q0YPc_:dir(ltr){border-bottom-right-radius:0}.highlight-1k6YPfiQ.size-small-1yttw7pF.no-corner-bottom-left-3MCGXDki:dir(ltr){border-bottom-left-radius:0}.highlight-1k6YPfiQ.size-medium-JO0bzDKQ:dir(ltr){border-radius:8px}.highlight-1k6YPfiQ.size-medium-JO0bzDKQ.no-corner-top-left-1CiWWKym:dir(ltr){border-top-left-radius:0}.highlight-1k6YPfiQ.size-medium-JO0bzDKQ.no-corner-top-right-3FhGiM-K:dir(ltr){border-top-right-radius:0}.highlight-1k6YPfiQ.size-medium-JO0bzDKQ.no-corner-bottom-right-7_q0YPc_:dir(ltr){border-bottom-right-radius:0}.highlight-1k6YPfiQ.size-medium-JO0bzDKQ.no-corner-bottom-left-3MCGXDki:dir(ltr){border-bottom-left-radius:0}.highlight-1k6YPfiQ.size-large-3NHYwkZf:dir(ltr){border-radius:8px}.highlight-1k6YPfiQ.size-large-3NHYwkZf.no-corner-top-left-1CiWWKym:dir(ltr){border-top-left-radius:0}.highlight-1k6YPfiQ.size-large-3NHYwkZf.no-corner-top-right-3FhGiM-K:dir(ltr){border-top-right-radius:0}.highlight-1k6YPfiQ.size-large-3NHYwkZf.no-corner-bottom-right-7_q0YPc_:dir(ltr){border-bottom-right-radius:0}.highlight-1k6YPfiQ.size-large-3NHYwkZf.no-corner-bottom-left-3MCGXDki:dir(ltr){border-bottom-left-radius:0}.container-q0mjim9E:dir(rtl){align-items:center;border-color:var(--ui-lib-intent-color,#dbdbdb);border-radius:8px;border-style:solid;border-width:var(--ui-lib-control-border-width,1px);box-sizing:border-box;color:#0f0f0f;display:inline-flex;position:relative;--ui-lib-control-default-slot-color:#707070;height:var(--ui-lib-control-skeleton-height,auto)}html.theme-dark .container-q0mjim9E:dir(rtl){--ui-lib-control-default-slot-color:#8c8c8c}html.theme-dark .container-q0mjim9E:dir(rtl){color:#dbdbdb}html.theme-dark .container-q0mjim9E:dir(rtl){border-color:var(--ui-lib-intent-color,#575757)}.container-q0mjim9E.container-xxsmall-28przFI4:dir(rtl){border-radius:var(--ui-lib-buttonAnchor-border-radius,4px)}.container-q0mjim9E.container-xsmall-ZTAFSNng:dir(rtl){border-radius:var(--ui-lib-buttonAnchor-border-radius,6px)}.container-q0mjim9E.container-small-1keGnkP6:dir(rtl){border-radius:var(--ui-lib-buttonAnchor-border-radius,6px)}.container-q0mjim9E.container-medium-3wqHEUNK:dir(rtl){border-radius:var(--ui-lib-buttonAnchor-border-radius,8px)}.container-q0mjim9E.container-large-2Xg4gfyM:dir(rtl){border-radius:var(--ui-lib-buttonAnchor-border-radius,8px)}@media (any-hover:hover){.container-q0mjim9E.intent-default-1iFRsAl_:hover:dir(rtl){border-color:#a8a8a8;--ui-lib-control-default-slot-color:#0f0f0f}}@media (any-hover:hover){html.theme-dark .container-q0mjim9E.intent-default-1iFRsAl_:hover:dir(rtl){--ui-lib-control-default-slot-color:#dbdbdb}}@media (any-hover:hover){html.theme-dark .container-q0mjim9E.intent-default-1iFRsAl_:hover:dir(rtl){border-color:#707070}}.container-q0mjim9E.focused-3_QrLayY:dir(rtl){border-color:#2962ff}@media (any-hover:hover){.container-q0mjim9E.focused-3_QrLayY:hover:dir(rtl){border-color:#2962ff}}html.theme-dark .container-q0mjim9E.focused-3_QrLayY:dir(rtl){border-color:#2962ff}@media (any-hover:hover){html.theme-dark .container-q0mjim9E.focused-3_QrLayY:hover:dir(rtl){border-color:#2962ff}}.container-q0mjim9E.readonly-2O87siLj:dir(rtl){background-color:#f2f2f2;border-color:#dbdbdb}@media (any-hover:hover){.container-q0mjim9E.readonly-2O87siLj:hover:dir(rtl){background-color:#f2f2f2;border-color:#dbdbdb}}html.theme-dark .container-q0mjim9E.readonly-2O87siLj:dir(rtl){background-color:#2e2e2e}@media (any-hover:hover){html.theme-dark .container-q0mjim9E.readonly-2O87siLj:hover:dir(rtl){background-color:#2e2e2e}}html.theme-dark .container-q0mjim9E.readonly-2O87siLj:dir(rtl){border-color:#575757}@media (any-hover:hover){html.theme-dark .container-q0mjim9E.readonly-2O87siLj:hover:dir(rtl){border-color:#575757}}.container-q0mjim9E.disabled-1IdBwvKU:dir(rtl){background-color:#f2f2f2;border-color:#dbdbdb;color:#707070;--ui-lib-control-text-fill-color:#707070;--ui-lib-control-default-slot-color:#707070}@media (any-hover:hover){.container-q0mjim9E.disabled-1IdBwvKU:hover:dir(rtl){background-color:#f2f2f2;border-color:#dbdbdb;color:#707070;--ui-lib-control-text-fill-color:#707070;--ui-lib-control-default-slot-color:#707070}}html.theme-dark .container-q0mjim9E.disabled-1IdBwvKU:dir(rtl){--ui-lib-control-default-slot-color:#8c8c8c}@media (any-hover:hover){html.theme-dark .container-q0mjim9E.disabled-1IdBwvKU:hover:dir(rtl){--ui-lib-control-default-slot-color:#8c8c8c}}html.theme-dark .container-q0mjim9E.disabled-1IdBwvKU:dir(rtl){--ui-lib-control-text-fill-color:#575757}@media (any-hover:hover){html.theme-dark .container-q0mjim9E.disabled-1IdBwvKU:hover:dir(rtl){--ui-lib-control-text-fill-color:#575757}}html.theme-dark .container-q0mjim9E.disabled-1IdBwvKU:dir(rtl){color:#575757}@media (any-hover:hover){html.theme-dark .container-q0mjim9E.disabled-1IdBwvKU:hover:dir(rtl){color:#575757}}html.theme-dark .container-q0mjim9E.disabled-1IdBwvKU:dir(rtl){background-color:#2e2e2e}@media (any-hover:hover){html.theme-dark .container-q0mjim9E.disabled-1IdBwvKU:hover:dir(rtl){background-color:#2e2e2e}}html.theme-dark .container-q0mjim9E.disabled-1IdBwvKU:dir(rtl){border-color:#575757}@media (any-hover:hover){html.theme-dark .container-q0mjim9E.disabled-1IdBwvKU:hover:dir(rtl){border-color:#575757}}.container-q0mjim9E.with-highlight-1fw5sABK.focused-3_QrLayY:dir(rtl),.container-q0mjim9E.with-highlight-1fw5sABK:dir(rtl){border-color:#dbdbdb;outline:none}@media (any-hover:hover){.container-q0mjim9E.with-highlight-1fw5sABK:hover:dir(rtl){border-color:#dbdbdb;outline:none}}html.theme-dark .container-q0mjim9E.with-highlight-1fw5sABK.focused-3_QrLayY:dir(rtl),html.theme-dark .container-q0mjim9E.with-highlight-1fw5sABK:dir(rtl){border-color:#575757}@media (any-hover:hover){html.theme-dark .container-q0mjim9E.with-highlight-1fw5sABK:hover:dir(rtl){border-color:#575757}}.container-q0mjim9E.grouped-OqOAs_gO.adjust-position-CZNDwrAs:not(.first-row-1TtmkJB5):dir(rtl){margin-top:calc(var(--ui-lib-control-border-width, 1px)*-1)}.container-q0mjim9E.grouped-OqOAs_gO.adjust-position-CZNDwrAs:not(.first-col-3gkQgeTB):dir(rtl){margin-right:calc(var(--ui-lib-control-border-width, 1px)*-1)}@media (any-hover:hover){.container-q0mjim9E.grouped-OqOAs_gO:hover:dir(rtl){z-index:1}}.container-q0mjim9E.grouped-OqOAs_gO.focused-3_QrLayY:dir(rtl){z-index:2}.container-q0mjim9E.stretch-1ZwMxhiW:dir(rtl){width:100%}.container-q0mjim9E.font-size-medium-2X_Vsy16:dir(rtl){font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;font-style:normal;--ui-lib-typography-font-size:14px;font-size:var(--ui-lib-typography-font-size);font-weight:400;--ui-lib-typography-line-height:18px;line-height:var(--ui-lib-typography-line-height)}.container-q0mjim9E.font-size-large-3XsO4Jyv:dir(rtl){font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;font-style:normal;--ui-lib-typography-font-size:16px;font-size:var(--ui-lib-typography-font-size);font-weight:400;--ui-lib-typography-line-height:24px;line-height:var(--ui-lib-typography-line-height)}.container-q0mjim9E.no-corner-top-left-1CiWWKym:dir(rtl){border-top-right-radius:0}.container-q0mjim9E.no-corner-top-right-3FhGiM-K:dir(rtl){border-top-left-radius:0}.container-q0mjim9E.no-corner-bottom-right-7_q0YPc_:dir(rtl){border-bottom-left-radius:0}.container-q0mjim9E.no-corner-bottom-left-3MCGXDki:dir(rtl){border-bottom-right-radius:0}.size-xxsmall-3PBCOFHd:dir(rtl){--ui-lib-control-skeleton-height:24px;border-radius:4px}.size-xsmall-60W28scv:dir(rtl){--ui-lib-control-skeleton-height:28px;border-radius:6px}.size-small-1yttw7pF:dir(rtl){--ui-lib-control-skeleton-height:34px;border-radius:6px}.size-medium-JO0bzDKQ:dir(rtl){--ui-lib-control-skeleton-height:40px;border-radius:8px}.size-large-3NHYwkZf:dir(rtl){--ui-lib-control-skeleton-height:48px;border-radius:8px}.intent-default-1iFRsAl_:dir(rtl){--ui-lib-intent-color:#dbdbdb;--ui-lib-intent-highlight-color:#b8b8b8}html.theme-dark .intent-default-1iFRsAl_:dir(rtl){--ui-lib-intent-highlight-color:#8c8c8c}html.theme-dark .intent-default-1iFRsAl_:dir(rtl){--ui-lib-intent-color:#575757}.intent-success-3d9hoQq6:dir(rtl){--ui-lib-intent-color:#089981;--ui-lib-intent-highlight-color:#089981}html.theme-dark .intent-success-3d9hoQq6:dir(rtl){--ui-lib-intent-color:#089981}.intent-warning-2R7B-fcl:dir(rtl){--ui-lib-intent-color:#ff9800;--ui-lib-intent-highlight-color:#ff9800}html.theme-dark .intent-warning-2R7B-fcl:dir(rtl){--ui-lib-intent-color:#ff9800}.intent-danger-2aIQ0kCh:dir(rtl){--ui-lib-intent-color:#f23645;--ui-lib-intent-highlight-color:#f23645}html.theme-dark .intent-danger-2aIQ0kCh:dir(rtl){--ui-lib-intent-color:#f23645}.intent-primary-1uA2IWJE:dir(rtl){--ui-lib-intent-color:#2962ff;--ui-lib-intent-highlight-color:#2962ff}html.theme-dark .intent-primary-1uA2IWJE:dir(rtl){--ui-lib-intent-color:#2962ff}.border-none-1THKKmlu:dir(rtl){--ui-lib-control-border-width:0px}.border-thin-xydp6U9V:dir(rtl){--ui-lib-control-border-width:1px}.border-thick-2gyRxvRu:dir(rtl){--ui-lib-control-border-width:2px}.highlight-1k6YPfiQ:dir(rtl){border:2px solid;border-color:var(--ui-lib-intent-highlight-color,#b8b8b8);border-radius:var(--ui-lib-control-highlight-border-radius,8px);bottom:0;left:0;margin:calc(var(--ui-lib-control-border-width, 1px)*-1);pointer-events:none;position:absolute;right:0;top:0;visibility:hidden;z-index:3}html.theme-dark .highlight-1k6YPfiQ:dir(rtl){border-color:var(--ui-lib-intent-highlight-color,#8c8c8c)}.highlight-1k6YPfiQ.shown-2dwiJlCW:dir(rtl){visibility:visible}.highlight-1k6YPfiQ.no-corner-top-left-1CiWWKym:dir(rtl){border-top-right-radius:0}.highlight-1k6YPfiQ.no-corner-top-right-3FhGiM-K:dir(rtl){border-top-left-radius:0}.highlight-1k6YPfiQ.no-corner-bottom-right-7_q0YPc_:dir(rtl){border-bottom-left-radius:0}.highlight-1k6YPfiQ.no-corner-bottom-left-3MCGXDki:dir(rtl){border-bottom-right-radius:0}.highlight-1k6YPfiQ.size-xxsmall-3PBCOFHd:dir(rtl){border-radius:4px}.highlight-1k6YPfiQ.size-xxsmall-3PBCOFHd.no-corner-top-left-1CiWWKym:dir(rtl){border-top-right-radius:0}.highlight-1k6YPfiQ.size-xxsmall-3PBCOFHd.no-corner-top-right-3FhGiM-K:dir(rtl){border-top-left-radius:0}.highlight-1k6YPfiQ.size-xxsmall-3PBCOFHd.no-corner-bottom-right-7_q0YPc_:dir(rtl){border-bottom-left-radius:0}.highlight-1k6YPfiQ.size-xxsmall-3PBCOFHd.no-corner-bottom-left-3MCGXDki:dir(rtl){border-bottom-right-radius:0}.highlight-1k6YPfiQ.size-xsmall-60W28scv:dir(rtl){border-radius:6px}.highlight-1k6YPfiQ.size-xsmall-60W28scv.no-corner-top-left-1CiWWKym:dir(rtl){border-top-right-radius:0}.highlight-1k6YPfiQ.size-xsmall-60W28scv.no-corner-top-right-3FhGiM-K:dir(rtl){border-top-left-radius:0}.highlight-1k6YPfiQ.size-xsmall-60W28scv.no-corner-bottom-right-7_q0YPc_:dir(rtl){border-bottom-left-radius:0}.highlight-1k6YPfiQ.size-xsmall-60W28scv.no-corner-bottom-left-3MCGXDki:dir(rtl){border-bottom-right-radius:0}.highlight-1k6YPfiQ.size-small-1yttw7pF:dir(rtl){border-radius:6px}.highlight-1k6YPfiQ.size-small-1yttw7pF.no-corner-top-left-1CiWWKym:dir(rtl){border-top-right-radius:0}.highlight-1k6YPfiQ.size-small-1yttw7pF.no-corner-top-right-3FhGiM-K:dir(rtl){border-top-left-radius:0}.highlight-1k6YPfiQ.size-small-1yttw7pF.no-corner-bottom-right-7_q0YPc_:dir(rtl){border-bottom-left-radius:0}.highlight-1k6YPfiQ.size-small-1yttw7pF.no-corner-bottom-left-3MCGXDki:dir(rtl){border-bottom-right-radius:0}.highlight-1k6YPfiQ.size-medium-JO0bzDKQ:dir(rtl){border-radius:8px}.highlight-1k6YPfiQ.size-medium-JO0bzDKQ.no-corner-top-left-1CiWWKym:dir(rtl){border-top-right-radius:0}.highlight-1k6YPfiQ.size-medium-JO0bzDKQ.no-corner-top-right-3FhGiM-K:dir(rtl){border-top-left-radius:0}.highlight-1k6YPfiQ.size-medium-JO0bzDKQ.no-corner-bottom-right-7_q0YPc_:dir(rtl){border-bottom-left-radius:0}.highlight-1k6YPfiQ.size-medium-JO0bzDKQ.no-corner-bottom-left-3MCGXDki:dir(rtl){border-bottom-right-radius:0}.highlight-1k6YPfiQ.size-large-3NHYwkZf:dir(rtl){border-radius:8px}.highlight-1k6YPfiQ.size-large-3NHYwkZf.no-corner-top-left-1CiWWKym:dir(rtl){border-top-right-radius:0}.highlight-1k6YPfiQ.size-large-3NHYwkZf.no-corner-top-right-3FhGiM-K:dir(rtl){border-top-left-radius:0}.highlight-1k6YPfiQ.size-large-3NHYwkZf.no-corner-bottom-right-7_q0YPc_:dir(rtl){border-bottom-left-radius:0}.highlight-1k6YPfiQ.size-large-3NHYwkZf.no-corner-bottom-left-3MCGXDki:dir(rtl){border-bottom-right-radius:0}',
        "",
      ]);
      const a = n;
    },
    45023: (i, r, t) => {
      t.d(r, { Z: () => a });
      var e = t(43392),
        l = t.n(e),
        o = t(8021),
        n = t.n(o)()(l());
      n.push([
        i.id,
        ".inner-slot-2OKMGqSc:dir(ltr){--ui-lib-control-inner-slot-gap:2px;align-items:center;box-sizing:border-box;display:flex;flex-shrink:0;height:calc(100% - (3px - var(--ui-lib-control-border-width, 1px))*2);justify-content:center;margin-bottom:calc(3px - var(--ui-lib-control-border-width, 1px));margin-right:var(--ui-lib-control-inner-slot-gap,2px);margin-top:calc(3px - var(--ui-lib-control-border-width, 1px));overflow:hidden}.inner-slot-2OKMGqSc:first-child:dir(ltr){margin-left:calc(3px - var(--ui-lib-control-border-width, 1px))}.inner-slot-2OKMGqSc:nth-last-child(2):dir(ltr){margin-right:calc(3px - var(--ui-lib-control-border-width, 1px))}.inner-slot-2OKMGqSc.interactive-3SE8kqul:dir(ltr){color:var(--ui-lib-control-default-slot-color,currentColor)}.inner-slot-2OKMGqSc.icon-2tguASdP:dir(ltr){flex:none;width:28px}.inner-middle-slot-FxLdcHA0:dir(ltr){flex:1 1 auto}.before-slot-3KAG-INy:dir(ltr){display:flex;margin-bottom:2px}.after-slot-34RFQaLb:dir(ltr){display:flex;margin-top:4px}.inner-slot-2OKMGqSc:dir(rtl){--ui-lib-control-inner-slot-gap:2px;align-items:center;box-sizing:border-box;display:flex;flex-shrink:0;height:calc(100% - (3px - var(--ui-lib-control-border-width, 1px))*2);justify-content:center;margin-bottom:calc(3px - var(--ui-lib-control-border-width, 1px));margin-left:var(--ui-lib-control-inner-slot-gap,2px);margin-top:calc(3px - var(--ui-lib-control-border-width, 1px));overflow:hidden}.inner-slot-2OKMGqSc:first-child:dir(rtl){margin-right:calc(3px - var(--ui-lib-control-border-width, 1px))}.inner-slot-2OKMGqSc:nth-last-child(2):dir(rtl){margin-left:calc(3px - var(--ui-lib-control-border-width, 1px))}.inner-slot-2OKMGqSc.interactive-3SE8kqul:dir(rtl){color:var(--ui-lib-control-default-slot-color,currentColor)}.inner-slot-2OKMGqSc.icon-2tguASdP:dir(rtl){flex:none;width:28px}.inner-middle-slot-FxLdcHA0:dir(rtl){flex:1 1 auto}.before-slot-3KAG-INy:dir(rtl){display:flex;margin-bottom:2px}.after-slot-34RFQaLb:dir(rtl){display:flex;margin-top:4px}",
        "",
      ]);
      const a = n;
    },
    64016: (i, r, t) => {
      t.d(r, { Z: () => a });
      var e = t(43392),
        l = t.n(e),
        o = t(8021),
        n = t.n(o)()(l());
      n.push([
        i.id,
        ".input-3bEGcMc9:dir(ltr){padding:0 calc(8px - var(--ui-lib-control-border-width, 2px) - var(--ui-lib-control-inner-slot-gap, 2px))}.input-3bEGcMc9.size-xxsmall-27e6wS6H:dir(ltr){-webkit-appearance:auto;appearance:textfield;background-color:initial;border:0;display:block;height:100%;margin:0;min-width:0;outline:0;width:100%;-webkit-text-fill-color:var(--ui-lib-control-text-fill-color,currentColor);font-family:inherit;font-size:inherit;line-height:inherit;order:0}.input-3bEGcMc9.size-xxsmall-27e6wS6H:dir(ltr)::placeholder{color:#707070;-webkit-text-fill-color:currentColor;opacity:1}html.theme-dark .input-3bEGcMc9.size-xxsmall-27e6wS6H:dir(ltr)::placeholder{color:#8c8c8c}.input-3bEGcMc9.size-xxsmall-27e6wS6H:dir(ltr)::-webkit-calendar-picker-indicator,.input-3bEGcMc9.size-xxsmall-27e6wS6H:dir(ltr)::-webkit-clear-button,.input-3bEGcMc9.size-xxsmall-27e6wS6H:dir(ltr)::-webkit-inner-spin-button,.input-3bEGcMc9.size-xxsmall-27e6wS6H:dir(ltr)::-webkit-outer-spin-button,.input-3bEGcMc9.size-xxsmall-27e6wS6H:dir(ltr)::-webkit-search-cancel-button{-webkit-appearance:none;appearance:none}.input-3bEGcMc9.size-xxsmall-27e6wS6H:-webkit-autofill:active:dir(ltr),.input-3bEGcMc9.size-xxsmall-27e6wS6H:-webkit-autofill:dir(ltr),.input-3bEGcMc9.size-xxsmall-27e6wS6H:-webkit-autofill:focus:dir(ltr){border-radius:2px}@media (any-hover:hover){.input-3bEGcMc9.size-xxsmall-27e6wS6H:-webkit-autofill:hover:dir(ltr){border-radius:2px}}html.theme-dark .input-3bEGcMc9.size-xxsmall-27e6wS6H:dir(ltr)::-webkit-calendar-picker-indicator{filter:invert(1)}.input-3bEGcMc9.size-xsmall-1_VJDaNU:dir(ltr){-webkit-appearance:auto;appearance:textfield;background-color:initial;border:0;display:block;height:100%;margin:0;min-width:0;outline:0;width:100%;-webkit-text-fill-color:var(--ui-lib-control-text-fill-color,currentColor);font-family:inherit;font-size:inherit;line-height:inherit;order:0}.input-3bEGcMc9.size-xsmall-1_VJDaNU:dir(ltr)::placeholder{color:#707070;-webkit-text-fill-color:currentColor;opacity:1}html.theme-dark .input-3bEGcMc9.size-xsmall-1_VJDaNU:dir(ltr)::placeholder{color:#8c8c8c}.input-3bEGcMc9.size-xsmall-1_VJDaNU:dir(ltr)::-webkit-calendar-picker-indicator,.input-3bEGcMc9.size-xsmall-1_VJDaNU:dir(ltr)::-webkit-clear-button,.input-3bEGcMc9.size-xsmall-1_VJDaNU:dir(ltr)::-webkit-inner-spin-button,.input-3bEGcMc9.size-xsmall-1_VJDaNU:dir(ltr)::-webkit-outer-spin-button,.input-3bEGcMc9.size-xsmall-1_VJDaNU:dir(ltr)::-webkit-search-cancel-button{-webkit-appearance:none;appearance:none}.input-3bEGcMc9.size-xsmall-1_VJDaNU:-webkit-autofill:active:dir(ltr),.input-3bEGcMc9.size-xsmall-1_VJDaNU:-webkit-autofill:dir(ltr),.input-3bEGcMc9.size-xsmall-1_VJDaNU:-webkit-autofill:focus:dir(ltr){border-radius:4px}@media (any-hover:hover){.input-3bEGcMc9.size-xsmall-1_VJDaNU:-webkit-autofill:hover:dir(ltr){border-radius:4px}}html.theme-dark .input-3bEGcMc9.size-xsmall-1_VJDaNU:dir(ltr)::-webkit-calendar-picker-indicator{filter:invert(1)}.input-3bEGcMc9.size-small-1b3jdGP_:dir(ltr){-webkit-appearance:auto;appearance:textfield;background-color:initial;border:0;display:block;height:100%;margin:0;min-width:0;outline:0;width:100%;-webkit-text-fill-color:var(--ui-lib-control-text-fill-color,currentColor);font-family:inherit;font-size:inherit;line-height:inherit;order:0}.input-3bEGcMc9.size-small-1b3jdGP_:dir(ltr)::placeholder{color:#707070;-webkit-text-fill-color:currentColor;opacity:1}html.theme-dark .input-3bEGcMc9.size-small-1b3jdGP_:dir(ltr)::placeholder{color:#8c8c8c}.input-3bEGcMc9.size-small-1b3jdGP_:dir(ltr)::-webkit-calendar-picker-indicator,.input-3bEGcMc9.size-small-1b3jdGP_:dir(ltr)::-webkit-clear-button,.input-3bEGcMc9.size-small-1b3jdGP_:dir(ltr)::-webkit-inner-spin-button,.input-3bEGcMc9.size-small-1b3jdGP_:dir(ltr)::-webkit-outer-spin-button,.input-3bEGcMc9.size-small-1b3jdGP_:dir(ltr)::-webkit-search-cancel-button{-webkit-appearance:none;appearance:none}.input-3bEGcMc9.size-small-1b3jdGP_:-webkit-autofill:active:dir(ltr),.input-3bEGcMc9.size-small-1b3jdGP_:-webkit-autofill:dir(ltr),.input-3bEGcMc9.size-small-1b3jdGP_:-webkit-autofill:focus:dir(ltr){border-radius:4px}@media (any-hover:hover){.input-3bEGcMc9.size-small-1b3jdGP_:-webkit-autofill:hover:dir(ltr){border-radius:4px}}html.theme-dark .input-3bEGcMc9.size-small-1b3jdGP_:dir(ltr)::-webkit-calendar-picker-indicator{filter:invert(1)}.input-3bEGcMc9.size-medium-1L1JkxT_:dir(ltr){-webkit-appearance:auto;appearance:textfield;background-color:initial;border:0;display:block;height:100%;margin:0;min-width:0;outline:0;width:100%;-webkit-text-fill-color:var(--ui-lib-control-text-fill-color,currentColor);font-family:inherit;font-size:inherit;line-height:inherit;order:0}.input-3bEGcMc9.size-medium-1L1JkxT_:dir(ltr)::placeholder{color:#707070;-webkit-text-fill-color:currentColor;opacity:1}html.theme-dark .input-3bEGcMc9.size-medium-1L1JkxT_:dir(ltr)::placeholder{color:#8c8c8c}.input-3bEGcMc9.size-medium-1L1JkxT_:dir(ltr)::-webkit-calendar-picker-indicator,.input-3bEGcMc9.size-medium-1L1JkxT_:dir(ltr)::-webkit-clear-button,.input-3bEGcMc9.size-medium-1L1JkxT_:dir(ltr)::-webkit-inner-spin-button,.input-3bEGcMc9.size-medium-1L1JkxT_:dir(ltr)::-webkit-outer-spin-button,.input-3bEGcMc9.size-medium-1L1JkxT_:dir(ltr)::-webkit-search-cancel-button{-webkit-appearance:none;appearance:none}.input-3bEGcMc9.size-medium-1L1JkxT_:-webkit-autofill:active:dir(ltr),.input-3bEGcMc9.size-medium-1L1JkxT_:-webkit-autofill:dir(ltr),.input-3bEGcMc9.size-medium-1L1JkxT_:-webkit-autofill:focus:dir(ltr){border-radius:6px}@media (any-hover:hover){.input-3bEGcMc9.size-medium-1L1JkxT_:-webkit-autofill:hover:dir(ltr){border-radius:6px}}html.theme-dark .input-3bEGcMc9.size-medium-1L1JkxT_:dir(ltr)::-webkit-calendar-picker-indicator{filter:invert(1)}.input-3bEGcMc9.size-large-fbdORjfB:dir(ltr){-webkit-appearance:auto;appearance:textfield;background-color:initial;border:0;display:block;height:100%;margin:0;min-width:0;outline:0;width:100%;-webkit-text-fill-color:var(--ui-lib-control-text-fill-color,currentColor);font-family:inherit;font-size:inherit;line-height:inherit;order:0}.input-3bEGcMc9.size-large-fbdORjfB:dir(ltr)::placeholder{color:#707070;-webkit-text-fill-color:currentColor;opacity:1}html.theme-dark .input-3bEGcMc9.size-large-fbdORjfB:dir(ltr)::placeholder{color:#8c8c8c}.input-3bEGcMc9.size-large-fbdORjfB:dir(ltr)::-webkit-calendar-picker-indicator,.input-3bEGcMc9.size-large-fbdORjfB:dir(ltr)::-webkit-clear-button,.input-3bEGcMc9.size-large-fbdORjfB:dir(ltr)::-webkit-inner-spin-button,.input-3bEGcMc9.size-large-fbdORjfB:dir(ltr)::-webkit-outer-spin-button,.input-3bEGcMc9.size-large-fbdORjfB:dir(ltr)::-webkit-search-cancel-button{-webkit-appearance:none;appearance:none}.input-3bEGcMc9.size-large-fbdORjfB:-webkit-autofill:active:dir(ltr),.input-3bEGcMc9.size-large-fbdORjfB:-webkit-autofill:dir(ltr),.input-3bEGcMc9.size-large-fbdORjfB:-webkit-autofill:focus:dir(ltr){border-radius:6px}@media (any-hover:hover){.input-3bEGcMc9.size-large-fbdORjfB:-webkit-autofill:hover:dir(ltr){border-radius:6px}}html.theme-dark .input-3bEGcMc9.size-large-fbdORjfB:dir(ltr)::-webkit-calendar-picker-indicator{filter:invert(1)}.input-3bEGcMc9.with-start-slot-16sVynIv:dir(ltr){padding-left:calc(4px - var(--ui-lib-control-inner-slot-gap, 2px))}.input-3bEGcMc9.with-end-slot-S5RrC8PC:dir(ltr){padding-right:calc(4px - var(--ui-lib-control-inner-slot-gap, 2px))}.input-3bEGcMc9:dir(rtl){padding:0 calc(8px - var(--ui-lib-control-border-width, 2px) - var(--ui-lib-control-inner-slot-gap, 2px))}.input-3bEGcMc9.size-xxsmall-27e6wS6H:dir(rtl){-webkit-appearance:auto;appearance:textfield;background-color:initial;border:0;display:block;height:100%;margin:0;min-width:0;outline:0;width:100%;-webkit-text-fill-color:var(--ui-lib-control-text-fill-color,currentColor);font-family:inherit;font-size:inherit;line-height:inherit;order:0}.input-3bEGcMc9.size-xxsmall-27e6wS6H:dir(rtl)::placeholder{color:#707070;-webkit-text-fill-color:currentColor;opacity:1}html.theme-dark .input-3bEGcMc9.size-xxsmall-27e6wS6H:dir(rtl)::placeholder{color:#8c8c8c}.input-3bEGcMc9.size-xxsmall-27e6wS6H:dir(rtl)::-webkit-calendar-picker-indicator,.input-3bEGcMc9.size-xxsmall-27e6wS6H:dir(rtl)::-webkit-clear-button,.input-3bEGcMc9.size-xxsmall-27e6wS6H:dir(rtl)::-webkit-inner-spin-button,.input-3bEGcMc9.size-xxsmall-27e6wS6H:dir(rtl)::-webkit-outer-spin-button,.input-3bEGcMc9.size-xxsmall-27e6wS6H:dir(rtl)::-webkit-search-cancel-button{-webkit-appearance:none;appearance:none}.input-3bEGcMc9.size-xxsmall-27e6wS6H:-webkit-autofill:active:dir(rtl),.input-3bEGcMc9.size-xxsmall-27e6wS6H:-webkit-autofill:dir(rtl),.input-3bEGcMc9.size-xxsmall-27e6wS6H:-webkit-autofill:focus:dir(rtl){border-radius:2px}@media (any-hover:hover){.input-3bEGcMc9.size-xxsmall-27e6wS6H:-webkit-autofill:hover:dir(rtl){border-radius:2px}}html.theme-dark .input-3bEGcMc9.size-xxsmall-27e6wS6H:dir(rtl)::-webkit-calendar-picker-indicator{filter:invert(1)}.input-3bEGcMc9.size-xsmall-1_VJDaNU:dir(rtl){-webkit-appearance:auto;appearance:textfield;background-color:initial;border:0;display:block;height:100%;margin:0;min-width:0;outline:0;width:100%;-webkit-text-fill-color:var(--ui-lib-control-text-fill-color,currentColor);font-family:inherit;font-size:inherit;line-height:inherit;order:0}.input-3bEGcMc9.size-xsmall-1_VJDaNU:dir(rtl)::placeholder{color:#707070;-webkit-text-fill-color:currentColor;opacity:1}html.theme-dark .input-3bEGcMc9.size-xsmall-1_VJDaNU:dir(rtl)::placeholder{color:#8c8c8c}.input-3bEGcMc9.size-xsmall-1_VJDaNU:dir(rtl)::-webkit-calendar-picker-indicator,.input-3bEGcMc9.size-xsmall-1_VJDaNU:dir(rtl)::-webkit-clear-button,.input-3bEGcMc9.size-xsmall-1_VJDaNU:dir(rtl)::-webkit-inner-spin-button,.input-3bEGcMc9.size-xsmall-1_VJDaNU:dir(rtl)::-webkit-outer-spin-button,.input-3bEGcMc9.size-xsmall-1_VJDaNU:dir(rtl)::-webkit-search-cancel-button{-webkit-appearance:none;appearance:none}.input-3bEGcMc9.size-xsmall-1_VJDaNU:-webkit-autofill:active:dir(rtl),.input-3bEGcMc9.size-xsmall-1_VJDaNU:-webkit-autofill:dir(rtl),.input-3bEGcMc9.size-xsmall-1_VJDaNU:-webkit-autofill:focus:dir(rtl){border-radius:4px}@media (any-hover:hover){.input-3bEGcMc9.size-xsmall-1_VJDaNU:-webkit-autofill:hover:dir(rtl){border-radius:4px}}html.theme-dark .input-3bEGcMc9.size-xsmall-1_VJDaNU:dir(rtl)::-webkit-calendar-picker-indicator{filter:invert(1)}.input-3bEGcMc9.size-small-1b3jdGP_:dir(rtl){-webkit-appearance:auto;appearance:textfield;background-color:initial;border:0;display:block;height:100%;margin:0;min-width:0;outline:0;width:100%;-webkit-text-fill-color:var(--ui-lib-control-text-fill-color,currentColor);font-family:inherit;font-size:inherit;line-height:inherit;order:0}.input-3bEGcMc9.size-small-1b3jdGP_:dir(rtl)::placeholder{color:#707070;-webkit-text-fill-color:currentColor;opacity:1}html.theme-dark .input-3bEGcMc9.size-small-1b3jdGP_:dir(rtl)::placeholder{color:#8c8c8c}.input-3bEGcMc9.size-small-1b3jdGP_:dir(rtl)::-webkit-calendar-picker-indicator,.input-3bEGcMc9.size-small-1b3jdGP_:dir(rtl)::-webkit-clear-button,.input-3bEGcMc9.size-small-1b3jdGP_:dir(rtl)::-webkit-inner-spin-button,.input-3bEGcMc9.size-small-1b3jdGP_:dir(rtl)::-webkit-outer-spin-button,.input-3bEGcMc9.size-small-1b3jdGP_:dir(rtl)::-webkit-search-cancel-button{-webkit-appearance:none;appearance:none}.input-3bEGcMc9.size-small-1b3jdGP_:-webkit-autofill:active:dir(rtl),.input-3bEGcMc9.size-small-1b3jdGP_:-webkit-autofill:dir(rtl),.input-3bEGcMc9.size-small-1b3jdGP_:-webkit-autofill:focus:dir(rtl){border-radius:4px}@media (any-hover:hover){.input-3bEGcMc9.size-small-1b3jdGP_:-webkit-autofill:hover:dir(rtl){border-radius:4px}}html.theme-dark .input-3bEGcMc9.size-small-1b3jdGP_:dir(rtl)::-webkit-calendar-picker-indicator{filter:invert(1)}.input-3bEGcMc9.size-medium-1L1JkxT_:dir(rtl){-webkit-appearance:auto;appearance:textfield;background-color:initial;border:0;display:block;height:100%;margin:0;min-width:0;outline:0;width:100%;-webkit-text-fill-color:var(--ui-lib-control-text-fill-color,currentColor);font-family:inherit;font-size:inherit;line-height:inherit;order:0}.input-3bEGcMc9.size-medium-1L1JkxT_:dir(rtl)::placeholder{color:#707070;-webkit-text-fill-color:currentColor;opacity:1}html.theme-dark .input-3bEGcMc9.size-medium-1L1JkxT_:dir(rtl)::placeholder{color:#8c8c8c}.input-3bEGcMc9.size-medium-1L1JkxT_:dir(rtl)::-webkit-calendar-picker-indicator,.input-3bEGcMc9.size-medium-1L1JkxT_:dir(rtl)::-webkit-clear-button,.input-3bEGcMc9.size-medium-1L1JkxT_:dir(rtl)::-webkit-inner-spin-button,.input-3bEGcMc9.size-medium-1L1JkxT_:dir(rtl)::-webkit-outer-spin-button,.input-3bEGcMc9.size-medium-1L1JkxT_:dir(rtl)::-webkit-search-cancel-button{-webkit-appearance:none;appearance:none}.input-3bEGcMc9.size-medium-1L1JkxT_:-webkit-autofill:active:dir(rtl),.input-3bEGcMc9.size-medium-1L1JkxT_:-webkit-autofill:dir(rtl),.input-3bEGcMc9.size-medium-1L1JkxT_:-webkit-autofill:focus:dir(rtl){border-radius:6px}@media (any-hover:hover){.input-3bEGcMc9.size-medium-1L1JkxT_:-webkit-autofill:hover:dir(rtl){border-radius:6px}}html.theme-dark .input-3bEGcMc9.size-medium-1L1JkxT_:dir(rtl)::-webkit-calendar-picker-indicator{filter:invert(1)}.input-3bEGcMc9.size-large-fbdORjfB:dir(rtl){-webkit-appearance:auto;appearance:textfield;background-color:initial;border:0;display:block;height:100%;margin:0;min-width:0;outline:0;width:100%;-webkit-text-fill-color:var(--ui-lib-control-text-fill-color,currentColor);font-family:inherit;font-size:inherit;line-height:inherit;order:0}.input-3bEGcMc9.size-large-fbdORjfB:dir(rtl)::placeholder{color:#707070;-webkit-text-fill-color:currentColor;opacity:1}html.theme-dark .input-3bEGcMc9.size-large-fbdORjfB:dir(rtl)::placeholder{color:#8c8c8c}.input-3bEGcMc9.size-large-fbdORjfB:dir(rtl)::-webkit-calendar-picker-indicator,.input-3bEGcMc9.size-large-fbdORjfB:dir(rtl)::-webkit-clear-button,.input-3bEGcMc9.size-large-fbdORjfB:dir(rtl)::-webkit-inner-spin-button,.input-3bEGcMc9.size-large-fbdORjfB:dir(rtl)::-webkit-outer-spin-button,.input-3bEGcMc9.size-large-fbdORjfB:dir(rtl)::-webkit-search-cancel-button{-webkit-appearance:none;appearance:none}.input-3bEGcMc9.size-large-fbdORjfB:-webkit-autofill:active:dir(rtl),.input-3bEGcMc9.size-large-fbdORjfB:-webkit-autofill:dir(rtl),.input-3bEGcMc9.size-large-fbdORjfB:-webkit-autofill:focus:dir(rtl){border-radius:6px}@media (any-hover:hover){.input-3bEGcMc9.size-large-fbdORjfB:-webkit-autofill:hover:dir(rtl){border-radius:6px}}html.theme-dark .input-3bEGcMc9.size-large-fbdORjfB:dir(rtl)::-webkit-calendar-picker-indicator{filter:invert(1)}.input-3bEGcMc9.with-start-slot-16sVynIv:dir(rtl){padding-right:calc(4px - var(--ui-lib-control-inner-slot-gap, 2px))}.input-3bEGcMc9.with-end-slot-S5RrC8PC:dir(rtl){padding-left:calc(4px - var(--ui-lib-control-inner-slot-gap, 2px))}",
        "",
      ]);
      const a = n;
    },
    86566: (i, r, t) => {
      t.d(r, { Z: () => a });
      var e = t(43392),
        l = t.n(e),
        o = t(8021),
        n = t.n(o)()(l());
      n.push([
        i.id,
        '.label-15cmWyVp:dir(ltr){display:block;font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;font-style:normal;--ui-lib-typography-font-size:14px;font-size:var(--ui-lib-typography-font-size);font-weight:400;--ui-lib-typography-line-height:18px;color:#707070;line-height:var(--ui-lib-typography-line-height)}html.theme-dark .label-15cmWyVp:dir(ltr){color:#8c8c8c}.label-15cmWyVp:dir(rtl){display:block;font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;font-style:normal;--ui-lib-typography-font-size:14px;font-size:var(--ui-lib-typography-font-size);font-weight:400;--ui-lib-typography-line-height:18px;color:#707070;line-height:var(--ui-lib-typography-line-height)}html.theme-dark .label-15cmWyVp:dir(rtl){color:#8c8c8c}',
        "",
      ]);
      const a = n;
    },
  },
]);
