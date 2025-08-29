"use strict";
(global.webpackChunktradingview_desktop =
  global.webpackChunktradingview_desktop || []).push([
  [8941],
  {
    77987: (e, o, t) => {
      t.d(o, { Z: () => s });
      var n = t(43392),
        i = t.n(n),
        a = t(8021),
        r = t.n(a)()(i());
      r.push([
        e.id,
        ".zoom-popup-container {\n\twidth: 136px;\n\theight: 51px;\n\tbackground-color: var(--color-toast-bg);\n\tcolor: var(--color-tooltip-text);\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.zoom-popup-value{\n\tfont-size: 16px;\n\tfont-weight: 500;\n}\n",
        "",
      ]);
      const s = r;
    },
    28941: (e, o, t) => {
      (t.r(o), t.d(o, { default: () => x }));
      var n,
        i,
        a = t(50959),
        r = t(76133),
        s = t(55622),
        c = t(36458);
      (!(function (e) {
        ((e[(e.Ask = 0)] = "Ask"), (e[(e.CheckOnly = 1)] = "CheckOnly"));
      })(n || (n = {})),
        (function (e) {
          ((e.Window = "isWindow"),
            (e.App = "isApp"),
            (e.Chart = "isChart"),
            (e.Debug = "isDebug"));
        })(i || (i = {})));
      var u = t(25211),
        l = t.n(u),
        d = t(62962),
        p = t.n(d),
        g = t(20310),
        h = t.n(g),
        f = t(29290),
        m = t.n(f),
        v = t(47289),
        w = t.n(v),
        k = t(24834),
        S = t.n(k),
        b = t(77987),
        y = {};
      ((y.styleTagTransform = S()),
        (y.setAttributes = m()),
        (y.insert = h().bind(null, "head")),
        (y.domAPI = p()),
        (y.insertStyleElement = w()),
        l()(b.Z, y),
        b.Z && b.Z.locals && b.Z.locals,
        r.Pd.exists || r.Pd.initialize((0, r.kS)()));
      class x extends a.Component {
        state = { zoom: "100%" };
        zoomChangeSubscription;
        componentDidMount() {
          ((0, s.w0)(),
            (this.zoomChangeSubscription = c.i
              .provideProxy("tvd:window-service")
              .zoomChange.subscribe((e) => {
                this.setState({ zoom: this.toPercent(e) });
              })));
        }
        componentWillUnmount() {
          this.zoomChangeSubscription &&
            this.zoomChangeSubscription.unsubscribe();
        }
        toPercent(e) {
          return `${Math.round(100 * e)}%`;
        }
        render() {
          return a.createElement(
            "div",
            { className: "zoom-popup-container" },
            a.createElement(
              "div",
              { className: "zoom-popup-value" },
              `${this.props.t("Zoom")} ${this.state.zoom}`,
            ),
          );
        }
      }
    },
    43891: (e, o, t) => {
      t.d(o, { D: () => a });
      var n = t(96486),
        i = t(52296);
      const a = async (e) => {
        i.Z.language !== e && (await n.ZP.changeLanguage(e));
      };
    },
    52296: (e, o, t) => {
      t.d(o, { Z: () => p });
      var n = t(71017),
        i = t(72298),
        a = t(96486),
        r = t(94102),
        s = t(5306),
        c = t(46628),
        u = t(29060),
        l = t(9448);
      let d;
      if (i.ipcMain) {
        function g() {
          const e = {},
            o = n.join(i.app.getAppPath(), "resources", "locales");
          for (const t of c.P.readDirSync(o)) {
            const i = c.P.readFileSync(n.join(o, t)),
              a = n.parse(t).name,
              r = (0, l.o)(i);
            r && (e[a] = { translation: r });
          }
          return e;
        }
        ((d = g()),
          i.ipcMain.on(u.og, (e) => {
            e.returnValue = d;
          }));
      } else d = i.ipcRenderer.sendSync(u.og);
      a.ZP.use(r.Z)
        .use(s.Db)
        .init({
          keySeparator: "::",
          nsSeparator: ":::",
          resources: d,
          fallbackLng: "en",
          returnEmptyString: !1,
          interpolation: { escapeValue: !1 },
        });
      const p = a.ZP;
    },
    5778: (e, o, t) => {
      t.d(o, { R: () => n });
      const n = "tvd:locale-service";
    },
    55622: (e, o, t) => {
      t.d(o, { w0: () => p });
      var n = t(72298),
        i = t(36458),
        a = t(13855),
        r = t(26063),
        s = t(52296),
        c = t(43891),
        u = t(5778);
      const l = void 0 !== n.ipcMain;
      function d(e, o) {
        e.setAttribute("dir", o ? "rtl" : "ltr");
      }
      function p(e) {
        (e && "" === e.dir && d(e, (0, r._f)(s.Z.language)),
          (function (e) {
            let o;
            o = l
              ? i.i.provide(u.R).localeChange.subscribe(e)
              : i.i.provideProxy(u.R).localeChange.subscribe(e);
            const t = () => {
              (o?.unsubscribe(),
                (o = void 0),
                window.removeEventListener("beforeunload", t));
            };
            "undefined" != typeof window &&
              window.addEventListener("beforeunload", t);
          })((o) => {
            "" !== o &&
              ((0, c.D)(o).catch((e) => {
                (0, a.x$)().error(
                  "setupI18nLocaleHandler(): changeLocale() error",
                  e,
                );
              }),
              e && d(e, (0, r._f)(o)));
          }));
      }
    },
    94102: (e, o, t) => {
      t.d(o, { Z: () => b });
      var n = t(27915),
        i = t(92449),
        a = [],
        r = a.forEach,
        s = a.slice,
        c = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
        u = {
          name: "cookie",
          lookup: function (e) {
            var o;
            if (e.lookupCookie && "undefined" != typeof document) {
              var t = (function (e) {
                for (
                  var o = "".concat(e, "="),
                    t = document.cookie.split(";"),
                    n = 0;
                  n < t.length;
                  n++
                ) {
                  for (var i = t[n]; " " === i.charAt(0); )
                    i = i.substring(1, i.length);
                  if (0 === i.indexOf(o))
                    return i.substring(o.length, i.length);
                }
                return null;
              })(e.lookupCookie);
              t && (o = t);
            }
            return o;
          },
          cacheUserLanguage: function (e, o) {
            o.lookupCookie &&
              "undefined" != typeof document &&
              (function (e, o, t, n) {
                var i =
                  arguments.length > 4 && void 0 !== arguments[4]
                    ? arguments[4]
                    : { path: "/", sameSite: "strict" };
                (t &&
                  ((i.expires = new Date()),
                  i.expires.setTime(i.expires.getTime() + 60 * t * 1e3)),
                  n && (i.domain = n),
                  (document.cookie = (function (e, o, t) {
                    var n = t || {};
                    n.path = n.path || "/";
                    var i = encodeURIComponent(o),
                      a = "".concat(e, "=").concat(i);
                    if (n.maxAge > 0) {
                      var r = n.maxAge - 0;
                      if (Number.isNaN(r))
                        throw new Error("maxAge should be a Number");
                      a += "; Max-Age=".concat(Math.floor(r));
                    }
                    if (n.domain) {
                      if (!c.test(n.domain))
                        throw new TypeError("option domain is invalid");
                      a += "; Domain=".concat(n.domain);
                    }
                    if (n.path) {
                      if (!c.test(n.path))
                        throw new TypeError("option path is invalid");
                      a += "; Path=".concat(n.path);
                    }
                    if (n.expires) {
                      if ("function" != typeof n.expires.toUTCString)
                        throw new TypeError("option expires is invalid");
                      a += "; Expires=".concat(n.expires.toUTCString());
                    }
                    if (
                      (n.httpOnly && (a += "; HttpOnly"),
                      n.secure && (a += "; Secure"),
                      n.sameSite)
                    )
                      switch (
                        "string" == typeof n.sameSite
                          ? n.sameSite.toLowerCase()
                          : n.sameSite
                      ) {
                        case !0:
                          a += "; SameSite=Strict";
                          break;
                        case "lax":
                          a += "; SameSite=Lax";
                          break;
                        case "strict":
                          a += "; SameSite=Strict";
                          break;
                        case "none":
                          a += "; SameSite=None";
                          break;
                        default:
                          throw new TypeError("option sameSite is invalid");
                      }
                    return a;
                  })(e, encodeURIComponent(o), i)));
              })(
                o.lookupCookie,
                e,
                o.cookieMinutes,
                o.cookieDomain,
                o.cookieOptions,
              );
          },
        },
        l = {
          name: "querystring",
          lookup: function (e) {
            var o;
            if ("undefined" != typeof window) {
              var t = window.location.search;
              !window.location.search &&
                window.location.hash &&
                window.location.hash.indexOf("?") > -1 &&
                (t = window.location.hash.substring(
                  window.location.hash.indexOf("?"),
                ));
              for (
                var n = t.substring(1).split("&"), i = 0;
                i < n.length;
                i++
              ) {
                var a = n[i].indexOf("=");
                a > 0 &&
                  n[i].substring(0, a) === e.lookupQuerystring &&
                  (o = n[i].substring(a + 1));
              }
            }
            return o;
          },
        },
        d = null,
        p = function () {
          if (null !== d) return d;
          try {
            d = "undefined" !== window && null !== window.localStorage;
            var e = "i18next.translate.boo";
            (window.localStorage.setItem(e, "foo"),
              window.localStorage.removeItem(e));
          } catch (e) {
            d = !1;
          }
          return d;
        },
        g = {
          name: "localStorage",
          lookup: function (e) {
            var o;
            if (e.lookupLocalStorage && p()) {
              var t = window.localStorage.getItem(e.lookupLocalStorage);
              t && (o = t);
            }
            return o;
          },
          cacheUserLanguage: function (e, o) {
            o.lookupLocalStorage &&
              p() &&
              window.localStorage.setItem(o.lookupLocalStorage, e);
          },
        },
        h = null,
        f = function () {
          if (null !== h) return h;
          try {
            h = "undefined" !== window && null !== window.sessionStorage;
            var e = "i18next.translate.boo";
            (window.sessionStorage.setItem(e, "foo"),
              window.sessionStorage.removeItem(e));
          } catch (e) {
            h = !1;
          }
          return h;
        },
        m = {
          name: "sessionStorage",
          lookup: function (e) {
            var o;
            if (e.lookupSessionStorage && f()) {
              var t = window.sessionStorage.getItem(e.lookupSessionStorage);
              t && (o = t);
            }
            return o;
          },
          cacheUserLanguage: function (e, o) {
            o.lookupSessionStorage &&
              f() &&
              window.sessionStorage.setItem(o.lookupSessionStorage, e);
          },
        },
        v = {
          name: "navigator",
          lookup: function (e) {
            var o = [];
            if ("undefined" != typeof navigator) {
              if (navigator.languages)
                for (var t = 0; t < navigator.languages.length; t++)
                  o.push(navigator.languages[t]);
              (navigator.userLanguage && o.push(navigator.userLanguage),
                navigator.language && o.push(navigator.language));
            }
            return o.length > 0 ? o : void 0;
          },
        },
        w = {
          name: "htmlTag",
          lookup: function (e) {
            var o,
              t =
                e.htmlTag ||
                ("undefined" != typeof document
                  ? document.documentElement
                  : null);
            return (
              t &&
                "function" == typeof t.getAttribute &&
                (o = t.getAttribute("lang")),
              o
            );
          },
        },
        k = {
          name: "path",
          lookup: function (e) {
            var o;
            if ("undefined" != typeof window) {
              var t = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
              if (t instanceof Array)
                if ("number" == typeof e.lookupFromPathIndex) {
                  if ("string" != typeof t[e.lookupFromPathIndex]) return;
                  o = t[e.lookupFromPathIndex].replace("/", "");
                } else o = t[0].replace("/", "");
            }
            return o;
          },
        },
        S = {
          name: "subdomain",
          lookup: function (e) {
            var o =
                "number" == typeof e.lookupFromSubdomainIndex
                  ? e.lookupFromSubdomainIndex + 1
                  : 1,
              t =
                "undefined" != typeof window &&
                window.location &&
                window.location.hostname &&
                window.location.hostname.match(
                  /^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i,
                );
            if (t) return t[o];
          },
        },
        b = (function () {
          function e(o) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            ((0, n.Z)(this, e),
              (this.type = "languageDetector"),
              (this.detectors = {}),
              this.init(o, t));
          }
          return (
            (0, i.Z)(e, [
              {
                key: "init",
                value: function (e) {
                  var o =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    t =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {};
                  ((this.services = e || { languageUtils: {} }),
                    (this.options = (function (e) {
                      return (
                        r.call(s.call(arguments, 1), function (o) {
                          if (o)
                            for (var t in o) void 0 === e[t] && (e[t] = o[t]);
                        }),
                        e
                      );
                    })(o, this.options || {}, {
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
                    (this.i18nOptions = t),
                    this.addDetector(u),
                    this.addDetector(l),
                    this.addDetector(g),
                    this.addDetector(m),
                    this.addDetector(v),
                    this.addDetector(w),
                    this.addDetector(k),
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
                  var o = this;
                  e || (e = this.options.order);
                  var t = [];
                  return (
                    e.forEach(function (e) {
                      if (o.detectors[e]) {
                        var n = o.detectors[e].lookup(o.options);
                        (n && "string" == typeof n && (n = [n]),
                          n && (t = t.concat(n)));
                      }
                    }),
                    (t = t.map(function (e) {
                      return o.options.convertDetectedLanguage(e);
                    })),
                    this.services.languageUtils.getBestMatchFromCodes
                      ? t
                      : t.length > 0
                        ? t[0]
                        : null
                  );
                },
              },
              {
                key: "cacheUserLanguage",
                value: function (e, o) {
                  var t = this;
                  (o || (o = this.options.caches),
                    o &&
                      ((this.options.excludeCacheFor &&
                        this.options.excludeCacheFor.indexOf(e) > -1) ||
                        o.forEach(function (o) {
                          t.detectors[o] &&
                            t.detectors[o].cacheUserLanguage(e, t.options);
                        })));
                },
              },
            ]),
            e
          );
        })();
      b.type = "languageDetector";
    },
  },
]);
