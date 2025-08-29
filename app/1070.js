(global.webpackChunktradingview_desktop =
  global.webpackChunktradingview_desktop || []).push([
  [1070],
  {
    89626: (e) => {
      e.exports = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      };
    },
    21231: (e) => {
      ((e.exports = function (e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports));
    },
    17093: (e) => {
      ((e.exports = function (e) {
        if (Array.isArray(e)) return e;
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports));
    },
    6882: (e) => {
      ((e.exports = function (e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports));
    },
    60763: (e, t, r) => {
      var n = r(78613);
      function o(e, t) {
        for (var r = 0; r < t.length; r++) {
          var o = t[r];
          ((o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(e, n(o.key), o));
        }
      }
      ((e.exports = function (e, t, r) {
        return (
          t && o(e.prototype, t),
          r && o(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports));
    },
    51020: (e, t, r) => {
      var n = r(78613);
      ((e.exports = function (e, t, r) {
        return (
          (t = n(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports));
    },
    25603: (e) => {
      ((e.exports = function (e, t) {
        var r =
          null == e
            ? null
            : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
        if (null != r) {
          var n,
            o,
            s,
            u,
            a = [],
            i = !0,
            c = !1;
          try {
            if (((s = (r = r.call(e)).next), 0 === t)) {
              if (Object(r) !== r) return;
              i = !1;
            } else
              for (
                ;
                !(i = (n = s.call(r)).done) &&
                (a.push(n.value), a.length !== t);
                i = !0
              );
          } catch (e) {
            ((c = !0), (o = e));
          } finally {
            try {
              if (!i && null != r.return && ((u = r.return()), Object(u) !== u))
                return;
            } finally {
              if (c) throw o;
            }
          }
          return a;
        }
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports));
    },
    38494: (e) => {
      ((e.exports = function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports));
    },
    48278: (e, t, r) => {
      var n = r(50561);
      ((e.exports = function (e, t) {
        if (null == e) return {};
        var r,
          o,
          s = n(e, t);
        if (Object.getOwnPropertySymbols) {
          var u = Object.getOwnPropertySymbols(e);
          for (o = 0; o < u.length; o++)
            ((r = u[o]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (s[r] = e[r])));
        }
        return s;
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports));
    },
    50561: (e) => {
      ((e.exports = function (e, t) {
        if (null == e) return {};
        var r,
          n,
          o = {},
          s = Object.keys(e);
        for (n = 0; n < s.length; n++)
          ((r = s[n]), t.indexOf(r) >= 0 || (o[r] = e[r]));
        return o;
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports));
    },
    12999: (e, t, r) => {
      var n = r(17093),
        o = r(25603),
        s = r(17870),
        u = r(38494);
      ((e.exports = function (e, t) {
        return n(e) || o(e, t) || s(e, t) || u();
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports));
    },
    55002: (e, t, r) => {
      var n = r(92057).default;
      ((e.exports = function (e, t) {
        if ("object" !== n(e) || null === e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var o = r.call(e, t || "default");
          if ("object" !== n(o)) return o;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports));
    },
    78613: (e, t, r) => {
      var n = r(92057).default,
        o = r(55002);
      ((e.exports = function (e) {
        var t = o(e, "string");
        return "symbol" === n(t) ? t : String(t);
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports));
    },
    92057: (e) => {
      function t(r) {
        return (
          (e.exports = t =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          t(r)
        );
      }
      ((e.exports = t),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports));
    },
    17870: (e, t, r) => {
      var n = r(21231);
      ((e.exports = function (e, t) {
        if (e) {
          if ("string" == typeof e) return n(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === r && e.constructor && (r = e.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(e)
              : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? n(e, t)
                : void 0
          );
        }
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports));
    },
    70566: (e, t, r) => {
      "use strict";
      (r(50959), r(72936));
    },
    30315: (e, t, r) => {
      "use strict";
      (r(51020), r(48278), r(50959), r(19147), r(72936));
    },
    19147: (e, t, r) => {
      "use strict";
      (r(48278),
        r(92057),
        r(51020),
        r(50959),
        r(89626),
        Object.create(null),
        r(53776),
        r(45240));
    },
    32028: (e, t, r) => {
      "use strict";
      (r(12999), r(48278), r(65399));
    },
    72936: (e, t, r) => {
      "use strict";
      (r.d(t, { JP: () => u.J, nI: () => a.n, OO: () => i, zv: () => c }),
        r(51020));
      var n = r(6882),
        o = r(60763),
        s = r(50959),
        u = r(45240),
        a = r(9155);
      r(33634);
      var i = (0, s.createContext)(),
        c = (function () {
          function e() {
            (n(this, e), (this.usedNamespaces = {}));
          }
          return (
            o(e, [
              {
                key: "addUsedNamespaces",
                value: function (e) {
                  var t = this;
                  e.forEach(function (e) {
                    t.usedNamespaces[e] || (t.usedNamespaces[e] = !0);
                  });
                },
              },
              {
                key: "getUsedNamespaces",
                value: function () {
                  return Object.keys(this.usedNamespaces);
                },
              },
            ]),
            e
          );
        })();
    },
    45240: (e, t, r) => {
      "use strict";
      r.d(t, { J: () => l, j: () => p });
      var n = r(51020),
        o =
          /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
        s = {
          "&amp;": "&",
          "&#38;": "&",
          "&lt;": "<",
          "&#60;": "<",
          "&gt;": ">",
          "&#62;": ">",
          "&apos;": "'",
          "&#39;": "'",
          "&quot;": '"',
          "&#34;": '"',
          "&nbsp;": " ",
          "&#160;": " ",
          "&copy;": "©",
          "&#169;": "©",
          "&reg;": "®",
          "&#174;": "®",
          "&hellip;": "…",
          "&#8230;": "…",
          "&#x2F;": "/",
          "&#47;": "/",
        },
        u = function (e) {
          return s[e];
        };
      function a(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(r), !0).forEach(function (t) {
                n(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : a(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      var c = {
        bindI18n: "languageChanged",
        bindI18nStore: "",
        transEmptyNodeValue: "",
        transSupportBasicHtmlNodes: !0,
        transWrapTextNodes: "",
        transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
        useSuspense: !0,
        unescape: function (e) {
          return e.replace(o, u);
        },
      };
      function p() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        c = i(i({}, c), e);
      }
      function l() {
        return c;
      }
    },
    9155: (e, t, r) => {
      "use strict";
      var n;
      function o(e) {
        n = e;
      }
      function s() {
        return n;
      }
      r.d(t, { I: () => o, n: () => s });
    },
    33634: (e, t, r) => {
      "use strict";
      r.d(t, { D: () => s });
      var n = r(45240),
        o = r(9155),
        s = {
          type: "3rdParty",
          init: function (e) {
            ((0, n.j)(e.options.react), (0, o.I)(e));
          },
        };
    },
    80236: (e, t, r) => {
      "use strict";
      (r(50959), r(72936));
    },
    65399: (e, t, r) => {
      "use strict";
      r.d(t, { $: () => f });
      var n = r(12999),
        o = r(51020),
        s = r(92057),
        u = r(50959),
        a = r(72936),
        i = r(53776);
      function c(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(r), !0).forEach(function (t) {
                o(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : c(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      var l = function (e, t) {
        var r = (0, u.useRef)();
        return (
          (0, u.useEffect)(
            function () {
              r.current = t ? r.current : e;
            },
            [e, t],
          ),
          r.current
        );
      };
      function f(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = t.i18n,
          o = (0, u.useContext)(a.OO) || {},
          c = o.i18n,
          f = o.defaultNS,
          d = r || c || (0, a.nI)();
        if (
          (d && !d.reportNamespaces && (d.reportNamespaces = new a.zv()), !d)
        ) {
          (0, i.O4)(
            "You will need to pass in an i18next instance by using initReactI18next",
          );
          var b = function (e, t) {
              return "string" == typeof t
                ? t
                : t && "object" === s(t) && "string" == typeof t.defaultValue
                  ? t.defaultValue
                  : Array.isArray(e)
                    ? e[e.length - 1]
                    : e;
            },
            y = [b, {}, !1];
          return ((y.t = b), (y.i18n = {}), (y.ready = !1), y);
        }
        d.options.react &&
          void 0 !== d.options.react.wait &&
          (0, i.O4)(
            "It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.",
          );
        var x = p(p(p({}, (0, a.JP)()), d.options.react), t),
          v = x.useSuspense,
          m = x.keyPrefix,
          O = e || f || (d.options && d.options.defaultNS);
        ((O = "string" == typeof O ? [O] : O || ["translation"]),
          d.reportNamespaces.addUsedNamespaces &&
            d.reportNamespaces.addUsedNamespaces(O));
        var g =
          (d.isInitialized || d.initializedStoreOnce) &&
          O.every(function (e) {
            return (0, i.F0)(e, d, x);
          });
        function h() {
          return d.getFixedT(null, "fallback" === x.nsMode ? O : O[0], m);
        }
        var j = (0, u.useState)(h),
          w = n(j, 2),
          _ = w[0],
          S = w[1],
          P = O.join(),
          N = l(P),
          k = (0, u.useRef)(!0);
        (0, u.useEffect)(
          function () {
            var e = x.bindI18n,
              t = x.bindI18nStore;
            function r() {
              k.current && S(h);
            }
            return (
              (k.current = !0),
              g ||
                v ||
                (0, i.DC)(d, O, function () {
                  k.current && S(h);
                }),
              g && N && N !== P && k.current && S(h),
              e && d && d.on(e, r),
              t && d && d.store.on(t, r),
              function () {
                ((k.current = !1),
                  e &&
                    d &&
                    e.split(" ").forEach(function (e) {
                      return d.off(e, r);
                    }),
                  t &&
                    d &&
                    t.split(" ").forEach(function (e) {
                      return d.store.off(e, r);
                    }));
              }
            );
          },
          [d, P],
        );
        var M = (0, u.useRef)(!0);
        (0, u.useEffect)(
          function () {
            (k.current && !M.current && S(h), (M.current = !1));
          },
          [d, m],
        );
        var E = [_, d, g];
        if (((E.t = _), (E.i18n = d), (E.ready = g), g)) return E;
        if (!g && !v) return E;
        throw new Promise(function (e) {
          (0, i.DC)(d, O, function () {
            e();
          });
        });
      }
    },
    67589: (e, t, r) => {
      "use strict";
      (r(51020), r(48278), r(50959), r(80236), r(72936), r(53776));
    },
  },
]);
