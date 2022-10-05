import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

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

  async connectedCallback(): Promise<void> {
    super.connectedCallback();
    const response = await fetch(githubApi, {
      headers: {
        authorization:
          'Basic ' + btoa('Braweria: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'),
      },
    });
    const rawList: Repository[] = await response.json();

    this.data = getOrderedRepositories(rawList);
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
      border-radius: 40px 40px 0 0;
      margin-top: -100px;
      padding: 40px;
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
  `;

  render() {
    return html`<main>
      <div class="intro">
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

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      ${Array.from(this.data).map(([title, repositories]) => {
        return html`<ts-section
          list=${JSON.stringify(repositories)}
          title=${JSON.stringify(title)}
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
