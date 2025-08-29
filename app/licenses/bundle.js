(() => {
  "use strict";
  var e,
    t = {
      89953: (e, t, n) => {
        n.d(t, { Z: () => s });
        var o = n(43392),
          i = n.n(o),
          r = n(8021),
          a = n.n(r)()(i());
        a.push([
          e.id,
          ".licenses-container {\n\tmargin: 80px 100px;\n}\n\n.licenses-header {\n\tfont-weight: bold;\n\tfont-size: 48px;\n\tline-height: 56px;\n\tcolor: var(--color-tab-text-active);\n}\n\n.licenses-description {\n\tmargin-top: 8px;\n\tmax-width: 540px;\n\tfont-size: 16px;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tline-height: 24px;\n\tcolor: var(--color-tab-text-blurred);\n}\n\n.licenses-content-wrapper {\n\tmargin-top: 32px;\n}\n\n.licenses-content-line {\n\tmargin-top: 10px;\n}\n\n.licenses-content-header {\n\tfont-size: 16px;\n\tline-height: 24px;\n\tcolor: var(--color-link);\n\ttext-decoration: none;\n\n\t&:hover {\n\t\tcolor: var(--color-link-hover);\n\t\tcursor: pointer;\n\t\ttext-decoration: underline;\n\t}\n\n\t&:active {\n\t\tcolor: var(--color-link-active);\n\t}\n}\n\n.licenses-content-text {\n\tmargin-top: 12px;\n\tmargin-bottom: 24px;\n\tpadding: 12px;\n\tmax-width: 574px;\n\tcolor: var(--color-tab-text-active);\n\toverflow-x: scroll;\n\tfont-family: Monaco;\n\tfont-size: 12px;\n\tline-height: 17px;\n\tborder: 1px solid var(--color-border);\n\tborder-radius: 4px;\n}\n",
          "",
        ]);
        const s = a;
      },
      69478: (e, t, n) => {
        (n.d(t, { nb: () => i }), n(72298), n(76133), n(13855), n(97003));
        var o = n(9448);
        function i() {
          const e = (0, o.o)(
            new URLSearchParams(window.location.search).get(
              "rendererInitialData",
            ) ?? "{}",
          );
          if (!e) throw new Error("getRendererInitialData() jsonParse error");
          return e;
        }
      },
      8868: (e, t, n) => {
        var o = n(50959),
          i = n(44478),
          r = n(55442),
          a = n(16602),
          s = n(5306),
          c = n(76133),
          l = n(36458),
          u = n(17184),
          d = n(72298),
          p = n(13855);
        const g = ["ar", "ar_AE"],
          h = ["he", "he_IL"],
          m = (e) => [...g, ...h].includes(e);
        var f = n(52296),
          v = n(43891),
          w = n(5778);
        const b = void 0 !== d.ipcMain;
        function x(e, t) {
          e.setAttribute("dir", t ? "rtl" : "ltr");
        }
        var V = n(59391),
          k = n(25211),
          y = n.n(k),
          S = n(62962),
          T = n.n(S),
          $ = n(20310),
          L = n.n($),
          E = n(29290),
          O = n.n(E),
          D = n(47289),
          I = n.n(D),
          A = n(24834),
          C = n.n(A),
          P = n(89953),
          U = {};
        ((U.styleTagTransform = C()),
          (U.setAttributes = O()),
          (U.insert = L().bind(null, "head")),
          (U.domAPI = T()),
          (U.insertStyleElement = I()),
          y()(P.Z, U),
          P.Z && P.Z.locals && P.Z.locals);
        var F = function (e, t, n, o) {
          var i,
            r = arguments.length,
            a =
              r < 3
                ? t
                : null === o
                  ? (o = Object.getOwnPropertyDescriptor(t, n))
                  : o;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            a = Reflect.decorate(e, t, n, o);
          else
            for (var s = e.length - 1; s >= 0; s--)
              (i = e[s]) &&
                (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
          return (r > 3 && a && Object.defineProperty(t, n, a), a);
        };
        (l.i.initializeRpc(), c.Pd.exists || c.Pd.initialize((0, c.kS)()));
        let z = class extends o.Component {
          state = { licenses: {}, isLicensesVisible: [] };
          componentDidMount() {
            var e;
            ((0, V.wK)(this.initLicenses()),
              (e = document.documentElement) &&
                "" === e.dir &&
                x(e, m(f.Z.language)),
              (function (e) {
                let t;
                t = b
                  ? l.i.provide(w.R).localeChange.subscribe(e)
                  : l.i.provideProxy(w.R).localeChange.subscribe(e);
                const n = () => {
                  (t?.unsubscribe(),
                    (t = void 0),
                    window.removeEventListener("beforeunload", n));
                };
                "undefined" != typeof window &&
                  window.addEventListener("beforeunload", n);
              })((t) => {
                "" !== t &&
                  ((0, v.D)(t).catch((e) => {
                    (0, p.x$)().error(
                      "setupI18nLocaleHandler(): changeLocale() error",
                      e,
                    );
                  }),
                  e && x(e, m(t)));
              }),
              (document.title = this.props.t("Libraries we use")),
              this.props.i18n.on("languageChanged", () => {
                document.title = this.props.t("Libraries we use");
              }));
          }
          async initLicenses() {
            const e = await l.i.provideProxy("tvd:main-service").getLicenses();
            e &&
              this.setState({
                licenses: e,
                isLicensesVisible: new Array(Object.keys(e).length).fill(!1),
              });
          }
          toggleLicensesVisible(e) {
            this.setState({
              isLicensesVisible: this.state.isLicensesVisible.map((t, n) =>
                n === e ? !t : t,
              ),
            });
          }
          renderLicenses() {
            return o.createElement(
              o.Fragment,
              null,
              this.state.licenses &&
                Object.keys(this.state.licenses).map((e, t) =>
                  o.createElement(
                    "div",
                    { key: e, className: "licenses-content-line" },
                    o.createElement(
                      "a",
                      {
                        className: "licenses-content-header",
                        onClick: () => this.toggleLicensesVisible(t),
                      },
                      e,
                    ),
                    this.state.isLicensesVisible[t] &&
                      o.createElement(
                        "pre",
                        { className: "licenses-content-text" },
                        this.state.licenses[e],
                      ),
                  ),
                ),
            );
          }
          render() {
            return o.createElement(
              "div",
              { className: "licenses-container" },
              o.createElement(
                "div",
                { className: "licenses-header" },
                this.props.t("Libraries we use"),
              ),
              o.createElement(
                "div",
                { className: "licenses-description" },
                this.props.t(
                  "This is our attribution notice on third party software, which may be included in some sections of our Libraries. Also, we have to say a big thanks to everybody in the open source community for all their help, sweat and hard work.",
                ),
              ),
              o.createElement(
                "div",
                { className: "licenses-content-wrapper" },
                this.renderLicenses(),
              ),
            );
          }
        };
        (F([u.t], z.prototype, "initLicenses", null),
          F([u.t], z.prototype, "toggleLicensesVisible", null),
          (z = F([(0, u.r)("Licenses")], z)));
        const _ = (0, s.Zh)()(z);
        (n(96893), (0, r.sX)(), (0, a.g)());
        const M = document.getElementById("root");
        M &&
          (0, i.s)(M).render(
            o.createElement(function () {
              return o.createElement(_, null);
            }, null),
          );
      },
      76133: (e, t, n) => {
        n.d(t, { kS: () => o.kS, Pd: () => i.P });
        var o = n(75432),
          i = (n(23935), n(23577), n(28430));
      },
      55442: (e, t, n) => {
        n.d(t, { sX: () => o.s, n_: () => i.n_, YA: () => i.YA });
        var o = n(17066),
          i = (n(18737), n(10496));
      },
      16693: (e, t, n) => {
        (0, n(87269).Um)();
      },
      89597: (e, t, n) => {
        var o, i, r, a;
        (!(function (e) {
          ((e[(e.Normal = 0)] = "Normal"),
            (e[(e.Maximized = 1)] = "Maximized"),
            (e[(e.Minimized = 2)] = "Minimized"),
            (e[(e.Hidden = 3)] = "Hidden"),
            (e[(e.Fullscreen = 4)] = "Fullscreen"),
            (e[(e.FullscreenWithPanel = 5)] = "FullscreenWithPanel"));
        })(o || (o = {})),
          (function (e) {
            ((e.Basic = "basic"),
              (e.Options = "options"),
              (e.Credentials = "credentials"),
              (e.SignIn = "sign-in"),
              (e.Settings = "settings"),
              (e.SaveChanges = "save-changes"),
              (e.Welcome = "welcome"));
          })(i || (i = {})),
          (function (e) {
            ((e.Show = "show"), (e.Move = "move"));
          })(r || (r = {})),
          (function (e) {
            ((e[(e.Basic = 0)] = "Basic"),
              (e[(e.ChartData = 1)] = "ChartData"));
          })(a || (a = {})));
      },
      29060: (e, t, n) => {
        n.d(t, { og: () => o });
        const o = "tvd:locale-get-translations";
      },
      41029: (e, t, n) => {
        (n.d(t, { Um: () => o.Um }), n(96486), n(16693));
        var o = n(87269);
      },
      59391: (e, t, n) => {
        n.d(t, { wK: () => o.wK, _v: () => o._v, Um: () => i.Um });
        var o = n(95091),
          i = n(41029);
        (n(67644), n(57118), n(19014), n(89183));
      },
      67644: (e, t, n) => {
        var o;
        (n(65355),
          n(84011),
          n(41029),
          (function (e) {
            ((e.Enter = "Enter"),
              (e.Space = "Space"),
              (e.Tab = "Tab"),
              (e.ArrowUp = "ArrowUp"),
              (e.ArrowDown = "ArrowDown"),
              (e.Escape = "Escape"));
          })(o || (o = {})));
      },
      87269: (e, t, n) => {
        n.d(t, { Um: () => o });
        const o = () => "darwin" === process.platform;
      },
      57118: (e, t, n) => {
        n(57310);
        var o = n(62771);
        const i = "TARGET_TVD_HOST",
          r = "https://www.tradingview.com/",
          a = (0, o.V)(() => {
            const e = "http(s?):\\/\\/((\\w|-)*\\.)?tradingview\\.com";
            let t = r;
            return (
              i in process.env && (t = process.env[i] ?? r),
              null !== new RegExp(e, "i").exec(t)
                ? e
                : (t.endsWith("/") && (t = t?.substring(0, t.length - 1)),
                  t.replace(/\./gi, "\\.").replace(/\//gi, "\\/"))
            );
          });
        function s(e, t = !0) {
          const n = (e) => {
            let n = e
              .toString()
              .replace(/\./gi, "\\.")
              .replace(/(?<!\))\*/gi, "(.*)");
            return (
              n.match(/\w+(\/\((\.\*\)))/gi) &&
                (n = n.replace(/\/\((\.\*\))/gi, "(/(.*))?")),
              (n = n.replace(/\//gi, "\\/").replace(/\$\{TV\}/gi, a())),
              (n = `^${n}${t ? "$" : ""}`),
              new RegExp(n, "i")
            );
          };
          return "string" == typeof e ? n(e) : e.map(n);
        }
        const c = "${TV}/chart/([a-zA-Z0-9]{0,12})?/?",
          l = "${TV}/(\\w|-)*screener/*";
        ((0, o.V)(() => s(l)),
          (0, o.V)(() => s("${TV}/", !0)),
          (0, o.V)(() => s("${TV}/chart/", !0)),
          (0, o.V)(() => s(c)),
          (0, o.V)(() => s("(${TV}/chart/([a-zA-Z0-9]{0,12})?)/\\?*?")),
          (0, o.V)(() =>
            s(
              "${TV}/chart/[a-z0-9-._~:\\?#@!$&'()*+,;%=]+/[a-z0-9-._~:\\?#@!$&'()*+,;%=]+/",
              !0,
            ),
          ),
          (0, o.V)(() => s("${TV}/screener/*")),
          (0, o.V)(() => s("${TV}/heatmap/*")),
          (0, o.V)(() => s("${TV}/community/*")),
          (0, o.V)(() => s("${TV}/pine-script-docs/en/v5/Introduction.html")),
          (0, o.V)(() => s("${TV}/pine-script-reference/v5/")),
          (0, o.V)(() => s("${TV}/x/*")),
          (0, o.V)(() => s("${TV}/*")),
          (0, o.V)(() => s("${TV}/account-recovery/*")),
          (0, o.V)(() => s("${TV}/chat/*")),
          (0, o.V)(() => /:\/\/s3\..+\/snapshots\//i),
          (0, o.V)(() => s("${TV}/pine/*")),
          (0, o.V)(() => s("${TV}/markets/*")),
          (0, o.V)(() => s("${TV}/markets/*/news/")),
          (0, o.V)(() => s("${TV}/markets/stocks-*/*")),
          (0, o.V)(() => s("${TV}/markets/world-economy/*")),
          (0, o.V)(() => s("${TV}/u/TradingView/")),
          (0, o.V)(() => s("${TV}/news/*")),
          (0, o.V)(() => s("${TV}/news/")),
          (0, o.V)(() => s("${TV}/news/\\?market=*")),
          (0, o.V)(() => s("${TV}/news/\\?market=topstories")),
          (0, o.V)(() =>
            s("${TV}/HTML5-stock-forex-bitcoin-charting-library/"),
          ),
          (0, o.V)(() => s("${TV}/support/*")),
          (0, o.V)(() => s("https://status.tradingview.com/", !0)),
          (0, o.V)(() =>
            s([
              "${TV}/news/*",
              "${TV}/support/*",
              "${TV}/house-rules/*",
              "${TV}/key-events/*",
              "${TV}/symbols/*",
              "${TV}/heatmap/*",
              "${TV}/economic-calendar/",
              l,
              "${TV}/ideas/*",
              "${TV}/community/*",
              "${TV}/markets/*",
              "${TV}/sparks/*",
              "${TV}/education/*",
            ]),
          ),
          (0, o.V)(() => s("${TV}/markets/bonds/*")),
          (0, o.V)(() =>
            s([
              c,
              l,
              "${TV}/markets/*",
              "${TV}/symbols/*",
              "${TV}/(\\w|-)*calendar/*",
            ]),
          ));
      },
      72298: (e) => {
        e.exports = require("electron");
      },
      57147: (e) => {
        e.exports = require("fs");
      },
      71017: (e) => {
        e.exports = require("path");
      },
      57310: (e) => {
        e.exports = require("url");
      },
      94102: (e, t, n) => {
        n.d(t, { Z: () => V });
        var o = n(27915),
          i = n(92449),
          r = [],
          a = r.forEach,
          s = r.slice,
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
              var t;
              if (e.lookupLocalStorage && p()) {
                var n = window.localStorage.getItem(e.lookupLocalStorage);
                n && (t = n);
              }
              return t;
            },
            cacheUserLanguage: function (e, t) {
              t.lookupLocalStorage &&
                p() &&
                window.localStorage.setItem(t.lookupLocalStorage, e);
            },
          },
          h = null,
          m = function () {
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
          f = {
            name: "sessionStorage",
            lookup: function (e) {
              var t;
              if (e.lookupSessionStorage && m()) {
                var n = window.sessionStorage.getItem(e.lookupSessionStorage);
                n && (t = n);
              }
              return t;
            },
            cacheUserLanguage: function (e, t) {
              t.lookupSessionStorage &&
                m() &&
                window.sessionStorage.setItem(t.lookupSessionStorage, e);
            },
          },
          v = {
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
          b = {
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
          V = (function () {
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
                      this.addDetector(l),
                      this.addDetector(u),
                      this.addDetector(g),
                      this.addDetector(f),
                      this.addDetector(v),
                      this.addDetector(w),
                      this.addDetector(b),
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
        V.type = "languageDetector";
      },
    },
    n = {};
  function o(e) {
    var i = n[e];
    if (void 0 !== i) return i.exports;
    var r = (n[e] = { id: e, exports: {} });
    return (t[e].call(r.exports, r, r.exports, o), r.exports);
  }
  ((o.m = t),
    (e = []),
    (o.O = (t, n, i, r) => {
      if (!n) {
        var a = 1 / 0;
        for (u = 0; u < e.length; u++) {
          for (var [n, i, r] = e[u], s = !0, c = 0; c < n.length; c++)
            (!1 & r || a >= r) && Object.keys(o.O).every((e) => o.O[e](n[c]))
              ? n.splice(c--, 1)
              : ((s = !1), r < a && (a = r));
          if (s) {
            e.splice(u--, 1);
            var l = i();
            void 0 !== l && (t = l);
          }
        }
        return t;
      }
      r = r || 0;
      for (var u = e.length; u > 0 && e[u - 1][2] > r; u--) e[u] = e[u - 1];
      e[u] = [n, i, r];
    }),
    (o.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return (o.d(t, { a: t }), t);
    }),
    (o.d = (e, t) => {
      for (var n in t)
        o.o(t, n) &&
          !o.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (o.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (o.r = (e) => {
      ("undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 }));
    }),
    (() => {
      var e;
      o.g.importScripts && (e = o.g.location + "");
      var t = o.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var n = t.getElementsByTagName("script");
        n.length && (e = n[n.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      ((e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (o.p = e + "../"));
    })(),
    (() => {
      o.b = document.baseURI || self.location.href;
      var e = { 9223: 0 };
      o.O.j = (t) => 0 === e[t];
      var t = (t, n) => {
          var i,
            r,
            [a, s, c] = n,
            l = 0;
          if (a.some((t) => 0 !== e[t])) {
            for (i in s) o.o(s, i) && (o.m[i] = s[i]);
            if (c) var u = c(o);
          }
          for (t && t(n); l < a.length; l++)
            ((r = a[l]), o.o(e, r) && e[r] && e[r][0](), (e[a[l]] = 0));
          return o.O(u);
        },
        n = (global.webpackChunktradingview_desktop =
          global.webpackChunktradingview_desktop || []);
      (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
    })());
  var i = o.O(void 0, [7498, 686, 1070, 6486, 8234, 819, 2184, 567], () =>
    o(8868),
  );
  i = o.O(i);
})();
