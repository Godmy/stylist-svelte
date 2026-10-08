# Contributing to Stylist Svelte

Read [AGENTS.md](AGENTS.md) before editing. It defines mandatory source ownership,
entity structure, assembly direction, generation and hot-reload rules. Project
navigation is in [src/index.md](src/index.md).

## Setup

Use the [README setup sequence](README.md#local-development) and
[module checkout guide](modules/readme.md#checkout-and-repository-boundaries).
CI selects Node.js 24; package.json pins Yarn 4.6.0. Install at the parent site
root when using its workspace, or at the library root for a standalone clone.
The current checkout and generation blockers are in [src/backlog.md](src/backlog.md).

## Source changes

Find the owner in [modules.json](modules.json), then edit and commit in that
physical repository. Inspect its `.gitmodules` for nested owners. The umbrella
records submodule revisions; do not recreate source copies under `src/lib`.

Within a domain, use `<domain>/<cluster>/<joint>/<family>`. Each implementation
file exports one entity. Component families use `index.svelte`, their generated
`index.ts`, optional `index.story.svelte`, and optional `readme.md`. Follow
AGENTS.md for allowed joints, state/test locations and DSIAP interface assembly.
Use existing implementations in the owning domain as examples.

Generated barrels and root exports are human-only. After changes affecting
exports or the component inventory, tell Dmitrii which regeneration is needed.
The parent site's `yarn stylist:manifest` refreshes roots and the sandbox
manifest; it is not a standalone library command. Agents never run the global
indexation, auditor or unified error CLI.

## Validation

The library and CI use these checks (package commands are declared in
[package.json](package.json)):

| Command                                                | Scope                                                     |
| ------------------------------------------------------ | --------------------------------------------------------- |
| `yarn lint`                                            | Prettier and ESLint                                       |
| `yarn test:package-source`                             | Public source, alias and assembly fixture tests           |
| `node --test scripts/component-manifest.test.mjs`      | Presets, tree decoding and component projection           |
| `node --test experiments/prepare-local-build.test.mjs` | Public checkout, nested owners and missing-owner failures |
| `yarn test:unit`                                       | Vitest tests selected by vite.config.ts                   |
| `node scripts/check-package-source.mjs`                | Actual public-root dependency traversal                   |
| `yarn tsc`, `yarn check`                               | TypeScript and Svelte diagnostics                         |

For documentation changes, check modified Markdown formatting, relative links
and file/commit evidence. For code changes, run the relevant tests and record
actual results. Follow AGENTS.md when a fresh unified error report is needed:
Dmitrii runs that CLI. Report checkout or generation blockers explicitly rather
than presenting partial checks as complete validation.

`yarn ci:pipeline` includes a package build. `yarn build`, `yarn package` and
`yarn package:watch` write `dist`; agents do not run them without an explicit
current-turn request. Ordinary `weoracle.online` development uses workspace
source and its existing hot-reload server.

## Pull requests

Use a branch and pull request, preserve each owning repository's history, and
summarize the problem, resulting behavior and validation. Record unresolved
prerequisites with evidence. Update documentation when paths or API contracts
change; distinguish unreleased source changes from published releases.

Package publication is Dmitrii's release operation. See the
[release backlog](src/backlog.md) for package and site verification criteria.
