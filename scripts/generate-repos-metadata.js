import fs from 'fs';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const ORG = 'trustedshops-public';

async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url, {
        headers: { Authorization: `token ${GITHUB_TOKEN}` },
      });
      if (!res.ok) throw new Error(`${res.status}: ${res.statusText}`);
      return await res.json();
    } catch (err) {
      if (i === retries - 1) throw err;
      await new Promise(r => setTimeout(r, 1000 * (i + 1)));
    }
  }
}

async function getRepoMetadata(repo) {
  try {
    // Try to get latest release
    const releases = await fetchWithRetry(
      `https://api.github.com/repos/${ORG}/${repo.name}/releases/latest`
    );

    if (releases.published_at) {
      return {
        name: repo.name,
        lastActivityDate: releases.published_at,
        type: 'release',
      };
    }
  } catch (err) {
    // No releases, that's ok
  }

  try {
    // Fall back to main branch last commit
    const commits = await fetchWithRetry(
      `https://api.github.com/repos/${ORG}/${repo.name}/commits?sha=main&per_page=1`
    );

    if (Array.isArray(commits) && commits[0]) {
      return {
        name: repo.name,
        lastActivityDate: commits[0].commit.committer.date,
        type: 'commit',
      };
    }
  } catch (err) {
    // Main branch might not exist or other error
  }

  // Fallback to repo's pushed_at
  return {
    name: repo.name,
    lastActivityDate: repo.pushed_at,
    type: 'pushed_at',
  };
}

async function main() {
  console.log('Fetching repos from GitHub...');
  const repos = await fetchWithRetry(
    `https://api.github.com/users/${ORG}/repos?per_page=100&type=owner`
  );

  console.log(`Found ${repos.length} repos. Fetching metadata...`);
  const metadata = [];

  for (const repo of repos) {
    try {
      const data = await getRepoMetadata(repo);
      metadata.push(data);
      console.log(`✓ ${data.name} (${data.type})`);
    } catch (err) {
      console.error(`✗ ${repo.name}: ${err.message}`);
      // Add fallback
      metadata.push({
        name: repo.name,
        lastActivityDate: repo.pushed_at,
        type: 'fallback',
      });
    }
  }

  console.log(`Writing metadata to repos-metadata.json...`);
  fs.writeFileSync(
    'repos-metadata.json',
    JSON.stringify(metadata, null, 2)
  );

  console.log('Done!');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
