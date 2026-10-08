# P0: sandbox build and public package

This supplements the audit in `src/readme.md`, which describes commit
`81bd28b90` before these source fixes.

- Prettier uses only the installed Svelte plugin.
- ESLint uses the declared TypeScript/Svelte plugins instead of an undeclared
  KitQL configuration. Generated source mirrors are ignored by both tools.
- The Zwicky story fetches the tracked dataset at
  `static/data/step-2-dependencies.json` with the SvelteKit base path. The
  dataset was recovered from `a94243f8e` and is outside the module graph.
- `TOKEN_GEO_SETTING` owns its public preset values; importing token settings
  no longer loads the private geo repository. The available values are preserved.
- The external Python indexator now generates `src/lib/index.ts` for public
  package exports and `src/lib/index.full.ts` for complete workspace exports.
  Missing domains are omitted. Internal barrels retain all dependency exports.
- npm retains public internal implementations and JSON assets, including domains
  omitted from the public root, so transitive imports keep resolving. It excludes
  private geo/wbd, sandbox server, the full entrypoint, stories and tests. CSS is
  declared as side-effectful.
- Package preparation checks statically declared source dependencies before writing `dist`.
  It rejects private/server imports and missing modules or assets. Packaging is
  then checked by `publint --pack npm`.
- The clean-clone helper only initializes public server/theme/svg submodules.
  It creates no geo stubs or restored source files; `--revert` deletes nothing.

## Required human step

Agents do not execute global indexation, manifest or error CLIs. After reviewing
the generator source changes, Dmitrii runs from the **site root**:

```sh
yarn stylist:index
```

Both roots are generated in one pass. On 2026-10-08 another authorized session
ran regeneration; both working roots now exist, and the source preflight passes
for 3,383 dependencies. Before regeneration the existing root contained private
exports and package validation deliberately failed. No new
component families were added by P0, so P0 itself does not require a manifest
regeneration (other sessions may have pending manifest changes).

After regeneration, validate from the site root:

```sh
node packages/stylist-svelte/scripts/check-package-source.mjs
yarn stylist:package
```

For this workspace, use `yarn install` only at the site root. Never install from
the nested library directory. A standalone public clone can use its own tracked
lockfile; its CI initializes public submodules before installing dependencies.
Only Dmitrii publishes npm releases, using the monthly release procedure.
