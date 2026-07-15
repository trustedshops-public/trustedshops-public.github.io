var Pt=Object.defineProperty;var zt=(n,e,t)=>e in n?Pt(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var m=(n,e,t)=>zt(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const he=globalThis,Pe=he.ShadowRoot&&(he.ShadyCSS===void 0||he.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ze=Symbol(),Ge=new WeakMap;let dt=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==ze)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Pe&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=Ge.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&Ge.set(t,e))}return e}toString(){return this.cssText}};const Lt=n=>new dt(typeof n=="string"?n:n+"",void 0,ze),re=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((s,r,i)=>s+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+n[i+1],n[0]);return new dt(t,n,ze)},Ot=(n,e)=>{if(Pe)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),r=he.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=t.cssText,n.appendChild(s)}},Fe=Pe?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return Lt(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Mt,defineProperty:It,getOwnPropertyDescriptor:Nt,getOwnPropertyNames:Dt,getOwnPropertySymbols:Ht,getPrototypeOf:Bt}=Object,R=globalThis,Ve=R.trustedTypes,Ut=Ve?Ve.emptyScript:"",_e=R.reactiveElementPolyfillSupport,F=(n,e)=>n,pe={toAttribute(n,e){switch(e){case Boolean:n=n?Ut:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},Le=(n,e)=>!Mt(n,e),Je={attribute:!0,type:String,converter:pe,reflect:!1,useDefault:!1,hasChanged:Le};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),R.litPropertyMetadata??(R.litPropertyMetadata=new WeakMap);let B=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Je){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(e,s,t);r!==void 0&&It(this.prototype,e,r)}}static getPropertyDescriptor(e,t,s){const{get:r,set:i}=Nt(this.prototype,e)??{get(){return this[t]},set(l){this[t]=l}};return{get:r,set(l){const a=r==null?void 0:r.call(this);i==null||i.call(this,l),this.requestUpdate(e,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Je}static _$Ei(){if(this.hasOwnProperty(F("elementProperties")))return;const e=Bt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(F("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(F("properties"))){const t=this.properties,s=[...Dt(t),...Ht(t)];for(const r of s)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,r]of t)this.elementProperties.set(s,r)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const r=this._$Eu(t,s);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const r of s)t.unshift(Fe(r))}else e!==void 0&&t.push(Fe(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ot(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){var i;const s=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,s);if(r!==void 0&&s.reflect===!0){const l=(((i=s.converter)==null?void 0:i.toAttribute)!==void 0?s.converter:pe).toAttribute(t,s.type);this._$Em=e,l==null?this.removeAttribute(r):this.setAttribute(r,l),this._$Em=null}}_$AK(e,t){var i,l;const s=this.constructor,r=s._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const a=s.getPropertyOptions(r),o=typeof a.converter=="function"?{fromAttribute:a.converter}:((i=a.converter)==null?void 0:i.fromAttribute)!==void 0?a.converter:pe;this._$Em=r;const h=o.fromAttribute(t,a.type);this[r]=h??((l=this._$Ej)==null?void 0:l.get(r))??h,this._$Em=null}}requestUpdate(e,t,s,r=!1,i){var l;if(e!==void 0){const a=this.constructor;if(r===!1&&(i=this[e]),s??(s=a.getPropertyOptions(e)),!((s.hasChanged??Le)(i,t)||s.useDefault&&s.reflect&&i===((l=this._$Ej)==null?void 0:l.get(e))&&!this.hasAttribute(a._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:r,wrapped:i},l){s&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,l??t??this[e]),i!==!0||l!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,l]of this._$Ep)this[i]=l;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,l]of r){const{wrapped:a}=l,o=this[i];a!==!0||this._$AL.has(i)||o===void 0||this.C(i,void 0,l,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$EO)==null||s.forEach(r=>{var i;return(i=r.hostUpdate)==null?void 0:i.call(r)}),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};B.elementStyles=[],B.shadowRootOptions={mode:"open"},B[F("elementProperties")]=new Map,B[F("finalized")]=new Map,_e==null||_e({ReactiveElement:B}),(R.reactiveElementVersions??(R.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=globalThis,Xe=n=>n,ue=V.trustedTypes,Ke=ue?ue.createPolicy("lit-html",{createHTML:n=>n}):void 0,gt="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,ft="?"+S,qt=`<${ft}>`,O=document,J=()=>O.createComment(""),X=n=>n===null||typeof n!="object"&&typeof n!="function",Oe=Array.isArray,jt=n=>Oe(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",ve=`[ 	
\f\r]`,W=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ye=/-->/g,et=/>/g,T=RegExp(`>|${ve}(?:([^\\s"'>=/]+)(${ve}*=${ve}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),tt=/'/g,rt=/"/g,kt=/^(?:script|style|textarea|title)$/i,Zt=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),M=Zt(1),I=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),st=new WeakMap,z=O.createTreeWalker(O,129);function mt(n,e){if(!Oe(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ke!==void 0?Ke.createHTML(e):e}const Wt=(n,e)=>{const t=n.length-1,s=[];let r,i=e===2?"<svg>":e===3?"<math>":"",l=W;for(let a=0;a<t;a++){const o=n[a];let h,c,u=-1,d=0;for(;d<o.length&&(l.lastIndex=d,c=l.exec(o),c!==null);)d=l.lastIndex,l===W?c[1]==="!--"?l=Ye:c[1]!==void 0?l=et:c[2]!==void 0?(kt.test(c[2])&&(r=RegExp("</"+c[2],"g")),l=T):c[3]!==void 0&&(l=T):l===T?c[0]===">"?(l=r??W,u=-1):c[1]===void 0?u=-2:(u=l.lastIndex-c[2].length,h=c[1],l=c[3]===void 0?T:c[3]==='"'?rt:tt):l===rt||l===tt?l=T:l===Ye||l===et?l=W:(l=T,r=void 0);const k=l===T&&n[a+1].startsWith("/>")?" ":"";i+=l===W?o+qt:u>=0?(s.push(h),o.slice(0,u)+gt+o.slice(u)+S+k):o+S+(u===-2?a:k)}return[mt(n,i+(n[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class K{constructor({strings:e,_$litType$:t},s){let r;this.parts=[];let i=0,l=0;const a=e.length-1,o=this.parts,[h,c]=Wt(e,t);if(this.el=K.createElement(h,s),z.currentNode=this.el.content,t===2||t===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(r=z.nextNode())!==null&&o.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(const u of r.getAttributeNames())if(u.endsWith(gt)){const d=c[l++],k=r.getAttribute(u).split(S),p=/([.?@])?(.*)/.exec(d);o.push({type:1,index:i,name:p[2],strings:k,ctor:p[1]==="."?Gt:p[1]==="?"?Ft:p[1]==="@"?Vt:ke}),r.removeAttribute(u)}else u.startsWith(S)&&(o.push({type:6,index:i}),r.removeAttribute(u));if(kt.test(r.tagName)){const u=r.textContent.split(S),d=u.length-1;if(d>0){r.textContent=ue?ue.emptyScript:"";for(let k=0;k<d;k++)r.append(u[k],J()),z.nextNode(),o.push({type:2,index:++i});r.append(u[d],J())}}}else if(r.nodeType===8)if(r.data===ft)o.push({type:2,index:i});else{let u=-1;for(;(u=r.data.indexOf(S,u+1))!==-1;)o.push({type:7,index:i}),u+=S.length-1}i++}}static createElement(e,t){const s=O.createElement("template");return s.innerHTML=e,s}}function U(n,e,t=n,s){var l,a;if(e===I)return e;let r=s!==void 0?(l=t._$Co)==null?void 0:l[s]:t._$Cl;const i=X(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==i&&((a=r==null?void 0:r._$AO)==null||a.call(r,!1),i===void 0?r=void 0:(r=new i(n),r._$AT(n,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=r:t._$Cl=r),r!==void 0&&(e=U(n,r._$AS(n,e.values),r,s)),e}class Qt{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,r=((e==null?void 0:e.creationScope)??O).importNode(t,!0);z.currentNode=r;let i=z.nextNode(),l=0,a=0,o=s[0];for(;o!==void 0;){if(l===o.index){let h;o.type===2?h=new se(i,i.nextSibling,this,e):o.type===1?h=new o.ctor(i,o.name,o.strings,this,e):o.type===6&&(h=new Jt(i,this,e)),this._$AV.push(h),o=s[++a]}l!==(o==null?void 0:o.index)&&(i=z.nextNode(),l++)}return z.currentNode=O,r}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class se{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,r){this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=U(this,e,t),X(e)?e===x||e==null||e===""?(this._$AH!==x&&this._$AR(),this._$AH=x):e!==this._$AH&&e!==I&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):jt(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==x&&X(this._$AH)?this._$AA.nextSibling.data=e:this.T(O.createTextNode(e)),this._$AH=e}$(e){var i;const{values:t,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=K.createElement(mt(s.h,s.h[0]),this.options)),s);if(((i=this._$AH)==null?void 0:i._$AD)===r)this._$AH.p(t);else{const l=new Qt(r,this),a=l.u(this.options);l.p(t),this.T(a),this._$AH=l}}_$AC(e){let t=st.get(e.strings);return t===void 0&&st.set(e.strings,t=new K(e)),t}k(e){Oe(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,r=0;for(const i of e)r===t.length?t.push(s=new se(this.O(J()),this.O(J()),this,this.options)):s=t[r],s._$AI(i),r++;r<t.length&&(this._$AR(s&&s._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e!==this._$AB;){const r=Xe(e).nextSibling;Xe(e).remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}let ke=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,r,i){this.type=1,this._$AH=x,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=x}_$AI(e,t=this,s,r){const i=this.strings;let l=!1;if(i===void 0)e=U(this,e,t,0),l=!X(e)||e!==this._$AH&&e!==I,l&&(this._$AH=e);else{const a=e;let o,h;for(e=i[0],o=0;o<i.length-1;o++)h=U(this,a[s+o],t,o),h===I&&(h=this._$AH[o]),l||(l=!X(h)||h!==this._$AH[o]),h===x?e=x:e!==x&&(e+=(h??"")+i[o+1]),this._$AH[o]=h}l&&!r&&this.j(e)}j(e){e===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Gt=class extends ke{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===x?void 0:e}},Ft=class extends ke{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==x)}},Vt=class extends ke{constructor(e,t,s,r,i){super(e,t,s,r,i),this.type=5}_$AI(e,t=this){if((e=U(this,e,t,0)??x)===I)return;const s=this._$AH,r=e===x&&s!==x||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,i=e!==x&&(s===x||r);r&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}},Jt=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){U(this,e)}};const Ae=V.litHtmlPolyfillSupport;Ae==null||Ae(K,se),(V.litHtmlVersions??(V.litHtmlVersions=[])).push("3.3.3");const Xt=(n,e,t)=>{const s=(t==null?void 0:t.renderBefore)??e;let r=s._$litPart$;if(r===void 0){const i=(t==null?void 0:t.renderBefore)??null;s._$litPart$=r=new se(e.insertBefore(J(),i),i,void 0,t??{})}return r._$AI(n),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=globalThis;let C=class extends B{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Xt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return I}};var ut;C._$litElement$=!0,C.finalized=!0,(ut=L.litElementHydrateSupport)==null||ut.call(L,{LitElement:C});const Se=L.litElementPolyfillSupport;Se==null||Se({LitElement:C});(L.litElementVersions??(L.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const me=n=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(n,e)}):customElements.define(n,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kt={attribute:!0,type:String,converter:pe,reflect:!1,hasChanged:Le},Yt=(n=Kt,e,t)=>{const{kind:s,metadata:r}=t;let i=globalThis.litPropertyMetadata.get(r);if(i===void 0&&globalThis.litPropertyMetadata.set(r,i=new Map),s==="setter"&&((n=Object.create(n)).wrapped=!0),i.set(t.name,n),s==="accessor"){const{name:l}=t;return{set(a){const o=e.get.call(this);e.set.call(this,a),this.requestUpdate(l,o,n,!0,a)},init(a){return a!==void 0&&this.C(l,void 0,n,a),a}}}if(s==="setter"){const{name:l}=t;return function(a){const o=this[l];e.call(this,a),this.requestUpdate(l,o,n,!0,a)}}throw Error("Unsupported decorator location: "+s)};function ne(n){return(e,t)=>typeof t=="object"?Yt(n,e,t):((s,r,i)=>{const l=r.hasOwnProperty(i);return r.constructor.createProperty(i,s),l?Object.getOwnPropertyDescriptor(r,i):void 0})(n,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ie(n){return ne({...n,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const er={CHILD:2},tr=n=>(...e)=>({_$litDirective$:n,values:e});class rr{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Re extends rr{constructor(e){if(super(e),this.it=x,e.type!==er.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===x||e==null)return this._t=void 0,this.it=e;if(e===I)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}Re.directiveName="unsafeHTML",Re.resultType=1;const sr=tr(Re);function Me(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var D=Me();function bt(n){D=n}var P={exec:()=>null};function H(n){let e=[];return t=>{let s=Math.max(0,Math.min(3,t-1)),r=e[s];return r||(r=n(s),e[s]=r),r}}function g(n,e=""){let t=typeof n=="string"?n:n.source,s={replace:(r,i)=>{let l=typeof i=="string"?i:i.source;return l=l.replace($.caret,"$1"),t=t.replace(r,l),s},getRegex:()=>new RegExp(t,e)};return s}var nr=((n="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+n)}catch{return!1}})(),$={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:n=>new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:H(n=>new RegExp(`^ {0,${n}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:H(n=>new RegExp(`^ {0,${n}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:H(n=>new RegExp(`^ {0,${n}}(?:\`\`\`|~~~)`)),headingBeginRegex:H(n=>new RegExp(`^ {0,${n}}#`)),htmlBeginRegex:H(n=>new RegExp(`^ {0,${n}}<(?:[a-z].*>|!--)`,"i")),blockquoteBeginRegex:H(n=>new RegExp(`^ {0,${n}}>`))},ir=/^(?:[ \t]*(?:\n|$))+/,lr=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,or=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,le=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,ar=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Ie=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,xt=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,$t=g(xt).replace(/bull/g,Ie).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),cr=g(xt).replace(/bull/g,Ie).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Ne=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,hr=/^[^\n]+/,De=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,pr=g(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",De).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),ur=g(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,Ie).getRegex(),be="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",He=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,dr=g("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n+|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n+|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n+|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",He).replace("tag",be).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),wt=n=>g(Ne).replace("hr",le).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list",n).replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",be).getRegex(),gr=wt(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),fr=wt(/ {0,3}(?:[*+-]|\d{1,9}[.)])[ \t]+[^ \t\n]/),kr=g(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",fr).getRegex(),Be={blockquote:kr,code:lr,def:pr,fences:or,heading:ar,hr:le,html:dr,lheading:$t,list:ur,newline:ir,paragraph:gr,table:P,text:hr},nt=g("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",le).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",be).getRegex(),mr={...Be,lheading:cr,table:nt,paragraph:g(Ne).replace("hr",le).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",nt).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",be).getRegex()},br={...Be,html:g(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",He).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:P,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:g(Ne).replace("hr",le).replace("heading",` *#{1,6} *[^
]`).replace("lheading",$t).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},xr=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,$r=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,yt=/^( {2,}|\\)\n(?!\s*$)/,wr=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,j=/[\p{P}\p{S}]/u,xe=/[\s\p{P}\p{S}]/u,Ue=/[^\s\p{P}\p{S}]/u,yr=g(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,xe).getRegex(),_t=/(?!~)[\p{P}\p{S}]/u,_r=/(?!~)[\s\p{P}\p{S}]/u,vr=/(?:[^\s\p{P}\p{S}]|~)/u,Ar=g(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",nr?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),vt=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,Sr=g(vt,"u").replace(/punct/g,j).getRegex(),Rr=g(vt,"u").replace(/punct/g,_t).getRegex(),At="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Cr=g(At,"gu").replace(/notPunctSpace/g,Ue).replace(/punctSpace/g,xe).replace(/punct/g,j).getRegex(),Er=g(At,"gu").replace(/notPunctSpace/g,vr).replace(/punctSpace/g,_r).replace(/punct/g,_t).getRegex(),Tr=g("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Ue).replace(/punctSpace/g,xe).replace(/punct/g,j).getRegex(),Pr=g(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,j).getRegex(),zr="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",Lr=g(zr,"gu").replace(/notPunctSpace/g,Ue).replace(/punctSpace/g,xe).replace(/punct/g,j).getRegex(),Or=g(/\\(punct)/,"gu").replace(/punct/g,j).getRegex(),Mr=g(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Ir=g(He).replace("(?:-->|$)","-->").getRegex(),Nr=g("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Ir).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),de=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,Dr=g(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",de).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),St=g(/^!?\[(label)\]\[(ref)\]/).replace("label",de).replace("ref",De).getRegex(),Rt=g(/^!?\[(ref)\](?:\[\])?/).replace("ref",De).getRegex(),Hr=g("reflink|nolink(?!\\()","g").replace("reflink",St).replace("nolink",Rt).getRegex(),it=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,qe={_backpedal:P,anyPunctuation:Or,autolink:Mr,blockSkip:Ar,br:yt,code:$r,del:P,delLDelim:P,delRDelim:P,emStrongLDelim:Sr,emStrongRDelimAst:Cr,emStrongRDelimUnd:Tr,escape:xr,link:Dr,nolink:Rt,punctuation:yr,reflink:St,reflinkSearch:Hr,tag:Nr,text:wr,url:P},Br={...qe,link:g(/^!?\[(label)\]\((.*?)\)/).replace("label",de).getRegex(),reflink:g(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",de).getRegex()},Ce={...qe,emStrongRDelimAst:Er,emStrongLDelim:Rr,delLDelim:Pr,delRDelim:Lr,url:g(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",it).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:g(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",it).getRegex()},Ur={...Ce,br:g(yt).replace("{2,}","*").getRegex(),text:g(Ce.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},ae={normal:Be,gfm:mr,pedantic:br},Q={normal:qe,gfm:Ce,breaks:Ur,pedantic:Br},qr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},lt=n=>qr[n];function v(n,e){if(e){if($.escapeTest.test(n))return n.replace($.escapeReplace,lt)}else if($.escapeTestNoEncode.test(n))return n.replace($.escapeReplaceNoEncode,lt);return n}function ot(n){try{n=encodeURI(n).replace($.percentDecode,"%")}catch{return null}return n}function at(n,e){var i;let t=n.replace($.findPipe,(l,a,o)=>{let h=!1,c=a;for(;--c>=0&&o[c]==="\\";)h=!h;return h?"|":" |"}),s=t.split($.splitPipe),r=0;if(s[0].trim()||s.shift(),s.length>0&&!((i=s.at(-1))!=null&&i.trim())&&s.pop(),e)if(s.length>e)s.splice(e);else for(;s.length<e;)s.push("");for(;r<s.length;r++)s[r]=s[r].trim().replace($.slashPipe,"|");return s}function A(n,e,t){let s=n.length;if(s===0)return"";let r=0;for(;r<s&&n.charAt(s-r-1)===e;)r++;return n.slice(0,s-r)}function ct(n){let e=n.split(`
`),t=e.length-1;for(;t>=0&&$.blankLine.test(e[t]);)t--;return e.length-t<=2?n:e.slice(0,t+1).join(`
`)}function jr(n,e){if(n.indexOf(e[1])===-1)return-1;let t=0;for(let s=0;s<n.length;s++)if(n[s]==="\\")s++;else if(n[s]===e[0])t++;else if(n[s]===e[1]&&(t--,t<0))return s;return t>0?-2:-1}function Zr(n,e=0){let t=e,s="";for(let r of n)if(r==="	"){let i=4-t%4;s+=" ".repeat(i),t+=i}else s+=r,t++;return s}function ht(n,e,t,s,r){let i=e.href,l=e.title||null,a=n[1].replace(r.other.outputLinkReplace,"$1");s.state.inLink=!0;let o={type:n[0].charAt(0)==="!"?"image":"link",raw:t,href:i,title:l,text:a,tokens:s.inlineTokens(a)};return s.state.inLink=!1,o}function Wr(n,e,t){let s=n.match(t.other.indentCodeCompensation);if(s===null)return e;let r=s[1];return e.split(`
`).map(i=>{let l=i.match(t.other.beginningSpace);if(l===null)return i;let[a]=l;return a.length>=r.length?i.slice(r.length):i}).join(`
`)}var ge=class{constructor(n){m(this,"options");m(this,"rules");m(this,"lexer");this.options=n||D}space(n){let e=this.rules.block.newline.exec(n);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(n){let e=this.rules.block.code.exec(n);if(e){let t=this.options.pedantic?e[0]:ct(e[0]),s=t.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t,codeBlockStyle:"indented",text:s}}}fences(n){let e=this.rules.block.fences.exec(n);if(e){let t=e[0],s=Wr(t,e[3]||"",this.rules);return{type:"code",raw:t,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:s}}}heading(n){let e=this.rules.block.heading.exec(n);if(e){let t=e[2].trim();if(this.rules.other.endingHash.test(t)){let s=A(t,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(t=s.trim())}return{type:"heading",raw:A(e[0],`
`),depth:e[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(n){let e=this.rules.block.hr.exec(n);if(e)return{type:"hr",raw:A(e[0],`
`)}}blockquote(n){let e=this.rules.block.blockquote.exec(n);if(e){let t=A(e[0],`
`).split(`
`),s="",r="",i=[];for(;t.length>0;){let l=!1,a=[],o;for(o=0;o<t.length;o++)if(this.rules.other.blockquoteStart.test(t[o]))a.push(t[o]),l=!0;else if(!l)a.push(t[o]);else break;t=t.slice(o);let h=a.join(`
`),c=h.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${h}`:h,r=r?`${r}
${c}`:c;let u=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=u,t.length===0)break;let d=i.at(-1);if((d==null?void 0:d.type)==="code")break;if((d==null?void 0:d.type)==="blockquote"){let k=d,p=k.raw+`
`+t.join(`
`),w=this.blockquote(p);i[i.length-1]=w,s=s.substring(0,s.length-k.raw.length)+w.raw,r=r.substring(0,r.length-k.text.length)+w.text;break}else if((d==null?void 0:d.type)==="list"){let k=d,p=k.raw+`
`+t.join(`
`),w=this.list(p);i[i.length-1]=w,s=s.substring(0,s.length-d.raw.length)+w.raw,r=r.substring(0,r.length-k.raw.length)+w.raw,t=p.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:i,text:r}}}list(n){let e=this.rules.block.list.exec(n);if(e){let t=e[1].trim(),s=t.length>1,r={type:"list",raw:"",ordered:s,start:s?+t.slice(0,-1):"",loose:!1,items:[]};t=s?`\\d{1,9}\\${t.slice(-1)}`:`\\${t}`,this.options.pedantic&&(t=s?t:"[*+-]");let i=this.rules.other.listItemRegex(t),l=!1;for(;n;){let o=!1,h="",c="";if(!(e=i.exec(n))||this.rules.block.hr.test(n))break;h=e[0],n=n.substring(h.length);let u=Zr(e[2].split(`
`,1)[0],e[1].length),d=n.split(`
`,1)[0],k=!u.trim(),p=0;if(this.options.pedantic?(p=2,c=u.trimStart()):k?p=e[1].length+1:(p=u.search(this.rules.other.nonSpaceChar),p=p>4?1:p,c=u.slice(p),p+=e[1].length),k&&this.rules.other.blankLine.test(d)&&(h+=d+`
`,n=n.substring(d.length+1),o=!0),!o){let w=this.rules.other.nextBulletRegex(p),b=this.rules.other.hrRegex(p),oe=this.rules.other.fencesBeginRegex(p),E=this.rules.other.headingBeginRegex(p),we=this.rules.other.htmlBeginRegex(p),Tt=this.rules.other.blockquoteBeginRegex(p);for(;n;){let ye=n.split(`
`,1)[0],Z;if(d=ye,this.options.pedantic?(d=d.replace(this.rules.other.listReplaceNesting,"  "),Z=d):Z=d.replace(this.rules.other.tabCharGlobal,"    "),oe.test(d)||E.test(d)||we.test(d)||Tt.test(d)||w.test(d)||b.test(d))break;if(Z.search(this.rules.other.nonSpaceChar)>=p||!d.trim())c+=`
`+Z.slice(p);else{if(k||u.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||oe.test(u)||E.test(u)||b.test(u))break;c+=`
`+d}k=!d.trim(),h+=ye+`
`,n=n.substring(ye.length+1),u=Z.slice(p)}}r.loose||(l?r.loose=!0:this.rules.other.doubleBlankLine.test(h)&&(l=!0)),r.items.push({type:"list_item",raw:h,task:!!this.options.gfm&&this.rules.other.listIsTask.test(c),loose:!1,text:c,tokens:[]}),r.raw+=h}let a=r.items.at(-1);if(a)a.raw=a.raw.trimEnd(),a.text=a.text.trimEnd();else return;r.raw=r.raw.trimEnd();for(let o of r.items){this.lexer.state.top=!1,o.tokens=this.lexer.blockTokens(o.text,[]);let h=o.tokens[0];if(o.task&&((h==null?void 0:h.type)==="text"||(h==null?void 0:h.type)==="paragraph")){o.text=o.text.replace(this.rules.other.listReplaceTask,""),h.raw=h.raw.replace(this.rules.other.listReplaceTask,""),h.text=h.text.replace(this.rules.other.listReplaceTask,"");for(let u=this.lexer.inlineQueue.length-1;u>=0;u--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[u].src)){this.lexer.inlineQueue[u].src=this.lexer.inlineQueue[u].src.replace(this.rules.other.listReplaceTask,"");break}let c=this.rules.other.listTaskCheckbox.exec(o.raw);if(c){let u={type:"checkbox",raw:c[0]+" ",checked:c[0]!=="[ ]"};o.checked=u.checked,r.loose?o.tokens[0]&&["paragraph","text"].includes(o.tokens[0].type)&&"tokens"in o.tokens[0]&&o.tokens[0].tokens?(o.tokens[0].raw=u.raw+o.tokens[0].raw,o.tokens[0].text=u.raw+o.tokens[0].text,o.tokens[0].tokens.unshift(u)):o.tokens.unshift({type:"paragraph",raw:u.raw,text:u.raw,tokens:[u]}):o.tokens.unshift(u)}}else o.task&&(o.task=!1);if(!r.loose){let c=o.tokens.filter(d=>d.type==="space"),u=c.length>0&&c.some(d=>this.rules.other.anyLine.test(d.raw));r.loose=u}}if(r.loose)for(let o of r.items){o.loose=!0;for(let h of o.tokens)h.type==="text"&&(h.type="paragraph")}return r}}html(n){let e=this.rules.block.html.exec(n);if(e){let t=ct(e[0]);return{type:"html",block:!0,raw:t,pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:t}}}def(n){let e=this.rules.block.def.exec(n);if(e){let t=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:t,raw:A(e[0],`
`),href:s,title:r}}}table(n){var l;let e=this.rules.block.table.exec(n);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let t=at(e[1]),s=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=(l=e[3])!=null&&l.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:A(e[0],`
`),header:[],align:[],rows:[]};if(t.length===s.length){for(let a of s)this.rules.other.tableAlignRight.test(a)?i.align.push("right"):this.rules.other.tableAlignCenter.test(a)?i.align.push("center"):this.rules.other.tableAlignLeft.test(a)?i.align.push("left"):i.align.push(null);for(let a=0;a<t.length;a++)i.header.push({text:t[a],tokens:this.lexer.inline(t[a]),header:!0,align:i.align[a]});for(let a of r)i.rows.push(at(a,i.header.length).map((o,h)=>({text:o,tokens:this.lexer.inline(o),header:!1,align:i.align[h]})));return i}}lheading(n){let e=this.rules.block.lheading.exec(n);if(e){let t=e[1].trim();return{type:"heading",raw:A(e[0],`
`),depth:e[2].charAt(0)==="="?1:2,text:t,tokens:this.lexer.inline(t)}}}paragraph(n){let e=this.rules.block.paragraph.exec(n);if(e){let t=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:t,tokens:this.lexer.inline(t)}}}text(n){let e=this.rules.block.text.exec(n);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(n){let e=this.rules.inline.escape.exec(n);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(n){let e=this.rules.inline.tag.exec(n);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(n){let e=this.rules.inline.link.exec(n);if(e){let t=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(t)){if(!this.rules.other.endAngleBracket.test(t))return;let i=A(t.slice(0,-1),"\\");if((t.length-i.length)%2===0)return}else{let i=jr(e[2],"()");if(i===-2)return;if(i>-1){let l=(e[0].indexOf("!")===0?5:4)+e[1].length+i;e[2]=e[2].substring(0,i),e[0]=e[0].substring(0,l).trim(),e[3]=""}}let s=e[2],r="";if(this.options.pedantic){let i=this.rules.other.pedanticHrefTitle.exec(s);i&&(s=i[1],r=i[3])}else r=e[3]?e[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(t)?s=s.slice(1):s=s.slice(1,-1)),ht(e,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(n,e){let t;if((t=this.rules.inline.reflink.exec(n))||(t=this.rules.inline.nolink.exec(n))){let s=(t[2]||t[1]).replace(this.rules.other.multipleSpaceGlobal," "),r=e[s.toLowerCase()];if(!r){let i=t[0].charAt(0);return{type:"text",raw:i,text:i}}return ht(t,r,t[0],this.lexer,this.rules)}}emStrong(n,e,t=""){let s=this.rules.inline.emStrongLDelim.exec(n);if(!(!s||!s[1]&&!s[2]&&!s[3]&&!s[4]||s[4]&&t.match(this.rules.other.unicodeAlphaNumeric))&&(!(s[1]||s[3])||!t||this.rules.inline.punctuation.exec(t))){let r=[...s[0]].length-1,i,l,a=r,o=0,h=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(h.lastIndex=0,e=e.slice(-1*n.length+r);(s=h.exec(e))!==null;){if(i=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!i)continue;if(l=[...i].length,s[3]||s[4]){a+=l;continue}else if((s[5]||s[6])&&r%3&&!((r+l)%3)){o+=l;continue}if(a-=l,a>0)continue;l=Math.min(l,l+a+o);let c=[...s[0]][0].length,u=n.slice(0,r+s.index+c+l);if(Math.min(r,l)%2){let k=u.slice(1,-1);return{type:"em",raw:u,text:k,tokens:this.lexer.inlineTokens(k)}}let d=u.slice(2,-2);return{type:"strong",raw:u,text:d,tokens:this.lexer.inlineTokens(d)}}}}codespan(n){let e=this.rules.inline.code.exec(n);if(e){let t=e[2].replace(this.rules.other.newLineCharGlobal," "),s=this.rules.other.nonSpaceChar.test(t),r=this.rules.other.startingSpaceChar.test(t)&&this.rules.other.endingSpaceChar.test(t);return s&&r&&(t=t.substring(1,t.length-1)),{type:"codespan",raw:e[0],text:t}}}br(n){let e=this.rules.inline.br.exec(n);if(e)return{type:"br",raw:e[0]}}del(n,e,t=""){let s=this.rules.inline.delLDelim.exec(n);if(s&&(!s[1]||!t||this.rules.inline.punctuation.exec(t))){let r=[...s[0]].length-1,i,l,a=r,o=this.rules.inline.delRDelim;for(o.lastIndex=0,e=e.slice(-1*n.length+r);(s=o.exec(e))!==null;){if(i=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!i||(l=[...i].length,l!==r))continue;if(s[3]||s[4]){a+=l;continue}if(a-=l,a>0)continue;l=Math.min(l,l+a);let h=[...s[0]][0].length,c=n.slice(0,r+s.index+h+l),u=c.slice(r,-r);return{type:"del",raw:c,text:u,tokens:this.lexer.inlineTokens(u)}}}}autolink(n){let e=this.rules.inline.autolink.exec(n);if(e){let t,s;return e[2]==="@"?(t=e[1],s="mailto:"+t):(t=e[1],s=t),{type:"link",raw:e[0],text:t,href:s,tokens:[{type:"text",raw:t,text:t}]}}}url(n){var t;let e;if(e=this.rules.inline.url.exec(n)){let s,r;if(e[2]==="@")s=e[0],r="mailto:"+s;else{let i;do i=e[0],e[0]=((t=this.rules.inline._backpedal.exec(e[0]))==null?void 0:t[0])??"";while(i!==e[0]);s=e[0],e[1]==="www."?r="http://"+e[0]:r=e[0]}return{type:"link",raw:e[0],text:s,href:r,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(n){let e=this.rules.inline.text.exec(n);if(e){let t=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:t}}}},y=class Ee{constructor(e){m(this,"tokens");m(this,"options");m(this,"state");m(this,"inlineQueue");m(this,"tokenizer");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||D,this.options.tokenizer=this.options.tokenizer||new ge,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:$,block:ae.normal,inline:Q.normal};this.options.pedantic?(t.block=ae.pedantic,t.inline=Q.pedantic):this.options.gfm&&(t.block=ae.gfm,this.options.breaks?t.inline=Q.breaks:t.inline=Q.gfm),this.tokenizer.rules=t}static get rules(){return{block:ae,inline:Q}}static lex(e,t){return new Ee(t).lex(e)}static lexInline(e,t){return new Ee(t).inlineTokens(e)}lex(e){e=e.replace($.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){let s=this.inlineQueue[t];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],s=!1){var i,l,a;this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace($.tabCharGlobal,"    ").replace($.spaceLine,""));let r=1/0;for(;e;){if(e.length<r)r=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let o;if((l=(i=this.options.extensions)==null?void 0:i.block)!=null&&l.some(c=>(o=c.call({lexer:this},e,t))?(e=e.substring(o.raw.length),t.push(o),!0):!1))continue;if(o=this.tokenizer.space(e)){e=e.substring(o.raw.length);let c=t.at(-1);o.raw.length===1&&c!==void 0?c.raw+=`
`:t.push(o);continue}if(o=this.tokenizer.code(e)){e=e.substring(o.raw.length);let c=t.at(-1);(c==null?void 0:c.type)==="paragraph"||(c==null?void 0:c.type)==="text"?(c.raw+=(c.raw.endsWith(`
`)?"":`
`)+o.raw,c.text+=`
`+o.text,this.inlineQueue.at(-1).src=c.text):t.push(o);continue}if(o=this.tokenizer.fences(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.heading(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.hr(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.blockquote(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.list(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.html(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.def(e)){e=e.substring(o.raw.length);let c=t.at(-1);(c==null?void 0:c.type)==="paragraph"||(c==null?void 0:c.type)==="text"?(c.raw+=(c.raw.endsWith(`
`)?"":`
`)+o.raw,c.text+=`
`+o.raw,this.inlineQueue.at(-1).src=c.text):this.tokens.links[o.tag]||(this.tokens.links[o.tag]={href:o.href,title:o.title},t.push(o));continue}if(o=this.tokenizer.table(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.lheading(e)){e=e.substring(o.raw.length),t.push(o);continue}let h=e;if((a=this.options.extensions)!=null&&a.startBlock){let c=1/0,u=e.slice(1),d;this.options.extensions.startBlock.forEach(k=>{d=k.call({lexer:this},u),typeof d=="number"&&d>=0&&(c=Math.min(c,d))}),c<1/0&&c>=0&&(h=e.substring(0,c+1))}if(this.state.top&&(o=this.tokenizer.paragraph(h))){let c=t.at(-1);s&&(c==null?void 0:c.type)==="paragraph"?(c.raw+=(c.raw.endsWith(`
`)?"":`
`)+o.raw,c.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=c.text):t.push(o),s=h.length!==e.length,e=e.substring(o.raw.length);continue}if(o=this.tokenizer.text(e)){e=e.substring(o.raw.length);let c=t.at(-1);(c==null?void 0:c.type)==="text"?(c.raw+=(c.raw.endsWith(`
`)?"":`
`)+o.raw,c.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=c.text):t.push(o);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){var h,c,u,d,k;this.tokenizer.lexer=this;let s=e,r=null;if(this.tokens.links){let p=Object.keys(this.tokens.links);if(p.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(s))!==null;)p.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(s))!==null;)s=s.slice(0,r.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let i;for(;(r=this.tokenizer.rules.inline.blockSkip.exec(s))!==null;)i=r[2]?r[2].length:0,s=s.slice(0,r.index+i)+"["+"a".repeat(r[0].length-i-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);s=((c=(h=this.options.hooks)==null?void 0:h.emStrongMask)==null?void 0:c.call({lexer:this},s))??s;let l=!1,a="",o=1/0;for(;e;){if(e.length<o)o=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}l||(a=""),l=!1;let p;if((d=(u=this.options.extensions)==null?void 0:u.inline)!=null&&d.some(b=>(p=b.call({lexer:this},e,t))?(e=e.substring(p.raw.length),t.push(p),!0):!1))continue;if(p=this.tokenizer.escape(e)){e=e.substring(p.raw.length),t.push(p);continue}if(p=this.tokenizer.tag(e)){e=e.substring(p.raw.length),t.push(p);continue}if(p=this.tokenizer.link(e)){e=e.substring(p.raw.length),t.push(p);continue}if(p=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(p.raw.length);let b=t.at(-1);p.type==="text"&&(b==null?void 0:b.type)==="text"?(b.raw+=p.raw,b.text+=p.text):t.push(p);continue}if(p=this.tokenizer.emStrong(e,s,a)){e=e.substring(p.raw.length),t.push(p);continue}if(p=this.tokenizer.codespan(e)){e=e.substring(p.raw.length),t.push(p);continue}if(p=this.tokenizer.br(e)){e=e.substring(p.raw.length),t.push(p);continue}if(p=this.tokenizer.del(e,s,a)){e=e.substring(p.raw.length),t.push(p);continue}if(p=this.tokenizer.autolink(e)){e=e.substring(p.raw.length),t.push(p);continue}if(!this.state.inLink&&(p=this.tokenizer.url(e))){e=e.substring(p.raw.length),t.push(p);continue}let w=e;if((k=this.options.extensions)!=null&&k.startInline){let b=1/0,oe=e.slice(1),E;this.options.extensions.startInline.forEach(we=>{E=we.call({lexer:this},oe),typeof E=="number"&&E>=0&&(b=Math.min(b,E))}),b<1/0&&b>=0&&(w=e.substring(0,b+1))}if(p=this.tokenizer.inlineText(w)){e=e.substring(p.raw.length),p.raw.slice(-1)!=="_"&&(a=p.raw.slice(-1)),l=!0;let b=t.at(-1);(b==null?void 0:b.type)==="text"?(b.raw+=p.raw,b.text+=p.text):t.push(p);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return t}infiniteLoopError(e){let t="Infinite loop on byte: "+e;if(this.options.silent)console.error(t);else throw new Error(t)}},fe=class{constructor(n){m(this,"options");m(this,"parser");this.options=n||D}space(n){return""}code({text:n,lang:e,escaped:t}){var i;let s=(i=(e||"").match($.notSpaceStart))==null?void 0:i[0],r=n.replace($.endingNewline,"")+`
`;return s?'<pre><code class="language-'+v(s)+'">'+(t?r:v(r,!0))+`</code></pre>
`:"<pre><code>"+(t?r:v(r,!0))+`</code></pre>
`}blockquote({tokens:n}){return`<blockquote>
${this.parser.parse(n)}</blockquote>
`}html({text:n}){return n}def(n){return""}heading({tokens:n,depth:e}){return`<h${e}>${this.parser.parseInline(n)}</h${e}>
`}hr(n){return`<hr>
`}list(n){let e=n.ordered,t=n.start,s="";for(let l=0;l<n.items.length;l++){let a=n.items[l];s+=this.listitem(a)}let r=e?"ol":"ul",i=e&&t!==1?' start="'+t+'"':"";return"<"+r+i+`>
`+s+"</"+r+`>
`}listitem(n){return`<li>${this.parser.parse(n.tokens)}</li>
`}checkbox({checked:n}){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:n}){return`<p>${this.parser.parseInline(n)}</p>
`}table(n){let e="",t="";for(let r=0;r<n.header.length;r++)t+=this.tablecell(n.header[r]);e+=this.tablerow({text:t});let s="";for(let r=0;r<n.rows.length;r++){let i=n.rows[r];t="";for(let l=0;l<i.length;l++)t+=this.tablecell(i[l]);s+=this.tablerow({text:t})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+s+`</table>
`}tablerow({text:n}){return`<tr>
${n}</tr>
`}tablecell(n){let e=this.parser.parseInline(n.tokens),t=n.header?"th":"td";return(n.align?`<${t} align="${n.align}">`:`<${t}>`)+e+`</${t}>
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${v(n,!0)}</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:e,tokens:t}){let s=this.parser.parseInline(t),r=ot(n);if(r===null)return s;n=r;let i='<a href="'+n+'"';return e&&(i+=' title="'+v(e)+'"'),i+=">"+s+"</a>",i}image({href:n,title:e,text:t,tokens:s}){s&&(t=this.parser.parseInline(s,this.parser.textRenderer));let r=ot(n);if(r===null)return v(t);n=r;let i=`<img src="${n}" alt="${v(t)}"`;return e&&(i+=` title="${v(e)}"`),i+=">",i}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):"escaped"in n&&n.escaped?n.text:v(n.text)}},je=class{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return""+n}image({text:n}){return""+n}br(){return""}checkbox({raw:n}){return n}},_=class Te{constructor(e){m(this,"options");m(this,"renderer");m(this,"textRenderer");this.options=e||D,this.options.renderer=this.options.renderer||new fe,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new je}static parse(e,t){return new Te(t).parse(e)}static parseInline(e,t){return new Te(t).parseInline(e)}parse(e){var s,r;this.renderer.parser=this;let t="";for(let i=0;i<e.length;i++){let l=e[i];if((r=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&r[l.type]){let o=l,h=this.options.extensions.renderers[o.type].call({parser:this},o);if(h!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(o.type)){t+=h||"";continue}}let a=l;switch(a.type){case"space":{t+=this.renderer.space(a);break}case"hr":{t+=this.renderer.hr(a);break}case"heading":{t+=this.renderer.heading(a);break}case"code":{t+=this.renderer.code(a);break}case"table":{t+=this.renderer.table(a);break}case"blockquote":{t+=this.renderer.blockquote(a);break}case"list":{t+=this.renderer.list(a);break}case"checkbox":{t+=this.renderer.checkbox(a);break}case"html":{t+=this.renderer.html(a);break}case"def":{t+=this.renderer.def(a);break}case"paragraph":{t+=this.renderer.paragraph(a);break}case"text":{t+=this.renderer.text(a);break}default:{let o='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return t}parseInline(e,t=this.renderer){var r,i;this.renderer.parser=this;let s="";for(let l=0;l<e.length;l++){let a=e[l];if((i=(r=this.options.extensions)==null?void 0:r.renderers)!=null&&i[a.type]){let h=this.options.extensions.renderers[a.type].call({parser:this},a);if(h!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)){s+=h||"";continue}}let o=a;switch(o.type){case"escape":{s+=t.text(o);break}case"html":{s+=t.html(o);break}case"link":{s+=t.link(o);break}case"image":{s+=t.image(o);break}case"checkbox":{s+=t.checkbox(o);break}case"strong":{s+=t.strong(o);break}case"em":{s+=t.em(o);break}case"codespan":{s+=t.codespan(o);break}case"br":{s+=t.br(o);break}case"del":{s+=t.del(o);break}case"text":{s+=t.text(o);break}default:{let h='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(h),"";throw new Error(h)}}}return s}},ce,G=(ce=class{constructor(n){m(this,"options");m(this,"block");this.options=n||D}preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}emStrongMask(n){return n}provideLexer(n=this.block){return n?y.lex:y.lexInline}provideParser(n=this.block){return n?_.parse:_.parseInline}},m(ce,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens","emStrongMask"])),m(ce,"passThroughHooksRespectAsync",new Set(["preprocess","postprocess","processAllTokens"])),ce),Qr=class{constructor(...n){m(this,"defaults",Me());m(this,"options",this.setOptions);m(this,"parse",this.parseMarkdown(!0));m(this,"parseInline",this.parseMarkdown(!1));m(this,"Parser",_);m(this,"Renderer",fe);m(this,"TextRenderer",je);m(this,"Lexer",y);m(this,"Tokenizer",ge);m(this,"Hooks",G);this.use(...n)}walkTokens(n,e){var s,r;let t=[];for(let i of n)switch(t=t.concat(e.call(this,i)),i.type){case"table":{let l=i;for(let a of l.header)t=t.concat(this.walkTokens(a.tokens,e));for(let a of l.rows)for(let o of a)t=t.concat(this.walkTokens(o.tokens,e));break}case"list":{let l=i;t=t.concat(this.walkTokens(l.items,e));break}default:{let l=i;(r=(s=this.defaults.extensions)==null?void 0:s.childTokens)!=null&&r[l.type]?this.defaults.extensions.childTokens[l.type].forEach(a=>{let o=l[a].flat(1/0);t=t.concat(this.walkTokens(o,e))}):l.tokens&&(t=t.concat(this.walkTokens(l.tokens,e)))}}return t}use(...n){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(t=>{let s={...t};if(s.async=this.defaults.async||s.async||!1,t.extensions&&(t.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){let i=e.renderers[r.name];i?e.renderers[r.name]=function(...l){let a=r.renderer.apply(this,l);return a===!1&&(a=i.apply(this,l)),a}:e.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let i=e[r.level];i?i.unshift(r.tokenizer):e[r.level]=[r.tokenizer],r.start&&(r.level==="block"?e.startBlock?e.startBlock.push(r.start):e.startBlock=[r.start]:r.level==="inline"&&(e.startInline?e.startInline.push(r.start):e.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(e.childTokens[r.name]=r.childTokens)}),s.extensions=e),t.renderer){let r=this.defaults.renderer||new fe(this.defaults);for(let i in t.renderer){if(!(i in r))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;let l=i,a=t.renderer[l],o=r[l];r[l]=(...h)=>{let c=a.apply(r,h);return c===!1&&(c=o.apply(r,h)),c||""}}s.renderer=r}if(t.tokenizer){let r=this.defaults.tokenizer||new ge(this.defaults);for(let i in t.tokenizer){if(!(i in r))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;let l=i,a=t.tokenizer[l],o=r[l];r[l]=(...h)=>{let c=a.apply(r,h);return c===!1&&(c=o.apply(r,h)),c}}s.tokenizer=r}if(t.hooks){let r=this.defaults.hooks||new G;for(let i in t.hooks){if(!(i in r))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;let l=i,a=t.hooks[l],o=r[l];G.passThroughHooks.has(i)?r[l]=h=>{if(this.defaults.async&&G.passThroughHooksRespectAsync.has(i))return(async()=>{let u=await a.call(r,h);return o.call(r,u)})();let c=a.call(r,h);return o.call(r,c)}:r[l]=(...h)=>{if(this.defaults.async)return(async()=>{let u=await a.apply(r,h);return u===!1&&(u=await o.apply(r,h)),u})();let c=a.apply(r,h);return c===!1&&(c=o.apply(r,h)),c}}s.hooks=r}if(t.walkTokens){let r=this.defaults.walkTokens,i=t.walkTokens;s.walkTokens=function(l){let a=[];return a.push(i.call(this,l)),r&&(a=a.concat(r.call(this,l))),a}}this.defaults={...this.defaults,...s}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,e){return y.lex(n,e??this.defaults)}parser(n,e){return _.parse(n,e??this.defaults)}parseMarkdown(n){return(e,t)=>{let s={...t},r={...this.defaults,...s},i=this.onError(!!r.silent,!!r.async);if(this.defaults.async===!0&&s.async===!1)return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return i(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return i(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(r.hooks&&(r.hooks.options=r,r.hooks.block=n),r.async)return(async()=>{let l=r.hooks?await r.hooks.preprocess(e):e,a=await(r.hooks?await r.hooks.provideLexer(n):n?y.lex:y.lexInline)(l,r),o=r.hooks?await r.hooks.processAllTokens(a):a;r.walkTokens&&await Promise.all(this.walkTokens(o,r.walkTokens));let h=await(r.hooks?await r.hooks.provideParser(n):n?_.parse:_.parseInline)(o,r);return r.hooks?await r.hooks.postprocess(h):h})().catch(i);try{r.hooks&&(e=r.hooks.preprocess(e));let l=(r.hooks?r.hooks.provideLexer(n):n?y.lex:y.lexInline)(e,r);r.hooks&&(l=r.hooks.processAllTokens(l)),r.walkTokens&&this.walkTokens(l,r.walkTokens);let a=(r.hooks?r.hooks.provideParser(n):n?_.parse:_.parseInline)(l,r);return r.hooks&&(a=r.hooks.postprocess(a)),a}catch(l){return i(l)}}}onError(n,e){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,n){let s="<p>An error occurred:</p><pre>"+v(t.message+"",!0)+"</pre>";return e?Promise.resolve(s):s}if(e)return Promise.reject(t);throw t}}},N=new Qr;function f(n,e){return N.parse(n,e)}f.options=f.setOptions=function(n){return N.setOptions(n),f.defaults=N.defaults,bt(f.defaults),f};f.getDefaults=Me;f.defaults=D;f.use=function(...n){return N.use(...n),f.defaults=N.defaults,bt(f.defaults),f};f.walkTokens=function(n,e){return N.walkTokens(n,e)};f.parseInline=N.parseInline;f.Parser=_;f.parser=_.parse;f.Renderer=fe;f.TextRenderer=je;f.Lexer=y;f.lexer=y.lex;f.Tokenizer=ge;f.Hooks=G;f.parse=f;f.options;f.setOptions;f.use;f.walkTokens;f.parseInline;_.parse;y.lex;const Gr="https://api.github.com/users/trustedshops-public/repos?per_page=100&type=owner",Fr=n=>{const e=new Map;return n.sort((s,r)=>r.stargazers_count-s.stargazers_count).forEach(s=>{const[r]=s.topics.filter(a=>a.startsWith("ts"));if(!r)return;const[i]=s.topics.filter(a=>a.startsWith("tp"));i&&(s.name=s.name.replace(i.replace("tp","")+"-",""));const l=r.substring(2);e.has(l)?e.set(l,[...e.get(l),s]):e.set(l,[s])}),new Map([...e.entries()].sort())},Ct=re`
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
`;function Et(n){return n.split("-").map(e=>`${e.charAt(0).toUpperCase()}${e.slice(1)}`).join(" ")}var Vr=Object.defineProperty,Jr=Object.getOwnPropertyDescriptor,Ze=(n,e,t,s)=>{for(var r=s>1?void 0:s?Jr(e,t):e,i=n.length-1,l;i>=0;i--)(l=n[i])&&(r=(s?l(e,t,r):l(r))||r);return s&&r&&Vr(e,t,r),r};let Y=class extends C{constructor(){super(...arguments),this.repository="",this.repo={id:-1,name:"",html_url:"",description:"",created_at:"",updated_at:"",topics:[],stargazers_count:0}}connectedCallback(){super.connectedCallback(),this.repo=JSON.parse(this.repository),this.repo.name=Et(this.repo.name)}render(){return M` <li class="card">
      <a class="card-link" href="${this.repo.html_url}">
        <h3>${this.repo.name}</h3>
        <p>${this.repo.description}</p>
      </a>
    </li>`}};Y.styles=[Ct,re`
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
    `];Ze([ne()],Y.prototype,"repository",2);Ze([ie()],Y.prototype,"repo",2);Y=Ze([me("ts-card")],Y);var Xr=Object.defineProperty,Kr=Object.getOwnPropertyDescriptor,$e=(n,e,t,s)=>{for(var r=s>1?void 0:s?Kr(e,t):e,i=n.length-1,l;i>=0;i--)(l=n[i])&&(r=(s?l(e,t,r):l(r))||r);return s&&r&&Xr(e,t,r),r};let q=class extends C{constructor(){super(...arguments),this.list="",this.title="",this.repositories=[]}connectedCallback(){super.connectedCallback(),this.repositories=JSON.parse(this.list),this.title=Et(JSON.parse(this.title))}render(){return M` <section>
      <h2>${this.title}</h2>
      <ul>
        ${this.repositories.map(n=>M` <ts-card
            repository="${JSON.stringify(n)}"
          ></ts-card>`)}
      </ul>
    </section>`}};q.styles=[Ct,re`
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
    `];$e([ne()],q.prototype,"list",2);$e([ne()],q.prototype,"title",2);$e([ie()],q.prototype,"repositories",2);q=$e([me("ts-section")],q);var Yr=Object.defineProperty,es=Object.getOwnPropertyDescriptor,We=(n,e,t,s)=>{for(var r=s>1?void 0:s?es(e,t):e,i=n.length-1,l;i>=0;i--)(l=n[i])&&(r=(s?l(e,t,r):l(r))||r);return s&&r&&Yr(e,t,r),r};let ee=class extends C{constructor(){super(...arguments),this.data=new Map,this.intro=""}async connectedCallback(){super.connectedCallback();try{const e=await(await fetch("/intro.md")).text();this.intro=f.parse(e)}catch{this.intro="Normally you would see an intro here, but something went horribly wrong."}try{const e=await(await fetch(Gr)).json();this.data=Fr(e)}catch{alert(`Failed to load GitHub Repositories using Github API.
It might be you have been refreshing the page to often or GitHub currently has problems.
Please come back later or directly check on GitHub.
Thank your for understanding. `)}}render(){return M`
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
        <div class="intro">${sr(this.intro)}</div>
        ${Array.from(this.data).map(([n,e])=>M` <ts-section
            list="${JSON.stringify(e)}"
            title="${JSON.stringify(n)}"
          ></ts-section>`)}
      </main>
    `}};ee.styles=re`
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
  `;We([ie()],ee.prototype,"data",2);We([ie()],ee.prototype,"intro",2);ee=We([me("ts-main")],ee);var ts=Object.defineProperty,rs=Object.getOwnPropertyDescriptor,Qe=(n,e,t,s)=>{for(var r=s>1?void 0:s?rs(e,t):e,i=n.length-1,l;i>=0;i--)(l=n[i])&&(r=(s?l(e,t,r):l(r))||r);return s&&r&&ts(e,t,r),r};const pt={mobile:"0 0 320 64",tablet:"0 0 768 71",desktop:"0 0 1920 122"};let te=class extends C{constructor(){super(...arguments),this.direction="top"}detectDeviceType(){const{matches:n}=window.matchMedia("(max-width: 600px"),{matches:e}=window.matchMedia("(max-width: 1200px");n?this.device="mobile":e?this.device="tablet":this.device="desktop"}connectedCallback(){super.connectedCallback(),this.detectDeviceType(),window.addEventListener("resize",()=>{this.detectDeviceType()})}render(){return this.direction==="bottom"?M` <svg
        viewBox="${pt[this.device]}"
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
      </svg>`:M` <svg
      viewBox="${pt[this.device]}"
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
    </svg>`}};te.styles=re`
    svg {
      display: block;
    }
  `;Qe([ne({type:String})],te.prototype,"direction",2);Qe([ie()],te.prototype,"device",2);te=Qe([me("ts-wave")],te);
