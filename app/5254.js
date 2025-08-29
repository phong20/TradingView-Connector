"use strict";
(global.webpackChunktradingview_desktop =
  global.webpackChunktradingview_desktop || []).push([
  [5254],
  {
    53543: (e, t, n) => {
      n.d(t, { Z: () => s });
      var a = n(43392),
        r = n.n(a),
        o = n(8021),
        i = n.n(o)()(r());
      i.push([
        e.id,
        "[theme='dark'] {\n\t--color-save-changes-container-bg: #0c0e1580;\n\t--color-save-changes-dialog-title: #DBDBDB;\n\t--color-save-changes-dialog-text: #8C8C8C;\n}\n\n[theme='light'] {\n\t--color-save-changes-container-bg: #9598a180;\n\t--color-save-changes-dialog-title: #0F0F0F;\n\t--color-save-changes-dialog-text: #707070;\n}\n\n.save-changes-dialog-container:not(.darwin) {\n\twidth: 100vw;\n\theight: 100vh;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tbackground-color: var(--color-save-changes-container-bg);\n}\n\n.dialog.save-changes {\n\tmin-width: 350px;\n\tmin-height: 196px;\n\tmax-width: 445px;\n\tmax-height: 248px;\n\tbox-sizing: border-box;\n\talign-items: center;\n\tpadding: 18px 24px;\n\tborder-radius: 12px;\n\n\t&.error {\n\t\tpadding: 17px 24px;\n\t}\n}\n\n.save-changes-info-icon {\n\twidth: 44px;\n\theight: 44px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin-bottom: 4px;\n}\n\n.save-changes-dialog-title {\n\tcolor: var(--color-save-changes-dialog-title);\n\tmargin: 0 0 12px;\n\ttext-align: center;\n}\n\n.save-changes-dialog-text {\n\tcolor: var(--color-save-changes-dialog-text);\n\tmargin: 0;\n\ttext-align: center;\n\n\t&:has(+ .dialog-buttons) {\n\t\tmargin-bottom: 16px;\n\t}\n}\n\n.advices {\n\tposition: relative;\n\twidth: 100%;\n\theight: 96px;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\toverflow: hidden;\n\n\t&.small {\n\t\theight: 72px;\n\t}\n}\n\n.advice {\n\tposition: absolute;\n\topacity: 0;\n}\n\n.advice-show {\n\tanimation: Show 1s forwards;\n}\n\n.advice-hide {\n\tanimation: Hide 1s forwards;\n}\n\n@keyframes Hide {\n\tfrom {\n\t\topacity: 1;\n\t}\n\tto {\n\t\topacity: 0;\n\t}\n}\n\n@keyframes Show {\n\tfrom {\n\t\topacity: 0;\n\t}\n\tto {\n\t\topacity: 1;\n\t}\n}\n",
        "",
      ]);
      const s = i;
    },
    71443: (e, t, n) => {
      (n.d(t, { cI: () => a.c, mA: () => r.m, O3: () => o.O }), n(98124));
      var a = n(46580),
        r = (n(27044), n(49114), n(86050)),
        o = n(2251);
      (n(27500), n(75693), n(87365));
    },
    98124: (e, t, n) => {
      n(50959);
    },
    46580: (e, t, n) => {
      n.d(t, { c: () => r });
      var a = n(50959);
      function r(e) {
        const [t, n] = (0, a.useState)(e);
        return {
          values: t,
          setValues: n,
          handleValueChange: (e, t) => {
            n((n) => (n[e] === t ? n : { ...n, [e]: t }));
          },
        };
      }
    },
    27044: (e, t, n) => {
      n(50959);
    },
    49114: (e, t, n) => {
      (n(50959), n(5306), n(55622));
    },
    86050: (e, t, n) => {
      n.d(t, { m: () => r });
      var a = n(50959);
      function r(e, t, n = []) {
        (0, a.useEffect)(() => {
          if (!e) return;
          let n = e.subscribe(t);
          const a = () => {
            (n?.unsubscribe(), (n = null));
          };
          return (
            window.addEventListener("beforeunload", a),
            () => {
              (window.removeEventListener("beforeunload", a), a());
            }
          );
        }, n);
      }
    },
    2251: (e, t, n) => {
      n.d(t, { O: () => s });
      var a = n(50959),
        r = n(59391);
      const o = ["mousedown", "click", "mouseup", "contextmenu"],
        i = 150;
      function s(e, t, n, s = {}) {
        const { escape: l = !1, scroll: c = !1, resize: d = !1 } = s,
          h = (0, a.useCallback)(() => {
            n(!1);
          }, []);
        (0, a.useEffect)(() => {
          if (!t) return;
          const n = (t) => {
              e.current?.contains(t.target) ||
                (t.stopPropagation(), t.preventDefault(), h());
            },
            a = (e) => {
              e.key === r.mR.Escape && h();
            };
          return (
            o.forEach((e) => {
              setTimeout(() => {
                document.addEventListener(e, n, !0);
              }, i);
            }),
            l && document.addEventListener("keydown", a),
            c && document.addEventListener("scroll", h),
            d && window.addEventListener("resize", h),
            () => {
              (o.forEach((e) => {
                setTimeout(() => {
                  document.removeEventListener(e, n, !0);
                }, i);
              }),
                l && document.removeEventListener("keydown", a),
                c && document.removeEventListener("scroll", h),
                d && window.removeEventListener("resize", h));
            }
          );
        }, [e, l, h, t, d, c]);
      }
    },
    27500: (e, t, n) => {
      (n(50959), n(39001), n(86050));
    },
    75693: (e, t, n) => {
      (n(50959), n(13855), n(91115), n(86050), n(27500));
    },
    87365: (e, t, n) => {
      (n(50959), n(5306), n(13855), n(55622), n(59391));
    },
    85254: (e, t, n) => {
      (n.r(t), n.d(t, { default: () => O }));
      var a,
        r = n(50959),
        o = n(5306),
        i = n(70612),
        s = n(45602),
        l = n(98078),
        c = n(91115),
        d = n(82170),
        h = n(89597),
        u = n(59391),
        g = n(69478),
        m = n(71443);
      function v() {
        return (
          (v =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }),
          v.apply(this, arguments)
        );
      }
      const p = function (e) {
        return r.createElement(
          "svg",
          v(
            {
              width: 28,
              height: 28,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e,
          ),
          a ||
            (a = r.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M14 28c7.732 0 14-6.268 14-14S21.732 0 14 0 0 6.268 0 14s6.268 14 14 14Zm-1.5-12L12 5h4l-.5 11h-3Zm3.5 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
              fill: "#FF9800",
            })),
        );
      };
      var f, y;
      function w() {
        return (
          (w =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }),
          w.apply(this, arguments)
        );
      }
      const b = function (e) {
        return r.createElement(
          "svg",
          w(
            {
              width: 28,
              height: 28,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e,
          ),
          f ||
            (f = r.createElement(
              "g",
              { clipPath: "url(#spinner_svg__a)" },
              r.createElement("path", {
                d: "M28 14a14 14 0 1 0-28 0h3.01a10.99 10.99 0 0 1 21.98 0H28ZM28 14a14 14 0 1 1-28 0h3.01a10.99 10.99 0 0 0 21.98 0H28Z",
                fill: "var(--color-spinner-bg)",
              }),
              r.createElement(
                "path",
                {
                  d: "M28 14a14 14 0 1 0-28 0h3.01a10.99 10.99 0 0 1 21.98 0H28Z",
                  fill: "var(--color-spinner-spin)",
                },
                r.createElement("animateTransform", {
                  attributeName: "transform",
                  attributeType: "XML",
                  type: "rotate",
                  from: "0, 14, 14",
                  to: "360, 14, 14",
                  dur: "1s",
                  restart: "whenNotActive",
                  repeatCount: "indefinite",
                }),
              ),
            )),
          y ||
            (y = r.createElement(
              "defs",
              null,
              r.createElement(
                "clipPath",
                { id: "spinner_svg__a" },
                r.createElement("path", { fill: "#fff", d: "M0 0h28v28H0z" }),
              ),
            )),
        );
      };
      var E = n(25211),
        x = n.n(E),
        k = n(62962),
        S = n.n(k),
        L = n(20310),
        I = n.n(L),
        C = n(29290),
        T = n.n(C),
        N = n(47289),
        Z = n.n(N),
        A = n(24834),
        z = n.n(A),
        _ = n(53543),
        D = {};
      ((D.styleTagTransform = z()),
        (D.setAttributes = T()),
        (D.insert = I().bind(null, "head")),
        (D.domAPI = S()),
        (D.insertStyleElement = Z()),
        x()(_.Z, D),
        _.Z && _.Z.locals && _.Z.locals);
      const M = (e) =>
          ((e) => {
            const t = [...e.filter((e) => "" !== e)];
            for (let e = t.length - 1; e > 0; e--) {
              const n = Math.floor(Math.random() * (e + 1));
              [t[e], t[n]] = [t[n], t[e]];
            }
            return t;
          })([
            e("Sometimes the best trades are the ones you did not take."),
            e("Trading more ≠ more profits."),
            e("The market doesn't care about you or your position."),
            e("It's okay to love trading."),
            e("Not being stressed from a loss is the real flex."),
            e("Stop buying lottery tickets."),
            e(
              '"So happy I spent $200 on trading signals" - said no trader ever.',
            ),
            e("Always do your research."),
            e("How to feel awful: stare at your account / trades all day."),
            e(
              "When you think you've got the keys to the market, they change the locks.",
            ),
            e(
              "Weak traders focus on results - Strong traders focus on process.",
            ),
            e("Simplify your life. Good traders have simple lives."),
            e(
              "Good traders try to avoid losing money. Great traders accept they will lose money.",
            ),
            e("Everyone started somewhere."),
            e("Plan the trade, see the trade, feel the trade."),
            e("Plan for the long term."),
            e("Rule #1 - Don't get rugged"),
            e(
              "Always look first. Never rush into a trade or investment blindly.",
            ),
            e("Do your own research, plan ahead, and think for the long term."),
            e("When in doubt, zoom out."),
            e("Dips happen."),
            e("The trend is your friend."),
            e(
              "There are only three things you can do in markets: 1. Buy 2. Sell 3. Wait.",
            ),
          ]),
        P = (e) => {
          const t = e.querySelector(".advice.advice-show");
          if (!t)
            return void e
              .querySelector(".advice")
              ?.classList.add("advice-show");
          const n = t.nextElementSibling;
          if (
            (t.classList.remove("advice-show"),
            t.classList.add("advice-hide"),
            n)
          )
            (n.classList.remove("advice-hide"), n.classList.add("advice-show"));
          else {
            const t = e.querySelector(".advice");
            t &&
              (t.classList.remove("advice-hide"),
              t.classList.add("advice-show"));
          }
        },
        O = ({ data: e }) => {
          const { t, i18n: n } = (0, o.$G)(),
            a = (0, r.useRef)(null),
            v = (0, r.useRef)(null),
            [f, y] = (0, r.useState)(M(t)),
            [w, E] = (0, r.useState)(!1);
          return (
            (0, m.mA)((0, c.ih)().errorSaveChart, (e) => {
              (E(e),
                a.current &&
                  (e
                    ? a.current.classList.add("error")
                    : a.current.classList.remove("error")));
            }),
            (0, r.useEffect)(() => {
              if ((0, u.Um)()) return;
              if (!a.current) return;
              const { width: e, height: t } = (0, h.BU)(n.language);
              ((a.current.style.width = `${e}px`),
                (a.current.style.height = `${t}px`));
            }, [n.language]),
            (0, r.useEffect)(() => {
              if (!v.current) return;
              let e = null;
              return w && e
                ? (clearInterval(e), void (e = null))
                : (P(v.current),
                  (e = setInterval(() => {
                    v.current && P(v.current);
                  }, 3e3)),
                  () => {
                    e && (clearInterval(e), (e = null));
                  });
            }, [w]),
            (0, r.useEffect)(() => {
              y(M(t));
            }, [t]),
            r.createElement(
              "div",
              {
                className:
                  "save-changes-dialog-container " +
                  ((0, u.Um)() ? "darwin" : ""),
              },
              r.createElement(
                "div",
                { className: "dialog save-changes", ref: a },
                r.createElement(
                  "div",
                  { className: "save-changes-info-icon" },
                  w ? r.createElement(p, null) : r.createElement(b, null),
                ),
                r.createElement(
                  l.Z,
                  {
                    tag: "h1",
                    name: "typography-accent-24px-semibold",
                    className: "save-changes-dialog-title",
                  },
                  t(w ? "Something went wrong" : "Saving changes..."),
                ),
                w
                  ? r.createElement(
                      r.Fragment,
                      null,
                      r.createElement(
                        l.Z,
                        {
                          tag: "p",
                          name: "typography-regular-16px",
                          className: "save-changes-dialog-text error",
                        },
                        t(
                          "Check your internet connection and try to save changes again.",
                        ),
                      ),
                      r.createElement(
                        "div",
                        { className: "dialog-buttons save-changes-dialog" },
                        r.createElement(
                          s.LE,
                          {
                            onClick: () => {
                              if (e.tabId && e.tabId === d.tU.App)
                                (0, c.ih)().appQuitAnyway.next(!0);
                              else {
                                if (e.tabId && e.tabId === d.tU.Window)
                                  return (
                                    (0, g.Ku)().closeMainWindow(!0),
                                    void (0, g.Ku)().closeSaveChangeDialog()
                                  );
                                if (e.tabId)
                                  throw (
                                    (0, g.Ku)().closeSaveChangeDialog(),
                                    new Error(
                                      "This dialog not applicable for Tab save mode",
                                    )
                                  );
                              }
                            },
                            size: "small",
                            color: "gray",
                            variant: "secondary",
                          },
                          t("Quit anyway"),
                        ),
                        r.createElement(
                          s.LE,
                          {
                            onClick: () => {
                              if (e.tabId && e.tabId === d.tU.App)
                                (0, c.ih)().retrySaveAndQuitApp.next(!0);
                              else if (e.tabId && e.tabId === d.tU.Window)
                                (0, g.Ku)().closeMainWindow();
                              else if (e.tabId)
                                throw new Error(
                                  "This dialog not applicable for Tab save mode",
                                );
                            },
                            size: "small",
                            color: "black",
                            variant: "primary",
                          },
                          t("Try again"),
                        ),
                      ),
                      r.createElement(
                        "div",
                        { className: "dialog-close-button" },
                        r.createElement(i.P, {
                          "aria-label": "close-save-changes-modal",
                          onClick: () => {
                            (0, g.Ku)().closeSaveChangeDialog(
                              e.tabId === d.tU.App,
                            );
                          },
                          size: "medium",
                          tabIndex: -1,
                        }),
                      ),
                    )
                  : r.createElement(
                      "div",
                      {
                        className:
                          "advices " +
                          ((x = n.language),
                          ["zh_CN", "zh_TW"].includes(x) ? "small" : ""),
                        ref: v,
                      },
                      f.map((e) =>
                        r.createElement(
                          l.Z,
                          {
                            key: e,
                            tag: "p",
                            name: "typography-regular-16px",
                            className: "save-changes-dialog-text advice",
                          },
                          e,
                        ),
                      ),
                    ),
              ),
            )
          );
          var x;
        };
    },
    39001: (e, t, n) => {
      n.d(t, { _9: () => o });
      var a = n(36458);
      const r = "tvd:theme-manager-service";
      function o() {
        return a.i.provideProxy(r);
      }
    },
  },
]);
