"use strict";
(global.webpackChunktradingview_desktop =
  global.webpackChunktradingview_desktop || []).push([
  [8234],
  {
    10422: (e, n, t) => {
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
        (e.exports = t(53746)));
    },
    50959: (e, n, t) => {
      e.exports = t(95257);
    },
    84434: (e, n, t) => {
      t.d(n, {
        eN: () => u,
        Tb: () => c,
        cg: () => l,
        YA: () => g,
        yj: () => f,
      });
      var r = t(77751),
        o = t(73386),
        a = t(4352),
        i = t(30310),
        s = t(68080);
      function c(e, n) {
        return (0, a.nZ)().captureException(e, (0, s.U0)(n));
      }
      function u(e, n) {
        return (0, a.nZ)().captureEvent(e, n);
      }
      function g(e, n) {
        (0, a.aF)().setTag(e, n);
      }
      function f(e) {
        const n = (0, a.s3)(),
          t = (0, a.aF)(),
          s = (0, a.nZ)(),
          { release: c, environment: u = o.J } = (n && n.getOptions()) || {},
          { userAgent: g } = r.n.navigator || {},
          f = (0, i.Hv)({
            release: c,
            environment: u,
            user: s.getUser() || t.getUser(),
            ...(g && { userAgent: g }),
            ...e,
          }),
          p = t.getSession();
        return (
          p && "ok" === p.status && (0, i.CT)(p, { status: "exited" }),
          d(),
          t.setSession(f),
          s.setSession(f),
          f
        );
      }
      function d() {
        const e = (0, a.aF)(),
          n = (0, a.nZ)(),
          t = n.getSession() || e.getSession();
        (t && (0, i.RJ)(t), p(), e.setSession(), n.setSession());
      }
      function p() {
        const e = (0, a.aF)(),
          n = (0, a.nZ)(),
          t = (0, a.s3)(),
          r = n.getSession() || e.getSession();
        r && t && t.captureSession(r);
      }
      function l(e = !1) {
        e ? d() : p();
      }
    },
    77118: (e, n, t) => {
      t.d(n, { n_: () => r.n, YA: () => o.YA, S1: () => a.S });
      var r = t(14547),
        o = t(84434),
        a = (t(76191), t(16331), t(70686));
      (t(60203), t(48057));
    },
    5306: (e, n, t) => {
      (t.d(n, { Db: () => p.D, Zh: () => d }), t(30315), t(19147));
      var r = t(65399),
        o = t(51020),
        a = t(12999),
        i = t(48278),
        s = t(50959),
        c = t(53776),
        u = ["forwardedRef"];
      function g(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          (n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r));
        }
        return t;
      }
      function f(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? g(Object(t), !0).forEach(function (n) {
                o(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(
                    e,
                    n,
                    Object.getOwnPropertyDescriptor(t, n),
                  );
                });
        }
        return e;
      }
      function d(e) {
        var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return function (t) {
          function o(o) {
            var c = o.forwardedRef,
              g = i(o, u),
              d = (0, r.$)(e, f(f({}, g), {}, { keyPrefix: n.keyPrefix })),
              p = a(d, 3),
              l = p[0],
              O = p[1],
              b = p[2],
              v = f(f({}, g), {}, { t: l, i18n: O, tReady: b });
            return (
              n.withRef && c
                ? (v.ref = c)
                : !n.withRef && c && (v.forwardedRef = c),
              (0, s.createElement)(t, v)
            );
          }
          return (
            (o.displayName = "withI18nextTranslation(".concat(
              (0, c.Gf)(t),
              ")",
            )),
            (o.WrappedComponent = t),
            n.withRef
              ? (0, s.forwardRef)(function (e, n) {
                  return (0, s.createElement)(
                    o,
                    Object.assign({}, e, { forwardedRef: n }),
                  );
                })
              : o
          );
        };
      }
      (t(32028), t(70566), t(67589), t(80236));
      var p = t(33634);
      (t(45240), t(72936));
    },
    53776: (e, n, t) => {
      function r() {
        if (console && console.warn) {
          for (var e, n = arguments.length, t = new Array(n), r = 0; r < n; r++)
            t[r] = arguments[r];
          ("string" == typeof t[0] && (t[0] = "react-i18next:: ".concat(t[0])),
            (e = console).warn.apply(e, t));
        }
      }
      t.d(n, { O4: () => a, DC: () => i, F0: () => s, Gf: () => c });
      var o = {};
      function a() {
        for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
          n[t] = arguments[t];
        ("string" == typeof n[0] && o[n[0]]) ||
          ("string" == typeof n[0] && (o[n[0]] = new Date()),
          r.apply(void 0, n));
      }
      function i(e, n, t) {
        e.loadNamespaces(n, function () {
          e.isInitialized
            ? t()
            : e.on("initialized", function n() {
                (setTimeout(function () {
                  e.off("initialized", n);
                }, 0),
                  t());
              });
        });
      }
      function s(e, n) {
        var t =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return n.languages && n.languages.length
          ? void 0 !== n.options.ignoreJSONStructure
            ? n.hasLoadedNamespace(e, {
                precheck: function (n, r) {
                  if (
                    t.bindI18n &&
                    t.bindI18n.indexOf("languageChanging") > -1 &&
                    n.services.backendConnector.backend &&
                    n.isLanguageChangingTo &&
                    !r(n.isLanguageChangingTo, e)
                  )
                    return !1;
                },
              })
            : (function (e, n) {
                var t =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  r = n.languages[0],
                  o = !!n.options && n.options.fallbackLng,
                  a = n.languages[n.languages.length - 1];
                if ("cimode" === r.toLowerCase()) return !0;
                var i = function (e, t) {
                  var r =
                    n.services.backendConnector.state[
                      "".concat(e, "|").concat(t)
                    ];
                  return -1 === r || 2 === r;
                };
                return !(
                  (t.bindI18n &&
                    t.bindI18n.indexOf("languageChanging") > -1 &&
                    n.services.backendConnector.backend &&
                    n.isLanguageChangingTo &&
                    !i(n.isLanguageChangingTo, e)) ||
                  (!n.hasResourceBundle(r, e) &&
                    n.services.backendConnector.backend &&
                    (!n.options.resources ||
                      n.options.partialBundledLanguages) &&
                    (!i(r, e) || (o && !i(a, e))))
                );
              })(e, n, t)
          : (a("i18n.languages were undefined or empty", n.languages), !0);
      }
      function c(e) {
        return (
          e.displayName ||
          e.name ||
          ("string" == typeof e && e.length > 0 ? e : "Unknown")
        );
      }
    },
  },
]);
