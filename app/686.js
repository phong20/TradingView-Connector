"use strict";
(global.webpackChunktradingview_desktop =
  global.webpackChunktradingview_desktop || []).push([
  [686],
  {
    86753: (t, e, n) => {
      n.d(e, { nV: () => oe, S1: () => se });
      var r = n(86683),
        o = n(74395),
        s = n(45964),
        i = n(77399),
        a = n(47831);
      const c = [
          /^Script error\.?$/,
          /^Javascript error: Script error\.? on line 0$/,
          /^ResizeObserver loop completed with undelivered notifications.$/,
          /^Cannot redefine property: googletag$/,
          "undefined is not an object (evaluating 'a.L')",
          'can\'t redefine non-configurable property "solana"',
          "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)",
          "Can't find variable: _AutofillCallbackHandler",
        ],
        u = (0, a._I)((t = {}) => ({
          name: "InboundFilters",
          processEvent(e, n, a) {
            const u = a.getOptions(),
              d = (function (t = {}, e = {}) {
                return {
                  allowUrls: [...(t.allowUrls || []), ...(e.allowUrls || [])],
                  denyUrls: [...(t.denyUrls || []), ...(e.denyUrls || [])],
                  ignoreErrors: [
                    ...(t.ignoreErrors || []),
                    ...(e.ignoreErrors || []),
                    ...(t.disableErrorDefaults ? [] : c),
                  ],
                  ignoreTransactions: [
                    ...(t.ignoreTransactions || []),
                    ...(e.ignoreTransactions || []),
                  ],
                  ignoreInternal:
                    void 0 === t.ignoreInternal || t.ignoreInternal,
                };
              })(t, u);
            return (function (t, e) {
              return e.ignoreInternal &&
                (function (t) {
                  try {
                    return "SentryError" === t.exception.values[0].type;
                  } catch (t) {}
                  return !1;
                })(t)
                ? (i.X &&
                    r.kg.warn(
                      `Event dropped due to being internal Sentry Error.\nEvent: ${(0, o.jH)(t)}`,
                    ),
                  !0)
                : (function (t, e) {
                      return (
                        !(t.type || !e || !e.length) &&
                        (function (t) {
                          const e = [];
                          let n;
                          t.message && e.push(t.message);
                          try {
                            n =
                              t.exception.values[t.exception.values.length - 1];
                          } catch (t) {}
                          return (
                            n &&
                              n.value &&
                              (e.push(n.value),
                              n.type && e.push(`${n.type}: ${n.value}`)),
                            e
                          );
                        })(t).some((t) => (0, s.U0)(t, e))
                      );
                    })(t, e.ignoreErrors)
                  ? (i.X &&
                      r.kg.warn(
                        `Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${(0, o.jH)(t)}`,
                      ),
                    !0)
                  : (function (t) {
                        return (
                          !t.type &&
                          !(
                            !t.exception ||
                            !t.exception.values ||
                            0 === t.exception.values.length
                          ) &&
                          !t.message &&
                          !t.exception.values.some(
                            (t) =>
                              t.stacktrace ||
                              (t.type && "Error" !== t.type) ||
                              t.value,
                          )
                        );
                      })(t)
                    ? (i.X &&
                        r.kg.warn(
                          `Event dropped due to not having an error message, error type or stacktrace.\nEvent: ${(0, o.jH)(t)}`,
                        ),
                      !0)
                    : (function (t, e) {
                          if ("transaction" !== t.type || !e || !e.length)
                            return !1;
                          const n = t.transaction;
                          return !!n && (0, s.U0)(n, e);
                        })(t, e.ignoreTransactions)
                      ? (i.X &&
                          r.kg.warn(
                            `Event dropped due to being matched by \`ignoreTransactions\` option.\nEvent: ${(0, o.jH)(t)}`,
                          ),
                        !0)
                      : (function (t, e) {
                            if (!e || !e.length) return !1;
                            const n = l(t);
                            return !!n && (0, s.U0)(n, e);
                          })(t, e.denyUrls)
                        ? (i.X &&
                            r.kg.warn(
                              `Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${(0, o.jH)(t)}.\nUrl: ${l(t)}`,
                            ),
                          !0)
                        : !(function (t, e) {
                            if (!e || !e.length) return !0;
                            const n = l(t);
                            return !n || (0, s.U0)(n, e);
                          })(t, e.allowUrls) &&
                          (i.X &&
                            r.kg.warn(
                              `Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${(0, o.jH)(t)}.\nUrl: ${l(t)}`,
                            ),
                          !0);
            })(e, d)
              ? null
              : e;
          },
        }));
      function l(t) {
        try {
          let e;
          try {
            e = t.exception.values[0].stacktrace.frames;
          } catch (t) {}
          return e
            ? (function (t = []) {
                for (let e = t.length - 1; e >= 0; e--) {
                  const n = t[e];
                  if (
                    n &&
                    "<anonymous>" !== n.filename &&
                    "[native code]" !== n.filename
                  )
                    return n.filename || null;
                }
                return null;
              })(e)
            : null;
        } catch (e) {
          return (
            i.X && r.kg.error(`Cannot extract url for event ${(0, o.jH)(t)}`),
            null
          );
        }
      }
      var d = n(69289),
        p = n(4352);
      let f;
      const h = new WeakMap(),
        m = (0, a._I)(() => ({
          name: "FunctionToString",
          setupOnce() {
            f = Function.prototype.toString;
            try {
              Function.prototype.toString = function (...t) {
                const e = (0, d.HK)(this),
                  n = h.has((0, p.s3)()) && void 0 !== e ? e : this;
                return f.apply(n, t);
              };
            } catch (t) {}
          },
          setup(t) {
            h.set(t, !0);
          },
        }));
      var g = n(96390);
      const y = (0, a._I)(() => {
        let t;
        return {
          name: "Dedupe",
          processEvent(e) {
            if (e.type) return e;
            try {
              if (
                (function (t, e) {
                  return (
                    !!e &&
                    (!!(function (t, e) {
                      const n = t.message,
                        r = e.message;
                      return (
                        !(!n && !r) &&
                        !((n && !r) || (!n && r)) &&
                        n === r &&
                        !!v(t, e) &&
                        !!_(t, e)
                      );
                    })(t, e) ||
                      !!(function (t, e) {
                        const n = E(e),
                          r = E(t);
                        return (
                          !(!n || !r) &&
                          n.type === r.type &&
                          n.value === r.value &&
                          !!v(t, e) &&
                          !!_(t, e)
                        );
                      })(t, e))
                  );
                })(e, t)
              )
                return (
                  i.X &&
                    r.kg.warn(
                      "Event dropped due to being a duplicate of previously captured event.",
                    ),
                  null
                );
            } catch (t) {}
            return (t = e);
          },
        };
      });
      function _(t, e) {
        let n = (0, g.Fr)(t),
          r = (0, g.Fr)(e);
        if (!n && !r) return !0;
        if ((n && !r) || (!n && r)) return !1;
        if (r.length !== n.length) return !1;
        for (let t = 0; t < r.length; t++) {
          const e = r[t],
            o = n[t];
          if (
            e.filename !== o.filename ||
            e.lineno !== o.lineno ||
            e.colno !== o.colno ||
            e.function !== o.function
          )
            return !1;
        }
        return !0;
      }
      function v(t, e) {
        let n = t.fingerprint,
          r = e.fingerprint;
        if (!n && !r) return !0;
        if ((n && !r) || (!n && r)) return !1;
        try {
          return !(n.join("") !== r.join(""));
        } catch (t) {
          return !1;
        }
      }
      function E(t) {
        return t.exception && t.exception.values && t.exception.values[0];
      }
      var b = n(84434),
        k = n(91188),
        S = n(77751);
      const x = S.n;
      function w() {
        if (!("fetch" in x)) return !1;
        try {
          return (
            new Headers(),
            new Request("http://www.example.com"),
            new Response(),
            !0
          );
        } catch (t) {
          return !1;
        }
      }
      function $(t) {
        return (
          t &&
          /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
        );
      }
      const D = {},
        O = {};
      function T(t, e) {
        ((D[t] = D[t] || []), D[t].push(e));
      }
      function j(t, e) {
        O[t] || (e(), (O[t] = !0));
      }
      function I(t, e) {
        const n = t && D[t];
        if (n)
          for (const o of n)
            try {
              o(e);
            } catch (e) {
              k.X &&
                r.kg.error(
                  `Error while triggering instrumentation handler.\nType: ${t}\nName: ${(0, g.$P)(o)}\nError:`,
                  e,
                );
            }
      }
      const R = S.n,
        P = S.n;
      let N;
      function C(t) {
        const e = "history";
        (T(e, t), j(e, A));
      }
      function A() {
        if (
          !(function () {
            const t = R.chrome,
              e = t && t.app && t.app.runtime,
              n =
                "history" in R &&
                !!R.history.pushState &&
                !!R.history.replaceState;
            return !e && n;
          })()
        )
          return;
        const t = P.onpopstate;
        function e(t) {
          return function (...e) {
            const n = e.length > 2 ? e[2] : void 0;
            if (n) {
              const t = N,
                e = String(n);
              ((N = e), I("history", { from: t, to: e }));
            }
            return t.apply(this, e);
          };
        }
        ((P.onpopstate = function (...e) {
          const n = P.location.href,
            r = N;
          if (((N = n), I("history", { from: r, to: n }), t))
            try {
              return t.apply(this, e);
            } catch (t) {}
        }),
          (0, d.hl)(P.history, "pushState", e),
          (0, d.hl)(P.history, "replaceState", e));
      }
      var M = n(95564),
        L = n(3964),
        U = n(99273),
        H = n(39947),
        X = n(86540),
        J = n(43318);
      function F(t, e, n) {
        const r = [
          { type: "client_report" },
          { timestamp: n || (0, J.yW)(), discarded_events: t },
        ];
        return (0, H.Jd)(e ? { dsn: e } : {}, [r]);
      }
      var q = n(74170),
        G = n(30310),
        W = n(10945),
        V = n(47919),
        Y = n(68080);
      const K = "Not capturing exception because it's already been captured.";
      class z {
        constructor(t) {
          if (
            ((this._options = t),
            (this._integrations = {}),
            (this._numProcessing = 0),
            (this._outcomes = {}),
            (this._hooks = {}),
            (this._eventProcessors = []),
            t.dsn
              ? (this._dsn = (0, M.vK)(t.dsn))
              : i.X &&
                r.kg.warn("No DSN provided, client will not send events."),
            this._dsn)
          ) {
            const r =
              ((e = this._dsn),
              (n = t.tunnel),
              (o = t._metadata ? t._metadata.sdk : void 0),
              n ||
                `${(function (t) {
                  return `${(function (t) {
                    const e = t.protocol ? `${t.protocol}:` : "",
                      n = t.port ? `:${t.port}` : "";
                    return `${e}//${t.host}${n}${t.path ? `/${t.path}` : ""}/api/`;
                  })(t)}${t.projectId}/envelope/`;
                })(e)}?${(function (t, e) {
                  return (0, d._j)({
                    sentry_key: t.publicKey,
                    sentry_version: "7",
                    ...(e && { sentry_client: `${e.name}/${e.version}` }),
                  });
                })(e, o)}`);
            this._transport = t.transport({
              tunnel: this._options.tunnel,
              recordDroppedEvent: this.recordDroppedEvent.bind(this),
              ...t.transportOptions,
              url: r,
            });
          }
          var e, n, o;
        }
        captureException(t, e, n) {
          const s = (0, o.DM)();
          if ((0, o.YO)(t)) return (i.X && r.kg.log(K), s);
          const a = { event_id: s, ...e };
          return (
            this._process(
              this.eventFromException(t, a).then((t) =>
                this._captureEvent(t, a, n),
              ),
            ),
            a.event_id
          );
        }
        captureMessage(t, e, n, r) {
          const s = { event_id: (0, o.DM)(), ...n },
            i = (0, L.Le)(t) ? t : String(t),
            a = (0, L.pt)(t)
              ? this.eventFromMessage(i, e, s)
              : this.eventFromException(t, s);
          return (
            this._process(a.then((t) => this._captureEvent(t, s, r))),
            s.event_id
          );
        }
        captureEvent(t, e, n) {
          const s = (0, o.DM)();
          if (e && e.originalException && (0, o.YO)(e.originalException))
            return (i.X && r.kg.log(K), s);
          const a = { event_id: s, ...e },
            c = (t.sdkProcessingMetadata || {}).capturedSpanScope;
          return (this._process(this._captureEvent(t, a, c || n)), a.event_id);
        }
        captureSession(t) {
          "string" != typeof t.release
            ? i.X &&
              r.kg.warn(
                "Discarded session because of missing or non-string release",
              )
            : (this.sendSession(t), (0, G.CT)(t, { init: !1 }));
        }
        getDsn() {
          return this._dsn;
        }
        getOptions() {
          return this._options;
        }
        getSdkMetadata() {
          return this._options._metadata;
        }
        getTransport() {
          return this._transport;
        }
        flush(t) {
          const e = this._transport;
          return e
            ? (this.emit("flush"),
              this._isClientDoneProcessing(t).then((n) =>
                e.flush(t).then((t) => n && t),
              ))
            : (0, U.WD)(!0);
        }
        close(t) {
          return this.flush(t).then(
            (t) => ((this.getOptions().enabled = !1), this.emit("close"), t),
          );
        }
        getEventProcessors() {
          return this._eventProcessors;
        }
        addEventProcessor(t) {
          this._eventProcessors.push(t);
        }
        init() {
          this._isEnabled() && this._setupIntegrations();
        }
        getIntegrationByName(t) {
          return this._integrations[t];
        }
        addIntegration(t) {
          const e = this._integrations[t.name];
          ((0, a.m7)(this, t, this._integrations), e || (0, a.uf)(this, [t]));
        }
        sendEvent(t, e = {}) {
          this.emit("beforeSendEvent", t, e);
          let n = (0, q.Mq)(
            t,
            this._dsn,
            this._options._metadata,
            this._options.tunnel,
          );
          for (const t of e.attachments || []) n = (0, H.BO)(n, (0, H.zQ)(t));
          const r = this.sendEnvelope(n);
          r && r.then((e) => this.emit("afterSendEvent", t, e), null);
        }
        sendSession(t) {
          const e = (0, q.Q3)(
            t,
            this._dsn,
            this._options._metadata,
            this._options.tunnel,
          );
          this.sendEnvelope(e);
        }
        recordDroppedEvent(t, e, n) {
          if (this._options.sendClientReports) {
            const n = `${t}:${e}`;
            (i.X && r.kg.log(`Adding outcome: "${n}"`),
              (this._outcomes[n] = (this._outcomes[n] || 0) + 1));
          }
        }
        on(t, e) {
          const n = (this._hooks[t] = this._hooks[t] || []);
          return (
            n.push(e),
            () => {
              const t = n.indexOf(e);
              t > -1 && n.splice(t, 1);
            }
          );
        }
        emit(t, ...e) {
          const n = this._hooks[t];
          n && n.forEach((t) => t(...e));
        }
        sendEnvelope(t) {
          return (
            this.emit("beforeEnvelope", t),
            this._isEnabled() && this._transport
              ? this._transport
                  .send(t)
                  .then(
                    null,
                    (t) => (
                      i.X && r.kg.error("Error while sending event:", t),
                      t
                    ),
                  )
              : (i.X && r.kg.error("Transport disabled"), (0, U.WD)({}))
          );
        }
        _setupIntegrations() {
          const { integrations: t } = this._options;
          ((this._integrations = (0, a.q4)(this, t)), (0, a.uf)(this, t));
        }
        _updateSessionFromEvent(t, e) {
          let n = !1,
            r = !1;
          const o = e.exception && e.exception.values;
          if (o) {
            r = !0;
            for (const t of o) {
              const e = t.mechanism;
              if (e && !1 === e.handled) {
                n = !0;
                break;
              }
            }
          }
          const s = "ok" === t.status;
          ((s && 0 === t.errors) || (s && n)) &&
            ((0, G.CT)(t, {
              ...(n && { status: "crashed" }),
              errors: t.errors || Number(r || n),
            }),
            this.captureSession(t));
        }
        _isClientDoneProcessing(t) {
          return new U.cW((e) => {
            let n = 0;
            const r = setInterval(() => {
              0 == this._numProcessing
                ? (clearInterval(r), e(!0))
                : ((n += 1), t && n >= t && (clearInterval(r), e(!1)));
            }, 1);
          });
        }
        _isEnabled() {
          return !1 !== this.getOptions().enabled && void 0 !== this._transport;
        }
        _prepareEvent(t, e, n, r = (0, p.aF)()) {
          const o = this.getOptions(),
            s = Object.keys(this._integrations);
          return (
            !e.integrations && s.length > 0 && (e.integrations = s),
            this.emit("preprocessEvent", t, e),
            t.type || r.setLastEventId(t.event_id || e.event_id),
            (0, Y.R)(o, t, e, n, this, r).then((t) => {
              if (null === t) return t;
              const e = {
                ...r.getPropagationContext(),
                ...(n ? n.getPropagationContext() : void 0),
              };
              if ((!t.contexts || !t.contexts.trace) && e) {
                const { traceId: n, spanId: r, parentSpanId: o, dsc: s } = e;
                t.contexts = {
                  trace: (0, d.Jr)({
                    trace_id: n,
                    span_id: r,
                    parent_span_id: o,
                  }),
                  ...t.contexts,
                };
                const i = s || (0, W._l)(n, this);
                t.sdkProcessingMetadata = {
                  dynamicSamplingContext: i,
                  ...t.sdkProcessingMetadata,
                };
              }
              return t;
            })
          );
        }
        _captureEvent(t, e = {}, n) {
          return this._processEvent(t, e, n).then(
            (t) => t.event_id,
            (t) => {
              if (i.X) {
                const e = t;
                "log" === e.logLevel ? r.kg.log(e.message) : r.kg.warn(e);
              }
            },
          );
        }
        _processEvent(t, e, n) {
          const r = this.getOptions(),
            { sampleRate: o } = r,
            s = Q(t),
            i = B(t),
            a = t.type || "error",
            c = `before send for type \`${a}\``,
            u = void 0 === o ? void 0 : (0, V.o)(o);
          if (i && "number" == typeof u && Math.random() > u)
            return (
              this.recordDroppedEvent("sample_rate", "error", t),
              (0, U.$2)(
                new X.b(
                  `Discarding event because it's not included in the random sample (sampling rate = ${o})`,
                  "log",
                ),
              )
            );
          const l = "replay_event" === a ? "replay" : a,
            d = (t.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
          return this._prepareEvent(t, e, n, d)
            .then((n) => {
              if (null === n)
                throw (
                  this.recordDroppedEvent("event_processor", l, t),
                  new X.b(
                    "An event processor returned `null`, will not send event.",
                    "log",
                  )
                );
              if (e.data && !0 === e.data.__sentry__) return n;
              const o = (function (t, e, n, r) {
                const {
                  beforeSend: o,
                  beforeSendTransaction: s,
                  beforeSendSpan: i,
                } = e;
                if (B(n) && o) return o(n, r);
                if (Q(n)) {
                  if (n.spans && i) {
                    const e = [];
                    for (const r of n.spans) {
                      const n = i(r);
                      n
                        ? e.push(n)
                        : t.recordDroppedEvent("before_send", "span");
                    }
                    n.spans = e;
                  }
                  if (s) return s(n, r);
                }
                return n;
              })(this, r, n, e);
              return (function (t, e) {
                const n = `${e} must return \`null\` or a valid event.`;
                if ((0, L.J8)(t))
                  return t.then(
                    (t) => {
                      if (!(0, L.PO)(t) && null !== t) throw new X.b(n);
                      return t;
                    },
                    (t) => {
                      throw new X.b(`${e} rejected with ${t}`);
                    },
                  );
                if (!(0, L.PO)(t) && null !== t) throw new X.b(n);
                return t;
              })(o, c);
            })
            .then((r) => {
              if (null === r) {
                if ((this.recordDroppedEvent("before_send", l, t), Q(t))) {
                  const e = 1 + (t.spans || []).length;
                  this._outcomes.span = (this._outcomes.span || 0) + e;
                }
                throw new X.b(
                  `${c} returned \`null\`, will not send event.`,
                  "log",
                );
              }
              const o = n && n.getSession();
              !s && o && this._updateSessionFromEvent(o, r);
              const i = r.transaction_info;
              if (s && i && r.transaction !== t.transaction) {
                const t = "custom";
                r.transaction_info = { ...i, source: t };
              }
              return (this.sendEvent(r, e), r);
            })
            .then(null, (t) => {
              if (t instanceof X.b) throw t;
              throw (
                this.captureException(t, {
                  data: { __sentry__: !0 },
                  originalException: t,
                }),
                new X.b(
                  `Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${t}`,
                )
              );
            });
        }
        _process(t) {
          (this._numProcessing++,
            t.then(
              (t) => (this._numProcessing--, t),
              (t) => (this._numProcessing--, t),
            ));
        }
        _clearOutcomes() {
          const t = this._outcomes;
          return (
            (this._outcomes = {}),
            Object.entries(t).map(([t, e]) => {
              const [n, r] = t.split(":");
              return { reason: n, category: r, quantity: e };
            })
          );
        }
        _flushOutcomes() {
          i.X && r.kg.log("Flushing outcomes...");
          const t = this._clearOutcomes();
          if (0 === t.length)
            return void (i.X && r.kg.log("No outcomes to send"));
          if (!this._dsn)
            return void (
              i.X && r.kg.log("No dsn provided, will not send outcomes")
            );
          i.X && r.kg.log("Sending outcomes:", t);
          const e = F(t, this._options.tunnel && (0, M.RA)(this._dsn));
          this.sendEnvelope(e);
        }
      }
      function B(t) {
        return void 0 === t.type;
      }
      function Q(t) {
        return "transaction" === t.type;
      }
      var Z = n(82917);
      const tt = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
      var et = n(78624);
      function nt(t, e) {
        const n = ot(t, e),
          r = { type: e && e.name, value: it(e) };
        return (
          n.length && (r.stacktrace = { frames: n }),
          void 0 === r.type &&
            "" === r.value &&
            (r.value = "Unrecoverable error caught"),
          r
        );
      }
      function rt(t, e) {
        return { exception: { values: [nt(t, e)] } };
      }
      function ot(t, e) {
        const n = e.stacktrace || e.stack || "",
          r = (function (t) {
            return t && st.test(t.message) ? 1 : 0;
          })(e),
          o = (function (t) {
            return "number" == typeof t.framesToPop ? t.framesToPop : 0;
          })(e);
        try {
          return t(n, r, o);
        } catch (t) {}
        return [];
      }
      const st = /Minified React error #\d+;/i;
      function it(t) {
        const e = t && t.message;
        return e
          ? e.error && "string" == typeof e.error.message
            ? e.error.message
            : e
          : "No error message";
      }
      function at(t, e, n, r, s) {
        let i;
        if ((0, L.VW)(e) && e.error) return rt(t, e.error);
        if ((0, L.TX)(e) || (0, L.fm)(e)) {
          const s = e;
          if ("stack" in e) i = rt(t, e);
          else {
            const e = s.name || ((0, L.TX)(s) ? "DOMError" : "DOMException"),
              a = s.message ? `${e}: ${s.message}` : e;
            ((i = ct(t, a, n, r)), (0, o.Db)(i, a));
          }
          return (
            "code" in s &&
              (i.tags = { ...i.tags, "DOMException.code": `${s.code}` }),
            i
          );
        }
        return (0, L.VZ)(e)
          ? rt(t, e)
          : (0, L.PO)(e) || (0, L.cO)(e)
            ? ((i = (function (t, e, n, r) {
                const o = (0, p.s3)(),
                  s = o && o.getOptions().normalizeDepth,
                  i = (function (t) {
                    for (const e in t)
                      if (Object.prototype.hasOwnProperty.call(t, e)) {
                        const n = t[e];
                        if (n instanceof Error) return n;
                      }
                  })(e),
                  a = { __serialized__: (0, et.Qy)(e, s) };
                if (i) return { exception: { values: [nt(t, i)] }, extra: a };
                const c = {
                  exception: {
                    values: [
                      {
                        type: (0, L.cO)(e)
                          ? e.constructor.name
                          : r
                            ? "UnhandledRejection"
                            : "Error",
                        value: ut(e, { isUnhandledRejection: r }),
                      },
                    ],
                  },
                  extra: a,
                };
                if (n) {
                  const e = ot(t, n);
                  e.length &&
                    (c.exception.values[0].stacktrace = { frames: e });
                }
                return c;
              })(t, e, n, s)),
              (0, o.EG)(i, { synthetic: !0 }),
              i)
            : ((i = ct(t, e, n, r)),
              (0, o.Db)(i, `${e}`, void 0),
              (0, o.EG)(i, { synthetic: !0 }),
              i);
      }
      function ct(t, e, n, r) {
        const o = {};
        if (r && n) {
          const r = ot(t, n);
          r.length &&
            (o.exception = {
              values: [{ value: e, stacktrace: { frames: r } }],
            });
        }
        if ((0, L.Le)(e)) {
          const {
            __sentry_template_string__: t,
            __sentry_template_values__: n,
          } = e;
          return ((o.logentry = { message: t, params: n }), o);
        }
        return ((o.message = e), o);
      }
      function ut(t, { isUnhandledRejection: e }) {
        const n = (0, d.zf)(t),
          r = e ? "promise rejection" : "exception";
        return (0, L.VW)(t)
          ? `Event \`ErrorEvent\` captured as ${r} with message \`${t.message}\``
          : (0, L.cO)(t)
            ? `Event \`${(function (t) {
                try {
                  const e = Object.getPrototypeOf(t);
                  return e ? e.constructor.name : void 0;
                } catch (t) {}
              })(t)}\` (type=${t.type}) captured as ${r}`
            : `Object captured as ${r} with keys: ${n}`;
      }
      const lt = S.n;
      let dt = 0;
      function pt() {
        return dt > 0;
      }
      function ft(t, e = {}, n) {
        if ("function" != typeof t) return t;
        try {
          const e = t.__sentry_wrapped__;
          if (e) return e;
          if ((0, d.HK)(t)) return t;
        } catch (e) {
          return t;
        }
        const r = function () {
          const r = Array.prototype.slice.call(arguments);
          try {
            n && "function" == typeof n && n.apply(this, arguments);
            const o = r.map((t) => ft(t, e));
            return t.apply(this, o);
          } catch (t) {
            throw (
              dt++,
              setTimeout(() => {
                dt--;
              }),
              (0, p.$e)((n) => {
                (n.addEventProcessor(
                  (t) => (
                    e.mechanism &&
                      ((0, o.Db)(t, void 0, void 0), (0, o.EG)(t, e.mechanism)),
                    (t.extra = { ...t.extra, arguments: r }),
                    t
                  ),
                ),
                  (0, b.Tb)(t));
              }),
              t
            );
          }
        };
        try {
          for (const e in t)
            Object.prototype.hasOwnProperty.call(t, e) && (r[e] = t[e]);
        } catch (t) {}
        ((0, d.$Q)(r, t), (0, d.xp)(t, "__sentry_wrapped__", r));
        try {
          Object.getOwnPropertyDescriptor(r, "name").configurable &&
            Object.defineProperty(r, "name", { get: () => t.name });
        } catch (t) {}
        return r;
      }
      function ht(t, { metadata: e, tunnel: n, dsn: r }) {
        const o = {
            event_id: t.event_id,
            sent_at: new Date().toISOString(),
            ...(e &&
              e.sdk && { sdk: { name: e.sdk.name, version: e.sdk.version } }),
            ...(!!n && !!r && { dsn: (0, M.RA)(r) }),
          },
          s = (function (t) {
            return [{ type: "user_report" }, t];
          })(t);
        return (0, H.Jd)(o, [s]);
      }
      class mt extends z {
        constructor(t) {
          const e = { parentSpanIsAlwaysRootSpan: !0, ...t };
          (!(function (t, e, n = [e], r = "npm") {
            const o = t._metadata || {};
            (o.sdk ||
              (o.sdk = {
                name: `sentry.javascript.${e}`,
                packages: n.map((t) => ({
                  name: `${r}:@sentry/${t}`,
                  version: Z.J,
                })),
                version: Z.J,
              }),
              (t._metadata = o));
          })(e, "browser", ["browser"], lt.SENTRY_SDK_SOURCE || "npm"),
            super(e),
            e.sendClientReports &&
              lt.document &&
              lt.document.addEventListener("visibilitychange", () => {
                "hidden" === lt.document.visibilityState &&
                  this._flushOutcomes();
              }));
        }
        eventFromException(t, e) {
          return (function (t, e, n, r) {
            const s = at(t, e, (n && n.syntheticException) || void 0, r);
            return (
              (0, o.EG)(s),
              (s.level = "error"),
              n && n.event_id && (s.event_id = n.event_id),
              (0, U.WD)(s)
            );
          })(this._options.stackParser, t, e, this._options.attachStacktrace);
        }
        eventFromMessage(t, e = "info", n) {
          return (function (t, e, n = "info", r, o) {
            const s = ct(t, e, (r && r.syntheticException) || void 0, o);
            return (
              (s.level = n),
              r && r.event_id && (s.event_id = r.event_id),
              (0, U.WD)(s)
            );
          })(
            this._options.stackParser,
            t,
            e,
            n,
            this._options.attachStacktrace,
          );
        }
        captureUserFeedback(t) {
          if (!this._isEnabled())
            return void (
              tt &&
              r.kg.warn("SDK not enabled, will not capture user feedback.")
            );
          const e = ht(t, {
            metadata: this.getSdkMetadata(),
            dsn: this.getDsn(),
            tunnel: this.getOptions().tunnel,
          });
          this.sendEnvelope(e);
        }
        _prepareEvent(t, e, n) {
          return (
            (t.platform = t.platform || "javascript"),
            super._prepareEvent(t, e, n)
          );
        }
      }
      const gt = 1e3;
      let yt, _t, vt;
      function Et() {
        if (!P.document) return;
        const t = I.bind(null, "dom"),
          e = bt(t, !0);
        (P.document.addEventListener("click", e, !1),
          P.document.addEventListener("keypress", e, !1),
          ["EventTarget", "Node"].forEach((e) => {
            const n = P[e] && P[e].prototype;
            n &&
              n.hasOwnProperty &&
              n.hasOwnProperty("addEventListener") &&
              ((0, d.hl)(n, "addEventListener", function (e) {
                return function (n, r, o) {
                  if ("click" === n || "keypress" == n)
                    try {
                      const r = this,
                        s = (r.__sentry_instrumentation_handlers__ =
                          r.__sentry_instrumentation_handlers__ || {}),
                        i = (s[n] = s[n] || { refCount: 0 });
                      if (!i.handler) {
                        const r = bt(t);
                        ((i.handler = r), e.call(this, n, r, o));
                      }
                      i.refCount++;
                    } catch (t) {}
                  return e.call(this, n, r, o);
                };
              }),
              (0, d.hl)(n, "removeEventListener", function (t) {
                return function (e, n, r) {
                  if ("click" === e || "keypress" == e)
                    try {
                      const n = this,
                        o = n.__sentry_instrumentation_handlers__ || {},
                        s = o[e];
                      s &&
                        (s.refCount--,
                        s.refCount <= 0 &&
                          (t.call(this, e, s.handler, r),
                          (s.handler = void 0),
                          delete o[e]),
                        0 === Object.keys(o).length &&
                          delete n.__sentry_instrumentation_handlers__);
                    } catch (t) {}
                  return t.call(this, e, n, r);
                };
              }));
          }));
      }
      function bt(t, e = !1) {
        return (n) => {
          if (!n || n._sentryCaptured) return;
          const r = (function (t) {
            try {
              return t.target;
            } catch (t) {
              return null;
            }
          })(n);
          if (
            (function (t, e) {
              return (
                "keypress" === t &&
                (!e ||
                  !e.tagName ||
                  ("INPUT" !== e.tagName &&
                    "TEXTAREA" !== e.tagName &&
                    !e.isContentEditable))
              );
            })(n.type, r)
          )
            return;
          ((0, d.xp)(n, "_sentryCaptured", !0),
            r && !r._sentryId && (0, d.xp)(r, "_sentryId", (0, o.DM)()));
          const s = "keypress" === n.type ? "input" : n.type;
          ((function (t) {
            if (t.type !== _t) return !1;
            try {
              if (!t.target || t.target._sentryId !== vt) return !1;
            } catch (t) {}
            return !0;
          })(n) ||
            (t({ event: n, name: s, global: e }),
            (_t = n.type),
            (vt = r ? r._sentryId : void 0)),
            clearTimeout(yt),
            (yt = P.setTimeout(() => {
              ((vt = void 0), (_t = void 0));
            }, gt)));
        };
      }
      const kt = "__sentry_xhr_v3__";
      function St() {
        if (!P.XMLHttpRequest) return;
        const t = XMLHttpRequest.prototype;
        ((0, d.hl)(t, "open", function (t) {
          return function (...e) {
            const n = 1e3 * (0, J.ph)(),
              r = (0, L.HD)(e[0]) ? e[0].toUpperCase() : void 0,
              o = (function (t) {
                if ((0, L.HD)(t)) return t;
                try {
                  return t.toString();
                } catch (t) {}
              })(e[1]);
            if (!r || !o) return t.apply(this, e);
            ((this[kt] = { method: r, url: o, request_headers: {} }),
              "POST" === r &&
                o.match(/sentry_key/) &&
                (this.__sentry_own_request__ = !0));
            const s = () => {
              const t = this[kt];
              if (t && 4 === this.readyState) {
                try {
                  t.status_code = this.status;
                } catch (t) {}
                I("xhr", {
                  endTimestamp: 1e3 * (0, J.ph)(),
                  startTimestamp: n,
                  xhr: this,
                });
              }
            };
            return (
              "onreadystatechange" in this &&
              "function" == typeof this.onreadystatechange
                ? (0, d.hl)(this, "onreadystatechange", function (t) {
                    return function (...e) {
                      return (s(), t.apply(this, e));
                    };
                  })
                : this.addEventListener("readystatechange", s),
              (0, d.hl)(this, "setRequestHeader", function (t) {
                return function (...e) {
                  const [n, r] = e,
                    o = this[kt];
                  return (
                    o &&
                      (0, L.HD)(n) &&
                      (0, L.HD)(r) &&
                      (o.request_headers[n.toLowerCase()] = r),
                    t.apply(this, e)
                  );
                };
              }),
              t.apply(this, e)
            );
          };
        }),
          (0, d.hl)(t, "send", function (t) {
            return function (...e) {
              const n = this[kt];
              return n
                ? (void 0 !== e[0] && (n.body = e[0]),
                  I("xhr", { startTimestamp: 1e3 * (0, J.ph)(), xhr: this }),
                  t.apply(this, e))
                : t.apply(this, e);
            };
          }));
      }
      var xt = n(14547);
      function wt() {
        "console" in S.n &&
          r.RU.forEach(function (t) {
            t in S.n.console &&
              (0, d.hl)(S.n.console, t, function (e) {
                return (
                  (r.LD[t] = e),
                  function (...e) {
                    I("console", { args: e, level: t });
                    const n = r.LD[t];
                    n && n.apply(S.n.console, e);
                  }
                );
              });
          });
      }
      function $t() {
        (function () {
          if ("string" == typeof EdgeRuntime) return !0;
          if (!w()) return !1;
          if ($(x.fetch)) return !0;
          let t = !1;
          const e = x.document;
          if (e && "function" == typeof e.createElement)
            try {
              const n = e.createElement("iframe");
              ((n.hidden = !0),
                e.head.appendChild(n),
                n.contentWindow &&
                  n.contentWindow.fetch &&
                  (t = $(n.contentWindow.fetch)),
                e.head.removeChild(n));
            } catch (t) {
              k.X &&
                r.kg.warn(
                  "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
                  t,
                );
            }
          return t;
        })() &&
          (0, d.hl)(S.n, "fetch", function (t) {
            return function (...e) {
              const { method: n, url: r } = (function (t) {
                  if (0 === t.length) return { method: "GET", url: "" };
                  if (2 === t.length) {
                    const [e, n] = t;
                    return {
                      url: Ot(e),
                      method: Dt(n, "method")
                        ? String(n.method).toUpperCase()
                        : "GET",
                    };
                  }
                  const e = t[0];
                  return {
                    url: Ot(e),
                    method: Dt(e, "method")
                      ? String(e.method).toUpperCase()
                      : "GET",
                  };
                })(e),
                o = {
                  args: e,
                  fetchData: { method: n, url: r },
                  startTimestamp: 1e3 * (0, J.ph)(),
                };
              I("fetch", { ...o });
              const s = new Error().stack;
              return t.apply(S.n, e).then(
                (t) => (
                  I("fetch", {
                    ...o,
                    endTimestamp: 1e3 * (0, J.ph)(),
                    response: t,
                  }),
                  t
                ),
                (t) => {
                  throw (
                    I("fetch", {
                      ...o,
                      endTimestamp: 1e3 * (0, J.ph)(),
                      error: t,
                    }),
                    (0, L.VZ)(t) &&
                      void 0 === t.stack &&
                      ((t.stack = s), (0, d.xp)(t, "framesToPop", 1)),
                    t
                  );
                },
              );
            };
          });
      }
      function Dt(t, e) {
        return !!t && "object" == typeof t && !!t[e];
      }
      function Ot(t) {
        return "string" == typeof t
          ? t
          : t
            ? Dt(t, "url")
              ? t.url
              : t.toString
                ? t.toString()
                : ""
            : "";
      }
      var Tt = n(37141);
      const jt = ["fatal", "error", "warning", "log", "info", "debug"];
      function It(t) {
        if (!t) return {};
        const e = t.match(
          /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/,
        );
        if (!e) return {};
        const n = e[6] || "",
          r = e[8] || "";
        return {
          host: e[4],
          path: e[5],
          protocol: e[2],
          search: n,
          hash: r,
          relative: e[5] + n + r,
        };
      }
      const Rt = (0, a._I)((t = {}) => {
          const e = {
            console: !0,
            dom: !0,
            fetch: !0,
            history: !0,
            sentry: !0,
            xhr: !0,
            ...t,
          };
          return {
            name: "Breadcrumbs",
            setup(t) {
              var n;
              (e.console &&
                (function (t) {
                  const e = "console";
                  (T(e, t), j(e, wt));
                })(
                  (function (t) {
                    return function (e) {
                      if ((0, p.s3)() !== t) return;
                      const n = {
                        category: "console",
                        data: { arguments: e.args, logger: "console" },
                        level:
                          ((r = e.level),
                          "warn" === r
                            ? "warning"
                            : jt.includes(r)
                              ? r
                              : "log"),
                        message: (0, s.nK)(e.args, " "),
                      };
                      var r;
                      if ("assert" === e.level) {
                        if (!1 !== e.args[0]) return;
                        ((n.message = `Assertion failed: ${(0, s.nK)(e.args.slice(1), " ") || "console.assert"}`),
                          (n.data.arguments = e.args.slice(1)));
                      }
                      (0, xt.n)(n, { input: e.args, level: e.level });
                    };
                  })(t),
                ),
                e.dom &&
                  ((n = (function (t, e) {
                    return function (n) {
                      if ((0, p.s3)() !== t) return;
                      let o,
                        s,
                        i =
                          "object" == typeof e ? e.serializeAttribute : void 0,
                        a =
                          "object" == typeof e &&
                          "number" == typeof e.maxStringLength
                            ? e.maxStringLength
                            : void 0;
                      (a &&
                        a > 1024 &&
                        (tt &&
                          r.kg.warn(
                            `\`dom.maxStringLength\` cannot exceed 1024, but a value of ${a} was configured. Sentry will use 1024 instead.`,
                          ),
                        (a = 1024)),
                        "string" == typeof i && (i = [i]));
                      try {
                        const t = n.event,
                          e = (function (t) {
                            return !!t && !!t.target;
                          })(t)
                            ? t.target
                            : t;
                        ((o = (0, Tt.Rt)(e, {
                          keyAttrs: i,
                          maxStringLength: a,
                        })),
                          (s = (0, Tt.iY)(e)));
                      } catch (t) {
                        o = "<unknown>";
                      }
                      if (0 === o.length) return;
                      const c = { category: `ui.${n.name}`, message: o };
                      (s && (c.data = { "ui.component_name": s }),
                        (0, xt.n)(c, {
                          event: n.event,
                          name: n.name,
                          global: n.global,
                        }));
                    };
                  })(t, e.dom)),
                  T("dom", n),
                  j("dom", Et)),
                e.xhr &&
                  (function (t) {
                    (T("xhr", t), j("xhr", St));
                  })(
                    (function (t) {
                      return function (e) {
                        if ((0, p.s3)() !== t) return;
                        const { startTimestamp: n, endTimestamp: r } = e,
                          o = e.xhr[kt];
                        if (!n || !r || !o) return;
                        const {
                            method: s,
                            url: i,
                            status_code: a,
                            body: c,
                          } = o,
                          u = { method: s, url: i, status_code: a },
                          l = {
                            xhr: e.xhr,
                            input: c,
                            startTimestamp: n,
                            endTimestamp: r,
                          };
                        (0, xt.n)(
                          { category: "xhr", data: u, type: "http" },
                          l,
                        );
                      };
                    })(t),
                  ),
                e.fetch &&
                  (function (t) {
                    const e = "fetch";
                    (T(e, t), j(e, $t));
                  })(
                    (function (t) {
                      return function (e) {
                        if ((0, p.s3)() !== t) return;
                        const { startTimestamp: n, endTimestamp: r } = e;
                        if (
                          r &&
                          (!e.fetchData.url.match(/sentry_key/) ||
                            "POST" !== e.fetchData.method)
                        )
                          if (e.error) {
                            const t = e.fetchData,
                              o = {
                                data: e.error,
                                input: e.args,
                                startTimestamp: n,
                                endTimestamp: r,
                              };
                            (0, xt.n)(
                              {
                                category: "fetch",
                                data: t,
                                level: "error",
                                type: "http",
                              },
                              o,
                            );
                          } else {
                            const t = e.response,
                              o = {
                                ...e.fetchData,
                                status_code: t && t.status,
                              },
                              s = {
                                input: e.args,
                                response: t,
                                startTimestamp: n,
                                endTimestamp: r,
                              };
                            (0, xt.n)(
                              { category: "fetch", data: o, type: "http" },
                              s,
                            );
                          }
                      };
                    })(t),
                  ),
                e.history &&
                  C(
                    (function (t) {
                      return function (e) {
                        if ((0, p.s3)() !== t) return;
                        let n = e.from,
                          r = e.to;
                        const o = It(lt.location.href);
                        let s = n ? It(n) : void 0;
                        const i = It(r);
                        ((s && s.path) || (s = o),
                          o.protocol === i.protocol &&
                            o.host === i.host &&
                            (r = i.relative),
                          o.protocol === s.protocol &&
                            o.host === s.host &&
                            (n = s.relative),
                          (0, xt.n)({
                            category: "navigation",
                            data: { from: n, to: r },
                          }));
                      };
                    })(t),
                  ),
                e.sentry &&
                  t.on(
                    "beforeSendEvent",
                    (function (t) {
                      return function (e) {
                        (0, p.s3)() === t &&
                          (0, xt.n)(
                            {
                              category:
                                "sentry." +
                                ("transaction" === e.type
                                  ? "transaction"
                                  : "event"),
                              event_id: e.event_id,
                              level: e.level,
                              message: (0, o.jH)(e),
                            },
                            { event: e },
                          );
                      };
                    })(t),
                  ));
            },
          };
        }),
        Pt = [
          "EventTarget",
          "Window",
          "Node",
          "ApplicationCache",
          "AudioTrackList",
          "BroadcastChannel",
          "ChannelMergerNode",
          "CryptoOperation",
          "EventSource",
          "FileReader",
          "HTMLUnknownElement",
          "IDBDatabase",
          "IDBRequest",
          "IDBTransaction",
          "KeyOperation",
          "MediaController",
          "MessagePort",
          "ModalWindow",
          "Notification",
          "SVGElementInstance",
          "Screen",
          "SharedWorker",
          "TextTrack",
          "TextTrackCue",
          "TextTrackList",
          "WebSocket",
          "WebSocketWorker",
          "Worker",
          "XMLHttpRequest",
          "XMLHttpRequestEventTarget",
          "XMLHttpRequestUpload",
        ],
        Nt = (0, a._I)((t = {}) => {
          const e = {
            XMLHttpRequest: !0,
            eventTarget: !0,
            requestAnimationFrame: !0,
            setInterval: !0,
            setTimeout: !0,
            ...t,
          };
          return {
            name: "BrowserApiErrors",
            setupOnce() {
              (e.setTimeout && (0, d.hl)(lt, "setTimeout", Ct),
                e.setInterval && (0, d.hl)(lt, "setInterval", Ct),
                e.requestAnimationFrame &&
                  (0, d.hl)(lt, "requestAnimationFrame", At),
                e.XMLHttpRequest &&
                  "XMLHttpRequest" in lt &&
                  (0, d.hl)(XMLHttpRequest.prototype, "send", Mt));
              const t = e.eventTarget;
              t && (Array.isArray(t) ? t : Pt).forEach(Lt);
            },
          };
        });
      function Ct(t) {
        return function (...e) {
          const n = e[0];
          return (
            (e[0] = ft(n, {
              mechanism: {
                data: { function: (0, g.$P)(t) },
                handled: !1,
                type: "instrument",
              },
            })),
            t.apply(this, e)
          );
        };
      }
      function At(t) {
        return function (e) {
          return t.apply(this, [
            ft(e, {
              mechanism: {
                data: {
                  function: "requestAnimationFrame",
                  handler: (0, g.$P)(t),
                },
                handled: !1,
                type: "instrument",
              },
            }),
          ]);
        };
      }
      function Mt(t) {
        return function (...e) {
          const n = this;
          return (
            ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(
              (t) => {
                t in n &&
                  "function" == typeof n[t] &&
                  (0, d.hl)(n, t, function (e) {
                    const n = {
                        mechanism: {
                          data: { function: t, handler: (0, g.$P)(e) },
                          handled: !1,
                          type: "instrument",
                        },
                      },
                      r = (0, d.HK)(e);
                    return (
                      r && (n.mechanism.data.handler = (0, g.$P)(r)),
                      ft(e, n)
                    );
                  });
              },
            ),
            t.apply(this, e)
          );
        };
      }
      function Lt(t) {
        const e = lt,
          n = e[t] && e[t].prototype;
        n &&
          n.hasOwnProperty &&
          n.hasOwnProperty("addEventListener") &&
          ((0, d.hl)(n, "addEventListener", function (e) {
            return function (n, r, o) {
              try {
                "function" == typeof r.handleEvent &&
                  (r.handleEvent = ft(r.handleEvent, {
                    mechanism: {
                      data: {
                        function: "handleEvent",
                        handler: (0, g.$P)(r),
                        target: t,
                      },
                      handled: !1,
                      type: "instrument",
                    },
                  }));
              } catch (t) {}
              return e.apply(this, [
                n,
                ft(r, {
                  mechanism: {
                    data: {
                      function: "addEventListener",
                      handler: (0, g.$P)(r),
                      target: t,
                    },
                    handled: !1,
                    type: "instrument",
                  },
                }),
                o,
              ]);
            };
          }),
          (0, d.hl)(n, "removeEventListener", function (t) {
            return function (e, n, r) {
              const o = n;
              try {
                const n = o && o.__sentry_wrapped__;
                n && t.call(this, e, n, r);
              } catch (t) {}
              return t.call(this, e, o, r);
            };
          }));
      }
      let Ut = null;
      function Ht() {
        ((Ut = S.n.onerror),
          (S.n.onerror = function (t, e, n, r, o) {
            return (
              I("error", { column: r, error: o, line: n, msg: t, url: e }),
              !(!Ut || Ut.__SENTRY_LOADER__) && Ut.apply(this, arguments)
            );
          }),
          (S.n.onerror.__SENTRY_INSTRUMENTED__ = !0));
      }
      let Xt = null;
      function Jt() {
        ((Xt = S.n.onunhandledrejection),
          (S.n.onunhandledrejection = function (t) {
            return (
              I("unhandledrejection", t),
              !(Xt && !Xt.__SENTRY_LOADER__) || Xt.apply(this, arguments)
            );
          }),
          (S.n.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0));
      }
      const Ft = (0, a._I)((t = {}) => {
        const e = { onerror: !0, onunhandledrejection: !0, ...t };
        return {
          name: "GlobalHandlers",
          setupOnce() {
            Error.stackTraceLimit = 50;
          },
          setup(t) {
            (e.onerror &&
              ((function (t) {
                !(function () {
                  const e = "error";
                  (T(e, (e) => {
                    const { stackParser: n, attachStacktrace: r } = Gt();
                    if ((0, p.s3)() !== t || pt()) return;
                    const { msg: o, url: s, line: i, column: a, error: c } = e,
                      u = (function (t, e, n, r) {
                        const o = (t.exception = t.exception || {}),
                          s = (o.values = o.values || []),
                          i = (s[0] = s[0] || {}),
                          a = (i.stacktrace = i.stacktrace || {}),
                          c = (a.frames = a.frames || []),
                          u = isNaN(parseInt(r, 10)) ? void 0 : r,
                          l = isNaN(parseInt(n, 10)) ? void 0 : n,
                          d = (0, L.HD)(e) && e.length > 0 ? e : (0, Tt.l4)();
                        return (
                          0 === c.length &&
                            c.push({
                              colno: u,
                              filename: d,
                              function: g.Fi,
                              in_app: !0,
                              lineno: l,
                            }),
                          t
                        );
                      })(at(n, c || o, void 0, r, !1), s, i, a);
                    ((u.level = "error"),
                      (0, b.eN)(u, {
                        originalException: c,
                        mechanism: { handled: !1, type: "onerror" },
                      }));
                  }),
                    j(e, Ht));
                })();
              })(t),
              qt("onerror")),
              e.onunhandledrejection &&
                ((function (t) {
                  !(function () {
                    const e = "unhandledrejection";
                    (T(e, (e) => {
                      const { stackParser: n, attachStacktrace: r } = Gt();
                      if ((0, p.s3)() !== t || pt()) return;
                      const o = (function (t) {
                          if ((0, L.pt)(t)) return t;
                          try {
                            if ("reason" in t) return t.reason;
                            if ("detail" in t && "reason" in t.detail)
                              return t.detail.reason;
                          } catch (t) {}
                          return t;
                        })(e),
                        s = (0, L.pt)(o)
                          ? {
                              exception: {
                                values: [
                                  {
                                    type: "UnhandledRejection",
                                    value: `Non-Error promise rejection captured with value: ${String(o)}`,
                                  },
                                ],
                              },
                            }
                          : at(n, o, void 0, r, !0);
                      ((s.level = "error"),
                        (0, b.eN)(s, {
                          originalException: o,
                          mechanism: {
                            handled: !1,
                            type: "onunhandledrejection",
                          },
                        }));
                    }),
                      j(e, Jt));
                  })();
                })(t),
                qt("onunhandledrejection")));
          },
        };
      });
      function qt(t) {
        tt && r.kg.log(`Global Handler attached: ${t}`);
      }
      function Gt() {
        const t = (0, p.s3)();
        return (
          (t && t.getOptions()) || {
            stackParser: () => [],
            attachStacktrace: !1,
          }
        );
      }
      const Wt = (0, a._I)(() => ({
        name: "HttpContext",
        preprocessEvent(t) {
          if (!lt.navigator && !lt.location && !lt.document) return;
          const e =
              (t.request && t.request.url) || (lt.location && lt.location.href),
            { referrer: n } = lt.document || {},
            { userAgent: r } = lt.navigator || {},
            o = {
              ...(t.request && t.request.headers),
              ...(n && { Referer: n }),
              ...(r && { "User-Agent": r }),
            },
            s = { ...t.request, ...(e && { url: e }), headers: o };
          t.request = s;
        },
      }));
      function Vt(t, e, n = 250, r, o, i, a) {
        if (
          !(
            i.exception &&
            i.exception.values &&
            a &&
            (0, L.V9)(a.originalException, Error)
          )
        )
          return;
        const c =
          i.exception.values.length > 0
            ? i.exception.values[i.exception.values.length - 1]
            : void 0;
        var u, l;
        c &&
          (i.exception.values =
            ((u = Yt(
              t,
              e,
              o,
              a.originalException,
              r,
              i.exception.values,
              c,
              0,
            )),
            (l = n),
            u.map((t) => (t.value && (t.value = (0, s.$G)(t.value, l)), t))));
      }
      function Yt(t, e, n, r, o, s, i, a) {
        if (s.length >= n + 1) return s;
        let c = [...s];
        if ((0, L.V9)(r[o], Error)) {
          Kt(i, a);
          const s = t(e, r[o]),
            u = c.length;
          (zt(s, o, u, a), (c = Yt(t, e, n, r[o], o, [s, ...c], s, u)));
        }
        return (
          Array.isArray(r.errors) &&
            r.errors.forEach((r, s) => {
              if ((0, L.V9)(r, Error)) {
                Kt(i, a);
                const u = t(e, r),
                  l = c.length;
                (zt(u, `errors[${s}]`, l, a),
                  (c = Yt(t, e, n, r, o, [u, ...c], u, l)));
              }
            }),
          c
        );
      }
      function Kt(t, e) {
        ((t.mechanism = t.mechanism || { type: "generic", handled: !0 }),
          (t.mechanism = {
            ...t.mechanism,
            ...("AggregateError" === t.type && { is_exception_group: !0 }),
            exception_id: e,
          }));
      }
      function zt(t, e, n, r) {
        ((t.mechanism = t.mechanism || { type: "generic", handled: !0 }),
          (t.mechanism = {
            ...t.mechanism,
            type: "chained",
            source: e,
            exception_id: n,
            parent_id: r,
          }));
      }
      const Bt = (0, a._I)((t = {}) => {
        const e = t.limit || 5,
          n = t.key || "cause";
        return {
          name: "LinkedErrors",
          preprocessEvent(t, r, o) {
            const s = o.getOptions();
            Vt(nt, s.stackParser, s.maxValueLength, n, e, t, r);
          },
        };
      });
      var Qt = n(47002);
      const Zt = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
        te = {};
      function ee(t) {
        te[t] = void 0;
      }
      var ne = n(53704);
      function re(
        t,
        e = (function (t) {
          const e = te[t];
          if (e) return e;
          let n = P[t];
          if ($(n)) return (te[t] = n.bind(P));
          const o = P.document;
          if (o && "function" == typeof o.createElement)
            try {
              const e = o.createElement("iframe");
              ((e.hidden = !0), o.head.appendChild(e));
              const r = e.contentWindow;
              (r && r[t] && (n = r[t]), o.head.removeChild(e));
            } catch (e) {
              Zt &&
                r.kg.warn(
                  `Could not create sandbox iframe for ${t} check, bailing to window.${t}: `,
                  e,
                );
            }
          return n ? (te[t] = n.bind(P)) : n;
        })("fetch"),
      ) {
        let n = 0,
          o = 0;
        return (0, ne.q)(t, function (r) {
          const s = r.body.length;
          ((n += s), o++);
          const i = {
            body: r.body,
            method: "POST",
            referrerPolicy: "origin",
            headers: t.headers,
            keepalive: n <= 6e4 && o < 15,
            ...t.fetchOptions,
          };
          if (!e)
            return (
              ee("fetch"),
              (0, U.$2)("No fetch implementation available")
            );
          try {
            return e(t.url, i).then(
              (t) => (
                (n -= s),
                o--,
                {
                  statusCode: t.status,
                  headers: {
                    "x-sentry-rate-limits": t.headers.get(
                      "X-Sentry-Rate-Limits",
                    ),
                    "retry-after": t.headers.get("Retry-After"),
                  },
                }
              ),
            );
          } catch (t) {
            return (ee("fetch"), (n -= s), o--, (0, U.$2)(t));
          }
        });
      }
      function oe(t) {
        return [u(), m(), Nt(), Rt(), Ft(), Bt(), y(), Wt()];
      }
      function se(t = {}) {
        const e = (function (t = {}) {
          return {
            defaultIntegrations: oe(),
            release:
              "string" == typeof __SENTRY_RELEASE__
                ? __SENTRY_RELEASE__
                : lt.SENTRY_RELEASE && lt.SENTRY_RELEASE.id
                  ? lt.SENTRY_RELEASE.id
                  : void 0,
            autoSessionTracking: !0,
            sendClientReports: !0,
            ...t,
          };
        })(t);
        if (
          (function () {
            const t = lt,
              e = t[t.chrome ? "chrome" : "browser"],
              n = e && e.runtime && e.runtime.id,
              r = (lt.location && lt.location.href) || "",
              o =
                !!n &&
                lt === lt.top &&
                [
                  "chrome-extension:",
                  "moz-extension:",
                  "ms-browser-extension:",
                ].some((t) => r.startsWith(`${t}//`)),
              s = void 0 !== t.nw;
            return !!n && !o && !s;
          })()
        )
          return void (0, r.Cf)(() => {
            console.error(
              "[Sentry] You cannot run Sentry this way in a browser extension, check: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/",
            );
          });
        tt &&
          (w() ||
            r.kg.warn(
              "No Fetch API detected. The Sentry SDK requires a Fetch API compatible environment to send events. Please add a Fetch API polyfill.",
            ));
        const n = {
            ...e,
            stackParser: (0, g.Sq)(e.stackParser || Qt.Dt),
            integrations: (0, a.m8)(e),
            transport: e.transport || re,
          },
          o = (function (t, e) {
            (!0 === e.debug &&
              (i.X
                ? r.kg.enable()
                : (0, r.Cf)(() => {
                    console.warn(
                      "[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.",
                    );
                  })),
              (0, p.nZ)().update(e.initialScope));
            const n = new t(e);
            return (
              (function (t) {
                (0, p.nZ)().setClient(t);
              })(n),
              n.init(),
              n
            );
          })(mt, n);
        return (
          e.autoSessionTracking &&
            (void 0 !== lt.document
              ? ((0, b.yj)({ ignoreDuration: !0 }),
                (0, b.cg)(),
                C(({ from: t, to: e }) => {
                  void 0 !== t &&
                    t !== e &&
                    ((0, b.yj)({ ignoreDuration: !0 }), (0, b.cg)());
                }))
              : tt &&
                r.kg.warn(
                  "Session tracking in non-browser environment with @sentry/browser is not supported.",
                )),
          o
        );
      }
    },
    47002: (t, e, n) => {
      n.d(e, { $3: () => c, Dt: () => p });
      var r = n(96390);
      function o(t, e, n, o) {
        const s = {
          filename: t,
          function: "<anonymous>" === e ? r.Fi : e,
          in_app: !0,
        };
        return (
          void 0 !== n && (s.lineno = n),
          void 0 !== o && (s.colno = o),
          s
        );
      }
      const s = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
        i =
          /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
        a = /\((\S*)(?::(\d+))(?::(\d+))\)/,
        c = [
          30,
          (t) => {
            const e = s.exec(t);
            if (e) {
              const [, t, n, s] = e;
              return o(t, r.Fi, +n, +s);
            }
            const n = i.exec(t);
            if (n) {
              if (n[2] && 0 === n[2].indexOf("eval")) {
                const t = a.exec(n[2]);
                t && ((n[2] = t[1]), (n[3] = t[2]), (n[4] = t[3]));
              }
              const [t, e] = f(n[1] || r.Fi, n[2]);
              return o(e, t, n[3] ? +n[3] : void 0, n[4] ? +n[4] : void 0);
            }
          },
        ],
        u =
          /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
        l = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
        d = [
          c,
          [
            50,
            (t) => {
              const e = u.exec(t);
              if (e) {
                if (e[3] && e[3].indexOf(" > eval") > -1) {
                  const t = l.exec(e[3]);
                  t &&
                    ((e[1] = e[1] || "eval"),
                    (e[3] = t[1]),
                    (e[4] = t[2]),
                    (e[5] = ""));
                }
                let t = e[3],
                  n = e[1] || r.Fi;
                return (
                  ([n, t] = f(n, t)),
                  o(t, n, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
                );
              }
            },
          ],
        ],
        p = (0, r.pE)(...d),
        f = (t, e) => {
          const n = -1 !== t.indexOf("safari-extension"),
            o = -1 !== t.indexOf("safari-web-extension");
          return n || o
            ? [
                -1 !== t.indexOf("@") ? t.split("@")[0] : r.Fi,
                n ? `safari-extension:${e}` : `safari-web-extension:${e}`,
              ]
            : [t, e];
        };
    },
    4352: (t, e, n) => {
      n.d(e, {
        s3: () => d,
        nZ: () => a,
        lW: () => u,
        aF: () => c,
        $e: () => l,
      });
      var r = n(77751),
        o = n(21352),
        s = n(87930),
        i = n(97710);
      function a() {
        const t = (0, s.c)();
        return (0, o.G)(t).getCurrentScope();
      }
      function c() {
        const t = (0, s.c)();
        return (0, o.G)(t).getIsolationScope();
      }
      function u() {
        return (0, r.Y)("globalScope", () => new i.s());
      }
      function l(...t) {
        const e = (0, s.c)(),
          n = (0, o.G)(e);
        if (2 === t.length) {
          const [e, r] = t;
          return e ? n.withSetScope(e, r) : n.withScope(r);
        }
        return n.withScope(t[0]);
      }
      function d() {
        return a().getClient();
      }
    },
    74170: (t, e, n) => {
      n.d(e, { Mq: () => c, Q3: () => a, uE: () => u });
      var r = n(39947),
        o = n(95564),
        s = n(10945),
        i = n(71778);
      function a(t, e, n, s) {
        const i = (0, r.HY)(n),
          a = {
            sent_at: new Date().toISOString(),
            ...(i && { sdk: i }),
            ...(!!s && e && { dsn: (0, o.RA)(e) }),
          },
          c =
            "aggregates" in t
              ? [{ type: "sessions" }, t]
              : [{ type: "session" }, t.toJSON()];
        return (0, r.Jd)(a, [c]);
      }
      function c(t, e, n, o) {
        const s = (0, r.HY)(n),
          i = t.type && "replay_event" !== t.type ? t.type : "event";
        !(function (t, e) {
          e &&
            ((t.sdk = t.sdk || {}),
            (t.sdk.name = t.sdk.name || e.name),
            (t.sdk.version = t.sdk.version || e.version),
            (t.sdk.integrations = [
              ...(t.sdk.integrations || []),
              ...(e.integrations || []),
            ]),
            (t.sdk.packages = [
              ...(t.sdk.packages || []),
              ...(e.packages || []),
            ]));
        })(t, n && n.sdk);
        const a = (0, r.Cd)(t, s, o, e);
        delete t.sdkProcessingMetadata;
        const c = [{ type: i }, t];
        return (0, r.Jd)(a, [c]);
      }
      function u(t, e) {
        const n = (0, s.jC)(t[0]),
          a = e && e.getDsn(),
          c = e && e.getOptions().tunnel,
          u = {
            sent_at: new Date().toISOString(),
            ...((function (t) {
              return !!t.trace_id && !!t.public_key;
            })(n) && { trace: n }),
            ...(!!c && a && { dsn: (0, o.RA)(a) }),
          },
          l = e && e.getOptions().beforeSendSpan,
          d = l ? (t) => l((0, i.XU)(t)) : (t) => (0, i.XU)(t),
          p = [];
        for (const e of t) {
          const t = d(e);
          t && p.push((0, r.KQ)(t));
        }
        return (0, r.Jd)(u, p);
      }
    },
    47831: (t, e, n) => {
      n.d(e, {
        uf: () => u,
        _I: () => d,
        m8: () => a,
        m7: () => l,
        q4: () => c,
      });
      var r = n(74395),
        o = n(86683),
        s = n(77399);
      const i = [];
      function a(t) {
        const e = t.defaultIntegrations || [],
          n = t.integrations;
        let o;
        (e.forEach((t) => {
          t.isDefaultInstance = !0;
        }),
          (o = Array.isArray(n)
            ? [...e, ...n]
            : "function" == typeof n
              ? (0, r.lE)(n(e))
              : e));
        const s = (function (t) {
            const e = {};
            return (
              t.forEach((t) => {
                const { name: n } = t,
                  r = e[n];
                (r && !r.isDefaultInstance && t.isDefaultInstance) ||
                  (e[n] = t);
              }),
              Object.values(e)
            );
          })(o),
          i = s.findIndex((t) => "Debug" === t.name);
        if (i > -1) {
          const [t] = s.splice(i, 1);
          s.push(t);
        }
        return s;
      }
      function c(t, e) {
        const n = {};
        return (
          e.forEach((e) => {
            e && l(t, e, n);
          }),
          n
        );
      }
      function u(t, e) {
        for (const n of e) n && n.afterAllSetup && n.afterAllSetup(t);
      }
      function l(t, e, n) {
        if (n[e.name])
          s.X &&
            o.kg.log(
              `Integration skipped because it was already installed: ${e.name}`,
            );
        else {
          if (
            ((n[e.name] = e),
            -1 === i.indexOf(e.name) &&
              "function" == typeof e.setupOnce &&
              (e.setupOnce(), i.push(e.name)),
            e.setup && "function" == typeof e.setup && e.setup(t),
            "function" == typeof e.preprocessEvent)
          ) {
            const n = e.preprocessEvent.bind(e);
            t.on("preprocessEvent", (e, r) => n(e, r, t));
          }
          if ("function" == typeof e.processEvent) {
            const n = e.processEvent.bind(e),
              r = Object.assign((e, r) => n(e, r, t), { id: e.name });
            t.addEventProcessor(r);
          }
          s.X && o.kg.log(`Integration installed: ${e.name}`);
        }
      }
      function d(t) {
        return t;
      }
    },
    30310: (t, e, n) => {
      n.d(e, { RJ: () => c, Hv: () => i, CT: () => a });
      var r = n(43318),
        o = n(74395),
        s = n(69289);
      function i(t) {
        const e = (0, r.ph)(),
          n = {
            sid: (0, o.DM)(),
            init: !0,
            timestamp: e,
            started: e,
            duration: 0,
            status: "ok",
            errors: 0,
            ignoreDuration: !1,
            toJSON: () =>
              (function (t) {
                return (0, s.Jr)({
                  sid: `${t.sid}`,
                  init: t.init,
                  started: new Date(1e3 * t.started).toISOString(),
                  timestamp: new Date(1e3 * t.timestamp).toISOString(),
                  status: t.status,
                  errors: t.errors,
                  did:
                    "number" == typeof t.did || "string" == typeof t.did
                      ? `${t.did}`
                      : void 0,
                  duration: t.duration,
                  abnormal_mechanism: t.abnormal_mechanism,
                  attrs: {
                    release: t.release,
                    environment: t.environment,
                    ip_address: t.ipAddress,
                    user_agent: t.userAgent,
                  },
                });
              })(n),
          };
        return (t && a(n, t), n);
      }
      function a(t, e = {}) {
        if (
          (e.user &&
            (!t.ipAddress &&
              e.user.ip_address &&
              (t.ipAddress = e.user.ip_address),
            t.did ||
              e.did ||
              (t.did = e.user.id || e.user.email || e.user.username)),
          (t.timestamp = e.timestamp || (0, r.ph)()),
          e.abnormal_mechanism && (t.abnormal_mechanism = e.abnormal_mechanism),
          e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration),
          e.sid && (t.sid = 32 === e.sid.length ? e.sid : (0, o.DM)()),
          void 0 !== e.init && (t.init = e.init),
          !t.did && e.did && (t.did = `${e.did}`),
          "number" == typeof e.started && (t.started = e.started),
          t.ignoreDuration)
        )
          t.duration = void 0;
        else if ("number" == typeof e.duration) t.duration = e.duration;
        else {
          const e = t.timestamp - t.started;
          t.duration = e >= 0 ? e : 0;
        }
        (e.release && (t.release = e.release),
          e.environment && (t.environment = e.environment),
          !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress),
          !t.userAgent && e.userAgent && (t.userAgent = e.userAgent),
          "number" == typeof e.errors && (t.errors = e.errors),
          e.status && (t.status = e.status));
      }
      function c(t, e) {
        let n = {};
        (e
          ? (n = { status: e })
          : "ok" === t.status && (n = { status: "exited" }),
          a(t, n));
      }
    },
    10945: (t, e, n) => {
      n.d(e, { Lh: () => l, _l: () => d, jC: () => p });
      var r = n(69289),
        o = n(53119),
        s = n(73386),
        i = n(4352),
        a = n(55216),
        c = n(71778);
      const u = "_frozenDsc";
      function l(t, e) {
        const n = t;
        (0, r.xp)(n, u, e);
      }
      function d(t, e) {
        const n = e.getOptions(),
          { publicKey: o } = e.getDsn() || {},
          i = (0, r.Jr)({
            environment: n.environment || s.J,
            release: n.release,
            public_key: o,
            trace_id: t,
          });
        return (e.emit("createDsc", i), i);
      }
      function p(t) {
        const e = (0, i.s3)();
        if (!e) return {};
        const n = d((0, c.XU)(t).trace_id || "", e),
          r = (0, c.Gx)(t),
          s = r[u];
        if (s) return s;
        const l = r.spanContext().traceState,
          p = l && l.get("sentry.dsc"),
          f = p && (0, o.EN)(p);
        if (f) return f;
        const h = (0, c.XU)(r),
          m = h.data || {},
          g = m[a.TE];
        null != g && (n.sample_rate = `${g}`);
        const y = m[a.Zj],
          _ = h.description;
        return (
          "url" !== y && _ && (n.transaction = _),
          (n.sampled = String((0, c.Tt)(r))),
          e.emit("createDsc", n, r),
          n
        );
      }
    },
    53704: (t, e, n) => {
      n.d(e, { q: () => l });
      var r = n(86540),
        o = n(99273);
      const s = 6e4;
      var i = n(39947),
        a = n(86683),
        c = n(77399);
      const u = 64;
      function l(
        t,
        e,
        n = (function (t) {
          const e = [];
          function n(t) {
            return e.splice(e.indexOf(t), 1)[0] || Promise.resolve(void 0);
          }
          return {
            $: e,
            add: function (s) {
              if (!(void 0 === t || e.length < t))
                return (0, o.$2)(
                  new r.b(
                    "Not adding Promise because buffer limit was reached.",
                  ),
                );
              const i = s();
              return (
                -1 === e.indexOf(i) && e.push(i),
                i.then(() => n(i)).then(null, () => n(i).then(null, () => {})),
                i
              );
            },
            drain: function (t) {
              return new o.cW((n, r) => {
                let s = e.length;
                if (!s) return n(!0);
                const i = setTimeout(() => {
                  t && t > 0 && n(!1);
                }, t);
                e.forEach((t) => {
                  (0, o.WD)(t).then(() => {
                    --s || (clearTimeout(i), n(!0));
                  }, r);
                });
              });
            },
          };
        })(t.bufferSize || u),
      ) {
        let l = {};
        return {
          send: function (u) {
            const p = [];
            if (
              ((0, i.gv)(u, (e, n) => {
                const r = (0, i.mL)(n);
                if (
                  (function (t, e, n = Date.now()) {
                    return (
                      (function (t, e) {
                        return t[e] || t.all || 0;
                      })(t, e) > n
                    );
                  })(l, r)
                ) {
                  const o = d(e, n);
                  t.recordDroppedEvent("ratelimit_backoff", r, o);
                } else p.push(e);
              }),
              0 === p.length)
            )
              return (0, o.WD)({});
            const f = (0, i.Jd)(u[0], p),
              h = (e) => {
                (0, i.gv)(f, (n, r) => {
                  const o = d(n, r);
                  t.recordDroppedEvent(e, (0, i.mL)(r), o);
                });
              };
            return n
              .add(() =>
                e({ body: (0, i.V$)(f) }).then(
                  (t) => (
                    void 0 !== t.statusCode &&
                      (t.statusCode < 200 || t.statusCode >= 300) &&
                      c.X &&
                      a.kg.warn(
                        `Sentry responded with status code ${t.statusCode} to sent event.`,
                      ),
                    (l = (function (
                      t,
                      { statusCode: e, headers: n },
                      r = Date.now(),
                    ) {
                      const o = { ...t },
                        i = n && n["x-sentry-rate-limits"],
                        a = n && n["retry-after"];
                      if (i)
                        for (const t of i.trim().split(",")) {
                          const [e, n, , , s] = t.split(":", 5),
                            i = parseInt(e, 10),
                            a = 1e3 * (isNaN(i) ? 60 : i);
                          if (n)
                            for (const t of n.split(";"))
                              ("metric_bucket" === t &&
                                s &&
                                !s.split(";").includes("custom")) ||
                                (o[t] = r + a);
                          else o.all = r + a;
                        }
                      else
                        a
                          ? (o.all =
                              r +
                              (function (t, e = Date.now()) {
                                const n = parseInt(`${t}`, 10);
                                if (!isNaN(n)) return 1e3 * n;
                                const r = Date.parse(`${t}`);
                                return isNaN(r) ? s : r - e;
                              })(a, r))
                          : 429 === e && (o.all = r + 6e4);
                      return o;
                    })(l, t)),
                    t
                  ),
                  (t) => {
                    throw (h("network_error"), t);
                  },
                ),
              )
              .then(
                (t) => t,
                (t) => {
                  if (t instanceof r.b)
                    return (
                      c.X &&
                        a.kg.error(
                          "Skipped sending event because buffer is full.",
                        ),
                      h("queue_overflow"),
                      (0, o.WD)({})
                    );
                  throw t;
                },
              );
          },
          flush: (t) => n.drain(t),
        };
      }
      function d(t, e) {
        if ("event" === e || "transaction" === e)
          return Array.isArray(t) ? t[1] : void 0;
      }
    },
    73645: (t, e, n) => {
      n.d(e, { gi: () => a, yo: () => c });
      var r = n(69289),
        o = n(74395),
        s = n(10945),
        i = n(71778);
      function a(t, e) {
        const {
          fingerprint: n,
          span: a,
          breadcrumbs: c,
          sdkProcessingMetadata: u,
        } = e;
        (!(function (t, e) {
          const {
              extra: n,
              tags: o,
              user: s,
              contexts: i,
              level: a,
              transactionName: c,
            } = e,
            u = (0, r.Jr)(n);
          u && Object.keys(u).length && (t.extra = { ...u, ...t.extra });
          const l = (0, r.Jr)(o);
          l && Object.keys(l).length && (t.tags = { ...l, ...t.tags });
          const d = (0, r.Jr)(s);
          d && Object.keys(d).length && (t.user = { ...d, ...t.user });
          const p = (0, r.Jr)(i);
          (p && Object.keys(p).length && (t.contexts = { ...p, ...t.contexts }),
            a && (t.level = a),
            c && "transaction" !== t.type && (t.transaction = c));
        })(t, e),
          a &&
            (function (t, e) {
              ((t.contexts = { trace: (0, i.wy)(e), ...t.contexts }),
                (t.sdkProcessingMetadata = {
                  dynamicSamplingContext: (0, s.jC)(e),
                  ...t.sdkProcessingMetadata,
                }));
              const n = (0, i.Gx)(e),
                r = (0, i.XU)(n).description;
              r &&
                !t.transaction &&
                "transaction" === t.type &&
                (t.transaction = r);
            })(t, a),
          (function (t, e) {
            ((t.fingerprint = t.fingerprint ? (0, o.lE)(t.fingerprint) : []),
              e && (t.fingerprint = t.fingerprint.concat(e)),
              t.fingerprint && !t.fingerprint.length && delete t.fingerprint);
          })(t, n),
          (function (t, e) {
            const n = [...(t.breadcrumbs || []), ...e];
            t.breadcrumbs = n.length ? n : void 0;
          })(t, c),
          (function (t, e) {
            t.sdkProcessingMetadata = { ...t.sdkProcessingMetadata, ...e };
          })(t, u));
      }
      function c(t, e) {
        const {
          extra: n,
          tags: r,
          user: o,
          contexts: s,
          level: i,
          sdkProcessingMetadata: a,
          breadcrumbs: c,
          fingerprint: l,
          eventProcessors: d,
          attachments: p,
          propagationContext: f,
          transactionName: h,
          span: m,
        } = e;
        (u(t, "extra", n),
          u(t, "tags", r),
          u(t, "user", o),
          u(t, "contexts", s),
          u(t, "sdkProcessingMetadata", a),
          i && (t.level = i),
          h && (t.transactionName = h),
          m && (t.span = m),
          c.length && (t.breadcrumbs = [...t.breadcrumbs, ...c]),
          l.length && (t.fingerprint = [...t.fingerprint, ...l]),
          d.length && (t.eventProcessors = [...t.eventProcessors, ...d]),
          p.length && (t.attachments = [...t.attachments, ...p]),
          (t.propagationContext = { ...t.propagationContext, ...f }));
      }
      function u(t, e, n) {
        if (n && Object.keys(n).length) {
          t[e] = { ...t[e] };
          for (const r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[e][r] = n[r]);
        }
      }
    },
    68080: (t, e, n) => {
      n.d(e, { U0: () => v, R: () => y });
      var r = n(74395),
        o = n(43318),
        s = n(45964),
        i = n(77751),
        a = n(78624),
        c = n(73386),
        u = n(4352),
        l = n(99273),
        d = n(86683),
        p = n(3964),
        f = n(77399);
      function h(t, e, n, r = 0) {
        return new l.cW((o, s) => {
          const i = t[r];
          if (null === e || "function" != typeof i) o(e);
          else {
            const a = i({ ...e }, n);
            (f.X &&
              i.id &&
              null === a &&
              d.kg.log(`Event processor "${i.id}" dropped event`),
              (0, p.J8)(a)
                ? a.then((e) => h(t, e, n, r + 1).then(o)).then(null, s)
                : h(t, a, n, r + 1)
                    .then(o)
                    .then(null, s));
          }
        });
      }
      var m = n(97710),
        g = n(73645);
      function y(t, e, n, l, d, p) {
        const { normalizeDepth: f = 3, normalizeMaxBreadth: y = 1e3 } = t,
          v = {
            ...e,
            event_id: e.event_id || n.event_id || (0, r.DM)(),
            timestamp: e.timestamp || (0, o.yW)(),
          },
          E = n.integrations || t.integrations.map((t) => t.name);
        (!(function (t, e) {
          const {
            environment: n,
            release: r,
            dist: o,
            maxValueLength: i = 250,
          } = e;
          ("environment" in t || (t.environment = "environment" in e ? n : c.J),
            void 0 === t.release && void 0 !== r && (t.release = r),
            void 0 === t.dist && void 0 !== o && (t.dist = o),
            t.message && (t.message = (0, s.$G)(t.message, i)));
          const a = t.exception && t.exception.values && t.exception.values[0];
          a && a.value && (a.value = (0, s.$G)(a.value, i));
          const u = t.request;
          u && u.url && (u.url = (0, s.$G)(u.url, i));
        })(v, t),
          (function (t, e) {
            e.length > 0 &&
              ((t.sdk = t.sdk || {}),
              (t.sdk.integrations = [...(t.sdk.integrations || []), ...e]));
          })(v, E),
          d && d.emit("applyFrameMetadata", e),
          void 0 === e.type &&
            (function (t, e) {
              const n = i.n._sentryDebugIds;
              if (!n) return;
              let r;
              const o = _.get(e);
              o ? (r = o) : ((r = new Map()), _.set(e, r));
              const s = Object.entries(n).reduce((t, [n, o]) => {
                let s;
                const i = r.get(n);
                i ? (s = i) : ((s = e(n)), r.set(n, s));
                for (let e = s.length - 1; e >= 0; e--) {
                  const n = s[e];
                  if (n.filename) {
                    t[n.filename] = o;
                    break;
                  }
                }
                return t;
              }, {});
              try {
                t.exception.values.forEach((t) => {
                  t.stacktrace.frames.forEach((t) => {
                    t.filename && (t.debug_id = s[t.filename]);
                  });
                });
              } catch (t) {}
            })(v, t.stackParser));
        const b = (function (t, e) {
          if (!e) return t;
          const n = t ? t.clone() : new m.s();
          return (n.update(e), n);
        })(l, n.captureContext);
        n.mechanism && (0, r.EG)(v, n.mechanism);
        const k = d ? d.getEventProcessors() : [],
          S = (0, u.lW)().getScopeData();
        if (p) {
          const t = p.getScopeData();
          (0, g.yo)(S, t);
        }
        if (b) {
          const t = b.getScopeData();
          (0, g.yo)(S, t);
        }
        const x = [...(n.attachments || []), ...S.attachments];
        return (
          x.length && (n.attachments = x),
          (0, g.gi)(v, S),
          h([...k, ...S.eventProcessors], v, n).then(
            (t) => (
              t &&
                (function (t) {
                  const e = {};
                  try {
                    t.exception.values.forEach((t) => {
                      t.stacktrace.frames.forEach((t) => {
                        t.debug_id &&
                          (t.abs_path
                            ? (e[t.abs_path] = t.debug_id)
                            : t.filename && (e[t.filename] = t.debug_id),
                          delete t.debug_id);
                      });
                    });
                  } catch (t) {}
                  if (0 === Object.keys(e).length) return;
                  ((t.debug_meta = t.debug_meta || {}),
                    (t.debug_meta.images = t.debug_meta.images || []));
                  const n = t.debug_meta.images;
                  Object.entries(e).forEach(([t, e]) => {
                    n.push({ type: "sourcemap", code_file: t, debug_id: e });
                  });
                })(t),
              "number" == typeof f && f > 0
                ? (function (t, e, n) {
                    if (!t) return null;
                    const r = {
                      ...t,
                      ...(t.breadcrumbs && {
                        breadcrumbs: t.breadcrumbs.map((t) => ({
                          ...t,
                          ...(t.data && { data: (0, a.Fv)(t.data, e, n) }),
                        })),
                      }),
                      ...(t.user && { user: (0, a.Fv)(t.user, e, n) }),
                      ...(t.contexts && {
                        contexts: (0, a.Fv)(t.contexts, e, n),
                      }),
                      ...(t.extra && { extra: (0, a.Fv)(t.extra, e, n) }),
                    };
                    return (
                      t.contexts &&
                        t.contexts.trace &&
                        r.contexts &&
                        ((r.contexts.trace = t.contexts.trace),
                        t.contexts.trace.data &&
                          (r.contexts.trace.data = (0, a.Fv)(
                            t.contexts.trace.data,
                            e,
                            n,
                          ))),
                      t.spans &&
                        (r.spans = t.spans.map((t) => ({
                          ...t,
                          ...(t.data && { data: (0, a.Fv)(t.data, e, n) }),
                        }))),
                      r
                    );
                  })(t, f, y)
                : t
            ),
          )
        );
      }
      const _ = new WeakMap();
      function v(t) {
        if (t)
          return (function (t) {
            return t instanceof m.s || "function" == typeof t;
          })(t) ||
            (function (t) {
              return Object.keys(t).some((t) => E.includes(t));
            })(t)
            ? { captureContext: t }
            : t;
      }
      const E = [
        "user",
        "level",
        "extra",
        "contexts",
        "tags",
        "fingerprint",
        "requestSession",
        "propagationContext",
      ];
    },
    71778: (t, e, n) => {
      n.d(e, {
        ve: () => p,
        i0: () => f,
        j5: () => S,
        HN: () => $,
        Gx: () => w,
        Dp: () => x,
        _4: () => E,
        Tt: () => v,
        $k: () => g,
        XU: () => _,
        wy: () => m,
        HR: () => h,
      });
      var r = n(69289),
        o = n(43318),
        s = n(21352),
        i = n(87930),
        a = n(4352),
        c = n(99895),
        u = n(55216),
        l = n(92413),
        d = n(75958);
      const p = 0,
        f = 1;
      function h(t) {
        const { spanId: e, traceId: n } = t.spanContext(),
          { data: o, op: s, parent_span_id: i, status: a, origin: c } = _(t);
        return (0, r.Jr)({
          parent_span_id: i,
          span_id: e,
          trace_id: n,
          data: o,
          op: s,
          status: a,
          origin: c,
        });
      }
      function m(t) {
        const { spanId: e, traceId: n } = t.spanContext(),
          { parent_span_id: o } = _(t);
        return (0, r.Jr)({ parent_span_id: o, span_id: e, trace_id: n });
      }
      function g(t) {
        return "number" == typeof t
          ? y(t)
          : Array.isArray(t)
            ? t[0] + t[1] / 1e9
            : t instanceof Date
              ? y(t.getTime())
              : (0, o.ph)();
      }
      function y(t) {
        return t > 9999999999 ? t / 1e3 : t;
      }
      function _(t) {
        if (
          (function (t) {
            return "function" == typeof t.getSpanJSON;
          })(t)
        )
          return t.getSpanJSON();
        try {
          const { spanId: e, traceId: n } = t.spanContext();
          if (
            (function (t) {
              const e = t;
              return !!(
                e.attributes &&
                e.startTime &&
                e.name &&
                e.endTime &&
                e.status
              );
            })(t)
          ) {
            const {
              attributes: o,
              startTime: s,
              name: i,
              endTime: a,
              parentSpanId: l,
              status: d,
            } = t;
            return (0, r.Jr)({
              span_id: e,
              trace_id: n,
              data: o,
              description: i,
              parent_span_id: l,
              start_timestamp: g(s),
              timestamp: g(a) || void 0,
              status: E(d),
              op: o[u.$J],
              origin: o[u.S3],
              _metrics_summary: (0, c.y)(t),
            });
          }
          return { span_id: e, trace_id: n };
        } catch (t) {
          return {};
        }
      }
      function v(t) {
        const { traceFlags: e } = t.spanContext();
        return e === f;
      }
      function E(t) {
        if (t && t.code !== l.pq)
          return t.code === l.OP ? "ok" : t.message || "unknown_error";
      }
      const b = "_sentryChildSpans",
        k = "_sentryRootSpan";
      function S(t, e) {
        const n = t[k] || t;
        ((0, r.xp)(e, k, n),
          t[b] ? t[b].add(e) : (0, r.xp)(t, b, new Set([e])));
      }
      function x(t) {
        const e = new Set();
        return (
          (function t(n) {
            if (!e.has(n) && v(n)) {
              e.add(n);
              const r = n[b] ? Array.from(n[b]) : [];
              for (const e of r) t(e);
            }
          })(t),
          Array.from(e)
        );
      }
      function w(t) {
        return t[k] || t;
      }
      function $() {
        const t = (0, i.c)(),
          e = (0, s.G)(t);
        return e.getActiveSpan ? e.getActiveSpan() : (0, d.Y)((0, a.nZ)());
      }
    },
    76191: (t, e, n) => {
      n.d(e, { L: () => a });
      var r = n(47831),
        o = n(78624),
        s = n(43514),
        i = n(89265);
      const a = (0, r._I)(() => ({
        name: "ScopeToMain",
        setup() {
          const t = (0, i.o)();
          (0, s.F)((e, n) => {
            (t.sendScope(JSON.stringify((0, o.Fv)(e, 20, 2e3))),
              n.clearBreadcrumbs(),
              n.clearAttachments());
          });
        },
      }));
    },
    70686: (t, e, n) => {
      n.d(e, { S: () => u });
      var r = n(86753),
        o = n(86683),
        s = n(89265),
        i = n(76191),
        a = n(60203),
        c = n(16331);
      function u(t = {}, e = r.S1) {
        window?.__SENTRY__RENDERER_INIT__
          ? o.kg.warn(
              "The browser SDK has already been initialized.\nIf init has been called in the preload and contextIsolation is disabled, is not required to call init in the renderer",
            )
          : ((window.__SENTRY__RENDERER_INIT__ = !0),
            void 0 === t.autoSessionTracking && (t.autoSessionTracking = !1),
            (t.sendClientReports = !1),
            void 0 === t.defaultIntegrations &&
              (t.defaultIntegrations = (function (t) {
                return [...(0, r.nV)(t), (0, i.L)()];
              })(t)),
            void 0 === t.stackParser && (t.stackParser = a.M),
            void 0 === t.dsn && (t.dsn = "https://12345@dummy.dsn/12345"),
            void 0 === t.transport && (t.transport = c.O),
            t.anrDetection &&
              (function (t) {
                const e = {
                    pollInterval: 1e3,
                    anrThreshold: 5e3,
                    captureStackTrace: !1,
                    ...t,
                  },
                  n = (0, s.o)();
                (document.addEventListener("visibilitychange", () => {
                  n.sendStatus({ status: document.visibilityState, config: e });
                }),
                  n.sendStatus({ status: document.visibilityState, config: e }),
                  setInterval(() => {
                    n.sendStatus({ status: "alive", config: e });
                  }, e.pollInterval));
              })(!0 === t.anrDetection ? {} : t.anrDetection),
            delete t.initialScope,
            e(t));
      }
    },
    60203: (t, e, n) => {
      n.d(e, { M: () => u });
      var r = n(47002),
        o = n(86986),
        s = n(69289),
        i = n(96390);
      const [, a] = r.$3,
        [, c] = (0, o.Ep)(),
        u = (t, e = 0) => {
          const n = [];
          for (const r of t.split("\n").slice(e)) {
            const t = a(r),
              e = c(r);
            if (
              (t && !1 !== e?.in_app ? n.push(t) : e && n.push((0, s.Jr)(e)),
              n.length >= 50)
            )
              break;
          }
          return (0, i.UV)(n);
        };
    },
    16331: (t, e, n) => {
      n.d(e, { O: () => s });
      var r = n(53704),
        o = n(89265);
      function s(t) {
        const e = (0, o.o)();
        return (0, r.q)(
          t,
          async (t) => (e.sendEnvelope(t.body), { statusCode: 200 }),
        );
      }
    },
    37141: (t, e, n) => {
      n.d(e, { iY: () => u, l4: () => c, Rt: () => i });
      var r = n(3964);
      const o = n(77751).n,
        s = 80;
      function i(t, e = {}) {
        if (!t) return "<unknown>";
        try {
          let n = t;
          const r = 5,
            o = [];
          let i = 0,
            c = 0;
          const u = " > ",
            l = u.length;
          let d;
          const p = Array.isArray(e) ? e : e.keyAttrs,
            f = (!Array.isArray(e) && e.maxStringLength) || s;
          for (
            ;
            n &&
            i++ < r &&
            ((d = a(n, p)),
            !("html" === d || (i > 1 && c + o.length * l + d.length >= f)));

          )
            (o.push(d), (c += d.length), (n = n.parentNode));
          return o.reverse().join(u);
        } catch (t) {
          return "<unknown>";
        }
      }
      function a(t, e) {
        const n = t,
          s = [];
        if (!n || !n.tagName) return "";
        if (o.HTMLElement && n instanceof HTMLElement && n.dataset) {
          if (n.dataset.sentryComponent) return n.dataset.sentryComponent;
          if (n.dataset.sentryElement) return n.dataset.sentryElement;
        }
        s.push(n.tagName.toLowerCase());
        const i =
          e && e.length
            ? e
                .filter((t) => n.getAttribute(t))
                .map((t) => [t, n.getAttribute(t)])
            : null;
        if (i && i.length)
          i.forEach((t) => {
            s.push(`[${t[0]}="${t[1]}"]`);
          });
        else {
          n.id && s.push(`#${n.id}`);
          const t = n.className;
          if (t && (0, r.HD)(t)) {
            const e = t.split(/\s+/);
            for (const t of e) s.push(`.${t}`);
          }
        }
        const a = ["aria-label", "type", "name", "title", "alt"];
        for (const t of a) {
          const e = n.getAttribute(t);
          e && s.push(`[${t}="${e}"]`);
        }
        return s.join("");
      }
      function c() {
        try {
          return o.document.location.href;
        } catch (t) {
          return "";
        }
      }
      function u(t) {
        if (!o.HTMLElement) return null;
        let e = t;
        for (let t = 0; t < 5; t++) {
          if (!e) return null;
          if (e instanceof HTMLElement) {
            if (e.dataset.sentryComponent) return e.dataset.sentryComponent;
            if (e.dataset.sentryElement) return e.dataset.sentryElement;
          }
          e = e.parentNode;
        }
        return null;
      }
    },
    95564: (t, e, n) => {
      n.d(e, { RA: () => i, vK: () => c });
      var r = n(91188),
        o = n(86683);
      const s =
        /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
      function i(t, e = !1) {
        const {
          host: n,
          path: r,
          pass: o,
          port: s,
          projectId: i,
          protocol: a,
          publicKey: c,
        } = t;
        return `${a}://${c}${e && o ? `:${o}` : ""}@${n}${s ? `:${s}` : ""}/${r ? `${r}/` : r}${i}`;
      }
      function a(t) {
        return {
          protocol: t.protocol,
          publicKey: t.publicKey || "",
          pass: t.pass || "",
          host: t.host,
          port: t.port || "",
          path: t.path || "",
          projectId: t.projectId,
        };
      }
      function c(t) {
        const e =
          "string" == typeof t
            ? (function (t) {
                const e = s.exec(t);
                if (!e)
                  return void (0, o.Cf)(() => {
                    console.error(`Invalid Sentry Dsn: ${t}`);
                  });
                const [n, r, i = "", c = "", u = "", l = ""] = e.slice(1);
                let d = "",
                  p = l;
                const f = p.split("/");
                if (
                  (f.length > 1 &&
                    ((d = f.slice(0, -1).join("/")), (p = f.pop())),
                  p)
                ) {
                  const t = p.match(/^\d+/);
                  t && (p = t[0]);
                }
                return a({
                  host: c,
                  pass: i,
                  path: d,
                  projectId: p,
                  port: u,
                  protocol: n,
                  publicKey: r,
                });
              })(t)
            : a(t);
        if (
          e &&
          (function (t) {
            if (!r.X) return !0;
            const { port: e, projectId: n, protocol: s } = t;
            return !(
              ["protocol", "publicKey", "host", "projectId"].find(
                (e) =>
                  !t[e] && (o.kg.error(`Invalid Sentry Dsn: ${e} missing`), !0),
              ) ||
              (n.match(/^\d+$/)
                ? (function (t) {
                    return "http" === t || "https" === t;
                  })(s)
                  ? e &&
                    isNaN(parseInt(e, 10)) &&
                    (o.kg.error(`Invalid Sentry Dsn: Invalid port ${e}`), 1)
                  : (o.kg.error(`Invalid Sentry Dsn: Invalid protocol ${s}`), 1)
                : (o.kg.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), 1))
            );
          })(e)
        )
          return e;
      }
    },
    39947: (t, e, n) => {
      n.d(e, {
        BO: () => c,
        zQ: () => f,
        Jd: () => a,
        Cd: () => y,
        KQ: () => p,
        mL: () => m,
        gv: () => u,
        HY: () => g,
        V$: () => d,
      });
      var r = n(95564),
        o = n(78624),
        s = n(69289),
        i = n(77751);
      function a(t, e = []) {
        return [t, e];
      }
      function c(t, e) {
        const [n, r] = t;
        return [n, [...r, e]];
      }
      function u(t, e) {
        const n = t[1];
        for (const t of n) if (e(t, t[0].type)) return !0;
        return !1;
      }
      function l(t) {
        return i.n.__SENTRY__ && i.n.__SENTRY__.encodePolyfill
          ? i.n.__SENTRY__.encodePolyfill(t)
          : new TextEncoder().encode(t);
      }
      function d(t) {
        const [e, n] = t;
        let r = JSON.stringify(e);
        function s(t) {
          "string" == typeof r
            ? (r = "string" == typeof t ? r + t : [l(r), t])
            : r.push("string" == typeof t ? l(t) : t);
        }
        for (const t of n) {
          const [e, n] = t;
          if (
            (s(`\n${JSON.stringify(e)}\n`),
            "string" == typeof n || n instanceof Uint8Array)
          )
            s(n);
          else {
            let t;
            try {
              t = JSON.stringify(n);
            } catch (e) {
              t = JSON.stringify((0, o.Fv)(n));
            }
            s(t);
          }
        }
        return "string" == typeof r
          ? r
          : (function (t) {
              const e = t.reduce((t, e) => t + e.length, 0),
                n = new Uint8Array(e);
              let r = 0;
              for (const e of t) (n.set(e, r), (r += e.length));
              return n;
            })(r);
      }
      function p(t) {
        return [{ type: "span" }, t];
      }
      function f(t) {
        const e = "string" == typeof t.data ? l(t.data) : t.data;
        return [
          (0, s.Jr)({
            type: "attachment",
            length: e.length,
            filename: t.filename,
            content_type: t.contentType,
            attachment_type: t.attachmentType,
          }),
          e,
        ];
      }
      const h = {
        session: "session",
        sessions: "session",
        attachment: "attachment",
        transaction: "transaction",
        event: "error",
        client_report: "internal",
        user_report: "default",
        profile: "profile",
        profile_chunk: "profile",
        replay_event: "replay",
        replay_recording: "replay",
        check_in: "monitor",
        feedback: "feedback",
        span: "span",
        statsd: "metric_bucket",
      };
      function m(t) {
        return h[t];
      }
      function g(t) {
        if (!t || !t.sdk) return;
        const { name: e, version: n } = t.sdk;
        return { name: e, version: n };
      }
      function y(t, e, n, o) {
        const i =
          t.sdkProcessingMetadata &&
          t.sdkProcessingMetadata.dynamicSamplingContext;
        return {
          event_id: t.event_id,
          sent_at: new Date().toISOString(),
          ...(e && { sdk: e }),
          ...(!!n && o && { dsn: (0, r.RA)(o) }),
          ...(i && { trace: (0, s.Jr)({ ...i }) }),
        };
      }
    },
    86540: (t, e, n) => {
      n.d(e, { b: () => r });
      class r extends Error {
        constructor(t, e = "warn") {
          (super(t),
            (this.message = t),
            (this.name = new.target.prototype.constructor.name),
            Object.setPrototypeOf(this, new.target.prototype),
            (this.logLevel = e));
        }
      }
    },
    3964: (t, e, n) => {
      n.d(e, {
        TX: () => a,
        fm: () => c,
        kK: () => h,
        VZ: () => o,
        VW: () => i,
        cO: () => f,
        V9: () => _,
        Le: () => l,
        PO: () => p,
        pt: () => d,
        Kj: () => m,
        HD: () => u,
        Cy: () => y,
        J8: () => g,
        y1: () => v,
      });
      const r = Object.prototype.toString;
      function o(t) {
        switch (r.call(t)) {
          case "[object Error]":
          case "[object Exception]":
          case "[object DOMException]":
            return !0;
          default:
            return _(t, Error);
        }
      }
      function s(t, e) {
        return r.call(t) === `[object ${e}]`;
      }
      function i(t) {
        return s(t, "ErrorEvent");
      }
      function a(t) {
        return s(t, "DOMError");
      }
      function c(t) {
        return s(t, "DOMException");
      }
      function u(t) {
        return s(t, "String");
      }
      function l(t) {
        return (
          "object" == typeof t &&
          null !== t &&
          "__sentry_template_string__" in t &&
          "__sentry_template_values__" in t
        );
      }
      function d(t) {
        return (
          null === t || l(t) || ("object" != typeof t && "function" != typeof t)
        );
      }
      function p(t) {
        return s(t, "Object");
      }
      function f(t) {
        return "undefined" != typeof Event && _(t, Event);
      }
      function h(t) {
        return "undefined" != typeof Element && _(t, Element);
      }
      function m(t) {
        return s(t, "RegExp");
      }
      function g(t) {
        return Boolean(t && t.then && "function" == typeof t.then);
      }
      function y(t) {
        return (
          p(t) &&
          "nativeEvent" in t &&
          "preventDefault" in t &&
          "stopPropagation" in t
        );
      }
      function _(t, e) {
        try {
          return t instanceof e;
        } catch (t) {
          return !1;
        }
      }
      function v(t) {
        return !(
          "object" != typeof t ||
          null === t ||
          (!t.__isVue && !t._isVue)
        );
      }
    },
    86683: (t, e, n) => {
      n.d(e, { RU: () => s, Cf: () => a, kg: () => c, LD: () => i });
      var r = n(91188),
        o = n(77751);
      const s = ["debug", "info", "warn", "error", "log", "assert", "trace"],
        i = {};
      function a(t) {
        if (!("console" in o.n)) return t();
        const e = o.n.console,
          n = {},
          r = Object.keys(i);
        r.forEach((t) => {
          const r = i[t];
          ((n[t] = e[t]), (e[t] = r));
        });
        try {
          return t();
        } finally {
          r.forEach((t) => {
            e[t] = n[t];
          });
        }
      }
      const c = (function () {
        let t = !1;
        const e = {
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
            ? s.forEach((n) => {
                e[n] = (...e) => {
                  t &&
                    a(() => {
                      o.n.console[n](`Sentry Logger [${n}]:`, ...e);
                    });
                };
              })
            : s.forEach((t) => {
                e[t] = () => {};
              }),
          e
        );
      })();
    },
    74395: (t, e, n) => {
      n.d(e, {
        EG: () => u,
        Db: () => c,
        lE: () => d,
        YO: () => l,
        jH: () => a,
        DM: () => s,
      });
      var r = n(69289),
        o = n(77751);
      function s() {
        const t = o.n,
          e = t.crypto || t.msCrypto;
        let n = () => 16 * Math.random();
        try {
          if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
          e &&
            e.getRandomValues &&
            (n = () => {
              const t = new Uint8Array(1);
              return (e.getRandomValues(t), t[0]);
            });
        } catch (t) {}
        return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (t) =>
          (t ^ ((15 & n()) >> (t / 4))).toString(16),
        );
      }
      function i(t) {
        return t.exception && t.exception.values
          ? t.exception.values[0]
          : void 0;
      }
      function a(t) {
        const { message: e, event_id: n } = t;
        if (e) return e;
        const r = i(t);
        return r
          ? r.type && r.value
            ? `${r.type}: ${r.value}`
            : r.type || r.value || n || "<unknown>"
          : n || "<unknown>";
      }
      function c(t, e, n) {
        const r = (t.exception = t.exception || {}),
          o = (r.values = r.values || []),
          s = (o[0] = o[0] || {});
        (s.value || (s.value = e || ""), s.type || (s.type = n || "Error"));
      }
      function u(t, e) {
        const n = i(t);
        if (!n) return;
        const r = n.mechanism;
        if (
          ((n.mechanism = { type: "generic", handled: !0, ...r, ...e }),
          e && "data" in e)
        ) {
          const t = { ...(r && r.data), ...e.data };
          n.mechanism.data = t;
        }
      }
      function l(t) {
        if (t && t.__sentry_captured__) return !0;
        try {
          (0, r.xp)(t, "__sentry_captured__", !0);
        } catch (t) {}
        return !1;
      }
      function d(t) {
        return Array.isArray(t) ? t : [t];
      }
    },
    78624: (t, e, n) => {
      n.d(e, { Fv: () => a, Qy: () => c });
      var r = n(3964),
        o = n(48185),
        s = n(69289),
        i = n(96390);
      function a(t, e = 100, n = 1 / 0) {
        try {
          return u("", t, e, n);
        } catch (t) {
          return { ERROR: `**non-serializable** (${t})` };
        }
      }
      function c(t, e = 3, n = 102400) {
        const r = a(t, e);
        return (
          (o = r),
          (function (t) {
            return ~-encodeURI(t).split(/%..|./).length;
          })(JSON.stringify(o)) > n
            ? c(t, e - 1, n)
            : r
        );
        var o;
      }
      function u(t, e, n = 1 / 0, a = 1 / 0, c = (0, o.i)()) {
        const [l, d] = c;
        if (
          null == e ||
          (["number", "boolean", "string"].includes(typeof e) &&
            !Number.isNaN(e))
        )
          return e;
        const p = (function (t, e) {
          try {
            if ("domain" === t && e && "object" == typeof e && e._events)
              return "[Domain]";
            if ("domainEmitter" === t) return "[DomainEmitter]";
            if ("undefined" != typeof global && e === global) return "[Global]";
            if ("undefined" != typeof window && e === window) return "[Window]";
            if ("undefined" != typeof document && e === document)
              return "[Document]";
            if ((0, r.y1)(e)) return "[VueViewModel]";
            if ((0, r.Cy)(e)) return "[SyntheticEvent]";
            if ("number" == typeof e && e != e) return "[NaN]";
            if ("function" == typeof e) return `[Function: ${(0, i.$P)(e)}]`;
            if ("symbol" == typeof e) return `[${String(e)}]`;
            if ("bigint" == typeof e) return `[BigInt: ${String(e)}]`;
            const n = (function (t) {
              const e = Object.getPrototypeOf(t);
              return e ? e.constructor.name : "null prototype";
            })(e);
            return /^HTML(\w*)Element$/.test(n)
              ? `[HTMLElement: ${n}]`
              : `[object ${n}]`;
          } catch (t) {
            return `**non-serializable** (${t})`;
          }
        })(t, e);
        if (!p.startsWith("[object ")) return p;
        if (e.__sentry_skip_normalization__) return e;
        const f =
          "number" == typeof e.__sentry_override_normalization_depth__
            ? e.__sentry_override_normalization_depth__
            : n;
        if (0 === f) return p.replace("object ", "");
        if (l(e)) return "[Circular ~]";
        const h = e;
        if (h && "function" == typeof h.toJSON)
          try {
            return u("", h.toJSON(), f - 1, a, c);
          } catch (t) {}
        const m = Array.isArray(e) ? [] : {};
        let g = 0;
        const y = (0, s.Sh)(e);
        for (const t in y) {
          if (!Object.prototype.hasOwnProperty.call(y, t)) continue;
          if (g >= a) {
            m[t] = "[MaxProperties ~]";
            break;
          }
          const e = y[t];
          ((m[t] = u(t, e, f - 1, a, c)), g++);
        }
        return (d(e), m);
      }
    },
    69289: (t, e, n) => {
      n.d(e, {
        xp: () => u,
        Sh: () => f,
        Jr: () => y,
        zf: () => g,
        hl: () => c,
        HK: () => d,
        $Q: () => l,
        _j: () => p,
      });
      var r = n(37141),
        o = n(91188),
        s = n(3964),
        i = n(86683),
        a = n(45964);
      function c(t, e, n) {
        if (!(e in t)) return;
        const r = t[e],
          o = n(r);
        ("function" == typeof o && l(o, r), (t[e] = o));
      }
      function u(t, e, n) {
        try {
          Object.defineProperty(t, e, {
            value: n,
            writable: !0,
            configurable: !0,
          });
        } catch (n) {
          o.X &&
            i.kg.log(
              `Failed to add non-enumerable property "${e}" to object`,
              t,
            );
        }
      }
      function l(t, e) {
        try {
          const n = e.prototype || {};
          ((t.prototype = e.prototype = n), u(t, "__sentry_original__", e));
        } catch (t) {}
      }
      function d(t) {
        return t.__sentry_original__;
      }
      function p(t) {
        return Object.keys(t)
          .map((e) => `${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`)
          .join("&");
      }
      function f(t) {
        if ((0, s.VZ)(t))
          return { message: t.message, name: t.name, stack: t.stack, ...m(t) };
        if ((0, s.cO)(t)) {
          const e = {
            type: t.type,
            target: h(t.target),
            currentTarget: h(t.currentTarget),
            ...m(t),
          };
          return (
            "undefined" != typeof CustomEvent &&
              (0, s.V9)(t, CustomEvent) &&
              (e.detail = t.detail),
            e
          );
        }
        return t;
      }
      function h(t) {
        try {
          return (0, s.kK)(t)
            ? (0, r.Rt)(t)
            : Object.prototype.toString.call(t);
        } catch (t) {
          return "<unknown>";
        }
      }
      function m(t) {
        if ("object" == typeof t && null !== t) {
          const e = {};
          for (const n in t)
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return e;
        }
        return {};
      }
      function g(t, e = 40) {
        const n = Object.keys(f(t));
        n.sort();
        const r = n[0];
        if (!r) return "[object has no keys]";
        if (r.length >= e) return (0, a.$G)(r, e);
        for (let t = n.length; t > 0; t--) {
          const r = n.slice(0, t).join(", ");
          if (!(r.length > e)) return t === n.length ? r : (0, a.$G)(r, e);
        }
        return "";
      }
      function y(t) {
        return _(t, new Map());
      }
      function _(t, e) {
        if (
          (function (t) {
            if (!(0, s.PO)(t)) return !1;
            try {
              const e = Object.getPrototypeOf(t).constructor.name;
              return !e || "Object" === e;
            } catch (t) {
              return !0;
            }
          })(t)
        ) {
          const n = e.get(t);
          if (void 0 !== n) return n;
          const r = {};
          e.set(t, r);
          for (const n of Object.keys(t))
            void 0 !== t[n] && (r[n] = _(t[n], e));
          return r;
        }
        if (Array.isArray(t)) {
          const n = e.get(t);
          if (void 0 !== n) return n;
          const r = [];
          return (
            e.set(t, r),
            t.forEach((t) => {
              r.push(_(t, e));
            }),
            r
          );
        }
        return t;
      }
    },
    96390: (t, e, n) => {
      n.d(e, {
        Fi: () => o,
        pE: () => a,
        Fr: () => f,
        $P: () => p,
        Sq: () => c,
        UV: () => u,
      });
      const r = 50,
        o = "?",
        s = /\(error: (.*)\)/,
        i = /captureMessage|captureException/;
      function a(...t) {
        const e = t.sort((t, e) => t[0] - e[0]).map((t) => t[1]);
        return (t, n = 0, o = 0) => {
          const i = [],
            a = t.split("\n");
          for (let t = n; t < a.length; t++) {
            const n = a[t];
            if (n.length > 1024) continue;
            const c = s.test(n) ? n.replace(s, "$1") : n;
            if (!c.match(/\S*Error: /)) {
              for (const t of e) {
                const e = t(c);
                if (e) {
                  i.push(e);
                  break;
                }
              }
              if (i.length >= r + o) break;
            }
          }
          return u(i.slice(o));
        };
      }
      function c(t) {
        return Array.isArray(t) ? a(...t) : t;
      }
      function u(t) {
        if (!t.length) return [];
        const e = Array.from(t);
        return (
          /sentryWrapped/.test(l(e).function || "") && e.pop(),
          e.reverse(),
          i.test(l(e).function || "") &&
            (e.pop(), i.test(l(e).function || "") && e.pop()),
          e
            .slice(0, r)
            .map((t) => ({
              ...t,
              filename: t.filename || l(e).filename,
              function: t.function || o,
            }))
        );
      }
      function l(t) {
        return t[t.length - 1] || {};
      }
      const d = "<anonymous>";
      function p(t) {
        try {
          return (t && "function" == typeof t && t.name) || d;
        } catch (t) {
          return d;
        }
      }
      function f(t) {
        const e = t.exception;
        if (e) {
          const t = [];
          try {
            return (
              e.values.forEach((e) => {
                e.stacktrace.frames && t.push(...e.stacktrace.frames);
              }),
              t
            );
          } catch (t) {
            return;
          }
        }
      }
    },
    45964: (t, e, n) => {
      n.d(e, { nK: () => s, U0: () => i, $G: () => o });
      var r = n(3964);
      function o(t, e = 0) {
        return "string" != typeof t || 0 === e || t.length <= e
          ? t
          : `${t.slice(0, e)}...`;
      }
      function s(t, e) {
        if (!Array.isArray(t)) return "";
        const n = [];
        for (let e = 0; e < t.length; e++) {
          const o = t[e];
          try {
            (0, r.y1)(o) ? n.push("[VueViewModel]") : n.push(String(o));
          } catch (t) {
            n.push("[value cannot be serialized]");
          }
        }
        return n.join(e);
      }
      function i(t, e = [], n = !1) {
        return e.some((e) =>
          (function (t, e, n = !1) {
            return (
              !!(0, r.HD)(t) &&
              ((0, r.Kj)(e)
                ? e.test(t)
                : !!(0, r.HD)(e) && (n ? t === e : t.includes(e)))
            );
          })(t, e, n),
        );
      }
    },
    99273: (t, e, n) => {
      n.d(e, { cW: () => a, $2: () => i, WD: () => s });
      var r,
        o = n(3964);
      function s(t) {
        return new a((e) => {
          e(t);
        });
      }
      function i(t) {
        return new a((e, n) => {
          n(t);
        });
      }
      !(function (t) {
        ((t[(t.PENDING = 0)] = "PENDING"),
          (t[(t.RESOLVED = 1)] = "RESOLVED"),
          (t[(t.REJECTED = 2)] = "REJECTED"));
      })(r || (r = {}));
      class a {
        constructor(t) {
          (a.prototype.__init.call(this),
            a.prototype.__init2.call(this),
            a.prototype.__init3.call(this),
            a.prototype.__init4.call(this),
            (this._state = r.PENDING),
            (this._handlers = []));
          try {
            t(this._resolve, this._reject);
          } catch (t) {
            this._reject(t);
          }
        }
        then(t, e) {
          return new a((n, r) => {
            (this._handlers.push([
              !1,
              (e) => {
                if (t)
                  try {
                    n(t(e));
                  } catch (t) {
                    r(t);
                  }
                else n(e);
              },
              (t) => {
                if (e)
                  try {
                    n(e(t));
                  } catch (t) {
                    r(t);
                  }
                else r(t);
              },
            ]),
              this._executeHandlers());
          });
        }
        catch(t) {
          return this.then((t) => t, t);
        }
        finally(t) {
          return new a((e, n) => {
            let r, o;
            return this.then(
              (e) => {
                ((o = !1), (r = e), t && t());
              },
              (e) => {
                ((o = !0), (r = e), t && t());
              },
            ).then(() => {
              o ? n(r) : e(r);
            });
          });
        }
        __init() {
          this._resolve = (t) => {
            this._setResult(r.RESOLVED, t);
          };
        }
        __init2() {
          this._reject = (t) => {
            this._setResult(r.REJECTED, t);
          };
        }
        __init3() {
          this._setResult = (t, e) => {
            this._state === r.PENDING &&
              ((0, o.J8)(e)
                ? e.then(this._resolve, this._reject)
                : ((this._state = t),
                  (this._value = e),
                  this._executeHandlers()));
          };
        }
        __init4() {
          this._executeHandlers = () => {
            if (this._state === r.PENDING) return;
            const t = this._handlers.slice();
            ((this._handlers = []),
              t.forEach((t) => {
                t[0] ||
                  (this._state === r.RESOLVED && t[1](this._value),
                  this._state === r.REJECTED && t[2](this._value),
                  (t[0] = !0));
              }));
          };
        }
      }
    },
  },
]);
