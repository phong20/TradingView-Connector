(() => {
  "use strict";
  var t,
    e,
    n,
    s = {
      12582: (t, e, n) => {
        var s = n(50959),
          r = n(44478),
          i = n(55442),
          o = n(16602),
          a = n(76133),
          c = n(36458),
          d = n(59391),
          l = n(57147),
          h = n(71017);
        const u = "tvdbridge";
        let g;
        class p {}
        function b() {
          if (void 0 === g) {
            console.debug("Initializing TVD bridge");
            try {
              ((g = (function (t) {
                const e = "" === h.extname(t) ? `${t}.node` : t,
                  s = (() => {
                    const t = (
                        process && "renderer" === process.type
                          ? n(76699).app
                          : n(72298).app
                      ).getAppPath(),
                      s = h.join(t, "native", e);
                    if (!l.existsSync(s))
                      throw new Error(`Module (${e}) not found`);
                    return s;
                  })(),
                  r = { exports: {} };
                return (process.dlopen(r, s), r.exports);
              })(u)),
                console.log("Got bridge"),
                Object.defineProperty(g, "available", {
                  value: !0,
                  writable: !1,
                  configurable: !1,
                }));
            } catch (t) {
              throw (
                console.log(t),
                (g = new Proxy({ available: !1, shutdown() {} }, new p())),
                (0, i.Ex)("bridge-not-loaded"),
                new Error("bridge-not-loaded")
              );
            }
          }
          return g;
        }
        var f, v, w;
        (!(function (t) {
          t[(t.SW_NORMAL = 1)] = "SW_NORMAL";
        })(f || (f = {})),
          (function (t) {
            ((t[(t.None = 0)] = "None"),
              (t[(t.Up = 1)] = "Up"),
              (t[(t.Down = 2)] = "Down"));
          })(v || (v = {})),
          (function (t) {
            ((t[(t.Left = 0)] = "Left"),
              (t[(t.Middle = 1)] = "Middle"),
              (t[(t.Right = 2)] = "Right"));
          })(w || (w = {})));
        var m = n(13855);
        var y = n(96203),
          I = n(76699),
          S = n(69478),
          D = n(17184),
          T = n(11213),
          x = n(94850),
          E = n(16693),
          C = n(28305),
          P = n(93367),
          M = n(82170);
        function R() {
          return c.i.provideProxy(M.Sd);
        }
        var O = n(89597),
          $ = n(26770),
          j = n(97003),
          B = n(39499),
          A = n(98702),
          k = n(82678),
          W = n(55973),
          N = n(45101),
          F =
            (n(68902),
            function (t, e, n, s) {
              var r,
                i = arguments.length,
                o =
                  i < 3
                    ? e
                    : null === s
                      ? (s = Object.getOwnPropertyDescriptor(e, n))
                      : s;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                o = Reflect.decorate(t, e, n, s);
              else
                for (var a = t.length - 1; a >= 0; a--)
                  (r = t[a]) &&
                    (o = (i < 3 ? r(o) : i > 3 ? r(e, n, o) : r(e, n)) || o);
              return (i > 3 && o && Object.defineProperty(e, n, o), o);
            });
        let L = class extends s.Component {
          static contextType = A.a;
          windowCountSubscription;
          state = {
            tabs: null,
            hoveredTabIndex: null,
            isLastWindow: !1,
            isTooltipVisibleGlobal: !1,
            lastTabRightBorder: 0,
            lastTabClickedId: "",
          };
          id = "";
          tabsMap = new Map();
          mounted = !1;
          tabPanelRef = s.createRef();
          getBounds() {
            const t =
              this.tabPanelRef?.current?.getBoundingClientRect() ?? C.rw;
            return Promise.resolve({
              x: t.x,
              y: t.y,
              width: t.width,
              height: t.height,
            });
          }
          async componentDidMount() {
            const t = async () => {
              try {
                const t = (0, C.N8)();
                (await t.registerDroppable(this.id, this.context.windowId),
                  (0, m.x$)().debug(
                    `TabPanel.componentDidMount(): "Registered droppable with id: ${(0, T.uJ)(this.id)}"`,
                  ));
              } catch (t) {
                (0, m.x$)().error(
                  `Could not register droppable ${(0, T.uJ)(this.id)}`,
                  t,
                );
              }
            };
            this.id ||
              ((this.id = c.i.registerRemoteObject(this, x.Y1)),
              (async () => {
                for (; !this.context.windowId; ) await (0, d._v)(100);
              })().then(() => {
                (t(), (0, S.Bz)().registerTabPanel(this.id));
              }));
            const e = async () => {
              if (!(await (0, $.W2)().isFeatureEnabled($.DF, !1))) return;
              const t = await R().getCountWindows();
              (this.setState({ isLastWindow: 1 === t }),
                (this.windowCountSubscription =
                  R().chartWindowSubject.subscribe((t) => {
                    this.setState({ isLastWindow: 1 === t });
                  })));
            };
            try {
              await e();
            } catch (t) {
              (0, m.x$)().error(
                "<TabPanel>.componentDidMount(): setShowLastTabCloseButton() error",
                t,
              );
            }
          }
          componentDidUpdate() {
            const t = this.getLastTab();
            if (this.tabPanelRef?.current && t) {
              this.tabPanelRef.current.scrollLeft =
                this.tabPanelRef.current.scrollWidth;
              const e = this.tabsMap
                .get(t.id)
                ?.current?.getBoundingClientRect().right;
              e &&
                e !== this.state.lastTabRightBorder &&
                this.setState({ lastTabRightBorder: e });
            }
          }
          componentWillUnmount() {
            (c.i.unregisterRemoteObject(this.id),
              this.windowCountSubscription?.unsubscribe(),
              (this.windowCountSubscription = void 0));
          }
          updateTabUrl(t, e) {
            return this.mounted
              ? (this.setState((n) => ({
                  ...n,
                  tabs:
                    n?.tabs?.map((n) => (n.id === t ? { ...n, url: e } : n)) ??
                    [],
                })),
                Promise.resolve())
              : Promise.resolve();
          }
          updateTabs(t, e) {
            if (!this.mounted) return Promise.resolve();
            if (t.length > 1) {
              const e = t[t.length - 1];
              e.offset && (e.offset = this.normalizeOffset(e.id, e.offset, t));
            }
            return (
              e && this.mouseOverTab(null),
              this.setState({ tabs: t }),
              Promise.resolve()
            );
          }
          render() {
            return (
              this.props.appReady &&
                !this.mounted &&
                ((this.mounted = !0),
                (0, j.Xp)(this),
                (0, m.x$)().debug(
                  'TabPanel.render(): "Tabs panel registered"',
                )),
              s.createElement(
                "div",
                { className: "tabs", ref: this.tabPanelRef },
                this.state.tabs &&
                  s.createElement(
                    "div",
                    {
                      className: "tabs-container",
                      style: { flexBasis: 250 * this.state.tabs.length + "px" },
                      onMouseLeave: () => this.mouseLeave(),
                    },
                    this.renderTabs(this.state.tabs),
                  ),
                s.createElement(k.s, {
                  offset: Math.round(this.state.lastTabRightBorder),
                }),
                s.createElement("div", { id: "placeholder" }),
                s.createElement("div", {
                  className: "draggable-area",
                  onDoubleClick: () => (0, S.Bz)().toggleMaximize(),
                }),
              )
            );
          }
          mouseLeave() {
            ((0, S.Bz)().closeTooltip(),
              this.setState({ isTooltipVisibleGlobal: !1 }),
              this.mouseOverTab(null));
          }
          renderTabs(t) {
            const e = (function (t, e) {
              if (0 === t) return N.G.Normal;
              const n = e / t;
              return n <= 44
                ? N.G.XXSmall
                : n <= 75
                  ? N.G.XSmall
                  : n <= 110
                    ? N.G.Small
                    : N.G.Normal;
            })(t.length, this.tabPanelRef?.current?.scrollWidth ?? 0);
            return t.map((n, r) =>
              s.createElement(W.O, {
                key: n.id,
                setRef: (t) => this.setTabRef(n.id, t),
                id: n.id,
                active: n.active,
                pinned: n.pinned,
                isChart: n.isChart ?? !1,
                hideCloseTabButton: this.state.isLastWindow && 1 === t.length,
                index: r,
                offset: n.offset,
                initialWidth: 1 === this.state.tabs?.length ? n.width : void 0,
                tabSize: e,
                lastTabClickedId: this.state.lastTabClickedId,
                setLastTabClickedId: (t) =>
                  this.setState({ lastTabClickedId: t }),
                tabsQuantity: this.state.tabs ? this.state.tabs.length : null,
                isTooltipVisibleGlobal: this.state.isTooltipVisibleGlobal,
                isTooltipVisibleGlobalChange: (t) =>
                  this.isTooltipVisibleGlobalChange(t),
                mouseOverTab: (t) => this.mouseOverTab(t),
                t: this.props.t,
              }),
            );
          }
          setTabRef(t, e) {
            this.tabsMap.set(t, e);
          }
          getLastTab() {
            if (this.state.tabs && 0 !== this.state.tabs.length)
              return this.getRealTabsWidth()
                ? this.state.tabs.reduce((t, e) => {
                    if (!t) return e;
                    const n = this.tabsMap
                        .get(t.id)
                        ?.current?.getBoundingClientRect(),
                      s = this.tabsMap
                        .get(e.id)
                        ?.current?.getBoundingClientRect();
                    return n && s ? (n.right > s.right ? t : e) : n ? t : e;
                  })
                : this.state.tabs[this.state.tabs.length - 1];
          }
          mouseOverTab(t) {
            this.setState({ hoveredTabIndex: t });
          }
          isTooltipVisibleGlobalChange(t) {
            this.setState({ isTooltipVisibleGlobal: t });
          }
          getTabPanelRightBound() {
            let t = this.tabPanelRef?.current?.getBoundingClientRect()?.right;
            return (t && (t -= 20), t);
          }
          getControlsAreaWidth() {
            const t = this.tabPanelRef?.current;
            if (!t || !t.lastElementChild) return;
            const e =
              window.innerWidth -
              t.lastElementChild.getBoundingClientRect().right;
            return { leftControlWidth: t.offsetLeft, rightControlWidth: e };
          }
          getRealTabsWidth() {
            const t =
              this.tabPanelRef?.current?.lastElementChild
                ?.previousElementSibling;
            if (!t) return;
            const e = t.getBoundingClientRect().right;
            return e
              ? "darwin" === process.platform
                ? e - this.getDarwinControlWidth()
                : e
              : void 0;
          }
          getTabsWidth() {
            const t = this.getLastTab();
            if (!t) return;
            let e = this.tabsMap
              .get(t.id)
              ?.current?.getBoundingClientRect()?.right;
            return e
              ? (t.offset && (e += t.offset),
                "darwin" === process.platform
                  ? e - this.getDarwinControlWidth()
                  : e)
              : void 0;
          }
          onDragStart(t) {}
          onDragEnd(t, e) {}
          async onDragOver(t) {
            const e = this.state.tabs,
              n = await this.getDragData();
            if (!e || !n || !this.state.prevCursorPoint) return;
            const s = e.find((t) => t.id === n.tabId);
            if (!s) return void this.attachTab(t.x, n.tabId);
            if (1 === this.state.tabs?.length) return;
            const r = t.x - this.state.prevCursorPoint.x;
            if (r >= -1 && r <= 1) return;
            const i = this.tabsMap.get(n.tabId)?.current;
            if (!i) return;
            const o = i.getBoundingClientRect();
            if (
              o.left > this.state.prevCursorPoint.x ||
              this.state.prevCursorPoint.x > o.right
            )
              return void this.setState({ prevCursorPoint: t });
            const a = this.getTabPanelRightBound();
            if (!a) return;
            const c = i.offsetWidth,
              d = i.getBoundingClientRect().left,
              l = d - (s.offset ?? 0);
            ((s.offset = this.getFittingOffset(
              r + (s.offset ?? 0),
              l,
              c,
              a - 25,
            )),
              this.setState({ tabs: e, prevCursorPoint: t }),
              this.onTabMove(n.tabId, { x: d, y: 0, width: c, height: O.E7 }));
          }
          async onDragEnter(t) {
            (console.log("drag enter"), (0, S.Bz)().bringToFront());
            const e = await this.getDragData();
            e &&
              (1 === this.state.tabs?.length &&
              this.state.tabs.find((t) => t.id === e.tabId)
                ? (0, P.l)().startWindowDrag(this.context.windowId, e.tabId, t)
                : (this.setState({ prevCursorPoint: t }),
                  this.attachTab(t.x, e.tabId)));
          }
          async onDragLeave(t) {
            if (
              (console.log("drag leave"),
              !this.state.tabs || 1 === this.state.tabs.length)
            )
              return;
            const e = await this.getDragData();
            if (!e) return;
            const n = this.tabsMap
                .get(e.tabId)
                ?.current?.getBoundingClientRect(),
              s = this.getTabPanelRightBound();
            if (s) {
              if (n) {
                const e = Math.round(n.width / 2);
                t.x >= s - e ? (t.x = s - e) : t.x <= 0 && (t.x = e);
              }
              ((0, P.l)().dragTabOut(
                this.context.windowId,
                e.tabId,
                t,
                n?.width,
                this.getControlsAreaWidth(),
              ),
                this.resetTabsOffset());
            }
          }
          async onDrop() {
            if (!this.state.tabs) return;
            const t = await this.getDragData();
            if (!t) return;
            const e = this.tabsMap
              .get(t.tabId)
              ?.current?.getBoundingClientRect();
            if (!e) return;
            const n = e.left + e.width / 2,
              s = this.state.tabs.findIndex((e) => e.id === t.tabId),
              r = this.getTabIndexByCoordinate(n);
            if (
              ((0, m.x$)().debug(
                `TabPanel.onDrop(): "New tab index: ${r}, oldTabIndex: ${s}"`,
              ),
              setTimeout(() => {
                ((0, d.wK)((0, S.Bz)().resetTabs()), this.resetTabsOffset());
              }, 100),
              !(s < 0 || r < 0) && s !== r)
            ) {
              const { pinned: t } = this.state.tabs[s];
              (0, d.wK)(
                this.onDropControllerToMoveTab({
                  oldIndex: s,
                  newIndex: r,
                  tabs: this.state.tabs,
                  isPinned: t,
                }),
              );
            }
          }
          async onDropControllerToMoveTab({
            oldIndex: t,
            newIndex: e,
            tabs: n,
            isPinned: s,
          }) {
            let r = e;
            const i = n.findIndex(({ pinned: t }) => !t);
            (s
              ? -1 !== i && e >= i
                ? (r = i - 1)
                : e >= n.length && (r = n.length - 1)
              : e < i
                ? (r = i)
                : e >= n.length && (r = n.length - 1),
              this.mouseOverTab(r),
              await (0, S.Bz)().moveTab(t, r));
          }
          getTabIndexByCoordinate(t, e) {
            if (!this.state.tabs) return -1;
            const n = this.getRealTabsWidth();
            if (!n) return -1;
            const s = n / (e ?? this.state.tabs.length),
              r =
                "darwin" === process.platform
                  ? t - this.getDarwinControlWidth()
                  : t,
              i = Math.floor(r / s);
            return Math.min(i, e ?? this.state.tabs.length);
          }
          resetTabsOffset() {
            (this.isTooltipVisibleGlobalChange(!1),
              this.setState((t) => ({ ...t, tabs: (0, B.M)(t.tabs) })));
          }
          onTabMove(t, e) {
            const n = this.state.tabs;
            if (!n) return;
            const s = Math.min(this.getHoveredTab(e), n.length - 1),
              r = (0, B.F)(t, e.width, s, n);
            r && this.setState({ tabs: r.tabState });
          }
          attachTab(t, e) {
            const n = this.state.tabs;
            if (!n) return;
            if (n.find((t) => t.id === e))
              return void (0, m.x$)().debug(
                'TabPanel.attachTab(): "Skipping tab attach, tab already belongs to current window"',
              );
            const s = this.getTabsWidth();
            if (!s) return;
            const r = n.length,
              i = this.getTabIndexByCoordinate(t, r + 1);
            if (i < 0) return;
            (0, m.x$)().debug(
              `TabPanel.attachTab(): "Tabswidth: ${s}, tabs count: ${r}"`,
            );
            let o = 0;
            (console.log(`newtabindex: ${i}, tabscount: ${r}`),
              i === r + 1 &&
                ((o = t - s / (r + 1) / 2 - s - E.Ai), o < 0 && (o = 0)),
              (0, P.l)().dragTabIn(this.context.windowId, i, o));
          }
          getFittingOffset(t, e, n, s) {
            if (
              (0, d.Um)() &&
              this.context.windowStateSubject.value !== O.kZ.Fullscreen &&
              e + t <= this.getDarwinControlWidth()
            )
              return -e + this.getDarwinControlWidth();
            if (e + t <= 0) return -e;
            if (e + n + t >= s) {
              const t = s - e - n;
              return t < 0 ? 0 : t;
            }
            return t;
          }
          normalizeOffset(t, e, n) {
            (0, m.x$)().debug(
              `TabPanel.normalizeOffset(): "will normalize tab offset ${e}"`,
            );
            const s = this.tabsMap.get(t)?.current,
              r = this.getTabsWidth();
            if (!r) return e;
            const i = this.getTabPanelRightBound();
            if (!i)
              return (
                (0, m.x$)().warn(
                  'TabPanel.normalizeOffset(): "No tab panel right bound"',
                ),
                e
              );
            const o = r / (s ? n.length : n.length - 1),
              a = s ? s.getBoundingClientRect().left : r;
            return (
              (0, m.x$)().debug(
                `TabPanel.normalizeOffset(): "Tab width: ${o}, tabs right bound: ${r}, tab left: ${a}, tabs count: ${n.length}, panel right bound: ${i}"`,
              ),
              this.getFittingOffset(e, a, o, i)
            );
          }
          async getDragData() {
            return (0, C.N8)().getDragData();
          }
          getHoveredTab(t) {
            return this.getTabIndexByCoordinate(t.x + t.width / 2);
          }
          getDarwinControlWidth() {
            return this.context.isRtlSystem ? 0 : E.cj;
          }
        };
        function V(t) {
          return b().hardware.getButtonState(t);
        }
        (F([D.t], L.prototype, "updateTabUrl", null),
          F([D.t], L.prototype, "updateTabs", null),
          (L = F([(0, j.t6)(x.Y1), (0, D.r)("TabPanel")], L)));
        var U = n(54041),
          z = n(7455),
          _ = n(87269);
        const q = (t, e, n = 0) =>
          t.x - n <= e.x &&
          t.x + n + t.width > e.x &&
          t.y - n <= e.y &&
          t.y + n + t.height > e.y;
        function G(t, e) {
          return { x: t.x - e.x, y: t.y - e.y };
        }
        let Q;
        function H(t) {
          return (e) =>
            new U.Observable((n) => {
              const s = e.subscribe(n);
              return () => {
                (s.unsubscribe(), t());
              };
            });
        }
        class J {
          screen;
          onMotionSubject = new U.Subject();
          onButtonsSubject = new U.Subject();
          motionInterval;
          buttonsInterval;
          buttonsPollInv = 20;
          constructor(t) {
            this.screen = t;
          }
          onMotion() {
            return (
              this.motionInterval || this.createMotionTracker(),
              this.onMotionSubject.pipe(H(() => this.stopCapturing()))
            );
          }
          onButtons() {
            return (
              this.buttonsInterval || this.createButtonsTracker(),
              this.onButtonsSubject.pipe(H(() => this.stopCapturing()))
            );
          }
          createMotionTracker() {
            this.motionInterval ||
              (this.motionInterval = setInterval(() => {
                const t = this.screen.getCursorScreenPoint();
                this.onMotionSubject.next({
                  screenPoint: t,
                  offset: { x: 0, y: 0 },
                });
              }, 2));
          }
          createButtonsTracker() {
            this.buttonsInterval ||
              (this.buttonsInterval = setInterval(() => {
                const t = V(w.Left) ? v.Down : v.Up;
                this.onButtonsSubject.next({
                  left: t,
                  right: v.None,
                  middle: v.None,
                });
              }, this.buttonsPollInv));
          }
          stopCapturing() {
            0 === this.onButtonsSubject.observers.length &&
              0 === this.onMotionSubject.observers.length &&
              this.resetIntervals();
          }
          resetIntervals() {
            (this.motionInterval &&
              (clearInterval(this.motionInterval),
              (this.motionInterval = void 0)),
              this.buttonsInterval &&
                (clearInterval(this.buttonsInterval),
                (this.buttonsInterval = void 0)));
          }
        }
        class K {
          captureInterop;
          onMotionSubject = new U.Subject();
          onButtonsSubject = new U.Subject();
          constructor() {
            ((this.captureInterop = b().hardware?.capturePointer()),
              this.captureInterop.setButtonsEventCallback((t) => {
                this.onButtonsSubject.next(t);
              }),
              this.captureInterop.setMotionEventCallback((t) => {
                this.onMotionSubject.next(t);
              }));
          }
          onMotion() {
            if (!this.captureInterop)
              throw new Error("Capturer object disposed");
            return (
              this.captureInterop.startCapturing(),
              this.onMotionSubject.pipe(
                (0, z.xb)((t, e) => {
                  return (
                    (n = t.screenPoint),
                    (s = e.screenPoint),
                    n.x >= s.x - 2 &&
                      n.x <= s.x + 2 &&
                      n.y >= s.y - 2 &&
                      n.y <= s.y + 2
                  );
                  var n, s;
                }),
                (0, z.bh)(2),
                H(() => this.stopCapturing()),
              )
            );
          }
          onButtons() {
            if (!this.captureInterop)
              throw new Error("Capturer object disposed");
            return (
              this.captureInterop.startCapturing(),
              this.onButtonsSubject.pipe(H(() => () => this.stopCapturing()))
            );
          }
          stopCapturing() {
            0 === this.onButtonsSubject.observers.length &&
              0 === this.onMotionSubject.observers.length &&
              this.captureInterop?.stopCapturing();
          }
        }
        var X = n(95091);
        class Y {
          bufferDelay = 20;
          state = {};
          stateChangedSubject = new U.Subject();
          stateChanged = this.stateChangedSubject.asObservable();
          setState(t, e = !0) {
            if (0 === Object.keys(this.state ?? {}).length) return;
            const n = Object.getOwnPropertyNames(t);
            if (0 !== n.length) {
              for (const e of n) this.state[e] = t[e];
              e && this.stateChangedSubject.next(this.state);
            }
          }
        }
        class Z {
          screen;
          isScaleDefault = !0;
          scaleChangeSubscription;
          constructor(t, e) {
            ((this.screen = t),
              this.updateScaleStatus(),
              (this.scaleChangeSubscription = e.displayScaleChange.subscribe(
                (t) => {
                  this.isScaleDefault = 1 === t.scaleFactor;
                },
              )));
          }
          dispose() {
            this.scaleChangeSubscription.unsubscribe();
          }
          fromMotionEventToScreenPoint(t) {
            let e = t.screenPoint;
            return (
              "linux" === process.platform &&
                (e = this.formatPointIntoUbuntuFormat(t.screenPoint)),
              "win32" === process.platform &&
                (e = this.screen.screenToDipPoint(t.screenPoint)),
              (e.x = Math.floor(e.x)),
              (e.y = Math.floor(e.y)),
              e
            );
          }
          updateScaleStatus() {
            this.isScaleDefault = !this.screen
              .getAllDisplays()
              .some((t) => 1 !== t.scaleFactor);
          }
          formatPointIntoUbuntuFormat(t) {
            return !0 === this.isScaleDefault ? t : { x: t.x / 2, y: t.y / 2 };
          }
        }
        var tt,
          et = function (t, e, n, s) {
            var r,
              i = arguments.length,
              o =
                i < 3
                  ? e
                  : null === s
                    ? (s = Object.getOwnPropertyDescriptor(e, n))
                    : s;
            if (
              "object" == typeof Reflect &&
              "function" == typeof Reflect.decorate
            )
              o = Reflect.decorate(t, e, n, s);
            else
              for (var a = t.length - 1; a >= 0; a--)
                (r = t[a]) &&
                  (o = (i < 3 ? r(o) : i > 3 ? r(e, n, o) : r(e, n)) || o);
            return (i > 3 && o && Object.defineProperty(e, n, o), o);
          };
        !(function (t) {
          ((t[(t.NoDrag = 0)] = "NoDrag"),
            (t[(t.DragStarted = 10)] = "DragStarted"),
            (t[(t.InDrag = 20)] = "InDrag"),
            (t[(t.DragEnded = 30)] = "DragEnded"));
        })(tt || (tt = {}));
        let nt = class extends Y {
          remoteInstanceId;
          deltaValue = 30;
          pointConverter;
          capturer;
          appElements = [];
          handlers = [];
          lockAppElements;
          buttonSubscription;
          cursorSubscription;
          dropTarget;
          draggedElement;
          dragData;
          isDestroyed = !1;
          actionQueue = [];
          constructor() {
            (super(),
              (0, m.x$)().info("Creating drag service"),
              (0, S.ZU)(),
              this.resetState(),
              (this.pointConverter = new Z(
                I.screen,
                c.i.provideProxy("tvd:main-service"),
              )),
              (this.capturer = (function () {
                if (!Q)
                  if ((0, _.Um)()) {
                    const t = n(76699).screen;
                    Q = new J(t);
                  } else Q = new K();
                return Q;
              })()),
              this.handlers.push((0, P.l)()),
              (0, X.wK)(this.watchActions()),
              this.stateChanged.subscribe({
                next: (t) => {
                  this.onStateUpdated(t);
                },
              }));
          }
          onStateUpdated(t) {
            let e = t.stage ?? tt.NoDrag,
              n = () => Promise.resolve();
            (t.isRequestedDragStart &&
              !t.isInDrag &&
              ((e = tt.DragStarted), (n = this.handleDragStart)),
              t.isInDrag &&
                (t.leftPressed
                  ? ((e = tt.InDrag), (n = this.handleDrag))
                  : ((e = tt.DragEnded), (n = this.handleDragEnd))));
            const s = { value: e, atomic: e !== tt.InDrag, run: n.bind(this) };
            this.actionQueue.push({ dragAction: s, stateSnapshot: t });
          }
          async watchActions() {
            for (; !this.isDestroyed; )
              try {
                if (0 === this.actionQueue.length) {
                  await (0, X._v)(1);
                  continue;
                }
                let t;
                this.actionQueue.length >= 10 &&
                  (this.actionQueue = this.reduceActions(this.actionQueue));
                let e = !1,
                  n = 0;
                for (; !e && n <= this.actionQueue.length - 1; ) {
                  t = this.actionQueue.shift();
                  const s =
                      t &&
                      t.dragAction.value < this.state.lastDragAction &&
                      t.dragAction.value !== tt.NoDrag,
                    r =
                      t &&
                      t.dragAction.value === this.state.lastDragAction &&
                      t.dragAction.atomic;
                  !t || s || r ? n++ : (e = !0);
                }
                if (!e || !t) {
                  await (0, X._v)(1);
                  continue;
                }
                (console.log(
                  `Last action: ${this.mapActionToString(this.state.lastDragAction)}, will do action: ${this.mapActionToString(t.dragAction.value)}`,
                ),
                  this.setState({ lastDragAction: t.dragAction.value }, !1),
                  await t.dragAction.run(t.stateSnapshot),
                  console.log(
                    `Handled action: ${this.mapActionToString(t.dragAction.value)}`,
                  ));
              } catch (t) {
                (0, m.x$)().error(
                  "[NativeDragService:watchActions] error in main cycle",
                  t,
                );
              }
          }
          mapActionToString(t) {
            switch (t) {
              case tt.NoDrag:
                return "NoDrag";
              case tt.InDrag:
                return "InDrag";
              case tt.DragStarted:
                return "DragStart";
              case tt.DragEnded:
                return "DragEnd";
              default:
                return "";
            }
          }
          reduceActions(t) {
            let e = 0;
            const n = [];
            n.push(t[0]);
            for (let r = 0; r < t.length - 2; r++) {
              const i = t[r],
                o = t[r + 1];
              ((s = o),
                i.dragAction.value !== s.dragAction.value || e >= 5
                  ? (n.push(o), (e = 0))
                  : ((n[n.length - 1] = o), e++));
            }
            var s;
            return n;
          }
          async startDrag(t) {
            (this.state.isInDrag &&
              ((0, m.x$)().warn(
                "[NativeDragService:startDrag] Incorrect drag state, will call reset",
              ),
              this.resetState()),
              (0, m.x$)().info(`Starting drag tab [${(0, T.uJ)(t)}]`),
              this.subscribeToPointerCapture());
            const e = this.lockAppElements
                ? await this.lockAppElements
                : this.appElements,
              n = await R().getDragElements(),
              s = e.filter((t) => !n.includes(t.id));
            if (s.length > 0) for (const t of s) await this.unregister(t.id);
            await this.lockAppElements;
            for (const t of e)
              try {
                t.cachedWindowBounds = await t.window.getWindowBounds();
              } catch (e) {
                (console.warn(
                  "[NativeDragService:startDrag] Error getting window bounds",
                ),
                  console.log(e),
                  this.unregister(t.id));
              }
            ((this.dragData = { tabId: t }),
              this.setState({
                position: this.state.position,
                isRequestedDragStart: !0,
                dragStartElementId: t,
              }));
          }
          resetState() {
            ((this.state = {
              isInDrag: !1,
              leftPressed: this.state.leftPressed,
              isRequestedDragStart: void 0,
              position: void 0,
              lastDragAction: tt.NoDrag,
            }),
              (this.draggedElement = void 0),
              this.appElements.forEach((t) => {
                t.cachedWindowBounds = void 0;
              }),
              (this.dropTarget = void 0),
              this.unsubscripeFromPointerCapture());
          }
          getIsInDrag() {
            return this.state.isInDrag && this.state.leftPressed;
          }
          getDragData() {
            return this.dragData;
          }
          setDragData(t) {
            this.dragData = t;
          }
          getCursorPosition() {
            return this.state.position;
          }
          registerHandler(t) {
            this.handlers.push(t);
          }
          async registerDraggable(t, e) {
            await this.registerElement(t, e, { draggable: !0 });
          }
          async registerDroppable(t, e) {
            await this.registerElement(t, e, { droppable: !0 });
          }
          async unregister(t) {
            ((0, m.x$)().debug(
              `NativeDragService.unregister(): "Will unregister: ${(0, T.uJ)(t)}"`,
            ),
              this.lockAppElements && (await this.lockAppElements),
              (this.lockAppElements = new Promise((e) => {
                (this.clearElements(t), e(this.appElements));
              })));
          }
          async getHoveredWindowBounds() {
            if (!this.state.position) return;
            const t = await R().getActiveWindowsBounds();
            for (const e of t) if (q(e.bounds, this.state.position)) return e;
            return t[0];
          }
          async handleDragStart(t) {
            if (!t.position || !t.dragStartElementId)
              return void (0, m.x$)().warn(
                `Abort drag start: position = ${JSON.stringify(t.position)}, dragStartElementId = ${JSON.stringify(t.dragStartElementId)}`,
              );
            const e = this.appElements.find(
              (e) => e.id === t.dragStartElementId && e.draggable,
            );
            if (!e?.cachedWindowBounds)
              return void console.error(
                "no dragged element or no cached bounds",
              );
            let n = G(t.position, e.cachedWindowBounds);
            const s = await e.remoteInstance.getBounds();
            ((n = {
              x: Math.min(Math.abs(n.x), s.x + s.width),
              y: Math.min(Math.abs(n.y), s.y + s.height),
            }),
              await e.remoteInstance.onDragStart(n),
              (this.draggedElement = e));
            const r = await this.findElement(
              (t) => !!t.droppable,
              await e.window.getWindowId(),
              n,
              this.deltaValue,
            );
            (r &&
              (await r.remoteInstance.onDragEnter(n), (this.dropTarget = r)),
              this.setState(
                {
                  isInDrag: !0,
                  isRequestedDragStart: !1,
                  dragStartElementId: void 0,
                },
                !1,
              ),
              this.handlers.forEach((t) => t.handleDragStart()));
          }
          async handleDragEnd(t) {
            if (!t.position) return void (0, m.x$)().warn("Abort drag end");
            let e = "";
            const n = await this.getHoveredWindowBounds();
            if (n) {
              const s = G(t.position, n.bounds),
                r = await this.findElement(
                  (t) => !!t.droppable,
                  n.id,
                  s,
                  this.deltaValue,
                );
              r && (await r.remoteInstance.onDrop(s), (e = r.id));
            }
            if (this.draggedElement?.cachedWindowBounds) {
              const n = G(t.position, this.draggedElement.cachedWindowBounds);
              await this.draggedElement.remoteInstance.onDragEnd(n, e);
            }
            ((this.draggedElement = void 0),
              this.appElements.forEach((t) => {
                t.cachedWindowBounds = void 0;
              }),
              this.setState({ isInDrag: !1 }),
              this.unsubscripeFromPointerCapture(),
              (this.dropTarget = void 0),
              this.handlers.forEach((t) => t.handleDragEnd()));
          }
          async handleDrag(t) {
            const e = await this.getHoveredWindowBounds();
            if (!t.position || !e) return;
            const n = G(t.position, e.bounds);
            let s;
            if (this.dropTarget) {
              const e =
                this.dropTarget.cachedWindowBounds ??
                (await this.dropTarget.window.getWindowBounds());
              s = G(t.position, e);
            }
            const r = await this.findElement(
              (t) => !!t.droppable,
              e.id,
              n,
              this.deltaValue,
            );
            if (r)
              return this.dropTarget
                ? void (this.dropTarget.id !== r.id
                    ? (s &&
                        (await this.dropTarget.remoteInstance.onDragLeave(s)),
                      await r.remoteInstance.onDragEnter(n),
                      (this.dropTarget = r))
                    : await r.remoteInstance.onDragOver(n))
                : (await r.remoteInstance.onDragEnter(n),
                  void (this.dropTarget = r));
            this.dropTarget &&
              s &&
              (await this.dropTarget.remoteInstance.onDragLeave(s),
              (this.dropTarget = void 0));
          }
          async findElement(t, e, n, s) {
            const r = this.lockAppElements
              ? await this.lockAppElements
              : this.appElements;
            for (const i of r)
              if (
                (this.lockAppElements
                  ? await this.lockAppElements
                  : this.appElements
                ).includes(i) &&
                t(i) &&
                (i.window.disposed() ||
                  (await i.window.getAllowMouseEvents())) &&
                (await i.window.getWindowId()) === e
              )
                try {
                  const t = await i.remoteInstance.getBounds(),
                    e = (0, _.Um)() && !("rtl" === window.document.dir),
                    r = 76,
                    o = n.x < 8 + r;
                  if ((e && o && (t.x = t.x + s + 8), q(t, n, s))) return i;
                } catch (t) {
                  ((0, m.x$)().error(
                    `[NativeDragService.findElement()] Error getting element bounds for ${i.id}`,
                    t,
                  ),
                    this.unregister(i.id));
                }
          }
          async registerElement(t, e, n) {
            let s;
            try {
              s = c.i.provideProxy(t);
            } catch (e) {
              return void (0, m.x$)().error(
                `[NativeDragService.registerElement()] Failed to register ${t}`,
                e,
              );
            }
            const r = a.hx.createForInstance(e);
            if (!r)
              return void console.warn(`Could not find window with id: ${e}`);
            const i = {
              id: t,
              remoteInstance: s,
              window: r,
              droppable: n?.droppable,
              draggable: n?.draggable,
            };
            (this.lockAppElements && (await this.lockAppElements),
              (this.lockAppElements = new Promise((t) => {
                (this.appElements.push(i), t(this.appElements));
              })));
          }
          clearElements(t) {
            const e = [];
            for (const n of this.appElements) n.id !== t && e.push(n);
            return (
              this.draggedElement?.id === t && (this.draggedElement = void 0),
              this.dropTarget?.id === t && (this.dropTarget = void 0),
              (this.appElements = e),
              this.appElements
            );
          }
          subscribeToPointerCapture() {
            ((this.state.leftPressed = V(w.Left)),
              (this.state.position = I.screen.getCursorScreenPoint()),
              (0, m.x$)().debug(
                `Initial drag state prepared: leftPressed = ${this.state.leftPressed}, position = ${JSON.stringify(this.state.position)}`,
              ),
              this.buttonSubscription ||
                (this.buttonSubscription = this.capturer
                  .onButtons()
                  .subscribe((t) => {
                    t.left === v.Down
                      ? this.setState({ leftPressed: !0 })
                      : t.left === v.Up
                        ? this.setState({
                            leftPressed: !1,
                            lastDragAction: tt.NoDrag,
                          })
                        : (0, m.x$)().warn("Received ButtonEvent.None event");
                  })),
              this.cursorSubscription ||
                (this.cursorSubscription = this.capturer
                  .onMotion()
                  .subscribe((t) => {
                    this.setState({
                      position:
                        this.pointConverter.fromMotionEventToScreenPoint(t),
                    });
                  })));
          }
          unsubscripeFromPointerCapture() {
            (this.cursorSubscription?.unsubscribe(),
              this.buttonSubscription?.unsubscribe(),
              (this.cursorSubscription = void 0),
              (this.buttonSubscription = void 0));
          }
          dispose() {
            ((this.isDestroyed = !0),
              this.pointConverter.dispose(),
              this.unsubscripeFromPointerCapture());
          }
        };
        (et([D.t], nt.prototype, "setDragData", null),
          et([D.t], nt.prototype, "registerHandler", null),
          et([D.t], nt.prototype, "registerDraggable", null),
          et([D.t], nt.prototype, "registerDroppable", null),
          et([D.t], nt.prototype, "handleDragStart", null),
          et([D.t], nt.prototype, "handleDragEnd", null),
          (nt = et(
            [(0, c.L)(y.kx, c.i.getProvider()), (0, D.r)("NativeDragService")],
            nt,
          )),
          c.i.initializeRpc(),
          a.Pd.exists || a.Pd.initialize((0, a.kS)()),
          n(96893),
          (0, i.sX)(),
          (0, o.g)(3e3),
          (function () {
            (b().diagnostics.setLogHandler((t, e) => {
              switch (e) {
                case m.in.Debug:
                  (0, m.M2)().debug(t);
                  break;
                case m.in.Warn:
                  (0, m.M2)().warn(t);
                  break;
                case m.in.Error:
                  (0, m.M2)().error(t);
                  break;
                case m.in.Info:
                default:
                  (0, m.M2)().info(t);
              }
            }),
              console.log("Initialized native interop"));
            const t = c.i.provide(y.kx);
            window.addEventListener("beforeunload", () => {
              (console.warn("Disposing drag services"),
                t?.dispose(),
                (function () {
                  if (void 0 !== typeof g)
                    try {
                      b().shutdown();
                    } catch {}
                })());
            });
          })());
        const st = document.getElementById("root");
        st && (0, r.s)(st).render(s.createElement(s.Fragment, null));
      },
      28430: (t, e, n) => {
        n.d(e, { P: () => b });
        var s = n(72298),
          r = n(13855),
          i = n(97003),
          o = n(59391),
          a = n(91277),
          c = n(23577),
          d = n(79946),
          l = n(66872),
          h = n(23935);
        const u = 3e5;
        let g = !1;
        class p {
          instances = [];
          senders = new Map();
          aliveSenders = [];
          cleanSubscriptionsInterval;
          isClearIntervalSuccess = !0;
          constructor(t) {
            this.cleanSubscriptionsInterval = global.setInterval(
              () => (0, o.wK)(this.cleanSubscriptions()),
              u,
            );
            const e = {
              [l._$]: (t) => {
                const e = t.body;
                g = !0;
                try {
                  const n = i.UT.instance.create(e.contracts),
                    s = t.context?.sender;
                  this.senders.get(s.id) || this.senders.set(s.id, s);
                  const r = this.instances.find((t) =>
                    t.id.includes(e.contracts[0]),
                  );
                  if (r) d.VT.response(t, { instanceId: r.id });
                  else {
                    const e = this.addInstance(n);
                    d.VT.response(t, { instanceId: e });
                  }
                } finally {
                  g = !1;
                }
              },
              [l.GT]: (t) => {
                const e = t.body;
                let n;
                try {
                  n = this.getRequestedInstanceEntry(e);
                } catch (t) {
                  const n = (0, i.UD)(t);
                  (0, r.M2)().error(
                    `[RemoteInstanceManager()] Error while invoke (${e.method}):${n}`,
                    t,
                  );
                }
                if (!n) return;
                const s = n.instance,
                  o = l.R8(e.args, (n) => {
                    const s = t.context?.sender;
                    return h.h.createForInstance(n, s, void 0, e.args);
                  });
                let a = s[e.method];
                if ((a || "function" != typeof s || (a = s), void 0 === a))
                  return void d.VT.responseFailure(
                    t,
                    `Instance (${e.instanceId}) does not provide invocable property: (${e.method})`,
                  );
                const c = a.apply(s, o);
                c instanceof Promise
                  ? c
                      .then((e) => {
                        const n = "function" == typeof e,
                          s = !e || "object" != typeof e,
                          r =
                            !!e &&
                            this.instances.find(
                              (t) =>
                                t.instance.windowPersistentId ===
                                e.windowPersistentId,
                            );
                        n || s || !(0, i.D9)(e) || !r
                          ? d.VT.response(t, l.k2(e))
                          : d.VT.response(t, {
                              dispatchedRemoteInstanceId: r.id,
                            });
                      })
                      .catch((e) => {
                        d.VT.responseFailure(t, e);
                      })
                  : d.VT.response(t, l.k2(c));
              },
              [l.Ez]: (t) => {
                const e = t.context?.sender;
                this.senders.get(e.id) || this.senders.set(e.id, e);
                const n = t.body;
                let s;
                try {
                  s = this.getRequestedInstanceEntry(n);
                } catch (t) {
                  const e = (0, i.UD)(t);
                  (0, r.M2)().error(
                    `[RemoteInstanceManager()] Error while subscribe (${n.method}):${e}`,
                    t,
                  );
                }
                s && s.eventSubscribe(t);
              },
              [l.qy]: (t) => {
                const e = t.body;
                try {
                  this.getRequestedInstanceEntry(e).eventUnsubscribe(e);
                } catch (t) {
                  const n = (0, i.UD)(t);
                  (0, r.M2)().error(
                    `[RemoteInstanceManager()] Error while unsubscribe (${e.method}):${n}`,
                    t,
                  );
                }
              },
              [l.E6]: (t) => {
                const e = t.body;
                let n;
                try {
                  n = this.getRequestedInstanceEntry(e);
                } catch (t) {
                  const n = (0, i.UD)(t);
                  (0, r.M2)().error(
                    `[RemoteInstanceManager()] Error while event next (${e.method}):${n}`,
                    t,
                  );
                }
                if (!n) return;
                const s = n.instance[e.method];
                s && s.next
                  ? (s.next(e.args[0]), d.VT.response(t, void 0))
                  : d.VT.responseFailure(
                      t,
                      `Instance (${e.instanceId}) does not provide nextable subject: (${e.method})`,
                    );
              },
              [l.QK]: (t) => {
                const e = t.body;
                let n;
                try {
                  n = this.getRequestedInstanceEntry(e.instanceId);
                } catch (t) {
                  const n = (0, i.UD)(t);
                  (0, r.M2)().error(
                    `[RemoteInstanceManager()] Error while message reflect (${e.instanceId}):${n}`,
                    t,
                  );
                }
                if (!n) return;
                const s = e.aspects ?? [],
                  o = (0, i.vO)(n.instance, ...s);
                d.VT.response(t, o);
              },
              [l.XK]: (t) => {
                const e = t.body.instanceId;
                this.closeInstance(e);
              },
              [l.uY]: (t) => {
                d.VT.response(t, { aliveSenderId: t.body.aliveSenderId });
              },
            };
            t.onRequest.subscribe((t) => {
              const n = d.VT.headerValue(t, l.zQ);
              try {
                n && n in e && e[n](t);
              } catch (e) {
                d.VT.responseFailure(t, e);
              }
            });
          }
          addInstance(t) {
            const e = new a.X(t);
            return (this.instances.push(e), e.id);
          }
          closeInstance(t) {
            const e = this.instances.findIndex((e) => e.id === t);
            e < 0 || this.instances.splice(e, 1)[0].dispose();
          }
          clearSubscriptionsInterval() {
            clearInterval(this.cleanSubscriptionsInterval);
          }
          async cleanSubscriptions() {
            (s.ipcMain &&
              (0, r.M2)().debug("RemoteInstanceManager.cleanSubscriptions()"),
              this.isClearIntervalSuccess ||
                (this.clearSubscriptionsInterval(),
                (this.isClearIntervalSuccess = !0),
                (this.cleanSubscriptionsInterval = global.setInterval(
                  () => (0, o.wK)(this.cleanSubscriptions()),
                  u,
                ))),
              (this.isClearIntervalSuccess = !1),
              (this.aliveSenders = []));
            try {
              (this.senders.forEach((t) => {
                if (
                  t &&
                  "function" == typeof t.isDestroyed &&
                  !t.isDestroyed()
                ) {
                  const e = {
                      headers: { [l.zQ]: l.uY },
                      body: { aliveSenderId: t.id },
                    },
                    n =
                      t && t.id ? c.w.createForWebContents(t) : c.w.forRenderer;
                  n.send(e)
                    .then((t) => this.aliveSenders.push(t.body.aliveSenderId))
                    .catch((t) =>
                      (0, r.M2)().error(
                        "RemoteInstanceManager().cleanSubscriptions communicator send error",
                        t,
                      ),
                    )
                    .finally(() => {
                      n.dispose();
                    });
                }
              }),
                await (0, o._v)(3e4),
                this.instances.forEach((t) => {
                  t.eventSubscriptions.forEach((e) => {
                    e.subscriptionId.includes("cursorPosition") ||
                      this.aliveSenders.includes(e.senderId) ||
                      t.eventUnsubscribeInternal(e.subscriptionId);
                  });
                }));
              for (const t of this.senders.keys())
                this.aliveSenders.includes(t) || this.senders.delete(t);
              this.isClearIntervalSuccess = !0;
            } catch (t) {
              (0, r.M2)().error(
                'RemoteInstanceManager.cleanSubscriptions(): "communicator send error"',
                t,
              );
            }
          }
          async reflectRemoteInstance(t, e, n) {
            const s = { instanceId: e, aspects: n },
              r = await t.send({ headers: { [l.zQ]: l.QK }, body: s });
            return d.VT.getResponseBody(r);
          }
          getRequestedInstanceEntry(t) {
            const e = "string" == typeof t ? t : t.instanceId,
              n = this.instances.find((t) => t.id === e);
            if (!n) {
              const n = (() => {
                if ("string" == typeof t) return `Instance (${e}) not found`;
                {
                  const e = 10;
                  let n = JSON.stringify(t.args);
                  return (
                    n.length > e && (n = `${n.substr(0, e)}...`),
                    `(${t.instanceId}).(${t.method})(${n}): instance not found`
                  );
                }
              })();
              throw new Error(n);
            }
            return n;
          }
        }
        class b {
          static hostInstance = null;
          instanceManager;
          static initialize(t) {
            if (b.hostInstance)
              throw new Error("Service host already initialized");
            ((b.hostInstance = new b(t)), (0, d.P3)(b.hostInstance));
          }
          static get instance() {
            if (null === b.hostInstance)
              throw new Error("ServiceHost not initialized");
            return b.hostInstance;
          }
          static get exists() {
            return null !== b.hostInstance;
          }
          static destroy() {
            (this.hostInstance?.instanceManager.clearSubscriptionsInterval(),
              (this.hostInstance = null));
          }
          constructor(t) {
            this.instanceManager = new p(t);
          }
          registerRemoteInstance(t) {
            return this.instanceManager.addInstance(t);
          }
          unregisterRemoteInstance(t, e) {
            e
              ? setTimeout(() => this.instanceManager.closeInstance(t), e)
              : this.instanceManager.closeInstance(t);
          }
          reflectRemoteInstance(t, e, n) {
            return this.instanceManager.reflectRemoteInstance(t, e, n);
          }
        }
        let f = class {
          tryCreate(t, ...e) {
            if (!b.exists || g) return;
            const n = t instanceof Array ? t : [t];
            return h.h.createForContracts(n);
          }
          reflectInstance(t, ...e) {
            if (!b.exists) return;
            if (h.h.isProxy(t)) {
              if (!b.exists)
                throw new Error(
                  "Attempt to reflect ipc-service-instance but ServiceHost instance does not exists",
                );
              return (async () => {
                const n = await t.ipcProxyInstanceId();
                return b.instance.reflectRemoteInstance(
                  t.ipcProxyCommunicator(),
                  n,
                  e,
                );
              })();
            }
            const n = (0, i.vO)(t);
            return n ? Promise.resolve(n) : void 0;
          }
        };
        f = (function (t, e, n, s) {
          var r,
            i = arguments.length,
            o =
              i < 3
                ? e
                : null === s
                  ? (s = Object.getOwnPropertyDescriptor(e, n))
                  : s;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            o = Reflect.decorate(t, e, n, s);
          else
            for (var a = t.length - 1; a >= 0; a--)
              (r = t[a]) &&
                (o = (i < 3 ? r(o) : i > 3 ? r(e, n, o) : r(e, n)) || o);
          return (i > 3 && o && Object.defineProperty(e, n, o), o);
        })([(0, i.nt)()], f);
      },
      36458: (t, e, n) => {
        function s(t, e) {
          return (n) => {
            const s = (() => {
              let t = null;
              return (...e) => (
                e.length > 0 &&
                  console.error(
                    `Service (${n.name}) exposed as singleton and can not accept any construction arguments.`,
                  ),
                null === t && (t = new n()),
                t
              );
            })();
            e.registerFactory(t, s);
          };
        }
        (n.d(e, { L: () => s, i: () => r }), n(96485));
        var r = n(21810);
      },
      52364: (t, e, n) => {
        n.d(e, { iC: () => s, in: () => r });
        const s = "tvd:logger-service";
        var r;
        !(function (t) {
          ((t[(t.Debug = 0)] = "Debug"),
            (t[(t.Info = 1)] = "Info"),
            (t[(t.Warn = 2)] = "Warn"),
            (t[(t.Error = 3)] = "Error"));
        })(r || (r = {}));
      },
      13855: (t, e, n) => {
        n.d(e, { in: () => i.in, kK: () => o, M2: () => a, x$: () => c });
        var s = n(72298),
          r = n(36458),
          i = n(52364);
        function o() {
          return s.ipcMain
            ? r.i.getProvider().provide(i.iC)
            : r.i.provideProxy(i.iC);
        }
        function a() {
          return r.i.provide(i.iC);
        }
        function c() {
          return r.i.provideProxy(i.iC);
        }
      },
      55442: (t, e, n) => {
        n.d(e, {
          sX: () => s.s,
          Ex: () => r.E,
          n_: () => i.n_,
          YA: () => i.YA,
        });
        var s = n(17066),
          r = n(18737),
          i = n(10496);
      },
      18737: (t, e, n) => {
        n.d(e, { E: () => r });
        var s = n(77118);
        function r(t) {
          (0, s.nZ)().setTag("customError", t);
        }
      },
      94850: (t, e, n) => {
        n.d(e, { Y1: () => s, E$: () => r });
        const s = "tvd:tabs-container",
          r = "tvd:tab";
      },
      96203: (t, e, n) => {
        n.d(e, { kx: () => r, N8: () => i, rw: () => o });
        var s = n(36458);
        const r = "tvd:drag-service";
        function i() {
          return s.i.provideProxy(r);
        }
        const o = { x: 0, y: 0, width: 0, height: 0 };
      },
      29060: (t, e, n) => {
        n.d(e, { mZ: () => s });
        const s = "tvd:common-view-ready";
      },
      39985: (t, e, n) => {
        n.d(e, { f: () => s });
        const s = Symbol("ServiceContracts");
      },
      58789: (t, e, n) => {
        n.d(e, { ZJ: () => s, xj: () => o, vO: () => a });
        var s,
          r = n(80271),
          i = n(39985);
        function o(t) {
          return "object" == typeof t && t.reflectInstance instanceof Function;
        }
        function a(t, ...e) {
          if ("object" != typeof t || !t) return;
          const n = (t) => !e || 0 === e.length || e.includes(t),
            o = [];
          if (n(s.Contracts))
            for (const e of (function* (t) {
              if ("object" == typeof t && t) {
                let e = t.constructor;
                for (; e; ) {
                  yield e;
                  const t = Object.getPrototypeOf(e);
                  if ("function" != typeof t || t === Object) break;
                  e = t;
                }
              }
            })(t)) {
              const t = e ? Reflect.getMetadata(i.f, e) : void 0;
              t && o.push(...t);
            }
          const a = [];
          if (n(s.Methods))
            for (const { key: e, value: n } of (function* (t) {
              const e = ["constructor", "isMounted", "replaceState"];
              if ("object" == typeof t && t) {
                let n = t;
                for (; n && n.constructor !== Object; ) {
                  const s = Object.getOwnPropertyNames(n).filter(
                    (t) => !e.includes(t),
                  );
                  for (const e of s)
                    try {
                      const n = t[e];
                      yield { key: e, value: n };
                    } catch (t) {
                      console.error(
                        `Fail to get property [${e}]: ${(0, r.U)(t)}`,
                      );
                    }
                  n = Object.getPrototypeOf(n);
                }
              }
            })(t))
              n instanceof Function && a.push({ name: e });
          return { contracts: o, methods: a };
        }
        !(function (t) {
          ((t[(t.Contracts = 0)] = "Contracts"),
            (t[(t.Methods = 1)] = "Methods"));
        })(s || (s = {}));
      },
      94232: (t, e, n) => {
        n.d(e, { U: () => r });
        var s = n(58789);
        class r {
          static instance = new r();
          factories = [];
          providers = [];
          registerFactory(t) {
            this.factories.push(t);
          }
          registerProvider(t) {
            this.providers.push(t);
          }
          tryCreate(t, ...e) {
            const n = t instanceof Array ? t : [t];
            for (const t of this.factories) {
              const s = t(n, ...e);
              if (s) return s;
            }
            for (const t of this.providers) {
              const s = t.tryCreate(n, ...e);
              if (s) return s;
            }
          }
          create(t, ...e) {
            const n = this.tryCreate(t, ...e);
            if (!n) {
              const e = t instanceof Array ? t.join(";") : t;
              throw new Error(
                `Local service with contracts [${e}] not registered, and remoting not configured. Instance can not be created.`,
              );
            }
            return n;
          }
          reflectInstance(t, ...e) {
            for (const n of this.providers)
              if ((0, s.xj)(n)) {
                const s = n.reflectInstance(t, ...e);
                if (s) return s;
              }
            throw new Error(
              "System does not provide acceptable Service Reflector instance",
            );
          }
        }
      },
      9448: (t, e, n) => {
        n.d(e, { o: () => r });
        var s = n(13855);
        const r = (t, e) => {
          try {
            return JSON.parse(t, e);
          } catch (t) {
            return ((0, s.kK)().error("jsonParse JSON.parse error", t), null);
          }
        };
      },
      72298: (t) => {
        t.exports = require("electron");
      },
      57147: (t) => {
        t.exports = require("fs");
      },
      71017: (t) => {
        t.exports = require("path");
      },
      57310: (t) => {
        t.exports = require("url");
      },
    },
    r = {};
  function i(t) {
    var e = r[t];
    if (void 0 !== e) return e.exports;
    var n = (r[t] = { id: t, exports: {} });
    return (s[t].call(n.exports, n, n.exports, i), n.exports);
  }
  ((i.m = s),
    (t = []),
    (i.O = (e, n, s, r) => {
      if (!n) {
        var o = 1 / 0;
        for (l = 0; l < t.length; l++) {
          for (var [n, s, r] = t[l], a = !0, c = 0; c < n.length; c++)
            (!1 & r || o >= r) && Object.keys(i.O).every((t) => i.O[t](n[c]))
              ? n.splice(c--, 1)
              : ((a = !1), r < o && (o = r));
          if (a) {
            t.splice(l--, 1);
            var d = s();
            void 0 !== d && (e = d);
          }
        }
        return e;
      }
      r = r || 0;
      for (var l = t.length; l > 0 && t[l - 1][2] > r; l--) t[l] = t[l - 1];
      t[l] = [n, s, r];
    }),
    (i.n = (t) => {
      var e = t && t.__esModule ? () => t.default : () => t;
      return (i.d(e, { a: e }), e);
    }),
    (n = Object.getPrototypeOf
      ? (t) => Object.getPrototypeOf(t)
      : (t) => t.__proto__),
    (i.t = function (t, s) {
      if ((1 & s && (t = this(t)), 8 & s)) return t;
      if ("object" == typeof t && t) {
        if (4 & s && t.__esModule) return t;
        if (16 & s && "function" == typeof t.then) return t;
      }
      var r = Object.create(null);
      i.r(r);
      var o = {};
      e = e || [null, n({}), n([]), n(n)];
      for (var a = 2 & s && t; "object" == typeof a && !~e.indexOf(a); a = n(a))
        Object.getOwnPropertyNames(a).forEach((e) => (o[e] = () => t[e]));
      return ((o.default = () => t), i.d(r, o), r);
    }),
    (i.d = (t, e) => {
      for (var n in e)
        i.o(e, n) &&
          !i.o(t, n) &&
          Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
    }),
    (i.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (i.r = (t) => {
      ("undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 }));
    }),
    (() => {
      var t;
      i.g.importScripts && (t = i.g.location + "");
      var e = i.g.document;
      if (!t && e && (e.currentScript && (t = e.currentScript.src), !t)) {
        var n = e.getElementsByTagName("script");
        n.length && (t = n[n.length - 1].src);
      }
      if (!t)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      ((t = t
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (i.p = t + "../../"));
    })(),
    (() => {
      i.b = document.baseURI || self.location.href;
      var t = { 4648: 0 };
      i.O.j = (e) => 0 === t[e];
      var e = (e, n) => {
          var s,
            r,
            [o, a, c] = n,
            d = 0;
          if (o.some((e) => 0 !== t[e])) {
            for (s in a) i.o(a, s) && (i.m[s] = a[s]);
            if (c) var l = c(i);
          }
          for (e && e(n); d < o.length; d++)
            ((r = o[d]), i.o(t, r) && t[r] && t[r][0](), (t[o[d]] = 0));
          return i.O(l);
        },
        n = (global.webpackChunktradingview_desktop =
          global.webpackChunktradingview_desktop || []);
      (n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n))));
    })());
  var o = i.O(
    void 0,
    [7498, 686, 8078, 4637, 3160, 7980, 819, 914, 6086, 1160],
    () => i(12582),
  );
  o = i.O(o);
})();
