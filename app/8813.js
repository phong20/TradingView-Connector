"use strict";
(global.webpackChunktradingview_desktop =
  global.webpackChunktradingview_desktop || []).push([
  [8813],
  {
    10422: (t, n, e) => {
      (!(function t() {
        if (
          "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
          "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
        )
          try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
          } catch (t) {
            console.error(t);
          }
      })(),
        (t.exports = e(53746)));
    },
    47002: (t, n, e) => {
      e.d(n, { $3: () => c });
      var r = e(96390);
      function o(t, n, e, o) {
        const i = {
          filename: t,
          function: "<anonymous>" === n ? r.Fi : n,
          in_app: !0,
        };
        return (
          void 0 !== e && (i.lineno = e),
          void 0 !== o && (i.colno = o),
          i
        );
      }
      const i = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
        s =
          /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
        a = /\((\S*)(?::(\d+))(?::(\d+))\)/,
        c = [
          30,
          (t) => {
            const n = i.exec(t);
            if (n) {
              const [, t, e, i] = n;
              return o(t, r.Fi, +e, +i);
            }
            const e = s.exec(t);
            if (e) {
              if (e[2] && 0 === e[2].indexOf("eval")) {
                const t = a.exec(e[2]);
                t && ((e[2] = t[1]), (e[3] = t[2]), (e[4] = t[3]));
              }
              const [t, n] = p(e[1] || r.Fi, e[2]);
              return o(n, t, e[3] ? +e[3] : void 0, e[4] ? +e[4] : void 0);
            }
          },
        ],
        u =
          /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
        f = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
        d = [
          c,
          [
            50,
            (t) => {
              const n = u.exec(t);
              if (n) {
                if (n[3] && n[3].indexOf(" > eval") > -1) {
                  const t = f.exec(n[3]);
                  t &&
                    ((n[1] = n[1] || "eval"),
                    (n[3] = t[1]),
                    (n[4] = t[2]),
                    (n[5] = ""));
                }
                let t = n[3],
                  e = n[1] || r.Fi;
                return (
                  ([e, t] = p(e, t)),
                  o(t, e, n[4] ? +n[4] : void 0, n[5] ? +n[5] : void 0)
                );
              }
            },
          ],
        ],
        p =
          ((0, r.pE)(...d),
          (t, n) => {
            const e = -1 !== t.indexOf("safari-extension"),
              o = -1 !== t.indexOf("safari-web-extension");
            return e || o
              ? [
                  -1 !== t.indexOf("@") ? t.split("@")[0] : r.Fi,
                  e ? `safari-extension:${n}` : `safari-web-extension:${n}`,
                ]
              : [t, n];
          });
    },
    4352: (t, n, e) => {
      e.d(n, { s3: () => c, nZ: () => i, aF: () => s, $e: () => a });
      var r = e(21352),
        o = e(87930);
      function i() {
        const t = (0, o.c)();
        return (0, r.G)(t).getCurrentScope();
      }
      function s() {
        const t = (0, o.c)();
        return (0, r.G)(t).getIsolationScope();
      }
      function a(...t) {
        const n = (0, o.c)(),
          e = (0, r.G)(n);
        if (2 === t.length) {
          const [n, r] = t;
          return n ? e.withSetScope(n, r) : e.withScope(r);
        }
        return e.withScope(t[0]);
      }
      function c() {
        return i().getClient();
      }
    },
    74170: (t, n, e) => {
      e.d(n, { uE: () => a });
      var r = e(95564),
        o = e(39947),
        i = e(10945),
        s = e(71778);
      function a(t, n) {
        const e = (0, i.jC)(t[0]),
          a = n && n.getDsn(),
          c = n && n.getOptions().tunnel,
          u = {
            sent_at: new Date().toISOString(),
            ...((function (t) {
              return !!t.trace_id && !!t.public_key;
            })(e) && { trace: e }),
            ...(!!c && a && { dsn: (0, r.RA)(a) }),
          },
          f = n && n.getOptions().beforeSendSpan,
          d = f ? (t) => f((0, s.XU)(t)) : (t) => (0, s.XU)(t),
          p = [];
        for (const n of t) {
          const t = d(n);
          t && p.push((0, o.KQ)(t));
        }
        return (0, o.Jd)(u, p);
      }
    },
    47831: (t, n, e) => {
      function r(t) {
        return t;
      }
      e.d(n, { _I: () => r });
    },
    30310: (t, n, e) => {
      e.d(n, { CT: () => i });
      var r = e(43318),
        o = e(74395);
      function i(t, n = {}) {
        if (
          (n.user &&
            (!t.ipAddress &&
              n.user.ip_address &&
              (t.ipAddress = n.user.ip_address),
            t.did ||
              n.did ||
              (t.did = n.user.id || n.user.email || n.user.username)),
          (t.timestamp = n.timestamp || (0, r.ph)()),
          n.abnormal_mechanism && (t.abnormal_mechanism = n.abnormal_mechanism),
          n.ignoreDuration && (t.ignoreDuration = n.ignoreDuration),
          n.sid && (t.sid = 32 === n.sid.length ? n.sid : (0, o.DM)()),
          void 0 !== n.init && (t.init = n.init),
          !t.did && n.did && (t.did = `${n.did}`),
          "number" == typeof n.started && (t.started = n.started),
          t.ignoreDuration)
        )
          t.duration = void 0;
        else if ("number" == typeof n.duration) t.duration = n.duration;
        else {
          const n = t.timestamp - t.started;
          t.duration = n >= 0 ? n : 0;
        }
        (n.release && (t.release = n.release),
          n.environment && (t.environment = n.environment),
          !t.ipAddress && n.ipAddress && (t.ipAddress = n.ipAddress),
          !t.userAgent && n.userAgent && (t.userAgent = n.userAgent),
          "number" == typeof n.errors && (t.errors = n.errors),
          n.status && (t.status = n.status));
      }
    },
    10945: (t, n, e) => {
      e.d(n, { Lh: () => f, jC: () => d });
      var r = e(69289),
        o = e(53119),
        i = e(73386),
        s = e(4352),
        a = e(55216),
        c = e(71778);
      const u = "_frozenDsc";
      function f(t, n) {
        const e = t;
        (0, r.xp)(e, u, n);
      }
      function d(t) {
        const n = (0, s.s3)();
        if (!n) return {};
        const e = (function (t, n) {
            const e = n.getOptions(),
              { publicKey: o } = n.getDsn() || {},
              s = (0, r.Jr)({
                environment: e.environment || i.J,
                release: e.release,
                public_key: o,
                trace_id: t,
              });
            return (n.emit("createDsc", s), s);
          })((0, c.XU)(t).trace_id || "", n),
          f = (0, c.Gx)(t),
          d = f[u];
        if (d) return d;
        const p = f.spanContext().traceState,
          l = p && p.get("sentry.dsc"),
          m = l && (0, o.EN)(l);
        if (m) return m;
        const y = (0, c.XU)(f),
          g = y.data || {},
          h = g[a.TE];
        null != h && (e.sample_rate = `${h}`);
        const _ = g[a.Zj],
          b = y.description;
        return (
          "url" !== _ && b && (e.transaction = b),
          (e.sampled = String((0, c.Tt)(f))),
          n.emit("createDsc", e, f),
          e
        );
      }
    },
    73645: (t, n, e) => {
      function r(t, n) {
        const {
          extra: e,
          tags: r,
          user: i,
          contexts: s,
          level: a,
          sdkProcessingMetadata: c,
          breadcrumbs: u,
          fingerprint: f,
          eventProcessors: d,
          attachments: p,
          propagationContext: l,
          transactionName: m,
          span: y,
        } = n;
        (o(t, "extra", e),
          o(t, "tags", r),
          o(t, "user", i),
          o(t, "contexts", s),
          o(t, "sdkProcessingMetadata", c),
          a && (t.level = a),
          m && (t.transactionName = m),
          y && (t.span = y),
          u.length && (t.breadcrumbs = [...t.breadcrumbs, ...u]),
          f.length && (t.fingerprint = [...t.fingerprint, ...f]),
          d.length && (t.eventProcessors = [...t.eventProcessors, ...d]),
          p.length && (t.attachments = [...t.attachments, ...p]),
          (t.propagationContext = { ...t.propagationContext, ...l }));
      }
      function o(t, n, e) {
        if (e && Object.keys(e).length) {
          t[n] = { ...t[n] };
          for (const r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (t[n][r] = e[r]);
        }
      }
      e.d(n, { yo: () => r });
    },
    71778: (t, n, e) => {
      e.d(n, {
        ve: () => p,
        i0: () => l,
        j5: () => S,
        HN: () => A,
        Gx: () => $,
        Dp: () => E,
        _4: () => b,
        Tt: () => _,
        $k: () => y,
        XU: () => h,
        HR: () => m,
      });
      var r = e(69289),
        o = e(43318),
        i = e(21352),
        s = e(87930),
        a = e(4352),
        c = e(99895),
        u = e(55216),
        f = e(92413),
        d = e(75958);
      const p = 0,
        l = 1;
      function m(t) {
        const { spanId: n, traceId: e } = t.spanContext(),
          { data: o, op: i, parent_span_id: s, status: a, origin: c } = h(t);
        return (0, r.Jr)({
          parent_span_id: s,
          span_id: n,
          trace_id: e,
          data: o,
          op: i,
          status: a,
          origin: c,
        });
      }
      function y(t) {
        return "number" == typeof t
          ? g(t)
          : Array.isArray(t)
            ? t[0] + t[1] / 1e9
            : t instanceof Date
              ? g(t.getTime())
              : (0, o.ph)();
      }
      function g(t) {
        return t > 9999999999 ? t / 1e3 : t;
      }
      function h(t) {
        if (
          (function (t) {
            return "function" == typeof t.getSpanJSON;
          })(t)
        )
          return t.getSpanJSON();
        try {
          const { spanId: n, traceId: e } = t.spanContext();
          if (
            (function (t) {
              const n = t;
              return !!(
                n.attributes &&
                n.startTime &&
                n.name &&
                n.endTime &&
                n.status
              );
            })(t)
          ) {
            const {
              attributes: o,
              startTime: i,
              name: s,
              endTime: a,
              parentSpanId: f,
              status: d,
            } = t;
            return (0, r.Jr)({
              span_id: n,
              trace_id: e,
              data: o,
              description: s,
              parent_span_id: f,
              start_timestamp: y(i),
              timestamp: y(a) || void 0,
              status: b(d),
              op: o[u.$J],
              origin: o[u.S3],
              _metrics_summary: (0, c.y)(t),
            });
          }
          return { span_id: n, trace_id: e };
        } catch (t) {
          return {};
        }
      }
      function _(t) {
        const { traceFlags: n } = t.spanContext();
        return n === l;
      }
      function b(t) {
        if (t && t.code !== f.pq)
          return t.code === f.OP ? "ok" : t.message || "unknown_error";
      }
      const v = "_sentryChildSpans",
        O = "_sentryRootSpan";
      function S(t, n) {
        const e = t[O] || t;
        ((0, r.xp)(n, O, e),
          t[v] ? t[v].add(n) : (0, r.xp)(t, v, new Set([n])));
      }
      function E(t) {
        const n = new Set();
        return (
          (function t(e) {
            if (!n.has(e) && _(e)) {
              n.add(e);
              const r = e[v] ? Array.from(e[v]) : [];
              for (const n of r) t(n);
            }
          })(t),
          Array.from(n)
        );
      }
      function $(t) {
        return t[O] || t;
      }
      function A() {
        const t = (0, s.c)(),
          n = (0, i.G)(t);
        return n.getActiveSpan ? n.getActiveSpan() : (0, d.Y)((0, a.nZ)());
      }
    },
    77118: (t, n, e) => {
      e.d(n, { n_: () => r.n });
      var r = e(14547);
      (e(76191), e(16331), e(70686), e(60203), e(48057));
    },
    76191: (t, n, e) => {
      var r = e(47831),
        o = e(78624),
        i = e(43514),
        s = e(89265);
      (0, r._I)(() => ({
        name: "ScopeToMain",
        setup() {
          const t = (0, s.o)();
          (0, i.F)((n, e) => {
            (t.sendScope(JSON.stringify((0, o.Fv)(n, 20, 2e3))),
              e.clearBreadcrumbs(),
              e.clearAttachments());
          });
        },
      }));
    },
    70686: (t, n, e) => {
      (e(89265), e(76191), e(60203), e(16331));
    },
    60203: (t, n, e) => {
      var r = e(47002),
        o = e(86986);
      const [, i] = r.$3,
        [, s] = (0, o.Ep)();
    },
    16331: (t, n, e) => {
      e(89265);
    },
    37141: (t, n, e) => {
      e.d(n, { Rt: () => s });
      var r = e(3964);
      const o = e(77751).n,
        i = 80;
      function s(t, n = {}) {
        if (!t) return "<unknown>";
        try {
          let e = t;
          const r = 5,
            o = [];
          let s = 0,
            c = 0;
          const u = " > ",
            f = u.length;
          let d;
          const p = Array.isArray(n) ? n : n.keyAttrs,
            l = (!Array.isArray(n) && n.maxStringLength) || i;
          for (
            ;
            e &&
            s++ < r &&
            ((d = a(e, p)),
            !("html" === d || (s > 1 && c + o.length * f + d.length >= l)));

          )
            (o.push(d), (c += d.length), (e = e.parentNode));
          return o.reverse().join(u);
        } catch (t) {
          return "<unknown>";
        }
      }
      function a(t, n) {
        const e = t,
          i = [];
        if (!e || !e.tagName) return "";
        if (o.HTMLElement && e instanceof HTMLElement && e.dataset) {
          if (e.dataset.sentryComponent) return e.dataset.sentryComponent;
          if (e.dataset.sentryElement) return e.dataset.sentryElement;
        }
        i.push(e.tagName.toLowerCase());
        const s =
          n && n.length
            ? n
                .filter((t) => e.getAttribute(t))
                .map((t) => [t, e.getAttribute(t)])
            : null;
        if (s && s.length)
          s.forEach((t) => {
            i.push(`[${t[0]}="${t[1]}"]`);
          });
        else {
          e.id && i.push(`#${e.id}`);
          const t = e.className;
          if (t && (0, r.HD)(t)) {
            const n = t.split(/\s+/);
            for (const t of n) i.push(`.${t}`);
          }
        }
        const a = ["aria-label", "type", "name", "title", "alt"];
        for (const t of a) {
          const n = e.getAttribute(t);
          n && i.push(`[${t}="${n}"]`);
        }
        return i.join("");
      }
    },
    95564: (t, n, e) => {
      function r(t, n = !1) {
        const {
          host: e,
          path: r,
          pass: o,
          port: i,
          projectId: s,
          protocol: a,
          publicKey: c,
        } = t;
        return `${a}://${c}${n && o ? `:${o}` : ""}@${e}${i ? `:${i}` : ""}/${r ? `${r}/` : r}${s}`;
      }
      e.d(n, { RA: () => r });
    },
    39947: (t, n, e) => {
      function r(t, n = []) {
        return [t, n];
      }
      function o(t) {
        return [{ type: "span" }, t];
      }
      e.d(n, { Jd: () => r, KQ: () => o });
    },
    3964: (t, n, e) => {
      e.d(n, {
        kK: () => u,
        VZ: () => o,
        cO: () => c,
        V9: () => p,
        PO: () => a,
        HD: () => s,
        Cy: () => d,
        J8: () => f,
        y1: () => l,
      });
      const r = Object.prototype.toString;
      function o(t) {
        switch (r.call(t)) {
          case "[object Error]":
          case "[object Exception]":
          case "[object DOMException]":
            return !0;
          default:
            return p(t, Error);
        }
      }
      function i(t, n) {
        return r.call(t) === `[object ${n}]`;
      }
      function s(t) {
        return i(t, "String");
      }
      function a(t) {
        return i(t, "Object");
      }
      function c(t) {
        return "undefined" != typeof Event && p(t, Event);
      }
      function u(t) {
        return "undefined" != typeof Element && p(t, Element);
      }
      function f(t) {
        return Boolean(t && t.then && "function" == typeof t.then);
      }
      function d(t) {
        return (
          a(t) &&
          "nativeEvent" in t &&
          "preventDefault" in t &&
          "stopPropagation" in t
        );
      }
      function p(t, n) {
        try {
          return t instanceof n;
        } catch (t) {
          return !1;
        }
      }
      function l(t) {
        return !(
          "object" != typeof t ||
          null === t ||
          (!t.__isVue && !t._isVue)
        );
      }
    },
    86683: (t, n, e) => {
      e.d(n, { Cf: () => a, kg: () => c });
      var r = e(91188),
        o = e(77751);
      const i = ["debug", "info", "warn", "error", "log", "assert", "trace"],
        s = {};
      function a(t) {
        if (!("console" in o.n)) return t();
        const n = o.n.console,
          e = {},
          r = Object.keys(s);
        r.forEach((t) => {
          const r = s[t];
          ((e[t] = n[t]), (n[t] = r));
        });
        try {
          return t();
        } finally {
          r.forEach((t) => {
            n[t] = e[t];
          });
        }
      }
      const c = (function () {
        let t = !1;
        const n = {
          enable: () => {
            t = !0;
          },
          disable: () => {
            t = !1;
          },
          isEnabled: () => t,
        };
        return (
          r.X
            ? i.forEach((e) => {
                n[e] = (...n) => {
                  t &&
                    a(() => {
                      o.n.console[e](`Sentry Logger [${e}]:`, ...n);
                    });
                };
              })
            : i.forEach((t) => {
                n[t] = () => {};
              }),
          n
        );
      })();
    },
    74395: (t, n, e) => {
      e.d(n, { DM: () => o });
      var r = e(77751);
      function o() {
        const t = r.n,
          n = t.crypto || t.msCrypto;
        let e = () => 16 * Math.random();
        try {
          if (n && n.randomUUID) return n.randomUUID().replace(/-/g, "");
          n &&
            n.getRandomValues &&
            (e = () => {
              const t = new Uint8Array(1);
              return (n.getRandomValues(t), t[0]);
            });
        } catch (t) {}
        return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (t) =>
          (t ^ ((15 & e()) >> (t / 4))).toString(16),
        );
      }
    },
    78624: (t, n, e) => {
      e.d(n, { Fv: () => a });
      var r = e(3964),
        o = e(48185),
        i = e(69289),
        s = e(96390);
      function a(t, n = 100, e = 1 / 0) {
        try {
          return c("", t, n, e);
        } catch (t) {
          return { ERROR: `**non-serializable** (${t})` };
        }
      }
      function c(t, n, e = 1 / 0, a = 1 / 0, u = (0, o.i)()) {
        const [f, d] = u;
        if (
          null == n ||
          (["number", "boolean", "string"].includes(typeof n) &&
            !Number.isNaN(n))
        )
          return n;
        const p = (function (t, n) {
          try {
            if ("domain" === t && n && "object" == typeof n && n._events)
              return "[Domain]";
            if ("domainEmitter" === t) return "[DomainEmitter]";
            if ("undefined" != typeof global && n === global) return "[Global]";
            if ("undefined" != typeof window && n === window) return "[Window]";
            if ("undefined" != typeof document && n === document)
              return "[Document]";
            if ((0, r.y1)(n)) return "[VueViewModel]";
            if ((0, r.Cy)(n)) return "[SyntheticEvent]";
            if ("number" == typeof n && n != n) return "[NaN]";
            if ("function" == typeof n) return `[Function: ${(0, s.$P)(n)}]`;
            if ("symbol" == typeof n) return `[${String(n)}]`;
            if ("bigint" == typeof n) return `[BigInt: ${String(n)}]`;
            const e = (function (t) {
              const n = Object.getPrototypeOf(t);
              return n ? n.constructor.name : "null prototype";
            })(n);
            return /^HTML(\w*)Element$/.test(e)
              ? `[HTMLElement: ${e}]`
              : `[object ${e}]`;
          } catch (t) {
            return `**non-serializable** (${t})`;
          }
        })(t, n);
        if (!p.startsWith("[object ")) return p;
        if (n.__sentry_skip_normalization__) return n;
        const l =
          "number" == typeof n.__sentry_override_normalization_depth__
            ? n.__sentry_override_normalization_depth__
            : e;
        if (0 === l) return p.replace("object ", "");
        if (f(n)) return "[Circular ~]";
        const m = n;
        if (m && "function" == typeof m.toJSON)
          try {
            return c("", m.toJSON(), l - 1, a, u);
          } catch (t) {}
        const y = Array.isArray(n) ? [] : {};
        let g = 0;
        const h = (0, i.Sh)(n);
        for (const t in h) {
          if (!Object.prototype.hasOwnProperty.call(h, t)) continue;
          if (g >= a) {
            y[t] = "[MaxProperties ~]";
            break;
          }
          const n = h[t];
          ((y[t] = c(t, n, l - 1, a, u)), g++);
        }
        return (d(n), y);
      }
    },
    69289: (t, n, e) => {
      e.d(n, { xp: () => a, Sh: () => c, Jr: () => d });
      var r = e(37141),
        o = e(91188),
        i = e(3964),
        s = e(86683);
      function a(t, n, e) {
        try {
          Object.defineProperty(t, n, {
            value: e,
            writable: !0,
            configurable: !0,
          });
        } catch (e) {
          o.X &&
            s.kg.log(
              `Failed to add non-enumerable property "${n}" to object`,
              t,
            );
        }
      }
      function c(t) {
        if ((0, i.VZ)(t))
          return { message: t.message, name: t.name, stack: t.stack, ...f(t) };
        if ((0, i.cO)(t)) {
          const n = {
            type: t.type,
            target: u(t.target),
            currentTarget: u(t.currentTarget),
            ...f(t),
          };
          return (
            "undefined" != typeof CustomEvent &&
              (0, i.V9)(t, CustomEvent) &&
              (n.detail = t.detail),
            n
          );
        }
        return t;
      }
      function u(t) {
        try {
          return (0, i.kK)(t)
            ? (0, r.Rt)(t)
            : Object.prototype.toString.call(t);
        } catch (t) {
          return "<unknown>";
        }
      }
      function f(t) {
        if ("object" == typeof t && null !== t) {
          const n = {};
          for (const e in t)
            Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e]);
          return n;
        }
        return {};
      }
      function d(t) {
        return p(t, new Map());
      }
      function p(t, n) {
        if (
          (function (t) {
            if (!(0, i.PO)(t)) return !1;
            try {
              const n = Object.getPrototypeOf(t).constructor.name;
              return !n || "Object" === n;
            } catch (t) {
              return !0;
            }
          })(t)
        ) {
          const e = n.get(t);
          if (void 0 !== e) return e;
          const r = {};
          n.set(t, r);
          for (const e of Object.keys(t))
            void 0 !== t[e] && (r[e] = p(t[e], n));
          return r;
        }
        if (Array.isArray(t)) {
          const e = n.get(t);
          if (void 0 !== e) return e;
          const r = [];
          return (
            n.set(t, r),
            t.forEach((t) => {
              r.push(p(t, n));
            }),
            r
          );
        }
        return t;
      }
    },
    96390: (t, n, e) => {
      e.d(n, { Fi: () => o, pE: () => a, $P: () => f });
      const r = 50,
        o = "?",
        i = /\(error: (.*)\)/,
        s = /captureMessage|captureException/;
      function a(...t) {
        const n = t.sort((t, n) => t[0] - n[0]).map((t) => t[1]);
        return (t, e = 0, a = 0) => {
          const u = [],
            f = t.split("\n");
          for (let t = e; t < f.length; t++) {
            const e = f[t];
            if (e.length > 1024) continue;
            const o = i.test(e) ? e.replace(i, "$1") : e;
            if (!o.match(/\S*Error: /)) {
              for (const t of n) {
                const n = t(o);
                if (n) {
                  u.push(n);
                  break;
                }
              }
              if (u.length >= r + a) break;
            }
          }
          return (function (t) {
            if (!t.length) return [];
            const n = Array.from(t);
            return (
              /sentryWrapped/.test(c(n).function || "") && n.pop(),
              n.reverse(),
              s.test(c(n).function || "") &&
                (n.pop(), s.test(c(n).function || "") && n.pop()),
              n
                .slice(0, r)
                .map((t) => ({
                  ...t,
                  filename: t.filename || c(n).filename,
                  function: t.function || o,
                }))
            );
          })(u.slice(a));
        };
      }
      function c(t) {
        return t[t.length - 1] || {};
      }
      const u = "<anonymous>";
      function f(t) {
        try {
          return (t && "function" == typeof t && t.name) || u;
        } catch (t) {
          return u;
        }
      }
    },
  },
]);
