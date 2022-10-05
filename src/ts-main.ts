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
    const response = await fetch(githubApi);
    const rawList: Repository[] = await response.json();

    this.data = getOrderedRepositories(rawList);
  }

  render() {
    return html`<main>
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
