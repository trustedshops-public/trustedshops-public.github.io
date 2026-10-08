# trustedshops-public.github.io

Our OpenSource projects landing page.

## Development

Use **Yarn** for this repository (do not use npm).

```bash
yarn install
yarn dev
yarn build
yarn lint
yarn lint:fix
yarn format:check
yarn format
```

### Repository Metadata

Repositories are sorted by their most meaningful activity date (latest release or main branch commit). CircleCI generates the metadata daily and saves it as a build artifact. The file `public/repos-metadata.json` is git-ignored, so it is not committed.

For local development, generate the file manually:

```bash
GITHUB_TOKEN=<your-token> yarn metadata
```

Requires a GitHub Personal Access Token with `repo:status` scope (to read repository data).

The metadata file is optional—if unavailable, the app still works but may have different sort order.
