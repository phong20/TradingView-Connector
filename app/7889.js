"use strict";
(global.webpackChunktradingview_desktop =
  global.webpackChunktradingview_desktop || []).push([
  [7889],
  {
    23437: (t, n, o) => {
      o.d(n, { Z: () => l });
      var e = o(43392),
        i = o.n(e),
        a = o(8021),
        r = o.n(a)()(i());
      r.push([
        t.id,
        "[theme='dark'] {\n\t--color-option-selected-bg: #448AFF33;\n}\n\n[theme='light'] {\n\t--color-option-selected-bg: #2962FF26;\n}\n\n.dialog.options {\n\t& > .dialog-title {\n\t\tmargin-bottom: 22px;\n\t}\n\n\t& .dialog-text {\n\t\tmargin-top: 24px;\n\t\tmargin-bottom: 16px;\n\t}\n\n\t& > .dialog-buttons {\n\t\tmargin-top: 16px;\n\t}\n}\n\n.dialog-options {\n\twidth: 100vw;\n\theight: 360px;\n\tdisplay: flex;\n\talign-items: center;\n\tflex-wrap: wrap;\n\tgap: 16px 24px;\n\tpadding: 8px 20px 0;\n\toverflow: scroll;\n\toverflow-x: hidden;\n\tbox-sizing: border-box;\n\n\t&.ar_AE,\n\t&.he_IL,\n\t&.zh_CN,\n\t&.zh_TW {\n\t\theight: 384px;\n\t}\n\n\t[dir='ltr'] & {\n\t\tmargin-left: calc((100% - 100vw) / 2);\n\t}\n\n\t[dir='rtl'] & {\n\t\tmargin-right: calc((100% - 100vw) / 2);\n\t}\n}\n\n.dialog-options::-webkit-scrollbar {\n\twidth: 8px;\n}\n\n.dialog-options::-webkit-scrollbar-track {\n\tborder: none;\n\tbackground-color: transparent;\n}\n\n.option {\n\tposition: relative;\n\twidth: 249px;\n\theight: 160px;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 6px;\n\tmargin: 0;\n\tpadding: 0;\n\tbackground-color: transparent;\n\tborder: none;\n\n\t&.selected::after {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\ttop: -5px;\n\t\twidth: 259px;\n\t\theight: 173px;\n\t\tbox-sizing: border-box;\n\t\tbackground-color: var(--color-option-selected-bg);\n\t\tborder: 2px solid #2962FF;\n\t\tborder-radius: 2px;\n\t}\n}\n\n.option-thumbnail {\n\twidth: 249px;\n\theight: 130px;\n\tobject-fit: contain;\n}\n\n.option-caption {\n\twidth: 250px;\n\tcolor: var(--color-main-text);\n\ttext-align: center;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\twhite-space: nowrap;\n}\n",
        "",
      ]);
      const l = r;
    },
    27889: (t, n, o) => {
      (o.r(n), o.d(n, { default: () => f }));
      var e = o(50959),
        i = o(5306),
        a = o(98078),
        r = o(25211),
        l = o.n(r),
        p = o(62962),
        s = o.n(p),
        d = o(20310),
        c = o.n(d),
        g = o(29290),
        x = o.n(g),
        m = o(47289),
        b = o.n(m),
        h = o(24834),
        u = o.n(h),
        w = o(23437),
        v = {};
      ((v.styleTagTransform = u()),
        (v.setAttributes = x()),
        (v.insert = c().bind(null, "head")),
        (v.domAPI = s()),
        (v.insertStyleElement = b()),
        l()(w.Z, v),
        w.Z && w.Z.locals && w.Z.locals);
      const f = ({ data: t, inputChange: n }) => {
        const { i18n: o } = (0, i.$G)(),
          [r, l] = (0, e.useState)(0);
        return (
          (0, e.useEffect)(() => {
            n({ options: [t.options[0]] });
          }, []),
          e.createElement(
            "div",
            { className: `dialog-options ${o.language}` },
            t.options.map(({ data: o, name: i }, p) =>
              e.createElement(
                "button",
                {
                  key: i,
                  className: "option " + (r === p ? "selected" : ""),
                  onClick: () => {
                    return (
                      (o = p),
                      console.log(
                        `Selected option ${o} name: ${t.options[o].name}`,
                      ),
                      l(o),
                      void n({ options: [t.options[o]] })
                    );
                    var o;
                  },
                  tabIndex: -1,
                },
                e.createElement("img", {
                  className: "option-thumbnail",
                  src: String(o),
                  alt: i,
                }),
                e.createElement(
                  a.Z,
                  {
                    tag: "caption",
                    name: "typography-accent-16px-medium",
                    className: "option-caption",
                  },
                  i,
                ),
              ),
            ),
          )
        );
      };
    },
  },
]);
