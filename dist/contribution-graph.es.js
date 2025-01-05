(function(){"use strict";try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode(".contribution-graph{max-width:100%;overflow-x:auto;padding:8px;border-radius:6px;display:flex;justify-content:flex-start}.contribution-wrapper{display:inline-flex;flex-direction:column;gap:4px;flex-shrink:0}.contribution-row{display:flex;gap:4px;flex-shrink:0}.contribution-square{width:12px;height:12px;border-radius:2px;transition:background-color .2s ease;aspect-ratio:1;flex-shrink:0}.contribution-loading{display:flex;align-items:center;justify-content:center;padding:20px;min-height:100px}.contribution-error{display:flex;align-items:center;justify-content:center;padding:20px}@media (max-width: 640px){.contribution-graph{padding:4px}.contribution-wrapper,.contribution-row{gap:2px}.contribution-square{width:8px;height:8px}}")),document.head.appendChild(i)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import jr, { useState as rr, useEffect as le } from "react";
var B = { exports: {} }, I = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Or;
function ce() {
  if (Or) return I;
  Or = 1;
  var b = jr, d = Symbol.for("react.element"), S = Symbol.for("react.fragment"), E = Object.prototype.hasOwnProperty, w = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, C = { key: !0, ref: !0, __self: !0, __source: !0 };
  function R(m, c, T) {
    var v, h = {}, O = null, F = null;
    T !== void 0 && (O = "" + T), c.key !== void 0 && (O = "" + c.key), c.ref !== void 0 && (F = c.ref);
    for (v in c) E.call(c, v) && !C.hasOwnProperty(v) && (h[v] = c[v]);
    if (m && m.defaultProps) for (v in c = m.defaultProps, c) h[v] === void 0 && (h[v] = c[v]);
    return { $$typeof: d, type: m, key: O, ref: F, props: h, _owner: w.current };
  }
  return I.Fragment = S, I.jsx = R, I.jsxs = R, I;
}
var N = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pr;
function fe() {
  return Pr || (Pr = 1, process.env.NODE_ENV !== "production" && function() {
    var b = jr, d = Symbol.for("react.element"), S = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), m = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), W = Symbol.iterator, A = "@@iterator";
    function _(r) {
      if (r === null || typeof r != "object")
        return null;
      var e = W && r[W] || r[A];
      return typeof e == "function" ? e : null;
    }
    var g = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function f(r) {
      {
        for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
          t[n - 1] = arguments[n];
        G("error", r, t);
      }
    }
    function G(r, e, t) {
      {
        var n = g.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (e += "%s", t = t.concat([i]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + e), Function.prototype.apply.call(console[r], console, u);
      }
    }
    var kr = !1, Dr = !1, Fr = !1, Ar = !1, $r = !1, er;
    er = Symbol.for("react.module.reference");
    function Ir(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === E || r === C || $r || r === w || r === T || r === v || Ar || r === F || kr || Dr || Fr || typeof r == "object" && r !== null && (r.$$typeof === O || r.$$typeof === h || r.$$typeof === R || r.$$typeof === m || r.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === er || r.getModuleId !== void 0));
    }
    function Nr(r, e, t) {
      var n = r.displayName;
      if (n)
        return n;
      var i = e.displayName || e.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function tr(r) {
      return r.displayName || "Context";
    }
    function x(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case E:
          return "Fragment";
        case S:
          return "Portal";
        case C:
          return "Profiler";
        case w:
          return "StrictMode";
        case T:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case m:
            var e = r;
            return tr(e) + ".Consumer";
          case R:
            var t = r;
            return tr(t._context) + ".Provider";
          case c:
            return Nr(r, r.render, "ForwardRef");
          case h:
            var n = r.displayName || null;
            return n !== null ? n : x(r.type) || "Memo";
          case O: {
            var i = r, u = i._payload, o = i._init;
            try {
              return x(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, $ = 0, nr, ar, or, ir, ur, sr, lr;
    function cr() {
    }
    cr.__reactDisabledLog = !0;
    function Yr() {
      {
        if ($ === 0) {
          nr = console.log, ar = console.info, or = console.warn, ir = console.error, ur = console.group, sr = console.groupCollapsed, lr = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: cr,
            writable: !0
          };
          Object.defineProperties(console, {
            info: r,
            log: r,
            warn: r,
            error: r,
            group: r,
            groupCollapsed: r,
            groupEnd: r
          });
        }
        $++;
      }
    }
    function Wr() {
      {
        if ($--, $ === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, r, {
              value: nr
            }),
            info: j({}, r, {
              value: ar
            }),
            warn: j({}, r, {
              value: or
            }),
            error: j({}, r, {
              value: ir
            }),
            group: j({}, r, {
              value: ur
            }),
            groupCollapsed: j({}, r, {
              value: sr
            }),
            groupEnd: j({}, r, {
              value: lr
            })
          });
        }
        $ < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = g.ReactCurrentDispatcher, z;
    function U(r, e, t) {
      {
        if (z === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            z = n && n[1] || "";
          }
        return `
` + z + r;
      }
    }
    var H = !1, L;
    {
      var Ur = typeof WeakMap == "function" ? WeakMap : Map;
      L = new Ur();
    }
    function fr(r, e) {
      if (!r || H)
        return "";
      {
        var t = L.get(r);
        if (t !== void 0)
          return t;
      }
      var n;
      H = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = J.current, J.current = null, Yr();
      try {
        if (e) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (P) {
              n = P;
            }
            Reflect.construct(r, [], o);
          } else {
            try {
              o.call();
            } catch (P) {
              n = P;
            }
            r.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (P) {
            n = P;
          }
          r();
        }
      } catch (P) {
        if (P && n && typeof P.stack == "string") {
          for (var a = P.stack.split(`
`), p = n.stack.split(`
`), s = a.length - 1, l = p.length - 1; s >= 1 && l >= 0 && a[s] !== p[l]; )
            l--;
          for (; s >= 1 && l >= 0; s--, l--)
            if (a[s] !== p[l]) {
              if (s !== 1 || l !== 1)
                do
                  if (s--, l--, l < 0 || a[s] !== p[l]) {
                    var y = `
` + a[s].replace(" at new ", " at ");
                    return r.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", r.displayName)), typeof r == "function" && L.set(r, y), y;
                  }
                while (s >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        H = !1, J.current = u, Wr(), Error.prepareStackTrace = i;
      }
      var D = r ? r.displayName || r.name : "", Tr = D ? U(D) : "";
      return typeof r == "function" && L.set(r, Tr), Tr;
    }
    function Lr(r, e, t) {
      return fr(r, !1);
    }
    function Vr(r) {
      var e = r.prototype;
      return !!(e && e.isReactComponent);
    }
    function V(r, e, t) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return fr(r, Vr(r));
      if (typeof r == "string")
        return U(r);
      switch (r) {
        case T:
          return U("Suspense");
        case v:
          return U("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case c:
            return Lr(r.render);
          case h:
            return V(r.type, e, t);
          case O: {
            var n = r, i = n._payload, u = n._init;
            try {
              return V(u(i), e, t);
            } catch {
            }
          }
        }
      return "";
    }
    var M = Object.prototype.hasOwnProperty, dr = {}, vr = g.ReactDebugCurrentFrame;
    function q(r) {
      if (r) {
        var e = r._owner, t = V(r.type, r._source, e ? e.type : null);
        vr.setExtraStackFrame(t);
      } else
        vr.setExtraStackFrame(null);
    }
    function Mr(r, e, t, n, i) {
      {
        var u = Function.call.bind(M);
        for (var o in r)
          if (u(r, o)) {
            var a = void 0;
            try {
              if (typeof r[o] != "function") {
                var p = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              a = r[o](e, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (q(i), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), q(null)), a instanceof Error && !(a.message in dr) && (dr[a.message] = !0, q(i), f("Failed %s type: %s", t, a.message), q(null));
          }
      }
    }
    var qr = Array.isArray;
    function K(r) {
      return qr(r);
    }
    function Br(r) {
      {
        var e = typeof Symbol == "function" && Symbol.toStringTag, t = e && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return t;
      }
    }
    function Gr(r) {
      try {
        return pr(r), !1;
      } catch {
        return !0;
      }
    }
    function pr(r) {
      return "" + r;
    }
    function br(r) {
      if (Gr(r))
        return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Br(r)), pr(r);
    }
    var hr = g.ReactCurrentOwner, Jr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, gr, Er;
    function zr(r) {
      if (M.call(r, "ref")) {
        var e = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (e && e.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function Hr(r) {
      if (M.call(r, "key")) {
        var e = Object.getOwnPropertyDescriptor(r, "key").get;
        if (e && e.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function Kr(r, e) {
      typeof r.ref == "string" && hr.current;
    }
    function Xr(r, e) {
      {
        var t = function() {
          gr || (gr = !0, f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", e));
        };
        t.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Qr(r, e) {
      {
        var t = function() {
          Er || (Er = !0, f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", e));
        };
        t.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Zr = function(r, e, t, n, i, u, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: d,
        // Built-in properties that belong on the element
        type: r,
        key: e,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function re(r, e, t, n, i) {
      {
        var u, o = {}, a = null, p = null;
        t !== void 0 && (br(t), a = "" + t), Hr(e) && (br(e.key), a = "" + e.key), zr(e) && (p = e.ref, Kr(e, i));
        for (u in e)
          M.call(e, u) && !Jr.hasOwnProperty(u) && (o[u] = e[u]);
        if (r && r.defaultProps) {
          var s = r.defaultProps;
          for (u in s)
            o[u] === void 0 && (o[u] = s[u]);
        }
        if (a || p) {
          var l = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          a && Xr(o, l), p && Qr(o, l);
        }
        return Zr(r, a, p, i, n, hr.current, o);
      }
    }
    var X = g.ReactCurrentOwner, mr = g.ReactDebugCurrentFrame;
    function k(r) {
      if (r) {
        var e = r._owner, t = V(r.type, r._source, e ? e.type : null);
        mr.setExtraStackFrame(t);
      } else
        mr.setExtraStackFrame(null);
    }
    var Q;
    Q = !1;
    function Z(r) {
      return typeof r == "object" && r !== null && r.$$typeof === d;
    }
    function yr() {
      {
        if (X.current) {
          var r = x(X.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function ee(r) {
      return "";
    }
    var _r = {};
    function te(r) {
      {
        var e = yr();
        if (!e) {
          var t = typeof r == "string" ? r : r.displayName || r.name;
          t && (e = `

Check the top-level render call using <` + t + ">.");
        }
        return e;
      }
    }
    function Rr(r, e) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var t = te(e);
        if (_r[t])
          return;
        _r[t] = !0;
        var n = "";
        r && r._owner && r._owner !== X.current && (n = " It was passed a child from " + x(r._owner.type) + "."), k(r), f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), k(null);
      }
    }
    function wr(r, e) {
      {
        if (typeof r != "object")
          return;
        if (K(r))
          for (var t = 0; t < r.length; t++) {
            var n = r[t];
            Z(n) && Rr(n, e);
          }
        else if (Z(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var i = _(r);
          if (typeof i == "function" && i !== r.entries)
            for (var u = i.call(r), o; !(o = u.next()).done; )
              Z(o.value) && Rr(o.value, e);
        }
      }
    }
    function ne(r) {
      {
        var e = r.type;
        if (e == null || typeof e == "string")
          return;
        var t;
        if (typeof e == "function")
          t = e.propTypes;
        else if (typeof e == "object" && (e.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        e.$$typeof === h))
          t = e.propTypes;
        else
          return;
        if (t) {
          var n = x(e);
          Mr(t, r.props, "prop", n, r);
        } else if (e.PropTypes !== void 0 && !Q) {
          Q = !0;
          var i = x(e);
          f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof e.getDefaultProps == "function" && !e.getDefaultProps.isReactClassApproved && f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ae(r) {
      {
        for (var e = Object.keys(r.props), t = 0; t < e.length; t++) {
          var n = e[t];
          if (n !== "children" && n !== "key") {
            k(r), f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), k(null);
            break;
          }
        }
        r.ref !== null && (k(r), f("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    function Cr(r, e, t, n, i, u) {
      {
        var o = Ir(r);
        if (!o) {
          var a = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = ee();
          p ? a += p : a += yr();
          var s;
          r === null ? s = "null" : K(r) ? s = "array" : r !== void 0 && r.$$typeof === d ? (s = "<" + (x(r.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof r, f("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var l = re(r, e, t, i, u);
        if (l == null)
          return l;
        if (o) {
          var y = e.children;
          if (y !== void 0)
            if (n)
              if (K(y)) {
                for (var D = 0; D < y.length; D++)
                  wr(y[D], r);
                Object.freeze && Object.freeze(y);
              } else
                f("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              wr(y, r);
        }
        return r === E ? ae(l) : ne(l), l;
      }
    }
    function oe(r, e, t) {
      return Cr(r, e, t, !0);
    }
    function ie(r, e, t) {
      return Cr(r, e, t, !1);
    }
    var ue = ie, se = oe;
    N.Fragment = E, N.jsx = ue, N.jsxs = se;
  }()), N;
}
var Sr;
function de() {
  return Sr || (Sr = 1, process.env.NODE_ENV === "production" ? B.exports = ce() : B.exports = fe()), B.exports;
}
var Y = de();
const xr = {
  light: {
    background: "#ffffff",
    text: "#24292f",
    loading: "#666666",
    error: "#ff0000",
    colorScheme: {
      0: "#ebedf0",
      1: "#9be9a8",
      2: "#40c463",
      3: "#30a14e",
      4: "#216e39"
    }
  },
  dark: {
    background: "#0d1117",
    text: "#c9d1d9",
    loading: "#8b949e",
    error: "#f85149",
    colorScheme: {
      0: "#161b22",
      1: "#0e4429",
      2: "#006d32",
      3: "#26a641",
      4: "#39d353"
    }
  }
}, ve = "https://api.github.com/graphql", pe = `
  query($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
              weekday
            }
          }
        }
      }
    }
  }
`, be = async (b, d) => {
  var C, R, m;
  if (!b)
    throw new Error("Please provide the Github username");
  if (!d)
    throw new Error("Please provide the Github personal token");
  const S = await fetch(ve, {
    method: "POST",
    headers: {
      Authorization: `bearer ${d}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: pe,
      variables: { username: b }
    })
  });
  if (!S.ok)
    throw new Error("Network response was not ok");
  const E = await S.json();
  if (E.errors)
    throw new Error(E.errors[0].message);
  const w = (m = (R = (C = E.data) == null ? void 0 : C.user) == null ? void 0 : R.contributionsCollection) == null ? void 0 : m.contributionCalendar;
  if (!w)
    throw new Error("No contribution data found");
  return w;
}, he = (b, d) => b === 0 ? d[0] : b <= 3 ? d[1] : b <= 6 ? d[2] : b <= 9 ? d[3] : d[4], Ee = ({
  username: b,
  token: d,
  theme: S = "dark",
  customColorScheme: E,
  loadingComponent: w = ""
}) => {
  const [C, R] = rr([]), [m, c] = rr(!0), [T, v] = rr(null), h = xr[S] || xr.light, O = E || h.colorScheme;
  if (le(() => {
    (async () => {
      try {
        const _ = await be(b, d);
        R(_), c(!1);
      } catch (_) {
        v(_.message || "Failed to fetch contribution data"), c(!1), console.error("Error fetching contributions:", _);
      }
    })();
  }, [b, d]), m)
    return w;
  if (T)
    return /* @__PURE__ */ Y.jsx("div", { style: styles.error(h), children: T });
  const W = Array(7).fill(null).map(
    (A, _) => {
      var g;
      return (g = C.weeks) == null ? void 0 : g.map(
        (f) => f.contributionDays.find((G) => new Date(G.date).getDay() === _) || null
      ).filter(Boolean);
    }
  );
  return /* @__PURE__ */ Y.jsx("div", { className: "contribution-graph", style: { backgroundColor: h.background }, children: /* @__PURE__ */ Y.jsx("div", { className: "contribution-wrapper", children: W.map((A, _) => /* @__PURE__ */ Y.jsx("div", { className: "contribution-row", children: A.map((g, f) => /* @__PURE__ */ Y.jsx(
    "div",
    {
      className: "contribution-square",
      style: { backgroundColor: he(g.contributionCount, O) },
      title: `${g.date}: ${g.contributionCount} contributions`
    },
    `${_}-${f}`
  )) }, _)) }) });
};
export {
  Ee as ContributionGraph,
  xr as themes
};
