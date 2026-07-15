var ht=Object.defineProperty;var ct=(r,e,t)=>e in r?ht(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Ee=(r,e,t)=>ct(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const re=globalThis,$e=re.ShadowRoot&&(re.ShadyCSS===void 0||re.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ke=Symbol(),Te=new WeakMap;let Je=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==ke)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if($e&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=Te.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Te.set(t,e))}return e}toString(){return this.cssText}};const pt=r=>new Je(typeof r=="string"?r:r+"",void 0,ke),ee=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((n,s,i)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[i+1],r[0]);return new Je(t,r,ke)},ut=(r,e)=>{if($e)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const n=document.createElement("style"),s=re.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=t.cssText,r.appendChild(n)}},Re=$e?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return pt(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:dt,defineProperty:ft,getOwnPropertyDescriptor:gt,getOwnPropertyNames:mt,getOwnPropertySymbols:xt,getPrototypeOf:bt}=Object,E=globalThis,Pe=E.trustedTypes,$t=Pe?Pe.emptyScript:"",fe=E.reactiveElementPolyfillSupport,W=(r,e)=>r,le={toAttribute(r,e){switch(e){case Boolean:r=r?$t:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},we=(r,e)=>!dt(r,e),Oe={attribute:!0,type:String,converter:le,reflect:!1,useDefault:!1,hasChanged:we};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),E.litPropertyMetadata??(E.litPropertyMetadata=new WeakMap);let j=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Oe){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),s=this.getPropertyDescriptor(e,n,t);s!==void 0&&ft(this.prototype,e,s)}}static getPropertyDescriptor(e,t,n){const{get:s,set:i}=gt(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get:s,set(o){const l=s==null?void 0:s.call(this);i==null||i.call(this,o),this.requestUpdate(e,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Oe}static _$Ei(){if(this.hasOwnProperty(W("elementProperties")))return;const e=bt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(W("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(W("properties"))){const t=this.properties,n=[...mt(t),...xt(t)];for(const s of n)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[n,s]of t)this.elementProperties.set(n,s)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const s=this._$Eu(t,n);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const s of n)t.unshift(Re(s))}else e!==void 0&&t.push(Re(e));return t}static _$Eu(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ut(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostConnected)==null?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostDisconnected)==null?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){var i;const n=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,n);if(s!==void 0&&n.reflect===!0){const o=(((i=n.converter)==null?void 0:i.toAttribute)!==void 0?n.converter:le).toAttribute(t,n.type);this._$Em=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,t){var i,o;const n=this.constructor,s=n._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const l=n.getPropertyOptions(s),a=typeof l.converter=="function"?{fromAttribute:l.converter}:((i=l.converter)==null?void 0:i.fromAttribute)!==void 0?l.converter:le;this._$Em=s;const u=a.fromAttribute(t,l.type);this[s]=u??((o=this._$Ej)==null?void 0:o.get(s))??u,this._$Em=null}}requestUpdate(e,t,n,s=!1,i){var o;if(e!==void 0){const l=this.constructor;if(s===!1&&(i=this[e]),n??(n=l.getPropertyOptions(e)),!((n.hasChanged??we)(i,t)||n.useDefault&&n.reflect&&i===((o=this._$Ej)==null?void 0:o.get(e))&&!this.hasAttribute(l._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:s,wrapped:i},o){n&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,o??t??this[e]),i!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,o]of s){const{wrapped:l}=o,a=this[i];l!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,o,a)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(n=this._$EO)==null||n.forEach(s=>{var i;return(i=s.hostUpdate)==null?void 0:i.call(s)}),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(n=>{var s;return(s=n.hostUpdated)==null?void 0:s.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};j.elementStyles=[],j.shadowRootOptions={mode:"open"},j[W("elementProperties")]=new Map,j[W("finalized")]=new Map,fe==null||fe({ReactiveElement:j}),(E.reactiveElementVersions??(E.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Q=globalThis,Ie=r=>r,ae=Q.trustedTypes,Le=ae?ae.createPolicy("lit-html",{createHTML:r=>r}):void 0,Ge="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,Xe="?"+C,kt=`<${Xe}>`,M=document,V=()=>M.createComment(""),J=r=>r===null||typeof r!="object"&&typeof r!="function",_e=Array.isArray,wt=r=>_e(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",ge=`[ 	
\f\r]`,F=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Me=/-->/g,Ue=/>/g,O=RegExp(`>|${ge}(?:([^\\s"'>=/]+)(${ge}*=${ge}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),De=/'/g,Ne=/"/g,Ke=/^(?:script|style|textarea|title)$/i,_t=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),U=_t(1),D=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),He=new WeakMap,I=M.createTreeWalker(M,129);function Ye(r,e){if(!_e(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Le!==void 0?Le.createHTML(e):e}const yt=(r,e)=>{const t=r.length-1,n=[];let s,i=e===2?"<svg>":e===3?"<math>":"",o=F;for(let l=0;l<t;l++){const a=r[l];let u,d,c=-1,m=0;for(;m<a.length&&(o.lastIndex=m,d=o.exec(a),d!==null);)m=o.lastIndex,o===F?d[1]==="!--"?o=Me:d[1]!==void 0?o=Ue:d[2]!==void 0?(Ke.test(d[2])&&(s=RegExp("</"+d[2],"g")),o=O):d[3]!==void 0&&(o=O):o===O?d[0]===">"?(o=s??F,c=-1):d[1]===void 0?c=-2:(c=o.lastIndex-d[2].length,u=d[1],o=d[3]===void 0?O:d[3]==='"'?Ne:De):o===Ne||o===De?o=O:o===Me||o===Ue?o=F:(o=O,s=void 0);const p=o===O&&r[l+1].startsWith("/>")?" ":"";i+=o===F?a+kt:c>=0?(n.push(u),a.slice(0,c)+Ge+a.slice(c)+C+p):a+C+(c===-2?l:p)}return[Ye(r,i+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]};class G{constructor({strings:e,_$litType$:t},n){let s;this.parts=[];let i=0,o=0;const l=e.length-1,a=this.parts,[u,d]=yt(e,t);if(this.el=G.createElement(u,n),I.currentNode=this.el.content,t===2||t===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=I.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const c of s.getAttributeNames())if(c.endsWith(Ge)){const m=d[o++],p=s.getAttribute(c).split(C),_=/([.?@])?(.*)/.exec(m);a.push({type:1,index:i,name:_[2],strings:p,ctor:_[1]==="."?At:_[1]==="?"?St:_[1]==="@"?zt:pe}),s.removeAttribute(c)}else c.startsWith(C)&&(a.push({type:6,index:i}),s.removeAttribute(c));if(Ke.test(s.tagName)){const c=s.textContent.split(C),m=c.length-1;if(m>0){s.textContent=ae?ae.emptyScript:"";for(let p=0;p<m;p++)s.append(c[p],V()),I.nextNode(),a.push({type:2,index:++i});s.append(c[m],V())}}}else if(s.nodeType===8)if(s.data===Xe)a.push({type:2,index:i});else{let c=-1;for(;(c=s.data.indexOf(C,c+1))!==-1;)a.push({type:7,index:i}),c+=C.length-1}i++}}static createElement(e,t){const n=M.createElement("template");return n.innerHTML=e,n}}function B(r,e,t=r,n){var o,l;if(e===D)return e;let s=n!==void 0?(o=t._$Co)==null?void 0:o[n]:t._$Cl;const i=J(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==i&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),i===void 0?s=void 0:(s=new i(r),s._$AT(r,t,n)),n!==void 0?(t._$Co??(t._$Co=[]))[n]=s:t._$Cl=s),s!==void 0&&(e=B(r,s._$AS(r,e.values),s,n)),e}class vt{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,s=((e==null?void 0:e.creationScope)??M).importNode(t,!0);I.currentNode=s;let i=I.nextNode(),o=0,l=0,a=n[0];for(;a!==void 0;){if(o===a.index){let u;a.type===2?u=new te(i,i.nextSibling,this,e):a.type===1?u=new a.ctor(i,a.name,a.strings,this,e):a.type===6&&(u=new Ct(i,this,e)),this._$AV.push(u),a=n[++l]}o!==(a==null?void 0:a.index)&&(i=I.nextNode(),o++)}return I.currentNode=M,s}p(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class te{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,n,s){this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=B(this,e,t),J(e)?e===$||e==null||e===""?(this._$AH!==$&&this._$AR(),this._$AH=$):e!==this._$AH&&e!==D&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):wt(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==$&&J(this._$AH)?this._$AA.nextSibling.data=e:this.T(M.createTextNode(e)),this._$AH=e}$(e){var i;const{values:t,_$litType$:n}=e,s=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=G.createElement(Ye(n.h,n.h[0]),this.options)),n);if(((i=this._$AH)==null?void 0:i._$AD)===s)this._$AH.p(t);else{const o=new vt(s,this),l=o.u(this.options);o.p(t),this.T(l),this._$AH=o}}_$AC(e){let t=He.get(e.strings);return t===void 0&&He.set(e.strings,t=new G(e)),t}k(e){_e(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,s=0;for(const i of e)s===t.length?t.push(n=new te(this.O(V()),this.O(V()),this,this.options)):n=t[s],n._$AI(i),s++;s<t.length&&(this._$AR(n&&n._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,t);e!==this._$AB;){const s=Ie(e).nextSibling;Ie(e).remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class pe{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,s,i){this.type=1,this._$AH=$,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=$}_$AI(e,t=this,n,s){const i=this.strings;let o=!1;if(i===void 0)e=B(this,e,t,0),o=!J(e)||e!==this._$AH&&e!==D,o&&(this._$AH=e);else{const l=e;let a,u;for(e=i[0],a=0;a<i.length-1;a++)u=B(this,l[n+a],t,a),u===D&&(u=this._$AH[a]),o||(o=!J(u)||u!==this._$AH[a]),u===$?e=$:e!==$&&(e+=(u??"")+i[a+1]),this._$AH[a]=u}o&&!s&&this.j(e)}j(e){e===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class At extends pe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===$?void 0:e}}class St extends pe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==$)}}class zt extends pe{constructor(e,t,n,s,i){super(e,t,n,s,i),this.type=5}_$AI(e,t=this){if((e=B(this,e,t,0)??$)===D)return;const n=this._$AH,s=e===$&&n!==$||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==$&&(n===$||s);s&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Ct{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){B(this,e)}}const me=Q.litHtmlPolyfillSupport;me==null||me(G,te),(Q.litHtmlVersions??(Q.litHtmlVersions=[])).push("3.3.3");const Et=(r,e,t)=>{const n=(t==null?void 0:t.renderBefore)??e;let s=n._$litPart$;if(s===void 0){const i=(t==null?void 0:t.renderBefore)??null;n._$litPart$=s=new te(e.insertBefore(V(),i),i,void 0,t??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=globalThis;let T=class extends j{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Et(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return D}};var Ve;T._$litElement$=!0,T.finalized=!0,(Ve=L.litElementHydrateSupport)==null||Ve.call(L,{LitElement:T});const xe=L.litElementPolyfillSupport;xe==null||xe({LitElement:T});(L.litElementVersions??(L.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ue=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tt={attribute:!0,type:String,converter:le,reflect:!1,hasChanged:we},Rt=(r=Tt,e,t)=>{const{kind:n,metadata:s}=t;let i=globalThis.litPropertyMetadata.get(s);if(i===void 0&&globalThis.litPropertyMetadata.set(s,i=new Map),n==="setter"&&((r=Object.create(r)).wrapped=!0),i.set(t.name,r),n==="accessor"){const{name:o}=t;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(o,a,r,!0,l)},init(l){return l!==void 0&&this.C(o,void 0,r,l),l}}}if(n==="setter"){const{name:o}=t;return function(l){const a=this[o];e.call(this,l),this.requestUpdate(o,a,r,!0,l)}}throw Error("Unsupported decorator location: "+n)};function ne(r){return(e,t)=>typeof t=="object"?Rt(r,e,t):((n,s,i)=>{const o=s.hasOwnProperty(i);return s.constructor.createProperty(i,n),o?Object.getOwnPropertyDescriptor(s,i):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function se(r){return ne({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pt={CHILD:2},Ot=r=>(...e)=>({_$litDirective$:r,values:e});class It{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class be extends It{constructor(e){if(super(e),this.it=$,e.type!==Pt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===$||e==null)return this._t=void 0,this.it=e;if(e===D)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}be.directiveName="unsafeHTML",be.resultType=1;const Lt=Ot(be);function et(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let N=et();function Mt(r){N=r}const tt=/[&<>"']/,Ut=new RegExp(tt.source,"g"),nt=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Dt=new RegExp(nt.source,"g"),Nt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},je=r=>Nt[r];function w(r,e){if(e){if(tt.test(r))return r.replace(Ut,je)}else if(nt.test(r))return r.replace(Dt,je);return r}const Ht=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function st(r){return r.replace(Ht,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const jt=/(^|[^\[])\^/g;function x(r,e){r=typeof r=="string"?r:r.source,e=e||"";const t={replace:(n,s)=>(s=s.source||s,s=s.replace(jt,"$1"),r=r.replace(n,s),t),getRegex:()=>new RegExp(r,e)};return t}const Bt=/[^\w:]/g,Zt=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function Be(r,e,t){if(r){let n;try{n=decodeURIComponent(st(t)).replace(Bt,"").toLowerCase()}catch{return null}if(n.indexOf("javascript:")===0||n.indexOf("vbscript:")===0||n.indexOf("data:")===0)return null}e&&!Zt.test(t)&&(t=Qt(e,t));try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const ie={},qt=/^[^:]+:\/*[^/]*$/,Ft=/^([^:]+:)[\s\S]*$/,Wt=/^([^:]+:\/*[^/]*)[\s\S]*$/;function Qt(r,e){ie[" "+r]||(qt.test(r)?ie[" "+r]=r+"/":ie[" "+r]=oe(r,"/",!0)),r=ie[" "+r];const t=r.indexOf(":")===-1;return e.substring(0,2)==="//"?t?e:r.replace(Ft,"$1")+e:e.charAt(0)==="/"?t?e:r.replace(Wt,"$1")+e:r+e}const he={exec:function(){}};function Ze(r,e){const t=r.replace(/\|/g,(i,o,l)=>{let a=!1,u=o;for(;--u>=0&&l[u]==="\\";)a=!a;return a?"|":" |"}),n=t.split(/ \|/);let s=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;s<n.length;s++)n[s]=n[s].trim().replace(/\\\|/g,"|");return n}function oe(r,e,t){const n=r.length;if(n===0)return"";let s=0;for(;s<n;){const i=r.charAt(n-s-1);if(i===e&&!t)s++;else if(i!==e&&t)s++;else break}return r.slice(0,n-s)}function Vt(r,e){if(r.indexOf(e[1])===-1)return-1;const t=r.length;let n=0,s=0;for(;s<t;s++)if(r[s]==="\\")s++;else if(r[s]===e[0])n++;else if(r[s]===e[1]&&(n--,n<0))return s;return-1}function Jt(r){r&&r.sanitize&&!r.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function qe(r,e){if(e<1)return"";let t="";for(;e>1;)e&1&&(t+=r),e>>=1,r+=r;return t+r}function Fe(r,e,t,n){const s=e.href,i=e.title?w(e.title):null,o=r[1].replace(/\\([\[\]])/g,"$1");if(r[0].charAt(0)!=="!"){n.state.inLink=!0;const l={type:"link",raw:t,href:s,title:i,text:o,tokens:n.inlineTokens(o)};return n.state.inLink=!1,l}return{type:"image",raw:t,href:s,title:i,text:w(o)}}function Gt(r,e){const t=r.match(/^(\s+)(?:```)/);if(t===null)return e;const n=t[1];return e.split(`
`).map(s=>{const i=s.match(/^\s+/);if(i===null)return s;const[o]=i;return o.length>=n.length?s.slice(n.length):s}).join(`
`)}class ye{constructor(e){this.options=e||N}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:oe(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],s=Gt(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline._escapes,"$1"):t[2],text:s}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(/#$/.test(n)){const s=oe(n,"#");(this.options.pedantic||!s||/ $/.test(s))&&(n=s.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const n=t[0].replace(/^ *>[ \t]?/gm,""),s=this.lexer.state.top;this.lexer.state.top=!0;const i=this.lexer.blockTokens(n);return this.lexer.state.top=s,{type:"blockquote",raw:t[0],tokens:i,text:n}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n,s,i,o,l,a,u,d,c,m,p,_,y=t[1].trim();const z=y.length>1,b={type:"list",raw:"",ordered:z,start:z?+y.slice(0,-1):"",loose:!1,items:[]};y=z?`\\d{1,9}\\${y.slice(-1)}`:`\\${y}`,this.options.pedantic&&(y=z?y:"[*+-]");const k=new RegExp(`^( {0,3}${y})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;e&&(_=!1,!(!(t=k.exec(e))||this.rules.block.hr.test(e)));){if(n=t[0],e=e.substring(n.length),d=t[2].split(`
`,1)[0].replace(/^\t+/,S=>" ".repeat(3*S.length)),c=e.split(`
`,1)[0],this.options.pedantic?(o=2,p=d.trimLeft()):(o=t[2].search(/[^ ]/),o=o>4?1:o,p=d.slice(o),o+=t[1].length),a=!1,!d&&/^ *$/.test(c)&&(n+=c+`
`,e=e.substring(c.length+1),_=!0),!_){const S=new RegExp(`^ {0,${Math.min(3,o-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),v=new RegExp(`^ {0,${Math.min(3,o-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),A=new RegExp(`^ {0,${Math.min(3,o-1)}}(?:\`\`\`|~~~)`),q=new RegExp(`^ {0,${Math.min(3,o-1)}}#`);for(;e&&(m=e.split(`
`,1)[0],c=m,this.options.pedantic&&(c=c.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(A.test(c)||q.test(c)||S.test(c)||v.test(e)));){if(c.search(/[^ ]/)>=o||!c.trim())p+=`
`+c.slice(o);else{if(a||d.search(/[^ ]/)>=4||A.test(d)||q.test(d)||v.test(d))break;p+=`
`+c}!a&&!c.trim()&&(a=!0),n+=m+`
`,e=e.substring(m.length+1),d=c.slice(o)}}b.loose||(u?b.loose=!0:/\n *\n *$/.test(n)&&(u=!0)),this.options.gfm&&(s=/^\[[ xX]\] /.exec(p),s&&(i=s[0]!=="[ ] ",p=p.replace(/^\[[ xX]\] +/,""))),b.items.push({type:"list_item",raw:n,task:!!s,checked:i,loose:!1,text:p}),b.raw+=n}b.items[b.items.length-1].raw=n.trimRight(),b.items[b.items.length-1].text=p.trimRight(),b.raw=b.raw.trimRight();const H=b.items.length;for(l=0;l<H;l++)if(this.lexer.state.top=!1,b.items[l].tokens=this.lexer.blockTokens(b.items[l].text,[]),!b.loose){const S=b.items[l].tokens.filter(A=>A.type==="space"),v=S.length>0&&S.some(A=>/\n.*\n/.test(A.raw));b.loose=v}if(b.loose)for(l=0;l<H;l++)b.items[l].loose=!0;return b}}html(e){const t=this.rules.block.html.exec(e);if(t){const n={type:"html",raw:t[0],pre:!this.options.sanitizer&&(t[1]==="pre"||t[1]==="script"||t[1]==="style"),text:t[0]};if(this.options.sanitize){const s=this.options.sanitizer?this.options.sanitizer(t[0]):w(t[0]);n.type="paragraph",n.text=s,n.tokens=this.lexer.inline(s)}return n}}def(e){const t=this.rules.block.def.exec(e);if(t){const n=t[1].toLowerCase().replace(/\s+/g," "),s=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",i=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline._escapes,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:s,title:i}}}table(e){const t=this.rules.block.table.exec(e);if(t){const n={type:"table",header:Ze(t[1]).map(s=>({text:s})),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(n.header.length===n.align.length){n.raw=t[0];let s=n.align.length,i,o,l,a;for(i=0;i<s;i++)/^ *-+: *$/.test(n.align[i])?n.align[i]="right":/^ *:-+: *$/.test(n.align[i])?n.align[i]="center":/^ *:-+ *$/.test(n.align[i])?n.align[i]="left":n.align[i]=null;for(s=n.rows.length,i=0;i<s;i++)n.rows[i]=Ze(n.rows[i],n.header.length).map(u=>({text:u}));for(s=n.header.length,o=0;o<s;o++)n.header[o].tokens=this.lexer.inline(n.header[o].text);for(s=n.rows.length,o=0;o<s;o++)for(a=n.rows[o],l=0;l<a.length;l++)a[l].tokens=this.lexer.inline(a[l].text);return n}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:w(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):w(t[0]):t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const o=oe(n.slice(0,-1),"\\");if((n.length-o.length)%2===0)return}else{const o=Vt(t[2],"()");if(o>-1){const a=(t[0].indexOf("!")===0?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,a).trim(),t[3]=""}}let s=t[2],i="";if(this.options.pedantic){const o=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);o&&(s=o[1],i=o[3])}else i=t[3]?t[3].slice(1,-1):"";return s=s.trim(),/^</.test(s)&&(this.options.pedantic&&!/>$/.test(n)?s=s.slice(1):s=s.slice(1,-1)),Fe(t,{href:s&&s.replace(this.rules.inline._escapes,"$1"),title:i&&i.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let s=(n[2]||n[1]).replace(/\s+/g," ");if(s=t[s.toLowerCase()],!s){const i=n[0].charAt(0);return{type:"text",raw:i,text:i}}return Fe(n,s,n[0],this.lexer)}}emStrong(e,t,n=""){let s=this.rules.inline.emStrong.lDelim.exec(e);if(!s||s[3]&&n.match(/[\p{L}\p{N}]/u))return;const i=s[1]||s[2]||"";if(!i||i&&(n===""||this.rules.inline.punctuation.exec(n))){const o=s[0].length-1;let l,a,u=o,d=0;const c=s[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(c.lastIndex=0,t=t.slice(-1*e.length+o);(s=c.exec(t))!=null;){if(l=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!l)continue;if(a=l.length,s[3]||s[4]){u+=a;continue}else if((s[5]||s[6])&&o%3&&!((o+a)%3)){d+=a;continue}if(u-=a,u>0)continue;a=Math.min(a,a+u+d);const m=e.slice(0,o+s.index+(s[0].length-l.length)+a);if(Math.min(o,a)%2){const _=m.slice(1,-1);return{type:"em",raw:m,text:_,tokens:this.lexer.inlineTokens(_)}}const p=m.slice(2,-2);return{type:"strong",raw:m,text:p,tokens:this.lexer.inlineTokens(p)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(/\n/g," ");const s=/[^ ]/.test(n),i=/^ /.test(n)&&/ $/.test(n);return s&&i&&(n=n.substring(1,n.length-1)),n=w(n,!0),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e,t){const n=this.rules.inline.autolink.exec(e);if(n){let s,i;return n[2]==="@"?(s=w(this.options.mangle?t(n[1]):n[1]),i="mailto:"+s):(s=w(n[1]),i=s),{type:"link",raw:n[0],text:s,href:i,tokens:[{type:"text",raw:s,text:s}]}}}url(e,t){let n;if(n=this.rules.inline.url.exec(e)){let s,i;if(n[2]==="@")s=w(this.options.mangle?t(n[0]):n[0]),i="mailto:"+s;else{let o;do o=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0];while(o!==n[0]);s=w(n[0]),n[1]==="www."?i="http://"+n[0]:i=n[0]}return{type:"link",raw:n[0],text:s,href:i,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(e,t){const n=this.rules.inline.text.exec(e);if(n){let s;return this.lexer.state.inRawBlock?s=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):w(n[0]):n[0]:s=w(this.options.smartypants?t(n[0]):n[0]),{type:"text",raw:n[0],text:s}}}}const f={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:he,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};f._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;f._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;f.def=x(f.def).replace("label",f._label).replace("title",f._title).getRegex();f.bullet=/(?:[*+-]|\d{1,9}[.)])/;f.listItemStart=x(/^( *)(bull) */).replace("bull",f.bullet).getRegex();f.list=x(f.list).replace(/bull/g,f.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+f.def.source+")").getRegex();f._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";f._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;f.html=x(f.html,"i").replace("comment",f._comment).replace("tag",f._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();f.paragraph=x(f._paragraph).replace("hr",f.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",f._tag).getRegex();f.blockquote=x(f.blockquote).replace("paragraph",f.paragraph).getRegex();f.normal={...f};f.gfm={...f.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"};f.gfm.table=x(f.gfm.table).replace("hr",f.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",f._tag).getRegex();f.gfm.paragraph=x(f._paragraph).replace("hr",f.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",f.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",f._tag).getRegex();f.pedantic={...f.normal,html:x(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",f._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:he,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:x(f.normal._paragraph).replace("hr",f.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",f.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const h={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:he,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:he,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};h._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";h.punctuation=x(h.punctuation).replace(/punctuation/g,h._punctuation).getRegex();h.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;h.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g;h._comment=x(f._comment).replace("(?:-->|$)","-->").getRegex();h.emStrong.lDelim=x(h.emStrong.lDelim).replace(/punct/g,h._punctuation).getRegex();h.emStrong.rDelimAst=x(h.emStrong.rDelimAst,"g").replace(/punct/g,h._punctuation).getRegex();h.emStrong.rDelimUnd=x(h.emStrong.rDelimUnd,"g").replace(/punct/g,h._punctuation).getRegex();h._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;h._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;h._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;h.autolink=x(h.autolink).replace("scheme",h._scheme).replace("email",h._email).getRegex();h._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;h.tag=x(h.tag).replace("comment",h._comment).replace("attribute",h._attribute).getRegex();h._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;h._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;h._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;h.link=x(h.link).replace("label",h._label).replace("href",h._href).replace("title",h._title).getRegex();h.reflink=x(h.reflink).replace("label",h._label).replace("ref",f._label).getRegex();h.nolink=x(h.nolink).replace("ref",f._label).getRegex();h.reflinkSearch=x(h.reflinkSearch,"g").replace("reflink",h.reflink).replace("nolink",h.nolink).getRegex();h.normal={...h};h.pedantic={...h.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:x(/^!?\[(label)\]\((.*?)\)/).replace("label",h._label).getRegex(),reflink:x(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",h._label).getRegex()};h.gfm={...h.normal,escape:x(h.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/};h.gfm.url=x(h.gfm.url,"i").replace("email",h.gfm._extended_email).getRegex();h.breaks={...h.gfm,br:x(h.br).replace("{2,}","*").getRegex(),text:x(h.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};function Xt(r){return r.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function We(r){let e="",t,n;const s=r.length;for(t=0;t<s;t++)n=r.charCodeAt(t),Math.random()>.5&&(n="x"+n.toString(16)),e+="&#"+n+";";return e}class R{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||N,this.options.tokenizer=this.options.tokenizer||new ye,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:f.normal,inline:h.normal};this.options.pedantic?(t.block=f.pedantic,t.inline=h.pedantic):this.options.gfm&&(t.block=f.gfm,this.options.breaks?t.inline=h.breaks:t.inline=h.gfm),this.tokenizer.rules=t}static get rules(){return{block:f,inline:h}}static lex(e,t){return new R(t).lex(e)}static lexInline(e,t){return new R(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let t;for(;t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(l,a,u)=>a+"    ".repeat(u.length));let n,s,i,o;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(l=>(n=l.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.space(e)){e=e.substring(n.raw.length),n.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(n);continue}if(n=this.tokenizer.code(e)){e=e.substring(n.raw.length),s=t[t.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+n.raw,s.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(n);continue}if(n=this.tokenizer.fences(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.heading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.hr(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.blockquote(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.list(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.html(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.def(e)){e=e.substring(n.raw.length),s=t[t.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+n.raw,s.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=s.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.lheading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(i=e,this.options.extensions&&this.options.extensions.startBlock){let l=1/0;const a=e.slice(1);let u;this.options.extensions.startBlock.forEach(function(d){u=d.call({lexer:this},a),typeof u=="number"&&u>=0&&(l=Math.min(l,u))}),l<1/0&&l>=0&&(i=e.substring(0,l+1))}if(this.state.top&&(n=this.tokenizer.paragraph(i))){s=t[t.length-1],o&&s.type==="paragraph"?(s.raw+=`
`+n.raw,s.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(n),o=i.length!==e.length,e=e.substring(n.raw.length);continue}if(n=this.tokenizer.text(e)){e=e.substring(n.raw.length),s=t[t.length-1],s&&s.type==="text"?(s.raw+=`
`+n.raw,s.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(n);continue}if(e){const l="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n,s,i,o=e,l,a,u;if(this.tokens.links){const d=Object.keys(this.tokens.links);if(d.length>0)for(;(l=this.tokenizer.rules.inline.reflinkSearch.exec(o))!=null;)d.includes(l[0].slice(l[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,l.index)+"["+qe("a",l[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(l=this.tokenizer.rules.inline.blockSkip.exec(o))!=null;)o=o.slice(0,l.index)+"["+qe("a",l[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(l=this.tokenizer.rules.inline.escapedEmSt.exec(o))!=null;)o=o.slice(0,l.index+l[0].length-2)+"++"+o.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(;e;)if(a||(u=""),a=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(d=>(n=d.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.tag(e)){e=e.substring(n.raw.length),s=t[t.length-1],s&&n.type==="text"&&s.type==="text"?(s.raw+=n.raw,s.text+=n.text):t.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(n.raw.length),s=t[t.length-1],s&&n.type==="text"&&s.type==="text"?(s.raw+=n.raw,s.text+=n.text):t.push(n);continue}if(n=this.tokenizer.emStrong(e,o,u)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.codespan(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.br(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.del(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.autolink(e,We)){e=e.substring(n.raw.length),t.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(e,We))){e=e.substring(n.raw.length),t.push(n);continue}if(i=e,this.options.extensions&&this.options.extensions.startInline){let d=1/0;const c=e.slice(1);let m;this.options.extensions.startInline.forEach(function(p){m=p.call({lexer:this},c),typeof m=="number"&&m>=0&&(d=Math.min(d,m))}),d<1/0&&d>=0&&(i=e.substring(0,d+1))}if(n=this.tokenizer.inlineText(i,Xt)){e=e.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(u=n.raw.slice(-1)),a=!0,s=t[t.length-1],s&&s.type==="text"?(s.raw+=n.raw,s.text+=n.text):t.push(n);continue}if(e){const d="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(d);break}else throw new Error(d)}}return t}}class ve{constructor(e){this.options=e||N}code(e,t,n){const s=(t||"").match(/\S*/)[0];if(this.options.highlight){const i=this.options.highlight(e,s);i!=null&&i!==e&&(n=!0,e=i)}return e=e.replace(/\n$/,"")+`
`,s?'<pre><code class="'+this.options.langPrefix+w(s)+'">'+(n?e:w(e,!0))+`</code></pre>
`:"<pre><code>"+(n?e:w(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e){return e}heading(e,t,n,s){if(this.options.headerIds){const i=this.options.headerPrefix+s.slug(n);return`<h${t} id="${i}">${e}</h${t}>
`}return`<h${t}>${e}</h${t}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(e,t,n){const s=t?"ol":"ul",i=t&&n!==1?' start="'+n+'"':"";return"<"+s+i+`>
`+e+"</"+s+`>
`}listitem(e){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>
`}table(e,t){return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+t+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,t){const n=t.header?"th":"td";return(t.align?`<${n} align="${t.align}">`:`<${n}>`)+e+`</${n}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,t,n){if(e=Be(this.options.sanitize,this.options.baseUrl,e),e===null)return n;let s='<a href="'+e+'"';return t&&(s+=' title="'+t+'"'),s+=">"+n+"</a>",s}image(e,t,n){if(e=Be(this.options.sanitize,this.options.baseUrl,e),e===null)return n;let s=`<img src="${e}" alt="${n}"`;return t&&(s+=` title="${t}"`),s+=this.options.xhtml?"/>":">",s}text(e){return e}}class it{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}class rt{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let n=e,s=0;if(this.seen.hasOwnProperty(n)){s=this.seen[e];do s++,n=e+"-"+s;while(this.seen.hasOwnProperty(n))}return t||(this.seen[e]=s,this.seen[n]=0),n}slug(e,t={}){const n=this.serialize(e);return this.getNextSafeSlug(n,t.dryrun)}}class P{constructor(e){this.options=e||N,this.options.renderer=this.options.renderer||new ve,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new it,this.slugger=new rt}static parse(e,t){return new P(t).parse(e)}static parseInline(e,t){return new P(t).parseInline(e)}parse(e,t=!0){let n="",s,i,o,l,a,u,d,c,m,p,_,y,z,b,k,H,S,v,A;const q=e.length;for(s=0;s<q;s++){if(p=e[s],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[p.type]&&(A=this.options.extensions.renderers[p.type].call({parser:this},p),A!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(p.type))){n+=A||"";continue}switch(p.type){case"space":continue;case"hr":{n+=this.renderer.hr();continue}case"heading":{n+=this.renderer.heading(this.parseInline(p.tokens),p.depth,st(this.parseInline(p.tokens,this.textRenderer)),this.slugger);continue}case"code":{n+=this.renderer.code(p.text,p.lang,p.escaped);continue}case"table":{for(c="",d="",l=p.header.length,i=0;i<l;i++)d+=this.renderer.tablecell(this.parseInline(p.header[i].tokens),{header:!0,align:p.align[i]});for(c+=this.renderer.tablerow(d),m="",l=p.rows.length,i=0;i<l;i++){for(u=p.rows[i],d="",a=u.length,o=0;o<a;o++)d+=this.renderer.tablecell(this.parseInline(u[o].tokens),{header:!1,align:p.align[o]});m+=this.renderer.tablerow(d)}n+=this.renderer.table(c,m);continue}case"blockquote":{m=this.parse(p.tokens),n+=this.renderer.blockquote(m);continue}case"list":{for(_=p.ordered,y=p.start,z=p.loose,l=p.items.length,m="",i=0;i<l;i++)k=p.items[i],H=k.checked,S=k.task,b="",k.task&&(v=this.renderer.checkbox(H),z?k.tokens.length>0&&k.tokens[0].type==="paragraph"?(k.tokens[0].text=v+" "+k.tokens[0].text,k.tokens[0].tokens&&k.tokens[0].tokens.length>0&&k.tokens[0].tokens[0].type==="text"&&(k.tokens[0].tokens[0].text=v+" "+k.tokens[0].tokens[0].text)):k.tokens.unshift({type:"text",text:v}):b+=v),b+=this.parse(k.tokens,z),m+=this.renderer.listitem(b,S,H);n+=this.renderer.list(m,_,y);continue}case"html":{n+=this.renderer.html(p.text);continue}case"paragraph":{n+=this.renderer.paragraph(this.parseInline(p.tokens));continue}case"text":{for(m=p.tokens?this.parseInline(p.tokens):p.text;s+1<q&&e[s+1].type==="text";)p=e[++s],m+=`
`+(p.tokens?this.parseInline(p.tokens):p.text);n+=t?this.renderer.paragraph(m):m;continue}default:{const Ce='Token with "'+p.type+'" type was not found.';if(this.options.silent){console.error(Ce);return}else throw new Error(Ce)}}}return n}parseInline(e,t){t=t||this.renderer;let n="",s,i,o;const l=e.length;for(s=0;s<l;s++){if(i=e[s],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]&&(o=this.options.extensions.renderers[i.type].call({parser:this},i),o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type))){n+=o||"";continue}switch(i.type){case"escape":{n+=t.text(i.text);break}case"html":{n+=t.html(i.text);break}case"link":{n+=t.link(i.href,i.title,this.parseInline(i.tokens,t));break}case"image":{n+=t.image(i.href,i.title,i.text);break}case"strong":{n+=t.strong(this.parseInline(i.tokens,t));break}case"em":{n+=t.em(this.parseInline(i.tokens,t));break}case"codespan":{n+=t.codespan(i.text);break}case"br":{n+=t.br();break}case"del":{n+=t.del(this.parseInline(i.tokens,t));break}case"text":{n+=t.text(i.text);break}default:{const a='Token with "'+i.type+'" type was not found.';if(this.options.silent){console.error(a);return}else throw new Error(a)}}}return n}}class ce{constructor(e){this.options=e||N}preprocess(e){return e}postprocess(e){return e}}Ee(ce,"passThroughHooks",new Set(["preprocess","postprocess"]));function Kt(r,e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,r){const s="<p>An error occurred:</p><pre>"+w(n.message+"",!0)+"</pre>";if(e)return Promise.resolve(s);if(t){t(null,s);return}return s}if(e)return Promise.reject(n);if(t){t(n);return}throw n}}function ot(r,e){return(t,n,s)=>{typeof n=="function"&&(s=n,n=null);const i={...n};n={...g.defaults,...i};const o=Kt(n.silent,n.async,s);if(typeof t>"u"||t===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(Jt(n),n.hooks&&(n.hooks.options=n),s){const l=n.highlight;let a;try{n.hooks&&(t=n.hooks.preprocess(t)),a=r(t,n)}catch(c){return o(c)}const u=function(c){let m;if(!c)try{n.walkTokens&&g.walkTokens(a,n.walkTokens),m=e(a,n),n.hooks&&(m=n.hooks.postprocess(m))}catch(p){c=p}return n.highlight=l,c?o(c):s(null,m)};if(!l||l.length<3||(delete n.highlight,!a.length))return u();let d=0;g.walkTokens(a,function(c){c.type==="code"&&(d++,setTimeout(()=>{l(c.text,c.lang,function(m,p){if(m)return u(m);p!=null&&p!==c.text&&(c.text=p,c.escaped=!0),d--,d===0&&u()})},0))}),d===0&&u();return}if(n.async)return Promise.resolve(n.hooks?n.hooks.preprocess(t):t).then(l=>r(l,n)).then(l=>n.walkTokens?Promise.all(g.walkTokens(l,n.walkTokens)).then(()=>l):l).then(l=>e(l,n)).then(l=>n.hooks?n.hooks.postprocess(l):l).catch(o);try{n.hooks&&(t=n.hooks.preprocess(t));const l=r(t,n);n.walkTokens&&g.walkTokens(l,n.walkTokens);let a=e(l,n);return n.hooks&&(a=n.hooks.postprocess(a)),a}catch(l){return o(l)}}}function g(r,e,t){return ot(R.lex,P.parse)(r,e,t)}g.options=g.setOptions=function(r){return g.defaults={...g.defaults,...r},Mt(g.defaults),g};g.getDefaults=et;g.defaults=N;g.use=function(...r){const e=g.defaults.extensions||{renderers:{},childTokens:{}};r.forEach(t=>{const n={...t};if(n.async=g.defaults.async||n.async||!1,t.extensions&&(t.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if(s.renderer){const i=e.renderers[s.name];i?e.renderers[s.name]=function(...o){let l=s.renderer.apply(this,o);return l===!1&&(l=i.apply(this,o)),l}:e.renderers[s.name]=s.renderer}if(s.tokenizer){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");e[s.level]?e[s.level].unshift(s.tokenizer):e[s.level]=[s.tokenizer],s.start&&(s.level==="block"?e.startBlock?e.startBlock.push(s.start):e.startBlock=[s.start]:s.level==="inline"&&(e.startInline?e.startInline.push(s.start):e.startInline=[s.start]))}s.childTokens&&(e.childTokens[s.name]=s.childTokens)}),n.extensions=e),t.renderer){const s=g.defaults.renderer||new ve;for(const i in t.renderer){const o=s[i];s[i]=(...l)=>{let a=t.renderer[i].apply(s,l);return a===!1&&(a=o.apply(s,l)),a}}n.renderer=s}if(t.tokenizer){const s=g.defaults.tokenizer||new ye;for(const i in t.tokenizer){const o=s[i];s[i]=(...l)=>{let a=t.tokenizer[i].apply(s,l);return a===!1&&(a=o.apply(s,l)),a}}n.tokenizer=s}if(t.hooks){const s=g.defaults.hooks||new ce;for(const i in t.hooks){const o=s[i];ce.passThroughHooks.has(i)?s[i]=l=>{if(g.defaults.async)return Promise.resolve(t.hooks[i].call(s,l)).then(u=>o.call(s,u));const a=t.hooks[i].call(s,l);return o.call(s,a)}:s[i]=(...l)=>{let a=t.hooks[i].apply(s,l);return a===!1&&(a=o.apply(s,l)),a}}n.hooks=s}if(t.walkTokens){const s=g.defaults.walkTokens;n.walkTokens=function(i){let o=[];return o.push(t.walkTokens.call(this,i)),s&&(o=o.concat(s.call(this,i))),o}}g.setOptions(n)})};g.walkTokens=function(r,e){let t=[];for(const n of r)switch(t=t.concat(e.call(g,n)),n.type){case"table":{for(const s of n.header)t=t.concat(g.walkTokens(s.tokens,e));for(const s of n.rows)for(const i of s)t=t.concat(g.walkTokens(i.tokens,e));break}case"list":{t=t.concat(g.walkTokens(n.items,e));break}default:g.defaults.extensions&&g.defaults.extensions.childTokens&&g.defaults.extensions.childTokens[n.type]?g.defaults.extensions.childTokens[n.type].forEach(function(s){t=t.concat(g.walkTokens(n[s],e))}):n.tokens&&(t=t.concat(g.walkTokens(n.tokens,e)))}return t};g.parseInline=ot(R.lexInline,P.parseInline);g.Parser=P;g.parser=P.parse;g.Renderer=ve;g.TextRenderer=it;g.Lexer=R;g.lexer=R.lex;g.Tokenizer=ye;g.Slugger=rt;g.Hooks=ce;g.parse=g;g.options;g.setOptions;g.use;g.walkTokens;g.parseInline;P.parse;R.lex;const Yt="https://api.github.com/users/trustedshops-public/repos?per_page=100&type=owner",en=r=>{const e=new Map;return r.sort((n,s)=>s.stargazers_count-n.stargazers_count).forEach(n=>{const[s]=n.topics.filter(l=>l.startsWith("ts"));if(!s)return;const[i]=n.topics.filter(l=>l.startsWith("tp"));i&&(n.name=n.name.replace(i.replace("tp","")+"-",""));const o=s.substring(2);e.has(o)?e.set(o,[...e.get(o),n]):e.set(o,[n])}),new Map([...e.entries()].sort())},lt=ee`
  :host {
    /* Base Colors */
    --ts-blue-300: #0dbedc;
    --ts-pineapple-500: #ffdc0f;
    --ts-white: #ffffff;
    --ts-black: #000000;

    /* Supporting Gradations */
    --ts-blue-700: #005aa0;
    --ts-blue-500: #1c8dc6;

    --ts-pineapple-400: #ffee58;
    --ts-pineapple-600: #fec704;

    --ts-gray-50: #efefef;
    --ts-gray-100: #e5e5e5;
    --ts-gray-500: #808080;
    --ts-gray-700: #4d4d4d;
    --ts-gray-900: #1a1a1a;

    /* Signal Colors */
    --ts-green-500: #4db85f; /* Go */
    --ts-orange-500: #ffae00; /* Noun */
    --ts-red-500: #d63339; /* Stop */

    /* Applying Colors */
    --font-color: var(--ts-black);
    --background-color: var(--ts-white);
    --link-color: var(--ts-blue-700);

    --status-ok: var(--ts-green-500);
    --status-info: var(--ts-orange-500);
    --status-error: var(--ts-red-500);

    /* Font */
    --ts-font-family: 'Roboto', 'Arial', sans-serif;
    --ts-font-weight-bold: 700;
    --ts-font-weight-regular: 400;
    --ts-font-style-regular: normal;
    --ts-font-style-italic: italic;

    --font-size-3xl: 5.625rem;
    --font-size-2xl: 2.5rem;
    --font-size-xl: 1.625rem;
    --font-size-lg: 1.375rem;
    --font-size-md: 1.125rem;

    --line-height-3xl: 5.625rem;
    --line-height-2xl: normal;
    --line-height-xl: normal;
    --line-height-lg: 2rem;
    --line-height-md: normal;

    --ts-headline-1: normal normal var(--ts-font-weight-bold) normal
      var(--font-size-3xl) / var(--line-height-3xl) var(--ts-font-family);
    --ts-headline-2: normal normal var(--ts-font-weight-bold) normal
      var(--font-size-2xl) / var(--line-height-2xl) var(--ts-font-family);
    --ts-headline-3: normal normal var(--ts-font-weight-regular) normal
      var(--font-size-xl) / var(--font-size-xl) var(--ts-font-family);

    --ts-subheading: normal normal var(--ts-font-weight-regular) normal
      var(--font-size-lg) / var(--line-height-lg) var(--ts-font-family);

    --ts-copy: normal normal var(--ts-font-weight-regular) normal
      var(--font-size-md) / var(--line-height-md) var(--ts-font-family);

    --column-count: 3;
  }

  @media (prefers-color-scheme: dark) {
    :host {
      --font-color: var(--ts-gray-100);
      --background-color: var(--ts-gray-900);
    }
  }

  /*
  tablet specific
  */
  @media (max-width: 1200px) {
    :host {
      --column-count: 2;
    }
  }

  /*
      mobile specific
    */
  @media (max-width: 600px) {
    :host {
      --font-size-3xl: 2.75rem;
      --font-size-2xl: 1.5rem;
      --font-size-xl: 1.125rem;
      --font-size-lg: 1.125rem;
      --font-size-md: 1rem;

      --line-height-3xl: 2.75rem;
      --line-height-2xl: normal;
      --line-height-xl: normal;
      --line-height-lg: 1.5rem;
      --line-height-md: 1.5rem;
      --column-count: 1;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: var(--ts-copy);
  }
`;function at(r){return r.split("-").map(e=>`${e.charAt(0).toUpperCase()}${e.slice(1)}`).join(" ")}var tn=Object.defineProperty,nn=Object.getOwnPropertyDescriptor,Ae=(r,e,t,n)=>{for(var s=n>1?void 0:n?nn(e,t):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(s=(n?o(e,t,s):o(s))||s);return n&&s&&tn(e,t,s),s};let X=class extends T{constructor(){super(...arguments),this.repository="",this.repo={id:-1,name:"",html_url:"",description:"",created_at:"",updated_at:"",topics:[],stargazers_count:0}}connectedCallback(){super.connectedCallback(),this.repo=JSON.parse(this.repository),this.repo.name=at(this.repo.name)}render(){return U` <li class="card">
      <a class="card-link" href="${this.repo.html_url}">
        <h3>${this.repo.name}</h3>
        <p>${this.repo.description}</p>
      </a>
    </li>`}};X.styles=[lt,ee`
      .card {
        box-shadow:
          0 2px 6px 0 rgb(0 0 0 / 14%),
          0 1px 2px 0 rgb(0 0 0 / 8%),
          0 0 1px 0 rgb(0 0 0 / 6%),
          0 0 0 0 rgb(0 0 0 / 4%);
        background-color: var(--background-color);
        border-radius: 1rem;
        list-style: none;
        color: var(--font-color);
        height: 100%;
        transform: translateY(0);
        transition: transform 0.3s ease-in-out;
      }
      .card-link {
        display: flex;
        flex-direction: column;
        height: 100%;
        gap: 1rem;
        padding: 1rem;
        text-decoration: none;
      }
      .card:hover {
        box-shadow:
          0 6px 10px 0 rgb(0 0 0 / 14%),
          0 3px 4px 0 rgb(0 0 0 / 8%),
          0 2px 3px 0 rgb(0 0 0 / 6%),
          0 2px 2px 0 rgb(0 0 0 / 4%);
        transform: translateY(-0.5rem);
        transition: transform 0.2s ease-in-out;
      }
      h3 {
        font: var(--ts-headline-3);
        color: var(--font-color);
        flex: 1;
      }
      p {
        font: var(--ts-copy);
        color: var(--font-color);
        flex: 1;
      }
      ul {
        display: flex;
        gap: 0.5rem;
      }
      li:not(.card) {
        list-style: none;
        font-size: 1rem;
      }
      @media (prefers-color-scheme: dark) {
        .card {
          box-shadow: none;
          border: 1px solid var(--ts-gray-700);
        }
        .card:hover {
          border-color: var(--ts-white);
        }
      }
    `];Ae([ne()],X.prototype,"repository",2);Ae([se()],X.prototype,"repo",2);X=Ae([ue("ts-card")],X);var sn=Object.defineProperty,rn=Object.getOwnPropertyDescriptor,de=(r,e,t,n)=>{for(var s=n>1?void 0:n?rn(e,t):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(s=(n?o(e,t,s):o(s))||s);return n&&s&&sn(e,t,s),s};let Z=class extends T{constructor(){super(...arguments),this.list="",this.title="",this.repositories=[]}connectedCallback(){super.connectedCallback(),this.repositories=JSON.parse(this.list),this.title=at(JSON.parse(this.title))}render(){return U` <section>
      <h2>${this.title}</h2>
      <ul>
        ${this.repositories.map(r=>U` <ts-card
            repository="${JSON.stringify(r)}"
          ></ts-card>`)}
      </ul>
    </section>`}};Z.styles=[lt,ee`
      h2 {
        font: var(--ts-headline-2);
        margin-bottom: 1rem;
        margin-left: 1rem;
      }
      section {
        max-width: 1200px;
        margin: auto;
        padding: var(--font-size-lg);
        color: var(--font-color);
      }

      ul {
        display: grid;
        grid-template-columns: repeat(var(--column-count), minmax(0, 1fr));
        grid-auto-rows: 1fr;
        gap: 1.5rem;
      }
    `];de([ne()],Z.prototype,"list",2);de([ne()],Z.prototype,"title",2);de([se()],Z.prototype,"repositories",2);Z=de([ue("ts-section")],Z);var on=Object.defineProperty,ln=Object.getOwnPropertyDescriptor,Se=(r,e,t,n)=>{for(var s=n>1?void 0:n?ln(e,t):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(s=(n?o(e,t,s):o(s))||s);return n&&s&&on(e,t,s),s};let K=class extends T{constructor(){super(...arguments),this.data=new Map,this.intro=""}async connectedCallback(){super.connectedCallback();try{const e=await(await fetch("/intro.md")).text();this.intro=g.parse(e)}catch{this.intro="Normally you would see an intro here, but something went horribly wrong."}try{const e=await(await fetch(Yt)).json();this.data=en(e)}catch{alert(`Failed to load GitHub Repositories using Github API.
It might be you have been refreshing the page to often or GitHub currently has problems.
Please come back later or directly check on GitHub.
Thank your for understanding. `)}}render(){return U`
      <main>
        <div class="badge">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 500"
            width="100"
          >
            <circle class="cls-1" cx="250" cy="250" r="249" />
            <g>
              <path
                d="M250,66A184.05,184.05,0,1,0,434.05,250,184,184,0,0,0,250,66Zm-1.52,299.43a116,116,0,1,1,116-116A116,116,0,0,1,248.48,365.38Z"
              />
              <path
                d="M298.88,285.82C282,310.76,258.55,333.49,227,333.49c-33.37,0-52.8-20.9-52.8-54.63,0-54.63,40.33-108.16,97.16-108.16,19.06,0,44.73,7.7,44.73,30.8,0,41.43-64.9,55.36-96.8,63.43-1.1,7-2.19,13.93-2.19,20.89,0,14.3,7.69,27.5,23.46,27.5,20.53,0,37-19.8,49.13-34.46Zm-17.6-89.09c0-8.43-4.77-15-13.57-15-26.4,0-40,51.33-45.09,71.49C247.18,245.86,281.28,225.7,281.28,196.73Z"
              />
            </g>
          </svg>
        </div>
        <div class="intro">${Lt(this.intro)}</div>
        ${Array.from(this.data).map(([r,e])=>U` <ts-section
            list="${JSON.stringify(e)}"
            title="${JSON.stringify(r)}"
          ></ts-section>`)}
      </main>
    `}};K.styles=ee`
    main {
      max-width: 1200px;
      margin: auto;
      position: relative;
    }

    p {
      font: var(--ts-subheading);
      color: var(--font-color);
    }

    .intro {
      background-color: var(--background-color);
      margin-top: -100px;
      border-radius: 40px 40px 0 0;
      padding: 80px 20px 40px;
      position: relative;
      box-shadow:
        -30px -20px 30px -30px rgb(0 0 0 / 50%),
        30px -20px 30px -30px rgb(0 0 0 / 50%);
    }

    .intro p {
      max-width: 40em;
      margin: auto;
    }

    .badge {
      position: absolute;
      left: 0;
      right: 0;
      text-align: center;
      z-index: 10;
      margin-top: -80px;
    }

    .badge svg {
      padding: 1rem;
      border-radius: 50%;
      background-color: var(--background-color);
      box-shadow: 0px 0px 30px rgb(0 0 0 / 40%);
    }

    .badge circle {
      fill: var(--ts-black);
    }

    .badge g {
      fill: var(--ts-white);
    }

    @media (prefers-color-scheme: dark) {
      .badge circle {
        fill: var(--ts-white);
      }

      .badge g {
        fill: var(--background-color);
      }
    }
  `;Se([se()],K.prototype,"data",2);Se([se()],K.prototype,"intro",2);K=Se([ue("ts-main")],K);var an=Object.defineProperty,hn=Object.getOwnPropertyDescriptor,ze=(r,e,t,n)=>{for(var s=n>1?void 0:n?hn(e,t):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(s=(n?o(e,t,s):o(s))||s);return n&&s&&an(e,t,s),s};const Qe={mobile:"0 0 320 64",tablet:"0 0 768 71",desktop:"0 0 1920 122"};let Y=class extends T{constructor(){super(...arguments),this.direction="top"}detectDeviceType(){const{matches:r}=window.matchMedia("(max-width: 600px"),{matches:e}=window.matchMedia("(max-width: 1200px");r?this.device="mobile":e?this.device="tablet":this.device="desktop"}connectedCallback(){super.connectedCallback(),this.detectDeviceType(),window.addEventListener("resize",()=>{this.detectDeviceType()})}render(){return this.direction==="bottom"?U` <svg
        viewBox="${Qe[this.device]}"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="none" stroke-width="1" fill-rule="evenodd">
          <defs>
            <path
              id="bottom-wave-desktop"
              d="M960,41 C1120,68 1280,81.5 1440,81.5 C1600,81.5 1760,68 1920,41 L1920,122 L0,122 L0,41 C160,13.6666667 320,0 480,0 C640,0 800,13.6666667 960,41 Z"
              transform="translate(960.000000, 61.000000) scale(1, -1) translate(-960.000000, -61.000000) "
            ></path>
            <path
              id="bottom-wave-tablet"
              d="M384,23.5 C448,39.3333333 512,47.25 576,47.25 C640,47.25 704,39.3333333 768,23.5 L768,71 L0,71 L0,23.5 C64,7.83333333 128,0 192,0 C256,0 320,7.83333333 384,23.5 Z"
              transform="translate(384.000000, 35.500000) scale(1, -1) translate(-384.000000, -35.500000) "
            ></path>
            <path
              id="bottom-wave-mobile"
              d="M0,52.0718184 C23.1785656,60.2244933 47.8532981,64.3008307 74.0241975,64.3008307 C100.195097,64.3008307 127.702288,60.2244933 156.545771,52.0718184 C186.84494,42.3484447 215.489146,37.4867579 242.478388,37.4867579 C269.46763,37.4867579 295.308168,42.3484447 320,52.0718184 L320,-8.52651283e-14 L0,-8.52651283e-14 L0,52.0718184 Z"
              transform="translate(160.000000, 32.150415) scale(-1, 1) translate(-160.000000, -32.150415) "
            ></path>
          </defs>
        </g>

        <use href="#bottom-wave-${this.device}" fill="#FFDC0F" />
      </svg>`:U` <svg
      viewBox="${Qe[this.device]}"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="none" stroke-width="1" fill-rule="evenodd">
        <defs>
          <path
            id="top-wave-desktop"
            d="M960,41 C1120,68 1280,81.5 1440,81.5 C1600,81.5 1760,68 1920,41 L1920,122 L-3.54702934e-11,122 L-3.54702934e-11,41 C160,13.6666667 320,0 480,0 C640,0 800,13.6666667 960,41 Z"
            transform="translate(960.000000, 61.000000) scale(-1, 1) translate(-960.000000, -61.000000) "
          ></path>
          <path
            id="top-wave-tablet"
            d="M384,23.5 C448,39.3333333 512,47.25 576,47.25 C640,47.25 704,39.3333333 768,23.5 L768,71 L5.22959454e-12,71 L5.22959454e-12,23.5 C64,7.83333333 128,0 192,0 C256,0 320,7.83333333 384,23.5 Z"
            transform="translate(384.000000, 35.500000) scale(-1, 1) translate(-384.000000, -35.500000) "
          ></path>
          <path
            id="top-wave-mobile"
            d="M0,52.0718184 C23.1785656,60.2244933 47.8532981,64.3008307 74.0241975,64.3008307 C100.195097,64.3008307 127.702288,60.2244933 156.545771,52.0718184 C186.84494,42.3484447 215.489146,37.4867579 242.478388,37.4867579 C269.46763,37.4867579 295.308168,42.3484447 320,52.0718184 L320,-8.52651283e-14 L0,-8.52651283e-14 L0,52.0718184 Z"
            transform="translate(160.000000, 32.150415) scale(1, -1) translate(-160.000000, -32.150415) "
          ></path>
        </defs>

        <use href="#top-wave-${this.device}" fill="#FFDC0F" />
      </g>
    </svg>`}};Y.styles=ee`
    svg {
      display: block;
    }
  `;ze([ne({type:String})],Y.prototype,"direction",2);ze([se()],Y.prototype,"device",2);Y=ze([ue("ts-wave")],Y);
