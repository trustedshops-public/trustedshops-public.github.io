import{r as y,i as u,e as b,t as d,s as f,y as p,a as m,m as _,o as O}from"./ts-wave-39f3b63c.js";const $="https://api.github.com/users/trustedshops-public/repos?per_page=100&type=owner",P=o=>{const r=new Map;return o.sort((e,t)=>t.stargazers_count-e.stargazers_count).forEach(e=>{const[t]=e.topics.filter(g=>g.startsWith("ts"));if(!t)return;const[a]=e.topics.filter(g=>g.startsWith("tp"));a&&(e.name=e.name.replace(a.replace("tp","")+"-",""));const s=t.substring(2);r.has(s)?r.set(s,[...r.get(s),e]):r.set(s,[e])}),new Map([...r.entries()].sort())};function w(o){return o.split("-").map(r=>`${r.charAt(0).toUpperCase()}${r.slice(1)}`).join(" ")}var C=Object.defineProperty,j=Object.getOwnPropertyDescriptor,x=(o,r,i,e)=>{for(var t=e>1?void 0:e?j(r,i):r,a=o.length-1,s;a>=0;a--)(s=o[a])&&(t=(e?s(r,i,t):s(t))||t);return e&&t&&C(r,i,t),t};let c=class extends f{constructor(){super(...arguments),this.repository="",this.repo={id:-1,name:"",html_url:"",description:"",created_at:"",updated_at:"",topics:[]}}connectedCallback(){super.connectedCallback(),this.repo=JSON.parse(this.repository),this.repo.name=w(this.repo.name)}render(){return p`
      <li class='card'>
        <a class='card-link' href='${this.repo.html_url}'>
          <h3>${this.repo.name}</h3>
          <p>${this.repo.description}</p>
        </a>
      </li>`}};c.styles=[y,u`
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
    `];x([b()],c.prototype,"repository",2);x([d()],c.prototype,"repo",2);c=x([m("ts-card")],c);var S=Object.defineProperty,k=Object.getOwnPropertyDescriptor,h=(o,r,i,e)=>{for(var t=e>1?void 0:e?k(r,i):r,a=o.length-1,s;a>=0;a--)(s=o[a])&&(t=(e?s(r,i,t):s(t))||t);return e&&t&&S(r,i,t),t};let n=class extends f{constructor(){super(...arguments),this.list="",this.title="",this.repositories=[]}connectedCallback(){super.connectedCallback(),this.repositories=JSON.parse(this.list),this.title=w(JSON.parse(this.title))}render(){return p`
      <section>
        <h2>${this.title}</h2>
        <ul>
          ${this.repositories.map(o=>p`
              <ts-card
                repository='${JSON.stringify(o)}'
              ></ts-card>`)}
        </ul>
      </section>`}};n.styles=[y,u`
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
    `];h([b()],n.prototype,"list",2);h([b()],n.prototype,"title",2);h([d()],n.prototype,"repositories",2);n=h([m("ts-section")],n);var N=Object.defineProperty,A=Object.getOwnPropertyDescriptor,v=(o,r,i,e)=>{for(var t=e>1?void 0:e?A(r,i):r,a=o.length-1,s;a>=0;a--)(s=o[a])&&(t=(e?s(r,i,t):s(t))||t);return e&&t&&N(r,i,t),t};let l=class extends f{constructor(){super(...arguments),this.data=new Map,this.intro=""}async connectedCallback(){super.connectedCallback();try{const r=await(await fetch("/intro.md")).text();this.intro=_.parse(r)}catch{this.intro="Normally you would see an intro here, but something went horribly wrong."}try{const r=await(await fetch($)).json();this.data=P(r)}catch{alert(`Failed to load GitHub Repositories using Github API.
It might be you have been refreshing the page to often or GitHub currently has problems.
Please come back later or directly check on GitHub.
Thank your for understanding. `)}}render(){return p`
      <main>
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
        <div class='intro'>
          ${O(this.intro)}
        </div>
        ${Array.from(this.data).map(([o,r])=>p`
            <ts-section
              list='${JSON.stringify(r)}'
              title='${JSON.stringify(o)}'
            ></ts-section>`)}
      </main> `}};l.styles=u`
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
      box-shadow: -30px -20px 30px -30px rgb(0 0 0 / 50%),
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
      text-align:center;
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
  `;v([d()],l.prototype,"data",2);v([d()],l.prototype,"intro",2);l=v([m("ts-main")],l);
