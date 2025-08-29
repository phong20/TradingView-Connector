"use strict";
(global.webpackChunktradingview_desktop =
  global.webpackChunktradingview_desktop || []).push([
  [819],
  {
    64235: (e, t, n) => {
      n.d(t, { Z: () => E });
      var o = n(43392),
        r = n.n(o),
        s = n(8021),
        i = n.n(s),
        c = n(65632),
        a = n(84915),
        u = n(78375),
        l = n.n(u),
        d = new URL(n(98428), n.b),
        h = new URL(n(29e3), n.b),
        p = new URL(n(94160), n.b),
        b = i()(r());
      (b.i(c.Z), b.i(a.Z));
      var m = l()(d),
        f = l()(h),
        g = l()(p);
      b.push([
        e.id,
        "@font-face {\n\tfont-family: Monaco;\n\tsrc: url(" +
          m +
          ");\n\tfont-weight: 400;\n}\n\n@font-face {\n\tfont-family: Euclid Circular B;\n\tsrc: url(" +
          f +
          ");\n\tfont-weight: 400;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: Euclid Circular B;\n\tsrc: url(" +
          g +
          ');\n\tfont-weight: 600;\n\tfont-style: bold\n}\n\nhtml,\nbody {\n\tuser-select: none;\n\tmargin: 0;\n\theight: max-content;\n}\n\nhtml {\n\tfont-family: -apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, SegoeUI, Ubuntu, sans-serif;\n}\n\n/* TODO TokyoNight make header with tabs unreadable */\n/* [theme="dark"] .header.tokyo-night {\n\tfilter: url(\'../resources/icons/tokyo-filter.svg#filter\');\n} */\n\n* {\n\t--color-brand: #2962FF;\n\n\t--font-family-base: -apple-system, BlinkMacSystemFont, \'Trebuchet MS\', Roboto, SegoeUI, Ubuntu, sans-serif;\n}\n\n[theme="dark"] {\n\t--color-link: #5B9CF6;\n\t--color-link-hover: #3179F5;\n\t--color-link-active: #BBD9FB;\n\n\t--color-main-bg: #000000;\n\n\t--color-secondary-bg: #2a2e39;\n\t--color-secondary-bg-inactive: #363A45;\n\t--color-secondary-bg-blurred: #1E222D;\n\t--color-secondary-bg-hovered: #131722;\n\t--color-gopro-bg: #1E222D;\n\t--color-bg-header-inactive: #434651;\n\n\t--color-main-text: #B2B5BE;\n\t--color-more-tools-text: #D1D4DC;\n\t--color-more-tools-description: #9598A1;\n\n\t--color-save-changes-dialog-title: #D1D4DC;\n\t--color-save-changes-dialog-text: #868993;\n\t--color-save-changes-dialog-active-button-text: #FFFFFF;\n\t--color-save-changes-dialog-buttons-text: #D1D4DC;\n\n\t--color-tetriary-bg: #131722;\n\t--color-tetriary-bg-hovered: #1E222D;\n\n\t--color-bg-flash: orange;\n\n\t--color-tab-text-active: #D1D4DC;\n\t--color-tab-text-blurred: #787B86;\n\t--color-tab-text-section-name: #787B86;\n\t--color-tab-text-inactive: #B2B5BE;\n\n\t--color-tab-separator: #5D606B;\n\t--color-layout-separator: #434651;\n\n\t--color-wnd-buttons: #d1d4dc;\n\t--color-wnd-buttons-bg-hover: #363a45;\n\t--color-wnd-buttons-bg-hover-active: #2A2E39;\n\n\t--color-bg: #000;\n\t--color-item-fg: #fff;\n\t--color-item-fg-opened: #666;\n\t--color-item-bg-hover: rgba(255, 255, 255, 0.2);\n\n\t--color-spinner-spin: #D1D4DC;\n\t--color-spinner-bg: #2A2E39;\n\n\t--color-button-bg: #2962FF;\n\t--color-button-bg-hover: #1E53E5;\n\t--color-button-bg-active: #1848CC;\n\t--color-button-border-focus: #2962ffcc;\n\n\t--color-checkbox-border: #50535E;\n\t--color-focus-outline: #2962ff80;\n\n\t--color-toast-bg: #363a45;\n\n\t--color-tooltip-text: #F0F3FA;\n\t--color-tooltip-border: #434651;\n\t--color-tooltip-border-shadow: #00000066;\n\n\t--color-border: #363A45;\n\t--color-esc-border: #787B86;\n\t--color-border-new-tab: #434651;\n\n\t--color-dialog-bg: #1E222D;\n\t--color-dialog-window-bg: #1F1F1F;\n\t--color-dialog-option-bg: #132742;\n\t--color-dialog-option-border: #1848CC;\n\t--color-dialog-close-hover: #2a2e39;\n\n\t--color-close-tab-active: #5D606B;\n\t--color-close-tab-inactive: #6A6D78;\n\t--color-close-tab-not-focused: #5D606B;\n\n\t--color-progress-value: #2962FF;\n\n\t--color-icon-border: #131722;\n\t--color-search-icon: #A3A6AF;\n\n\t--color-background-transparent: #0c0e1580;\n\t--color-background-selected-layout: #142e61;\n\n\t--color-toast-success: #089981;\n\n\t--fullscreen-warning-border: #FF9800;\n\n\t/* buttons */\n\t/* solid-blue */\n\t--color-button-solid-blue-bg-default: #2962FF;\n\t--color-button-solid-blue-bg-hover: #1E53E5;\n\t--color-button-solid-blue-bg-active: #1848CC;\n\t--color-button-solid-blue-text: #FFF;\n\t/* etc */\n\t--color-button-outline: #2962FFCC;\n\n\t--color-signin-main-text: #FFFFFF;\n\t--color-signin-secondary-text: #D1D4DC;\n\t--color-signin-tetriary-text: #B2B5BE;\n\n\t--color-sort-button-active: #1848CC;\n\t--color-scroll-thumb: #50535E;\n\n\t--color-tool-item-bg: #1E222D;\n\t--color-tool-item-link-separator: #5D606B;\n\n\t--color-tool-item-shadow-color: 13, 13, 14;\n\t--first-rgba-factor-tool-item-shadow: 0;\n\t--second-rgba-factor-tool-item-shadow: 0.6;\n\n\t/* input */\n\t--color-input-bg-disabled: #2A2E39;\n\t--color-input-border-disabled: #50535E;\n\t--color-input-range-thumb-border: #50535E;\n\t--color-input-range-tip-bg: #363A45;\n\n\t--color-text-new-tab-support-buttons: #D1D4DC;\n\t--color-bg-new-tab-support-buttons: #131722;\n\t--color-hover-bg-new-tab-support-buttons: #1E222D;\n\t--color-border-new-tab-support-buttons: #363A45;\n\t--color-main-menu-action-button: #3179F5;\n\t--color-main-menu-action-button-hover: #3179F5;\n\t--color-menu-user-card: #2A2E39;\n\t--color-menu-user-card-hover: #363A45;\n\t--color-menu-yellow-update-card: #33261A;\n\t--color-menu-yellow-update-card-hover: #593A1B;\n\t--color-menu-zoom-button-hover: #363A45;\n\t--color-menu-shadow: #181B24;\n\t--color-new-tab-menu-sort-bg: #1e222d;\n\t--color-new-tab-popup-menu-item-bg: #1e222d;\n\n\t--color-app-onboarding-background: #1E222D;\n\t--color-app-onboarding-sign-in-title: #434651;\n\t--app-onboarding-modal-overlay: #0c0e1580;\n\n\t--error-message-color: #F23645;\n}\n\n[theme="light"] {\n\t--color-link: #2962FF;\n\t--color-link-hover: #1E53E5;\n\t--color-link-active: #2962FF;\n\n\t--color-main-bg: #FFFFFF;\n\n\t--color-secondary-bg: #E0E3EB;\n\t--color-secondary-bg-inactive: #F0F3FA;\n\t--color-secondary-bg-blurred: #F0F3FA;\n\t--color-secondary-bg-hovered: #FFF;\n\t--color-gopro-bg: #FFF;\n\t--color-bg-header-inactive: #F0F3FA;\n\n\t--color-main-text: #131722;\n\t--color-more-tools-text: #131722;\n\t--color-more-tools-description: #5D606B;\n\n\t--color-save-changes-dialog-title: #131722;\n\t--color-save-changes-dialog-text: #6A6D78;\n\t--color-save-changes-dialog-active-button-text: #FFFFFF;\n\t--color-save-changes-dialog-buttons-text: #131722;\n\n\t--color-tetriary-bg: #FFF;\n\t--color-tetriary-bg-hovered: #F0F3FA;\n\n\t--color-bg-flash: orange;\n\n\t--color-tab-text-active: #131722;\n\t--color-tab-text-blurred: #434651;\n\t--color-tab-text-section-name: #787B86;\n\t--color-tab-text-inactive: #5D606B;\n\n\t--color-tab-separator: #C1C4CD;\n\t--color-layout-separator: #E0E3EB;\n\n\t--color-wnd-buttons: #131722;\n\t--color-wnd-buttons-bg-hover: #D1D4DC;\n\t--color-wnd-buttons-bg-hover-active: #F0F3FA;\n\n\t--color-bg: #FFF;\n\t--color-item-fg: #fff;\n\t--color-item-fg-opened: #666;\n\t--color-item-bg-hover: rgba(255, 255, 255, 0.2);\n\n\t--color-spinner-spin: #131722;\n\t--color-spinner-bg: #F0F3FA;\n\n\t--color-button-bg: #2962FF;\n\t--color-button-bg-hover: #1E53E5;\n\t--color-button-bg-active: #1848CC;\n\t--color-button-border-focus: #2962ffcc;\n\n\t--color-checkbox-border: #B2B5BE;\n\t--color-focus-outline: #2962ff80;\n\n\t--color-toast-bg: #FFFFFF;\n\n\t--color-tooltip-text: #131722;\n\t--color-tooltip-border: #D1D4DC;\n\t--color-tooltip-border-shadow: #00000033;\n\n\t--color-border: #E0E3EB;\n\t--color-esc-border: #787B86;\n\t--color-border-new-tab: #E0E3EB;\n\n\t--color-dialog-bg: #FFF;\n\t--color-dialog-window-bg: #FFFFFF;\n\t--color-dialog-option-bg: #E3F2FD;\n\t--color-dialog-option-border: #1848CC;\n\t--color-dialog-close-hover: #F0F3FA;\n\n\t--color-close-tab-active: #9598A1;\n\t--color-close-tab-inactive: #A3A6AF;\n\t--color-close-tab-not-focused: #cbcdd5;\n\n\t--color-progress-value: #2962FF;\n\n\t--color-icon-border: #131722;\n\t--color-search-icon: #A3A6AF;\n\n\t--color-background-transparent: #9598a180;\n\t--color-background-selected-layout: #bbd9fb;\n\n\t--color-toast-success: #089981;\n\n\t--fullscreen-warning-border: #FF9800;\n\n\t/* buttons */\n\t/* solid-blue */\n\t--color-button-solid-blue-bg-default: #2962FF;\n\t--color-button-solid-blue-bg-hover: #1E53E5;\n\t--color-button-solid-blue-bg-active: #1848CC;\n\t--color-button-solid-blue-text: #FFF;\n\t/* etc */\n\t--color-button-outline: #2962FFCC;\n\n\t--color-signin-main-text: #131722;\n\t--color-signin-secondary-text: #131722;\n\t--color-signin-tetriary-text: #131722;\n\n\t--color-sort-button-active: #2962FF;\n\t--color-scroll-thumb: #D1D4DC;\n\n\t--color-tool-item-bg: #FFFFFF;\n\t--color-tool-item-link-separator: #B2B5BE;\n\n\t--color-tool-item-shadow-color: 224, 227, 235;\n\t--first-rgba-factor-tool-item-shadow: 1;\n\t--second-rgba-factor-tool-item-shadow: 1;\n\n\t/* input */\n\t--color-input-bg-disabled: #F0F3FA;\n\t--color-input-border-disabled: #D1D4DC;\n\t--color-input-range-thumb-border: #B2B5BE;\n\t--color-input-range-tip-bg: #2A2E39;\n\n\t--color-text-new-tab-support-buttons: #131722;\n\t--color-bg-new-tab-support-buttons: #FFFFFF;\n\t--color-hover-bg-new-tab-support-buttons: #F0F3FA;\n\t--color-border-new-tab-support-buttons: #E0E3EB;\n\t--color-main-menu-action-button: #2962FF;\n\t--color-main-menu-action-button-hover: #1E53E5;\n\t--color-menu-user-card: #F0F3FA;\n\t--color-menu-user-card-hover: #E0E3EB;\n\t--color-menu-yellow-update-card: #FFF3E0;\n\t--color-menu-yellow-update-card-hover: #FFE0B2;\n\t--color-menu-zoom-button-hover: #E0E3EB;\n\t--color-menu-shadow: #CCCCCC;\n\t--color-new-tab-menu-sort-bg: #fff;\n\n\t--color-app-onboarding-background: #FFFFFF;\n\t--color-app-onboarding-sign-in-title: #A3A6AF;\n\t--app-onboarding-modal-overlay: #9598a180;\n\n\t--error-message-color: #F23645;\n}\n\n.tvd-link {\n\tcolor: var(--color-link);\n\ttext-decoration: none;\n\n\t&:hover {\n\t\tcolor: var(--color-link-hover);\n\t\tcursor: pointer;\n\t\ttext-decoration: underline;\n\t}\n\n\t&:active {\n\t\tcolor: var(--color-link-active);\n\t}\n\n\t&:focus-visible {\n\t\toutline: none;\n\t\ttext-decoration: underline;\n\t}\n}\n\n.ui-lib-icon {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n',
        "",
      ]);
      const E = b;
    },
    96893: (e, t, n) => {
      var o = n(25211),
        r = n.n(o),
        s = n(62962),
        i = n.n(s),
        c = n(20310),
        a = n.n(c),
        u = n(29290),
        l = n.n(u),
        d = n(47289),
        h = n.n(d),
        p = n(24834),
        b = n.n(p),
        m = n(64235),
        f = {};
      ((f.styleTagTransform = b()),
        (f.setAttributes = l()),
        (f.insert = a().bind(null, "head")),
        (f.domAPI = i()),
        (f.insertStyleElement = h()),
        r()(m.Z, f),
        m.Z && m.Z.locals && m.Z.locals);
    },
    91277: (e, t, n) => {
      n.d(t, { X: () => a });
      var o = n(13855),
        r = n(97003),
        s = n(23577),
        i = n(79946),
        c = n(23935);
      class a {
        eventSubscriptions = [];
        communicatorRendererInstance;
        communicatorInstances = new Map();
        id;
        instance;
        constructor(e) {
          ((this.id = (function (e) {
            const t = (0, r.vO)(e, r.ZJ.Contracts)?.contracts ?? [],
              n = (0, r.Kr)().slice(0, 8);
            return t && t.length > 0 ? `${n}-${t[0]}` : `${n}-anonymous`;
          })(e)),
            (this.instance = e));
        }
        dispose() {
          (0, r.Wf)(this.instance) && this.instance.dispose();
          for (const e of this.eventSubscriptions) e.subscription.unsubscribe();
          this.communicatorRendererInstance?.dispose();
          for (const e of this.communicatorInstances) e[1].dispose();
          this.communicatorInstances.clear();
        }
        eventSubscribe(e) {
          const t = e.body,
            n = Reflect.get(this.instance, t.method);
          if (!n) throw new Error(`Invalid (${t.method}) event`);
          const s = e.context?.sender,
            a = this.communicator(s),
            u = t.args[0],
            l = `${t.method}_emit`,
            d = ((h = t.method), `${(0, r.Kr)().slice(0, 7)}-ev:${h}`);
          var h;
          const p = n.subscribe({
              next: (e) => {
                (0, c.E)(a, u, l, [e]).catch((e) => {
                  this.eventUnsubscribeInternal(d);
                  const t = (0, r.UD)(e);
                  (0, o.M2)().error(
                    `[InstanceEntry.eventSubscribe()] Error while emit (${l}) to (${u}):${t}`,
                    e,
                  );
                });
              },
              error: (e) => {
                const t = (0, r.UD)(e);
                (0, o.M2)().error(
                  `[InstanceEntry.eventSubscribe()] Event source(${l}) emits an error:${t}`,
                  e,
                );
              },
            }),
            b = e.context?.sender,
            m = b.id;
          (this.eventSubscriptions.push({
            subscription: p,
            subscriptionId: d,
            senderId: m,
          }),
            i.VT.response(e, d));
        }
        eventUnsubscribe(e) {
          if ("string" == typeof e.args[0]) {
            const t = e.args[0];
            this.eventUnsubscribeInternal(t);
          }
        }
        eventUnsubscribeInternal(e) {
          const t = this.eventSubscriptions.find((t) => t.subscriptionId === e);
          t
            ? (t.subscription.unsubscribe(),
              (this.eventSubscriptions = this.eventSubscriptions.filter(
                (t) => t.subscriptionId !== e,
              )),
              this.communicatorInstances.get(t.senderId)?.dispose(),
              this.communicatorInstances.delete(t.senderId))
            : (0, o.M2)().warn(
                `InstanceEntry.eventUnsubscribeInternal(): "Invalid subscription id: '${e}' on '${this.id}"'`,
              );
        }
        communicator(e) {
          if (e?.id) {
            let t = this.communicatorInstances.get(e.id);
            return (
              t ||
                ((t = s.w.createForWebContents(e)),
                this.communicatorInstances.set(e.id, t)),
              t
            );
          }
          return (
            this.communicatorRendererInstance ||
              (this.communicatorRendererInstance = s.w.forRenderer),
            this.communicatorRendererInstance
          );
        }
      }
    },
    98886: (e, t, n) => {
      n.d(t, { f: () => o, B: () => r });
      const o = "legacy:tvd-ipc:request",
        r = "legacy:tvd-ipc:response";
    },
    23577: (e, t, n) => {
      n.d(t, { w: () => a });
      var o = n(72298),
        r = n(97003),
        s = n(79946);
      const i = "comm:invoke-id",
        c = "comm:id";
      class a {
        static rendererIpcCommunicator = null;
        inbox;
        id = (0, r.Kr)();
        sender;
        idGenerator = 0;
        invocations = [];
        responseSubscription;
        static get forRenderer() {
          if (!a.rendererIpcCommunicator) {
            if (void 0 === o.ipcRenderer)
              throw new Error("ipcRenderer is undefined");
            a.rendererIpcCommunicator = new a((0, s.kS)(), s.yd);
          }
          return a.rendererIpcCommunicator;
        }
        static createForWebContents(e) {
          return new a((0, s.rs)(), (0, s.Ry)(e));
        }
        constructor(e, t) {
          ((this.inbox = e),
            (this.sender = t),
            (this.responseSubscription = e.onResponse.subscribe((e) => {
              const t = this.findInvokeIndex(e);
              if (void 0 === t) return;
              const n = this.invocations.splice(t, 1)[0];
              (clearTimeout(n.invocationTimeout), n.resolve(e));
            })));
        }
        send(e) {
          return new Promise((t, n) => {
            const o = ++this.idGenerator;
            ((e.headers[i] = o), (e.headers[c] = this.id));
            const r = setTimeout(() => {
              if (void 0 === this.findInvokeIndex(e)) return;
              const t = `Timeout for invocation: ${JSON.stringify(e)}`;
              console.log(t);
            }, 500);
            (this.invocations.push({
              id: o,
              resolve: t,
              reject: n,
              invocationTimeout: r,
            }),
              this.sender(e));
          });
        }
        getMyInvokeId(e) {
          if (!s.VT.hasHeader(e, c, this.id)) return null;
          const t = i in e.headers ? e.headers[i] : null;
          if ("number" != typeof t)
            throw new Error(`[${i}] expected to be a number`);
          return t;
        }
        findInvokeIndex(e) {
          const t = this.getMyInvokeId(e);
          if (null === t) return;
          const n = this.invocations.findIndex((e) => e.id === t);
          return n < 0 ? void 0 : n;
        }
        dispose() {
          this.responseSubscription.unsubscribe();
        }
      }
    },
    28321: (e, t, n) => {
      n.d(t, { B: () => i, n: () => c });
      var o = n(72298),
        r = n(31937),
        s = n(98886);
      class i extends r.V {
        onMessage(e, t) {
          if (!o.ipcMain)
            throw new Error(
              "MainIpcInbox must be created only within main process",
            );
          o.ipcMain.on(e, t);
        }
        makeResponseChannel(e) {
          return function (t) {
            const n = e.sender;
            n.isDestroyed()
              ? console.debug(
                  "Response will not be send to the destroyed contents",
                )
              : n.send(s.B, t);
          };
        }
      }
      class c extends r.V {
        static responseChannel = function (e) {
          o.ipcRenderer.send(s.B, e);
        };
        onMessage(e, t) {
          o.ipcRenderer.on(e, t);
        }
        makeResponseChannel() {
          return c.responseChannel;
        }
      }
    },
    66872: (e, t, n) => {
      n.d(t, {
        zQ: () => i,
        GT: () => c,
        XK: () => a,
        Ez: () => u,
        qy: () => l,
        E6: () => d,
        QK: () => h,
        _$: () => p,
        uY: () => b,
        HJ: () => f,
        v8: () => g,
        k2: () => E,
        Gb: () => y,
        R8: () => v,
      });
      var o = n(72298),
        r = n(79946);
      const s = void 0 !== o.ipcMain,
        i = "message-type",
        c = "instance:invoke",
        a = "instance:dispose",
        u = "instance:event_subscribe",
        l = "instance:event_unsubscribe",
        d = "instance:event_next",
        h = "instance:reflect",
        p = "host:get-instance",
        b = "instance:is-alive";
      function m(e) {
        if ("object" != typeof e || e instanceof Array) return !1;
        const t = Object.getOwnPropertyDescriptors(e);
        for (const e in t) if ("function" == typeof t[e].value) return !0;
        const n = Object.getPrototypeOf(e),
          o = n?.constructor;
        return "object" == typeof o && null !== o && m(n);
      }
      function f(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          "dispatchedRemoteInstanceId" in e
        );
      }
      function g(e) {
        return "object" == typeof e && null !== e && "callbackId" in e;
      }
      function E(e) {
        return "function" == typeof e
          ? { callbackId: (0, r.Q2)().registerRemoteInstance(e) }
          : e && "object" == typeof e
            ? !s && e instanceof DOMException
              ? Error(e.message)
              : m(e)
                ? {
                    dispatchedRemoteInstanceId: (0,
                    r.Q2)().registerRemoteInstance(e),
                  }
                : e
            : e;
      }
      function y(e) {
        return e.map(E);
      }
      function v(e, t) {
        return e.map((e) =>
          f(e) ? t(e.dispatchedRemoteInstanceId) : g(e) ? t(e.callbackId) : e,
        );
      }
    },
    23935: (e, t, n) => {
      n.d(t, { E: () => g, h: () => v });
      var o = n(72298),
        r = n(54041),
        s = n(13855),
        i = n(97003),
        c = n(59391),
        a = n(23577),
        u = n(79946),
        l = n(66872);
      const d = ["then", "reject"],
        h = ["dispose", "ipcProxyInstanceId", "ipcProxyCommunicator"];
      function p(e) {
        return d.includes(e);
      }
      function b(e) {
        return h.includes(e);
      }
      class m {
        source = new r.Subject();
        observable = this.source.asObservable();
      }
      async function f(e, t, n, o, r) {
        const s = { instanceId: t, method: n, args: l.Gb(r) },
          i = await e.send({ headers: { [l.zQ]: o }, body: s });
        return u.VT.getResponseBody(i);
      }
      function g(e, t, n, o) {
        return f(e, t, n, l.GT, o);
      }
      class E {
        static makeSubscribe(e) {
          return (
            e.propKey in e.fieldData ||
              Object.defineProperty(e.fieldData, e.propKey, {
                writable: !1,
                configurable: !0,
                value: new m(),
              }),
            (...t) => {
              const n = Reflect.get(
                  e.fieldData,
                  e.propKey,
                ).observable.subscribe(...t),
                o = `${e.propKey}_emit`,
                r = (0, u.Q2)().registerRemoteInstance({
                  [o]: (t) => {
                    Reflect.get(e.fieldData, e.propKey).source.next(t);
                  },
                });
              let i = "";
              return (
                (async () => {
                  const t = await e.proxy.instanceId();
                  i = await f(e.proxy.communicator, t, e.propKey, l.Ez, [r]);
                })().catch((t) => {
                  (0, s.kK)().error(
                    `[IpcPropertyProxy.makeSubscribe()] error while attempt to subscribe ipc event (${e.propKey})`,
                    t,
                  );
                }),
                {
                  unsubscribe: () => {
                    (n.unsubscribe(),
                      (0, u.Q2)().unregisterRemoteInstance(r),
                      "" !== i &&
                        (0, c.wK)(
                          e.proxy
                            .instanceId()
                            .then((t) =>
                              f(e.proxy.communicator, t, e.propKey, l.qy, [i]),
                            ),
                        ));
                  },
                }
              );
            }
          );
        }
        async apply(e, t, n) {
          const o = await e.proxy.instanceId(),
            r = await g(e.proxy.communicator, o, e.propKey, n);
          return l.HJ(r)
            ? v.createForInstance(r.dispatchedRemoteInstanceId)
            : l.v8(r)
              ? (...t) => {
                  (0, c.wK)(g(e.proxy.communicator, r.callbackId, "", t));
                }
              : r;
        }
        get(e, t) {
          if ("subscribe" === t) return E.makeSubscribe(e);
          if ("next" === t)
            return (t) => {
              (0, c.wK)(
                e.proxy.instanceId().then((n) => {
                  (0, c.wK)(f(e.proxy.communicator, n, e.propKey, l.E6, [t]));
                }),
              );
            };
          throw new Error(`Unknown ipc-proxy property: (${t})`);
        }
      }
      const y = new E();
      class v {
        instanceIdRequest;
        instanceIdValue = null;
        properties = {};
        communicator;
        static createForContracts(e, t, n) {
          const o = new v(this.getCommunicator(e[0], t, n), e);
          return new Proxy({}, o);
        }
        static createForInstance(e, t, n, o) {
          const r = this.getCommunicator(e, t, n),
            s = new v(r, e),
            i = this.getProxyTarget(o);
          return new Proxy(i, s);
        }
        static getProxyTarget(e) {
          const t = e?.some((e) => l.v8(e));
          return t ? () => {} : {};
        }
        static getCommunicator(e, t, n) {
          if (!t && !o.ipcRenderer)
            throw (
              console.error(
                "Proxy without target:WebContents must be used only for renderer process",
              ),
              new Error(
                `main process require to specify target: WebContents when creating proxy [${e}]`,
              )
            );
          if (n && o.ipcRenderer)
            throw new Error(
              "Renderer to renderer communication is forbidden for this legacy API. Use 'ipc-remote' instead",
            );
          return t ? a.w.createForWebContents(t) : a.w.forRenderer;
        }
        static isProxy(e) {
          return !("object" != typeof e || !e) && h.every((t) => t in e);
        }
        constructor(e, t) {
          ((this.communicator = e),
            (this.instanceIdRequest =
              "string" != typeof t
                ? (async () => {
                    const n = { contracts: t },
                      o = { headers: { [l.zQ]: l._$ }, body: n },
                      r = await e.send(o);
                    return u.VT.getResponseBody(r).instanceId;
                  })()
                : Promise.resolve(t)));
        }
        async requestInstanceId() {
          let e;
          try {
            e = await this.instanceIdRequest;
          } catch (e) {
            const t = `Remoting failure: ${(0, i.UD)(e)}`;
            throw new Error(t);
          }
          if ("" === e) throw new Error("Instance not resolved");
          return ((this.instanceIdValue = e), e);
        }
        instanceId() {
          return null !== this.instanceIdValue
            ? Promise.resolve(this.instanceIdValue)
            : this.requestInstanceId();
        }
        get(e, t) {
          if (p(t)) return;
          if (b(t) && t in this) return this[t].bind(this);
          const n = this.properties[t];
          if (n) return n;
          const o = { proxy: this, fieldData: e, propKey: t },
            r = Object.assign(() => {}, o),
            s = new Proxy(r, y);
          return ((this.properties[t] = s), s);
        }
        has(e, t) {
          return !p(t) && b(t);
        }
        async apply(e, t, n) {
          const o = await this.instanceIdRequest,
            r = await g(this.communicator, o, "", n);
          return l.HJ(r)
            ? v.createForInstance(r.dispatchedRemoteInstanceId)
            : l.v8(r)
              ? (...e) => {
                  (0, c.wK)(g(this.communicator, r.callbackId, "", e));
                }
              : r;
        }
        dispose() {
          this.instanceIdRequest
            .then((e) => {
              if (!e || "" === e) return;
              const t = { instanceId: e };
              (0, c.wK)(
                this.communicator.send({ headers: { [l.zQ]: l.XK }, body: t }),
              );
            })
            .catch((e) => {
              const t = (0, i.UD)(e);
              console.warn(
                `Error while awaiting instance info on .dispose:${t}`,
              );
            })
            .finally(() => {
              this.communicator.dispose();
            });
        }
        ipcProxyInstanceId() {
          return this.instanceId();
        }
        ipcProxyCommunicator() {
          return this.communicator;
        }
      }
    },
    21810: (e, t, n) => {
      (n.r(t),
        n.d(t, {
          getProvider: () => me,
          initializeRpc: () => ce,
          provide: () => ae,
          provideProxy: () => ue,
          registerRemoteObject: () => de,
          registerRemoteService: () => le,
          unregisterRemoteObject: () => he,
        }));
      var o = n(72298),
        r = n(95045);
      const s = void 0 !== o.ipcMain;
      var i, c, a;
      function u(e) {
        return (
          null !== e &&
          "object" == typeof e &&
          "dispatchedCallback" in e &&
          "string" == typeof e.dispatchedCallback
        );
      }
      function l(e) {
        if ("object" != typeof e || e instanceof Array) return !1;
        const t = Object.getOwnPropertyDescriptors(e);
        for (const e in t) if ("function" == typeof t[e].value) return !0;
        const n = Object.getPrototypeOf(e),
          o = n?.constructor;
        return "object" == typeof o && null !== o && l(n);
      }
      function d(e, t) {
        if ("function" == typeof e) return t ? t(e) : void 0;
        if (!e || "object" != typeof e) return e;
        if (!s && e instanceof DOMException) return Error(e.message);
        if (!l(e)) return e;
        throw new Error("Should never be executed");
      }
      function h(e, t) {
        return e.map((e) => (u(e) ? t(e) : e));
      }
      function p(e, t) {
        return { headers: { [i.HEADER_REQUEST_TYPE]: t }, body: e };
      }
      function b(e) {
        return p(e, i.MESSAGE_REGISTER_INSTANCE);
      }
      function m(e) {
        return p(e, i.MESSAGE_PORT_REQUEST);
      }
      function f(e) {
        return p(e, i.MESSAGE_EVENT_EMIT);
      }
      function g(e, t, n) {
        return t in e.headers && (void 0 === n || e.headers[t] === n);
      }
      function E(e, t) {
        return t in e.headers ? e.headers[t] : void 0;
      }
      function y(e, t) {
        const n = {
          headers: { ...e.headers, success: !0, failure: "" },
          body: t,
        };
        e.responseChannel(n);
      }
      function v(e, t) {
        let n,
          o = "";
        "string" == typeof t
          ? (o = t)
          : t instanceof Error
            ? ((o = `(${t.name}):${t.message}`), (n = t.stack))
            : (o = "Untyped error");
        const r = {
          headers: { ...e.headers, success: !1, failure: o },
          body: {},
        };
        (n && (r.headers.stack = n), e.responseChannel(r));
      }
      function w(e) {
        structuredClone(e);
      }
      (((a = i || (i = {})).HEADER_REQUEST_TYPE = "request-type"),
        (a.HEADER_HOST_ID = "host-id"),
        (a.HEADER_REQUEST_MODE = "request-mode"),
        (a.MESSAGE_REGISTER_INSTANCE = "host:register-instance"),
        (a.MESSAGE_UNREGISTER_INSTANCE = "host:unregister-instance"),
        (a.MESSAGE_GET_INSTANCE = "host:get-instance"),
        (a.MESSAGE_PORT_REQUEST = "host:port-request"),
        (a.MESSAGE_HOST_DEAD_NOTIFICATION = "host:host-dead-notification"),
        (a.MESSAGE_INVOKE = "instance:invoke"),
        (a.MESSAGE_DISPOSE = "instance:dispose"),
        (a.MESSAGE_EVENT_SUBSCRIBE = "instance:event_subscribe"),
        (a.MESSAGE_EVENT_UNSUBSCRIBE = "instance:event_unsubscribe"),
        (a.MESSAGE_EVENT_EMIT = "instance:event_emit"),
        (a.MESSAGE_EVENT_NEXT = "instance:event_next"),
        (function (e) {
          ((e.REQUEST_CHANNEL = "ipc-remote:request"),
            (e.RESPONSE_CHANNEL = "ipc-remote:response"));
        })(c || (c = {})));
      class S {
        inbox;
        id = (0, r.Vj)();
        sender;
        idGenerator = 0;
        invocations = new Map();
        responseSubscription;
        constructor(e, t) {
          ((this.inbox = e),
            (this.inbox = e),
            (this.sender = t),
            (this.responseSubscription = this.inbox.onResponse.subscribe(
              (e) => {
                const t = this.getInvokeId(e);
                if (!t) return;
                const n = this.invocations.get(t);
                n &&
                  (this.invocations.delete(t),
                  clearTimeout(n.invocationTimeout),
                  n.resolve(e));
              },
            )));
        }
        send(e) {
          return new Promise((t, n) => {
            const o = ++this.idGenerator;
            ((e.headers["comm:invoke-id"] = o),
              (e.headers["comm:id"] = this.id));
            const r = setTimeout(() => {
              const t = this.getInvokeId(e);
              if (t && !this.invocations.has(t)) return;
              const n = `Timeout for invocation: ${JSON.stringify(e)}`;
              console.log(n);
            }, 1500);
            (this.invocations.set(o, {
              id: o,
              resolve: t,
              reject: n,
              invocationTimeout: r,
            }),
              this.sender(e));
          });
        }
        getInvokeId(e) {
          if (!g(e, "comm:id", this.id)) return;
          const t = E(e, "comm:invoke-id");
          if (Number.isInteger(t)) return t;
          throw new Error("[comm:invoke-id] expected to be a number");
        }
        dispose() {
          this.responseSubscription.unsubscribe();
        }
      }
      const I = void 0 === o.ipcRenderer;
      class R {
        inbox;
        factories = new Map();
        communicatorMember = null;
        factoryRegistractionQueue = [];
        constructor(e) {
          ((this.inbox = e),
            I ||
              (this.communicator(),
              this.factoryRegistractionQueue.forEach((e) => e()),
              (this.factoryRegistractionQueue = [])));
        }
        tryCreate(e, ...t) {
          const n = this.factories.get(e);
          if (n) return n(...t);
        }
        registerFactory(e, t) {
          if (this.factories.has(e))
            throw new Error(
              `Service factory with contract [${e}] registered already`,
            );
          if (!I) {
            const t = () => {
              this.communicatorMember
                ?.send(b({ name: e }))
                .catch((e) => console.error(e));
            };
            this.communicatorMember
              ? t()
              : this.factoryRegistractionQueue.push(t);
          }
          this.factories.set(e, t);
        }
        canProvide(e) {
          return this.factories.has(e);
        }
        provide(e, ...t) {
          const n = this.tryCreate(e, ...t);
          if (!n)
            throw new Error(
              `Local service with contracts [${e}] not registered. Instance can not be created.`,
            );
          return n;
        }
        communicator() {
          if (I)
            throw new Error(
              "Creating ServiceProvider communicator in main process",
            );
          return (
            this.communicatorMember ||
              (this.communicatorMember = new S(this.inbox, (e) => {
                o.ipcRenderer.send(c.REQUEST_CHANNEL, e);
              })),
            this.communicatorMember
          );
        }
      }
      var x = n(54041);
      function F(e) {
        return void 0 !== e.ports;
      }
      class C {
        onRequestSubject = new x.Subject();
        onResponseSubject = new x.Subject();
        onRequest = this.onRequestSubject.asObservable();
        onResponse = this.onResponseSubject.asObservable();
        constructor() {
          (this.onMessage(c.REQUEST_CHANNEL, (e, t) => {
            const n = this.makeResponseChannel(e);
            (function (e) {
              return void 0 !== e.sender.id;
            })(e) && (t.headers[i.HEADER_HOST_ID] = e.sender.id);
            const o = {
              ...t,
              responseChannel: n,
              port: F(e) ? e.ports[0] : void 0,
            };
            this.onRequestSubject.next(o);
          }),
            this.onMessage(c.RESPONSE_CHANNEL, (e, t) => {
              if (F(e)) {
                const [n] = e.ports;
                t.body = { port: n };
              }
              this.onResponseSubject.next(t);
            }));
        }
      }
      class A extends C {
        onMessage(e, t) {
          o.ipcMain.on(e, t);
        }
        makeResponseChannel(e) {
          return function (t) {
            const n = e.sender;
            if (n.isDestroyed())
              return void console.debug(
                "Response will not be send to the destroyed contents",
              );
            const o = t.body;
            if (o.port)
              return (
                (t.body = {}),
                void n.postMessage(c.RESPONSE_CHANNEL, t, [o.port])
              );
            n.postMessage(c.RESPONSE_CHANNEL, t);
          };
        }
      }
      class D extends C {
        onMessage(e, t) {
          o.ipcRenderer.on(e, t);
        }
        makeResponseChannel(e) {
          return function (e) {
            const t = e.body;
            if (t.port)
              return (
                (e.body = {}),
                void o.ipcRenderer.postMessage(c.RESPONSE_CHANNEL, e, [t.port])
              );
            o.ipcRenderer.postMessage(c.RESPONSE_CHANNEL, e);
          };
        }
      }
      var M = n(59391);
      class _ {
        id;
        instance;
        communicatorsByRemoteId = new Map();
        eventSubscriptions = new Map();
        static wrapIntstanceToRemotable(e, t) {
          return new _(e, t);
        }
        constructor(e, t) {
          ((this.id = t), (this.instance = e));
        }
        addCommunicator(e) {
          (this.communicatorsByRemoteId.set(e.remoteId, e),
            e.onClosed.subscribe(() => {
              e.dispose();
            }),
            e.onRequest.subscribe((e) => {
              try {
                this.handleRequest(e);
              } catch (t) {
                v(e, t);
              }
            }));
        }
        onHostDead(e) {
          const t = [];
          for (const [n, o] of this.eventSubscriptions)
            n.split("-").at(0) === e.toString() && (o.unsubscribe(), t.push(n));
          (t.forEach((e) => {
            this.eventSubscriptions.delete(e);
          }),
            this.communicatorsByRemoteId.get(e)?.dispose(),
            this.communicatorsByRemoteId.delete(e));
        }
        handleRequest(e) {
          return g(e, i.HEADER_REQUEST_TYPE, i.MESSAGE_INVOKE)
            ? this.handleInvokeRequest(e)
            : g(e, i.HEADER_REQUEST_TYPE, i.MESSAGE_DISPOSE)
              ? this.handleDisposeRequest(e)
              : g(e, i.HEADER_REQUEST_TYPE, i.MESSAGE_EVENT_SUBSCRIBE)
                ? this.handleSubscribeRequest(e)
                : g(e, i.HEADER_REQUEST_TYPE, i.MESSAGE_EVENT_UNSUBSCRIBE)
                  ? this.handleUnsubscribeRequest(e)
                  : g(e, i.HEADER_REQUEST_TYPE, i.MESSAGE_EVENT_NEXT)
                    ? this.handleNextRequest(e)
                    : void 0;
        }
        handleInvokeRequest(e) {
          const t = e.body,
            n = h(t.args, (t) => {
              const n = E(e, i.HEADER_HOST_ID) ?? 0;
              return (...e) => {
                const o = this.communicatorsByRemoteId
                  .get(n)
                  ?.request(
                    f({ method: t.dispatchedCallback, args: e }),
                    "fire-and-forget",
                  );
                return o;
              };
            }),
            o = this.instance[t.method];
          if (void 0 === o)
            return void v(
              e,
              `Instance does not provide invocable property: (${t.method})`,
            );
          const r = o.apply(this.instance, n);
          if (r instanceof Promise) return this.chainPromise(e, r);
          this.respondWithResult(e, r);
        }
        handleDisposeRequest(e) {
          const t = E(e, i.HEADER_HOST_ID) ?? 0;
          this.onHostDead(t);
        }
        handleSubscribeRequest(e) {
          const t = e.body,
            n = Reflect.get(this.instance, t.method);
          if (!n) throw new Error(`Invalid (${t.method}) event`);
          const o = E(e, i.HEADER_HOST_ID) ?? 0,
            r = `${o}-${t.method}`,
            s = n.subscribe({
              next: (e) => {
                const n = this.communicatorsByRemoteId
                  .get(o)
                  ?.request(
                    f({ method: t.method, args: [e] }),
                    "fire-and-forget",
                  );
                n && (0, M.wK)(n);
              },
              error: (e) => {
                console.error(e);
              },
            });
          if (this.eventSubscriptions.has(r))
            return v(e, "Instance already have such subscription");
          (this.eventSubscriptions.set(r, s), y(e, {}));
        }
        handleUnsubscribeRequest(e) {
          const t = e.body,
            n = `${E(e, i.HEADER_HOST_ID) ?? 0}-${t.method}`,
            o = this.eventSubscriptions.get(n);
          (o?.unsubscribe(), this.eventSubscriptions.delete(n), y(e, {}));
        }
        handleNextRequest(e) {
          const t = e.body;
          (Reflect.get(this.instance, t.method).next(t.args[0]), y(e, {}));
        }
        responseWithDispatchedCallback(e, t) {
          return t.name
            ? (this.instance[t.name] || (this.instance[t.name] = t),
              y(e, d({ dispatchedCallback: t.name })))
            : v(e, "Dispatched callback must be named");
        }
        chainPromise(e, t) {
          t.then((t) => {
            this.respondWithResult(e, t);
          }).catch((t) => v(e, t));
        }
        respondWithResult(e, t) {
          return "function" == typeof t
            ? this.responseWithDispatchedCallback(e, t)
            : y(e, d(t));
        }
        dispose() {
          for (const e of this.communicatorsByRemoteId.values()) e.dispose();
        }
      }
      class T {
        instances = new Map();
        onHostDead(e) {
          this.instances.forEach((t) => {
            t.onHostDead(e);
          });
        }
        hasInstance(e) {
          return this.instances.has(e);
        }
        getInstance(e) {
          const t = this.instances.get(e);
          if (!t) throw new Error(`Remotable ${e} not registered`);
          return t;
        }
        registerInstance(e, t) {
          const n = _.wrapIntstanceToRemotable(e, t);
          if (this.instances.has(n.id))
            throw new Error(`Remotable ${n.id} registered already`);
          return (this.instances.set(n.id, n), n.id);
        }
        unregisterInstance(e) {
          return this.instances.delete(e);
        }
      }
      class k {
        callback;
        shiftMs;
        timeoutMs;
        accumulator = new Set();
        timeout = null;
        endBefore = null;
        constructor(e, t = 50, n = 1e3) {
          if (
            ((this.callback = e),
            (this.shiftMs = t),
            (this.timeoutMs = n),
            !(this.shiftMs < this.timeoutMs))
          )
            throw new Error("Assertion shiftMs < timeoutMs failed");
        }
        sync(e) {
          if ((this.accumulator.add(e), this.timeout))
            return this.endBefore && this.endBefore < Date.now()
              ? void this.fire()
              : void this.timeout.refresh();
          ((this.endBefore = Date.now() + this.timeoutMs),
            (this.timeout = setTimeout(this.fire.bind(this), this.shiftMs)));
        }
        fire() {
          (async () => {
            try {
              const e = this.callback(this.accumulator);
              e instanceof Promise && (await e);
            } finally {
              this.reset();
            }
          })();
        }
        reset() {
          (this.timeout &&
            (clearTimeout(this.timeout),
            (this.timeout = null),
            (this.endBefore = null)),
            this.accumulator.clear());
        }
      }
      var P = n(13855),
        N = n(97003),
        H = n(95091);
      const O = ["then", "reject"],
        j = ["dispose"];
      function B(e) {
        return O.includes(e);
      }
      function U(e) {
        return j.includes(e);
      }
      class $ {
        source = new x.Subject();
        observable = this.source.asObservable();
      }
      async function q(e, t, n, o, r) {
        const s = { method: t, args: r };
        try {
          return (
            (function (e) {
              if (!g(e, "success"))
                throw new Error("Expected response message.");
              if (!e.headers.success) {
                if (e.headers.failure && "string" == typeof e.headers.failure) {
                  const t = new Error(e.headers.failure);
                  throw (
                    "stack" in e.headers && (t.stack = e.headers.stack),
                    t
                  );
                }
                throw new Error("Unspecified remoting error");
              }
            })(
              (c = await e.request(
                { headers: { [i.HEADER_REQUEST_TYPE]: n }, body: s },
                o,
              )),
            ),
            c.body
          );
        } catch (e) {
          throw ((0, P.M2)().error("Error remote invoke", e), e);
        }
        var c;
      }
      function G(e, t, n) {
        return q(e, t, i.MESSAGE_INVOKE, "wait-for-response", n);
      }
      class K {
        static makeSubscribe(e) {
          return (
            e.propKey in e.fieldData ||
              Object.defineProperty(e.fieldData, e.propKey, {
                writable: !1,
                configurable: !0,
                value: new $(),
              }),
            (...t) => {
              const n = Reflect.get(
                e.fieldData,
                e.propKey,
              ).observable.subscribe(...t);
              return (
                e.proxy.subscriptionEmitters[e.propKey] ||
                  (e.proxy.subscriptionEmitters[e.propKey] = (t) => {
                    Reflect.get(e.fieldData, e.propKey).source.next(t);
                  }),
                (0, H.wK)(
                  (async () => {
                    const t = await e.proxy.communicatorPromise;
                    await q(
                      t,
                      e.propKey,
                      i.MESSAGE_EVENT_SUBSCRIBE,
                      "fire-and-forget",
                      [],
                    );
                  })(),
                ),
                {
                  unsubscribe: () => {
                    (n.unsubscribe(),
                      (0, H.wK)(
                        e.proxy.communicatorPromise.then((t) => {
                          (0, H.wK)(
                            q(
                              t,
                              e.propKey,
                              i.MESSAGE_EVENT_UNSUBSCRIBE,
                              "fire-and-forget",
                              [],
                            ),
                          );
                        }),
                      ));
                  },
                }
              );
            }
          );
        }
        async apply(e, t, n) {
          const o = await e.proxy.communicatorPromise,
            r = (function (e, t) {
              return e.map((e) => d(e, t));
            })(n, (t) => {
              const n = { dispatchedCallback: t.name };
              return ((e.proxy.subscriptionEmitters[t.name] = t), n);
            }),
            s = await G(o, e.propKey, r);
          return u(s) ? (...e) => G(o, s.dispatchedCallback, e) : s;
        }
        get(e, t) {
          if ("subscribe" === t) return K.makeSubscribe(e);
          if ("next" === t)
            return (t) => {
              (0, H.wK)(
                e.proxy.communicatorPromise.then((n) => {
                  (0, H.wK)(
                    q(n, e.propKey, i.MESSAGE_EVENT_NEXT, "fire-and-forget", [
                      t,
                    ]),
                  );
                }),
              );
            };
          throw new Error(`Unknown ipc-proxy property: (${t})`);
        }
      }
      const Q = new K();
      class z {
        communicatorPromise;
        properties = {};
        subscriptionEmitters = {};
        static create(e) {
          const t = new z(e);
          return new Proxy({}, t);
        }
        constructor(e) {
          ((this.communicatorPromise = e),
            this.communicatorPromise
              .then((e) => {
                e.onRequest.subscribe((e) => {
                  if (g(e, i.HEADER_REQUEST_TYPE, i.MESSAGE_EVENT_EMIT)) {
                    const t = e.body,
                      n = h(t.args, (e) => {
                        throw new Error(
                          `Dispatched callbacks in Rx Observables not allowed. Requested callback - ${e.dispatchedCallback}`,
                        );
                      }),
                      o = this.subscriptionEmitters[t.method];
                    if (!o) return;
                    o(...n);
                  }
                });
              })
              .catch((e) => {
                const t = (0, N.UD)(e);
                console.warn(
                  `Error while awaiting communicator instance on constructor:${t}`,
                );
              }));
        }
        get(e, t) {
          if (B(t)) return;
          if (U(t) && t in this) return this[t].bind(this);
          const n = this.properties[t];
          if (n) return n;
          const o = { proxy: this, fieldData: e, propKey: t },
            r = Object.assign(() => {}, o),
            s = new Proxy(r, Q);
          return ((this.properties[t] = s), s);
        }
        has(e, t) {
          return !B(t) && U(t);
        }
        async apply(e, t, n) {
          const o = await this.communicatorPromise;
          return await G(o, "", n);
        }
        dispose() {
          this.communicatorPromise
            .then((e) => {
              e.request(p({}, i.MESSAGE_DISPOSE), "fire-and-forget").finally(
                () => e.dispose(),
              );
            })
            .catch((e) => {
              const t = (0, N.UD)(e);
              console.warn(
                `Error while awaiting communicator instance on .dispose:${t}`,
              );
            });
        }
      }
      class V {
        id;
        remoteId;
        port;
        onRequestSubject = new x.Subject();
        onRequest = this.onRequestSubject.asObservable();
        onClosedSubject = new x.Subject();
        onClosed = this.onClosedSubject.asObservable();
        idGenerator = 1;
        invocations = new Map();
        constructor(e, t, n) {
          ((this.id = e), (this.remoteId = t), (this.port = n));
        }
        request(e, t = "fire-and-forget") {
          return new Promise((n, o) => {
            const r = ++this.idGenerator;
            if (
              ((e.headers["comm:invoke-id"] = r),
              (e.headers[i.HEADER_HOST_ID] = this.id),
              (e.headers["comm:request-mode"] = t),
              (e.headers["comm:message-type"] = "request"),
              w(e),
              "wait-for-response" === t)
            ) {
              const t = setTimeout(() => {
                const t = this.getMyInvokeId(e);
                if (t && !this.invocations.has(t)) return;
                const n = `Timeout for invocation: ${JSON.stringify(e)}`;
                console.log(n);
              }, 1e3);
              this.invocations.set(r, {
                id: r,
                resolve: n,
                reject: o,
                invocationTimeout: t,
              });
            }
            this.port.postMessage(e);
          });
        }
        responseHandler(e) {
          const t = this.getMyInvokeId(e),
            n = this.invocations.get(t);
          n &&
            (this.invocations.delete(t),
            clearTimeout(n.invocationTimeout),
            n.resolve(e));
        }
        getMyInvokeId(e) {
          return E(e, "comm:invoke-id") ?? 0;
        }
        handleMessage(e) {
          const t = E(e, "comm:message-type");
          if ("request" === t) {
            const t = g(e, "comm:request-mode", "wait-for-response")
                ? this.makeResponseChannel()
                : (e) => {},
              n = { ...e, responseChannel: t };
            this.onRequestSubject.next(n);
          }
          "response" === t && this.responseHandler(e);
        }
        closeHandler() {
          this.onClosedSubject.next();
        }
        makeResponseChannel() {
          const e = this.port;
          return function (t) {
            ((t.headers["comm:message-type"] = "response"),
              w(t),
              e.postMessage(t));
          };
        }
        dispose() {
          (this.invocations.clear(),
            this.onRequestSubject.complete(),
            this.onClosedSubject.complete(),
            this.port.close());
        }
      }
      class L extends V {
        constructor(e, t, n) {
          (super(e, t, n),
            n.on("message", (e) => {
              this.handleMessage(e.data);
            }),
            n.on("close", () => {
              this.closeHandler();
            }),
            this.port.start());
        }
      }
      class W extends V {
        constructor(e, t, n) {
          (super(e, t, n),
            n.addEventListener("message", (e) => {
              this.handleMessage(e.data);
            }),
            this.port.start());
        }
      }
      const Y = void 0 === o.ipcRenderer;
      class J {
        inbox;
        proxyHostGetter;
        communicatorMember = null;
        proxies = new Map();
        proxiesQueue = new Map();
        constructor(e, t) {
          ((this.inbox = e), (this.proxyHostGetter = t));
        }
        provide(e, t) {
          let n = this.findCachedProxy(e, t);
          return (
            n ||
            ((n = this.findQueuedProxy(e, t)),
            n || this.enqueueProxyRequest(e, t))
          );
        }
        async createCommunicators(e, t) {
          if (Y) {
            if (!this.proxyHostGetter)
              throw new Error("Proxy host getter not provided");
            const n = t ?? this.proxyHostGetter(e);
            if (!n)
              throw new Error(
                `Remote instance with contacts [${e}] not registerd. Instance can not be created.`,
              );
            const r = o.webContents.fromId(n);
            if (!r || r.isDestroyed())
              throw new Error(
                `Host for remote instance with contacts [${e}] was destroyed. Instance can not be created.`,
              );
            const s = new o.MessageChannelMain();
            return (
              r.postMessage(
                c.REQUEST_CHANNEL,
                m({ id: n, remoteId: 0, name: e }),
                [s.port1],
              ),
              new L(0, n, s.port2)
            );
          }
          const n = await this.communicator().send(
            ((r = { contract: e, specificHostId: t }),
            p(r, i.MESSAGE_GET_INSTANCE)),
          );
          var r;
          const s = n.body.port;
          if (!s)
            throw new Error(
              `Remote host didn't provide port for instance with [${e}]. Instance can not be created.`,
            );
          const a = E(n, i.HEADER_HOST_ID);
          if (!a)
            throw new Error(
              "Main RemoteHost didn't provide id. Instance can not be created.",
            );
          return new W(a, 0, s);
        }
        communicator() {
          if (Y)
            throw new Error(
              "Creating ProxyProvider communicator in main process",
            );
          return (
            this.communicatorMember ||
              (this.communicatorMember = new S(this.inbox, (e) => {
                o.ipcRenderer.send(c.REQUEST_CHANNEL, e);
              })),
            this.communicatorMember
          );
        }
        findInDoubleMap(e, t, n) {
          if (void 0 !== n) return e.get(n)?.get(t);
          for (const n of e.values()) {
            const e = n.get(t);
            if (e) return e;
          }
        }
        findCachedProxy(e, t) {
          return this.findInDoubleMap(this.proxies, e, t);
        }
        findQueuedProxy(e, t) {
          return this.findInDoubleMap(this.proxiesQueue, e, t);
        }
        enqueueProxyRequest(e, t) {
          const n = this.createCommunicators(e, t),
            o = z.create(n),
            r = t ?? -1;
          let s = this.proxiesQueue.get(r);
          return (
            s || ((s = new Map()), this.proxiesQueue.set(r, s)),
            s.set(e, o),
            n
              .then((t) => {
                if (-1 !== r && t.remoteId !== r)
                  throw new Error(
                    `Expected another host id. Expected - ${r}, got - ${t.remoteId}`,
                  );
                let n = this.proxies.get(t.remoteId);
                (n || ((n = new Map()), this.proxies.set(t.remoteId, n)),
                  n.set(e, o));
              })
              .catch((e) => {
                console.error(e);
              })
              .finally(() => {
                const t = this.proxiesQueue.get(r);
                (t?.delete(e), 0 === t?.size && this.proxiesQueue.delete(r));
              }),
            o
          );
        }
      }
      class Z {
        instanceProviderMember;
        proxyProviderMember;
        remoteManager;
        constructor(e, t, n) {
          ((this.instanceProviderMember = e),
            (this.proxyProviderMember = t),
            (this.remoteManager = n));
        }
        get instanceProvider() {
          return this.instanceProviderMember;
        }
        get proxyProvider() {
          return this.proxyProviderMember;
        }
      }
      class X extends Z {
        inbox;
        knownHosts = new Set();
        remoteInstancesRegistry = new Map();
        hostDeadSynchronizer = new k(this.onHostsDead.bind(this));
        constructor(e, t, n) {
          (super(
            t,
            new J(
              e,
              (e) => this.remoteInstancesRegistry.get(e)?.values().next().value,
            ),
            n,
          ),
            (this.inbox = e),
            this.initInboxing());
        }
        initInboxing() {
          const e = {
            [i.MESSAGE_REGISTER_INSTANCE]: (e) => {
              const t = e.body,
                n = E(e, i.HEADER_HOST_ID) ?? 0;
              if (!n)
                return v(e, "RegisterInstanse request must contain sender id");
              const r = o.webContents.fromId(n);
              if (!r || r.isDestroyed())
                return v(
                  e,
                  `ServiceHost for contracts [${t.name}] does not exists anymore`,
                );
              (this.rememberHost(r),
                this.registerHostForContract(t.name, n),
                y(e, "Successful registered"));
            },
            [i.MESSAGE_UNREGISTER_INSTANCE]: (e) => {
              const t = e.body,
                n = E(e, i.HEADER_HOST_ID) ?? 0;
              (this.unregisterForContract(t.name, n),
                y(e, "Successful unregistered"));
            },
            [i.MESSAGE_GET_INSTANCE]: (e) => {
              const t = e.body,
                n = t.contract,
                r = t.specificHostId,
                s = o.webContents.fromId(E(e, i.HEADER_HOST_ID) ?? 0);
              if (!s) return;
              if ((this.rememberHost(s), void 0 === r)) {
                let t;
                if (this.remoteManager.hasInstance(n))
                  t = this.remoteManager.getInstance(n);
                else if (this.instanceProvider.canProvide(n)) {
                  const e = this.remoteManager.registerInstance(
                    this.instanceProvider.provide(n),
                    n,
                  );
                  t = this.remoteManager.getInstance(e);
                }
                if (t) {
                  const n = new o.MessageChannelMain();
                  return (
                    t.addCommunicator(new L(0, s.id, n.port1)),
                    y(e, { id: s.id, remoteId: 0, port: n.port2 })
                  );
                }
              }
              const a = this.remoteInstancesRegistry.get(n);
              if (!a || 0 === a.size)
                return v(
                  e,
                  `Service with contracts [${n}] not registered , and remoting not configured.`,
                );
              if (r && !a.has(r))
                return v(
                  e,
                  `Service with contracts [${n}] not registered for specific id ${r}, and remoting not configured.`,
                );
              const u = r ?? a.values().next().value,
                l = o.webContents.fromId(u);
              if (!l)
                return v(
                  e,
                  `ServiceHost with id ${r} for contracts [${n}] does not exists anymore`,
                );
              const d = new o.MessageChannelMain();
              (l.postMessage(
                c.REQUEST_CHANNEL,
                m({ id: l.id, remoteId: s.id, name: t.contract }),
                [d.port1],
              ),
                y(e, { id: s.id, remoteId: l.id, port: d.port2 }));
            },
          };
          this.inbox.onRequest.subscribe((t) => {
            const n = E(t, i.HEADER_REQUEST_TYPE);
            try {
              n && n in e && e[n](t);
            } catch (e) {
              v(t, e);
            }
          });
        }
        rememberHost(e) {
          (e.isDestroyed() && this.knownHosts.delete(e.id),
            this.knownHosts.has(e.id) ||
              (this.knownHosts.add(e.id), this.setupHostAliveWatchdog(e)));
        }
        registerRemoteObject(e, t) {
          return this.remoteManager.registerInstance(e, t);
        }
        unregisterRemoteObject(e) {
          return this.remoteManager.unregisterInstance(e);
        }
        registerHostForContract(e, t) {
          let n = this.remoteInstancesRegistry.get(e);
          (n || ((n = new Set()), this.remoteInstancesRegistry.set(e, n)),
            n.add(t));
        }
        unregisterForContract(e, t) {
          const n = this.remoteInstancesRegistry.get(e);
          (n && n.delete(t),
            0 === n?.size && this.remoteInstancesRegistry.delete(e));
        }
        setupHostAliveWatchdog(e) {
          (e.once("destroyed", () => {
            (this.removeRemoteHost(e.id), this.hostDeadSynchronizer.sync(e.id));
          }),
            e.once("render-process-gone", () => {
              (this.removeRemoteHost(e.id),
                this.hostDeadSynchronizer.sync(e.id));
            }));
        }
        removeRemoteHost(e) {
          const t = [];
          (this.remoteInstancesRegistry.forEach((n, o) => {
            (n.delete(e), 0 === n.size && t.push(o));
          }),
            t.forEach((e) => {
              this.remoteInstancesRegistry.delete(e);
            }),
            this.knownHosts.delete(e),
            this.remoteManager.onHostDead(e));
        }
        onHostsDead(e) {
          this.knownHosts.difference(e).forEach((t) => {
            const n = o.webContents.fromId(t);
            n &&
              !n.isDestroyed() &&
              e.forEach((e) => {
                n.postMessage(
                  c.REQUEST_CHANNEL,
                  p({ id: e }, i.MESSAGE_HOST_DEAD_NOTIFICATION),
                );
              });
          });
        }
      }
      const ee = (e) => {
        o.ipcRenderer.send(c.REQUEST_CHANNEL, e);
      };
      class te extends Z {
        inbox;
        communicator;
        constructor(e, t, n) {
          (super(t, new J(e), n),
            (this.inbox = e),
            (this.communicator = new S(e, ee)),
            this.initInboxing());
        }
        initInboxing() {
          const e = {
            [i.MESSAGE_PORT_REQUEST]: (e) => {
              const t = e.body,
                n = e.port;
              if (!n) return v(e, "Request does not contains port");
              let o;
              if (this.remoteManager.hasInstance(t.name))
                o = this.remoteManager.getInstance(t.name);
              else if (this.instanceProvider.canProvide(t.name)) {
                const e = this.remoteManager.registerInstance(
                  this.instanceProvider.provide(t.name),
                  t.name,
                );
                o = this.remoteManager.getInstance(e);
              }
              o
                ? o.addCommunicator(new W(t.id, t.remoteId, n))
                : y(e, "Port successfully added");
            },
            [i.MESSAGE_HOST_DEAD_NOTIFICATION]: (e) => {
              const t = e.body;
              this.remoteManager.onHostDead(t.id);
            },
          };
          this.inbox.onRequest.subscribe((t) => {
            const n = E(t, i.HEADER_REQUEST_TYPE);
            try {
              n && n in e && e[n](t);
            } catch (e) {
              v(t, e);
            }
          });
        }
        registerRemoteObject(e, t) {
          return (
            (0, M.wK)(this.communicator.send(b({ name: t }))),
            this.remoteManager.registerInstance(e, t)
          );
        }
        unregisterRemoteObject(e) {
          return (
            (0, M.wK)(
              this.communicator.send(
                p({ name: e }, i.MESSAGE_UNREGISTER_INSTANCE),
              ),
            ),
            this.remoteManager.unregisterInstance(e)
          );
        }
      }
      let ne = null,
        oe = null,
        re = null,
        se = null;
      const ie = 8;
      function ce() {
        ne ||
          (ne = o.ipcMain ? new X(be(), me(), pe()) : new te(be(), me(), pe()));
      }
      function ae(e) {
        if (!ne) throw new Error("Rpc: host not initialized");
        return ne.instanceProvider.provide(e);
      }
      function ue(e, t) {
        if (!ne) throw new Error("Rpc: host not initialized");
        return ne.proxyProvider.provide(e, t);
      }
      function le(e, t) {
        if (!ne) throw new Error("Rpc: host not initialized");
        ne.registerRemoteObject(e, t);
      }
      function de(e, t) {
        if (!ne) throw new Error("Rpc: host not initialized");
        const n = (function (e) {
          return `${(0, r.Vj)().slice(0, ie)}-${e}`;
        })(t || "anonymous");
        return ne.registerRemoteObject(e, n);
      }
      function he(e) {
        if (!ne) throw new Error("Rpc: host not initialized");
        return ne.unregisterRemoteObject(e);
      }
      function pe() {
        return (oe || (oe = new T()), oe);
      }
      function be() {
        return (re || (re = o.ipcMain ? new A() : new D()), re);
      }
      function me() {
        return (se || (se = new R(be())), se);
      }
    },
    17184: (e, t, n) => {
      n.d(t, { t: () => c, r: () => a });
      var o = n(72298),
        r = n(11213),
        s = n(13855);
      const i = Symbol("LogCallClassName");
      function c(e, t, n) {
        const c = n.value;
        return (
          (n.value = function (...n) {
            if ("function" == typeof c) {
              const a = e,
                u =
                  Reflect.getMetadata(i, e.constructor) ??
                  a.name ??
                  a.constructor?.name,
                l = `${(function (e) {
                  let t = "";
                  return (
                    e.id && (t = e.id),
                    e.remoteServiceInstanceId &&
                      (t = e.remoteServiceInstanceId),
                    "" === t ? t : `[${(0, r.uJ)(t)}] `
                  );
                })(this)}${u ?? "anonymous"}.${t}()`;
              try {
                o.ipcMain ? (0, s.M2)().debug(l) : (0, s.x$)().debug(l);
              } catch (e) {
                console.log(l);
              }
              return c.apply(this, n);
            }
          }),
          n
        );
      }
      function a(e) {
        return (t) => {
          Reflect.defineMetadata(i, e, t);
        };
      }
    },
    65355: (e, t, n) => {
      n(36458);
    },
    41602: (e, t, n) => {
      (n(72298), n(57147), n(71017), n(13855), n(46628), n(9448), n(89597));
    },
    36842: (e, t, n) => {
      function o(e) {
        return (
          "object" == typeof e &&
          "dispose" in e &&
          "function" == typeof e.dispose
        );
      }
      n.d(t, { W: () => o });
    },
    95807: (e, t, n) => {
      Error;
    },
    5603: (e, t, n) => {
      n.d(t, { Kr: () => r });
      var o = n(95045);
      function r() {
        return (0, o.Vj)();
      }
    },
    80271: (e, t, n) => {
      function o(e) {
        return null == e
          ? ""
          : e instanceof Error
            ? e.message
            : "string" == typeof e
              ? e
              : "object" == typeof e
                ? (e.message ?? "unknown error")
                : "unknown error";
      }
      n.d(t, { U: () => o });
    },
    84011: (e, t, n) => {
      (n(13855), n(29265), n(67644));
      var o = n(59391);
      new Map([
        ["ctrl+Equal", "zoom-in"],
        ["ctrl+NumpadAdd", "zoom-in"],
        ["ctrl+Minus", "zoom-out"],
        ["ctrl+NumpadSubtract", "zoom-out"],
        ["ctrl+Numpad0", "set-zoom-default"],
        ["ctrl+Digit0", "set-zoom-default"],
        [(0, o.Um)() ? "cmd+n" : "ctrl+n", "new-window"],
        ["ctrl+PageDown", "next-tab"],
        ["ctrl+Numpad3", "next-tab"],
        ["ctrl+alt+ArrowRight", "next-tab-darwin"],
        ["ctrl+tab", "next-tab"],
        ["ctrl+PageUp", "prev-tab"],
        ["ctrl+Numpad9", "prev-tab"],
        ["ctrl+shift+tab", "prev-tab"],
        ["ctrl+alt+ArrowLeft", "prev-tab-darwin"],
        [(0, o.Um)() ? "cmd+t" : "ctrl+t", "new-tab"],
        ["ctrl+Digit1", "set-specific-tab"],
        ["ctrl+Digit2", "set-specific-tab"],
        ["ctrl+Digit3", "set-specific-tab"],
        ["ctrl+Digit4", "set-specific-tab"],
        ["ctrl+Digit5", "set-specific-tab"],
        ["ctrl+Digit6", "set-specific-tab"],
        ["ctrl+Digit7", "set-specific-tab"],
        ["ctrl+Digit8", "set-specific-tab"],
        ["ctrl+Digit9", "set-last-tab"],
        ["ctrl+shift+t", "reopen-tab"],
        ["ctrl+f4", "close-tab"],
        ["ctrl+w", "close-tab"],
        ["ctrl+shift+q", "exit"],
        ["ctrl+q", "exit-darwin"],
        ["ctrl+r", "reload-tab"],
        ["ctrl+u", "duplicate-tab"],
        ["ctrl+s", "save-snapshot"],
        ["ctrl+shift+f12", "show-wnd-dev-tools"],
        ["ctrl+shift+f11", "show-tab-dev-tools"],
        ["f1", "open-help-center"],
        ["f5", "reload-tab-no-darwin"],
        ["f11", "set-full-screen"],
        ["ctrl+Comma", "show-settings"],
      ]);
    },
    62771: (e, t, n) => {
      function o(e) {
        let t,
          n = e;
        return () => {
          if (n) {
            const e = n;
            ((n = void 0), (t = e()));
          }
          return t;
        };
      }
      n.d(t, { V: () => o });
    },
    19014: (e, t, n) => {
      var o = n(54041),
        r = (n(96485), n(13855));
      (Symbol("persistent_field_meta_key"),
        Symbol("persistent_array_meta_key"));
      const s = Symbol("persistent_constructor_meta_key");
      function i(e) {
        return null !== e && "object" == typeof e && "internalApplyState" in e;
      }
      function c(e) {
        return class extends e {
          changedSubject = new o.Subject();
          changed = this.changedSubject.asObservable();
          changedNotificationsEnabled = !0;
          stateIsApplying = !1;
          notifyStateChanged() {
            this.changedNotificationsEnabled &&
              !this.stateIsApplying &&
              this.changedSubject.next(this);
          }
          extractState() {
            if (i(this)) return this.internalExtractState();
          }
          applyState(e) {
            if (this.stateIsApplying)
              return Promise.reject(
                new Error(
                  "Cannot apply state now (applying already is processed)",
                ),
              );
            this.stateIsApplying = !0;
            let t = !0;
            const n = () => {
              ((this.stateIsApplying = !1),
                "stateApplied" in this &&
                  "function" == typeof this.stateApplied &&
                  this.stateApplied());
            };
            "beforeStateApplying" in this &&
              "function" == typeof this.beforeStateApplying &&
              this.beforeStateApplying();
            try {
              if (i(this)) {
                const o = this.internalApplyState(e);
                return (
                  o instanceof Promise &&
                    ((t = !1),
                    o
                      .catch((e) => {
                        (0, r.M2)().error(
                          "[PersistentObject.applyState()] Failed to restore state",
                          e,
                        );
                      })
                      .finally(() => {
                        n();
                      })),
                  o
                );
              }
            } finally {
              t && n();
            }
          }
        };
      }
      function a(e) {
        if ("object" != typeof e || null === e) return !1;
        const t = (t) => "function" == typeof Reflect.get(e, t);
        return (
          t("extractState") &&
          t("applyState") &&
          t("notifyStateChanged") &&
          "changed" in e
        );
      }
      function u(e) {
        return (
          !(!e || "object" != typeof e) &&
          "persistentParent" in e &&
          "persistentChangedSubscription" in e
        );
      }
      function l(e, t) {
        Object.defineProperty(t, "persistentParent", {
          value: e,
          enumerable: !1,
          configurable: !0,
        });
        const n = t.changed.subscribe(() => {
          e.notifyStateChanged();
        });
        return (
          Object.defineProperty(t, "persistentChangedSubscription", {
            value: n,
            enumerable: !1,
            configurable: !0,
          }),
          t
        );
      }
      function d(e) {
        (e.persistentChangedSubscription.unsubscribe(),
          delete e.persistentChangedSubscription,
          delete e.persistentParent);
      }
      let h = class {
        static proxyHandler = {
          set(e, t, n) {
            if (t in e) return Reflect.set(e, t, n);
            const o = Reflect.set(e.value, t, n);
            return (e.notifyStateChanged(), o);
          },
          get: (e, t) => (t in e ? Reflect.get(e, t) : Reflect.get(e.value, t)),
        };
        value;
        constructor(e) {
          this.value = e;
        }
        internalExtractState() {
          return this.value;
        }
        internalApplyState(e) {
          this.value = e;
        }
      };
      h = (function (e, t, n, o) {
        var r,
          s = arguments.length,
          i =
            s < 3
              ? t
              : null === o
                ? (o = Object.getOwnPropertyDescriptor(t, n))
                : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          i = Reflect.decorate(e, t, n, o);
        else
          for (var c = e.length - 1; c >= 0; c--)
            (r = e[c]) &&
              (i = (s < 3 ? r(i) : s > 3 ? r(t, n, i) : r(t, n)) || i);
        return (s > 3 && i && Object.defineProperty(t, n, i), i);
      })([c], h);
      var p = n(17184),
        b = function (e, t, n, o) {
          var r,
            s = arguments.length,
            i =
              s < 3
                ? t
                : null === o
                  ? (o = Object.getOwnPropertyDescriptor(t, n))
                  : o;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            i = Reflect.decorate(e, t, n, o);
          else
            for (var c = e.length - 1; c >= 0; c--)
              (r = e[c]) &&
                (i = (s < 3 ? r(i) : s > 3 ? r(t, n, i) : r(t, n)) || i);
          return (s > 3 && i && Object.defineProperty(t, n, i), i);
        };
      const m = (() => {
          const e = /^\d+$/;
          return (t) => e.test(t);
        })(),
        f = [
          { key: "pop", modifier: !0, closeResultItems: !0 },
          {
            key: "push",
            modifier: !0,
            closeResultItems: !1,
            newItemsArgIndex: 0,
          },
          { key: "reverse", modifier: !0, closeResultItems: !1 },
          { key: "shift", modifier: !0, closeResultItems: !0 },
          {
            key: "unshift",
            modifier: !0,
            closeResultItems: !1,
            newItemsArgIndex: 0,
          },
          {
            key: "splice",
            modifier: !0,
            closeResultItems: !0,
            newItemsArgIndex: 2,
          },
          { key: "indexOf", modifier: !1, closeResultItems: !1 },
          { key: "map", modifier: !1, closeResultItems: !1 },
          { key: "filter", modifier: !1, closeResultItems: !1 },
        ];
      let g = class {
        static handler = {
          set(e, t, n) {
            if (t in e) return Reflect.set(e, t, n);
            if ("string" == typeof t && m(t)) {
              const o = Reflect.get(e.items, t);
              o && u(o) && d(o);
              const r = a(n) ? l(e, n) : n,
                s = Reflect.set(e.items, t, r);
              return (e.notifyStateChanged(), s);
            }
            return Reflect.set(e.items, t, n);
          },
          get(e, t) {
            if (t in e) return Reflect.get(e, t);
            const n = f.find((e) => e.key === t);
            if (!n) {
              const n = Reflect.get(e.items, t);
              return "function" != typeof n
                ? n
                : (...n) => Reflect.get(Array.prototype, t).apply(e.items, n);
            }
            return n && n.modifier
              ? (...o) => {
                  if (void 0 !== n.newItemsArgIndex)
                    for (let t = n.newItemsArgIndex; t < o.length; ++t) {
                      const n = o[t];
                      a(n) && l(e, n);
                    }
                  const r = Reflect.get(Array.prototype, t).apply(e.items, o);
                  if (r && Array.isArray(r) && n.closeResultItems)
                    for (const e of r) u(e) && d(e);
                  return (e.notifyStateChanged(), r);
                }
              : (...n) => Reflect.get(Array.prototype, t).apply(e.items, n);
          },
        };
        items = [];
        itemConstructor;
        constructor(e) {
          this.itemConstructor = e;
        }
        internalExtractState() {
          const e = [];
          for (const t of this.items)
            u(t) ? e.push(t.extractState()) : e.push(t);
          return e;
        }
        internalApplyState(e) {
          if (!this.itemConstructor)
            return (
              console.error("Do not known how to construct item"),
              void this.resetItems(e)
            );
          const t = [],
            n = e.map((e) => {
              const n = (function (e, t, n) {
                const o = Reflect.getMetadata(s, t);
                return o ? new t(...o.argsBuilder(e, n)) : new t();
              })(this, this.itemConstructor, e);
              if (a(n)) {
                l(this, n);
                const o = n.applyState(e);
                o instanceof Promise && t.push(o);
              }
              return n;
            });
          return (this.resetItems(n), 0 !== t.length ? Promise.all(t) : void 0);
        }
        resetItems(e) {
          (this.items.forEach((e) => {
            (u(e) && d(e), "dispose" in e && e.dispose());
          }),
            (this.items = e));
        }
      };
      (b([p.t], g.prototype, "internalExtractState", null),
        b([p.t], g.prototype, "internalApplyState", null),
        b([p.t], g.prototype, "resetItems", null),
        (g = b([c, (0, p.r)("PersistentArrayProxy")], g)),
        n(59391));
      var E;
      let y = class {
        static {
          E = this;
        }
        static handlers = [];
        context;
        entries = [];
        undoMaxSize;
        entriesChangeEvent = new o.Subject();
        entriesChange = this.entriesChangeEvent.asObservable();
        static registerUndoHandler(e, t) {
          E.handlers.push({ command: e, handler: t });
        }
        static undoItemDescription(e) {
          const t = E.handlers.find((t) => t.command === e.command)?.handler;
          return t ? t.undoItemDescription(e.command, e.data) : "undo";
        }
        constructor(e, t) {
          ((this.context = e), (this.undoMaxSize = t));
        }
        get top() {
          return this.entries.length > 0
            ? this.entries[this.entries.length - 1]
            : void 0;
        }
        push(e) {
          (this.entries.length === this.undoMaxSize && this.entries.shift(),
            this.entries.push(e),
            this.notifyStateChanged(),
            this.entriesChangeEvent.next());
        }
        undo() {
          const e = this.entries.pop();
          if (!e) return;
          const t = E.handlers.find((t) => t.command === e.command)?.handler;
          if (!t) {
            const t = `Unregistered undo action (${e.command})`;
            throw new Error(t);
          }
          try {
            t.undo(e.command, e.data);
          } finally {
            (this.notifyStateChanged(), this.entriesChangeEvent.next());
          }
        }
        clear() {
          this.entries = [];
        }
        internalExtractState() {
          return this.entries;
        }
        internalApplyState(e) {
          this.entries = e;
        }
      };
      y = E = (function (e, t, n, o) {
        var r,
          s = arguments.length,
          i =
            s < 3
              ? t
              : null === o
                ? (o = Object.getOwnPropertyDescriptor(t, n))
                : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          i = Reflect.decorate(e, t, n, o);
        else
          for (var c = e.length - 1; c >= 0; c--)
            (r = e[c]) &&
              (i = (s < 3 ? r(i) : s > 3 ? r(t, n, i) : r(t, n)) || i);
        return (s > 3 && i && Object.defineProperty(t, n, i), i);
      })([c], y);
    },
    89183: (e, t, n) => {
      var o;
      (n(57310),
        n(72298),
        n(57147),
        n(96486),
        n(71017),
        n(41602),
        n(59391),
        n(9448),
        (function (e) {
          ((e[(e.Prevent = 0)] = "Prevent"),
            (e[(e.Inplace = 1)] = "Inplace"),
            (e[(e.OpenTab = 2)] = "OpenTab"),
            (e[(e.OpenPopup = 3)] = "OpenPopup"),
            (e[(e.OpenWindow = 4)] = "OpenWindow"),
            (e[(e.OpenExternal = 5)] = "OpenExternal"));
        })(o || (o = {})),
        n(16693),
        new Set(["file:", "tvd:"]));
    },
    94160: (e, t, n) => {
      e.exports = n.p + "04ee8a97c23a11ca61f6.ttf";
    },
    29e3: (e, t, n) => {
      e.exports = n.p + "e5649d45eab1c9e9b56d.ttf";
    },
    98428: (e, t, n) => {
      e.exports = n.p + "b55576c32bebc9c8a480.ttf";
    },
  },
]);
