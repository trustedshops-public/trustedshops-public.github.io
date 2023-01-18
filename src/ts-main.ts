import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { marked } from 'marked';

import './ts-section.ts';

const githubApi =
  'https://api.github.com/users/trustedshops-public/repos?per_page=100&type=owner';

type GroupRepository = Map<string, Repository[]>;

export type Repository = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  created_at: string;
  updated_at: string;
  topics: string[];
  [key: string]: unknown;
};

const getOrderedRepositories = (list: Repository[]): GroupRepository => {
  const data: GroupRepository = new Map();

  list.forEach((item) => {
    const [topic] = item.topics.filter((topic: string) =>
      topic.startsWith('ts')
    );

    if (!topic) {
      return;
    }

    const title = topic.substring(2);

    data.has(title)
      ? data.set(title, [...data.get(title)!, item])
      : data.set(title, [item]);
  });
  return data;
};

@customElement('ts-main')
export class TsMain extends LitElement {
  @state()
  private data: GroupRepository = new Map();

  @state()
  intro: string = '';

  async connectedCallback(): Promise<void> {
    super.connectedCallback();
    try {
      const textResponse = await fetch('/intro.md');
      const text = await textResponse.text();
      this.intro = marked.parse(text);
    } catch (e) {
      this.intro = 'Normally you would see an intro here, but something went horribly wrong.';
    }

    try {
      const response = await fetch(githubApi);
      const rawList: Repository[] = await response.json();
      this.data = getOrderedRepositories(rawList);
    } catch (e) {
      alert(
        'Failed to load GitHub Repositories using Github API.\n' +
        'It might be you have been refreshing the page to often or GitHub currently has problems.\n' +
        'Please come back later or directly check on GitHub.\n' +
        'Thank your for understanding. '
      );
    }
  }

  static styles = css`
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
  `;

  render() {
    return html`
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
          ${unsafeHTML(this.intro)}
        </div>
        ${Array.from(this.data).map(([title, repositories]) => {
          return html`
            <ts-section
              list='${JSON.stringify(repositories)}'
              title='${JSON.stringify(title)}'
            ></ts-section>`;
        })}
      </main> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ts-main': TsMain;
  }
}
