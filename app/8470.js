"use strict";
(global.webpackChunktradingview_desktop =
  global.webpackChunktradingview_desktop || []).push([
  [8470],
  {
    15475: (e, t, n) => {
      n.d(t, { Z: () => s });
      var o = n(43392),
        a = n.n(o),
        i = n(8021),
        r = n.n(i)()(a());
      r.push([
        e.id,
        ".warning-container {\n\tdisplay: flex;\n\tpadding: 16px;\n\tbackground-color: var(--color-toast-bg);\n\tcolor: var(--color-tooltip-text);\n}\n\n.esc-wrapper {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tmin-width: 27px;\n\tmin-height: 27px;\n\tfont-size: 12px;\n\tfont-weight: 600;\n\tborder: 1px var(--fullscreen-warning-border) solid;\n\tborder-radius: 2px;\n\tcolor: var(--fullscreen-warning-border);\n}\n\n.warning-text {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tmargin: 0 6px;\n\tfont-size: 16px;\n\tfont-weight: 500;\n\twhite-space: pre;\n}\n\n.warning-text:first-child {\n\tmargin: 0 6px 0 0;\n}\n\n.warning-text:last-child {\n\tmargin: 0  0 0 6px;\n}\n",
        "",
      ]);
      const s = r;
    },
    68470: (e, t, n) => {
      (n.r(t), n.d(t, { default: () => S }));
      var o = n(50959),
        a = n(76133),
        i = n(55622),
        r = n(69478),
        s = n(25211),
        c = n.n(s),
        l = n(62962),
        u = n.n(l),
        d = n(20310),
        g = n.n(d),
        p = n(29290),
        f = n.n(p),
        h = n(47289),
        m = n.n(h),
        w = n(24834),
        v = n.n(w),
        k = n(15475),
        x = {};
      ((x.styleTagTransform = v()),
        (x.setAttributes = f()),
        (x.insert = g().bind(null, "head")),
        (x.domAPI = u()),
        (x.insertStyleElement = m()),
        c()(k.Z, x),
        k.Z && k.Z.locals && k.Z.locals,
        a.Pd.exists || a.Pd.initialize((0, a.kS)()));
      class S extends o.Component {
        state = { text: "Fullscreen", key: "ESC" };
        componentDidMount() {
          this.props.toastView &&
            ((0, i.w0)(),
            (0, r.ZU)(),
            this.setState(this.props.toastView.toast.message));
        }
        render() {
          return o.createElement(
            "div",
            { className: "warning-container" },
            ((e = this.state.text),
            (t = this.state.key),
            e
              .split(t)
              .map((e, n) =>
                "" === e && 0 !== n
                  ? o.createElement("span", { className: "esc-wrapper" }, t)
                  : 1 === n && "" !== e
                    ? o.createElement(
                        o.Fragment,
                        null,
                        o.createElement(
                          "span",
                          { className: "esc-wrapper" },
                          t,
                        ),
                        o.createElement(
                          "span",
                          { className: "warning-text" },
                          e,
                        ),
                      )
                    : o.createElement("span", { className: "warning-text" }, e),
              )),
          );
          var e, t;
        }
      }
    },
    43891: (e, t, n) => {
      n.d(t, { D: () => i });
      var o = n(96486),
        a = n(52296);
      const i = async (e) => {
        a.Z.language !== e && (await o.ZP.changeLanguage(e));
      };
    },
    52296: (e, t, n) => {
      n.d(t, { Z: () => g });
      var o = n(71017),
        a = n(72298),
        i = n(96486),
        r = n(94102),
        s = n(5306),
        c = n(46628),
        l = n(29060),
        u = n(9448);
      let d;
      if (a.ipcMain) {
        function p() {
          const e = {},
            t = o.join(a.app.getAppPath(), "resources", "locales");
          for (const n of c.P.readDirSync(t)) {
            const a = c.P.readFileSync(o.join(t, n)),
              i = o.parse(n).name,
              r = (0, u.o)(a);
            r && (e[i] = { translation: r });
          }
          return e;
        }
        ((d = p()),
          a.ipcMain.on(l.og, (e) => {
            e.returnValue = d;
          }));
      } else d = a.ipcRenderer.sendSync(l.og);
      i.ZP.use(r.Z)
        .use(s.Db)
        .init({
          keySeparator: "::",
          nsSeparator: ":::",
          resources: d,
          fallbackLng: "en",
          returnEmptyString: !1,
          interpolation: { escapeValue: !1 },
        });
      const g = i.ZP;
    },
    5778: (e, t, n) => {
      n.d(t, { R: () => o });
      const o = "tvd:locale-service";
    },
    55622: (e, t, n) => {
      n.d(t, { w0: () => g });
      var o = n(72298),
        a = n(36458),
        i = n(13855),
        r = n(26063),
        s = n(52296),
        c = n(43891),
        l = n(5778);
      const u = void 0 !== o.ipcMain;
      function d(e, t) {
        e.setAttribute("dir", t ? "rtl" : "ltr");
      }
      function g(e) {
        (e && "" === e.dir && d(e, (0, r._f)(s.Z.language)),
          (function (e) {
            let t;
            t = u
              ? a.i.provide(l.R).localeChange.subscribe(e)
              : a.i.provideProxy(l.R).localeChange.subscribe(e);
            const n = () => {
              (t?.unsubscribe(),
                (t = void 0),
                window.removeEventListener("beforeunload", n));
            };
            "undefined" != typeof window &&
              window.addEventListener("beforeunload", n);
          })((t) => {
            "" !== t &&
              ((0, c.D)(t).catch((e) => {
                (0, i.x$)().error(
                  "setupI18nLocaleHandler(): changeLocale() error",
                  e,
                );
              }),
              e && d(e, (0, r._f)(t)));
          }));
      }
    },
    94102: (e, t, n) => {
      n.d(t, { Z: () => S });
      var o = n(27915),
        a = n(92449),
        i = [],
        r = i.forEach,
        s = i.slice,
        c = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
        l = {
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
                  for (var a = n[o]; " " === a.charAt(0); )
                    a = a.substring(1, a.length);
                  if (0 === a.indexOf(t))
                    return a.substring(t.length, a.length);
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
                var a =
                  arguments.length > 4 && void 0 !== arguments[4]
                    ? arguments[4]
                    : { path: "/", sameSite: "strict" };
                (n &&
                  ((a.expires = new Date()),
                  a.expires.setTime(a.expires.getTime() + 60 * n * 1e3)),
                  o && (a.domain = o),
                  (document.cookie = (function (e, t, n) {
                    var o = n || {};
                    o.path = o.path || "/";
                    var a = encodeURIComponent(t),
                      i = "".concat(e, "=").concat(a);
                    if (o.maxAge > 0) {
                      var r = o.maxAge - 0;
                      if (Number.isNaN(r))
                        throw new Error("maxAge should be a Number");
                      i += "; Max-Age=".concat(Math.floor(r));
                    }
                    if (o.domain) {
                      if (!c.test(o.domain))
                        throw new TypeError("option domain is invalid");
                      i += "; Domain=".concat(o.domain);
                    }
                    if (o.path) {
                      if (!c.test(o.path))
                        throw new TypeError("option path is invalid");
                      i += "; Path=".concat(o.path);
                    }
                    if (o.expires) {
                      if ("function" != typeof o.expires.toUTCString)
                        throw new TypeError("option expires is invalid");
                      i += "; Expires=".concat(o.expires.toUTCString());
                    }
                    if (
                      (o.httpOnly && (i += "; HttpOnly"),
                      o.secure && (i += "; Secure"),
                      o.sameSite)
                    )
                      switch (
                        "string" == typeof o.sameSite
                          ? o.sameSite.toLowerCase()
                          : o.sameSite
                      ) {
                        case !0:
                          i += "; SameSite=Strict";
                          break;
                        case "lax":
                          i += "; SameSite=Lax";
                          break;
                        case "strict":
                          i += "; SameSite=Strict";
                          break;
                        case "none":
                          i += "; SameSite=None";
                          break;
                        default:
                          throw new TypeError("option sameSite is invalid");
                      }
                    return i;
                  })(e, encodeURIComponent(t), a)));
              })(
                t.lookupCookie,
                e,
                t.cookieMinutes,
                t.cookieDomain,
                t.cookieOptions,
              );
          },
        },
        u = {
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
                var o = n.substring(1).split("&"), a = 0;
                a < o.length;
                a++
              ) {
                var i = o[a].indexOf("=");
                i > 0 &&
                  o[a].substring(0, i) === e.lookupQuerystring &&
                  (t = o[a].substring(i + 1));
              }
            }
            return t;
          },
        },
        d = null,
        g = function () {
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
        p = {
          name: "localStorage",
          lookup: function (e) {
            var t;
            if (e.lookupLocalStorage && g()) {
              var n = window.localStorage.getItem(e.lookupLocalStorage);
              n && (t = n);
            }
            return t;
          },
          cacheUserLanguage: function (e, t) {
            t.lookupLocalStorage &&
              g() &&
              window.localStorage.setItem(t.lookupLocalStorage, e);
          },
        },
        f = null,
        h = function () {
          if (null !== f) return f;
          try {
            f = "undefined" !== window && null !== window.sessionStorage;
            var e = "i18next.translate.boo";
            (window.sessionStorage.setItem(e, "foo"),
              window.sessionStorage.removeItem(e));
          } catch (e) {
            f = !1;
          }
          return f;
        },
        m = {
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
        w = {
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
        v = {
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
        x = {
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
            (0, a.Z)(e, [
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
                        r.call(s.call(arguments, 1), function (t) {
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
                    this.addDetector(l),
                    this.addDetector(u),
                    this.addDetector(p),
                    this.addDetector(m),
                    this.addDetector(w),
                    this.addDetector(v),
                    this.addDetector(k),
                    this.addDetector(x));
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
  },
]);
