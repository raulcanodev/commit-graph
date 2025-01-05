(function(){"use strict";try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode(".contribution-graph{max-width:100%;overflow-x:auto;padding:8px;border-radius:6px;display:flex;justify-content:flex-start}.contribution-wrapper{display:inline-flex;flex-direction:column;gap:4px;flex-shrink:0}.contribution-row{display:flex;gap:4px;flex-shrink:0}.contribution-square{width:12px;height:12px;border-radius:2px;transition:background-color .2s ease;aspect-ratio:1;flex-shrink:0}.contribution-loading{display:flex;align-items:center;justify-content:center;padding:20px;min-height:100px}.contribution-error{display:flex;align-items:center;justify-content:center;padding:20px}@media (max-width: 640px){.contribution-graph{padding:4px}.contribution-wrapper,.contribution-row{gap:2px}.contribution-square{width:8px;height:8px}}")),document.head.appendChild(i)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import ke, { useState as re, useEffect as cr } from "react";
var G = { exports: {} }, $ = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function fr() {
  if (Oe) return $;
  Oe = 1;
  var v = ke, d = Symbol.for("react.element"), P = Symbol.for("react.fragment"), y = Object.prototype.hasOwnProperty, w = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, x = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _(E, c, C) {
    var p, b = {}, T = null, F = null;
    C !== void 0 && (T = "" + C), c.key !== void 0 && (T = "" + c.key), c.ref !== void 0 && (F = c.ref);
    for (p in c) y.call(c, p) && !x.hasOwnProperty(p) && (b[p] = c[p]);
    if (E && E.defaultProps) for (p in c = E.defaultProps, c) b[p] === void 0 && (b[p] = c[p]);
    return { $$typeof: d, type: E, key: T, ref: F, props: b, _owner: w.current };
  }
  return $.Fragment = P, $.jsx = _, $.jsxs = _, $;
}
var W = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function dr() {
  return Pe || (Pe = 1, process.env.NODE_ENV !== "production" && function() {
    var v = ke, d = Symbol.for("react.element"), P = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), E = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), L = Symbol.iterator, A = "@@iterator";
    function R(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = L && e[L] || e[A];
      return typeof r == "function" ? r : null;
    }
    var h = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function f(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        J("error", e, t);
      }
    }
    function J(e, r, t) {
      {
        var n = h.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var De = !1, Fe = !1, Ae = !1, Ie = !1, $e = !1, te;
    te = Symbol.for("react.module.reference");
    function We(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === y || e === x || $e || e === w || e === C || e === p || Ie || e === F || De || Fe || Ae || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === b || e.$$typeof === _ || e.$$typeof === E || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === te || e.getModuleId !== void 0));
    }
    function Ye(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function ne(e) {
      return e.displayName || "Context";
    }
    function S(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case y:
          return "Fragment";
        case P:
          return "Portal";
        case x:
          return "Profiler";
        case w:
          return "StrictMode";
        case C:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case E:
            var r = e;
            return ne(r) + ".Consumer";
          case _:
            var t = e;
            return ne(t._context) + ".Provider";
          case c:
            return Ye(e, e.render, "ForwardRef");
          case b:
            var n = e.displayName || null;
            return n !== null ? n : S(e.type) || "Memo";
          case T: {
            var i = e, u = i._payload, o = i._init;
            try {
              return S(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, I = 0, ae, oe, ie, ue, se, le, ce;
    function fe() {
    }
    fe.__reactDisabledLog = !0;
    function Ne() {
      {
        if (I === 0) {
          ae = console.log, oe = console.info, ie = console.warn, ue = console.error, se = console.group, le = console.groupCollapsed, ce = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: fe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        I++;
      }
    }
    function Le() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, e, {
              value: ae
            }),
            info: j({}, e, {
              value: oe
            }),
            warn: j({}, e, {
              value: ie
            }),
            error: j({}, e, {
              value: ue
            }),
            group: j({}, e, {
              value: se
            }),
            groupCollapsed: j({}, e, {
              value: le
            }),
            groupEnd: j({}, e, {
              value: ce
            })
          });
        }
        I < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = h.ReactCurrentDispatcher, H;
    function U(e, r, t) {
      {
        if (H === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            H = n && n[1] || "";
          }
        return `
` + H + e;
      }
    }
    var K = !1, V;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      V = new Ue();
    }
    function de(e, r) {
      if (!e || K)
        return "";
      {
        var t = V.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      K = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = z.current, z.current = null, Ne();
      try {
        if (r) {
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
            } catch (O) {
              n = O;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (O) {
              n = O;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (O) {
            n = O;
          }
          e();
        }
      } catch (O) {
        if (O && n && typeof O.stack == "string") {
          for (var a = O.stack.split(`
`), g = n.stack.split(`
`), s = a.length - 1, l = g.length - 1; s >= 1 && l >= 0 && a[s] !== g[l]; )
            l--;
          for (; s >= 1 && l >= 0; s--, l--)
            if (a[s] !== g[l]) {
              if (s !== 1 || l !== 1)
                do
                  if (s--, l--, l < 0 || a[s] !== g[l]) {
                    var m = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && m.includes("<anonymous>") && (m = m.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, m), m;
                  }
                while (s >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        K = !1, z.current = u, Le(), Error.prepareStackTrace = i;
      }
      var D = e ? e.displayName || e.name : "", Te = D ? U(D) : "";
      return typeof e == "function" && V.set(e, Te), Te;
    }
    function Ve(e, r, t) {
      return de(e, !1);
    }
    function Me(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function M(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return de(e, Me(e));
      if (typeof e == "string")
        return U(e);
      switch (e) {
        case C:
          return U("Suspense");
        case p:
          return U("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Ve(e.render);
          case b:
            return M(e.type, r, t);
          case T: {
            var n = e, i = n._payload, u = n._init;
            try {
              return M(u(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var q = Object.prototype.hasOwnProperty, ve = {}, pe = h.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(t);
      } else
        pe.setExtraStackFrame(null);
    }
    function qe(e, r, t, n, i) {
      {
        var u = Function.call.bind(q);
        for (var o in e)
          if (u(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var g = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw g.name = "Invariant Violation", g;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (B(i), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), B(null)), a instanceof Error && !(a.message in ve) && (ve[a.message] = !0, B(i), f("Failed %s type: %s", t, a.message), B(null));
          }
      }
    }
    var Be = Array.isArray;
    function X(e) {
      return Be(e);
    }
    function Ge(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Je(e) {
      try {
        return ge(e), !1;
      } catch {
        return !0;
      }
    }
    function ge(e) {
      return "" + e;
    }
    function be(e) {
      if (Je(e))
        return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(e)), ge(e);
    }
    var he = h.ReactCurrentOwner, ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, Ee;
    function He(e) {
      if (q.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ke(e) {
      if (q.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Xe(e, r) {
      typeof e.ref == "string" && he.current;
    }
    function Qe(e, r) {
      {
        var t = function() {
          ye || (ye = !0, f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          Ee || (Ee = !0, f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, n, i, u, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: d,
        // Built-in properties that belong on the element
        type: e,
        key: r,
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
    function rr(e, r, t, n, i) {
      {
        var u, o = {}, a = null, g = null;
        t !== void 0 && (be(t), a = "" + t), Ke(r) && (be(r.key), a = "" + r.key), He(r) && (g = r.ref, Xe(r, i));
        for (u in r)
          q.call(r, u) && !ze.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            o[u] === void 0 && (o[u] = s[u]);
        }
        if (a || g) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Qe(o, l), g && Ze(o, l);
        }
        return er(e, a, g, i, n, he.current, o);
      }
    }
    var Q = h.ReactCurrentOwner, me = h.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    var Z;
    Z = !1;
    function ee(e) {
      return typeof e == "object" && e !== null && e.$$typeof === d;
    }
    function Re() {
      {
        if (Q.current) {
          var e = S(Q.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function tr(e) {
      return "";
    }
    var _e = {};
    function nr(e) {
      {
        var r = Re();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function we(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (_e[t])
          return;
        _e[t] = !0;
        var n = "";
        e && e._owner && e._owner !== Q.current && (n = " It was passed a child from " + S(e._owner.type) + "."), k(e), f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), k(null);
      }
    }
    function xe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (X(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ee(n) && we(n, r);
          }
        else if (ee(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = R(e);
          if (typeof i == "function" && i !== e.entries)
            for (var u = i.call(e), o; !(o = u.next()).done; )
              ee(o.value) && we(o.value, r);
        }
      }
    }
    function ar(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === b))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = S(r);
          qe(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !Z) {
          Z = !0;
          var i = S(r);
          f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            k(e), f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), f("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    function Ce(e, r, t, n, i, u) {
      {
        var o = We(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var g = tr();
          g ? a += g : a += Re();
          var s;
          e === null ? s = "null" : X(e) ? s = "array" : e !== void 0 && e.$$typeof === d ? (s = "<" + (S(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, f("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var l = rr(e, r, t, i, u);
        if (l == null)
          return l;
        if (o) {
          var m = r.children;
          if (m !== void 0)
            if (n)
              if (X(m)) {
                for (var D = 0; D < m.length; D++)
                  xe(m[D], e);
                Object.freeze && Object.freeze(m);
              } else
                f("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xe(m, e);
        }
        return e === y ? or(l) : ar(l), l;
      }
    }
    function ir(e, r, t) {
      return Ce(e, r, t, !0);
    }
    function ur(e, r, t) {
      return Ce(e, r, t, !1);
    }
    var sr = ur, lr = ir;
    W.Fragment = y, W.jsx = sr, W.jsxs = lr;
  }()), W;
}
var Se;
function vr() {
  return Se || (Se = 1, process.env.NODE_ENV === "production" ? G.exports = fr() : G.exports = dr()), G.exports;
}
var Y = vr();
const je = {
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
}, pr = "https://api.github.com/graphql", gr = `
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
`, br = async (v, d) => {
  var x, _, E;
  if (!v)
    throw new Error("Please provide the Github username");
  if (!d)
    throw new Error("Please provide the Github personal token");
  const P = await fetch(pr, {
    method: "POST",
    headers: {
      Authorization: `bearer ${d}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: gr,
      variables: { username: v }
    })
  });
  if (!P.ok)
    throw new Error("Network response was not ok");
  const y = await P.json();
  if (y.errors)
    throw new Error(y.errors[0].message);
  const w = (E = (_ = (x = y.data) == null ? void 0 : x.user) == null ? void 0 : _.contributionsCollection) == null ? void 0 : E.contributionCalendar;
  if (!w)
    throw new Error("No contribution data found");
  return w;
}, N = {
  container: {
    maxWidth: "100%",
    overflowX: "auto",
    paddingBottom: "8px",
    paddingTop: "2.4px",
    paddingLeft: "8px",
    paddingRight: "8px",
    borderRadius: "6px"
  },
  graphWrapper: {
    display: "inline-flex",
    flexDirection: "column",
    gap: "4px"
  },
  row: {
    display: "flex",
    gap: "4px"
  },
  square: {
    width: "12px",
    height: "12px",
    borderRadius: "2px",
    transition: "background-color 0.2s ease"
  },
  loading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    minHeight: "100px"
  },
  error: (v) => ({
    color: v.error,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px"
  })
}, hr = (v, d) => v === 0 ? d[0] : v <= 3 ? d[1] : v <= 6 ? d[2] : v <= 9 ? d[3] : d[4], Er = ({
  username: v,
  token: d,
  theme: P = "dark",
  customColorScheme: y,
  loadingComponent: w = ""
}) => {
  const [x, _] = re([]), [E, c] = re(!0), [C, p] = re(null), b = je[P] || je.light, T = y || b.colorScheme;
  if (cr(() => {
    (async () => {
      try {
        const R = await br(v, d);
        _(R), c(!1);
      } catch (R) {
        p(R.message || "Failed to fetch contribution data"), c(!1), console.error("Error fetching contributions:", R);
      }
    })();
  }, [v, d]), E)
    return w;
  if (C)
    return /* @__PURE__ */ Y.jsx("div", { style: N.error(b), children: C });
  const L = Array(7).fill(null).map(
    (A, R) => {
      var h;
      return (h = x.weeks) == null ? void 0 : h.map(
        (f) => f.contributionDays.find((J) => new Date(J.date).getDay() === R) || null
      ).filter(Boolean);
    }
  );
  return /* @__PURE__ */ Y.jsx("div", { style: {
    ...N.container,
    backgroundColor: b.background
  }, children: /* @__PURE__ */ Y.jsx("div", { style: N.graphWrapper, children: L.map((A, R) => /* @__PURE__ */ Y.jsx("div", { style: N.row, children: A.map((h, f) => /* @__PURE__ */ Y.jsx(
    "div",
    {
      style: {
        ...N.square,
        backgroundColor: hr(h.contributionCount, T)
      },
      title: `${h.date}: ${h.contributionCount} contributions`
    },
    `${R}-${f}`
  )) }, R)) }) });
};
export {
  Er as ContributionGraph,
  je as themes
};
