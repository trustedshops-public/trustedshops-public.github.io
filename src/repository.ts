export const githubApi =
  'https://api.github.com/users/trustedshops-public/repos?per_page=100&type=owner';

export type GroupRepository = Map<string, Repository[]>;

export type Repository = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  created_at: string;
  updated_at: string;
  topics: string[];
  [key: string]: unknown;
  stargazers_count: number;
};

export type RepoMetadata = {
  name: string;
  lastActivityDate: string;
  type: 'release' | 'commit' | 'pushed_at' | 'fallback';
};

export const getOrderedRepositories = (list: Repository[], metadata: RepoMetadata[]): GroupRepository => {
  const data: GroupRepository = new Map();
  const metadataMap = new Map(metadata.map(m => [m.name, m]));

  const sorted = list.sort((a, b) => {
    const dateA = metadataMap.get(a.name)?.lastActivityDate || a.updated_at;
    const dateB = metadataMap.get(b.name)?.lastActivityDate || b.updated_at;
    return new Date(dateB).getTime() - new Date(dateA).getTime();
  });

  sorted.forEach((item) => {
    const [topic] = item.topics.filter((topic: string) =>
      topic.startsWith('ts'),
    );
    if (!topic) {
      return;
    }

    const [prefix] = item.topics.filter((topic: string) =>
      topic.startsWith('tp'),
    );
    if (prefix) {
      item.name = item.name.replace(prefix.replace('tp', '') + '-', '');
    }

    const title = topic.substring(2);

    if (data.has(title)) {
      data.set(title, [...data.get(title)!, item]);
    } else {
      data.set(title, [item]);
    }
  });
  return new Map([...data.entries()].sort());
};
