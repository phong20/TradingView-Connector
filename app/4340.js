/*! For license information please see 4340.js.LICENSE.txt */
(global.webpackChunktradingview_desktop =
  global.webpackChunktradingview_desktop || []).push([
  [4340],
  {
    97754: (e, t) => {
      var n;
      !(function () {
        "use strict";
        var o = {}.hasOwnProperty;
        function i() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var n = arguments[t];
            if (n) {
              var r = typeof n;
              if ("string" === r || "number" === r) e.push(n);
              else if (Array.isArray(n) && n.length) {
                var a = i.apply(null, n);
                a && e.push(a);
              } else if ("object" === r)
                for (var s in n) o.call(n, s) && n[s] && e.push(s);
            }
          }
          return e.join(" ");
        }
        e.exports
          ? ((i.default = i), (e.exports = i))
          : void 0 ===
              (n = function () {
                return i;
              }.apply(t, [])) || (e.exports = n);
      })();
    },
    10422: (e, t, n) => {
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
        (e.exports = n(53746)));
    },
    50959: (e, t, n) => {
      "use strict";
      e.exports = n(95257);
    },
    77118: (e, t, n) => {
      "use strict";
      n.d(t, { n_: () => o.n, YA: () => i.YA, S1: () => r.S });
      var o = n(14547),
        i = n(84434),
        r = (n(76191), n(16331), n(70686));
      (n(60203), n(48057));
    },
    94102: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => S });
      var o = n(27915),
        i = n(92449),
        r = [],
        a = r.forEach,
        s = r.slice,
        c = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
        u = {
          name: "cookie",
          lookup: function (e) {
            var t;
            if (e.lookupCookie && "undefined" != typeof document) {
              var n = (function (e) {
                for (
                  var t = "".concat(e, "="),
                    n = document.cookie.split(";"),
                    o = 0;
                  o < n.length;
                  o++
                ) {
                  for (var i = n[o]; " " === i.charAt(0); )
                    i = i.substring(1, i.length);
                  if (0 === i.indexOf(t))
                    return i.substring(t.length, i.length);
                }
                return null;
              })(e.lookupCookie);
              n && (t = n);
            }
            return t;
          },
          cacheUserLanguage: function (e, t) {
            t.lookupCookie &&
              "undefined" != typeof document &&
              (function (e, t, n, o) {
                var i =
                  arguments.length > 4 && void 0 !== arguments[4]
                    ? arguments[4]
                    : { path: "/", sameSite: "strict" };
                (n &&
                  ((i.expires = new Date()),
                  i.expires.setTime(i.expires.getTime() + 60 * n * 1e3)),
                  o && (i.domain = o),
                  (document.cookie = (function (e, t, n) {
                    var o = n || {};
                    o.path = o.path || "/";
                    var i = encodeURIComponent(t),
                      r = "".concat(e, "=").concat(i);
                    if (o.maxAge > 0) {
                      var a = o.maxAge - 0;
                      if (Number.isNaN(a))
                        throw new Error("maxAge should be a Number");
                      r += "; Max-Age=".concat(Math.floor(a));
                    }
                    if (o.domain) {
                      if (!c.test(o.domain))
                        throw new TypeError("option domain is invalid");
                      r += "; Domain=".concat(o.domain);
                    }
                    if (o.path) {
                      if (!c.test(o.path))
                        throw new TypeError("option path is invalid");
                      r += "; Path=".concat(o.path);
                    }
                    if (o.expires) {
                      if ("function" != typeof o.expires.toUTCString)
                        throw new TypeError("option expires is invalid");
                      r += "; Expires=".concat(o.expires.toUTCString());
                    }
                    if (
                      (o.httpOnly && (r += "; HttpOnly"),
                      o.secure && (r += "; Secure"),
                      o.sameSite)
                    )
                      switch (
                        "string" == typeof o.sameSite
                          ? o.sameSite.toLowerCase()
                          : o.sameSite
                      ) {
                        case !0:
                          r += "; SameSite=Strict";
                          break;
                        case "lax":
                          r += "; SameSite=Lax";
                          break;
                        case "strict":
                          r += "; SameSite=Strict";
                          break;
                        case "none":
                          r += "; SameSite=None";
                          break;
                        default:
                          throw new TypeError("option sameSite is invalid");
                      }
                    return r;
                  })(e, encodeURIComponent(t), i)));
              })(
                t.lookupCookie,
                e,
                t.cookieMinutes,
                t.cookieDomain,
                t.cookieOptions,
              );
          },
        },
        l = {
          name: "querystring",
          lookup: function (e) {
            var t;
            if ("undefined" != typeof window) {
              var n = window.location.search;
              !window.location.search &&
                window.location.hash &&
                window.location.hash.indexOf("?") > -1 &&
                (n = window.location.hash.substring(
                  window.location.hash.indexOf("?"),
                ));
              for (
                var o = n.substring(1).split("&"), i = 0;
                i < o.length;
                i++
              ) {
                var r = o[i].indexOf("=");
                r > 0 &&
                  o[i].substring(0, r) === e.lookupQuerystring &&
                  (t = o[i].substring(r + 1));
              }
            }
            return t;
          },
        },
        g = null,
        d = function () {
          if (null !== g) return g;
          try {
            g = "undefined" !== window && null !== window.localStorage;
            var e = "i18next.translate.boo";
            (window.localStorage.setItem(e, "foo"),
              window.localStorage.removeItem(e));
          } catch (e) {
            g = !1;
          }
          return g;
        },
        f = {
          name: "localStorage",
          lookup: function (e) {
            var t;
            if (e.lookupLocalStorage && d()) {
              var n = window.localStorage.getItem(e.lookupLocalStorage);
              n && (t = n);
            }
            return t;
          },
          cacheUserLanguage: function (e, t) {
            t.lookupLocalStorage &&
              d() &&
              window.localStorage.setItem(t.lookupLocalStorage, e);
          },
        },
        p = null,
        h = function () {
          if (null !== p) return p;
          try {
            p = "undefined" !== window && null !== window.sessionStorage;
            var e = "i18next.translate.boo";
            (window.sessionStorage.setItem(e, "foo"),
              window.sessionStorage.removeItem(e));
          } catch (e) {
            p = !1;
          }
          return p;
        },
        v = {
          name: "sessionStorage",
          lookup: function (e) {
            var t;
            if (e.lookupSessionStorage && h()) {
              var n = window.sessionStorage.getItem(e.lookupSessionStorage);
              n && (t = n);
            }
            return t;
          },
          cacheUserLanguage: function (e, t) {
            t.lookupSessionStorage &&
              h() &&
              window.sessionStorage.setItem(t.lookupSessionStorage, e);
          },
        },
        m = {
          name: "navigator",
          lookup: function (e) {
            var t = [];
            if ("undefined" != typeof navigator) {
              if (navigator.languages)
                for (var n = 0; n < navigator.languages.length; n++)
                  t.push(navigator.languages[n]);
              (navigator.userLanguage && t.push(navigator.userLanguage),
                navigator.language && t.push(navigator.language));
            }
            return t.length > 0 ? t : void 0;
          },
        },
        w = {
          name: "htmlTag",
          lookup: function (e) {
            var t,
              n =
                e.htmlTag ||
                ("undefined" != typeof document
                  ? document.documentElement
                  : null);
            return (
              n &&
                "function" == typeof n.getAttribute &&
                (t = n.getAttribute("lang")),
              t
            );
          },
        },
        k = {
          name: "path",
          lookup: function (e) {
            var t;
            if ("undefined" != typeof window) {
              var n = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
              if (n instanceof Array)
                if ("number" == typeof e.lookupFromPathIndex) {
                  if ("string" != typeof n[e.lookupFromPathIndex]) return;
                  t = n[e.lookupFromPathIndex].replace("/", "");
                } else t = n[0].replace("/", "");
            }
            return t;
          },
        },
        y = {
          name: "subdomain",
          lookup: function (e) {
            var t =
                "number" == typeof e.lookupFromSubdomainIndex
                  ? e.lookupFromSubdomainIndex + 1
                  : 1,
              n =
                "undefined" != typeof window &&
                window.location &&
                window.location.hostname &&
                window.location.hostname.match(
                  /^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i,
                );
            if (n) return n[t];
          },
        },
        S = (function () {
          function e(t) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            ((0, o.Z)(this, e),
              (this.type = "languageDetector"),
              (this.detectors = {}),
              this.init(t, n));
          }
          return (
            (0, i.Z)(e, [
              {
                key: "init",
                value: function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {};
                  ((this.services = e || { languageUtils: {} }),
                    (this.options = (function (e) {
                      return (
                        a.call(s.call(arguments, 1), function (t) {
                          if (t)
                            for (var n in t) void 0 === e[n] && (e[n] = t[n]);
                        }),
                        e
                      );
                    })(t, this.options || {}, {
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
                    (this.i18nOptions = n),
                    this.addDetector(u),
                    this.addDetector(l),
                    this.addDetector(f),
                    this.addDetector(v),
                    this.addDetector(m),
                    this.addDetector(w),
                    this.addDetector(k),
                    this.addDetector(y));
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
                  var t = this;
                  e || (e = this.options.order);
                  var n = [];
                  return (
                    e.forEach(function (e) {
                      if (t.detectors[e]) {
                        var o = t.detectors[e].lookup(t.options);
                        (o && "string" == typeof o && (o = [o]),
                          o && (n = n.concat(o)));
                      }
                    }),
                    (n = n.map(function (e) {
                      return t.options.convertDetectedLanguage(e);
                    })),
                    this.services.languageUtils.getBestMatchFromCodes
                      ? n
                      : n.length > 0
                        ? n[0]
                        : null
                  );
                },
              },
              {
                key: "cacheUserLanguage",
                value: function (e, t) {
                  var n = this;
                  (t || (t = this.options.caches),
                    t &&
                      ((this.options.excludeCacheFor &&
                        this.options.excludeCacheFor.indexOf(e) > -1) ||
                        t.forEach(function (t) {
                          n.detectors[t] &&
                            n.detectors[t].cacheUserLanguage(e, n.options);
                        })));
                },
              },
            ]),
            e
          );
        })();
      S.type = "languageDetector";
    },
    5306: (e, t, n) => {
      "use strict";
      (n.d(t, { Db: () => f.D, $G: () => o.$, Zh: () => d }),
        n(30315),
        n(19147));
      var o = n(65399),
        i = n(51020),
        r = n(12999),
        a = n(48278),
        s = n(50959),
        c = n(53776),
        u = ["forwardedRef"];
      function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          (t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o));
        }
        return n;
      }
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                i(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : l(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function d(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return function (n) {
          function i(i) {
            var c = i.forwardedRef,
              l = a(i, u),
              d = (0, o.$)(e, g(g({}, l), {}, { keyPrefix: t.keyPrefix })),
              f = r(d, 3),
              p = f[0],
              h = f[1],
              v = f[2],
              m = g(g({}, l), {}, { t: p, i18n: h, tReady: v });
            return (
              t.withRef && c
                ? (m.ref = c)
                : !t.withRef && c && (m.forwardedRef = c),
              (0, s.createElement)(n, m)
            );
          }
          return (
            (i.displayName = "withI18nextTranslation(".concat(
              (0, c.Gf)(n),
              ")",
            )),
            (i.WrappedComponent = n),
            t.withRef
              ? (0, s.forwardRef)(function (e, t) {
                  return (0, s.createElement)(
                    i,
                    Object.assign({}, e, { forwardedRef: t }),
                  );
                })
              : i
          );
        };
      }
      (n(32028), n(70566), n(67589), n(80236));
      var f = n(33634);
      (n(45240), n(72936));
    },
    53776: (e, t, n) => {
      "use strict";
      function o() {
        if (console && console.warn) {
          for (var e, t = arguments.length, n = new Array(t), o = 0; o < t; o++)
            n[o] = arguments[o];
          ("string" == typeof n[0] && (n[0] = "react-i18next:: ".concat(n[0])),
            (e = console).warn.apply(e, n));
        }
      }
      n.d(t, { O4: () => r, DC: () => a, F0: () => s, Gf: () => c });
      var i = {};
      function r() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        ("string" == typeof t[0] && i[t[0]]) ||
          ("string" == typeof t[0] && (i[t[0]] = new Date()),
          o.apply(void 0, t));
      }
      function a(e, t, n) {
        e.loadNamespaces(t, function () {
          e.isInitialized
            ? n()
            : e.on("initialized", function t() {
                (setTimeout(function () {
                  e.off("initialized", t);
                }, 0),
                  n());
              });
        });
      }
      function s(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return t.languages && t.languages.length
          ? void 0 !== t.options.ignoreJSONStructure
            ? t.hasLoadedNamespace(e, {
                precheck: function (t, o) {
                  if (
                    n.bindI18n &&
                    n.bindI18n.indexOf("languageChanging") > -1 &&
                    t.services.backendConnector.backend &&
                    t.isLanguageChangingTo &&
                    !o(t.isLanguageChangingTo, e)
                  )
                    return !1;
                },
              })
            : (function (e, t) {
                var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  o = t.languages[0],
                  i = !!t.options && t.options.fallbackLng,
                  r = t.languages[t.languages.length - 1];
                if ("cimode" === o.toLowerCase()) return !0;
                var a = function (e, n) {
                  var o =
                    t.services.backendConnector.state[
                      "".concat(e, "|").concat(n)
                    ];
                  return -1 === o || 2 === o;
                };
                return !(
                  (n.bindI18n &&
                    n.bindI18n.indexOf("languageChanging") > -1 &&
                    t.services.backendConnector.backend &&
                    t.isLanguageChangingTo &&
                    !a(t.isLanguageChangingTo, e)) ||
                  (!t.hasResourceBundle(o, e) &&
                    t.services.backendConnector.backend &&
                    (!t.options.resources ||
                      t.options.partialBundledLanguages) &&
                    (!a(o, e) || (i && !a(r, e))))
                );
              })(e, t, n)
          : (r("i18n.languages were undefined or empty", t.languages), !0);
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
