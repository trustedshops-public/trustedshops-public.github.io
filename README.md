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

Repositories are sorted by their most meaningful activity date (latest release or main branch commit). The metadata is generated daily by CircleCI and stored in `public/repos-metadata.json`, which is automatically included in the build.

For local development, generate metadata manually:

```bash
GITHUB_TOKEN=<your-token> yarn metadata
```

Requires a GitHub Personal Access Token with `repo:status` scope (to read repository data).

The metadata file is optional—if unavailable, the app still works but may have different sort order.
