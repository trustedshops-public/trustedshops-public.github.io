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
      await new Promise((r) => setTimeout(r, 1000 * (i + 1)));
    }
  }
}

async function getLastActivityDate(repo) {
  try {
    // Try to get latest release
    const releases = await fetchWithRetry(
      `https://api.github.com/repos/${ORG}/${repo.name}/releases/latest`,
    );

    if (releases.published_at) {
      return {
        lastActivityDate: releases.published_at,
        type: 'release',
        releaseVersion: releases.tag_name,
      };
    }
  } catch (err) {
    // No releases, that's ok
  }

  try {
    // Fall back to main branch last commit
    const commits = await fetchWithRetry(
      `https://api.github.com/repos/${ORG}/${repo.name}/commits?sha=main&per_page=1`,
    );

    if (Array.isArray(commits) && commits[0]) {
      return {
        lastActivityDate: commits[0].commit.committer.date,
        type: 'commit',
      };
    }
  } catch (err) {
    // Main branch might not exist or other error
  }

  // Fallback to repo's pushed_at
  return { lastActivityDate: repo.pushed_at, type: 'pushed_at' };
}

async function main() {
  console.log('Fetching repos from GitHub...');
  const allRepos = await fetchWithRetry(
    `https://api.github.com/users/${ORG}/repos?per_page=100&type=owner`,
  );

  const repos = allRepos.filter((r) => !r.archived);
  console.log(
    `Found ${repos.length} active repos (${allRepos.length - repos.length} archived). Fetching activity dates...`,
  );
  const metadata = [];

  for (const repo of repos) {
    try {
      const { lastActivityDate, type, releaseVersion } =
        await getLastActivityDate(repo);
      const entry = {
        id: repo.id,
        name: repo.name,
        html_url: repo.html_url,
        description: repo.description,
        created_at: repo.created_at,
        updated_at: repo.updated_at,
        topics: repo.topics,
        stargazers_count: repo.stargazers_count,
        lastActivityDate,
        type,
        ...(releaseVersion && { releaseVersion }),
        ...(repo.language && { language: repo.language }),
      };
      metadata.push(entry);
      console.log(
        `✓ ${repo.name} (${type}${releaseVersion ? ` - ${releaseVersion}` : ''})`,
      );
    } catch (err) {
      console.error(`✗ ${repo.name}: ${err.message}`);
      // Add fallback with available data
      metadata.push({
        id: repo.id,
        name: repo.name,
        html_url: repo.html_url,
        description: repo.description,
        created_at: repo.created_at,
        updated_at: repo.updated_at,
        topics: repo.topics,
        stargazers_count: repo.stargazers_count,
        lastActivityDate: repo.pushed_at,
        type: 'fallback',
        ...(repo.language && { language: repo.language }),
      });
    }
  }

  console.log(`Writing metadata to public/repos-metadata.json...`);
  fs.writeFileSync(
    'public/repos-metadata.json',
    JSON.stringify(metadata, null, 2),
  );

  console.log('Done!');
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
