var h = function() {
  var e = this, t = e.$createElement, a = e._self._c || t;
  return a("button", {
    staticClass: "vaguer-button"
  }, [e._t("default"), e._v("-" + e._s(e.a) + " ")], 2);
}, m = [];
function C(e, t, a, c, s, _, i, d) {
  var n = typeof e == "function" ? e.options : e;
  t && (n.render = t, n.staticRenderFns = a, n._compiled = !0), c && (n.functional = !0), _ && (n._scopeId = "data-v-" + _);
  var r;
  if (i ? (r = function(o) {
    o = o || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !o && typeof __VUE_SSR_CONTEXT__ < "u" && (o = __VUE_SSR_CONTEXT__), s && s.call(this, o), o && o._registeredComponents && o._registeredComponents.add(i);
  }, n._ssrRegister = r) : s && (r = d ? function() {
    s.call(
      this,
      (n.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : s), r)
    if (n.functional) {
      n._injectStyles = r;
      var v = n.render;
      n.render = function(p, l) {
        return r.call(l), v(p, l);
      };
    } else {
      var u = n.beforeCreate;
      n.beforeCreate = u ? [].concat(u, r) : [r];
    }
  return {
    exports: e,
    options: n
  };
}
const g = {
  data() {
    return {
      a: 123
    };
  }
}, f = {};
var b = /* @__PURE__ */ C(
  g,
  h,
  m,
  !1,
  $,
  null,
  null,
  null
);
function $(e) {
  for (let t in f)
    this[t] = f[t];
}
const R = /* @__PURE__ */ function() {
  return b.exports;
}(), y = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VaguerButton: R
}, Symbol.toStringTag, { value: "Module" })), O = {
  install(e) {
    Object.entries(y).forEach(([t, a]) => {
      e.component(t, a);
    });
  }
};
console.log(22);
export {
  R as VaguerButton,
  O as VaguerComponents,
  y as default
};
