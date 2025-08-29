"use strict";
(global.webpackChunktradingview_desktop =
  global.webpackChunktradingview_desktop || []).push([
  [6759],
  {
    43248: (e, t, n) => {
      n.d(t, { Z: () => o });
      var r = n(43392),
        a = n.n(r),
        i = n(8021),
        s = n.n(i)()(a());
      s.push([
        e.id,
        ".sign-in-wrapper {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: start;\n\theight: 100%;\n\tbox-sizing: border-box;\n\tposition: relative;\n\tcolor: var(--color-content-primary-neutral-bold);\n}\n\n.sign-in-container {\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tmargin: 0 auto;\n}\n\n.sign-in-main {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n}\n\n.sign-in-logo {\n\theight: 48px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin-bottom: 24px;\n}\n\n.sign-in-logo-small {\n\tposition: absolute;\n\ttop: 32px;\n}\n\n.sign-in-title {\n\tmargin-bottom: 32px;\n}\n\n.default-view {\n\tmargin-top: 160px;\n}\n\n.grant-access-view {\n\tmargin-top: 160px;\n}\n\n.grant-access-header {\n\tmargin-bottom: 16px;\n}\n\n.grant-access-text {\n\twidth: 340px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 20px;\n}\n\n.footer-wrapper {\n\tposition: absolute;\n\tbottom: 0;\n\twidth: 100%;\n}\n\n.footer {\n\tdisplay: flex;\n\tjustify-content: center;\n\twidth: 100%;\n\tmargin: 24px 0;\n}\n\n.error-container {\n\tmargin: 0 auto 16px;\n\twidth: max-content;\n\tmax-width: 600px;\n\twhite-space: nowrap;\n}\n\n.sign-in-button-close {\n\tposition: absolute;\n\ttop: 20px;\n\n\t[dir='ltr'] & {\n\t\tright: 20px;\n\t}\n\n\t[dir='rtl'] & {\n\t\tleft: 20px;\n\t}\n}\n",
        "",
      ]);
      const o = s;
    },
    26759: (e, t, n) => {
      (n.r(t), n.d(t, { SignInDialog: () => D, default: () => P }));
      var r = n(5306),
        a = n(50959),
        i = n(70612),
        s = n(45602),
        o = n(31166),
        l = n(34192),
        c = n(98078),
        h = n(17184),
        p = n(92686),
        u = n(4729),
        g = n(69478),
        m = n(65279);
      n(85981);
      const d = ({
          name: e,
          children: t,
          className: n,
          tabIndex: r = 0,
          ...i
        }) =>
          a.createElement(
            "a",
            { ...i, tabIndex: r, className: `${m[e]} ${n ?? ""}` },
            t,
          ),
        v = " ";
      var y, f;
      function E() {
        return (
          (E =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          E.apply(this, arguments)
        );
      }
      const w = function (e) {
        return a.createElement(
          "svg",
          E(
            {
              width: 158,
              height: 28,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e,
          ),
          y ||
            (y = a.createElement("path", {
              d: "M127.367 7.215c0 .981-.825 1.779-1.863 1.779-.995 0-1.842-.798-1.842-1.78 0-.98.847-1.778 1.842-1.778 1.038 0 1.863.797 1.863 1.779ZM127 21h-3V10h3v11ZM81.543 9.025c1.038 0 1.863-.798 1.863-1.78 0-.981-.825-1.779-1.863-1.779-.995 0-1.841.798-1.841 1.78 0 .981.847 1.779 1.841 1.779ZM80 21h3V10h-3v11ZM43 21h-2.999V9H36V6h11v3h-4v12ZM50 21l-3 .018V10h3v1.885a2.68 2.68 0 0 1 2.526-1.759h.033c.305 0 .594 0 .941.099v2.842a4.006 4.006 0 0 0-1.313-.2C50.81 12.867 50 13.87 50 15.568V21ZM88 21h-3V10.012L88 10v1c.572-.818 1.53-1.213 2.906-1.213 2.562 0 4.086 1.8 4.086 4.458V21H92v-6c0-1.473-.564-2.657-1.771-2.657-1.355 0-2.229.922-2.229 2.886v5.77ZM117 21l6-15h-3.5l-4 10.5L111 6h-3.5l6.5 15h3ZM153.449 21h-2.926l-2.023-6.248L146.499 21h-2.927L140 10h3.142l2.044 7.04 2.173-7.04h2.26l2.195 7.04 2.023-7.04H157l-3.551 11Z",
              fill: "currentColor",
            })),
          f ||
            (f = a.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M58.918 21.242c1.518 0 2.576-.77 3.082-1.474V21h3l-.004-11h-2.992v1.232c-.506-.704-1.568-1.474-3.086-1.474-2.926 0-5.17 2.64-5.17 5.742s2.244 5.742 5.17 5.742Zm.638-2.75c-1.672 0-2.772-1.254-2.772-2.992s1.1-2.992 2.772-2.992c1.672 0 2.772 1.254 2.772 2.992s-1.1 2.992-2.772 2.992ZM75 19.768c-.506.704-1.564 1.474-3.082 1.474-2.926 0-5.17-2.64-5.17-5.742s2.244-5.742 5.17-5.742c1.518 0 2.576.77 3.082 1.474V6h3v15h-3v-1.232ZM69.784 15.5c0 1.738 1.1 2.992 2.772 2.992 1.672 0 2.772-1.254 2.772-2.992s-1.1-2.992-2.772-2.992c-1.672 0-2.772 1.254-2.772 2.992ZM102.226 25.818c3.366 0 5.774-1.716 5.774-5.676V10h-3v1.232c-.594-.858-1.652-1.474-3.06-1.474-2.882 0-5.192 2.464-5.192 5.566 0 3.08 2.31 5.676 5.192 5.676 1.408 0 2.466-.77 3.06-1.584v.748c0 1.76-1.036 3.014-2.818 3.014-1.232 0-2.464-.418-3.432-1.364l-1.65 2.244c1.254 1.21 3.212 1.76 5.126 1.76Zm.352-7.678c-1.518 0-2.794-1.144-2.794-2.816 0-1.694 1.276-2.816 2.794-2.816s2.794 1.122 2.794 2.816c0 1.672-1.276 2.816-2.794 2.816ZM139.782 18.724c-1.034 1.496-2.794 2.464-5.104 2.464-3.278 0-5.83-2.266-5.83-5.742 0-3.256 2.442-5.742 5.786-5.742 2.882 0 5.412 1.826 5.412 5.412l.001.16a6.01 6.01 0 0 1-.045.974h-8.228c.176 1.474 1.474 2.188 2.926 2.188 1.386 0 2.332-.616 2.838-1.386l2.244 1.672Zm-5.236-6.534c-1.122 0-2.376.572-2.662 1.914h5.148c-.264-1.32-1.364-1.914-2.486-1.914ZM12 6H0v6h6v9h6V6Zm12 15h-7l6-15h7l-6 15Zm-7-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
              fill: "currentColor",
            })),
        );
      };
      var x;
      function b() {
        return (
          (b =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          b.apply(this, arguments)
        );
      }
      const C = function (e) {
        return a.createElement(
          "svg",
          b(
            {
              width: 54,
              height: 48,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e,
          ),
          x ||
            (x = a.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M21 38H11V21H0V11h21v27Zm15-21a6 6 0 1 1-12 0 6 6 0 0 1 12 0Zm-6 21 11.5-27h12L42 38H30Z",
              fill: "currentColor",
            })),
        );
      };
      var Z = n(25211),
        k = n.n(Z),
        S = n(62962),
        N = n.n(S),
        V = n(20310),
        A = n.n(V),
        T = n(29290),
        M = n.n(T),
        W = n(47289),
        F = n.n(W),
        I = n(24834),
        O = n.n(I),
        j = n(43248),
        H = {};
      ((H.styleTagTransform = O()),
        (H.setAttributes = M()),
        (H.insert = A().bind(null, "head")),
        (H.domAPI = N()),
        (H.insertStyleElement = F()),
        k()(j.Z, H),
        j.Z && j.Z.locals && j.Z.locals);
      class L extends a.Component {
        authStateSubscription;
        state = { authState: { stage: u.TC.NoAuthentication } };
        componentDidMount() {
          ((this.authStateSubscription = (0,
          p.Od)().authenticationState.subscribe((e) => {
            (this.state.authState.stage === u.TC.Waiting2FA &&
              e.stage !== u.TC.NoAuthentication) ||
              this.setState({ authState: e });
          })),
            addEventListener("keyup", this.keyUpHandler));
        }
        componentWillUnmount() {
          (this.authStateSubscription?.unsubscribe(),
            removeEventListener("keyup", this.keyUpHandler));
        }
        keyUpHandler = (e) => {
          this.state.authState.stage === u.TC.NoAuthentication &&
            ("Escape" === e.code && this.close(),
            ("Space" !== e.code && "Enter" !== e.code) || this.onSignInClick());
        };
        render() {
          return a.createElement(
            "div",
            { className: "sign-in-wrapper" },
            a.createElement(
              "div",
              { className: "sign-in-container" },
              this.renderContent(),
            ),
            a.createElement(
              "div",
              { className: "footer-wrapper" },
              this.state.authState.error &&
                this.renderErrorMessage(this.state.authState.error),
              a.createElement(o.i, {
                type: "primary",
                size: "xsmall",
                orientation: "horizontal",
              }),
              a.createElement(
                "div",
                { className: "footer" },
                this.renderFooter(),
              ),
            ),
            a.createElement(
              "div",
              { className: "sign-in-button-close" },
              a.createElement(i.P, {
                "aria-label": "sign-in-button-close",
                size: "medium",
                onClick: () => this.close(),
              }),
            ),
          );
        }
        onSignInClick() {
          (0, p.Od)().signInWithBrowser();
        }
        onSignUpClick() {
          (0, p.Od)().signInWithBrowser();
        }
        onStepBackClick() {
          (0, p.Od)().cancelSignIn();
        }
        close() {
          (0, g.Ku)().close();
        }
        renderFooter() {
          switch (this.state.authState.stage) {
            case u.TC.NoAuthentication:
            case u.TC.Error:
              return this.renderDoNotHaveAccountFooter();
            default:
              return this.renderSomethingWentWrongFooter();
          }
        }
        renderDoNotHaveAccountFooter() {
          return a.createElement(
            a.Fragment,
            null,
            a.createElement(
              c.Z,
              { name: "typography-regular-16px", tag: "span" },
              this.props.t("Do not have an account?"),
            ),
            a.createElement(
              c.Z,
              { name: "typography-regular-16px", tag: "span" },
              v,
            ),
            a.createElement(
              d,
              {
                name: "link-colors-with-underline",
                onClick: () => this.onSignUpClick(),
              },
              a.createElement(
                c.Z,
                { name: "typography-regular-16px", tag: "span" },
                this.props.t("Sign up"),
              ),
            ),
          );
        }
        renderSomethingWentWrongFooter() {
          return a.createElement(
            a.Fragment,
            null,
            a.createElement(
              c.Z,
              { name: "typography-regular-16px", tag: "span" },
              this.props.t("If something went wrong,"),
              " ",
            ),
            a.createElement(
              c.Z,
              { name: "typography-regular-16px", tag: "span" },
              v,
            ),
            a.createElement(
              d,
              {
                name: "link-colors-with-underline",
                onClick: () => this.onStepBackClick(),
              },
              a.createElement(
                c.Z,
                { name: "typography-regular-16px", tag: "span" },
                this.props.t("step back"),
              ),
            ),
            a.createElement(
              c.Z,
              { name: "typography-regular-16px", tag: "span" },
              v,
            ),
            a.createElement(
              c.Z,
              { name: "typography-regular-16px", tag: "span" },
              this.props.t("and retry"),
            ),
          );
        }
        renderContent() {
          switch (this.state.authState.stage) {
            case u.TC.NoAuthentication:
            case u.TC.Error:
              return this.renderDefaultView();
            case u.TC.WaitingToken:
            case u.TC.TokenReady:
              return this.renderWaitView();
            case u.TC.Waiting2FA:
              return this.render2FAView();
            default:
              return this.renderEmptyView();
          }
        }
        renderDefaultView() {
          return a.createElement(
            "div",
            { className: "sign-in-main default-view" },
            a.createElement(
              "div",
              { className: "sign-in-logo" },
              a.createElement(C, null),
            ),
            a.createElement(
              c.Z,
              {
                tag: "h1",
                name: "typography-accent-24px-bold",
                className: "sign-in-title",
              },
              this.props.t("Welcome to TradingView"),
            ),
            a.createElement(
              s.LE,
              {
                onClick: () => {
                  this.onSignInClick();
                },
                size: "xlarge",
                variant: "primary",
                stretch: !0,
              },
              this.props.t("Sign in with browser"),
            ),
          );
        }
        renderWaitView() {
          return a.createElement(
            "div",
            { className: "sign-in-main grant-access-view" },
            this.renderSmallLogo(),
            a.createElement(
              c.Z,
              {
                tag: "h1",
                name: "typography-accent-28px-bold",
                className: "grant-access-header",
              },
              this.props.t("Grant access"),
            ),
            a.createElement(
              "div",
              { className: "grant-access-text" },
              a.createElement(
                c.Z,
                { name: "typography-regular-16px", tag: "p" },
                this.props.t(
                  "In your browser, grant this application access to your TradingView account and come back",
                ),
              ),
              a.createElement(
                c.Z,
                { name: "typography-regular-16px", tag: "p" },
                this.props.t("Granted access but still see this?"),
                v,
                this.props.t("Copy a secret key"),
                v,
                this.props.t(
                  "on the authentication page in your browser and just switch back here",
                ),
              ),
            ),
          );
        }
        renderEmptyView() {
          return a.createElement(
            "div",
            { className: "sign-in-main" },
            this.renderSmallLogo(),
          );
        }
        render2FAView() {
          return a.createElement(
            "div",
            { className: "sign-in-main" },
            this.renderSmallLogo(),
          );
        }
        renderSmallLogo() {
          return a.createElement(
            "div",
            { className: "sign-in-logo-small" },
            a.createElement(w, null),
          );
        }
        renderErrorMessage(e) {
          return a.createElement(
            "div",
            { className: "error-container" },
            a.createElement(l.X, {
              informerIntent: "warning",
              isIconShown: !0,
              content: e,
            }),
          );
        }
      }
      !(function (e, t, n, r) {
        var a,
          i = arguments.length,
          s =
            i < 3
              ? t
              : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, n))
                : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          s = Reflect.decorate(e, t, n, r);
        else
          for (var o = e.length - 1; o >= 0; o--)
            (a = e[o]) &&
              (s = (i < 3 ? a(s) : i > 3 ? a(t, n, s) : a(t, n)) || s);
        i > 3 && s && Object.defineProperty(t, n, s);
      })([h.t], L.prototype, "close", null);
      const P = L,
        D = (0, r.Zh)()(L);
    },
    99709: (e, t, n) => {
      (n.d(t, {
        Gi: () => r,
        EF: () => a,
        qD: () => i,
        ec: () => s,
        EX: () => o,
        P6: () => l,
        pk: () => c,
        ju: () => h,
        gY: () => p,
      }),
        n(58458));
      const r = "user:id",
        a = "user:username",
        i = "user:pic",
        s = "user:pro",
        o = "user:plan",
        l = "user:pro_badge_name";
      function c(e, t) {
        return e.find((e) => e.type === t);
      }
      function h(e, t) {
        const n = c(e, t);
        return void 0 !== n?.value;
      }
      function p(e, t, n) {
        const r = e.find((e) => e.type === t);
        return void 0 !== r && (void 0 === n || r.value === n);
      }
    },
    4729: (e, t, n) => {
      n.d(t, { f1: () => r, TC: () => a });
      const r = "tvd:auth-handler";
      var a;
      !(function (e) {
        ((e[(e.NoAuthentication = 0)] = "NoAuthentication"),
          (e[(e.WaitingToken = 1)] = "WaitingToken"),
          (e[(e.TokenReady = 2)] = "TokenReady"),
          (e[(e.Waiting2FA = 3)] = "Waiting2FA"),
          (e[(e.Authenticated = 4)] = "Authenticated"),
          (e[(e.Error = 5)] = "Error"));
      })(a || (a = {}));
    },
    92686: (e, t, n) => {
      n.d(t, { n5: () => s.n, M8: () => o, Od: () => l });
      var r = n(36458),
        a = n(4729),
        i = n(64810),
        s = n(54517);
      function o() {
        return r.i.provideProxy(i.E);
      }
      function l() {
        return r.i.provideProxy(a.f1);
      }
      n(99709);
    },
    64810: (e, t, n) => {
      n.d(t, { E: () => r });
      const r = "tvd:user-service";
    },
    54517: (e, t, n) => {
      n.d(t, { n: () => a });
      var r = n(99709);
      class a {
        claims;
        session;
        constructor(e, t) {
          ((this.claims = e), (this.session = t));
        }
        get id() {
          return this.getClaim(r.Gi, "");
        }
        get username() {
          return this.getClaim(r.EF, this.id);
        }
        get isAuthenticated() {
          return (0, r.ju)(this.claims, r.Gi);
        }
        get isAnonymous() {
          return !this.isAuthenticated;
        }
        get userpic() {
          return this.getClaim(r.qD, "");
        }
        get isPro() {
          return !!this.getClaim(r.ec, "");
        }
        get plan() {
          return this.getClaim(r.EX, "");
        }
        get userPlanBadgeName() {
          return this.getClaim(r.P6) ?? "free";
        }
        getClaim(e, t) {
          const n = (0, r.pk)(this.claims, e);
          return n?.value ?? t;
        }
        hasClaim(e, t) {
          return (0, r.gY)(this.claims, e, t);
        }
      }
    },
    36709: (e, t, n) => {
      n(55622);
    },
    58458: (e, t, n) => {
      (n(36709), n(81289), n(90131));
    },
    81289: (e, t, n) => {
      (n(57310), n(41602));
    },
    90131: (e, t, n) => {},
  },
]);
