# npm release runbook

`stylist-svelte` on npm contains **only public modules** (`modules.json` entries without
`"private": true`). Private modules (`business`, `spanish`, `farm`, `travel`, `geo`, `wbd`)
and the `server` domain never reach the tarball. Releases are monthly (first working days),
prepared by an agent and **published only by Dmitrii**.

All commands run from the lankatour site root unless stated otherwise. Inside
`packages/stylist-svelte`, `yarn <script>` fails (tracked `yarn.lock`); use `node scripts/…`.

## Preconditions

1. No session has uncommitted work in `modules/**` or `src/lib/**` (check today's
   `docs/lankatour.ru/chat/<date>/` log). Module submodules that the umbrella gitlinks point to
   must be committed **together** with the generated files referring to them: the root
   `src/lib/index.ts` and the observer manifest list files of those commits, so pushing the
   umbrella without them gives Workers Builds (and npm consumers) dangling references.
2. Nothing is pushed to `main` until the gate is green: every push to `main` auto-deploys
   stylist-svelte.online (Cloudflare Workers Builds). The `.githooks/pre-push` hook runs the gate
   (`npm run hooks:install` once per clone).

## Steps

| # | Who | Command | Expect |
|---|-----|---------|--------|
| 1 | Dmitrii (human-only) | `yarn stylist:index` (repeat until `No generated index.ts files`), then `yarn stylist:manifest` | Public `src/lib/index.ts` + public manifest; local-only `src/lib/index.full.ts` (ignored) |
| 2 | agent | `yarn stylist:gate` | `[gate] public-only gate passed.` — boundary 0 violations, package closure, python `--check` up to date |
| 3 | agent | `cd packages/stylist-svelte && node --test scripts/*.test.mjs` | all pass |
| 4 | agent | `yarn stylist:package` (~4 min) | `All good!` (bounded publint, see below) |
| 5 | agent | `cd packages/stylist-svelte && node scripts/check-package-tarball.mjs` | `Tarball: no private modules, stories or tests.` + size stats |
| 6 | agent | demo: `npx sv create` (SvelteKit, TS, minimal) outside the repo, `npm pack --ignore-scripts`, `npm i <tgz>`, page with components from several modules, `npm run build`, `vite preview`, Playwright screenshot, console clean; then delete the demo | ✓ |
| 7 | agent | bump `version` above `npm view stylist-svelte version`, `CHANGELOG.md`, commit + tag `v<version>` in the umbrella | local only |
| 8 | Dmitrii | `git push` (umbrella, modules, tag) | Workers Builds re-runs the gate |
| 9 | Dmitrii | `cd packages/stylist-svelte && npm publish --ignore-scripts` | `--ignore-scripts` is required: `prepublishOnly` calls `yarn build`, which fails in this folder; step 4 already built `dist` |
| 10 | agent | `npm view stylist-svelte version dist.unpackedSize time.modified`; reinstall in a demo from the registry; add a row below | ✓ |

### What the gate checks (`scripts/stylist-gate.mjs`)

- **public boundary** (`check-public-boundary.mjs`): every `.svelte/.ts/.js` file of public
  modules and `src/` — stories included, the sandbox renders them — must not import
  `$stylist/<private>`, `stylist-svelte/<private>`, `stylist-svelte-travel` or relative paths
  into `modules/<private>`. Committed generated files (`src/lib/index.ts`, the four observer
  manifest JSONs) must not mention private modules; `src/lib/index.full.ts` must not be tracked.
- **npm package closure** (`check-package-source.mjs`): the public root's transitive sources
  exist and stay out of private/server/story/test files.
- **python** (only when `packages/stylist` sits next to the checkout or `STYLIST_TOOLS_DIR` is
  set; otherwise `SKIPPED`): `auditor/cli.py --check` = `indexation/cli.py --check --modules
  public --projects stylist-svelte` + byte comparison of the public manifest. It never writes.

The gate never regenerates; a stale result means step 1 (human-only).

### Indexation options

`packages/stylist/indexation/cli.py` (also through `yarn stylist:index …`):
`--modules all|public|a,b`, `--exclude-modules a,b`, `--dry-run` (diagnostics in
`output/dry-run`, nothing written), `--check` (dry run, exit 1 when stale), `--projects
stylist-svelte`. A partial module selection never writes `index.full.ts`. The same selection
is available to node scripts: `moduleSources(root, { modules, exclude })` or `STYLIST_MODULES` /
`STYLIST_EXCLUDE_MODULES`.

### Known packaging gotchas

- `tsconfig.package.json` (ignored, written by `assemble-package-source.mjs`) must live in the
  package root: `svelte2tsx` resolves `declarationDir` against the tsconfig folder, while
  `svelte-package` collects `.d.ts` relative to `cwd`. A tsconfig inside `.package-input/`
  silently produced a `dist` without any `.d.ts` (publint: `types … does not exist`).
- Plain `publint` reads all ~6.5k dist files at once; on Windows that hits `EMFILE` and is
  reported as hundreds of false `FILE_DOES_NOT_EXIST`. `scripts/publint-package.mjs` bounds
  `readFile` concurrency (64) and is used by `yarn stylist:package`.
- `tsconfig.json` `include` must list every `modules.json` owner (test
  `package-modules.test.mjs`); a missing owner is skipped by `svelte-check` and type emission.

## Release log

| Date | Version | Umbrella commit | Index (pass 1 / 2) | Manifest | Package build | dist | Tarball packed / unpacked / files | Domains | publint | svelte-check | Demo | npm | Published by |
|------|---------|-----------------|--------------------|----------|---------------|------|-----------------------------------|---------|---------|--------------|------|-----|--------------|
| 2026-10-08 | 1.1.0 — **never published**, superseded by 2.0.0 (tag `v1.1.0` removed) | release commit tagged `v1.1.0` (gate/fix `877a0ea2d`; stylist `41ebdc2`, observer `1ce87cb`, business `2050fc5`) | 11 s (17 files) / 9 s | 27 s, public only | 213 s (146 s rebuild at 1.1.0) | 6472 files, 2871 `.d.ts`, 28 MB | 8.81 MB / 17.07 MB / 6475 (1.1.0: 8 814 611 / 17 067 766 B) | 33 public | All good! (bounded) | 0 errors / 441 warnings (5773 files) | ✓ SSR + hydration, clicks, 0 console errors; client JS 504 KB (91 KB gzip, 682 lazy chunks, page 147 KB); [screenshot](screenshots/release-demo-2026-10-08.png) | not published | — |

For comparison, npm `1.0.1` (2026-05-11): 8613 files, 8.58 MB unpacked, included business
domains. Leaving business out of the package is a breaking change for 1.0.1 users.

### Demo findings (2026-10-08, not blocking)

- `Button`: `RecipeButton.onClick` is declared but not wired; `onclick` (HTML attribute) works.
- `Table`: `caption` and `striped` are accepted by the type but not rendered.
- `Icon name="check"` rendered nothing visible in the demo.
- Subpath imports were verified as `stylist-svelte/<domain>/index.js`; the directory form
  `stylist-svelte/<domain>` was not tested (`exports["./*"]` maps to `./dist/*`).
