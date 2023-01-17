import{r as v,i as g,e as u,t as d,s as b,y as p,a as f,m as w,o as _}from"./ts-wave-b7644c6b.js";function y(e){return e.split("-").map(r=>`${r.charAt(0).toUpperCase()}${r.slice(1)}`).join(" ")}var O=Object.defineProperty,$=Object.getOwnPropertyDescriptor,m=(e,r,s,o)=>{for(var t=o>1?void 0:o?$(r,s):r,a=e.length-1,i;a>=0;a--)(i=e[a])&&(t=(o?i(r,s,t):i(t))||t);return o&&t&&O(r,s,t),t};let l=class extends b{constructor(){super(...arguments),this.repository="",this.repo={id:-1,name:"",html_url:"",description:"",created_at:"",updated_at:"",topics:[]}}connectedCallback(){super.connectedCallback(),this.repo=JSON.parse(this.repository),this.repo.name=y(this.repo.name)}render(){return p`
      <li class='card'>
        <a class='card-link' href='${this.repo.html_url}'>
          <h3>${this.repo.name}</h3>
          <p>${this.repo.description}</p>
        </a>
      </li>`}};l.styles=[v,g`
      .card {
        box-shadow: 0 2px 6px 0 rgb(0 0 0 / 14%), 0 1px 2px 0 rgb(0 0 0 / 8%),
          0 0 1px 0 rgb(0 0 0 / 6%), 0 0 0 0 rgb(0 0 0 / 4%);
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
        box-shadow: 0 6px 10px 0 rgb(0 0 0 / 14%), 0 3px 4px 0 rgb(0 0 0 / 8%),
          0 2px 3px 0 rgb(0 0 0 / 6%), 0 2px 2px 0 rgb(0 0 0 / 4%);
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
    `];m([u()],l.prototype,"repository",2);m([d()],l.prototype,"repo",2);l=m([f("ts-card")],l);var P=Object.defineProperty,C=Object.getOwnPropertyDescriptor,h=(e,r,s,o)=>{for(var t=o>1?void 0:o?C(r,s):r,a=e.length-1,i;a>=0;a--)(i=e[a])&&(t=(o?i(r,s,t):i(t))||t);return o&&t&&P(r,s,t),t};let n=class extends b{constructor(){super(...arguments),this.list="",this.title="",this.repositories=[]}connectedCallback(){super.connectedCallback(),this.repositories=JSON.parse(this.list),this.title=y(JSON.parse(this.title))}render(){return p`
      <section>
        <h2>${this.title}</h2>
        <ul>
          ${this.repositories.map(e=>p`
              <ts-card
                repository='${JSON.stringify(e)}'
              ></ts-card>`)}
        </ul>
      </section>`}};n.styles=[v,g`
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
        grid-template-columns: repeat(3, minmax(0, 1fr));
        grid-auto-rows: 1fr;
        gap: 1.5rem;
      }
    `];h([u()],n.prototype,"list",2);h([u()],n.prototype,"title",2);h([d()],n.prototype,"repositories",2);n=h([f("ts-section")],n);var j=Object.defineProperty,S=Object.getOwnPropertyDescriptor,x=(e,r,s,o)=>{for(var t=o>1?void 0:o?S(r,s):r,a=e.length-1,i;a>=0;a--)(i=e[a])&&(t=(o?i(r,s,t):i(t))||t);return o&&t&&j(r,s,t),t};const k="https://api.github.com/users/trustedshops-public/repos?per_page=100&type=owner",N=e=>{const r=new Map;return e.forEach(s=>{const[o]=s.topics.filter(a=>a.startsWith("ts"));if(!o)return;const t=o.substring(2);r.has(t)?r.set(t,[...r.get(t),s]):r.set(t,[s])}),r};let c=class extends b{constructor(){super(...arguments),this.data=new Map,this.intro=""}async connectedCallback(){super.connectedCallback();try{const r=await(await fetch("/intro.md")).text();this.intro=w.parse(r)}catch{this.intro="Normally you would see an intro here, but something went horribly wrong."}try{const r=await(await fetch(k)).json();this.data=N(r)}catch{alert(`Failed to load GitHub Repositories using Github API.
It might be you have been refreshing the page to often or GitHub currently has problems.
Please come back later or directly check on GitHub.
Thank your for understanding. `)}}render(){return p`
      <main>
        <div class='intro'>
          <div class='badge'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 500 500'
              width='100'
            >
              <circle class='cls-1' cx='250' cy='250' r='249' />
              <g>
                <path
                  d='M250,66A184.05,184.05,0,1,0,434.05,250,184,184,0,0,0,250,66Zm-1.52,299.43a116,116,0,1,1,116-116A116,116,0,0,1,248.48,365.38Z'
                />
                <path
                  d='M298.88,285.82C282,310.76,258.55,333.49,227,333.49c-33.37,0-52.8-20.9-52.8-54.63,0-54.63,40.33-108.16,97.16-108.16,19.06,0,44.73,7.7,44.73,30.8,0,41.43-64.9,55.36-96.8,63.43-1.1,7-2.19,13.93-2.19,20.89,0,14.3,7.69,27.5,23.46,27.5,20.53,0,37-19.8,49.13-34.46Zm-17.6-89.09c0-8.43-4.77-15-13.57-15-26.4,0-40,51.33-45.09,71.49C247.18,245.86,281.28,225.7,281.28,196.73Z'
                />
              </g>
            </svg>
          </div>

          ${_(this.intro)}
        </div>
        ${Array.from(this.data).map(([e,r])=>p`
            <ts-section
              list='${JSON.stringify(r)}'
              title='${JSON.stringify(e)}'
            ></ts-section>`)}
      </main> `}};c.styles=g`
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
      border-radius: 40px 40px 0 0;
      margin-top: -100px;
      padding: 80px 150px 40px;
      padding-top: 80px;
      position: relative;
      box-shadow: -30px -20px 30px -30px rgb(0 0 0 / 50%),
        30px -20px 30px -30px rgb(0 0 0 / 50%);
    }
    .badge {
      position: absolute;
      padding: 1rem;
      border-radius: 50%;
      left: 50%;
      top: -50%;
      transform: translate(-50%, 50%);
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
  `;x([d()],c.prototype,"data",2);x([d()],c.prototype,"intro",2);c=x([f("ts-main")],c);
