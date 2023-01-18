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
  stargazers_count : number
};

export const getOrderedRepositories = (list: Repository[]): GroupRepository => {
  const data: GroupRepository = new Map();
  const sorted = list.sort((a, b) => b.stargazers_count - a.stargazers_count)

  sorted.forEach((item) => {
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
