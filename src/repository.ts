export type Repository = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  created_at: string;
  updated_at: string;
  topics: string[];
  stargazers_count: number;
  lastActivityDate: string;
  type: 'release' | 'commit' | 'pushed_at' | 'fallback';
  releaseVersion?: string;
  language?: string;
};

export type GroupRepository = Map<string, Repository[]>;

export const getOrderedRepositories = (list: Repository[]): GroupRepository => {
  const data: GroupRepository = new Map();

  const sorted = list.sort(
    (a, b) =>
      new Date(b.lastActivityDate).getTime() -
      new Date(a.lastActivityDate).getTime(),
  );

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
