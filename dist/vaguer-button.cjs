"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});var m=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("button",{staticClass:"vaguer-button"},[e._t("default"),e._v("-"+e._s(e.a)+" ")],2)},C=[];function b(e,n,a,v,s,_,i,p){var t=typeof e=="function"?e.options:e;n&&(t.render=n,t.staticRenderFns=a,t._compiled=!0),v&&(t.functional=!0),_&&(t._scopeId="data-v-"+_);var r;if(i?(r=function(o){o=o||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!o&&typeof __VUE_SSR_CONTEXT__<"u"&&(o=__VUE_SSR_CONTEXT__),s&&s.call(this,o),o&&o._registeredComponents&&o._registeredComponents.add(i)},t._ssrRegister=r):s&&(r=p?function(){s.call(this,(t.functional?this.parent:this).$root.$options.shadowRoot)}:s),r)if(t.functional){t._injectStyles=r;var h=t.render;t.render=function(g,l){return r.call(l),h(g,l)}}else{var u=t.beforeCreate;t.beforeCreate=u?[].concat(u,r):[r]}return{exports:e,options:t}}const S={data(){return{a:123}}},f={};var V=b(S,m,C,!1,$,null,null,null);function $(e){for(let n in f)this[n]=f[n]}const c=function(){return V.exports}(),d=Object.freeze(Object.defineProperty({__proto__:null,VaguerButton:c},Symbol.toStringTag,{value:"Module"})),y={install(e){Object.entries(d).forEach(([n,a])=>{e.component(n,a)})}};console.log(22);exports.VaguerButton=c;exports.VaguerComponents=y;exports.default=d;
