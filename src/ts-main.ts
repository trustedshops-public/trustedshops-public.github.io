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

type RootObject = {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: Owner;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language?: any;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  forks_count: number;
  mirror_url?: any;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license?: any;
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  topics: string[];
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
};

type Owner = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
