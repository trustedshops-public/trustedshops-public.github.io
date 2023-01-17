import{r as i,i as l,t as d,s as x,m as v,y as m,o as b,a as h}from"./ts-wave.0a024a60.js";var f=Object.defineProperty,g=Object.getOwnPropertyDescriptor,c=(r,o,n,e)=>{for(var t=e>1?void 0:e?g(o,n):o,s=r.length-1,p;s>=0;s--)(p=r[s])&&(t=(e?p(o,n,t):p(t))||t);return e&&t&&f(o,n,t),t};let a=class extends x{constructor(){super(...arguments),this.content=""}async connectedCallback(){super.connectedCallback();try{const o=await(await fetch("/privacy-text.md")).text();this.content=v.parse(o)}catch{this.content="Failed to load privacy statement."}}render(){return m`
      <main>
        <div class='intro'>${b(this.content)}</div>
      </main> `}};a.styles=[i,l`
      main {
        max-width: 1200px;
        margin: auto;
        position: relative;
      }
      p {
        color: var(--font-color);
      }
      h2 {
        font: var(--ts-headline-2);
        color: var(--font-color);
      }
      p,
      h2 {
        margin-bottom: 1em;
      }
      a {
        color: var(--link-color);
        font-size: 1em;
      }
      .intro {
        background-color: var(--background-color);
        border-radius: 40px 40px 0 0;
        margin-top: -100px;
        padding: 40px;
        padding-top: 80px;
        padding-bottom: 120px;
        position: relative;
        box-shadow: -30px -20px 30px -30px rgb(0 0 0 / 50%),
          30px -20px 30px -30px rgb(0 0 0 / 50%);
      }
    `];c([d()],a.prototype,"content",2);a=c([h("ts-privacy")],a);
