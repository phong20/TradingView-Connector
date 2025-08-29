(() => {
  "use strict";
  function e(e) {
    let t,
      r = e;
    return () => {
      if (r) {
        const e = r;
        ((r = void 0), (t = e()));
      }
      return t;
    };
  }
  require("url");
  const t = "TARGET_TVD_HOST",
    r = "https://www.tradingview.com/",
    s = e(() => {
      const e = "http(s?):\\/\\/((\\w|-)*\\.)?tradingview\\.com";
      let s = r;
      return (
        t in process.env && (s = process.env[t] ?? r),
        null !== new RegExp(e, "i").exec(s)
          ? e
          : (s.endsWith("/") && (s = s?.substring(0, s.length - 1)),
            s.replace(/\./gi, "\\.").replace(/\//gi, "\\/"))
      );
    });
  function n(e, t = !0) {
    const r = (e) => {
      let r = e
        .toString()
        .replace(/\./gi, "\\.")
        .replace(/(?<!\))\*/gi, "(.*)");
      return (
        r.match(/\w+(\/\((\.\*\)))/gi) &&
          (r = r.replace(/\/\((\.\*\))/gi, "(/(.*))?")),
        (r = r.replace(/\//gi, "\\/").replace(/\$\{TV\}/gi, s())),
        (r = `^${r}${t ? "$" : ""}`),
        new RegExp(r, "i")
      );
    };
    return "string" == typeof e ? r(e) : e.map(r);
  }
  const c = "${TV}/chart/([a-zA-Z0-9]{0,12})?/?",
    T = "${TV}/(\\w|-)*screener/*";
  (e(() => n(T)),
    e(() => n("${TV}/", !0)),
    e(() => n("${TV}/chart/", !0)),
    e(() => n(c)),
    e(() => n("(${TV}/chart/([a-zA-Z0-9]{0,12})?)/\\?*?")),
    e(() =>
      n(
        "${TV}/chart/[a-z0-9-._~:\\?#@!$&'()*+,;%=]+/[a-z0-9-._~:\\?#@!$&'()*+,;%=]+/",
        !0,
      ),
    ),
    e(() => n("${TV}/screener/*")),
    e(() => n("${TV}/heatmap/*")),
    e(() => n("${TV}/community/*")),
    e(() => n("${TV}/pine-script-docs/en/v5/Introduction.html")),
    e(() => n("${TV}/pine-script-reference/v5/")),
    e(() => n("${TV}/x/*")),
    e(() => n("${TV}/*")),
    e(() => n("${TV}/account-recovery/*")),
    e(() => n("${TV}/chat/*")),
    e(() => /:\/\/s3\..+\/snapshots\//i),
    e(() => n("${TV}/pine/*")),
    e(() => n("${TV}/markets/*")),
    e(() => n("${TV}/markets/*/news/")),
    e(() => n("${TV}/markets/stocks-*/*")),
    e(() => n("${TV}/markets/world-economy/*")),
    e(() => n("${TV}/u/TradingView/")),
    e(() => n("${TV}/news/*")),
    e(() => n("${TV}/news/")),
    e(() => n("${TV}/news/\\?market=*")),
    e(() => n("${TV}/news/\\?market=topstories")),
    e(() => n("${TV}/HTML5-stock-forex-bitcoin-charting-library/")),
    e(() => n("${TV}/support/*")),
    e(() => n("https://status.tradingview.com/", !0)),
    e(() =>
      n([
        "${TV}/news/*",
        "${TV}/support/*",
        "${TV}/house-rules/*",
        "${TV}/key-events/*",
        "${TV}/symbols/*",
        "${TV}/heatmap/*",
        "${TV}/economic-calendar/",
        T,
        "${TV}/ideas/*",
        "${TV}/community/*",
        "${TV}/markets/*",
        "${TV}/sparks/*",
        "${TV}/education/*",
      ]),
    ),
    e(() => n("${TV}/markets/bonds/*")),
    e(() =>
      n([
        c,
        T,
        "${TV}/markets/*",
        "${TV}/symbols/*",
        "${TV}/(\\w|-)*calendar/*",
      ]),
    ),
    localStorage.setItem(t, process.env[t] ?? r));
})();
