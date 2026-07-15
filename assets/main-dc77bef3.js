var pt=Object.defineProperty;var ut=(r,e,t)=>e in r?pt(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Te=(r,e,t)=>(ut(r,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ne=window,_e=ne.ShadowRoot&&(ne.ShadyCSS===void 0||ne.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ve=Symbol(),Re=new WeakMap;let Ge=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==ve)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(_e&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=Re.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Re.set(t,e))}return e}toString(){return this.cssText}};const dt=r=>new Ge(typeof r=="string"?r:r+"",void 0,ve),K=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((n,i,s)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[s+1],r[0]);return new Ge(t,r,ve)},ft=(r,e)=>{_e?r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const n=document.createElement("style"),i=ne.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=t.cssText,r.appendChild(n)})},Oe=_e?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return dt(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var pe;const se=window,Pe=se.trustedTypes,gt=Pe?Pe.emptyScript:"",Le=se.reactiveElementPolyfillSupport,be={toAttribute(r,e){switch(e){case Boolean:r=r?gt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Ke=(r,e)=>e!==r&&(e==e||r==r),ue={attribute:!0,type:String,converter:be,reflect:!1,hasChanged:Ke},$e="finalized";let D=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,n)=>{const i=this._$Ep(n,t);i!==void 0&&(this._$Ev.set(i,n),e.push(i))}),e}static createProperty(e,t=ue){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,n,t);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(i){const s=this[e];this[t]=i,this.requestUpdate(e,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||ue}static finalize(){if(this.hasOwnProperty($e))return!1;this[$e]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,n=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of n)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const i of n)t.unshift(Oe(i))}else e!==void 0&&t.push(Oe(e));return t}static _$Ep(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,n;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return ft(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostConnected)===null||n===void 0?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostDisconnected)===null||n===void 0?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t,n=ue){var i;const s=this.constructor._$Ep(e,n);if(s!==void 0&&n.reflect===!0){const o=(((i=n.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?n.converter:be).toAttribute(t,n.type);this._$El=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$El=null}}_$AK(e,t){var n;const i=this.constructor,s=i._$Ev.get(e);if(s!==void 0&&this._$El!==s){const o=i.getPropertyOptions(s),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?o.converter:be;this._$El=s,this[s]=l.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,n){let i=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||Ke)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,s)=>this[s]=i),this._$Ei=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdate)===null||s===void 0?void 0:s.call(i)}),this.update(n)):this._$Ek()}catch(i){throw t=!1,this._$Ek(),i}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(n=>{var i;return(i=n.hostUpdated)===null||i===void 0?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,n)=>this._$EO(n,this[n],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};D[$e]=!0,D.elementProperties=new Map,D.elementStyles=[],D.shadowRootOptions={mode:"open"},Le==null||Le({ReactiveElement:D}),((pe=se.reactiveElementVersions)!==null&&pe!==void 0?pe:se.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var de;const re=window,H=re.trustedTypes,Ie=H?H.createPolicy("lit-html",{createHTML:r=>r}):void 0,ke="$lit$",z=`lit$${(Math.random()+"").slice(9)}$`,Xe="?"+z,mt=`<${Xe}>`,L=document,V=()=>L.createComment(""),F=r=>r===null||typeof r!="object"&&typeof r!="function",Ye=Array.isArray,xt=r=>Ye(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",fe=`[ 	
\f\r]`,q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Me=/-->/g,Ne=/>/g,O=RegExp(`>|${fe}(?:([^\\s"'>=/]+)(${fe}*=${fe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ue=/'/g,De=/"/g,et=/^(?:script|style|textarea|title)$/i,bt=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),I=bt(1),M=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),He=new WeakMap,P=L.createTreeWalker(L,129,null,!1);function tt(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ie!==void 0?Ie.createHTML(e):e}const $t=(r,e)=>{const t=r.length-1,n=[];let i,s=e===2?"<svg>":"",o=q;for(let l=0;l<t;l++){const a=r[l];let h,u,d=-1,f=0;for(;f<a.length&&(o.lastIndex=f,u=o.exec(a),u!==null);)f=o.lastIndex,o===q?u[1]==="!--"?o=Me:u[1]!==void 0?o=Ne:u[2]!==void 0?(et.test(u[2])&&(i=RegExp("</"+u[2],"g")),o=O):u[3]!==void 0&&(o=O):o===O?u[0]===">"?(o=i??q,d=-1):u[1]===void 0?d=-2:(d=o.lastIndex-u[2].length,h=u[1],o=u[3]===void 0?O:u[3]==='"'?De:Ue):o===De||o===Ue?o=O:o===Me||o===Ne?o=q:(o=O,i=void 0);const c=o===O&&r[l+1].startsWith("/>")?" ":"";s+=o===q?a+mt:d>=0?(n.push(h),a.slice(0,d)+ke+a.slice(d)+z+c):a+z+(d===-2?(n.push(void 0),l):c)}return[tt(r,s+(r[t]||"<?>")+(e===2?"</svg>":"")),n]};class Q{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let s=0,o=0;const l=e.length-1,a=this.parts,[h,u]=$t(e,t);if(this.el=Q.createElement(h,n),P.currentNode=this.el.content,t===2){const d=this.el.content,f=d.firstChild;f.remove(),d.append(...f.childNodes)}for(;(i=P.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes()){const d=[];for(const f of i.getAttributeNames())if(f.endsWith(ke)||f.startsWith(z)){const c=u[o++];if(d.push(f),c!==void 0){const v=i.getAttribute(c.toLowerCase()+ke).split(z),w=/([.?@])?(.*)/.exec(c);a.push({type:1,index:s,name:w[2],strings:v,ctor:w[1]==="."?wt:w[1]==="?"?vt:w[1]==="@"?yt:ae})}else a.push({type:6,index:s})}for(const f of d)i.removeAttribute(f)}if(et.test(i.tagName)){const d=i.textContent.split(z),f=d.length-1;if(f>0){i.textContent=H?H.emptyScript:"";for(let c=0;c<f;c++)i.append(d[c],V()),P.nextNode(),a.push({type:2,index:++s});i.append(d[f],V())}}}else if(i.nodeType===8)if(i.data===Xe)a.push({type:2,index:s});else{let d=-1;for(;(d=i.data.indexOf(z,d+1))!==-1;)a.push({type:7,index:s}),d+=z.length-1}s++}}static createElement(e,t){const n=L.createElement("template");return n.innerHTML=e,n}}function B(r,e,t=r,n){var i,s,o,l;if(e===M)return e;let a=n!==void 0?(i=t._$Co)===null||i===void 0?void 0:i[n]:t._$Cl;const h=F(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==h&&((s=a==null?void 0:a._$AO)===null||s===void 0||s.call(a,!1),h===void 0?a=void 0:(a=new h(r),a._$AT(r,t,n)),n!==void 0?((o=(l=t)._$Co)!==null&&o!==void 0?o:l._$Co=[])[n]=a:t._$Cl=a),a!==void 0&&(e=B(r,a._$AS(r,e.values),a,n)),e}class kt{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:i}=this._$AD,s=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:L).importNode(n,!0);P.currentNode=s;let o=P.nextNode(),l=0,a=0,h=i[0];for(;h!==void 0;){if(l===h.index){let u;h.type===2?u=new X(o,o.nextSibling,this,e):h.type===1?u=new h.ctor(o,h.name,h.strings,this,e):h.type===6&&(u=new At(o,this,e)),this._$AV.push(u),h=i[++a]}l!==(h==null?void 0:h.index)&&(o=P.nextNode(),l++)}return P.currentNode=L,s}v(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class X{constructor(e,t,n,i){var s;this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cp=(s=i==null?void 0:i.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=B(this,e,t),F(e)?e===$||e==null||e===""?(this._$AH!==$&&this._$AR(),this._$AH=$):e!==this._$AH&&e!==M&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):xt(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==$&&F(this._$AH)?this._$AA.nextSibling.data=e:this.$(L.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Q.createElement(tt(i.h,i.h[0]),this.options)),i);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.v(n);else{const o=new kt(s,this),l=o.u(this.options);o.v(n),this.$(l),this._$AH=o}}_$AC(e){let t=He.get(e.strings);return t===void 0&&He.set(e.strings,t=new Q(e)),t}T(e){Ye(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,i=0;for(const s of e)i===t.length?t.push(n=new X(this.k(V()),this.k(V()),this,this.options)):n=t[i],n._$AI(s),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class ae{constructor(e,t,n,i,s){this.type=1,this._$AH=$,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=$}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,i){const s=this.strings;let o=!1;if(s===void 0)e=B(this,e,t,0),o=!F(e)||e!==this._$AH&&e!==M,o&&(this._$AH=e);else{const l=e;let a,h;for(e=s[0],a=0;a<s.length-1;a++)h=B(this,l[n+a],t,a),h===M&&(h=this._$AH[a]),o||(o=!F(h)||h!==this._$AH[a]),h===$?e=$:e!==$&&(e+=(h??"")+s[a+1]),this._$AH[a]=h}o&&!i&&this.j(e)}j(e){e===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class wt extends ae{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===$?void 0:e}}const _t=H?H.emptyScript:"";class vt extends ae{constructor(){super(...arguments),this.type=4}j(e){e&&e!==$?this.element.setAttribute(this.name,_t):this.element.removeAttribute(this.name)}}class yt extends ae{constructor(e,t,n,i,s){super(e,t,n,i,s),this.type=5}_$AI(e,t=this){var n;if((e=(n=B(this,e,t,0))!==null&&n!==void 0?n:$)===M)return;const i=this._$AH,s=e===$&&i!==$||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==$&&(i===$||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}class At{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){B(this,e)}}const Be=re.litHtmlPolyfillSupport;Be==null||Be(Q,X),((de=re.litHtmlVersions)!==null&&de!==void 0?de:re.litHtmlVersions=[]).push("2.8.0");const St=(r,e,t)=>{var n,i;const s=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:e;let o=s._$litPart$;if(o===void 0){const l=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:null;s._$litPart$=o=new X(e.insertBefore(V(),l),l,void 0,t??{})}return o._$AI(r),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ge,me;class C extends D{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=St(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return M}}C.finalized=!0,C._$litElement$=!0,(ge=globalThis.litElementHydrateSupport)===null||ge===void 0||ge.call(globalThis,{LitElement:C});const Ze=globalThis.litElementPolyfillSupport;Ze==null||Ze({LitElement:C});((me=globalThis.litElementVersions)!==null&&me!==void 0?me:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const he=r=>e=>typeof e=="function"?((t,n)=>(customElements.define(t,n),n))(r,e):((t,n)=>{const{kind:i,elements:s}=n;return{kind:i,elements:s,finisher(o){customElements.define(t,o)}}})(r,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Et=(r,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,r)}},zt=(r,e,t)=>{e.constructor.createProperty(t,r)};function Y(r){return(e,t)=>t!==void 0?zt(r,e,t):Et(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ee(r){return Y({...r,state:!0})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var xe;((xe=window.HTMLSlotElement)===null||xe===void 0?void 0:xe.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ct={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Tt=r=>(...e)=>({_$litDirective$:r,values:e});class Rt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class we extends Rt{constructor(e){if(super(e),this.et=$,e.type!==Ct.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===$||e==null)return this.ft=void 0,this.et=e;if(e===M)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}we.directiveName="unsafeHTML",we.resultType=1;const Ot=Tt(we);function nt(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let N=nt();function Pt(r){N=r}const it=/[&<>"']/,Lt=new RegExp(it.source,"g"),st=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,It=new RegExp(st.source,"g"),Mt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},je=r=>Mt[r];function _(r,e){if(e){if(it.test(r))return r.replace(Lt,je)}else if(st.test(r))return r.replace(It,je);return r}const Nt=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function rt(r){return r.replace(Nt,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const Ut=/(^|[^\[])\^/g;function x(r,e){r=typeof r=="string"?r:r.source,e=e||"";const t={replace:(n,i)=>(i=i.source||i,i=i.replace(Ut,"$1"),r=r.replace(n,i),t),getRegex:()=>new RegExp(r,e)};return t}const Dt=/[^\w:]/g,Ht=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function qe(r,e,t){if(r){let n;try{n=decodeURIComponent(rt(t)).replace(Dt,"").toLowerCase()}catch{return null}if(n.indexOf("javascript:")===0||n.indexOf("vbscript:")===0||n.indexOf("data:")===0)return null}e&&!Ht.test(t)&&(t=qt(e,t));try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const te={},Bt=/^[^:]+:\/*[^/]*$/,Zt=/^([^:]+:)[\s\S]*$/,jt=/^([^:]+:\/*[^/]*)[\s\S]*$/;function qt(r,e){te[" "+r]||(Bt.test(r)?te[" "+r]=r+"/":te[" "+r]=ie(r,"/",!0)),r=te[" "+r];const t=r.indexOf(":")===-1;return e.substring(0,2)==="//"?t?e:r.replace(Zt,"$1")+e:e.charAt(0)==="/"?t?e:r.replace(jt,"$1")+e:r+e}const oe={exec:function(){}};function Ve(r,e){const t=r.replace(/\|/g,(s,o,l)=>{let a=!1,h=o;for(;--h>=0&&l[h]==="\\";)a=!a;return a?"|":" |"}),n=t.split(/ \|/);let i=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;i<n.length;i++)n[i]=n[i].trim().replace(/\\\|/g,"|");return n}function ie(r,e,t){const n=r.length;if(n===0)return"";let i=0;for(;i<n;){const s=r.charAt(n-i-1);if(s===e&&!t)i++;else if(s!==e&&t)i++;else break}return r.slice(0,n-i)}function Vt(r,e){if(r.indexOf(e[1])===-1)return-1;const t=r.length;let n=0,i=0;for(;i<t;i++)if(r[i]==="\\")i++;else if(r[i]===e[0])n++;else if(r[i]===e[1]&&(n--,n<0))return i;return-1}function Ft(r){r&&r.sanitize&&!r.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function Fe(r,e){if(e<1)return"";let t="";for(;e>1;)e&1&&(t+=r),e>>=1,r+=r;return t+r}function Qe(r,e,t,n){const i=e.href,s=e.title?_(e.title):null,o=r[1].replace(/\\([\[\]])/g,"$1");if(r[0].charAt(0)!=="!"){n.state.inLink=!0;const l={type:"link",raw:t,href:i,title:s,text:o,tokens:n.inlineTokens(o)};return n.state.inLink=!1,l}return{type:"image",raw:t,href:i,title:s,text:_(o)}}function Qt(r,e){const t=r.match(/^(\s+)(?:```)/);if(t===null)return e;const n=t[1];return e.split(`
`).map(i=>{const s=i.match(/^\s+/);if(s===null)return i;const[o]=s;return o.length>=n.length?i.slice(n.length):i}).join(`
`)}class ye{constructor(e){this.options=e||N}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:ie(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],i=Qt(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline._escapes,"$1"):t[2],text:i}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(/#$/.test(n)){const i=ie(n,"#");(this.options.pedantic||!i||/ $/.test(i))&&(n=i.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const n=t[0].replace(/^ *>[ \t]?/gm,""),i=this.lexer.state.top;this.lexer.state.top=!0;const s=this.lexer.blockTokens(n);return this.lexer.state.top=i,{type:"blockquote",raw:t[0],tokens:s,text:n}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n,i,s,o,l,a,h,u,d,f,c,v,w=t[1].trim();const E=w.length>1,b={type:"list",raw:"",ordered:E,start:E?+w.slice(0,-1):"",loose:!1,items:[]};w=E?`\\d{1,9}\\${w.slice(-1)}`:`\\${w}`,this.options.pedantic&&(w=E?w:"[*+-]");const k=new RegExp(`^( {0,3}${w})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;e&&(v=!1,!(!(t=k.exec(e))||this.rules.block.hr.test(e)));){if(n=t[0],e=e.substring(n.length),u=t[2].split(`
`,1)[0].replace(/^\t+/,S=>" ".repeat(3*S.length)),d=e.split(`
`,1)[0],this.options.pedantic?(o=2,c=u.trimLeft()):(o=t[2].search(/[^ ]/),o=o>4?1:o,c=u.slice(o),o+=t[1].length),a=!1,!u&&/^ *$/.test(d)&&(n+=d+`
`,e=e.substring(d.length+1),v=!0),!v){const S=new RegExp(`^ {0,${Math.min(3,o-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),y=new RegExp(`^ {0,${Math.min(3,o-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),A=new RegExp(`^ {0,${Math.min(3,o-1)}}(?:\`\`\`|~~~)`),j=new RegExp(`^ {0,${Math.min(3,o-1)}}#`);for(;e&&(f=e.split(`
`,1)[0],d=f,this.options.pedantic&&(d=d.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(A.test(d)||j.test(d)||S.test(d)||y.test(e)));){if(d.search(/[^ ]/)>=o||!d.trim())c+=`
`+d.slice(o);else{if(a||u.search(/[^ ]/)>=4||A.test(u)||j.test(u)||y.test(u))break;c+=`
`+d}!a&&!d.trim()&&(a=!0),n+=f+`
`,e=e.substring(f.length+1),u=d.slice(o)}}b.loose||(h?b.loose=!0:/\n *\n *$/.test(n)&&(h=!0)),this.options.gfm&&(i=/^\[[ xX]\] /.exec(c),i&&(s=i[0]!=="[ ] ",c=c.replace(/^\[[ xX]\] +/,""))),b.items.push({type:"list_item",raw:n,task:!!i,checked:s,loose:!1,text:c}),b.raw+=n}b.items[b.items.length-1].raw=n.trimRight(),b.items[b.items.length-1].text=c.trimRight(),b.raw=b.raw.trimRight();const U=b.items.length;for(l=0;l<U;l++)if(this.lexer.state.top=!1,b.items[l].tokens=this.lexer.blockTokens(b.items[l].text,[]),!b.loose){const S=b.items[l].tokens.filter(A=>A.type==="space"),y=S.length>0&&S.some(A=>/\n.*\n/.test(A.raw));b.loose=y}if(b.loose)for(l=0;l<U;l++)b.items[l].loose=!0;return b}}html(e){const t=this.rules.block.html.exec(e);if(t){const n={type:"html",raw:t[0],pre:!this.options.sanitizer&&(t[1]==="pre"||t[1]==="script"||t[1]==="style"),text:t[0]};if(this.options.sanitize){const i=this.options.sanitizer?this.options.sanitizer(t[0]):_(t[0]);n.type="paragraph",n.text=i,n.tokens=this.lexer.inline(i)}return n}}def(e){const t=this.rules.block.def.exec(e);if(t){const n=t[1].toLowerCase().replace(/\s+/g," "),i=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",s=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline._escapes,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:i,title:s}}}table(e){const t=this.rules.block.table.exec(e);if(t){const n={type:"table",header:Ve(t[1]).map(i=>({text:i})),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(n.header.length===n.align.length){n.raw=t[0];let i=n.align.length,s,o,l,a;for(s=0;s<i;s++)/^ *-+: *$/.test(n.align[s])?n.align[s]="right":/^ *:-+: *$/.test(n.align[s])?n.align[s]="center":/^ *:-+ *$/.test(n.align[s])?n.align[s]="left":n.align[s]=null;for(i=n.rows.length,s=0;s<i;s++)n.rows[s]=Ve(n.rows[s],n.header.length).map(h=>({text:h}));for(i=n.header.length,o=0;o<i;o++)n.header[o].tokens=this.lexer.inline(n.header[o].text);for(i=n.rows.length,o=0;o<i;o++)for(a=n.rows[o],l=0;l<a.length;l++)a[l].tokens=this.lexer.inline(a[l].text);return n}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:_(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):_(t[0]):t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const o=ie(n.slice(0,-1),"\\");if((n.length-o.length)%2===0)return}else{const o=Vt(t[2],"()");if(o>-1){const a=(t[0].indexOf("!")===0?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,a).trim(),t[3]=""}}let i=t[2],s="";if(this.options.pedantic){const o=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);o&&(i=o[1],s=o[3])}else s=t[3]?t[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(n)?i=i.slice(1):i=i.slice(1,-1)),Qe(t,{href:i&&i.replace(this.rules.inline._escapes,"$1"),title:s&&s.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let i=(n[2]||n[1]).replace(/\s+/g," ");if(i=t[i.toLowerCase()],!i){const s=n[0].charAt(0);return{type:"text",raw:s,text:s}}return Qe(n,i,n[0],this.lexer)}}emStrong(e,t,n=""){let i=this.rules.inline.emStrong.lDelim.exec(e);if(!i||i[3]&&n.match(/[\p{L}\p{N}]/u))return;const s=i[1]||i[2]||"";if(!s||s&&(n===""||this.rules.inline.punctuation.exec(n))){const o=i[0].length-1;let l,a,h=o,u=0;const d=i[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(d.lastIndex=0,t=t.slice(-1*e.length+o);(i=d.exec(t))!=null;){if(l=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!l)continue;if(a=l.length,i[3]||i[4]){h+=a;continue}else if((i[5]||i[6])&&o%3&&!((o+a)%3)){u+=a;continue}if(h-=a,h>0)continue;a=Math.min(a,a+h+u);const f=e.slice(0,o+i.index+(i[0].length-l.length)+a);if(Math.min(o,a)%2){const v=f.slice(1,-1);return{type:"em",raw:f,text:v,tokens:this.lexer.inlineTokens(v)}}const c=f.slice(2,-2);return{type:"strong",raw:f,text:c,tokens:this.lexer.inlineTokens(c)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(/\n/g," ");const i=/[^ ]/.test(n),s=/^ /.test(n)&&/ $/.test(n);return i&&s&&(n=n.substring(1,n.length-1)),n=_(n,!0),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e,t){const n=this.rules.inline.autolink.exec(e);if(n){let i,s;return n[2]==="@"?(i=_(this.options.mangle?t(n[1]):n[1]),s="mailto:"+i):(i=_(n[1]),s=i),{type:"link",raw:n[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}url(e,t){let n;if(n=this.rules.inline.url.exec(e)){let i,s;if(n[2]==="@")i=_(this.options.mangle?t(n[0]):n[0]),s="mailto:"+i;else{let o;do o=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0];while(o!==n[0]);i=_(n[0]),n[1]==="www."?s="http://"+n[0]:s=n[0]}return{type:"link",raw:n[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e,t){const n=this.rules.inline.text.exec(e);if(n){let i;return this.lexer.state.inRawBlock?i=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):_(n[0]):n[0]:i=_(this.options.smartypants?t(n[0]):n[0]),{type:"text",raw:n[0],text:i}}}}const g={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:oe,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};g._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;g._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;g.def=x(g.def).replace("label",g._label).replace("title",g._title).getRegex();g.bullet=/(?:[*+-]|\d{1,9}[.)])/;g.listItemStart=x(/^( *)(bull) */).replace("bull",g.bullet).getRegex();g.list=x(g.list).replace(/bull/g,g.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+g.def.source+")").getRegex();g._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";g._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;g.html=x(g.html,"i").replace("comment",g._comment).replace("tag",g._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();g.paragraph=x(g._paragraph).replace("hr",g.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",g._tag).getRegex();g.blockquote=x(g.blockquote).replace("paragraph",g.paragraph).getRegex();g.normal={...g};g.gfm={...g.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"};g.gfm.table=x(g.gfm.table).replace("hr",g.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",g._tag).getRegex();g.gfm.paragraph=x(g._paragraph).replace("hr",g.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",g.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",g._tag).getRegex();g.pedantic={...g.normal,html:x(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",g._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:oe,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:x(g.normal._paragraph).replace("hr",g.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",g.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const p={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:oe,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:oe,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};p._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";p.punctuation=x(p.punctuation).replace(/punctuation/g,p._punctuation).getRegex();p.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;p.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g;p._comment=x(g._comment).replace("(?:-->|$)","-->").getRegex();p.emStrong.lDelim=x(p.emStrong.lDelim).replace(/punct/g,p._punctuation).getRegex();p.emStrong.rDelimAst=x(p.emStrong.rDelimAst,"g").replace(/punct/g,p._punctuation).getRegex();p.emStrong.rDelimUnd=x(p.emStrong.rDelimUnd,"g").replace(/punct/g,p._punctuation).getRegex();p._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;p._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;p._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;p.autolink=x(p.autolink).replace("scheme",p._scheme).replace("email",p._email).getRegex();p._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;p.tag=x(p.tag).replace("comment",p._comment).replace("attribute",p._attribute).getRegex();p._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;p._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;p._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;p.link=x(p.link).replace("label",p._label).replace("href",p._href).replace("title",p._title).getRegex();p.reflink=x(p.reflink).replace("label",p._label).replace("ref",g._label).getRegex();p.nolink=x(p.nolink).replace("ref",g._label).getRegex();p.reflinkSearch=x(p.reflinkSearch,"g").replace("reflink",p.reflink).replace("nolink",p.nolink).getRegex();p.normal={...p};p.pedantic={...p.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:x(/^!?\[(label)\]\((.*?)\)/).replace("label",p._label).getRegex(),reflink:x(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",p._label).getRegex()};p.gfm={...p.normal,escape:x(p.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/};p.gfm.url=x(p.gfm.url,"i").replace("email",p.gfm._extended_email).getRegex();p.breaks={...p.gfm,br:x(p.br).replace("{2,}","*").getRegex(),text:x(p.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};function Wt(r){return r.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function We(r){let e="",t,n;const i=r.length;for(t=0;t<i;t++)n=r.charCodeAt(t),Math.random()>.5&&(n="x"+n.toString(16)),e+="&#"+n+";";return e}class T{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||N,this.options.tokenizer=this.options.tokenizer||new ye,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:g.normal,inline:p.normal};this.options.pedantic?(t.block=g.pedantic,t.inline=p.pedantic):this.options.gfm&&(t.block=g.gfm,this.options.breaks?t.inline=p.breaks:t.inline=p.gfm),this.tokenizer.rules=t}static get rules(){return{block:g,inline:p}}static lex(e,t){return new T(t).lex(e)}static lexInline(e,t){return new T(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let t;for(;t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(l,a,h)=>a+"    ".repeat(h.length));let n,i,s,o;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(l=>(n=l.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.space(e)){e=e.substring(n.raw.length),n.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(n);continue}if(n=this.tokenizer.code(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n);continue}if(n=this.tokenizer.fences(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.heading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.hr(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.blockquote(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.list(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.html(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.def(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+n.raw,i.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.lheading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(s=e,this.options.extensions&&this.options.extensions.startBlock){let l=1/0;const a=e.slice(1);let h;this.options.extensions.startBlock.forEach(function(u){h=u.call({lexer:this},a),typeof h=="number"&&h>=0&&(l=Math.min(l,h))}),l<1/0&&l>=0&&(s=e.substring(0,l+1))}if(this.state.top&&(n=this.tokenizer.paragraph(s))){i=t[t.length-1],o&&i.type==="paragraph"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n),o=s.length!==e.length,e=e.substring(n.raw.length);continue}if(n=this.tokenizer.text(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&i.type==="text"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n);continue}if(e){const l="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n,i,s,o=e,l,a,h;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(l=this.tokenizer.rules.inline.reflinkSearch.exec(o))!=null;)u.includes(l[0].slice(l[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,l.index)+"["+Fe("a",l[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(l=this.tokenizer.rules.inline.blockSkip.exec(o))!=null;)o=o.slice(0,l.index)+"["+Fe("a",l[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(l=this.tokenizer.rules.inline.escapedEmSt.exec(o))!=null;)o=o.slice(0,l.index+l[0].length-2)+"++"+o.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(;e;)if(a||(h=""),a=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(n=u.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.tag(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(n.raw.length),i=t[t.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(n=this.tokenizer.emStrong(e,o,h)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.codespan(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.br(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.del(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.autolink(e,We)){e=e.substring(n.raw.length),t.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(e,We))){e=e.substring(n.raw.length),t.push(n);continue}if(s=e,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const d=e.slice(1);let f;this.options.extensions.startInline.forEach(function(c){f=c.call({lexer:this},d),typeof f=="number"&&f>=0&&(u=Math.min(u,f))}),u<1/0&&u>=0&&(s=e.substring(0,u+1))}if(n=this.tokenizer.inlineText(s,Wt)){e=e.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(h=n.raw.slice(-1)),a=!0,i=t[t.length-1],i&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return t}}class Ae{constructor(e){this.options=e||N}code(e,t,n){const i=(t||"").match(/\S*/)[0];if(this.options.highlight){const s=this.options.highlight(e,i);s!=null&&s!==e&&(n=!0,e=s)}return e=e.replace(/\n$/,"")+`
`,i?'<pre><code class="'+this.options.langPrefix+_(i)+'">'+(n?e:_(e,!0))+`</code></pre>
`:"<pre><code>"+(n?e:_(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e){return e}heading(e,t,n,i){if(this.options.headerIds){const s=this.options.headerPrefix+i.slug(n);return`<h${t} id="${s}">${e}</h${t}>
`}return`<h${t}>${e}</h${t}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(e,t,n){const i=t?"ol":"ul",s=t&&n!==1?' start="'+n+'"':"";return"<"+i+s+`>
`+e+"</"+i+`>
`}listitem(e){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>
`}table(e,t){return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+t+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,t){const n=t.header?"th":"td";return(t.align?`<${n} align="${t.align}">`:`<${n}>`)+e+`</${n}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,t,n){if(e=qe(this.options.sanitize,this.options.baseUrl,e),e===null)return n;let i='<a href="'+e+'"';return t&&(i+=' title="'+t+'"'),i+=">"+n+"</a>",i}image(e,t,n){if(e=qe(this.options.sanitize,this.options.baseUrl,e),e===null)return n;let i=`<img src="${e}" alt="${n}"`;return t&&(i+=` title="${t}"`),i+=this.options.xhtml?"/>":">",i}text(e){return e}}class ot{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}class lt{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let n=e,i=0;if(this.seen.hasOwnProperty(n)){i=this.seen[e];do i++,n=e+"-"+i;while(this.seen.hasOwnProperty(n))}return t||(this.seen[e]=i,this.seen[n]=0),n}slug(e,t={}){const n=this.serialize(e);return this.getNextSafeSlug(n,t.dryrun)}}class R{constructor(e){this.options=e||N,this.options.renderer=this.options.renderer||new Ae,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new ot,this.slugger=new lt}static parse(e,t){return new R(t).parse(e)}static parseInline(e,t){return new R(t).parseInline(e)}parse(e,t=!0){let n="",i,s,o,l,a,h,u,d,f,c,v,w,E,b,k,U,S,y,A;const j=e.length;for(i=0;i<j;i++){if(c=e[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[c.type]&&(A=this.options.extensions.renderers[c.type].call({parser:this},c),A!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(c.type))){n+=A||"";continue}switch(c.type){case"space":continue;case"hr":{n+=this.renderer.hr();continue}case"heading":{n+=this.renderer.heading(this.parseInline(c.tokens),c.depth,rt(this.parseInline(c.tokens,this.textRenderer)),this.slugger);continue}case"code":{n+=this.renderer.code(c.text,c.lang,c.escaped);continue}case"table":{for(d="",u="",l=c.header.length,s=0;s<l;s++)u+=this.renderer.tablecell(this.parseInline(c.header[s].tokens),{header:!0,align:c.align[s]});for(d+=this.renderer.tablerow(u),f="",l=c.rows.length,s=0;s<l;s++){for(h=c.rows[s],u="",a=h.length,o=0;o<a;o++)u+=this.renderer.tablecell(this.parseInline(h[o].tokens),{header:!1,align:c.align[o]});f+=this.renderer.tablerow(u)}n+=this.renderer.table(d,f);continue}case"blockquote":{f=this.parse(c.tokens),n+=this.renderer.blockquote(f);continue}case"list":{for(v=c.ordered,w=c.start,E=c.loose,l=c.items.length,f="",s=0;s<l;s++)k=c.items[s],U=k.checked,S=k.task,b="",k.task&&(y=this.renderer.checkbox(U),E?k.tokens.length>0&&k.tokens[0].type==="paragraph"?(k.tokens[0].text=y+" "+k.tokens[0].text,k.tokens[0].tokens&&k.tokens[0].tokens.length>0&&k.tokens[0].tokens[0].type==="text"&&(k.tokens[0].tokens[0].text=y+" "+k.tokens[0].tokens[0].text)):k.tokens.unshift({type:"text",text:y}):b+=y),b+=this.parse(k.tokens,E),f+=this.renderer.listitem(b,S,U);n+=this.renderer.list(f,v,w);continue}case"html":{n+=this.renderer.html(c.text);continue}case"paragraph":{n+=this.renderer.paragraph(this.parseInline(c.tokens));continue}case"text":{for(f=c.tokens?this.parseInline(c.tokens):c.text;i+1<j&&e[i+1].type==="text";)c=e[++i],f+=`
`+(c.tokens?this.parseInline(c.tokens):c.text);n+=t?this.renderer.paragraph(f):f;continue}default:{const Ce='Token with "'+c.type+'" type was not found.';if(this.options.silent){console.error(Ce);return}else throw new Error(Ce)}}}return n}parseInline(e,t){t=t||this.renderer;let n="",i,s,o;const l=e.length;for(i=0;i<l;i++){if(s=e[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]&&(o=this.options.extensions.renderers[s.type].call({parser:this},s),o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type))){n+=o||"";continue}switch(s.type){case"escape":{n+=t.text(s.text);break}case"html":{n+=t.html(s.text);break}case"link":{n+=t.link(s.href,s.title,this.parseInline(s.tokens,t));break}case"image":{n+=t.image(s.href,s.title,s.text);break}case"strong":{n+=t.strong(this.parseInline(s.tokens,t));break}case"em":{n+=t.em(this.parseInline(s.tokens,t));break}case"codespan":{n+=t.codespan(s.text);break}case"br":{n+=t.br();break}case"del":{n+=t.del(this.parseInline(s.tokens,t));break}case"text":{n+=t.text(s.text);break}default:{const a='Token with "'+s.type+'" type was not found.';if(this.options.silent){console.error(a);return}else throw new Error(a)}}}return n}}class le{constructor(e){this.options=e||N}preprocess(e){return e}postprocess(e){return e}}Te(le,"passThroughHooks",new Set(["preprocess","postprocess"]));function Jt(r,e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,r){const i="<p>An error occurred:</p><pre>"+_(n.message+"",!0)+"</pre>";if(e)return Promise.resolve(i);if(t){t(null,i);return}return i}if(e)return Promise.reject(n);if(t){t(n);return}throw n}}function at(r,e){return(t,n,i)=>{typeof n=="function"&&(i=n,n=null);const s={...n};n={...m.defaults,...s};const o=Jt(n.silent,n.async,i);if(typeof t>"u"||t===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(Ft(n),n.hooks&&(n.hooks.options=n),i){const l=n.highlight;let a;try{n.hooks&&(t=n.hooks.preprocess(t)),a=r(t,n)}catch(d){return o(d)}const h=function(d){let f;if(!d)try{n.walkTokens&&m.walkTokens(a,n.walkTokens),f=e(a,n),n.hooks&&(f=n.hooks.postprocess(f))}catch(c){d=c}return n.highlight=l,d?o(d):i(null,f)};if(!l||l.length<3||(delete n.highlight,!a.length))return h();let u=0;m.walkTokens(a,function(d){d.type==="code"&&(u++,setTimeout(()=>{l(d.text,d.lang,function(f,c){if(f)return h(f);c!=null&&c!==d.text&&(d.text=c,d.escaped=!0),u--,u===0&&h()})},0))}),u===0&&h();return}if(n.async)return Promise.resolve(n.hooks?n.hooks.preprocess(t):t).then(l=>r(l,n)).then(l=>n.walkTokens?Promise.all(m.walkTokens(l,n.walkTokens)).then(()=>l):l).then(l=>e(l,n)).then(l=>n.hooks?n.hooks.postprocess(l):l).catch(o);try{n.hooks&&(t=n.hooks.preprocess(t));const l=r(t,n);n.walkTokens&&m.walkTokens(l,n.walkTokens);let a=e(l,n);return n.hooks&&(a=n.hooks.postprocess(a)),a}catch(l){return o(l)}}}function m(r,e,t){return at(T.lex,R.parse)(r,e,t)}m.options=m.setOptions=function(r){return m.defaults={...m.defaults,...r},Pt(m.defaults),m};m.getDefaults=nt;m.defaults=N;m.use=function(...r){const e=m.defaults.extensions||{renderers:{},childTokens:{}};r.forEach(t=>{const n={...t};if(n.async=m.defaults.async||n.async||!1,t.extensions&&(t.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if(i.renderer){const s=e.renderers[i.name];s?e.renderers[i.name]=function(...o){let l=i.renderer.apply(this,o);return l===!1&&(l=s.apply(this,o)),l}:e.renderers[i.name]=i.renderer}if(i.tokenizer){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");e[i.level]?e[i.level].unshift(i.tokenizer):e[i.level]=[i.tokenizer],i.start&&(i.level==="block"?e.startBlock?e.startBlock.push(i.start):e.startBlock=[i.start]:i.level==="inline"&&(e.startInline?e.startInline.push(i.start):e.startInline=[i.start]))}i.childTokens&&(e.childTokens[i.name]=i.childTokens)}),n.extensions=e),t.renderer){const i=m.defaults.renderer||new Ae;for(const s in t.renderer){const o=i[s];i[s]=(...l)=>{let a=t.renderer[s].apply(i,l);return a===!1&&(a=o.apply(i,l)),a}}n.renderer=i}if(t.tokenizer){const i=m.defaults.tokenizer||new ye;for(const s in t.tokenizer){const o=i[s];i[s]=(...l)=>{let a=t.tokenizer[s].apply(i,l);return a===!1&&(a=o.apply(i,l)),a}}n.tokenizer=i}if(t.hooks){const i=m.defaults.hooks||new le;for(const s in t.hooks){const o=i[s];le.passThroughHooks.has(s)?i[s]=l=>{if(m.defaults.async)return Promise.resolve(t.hooks[s].call(i,l)).then(h=>o.call(i,h));const a=t.hooks[s].call(i,l);return o.call(i,a)}:i[s]=(...l)=>{let a=t.hooks[s].apply(i,l);return a===!1&&(a=o.apply(i,l)),a}}n.hooks=i}if(t.walkTokens){const i=m.defaults.walkTokens;n.walkTokens=function(s){let o=[];return o.push(t.walkTokens.call(this,s)),i&&(o=o.concat(i.call(this,s))),o}}m.setOptions(n)})};m.walkTokens=function(r,e){let t=[];for(const n of r)switch(t=t.concat(e.call(m,n)),n.type){case"table":{for(const i of n.header)t=t.concat(m.walkTokens(i.tokens,e));for(const i of n.rows)for(const s of i)t=t.concat(m.walkTokens(s.tokens,e));break}case"list":{t=t.concat(m.walkTokens(n.items,e));break}default:m.defaults.extensions&&m.defaults.extensions.childTokens&&m.defaults.extensions.childTokens[n.type]?m.defaults.extensions.childTokens[n.type].forEach(function(i){t=t.concat(m.walkTokens(n[i],e))}):n.tokens&&(t=t.concat(m.walkTokens(n.tokens,e)))}return t};m.parseInline=at(T.lexInline,R.parseInline);m.Parser=R;m.parser=R.parse;m.Renderer=Ae;m.TextRenderer=ot;m.Lexer=T;m.lexer=T.lex;m.Tokenizer=ye;m.Slugger=lt;m.Hooks=le;m.parse=m;m.options;m.setOptions;m.use;m.walkTokens;m.parseInline;R.parse;T.lex;const Gt="https://api.github.com/users/trustedshops-public/repos?per_page=100&type=owner",Kt=r=>{const e=new Map;return r.sort((n,i)=>i.stargazers_count-n.stargazers_count).forEach(n=>{const[i]=n.topics.filter(l=>l.startsWith("ts"));if(!i)return;const[s]=n.topics.filter(l=>l.startsWith("tp"));s&&(n.name=n.name.replace(s.replace("tp","")+"-",""));const o=i.substring(2);e.has(o)?e.set(o,[...e.get(o),n]):e.set(o,[n])}),new Map([...e.entries()].sort())},ht=K`
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
`;function ct(r){return r.split("-").map(e=>`${e.charAt(0).toUpperCase()}${e.slice(1)}`).join(" ")}var Xt=Object.defineProperty,Yt=Object.getOwnPropertyDescriptor,Se=(r,e,t,n)=>{for(var i=n>1?void 0:n?Yt(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Xt(e,t,i),i};let W=class extends C{constructor(){super(...arguments),this.repository="",this.repo={id:-1,name:"",html_url:"",description:"",created_at:"",updated_at:"",topics:[],stargazers_count:0}}connectedCallback(){super.connectedCallback(),this.repo=JSON.parse(this.repository),this.repo.name=ct(this.repo.name)}render(){return I` <li class="card">
      <a class="card-link" href="${this.repo.html_url}">
        <h3>${this.repo.name}</h3>
        <p>${this.repo.description}</p>
      </a>
    </li>`}};W.styles=[ht,K`
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
    `];Se([Y()],W.prototype,"repository",2);Se([ee()],W.prototype,"repo",2);W=Se([he("ts-card")],W);var en=Object.defineProperty,tn=Object.getOwnPropertyDescriptor,ce=(r,e,t,n)=>{for(var i=n>1?void 0:n?tn(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&en(e,t,i),i};let Z=class extends C{constructor(){super(...arguments),this.list="",this.title="",this.repositories=[]}connectedCallback(){super.connectedCallback(),this.repositories=JSON.parse(this.list),this.title=ct(JSON.parse(this.title))}render(){return I` <section>
      <h2>${this.title}</h2>
      <ul>
        ${this.repositories.map(r=>I` <ts-card
            repository="${JSON.stringify(r)}"
          ></ts-card>`)}
      </ul>
    </section>`}};Z.styles=[ht,K`
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
    `];ce([Y()],Z.prototype,"list",2);ce([Y()],Z.prototype,"title",2);ce([ee()],Z.prototype,"repositories",2);Z=ce([he("ts-section")],Z);var nn=Object.defineProperty,sn=Object.getOwnPropertyDescriptor,Ee=(r,e,t,n)=>{for(var i=n>1?void 0:n?sn(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&nn(e,t,i),i};let J=class extends C{constructor(){super(...arguments),this.data=new Map,this.intro=""}async connectedCallback(){super.connectedCallback();try{const e=await(await fetch("/intro.md")).text();this.intro=m.parse(e)}catch{this.intro="Normally you would see an intro here, but something went horribly wrong."}try{const e=await(await fetch(Gt)).json();this.data=Kt(e)}catch{alert(`Failed to load GitHub Repositories using Github API.
It might be you have been refreshing the page to often or GitHub currently has problems.
Please come back later or directly check on GitHub.
Thank your for understanding. `)}}render(){return I`
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
        <div class="intro">${Ot(this.intro)}</div>
        ${Array.from(this.data).map(([r,e])=>I` <ts-section
            list="${JSON.stringify(e)}"
            title="${JSON.stringify(r)}"
          ></ts-section>`)}
      </main>
    `}};J.styles=K`
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
  `;Ee([ee()],J.prototype,"data",2);Ee([ee()],J.prototype,"intro",2);J=Ee([he("ts-main")],J);var rn=Object.defineProperty,on=Object.getOwnPropertyDescriptor,ze=(r,e,t,n)=>{for(var i=n>1?void 0:n?on(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&rn(e,t,i),i};const Je={mobile:"0 0 320 64",tablet:"0 0 768 71",desktop:"0 0 1920 122"};let G=class extends C{constructor(){super(...arguments),this.direction="top"}detectDeviceType(){const{matches:r}=window.matchMedia("(max-width: 600px"),{matches:e}=window.matchMedia("(max-width: 1200px");r?this.device="mobile":e?this.device="tablet":this.device="desktop"}connectedCallback(){super.connectedCallback(),this.detectDeviceType(),window.addEventListener("resize",()=>{this.detectDeviceType()})}render(){return this.direction==="bottom"?I` <svg
        viewBox="${Je[this.device]}"
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
      </svg>`:I` <svg
      viewBox="${Je[this.device]}"
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
    </svg>`}};G.styles=K`
    svg {
      display: block;
    }
  `;ze([Y({type:String})],G.prototype,"direction",2);ze([ee()],G.prototype,"device",2);G=ze([he("ts-wave")],G);
