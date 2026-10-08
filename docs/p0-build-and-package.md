# P0 source fixes and package validation

This records changes introduced by
[afb625862](https://github.com/Godmy/stylist-svelte/commit/afb6258628fba28b6a9bfec6b959f1ea9dd3e4ea),
before the module migration:

- Prettier's configuration uses the declared Svelte plugin; ESLint uses the
  declared TypeScript/Svelte plugins. Generated source mirrors are ignored.
- The Zwicky story fetches the tracked dataset in
  [static/data/step-2-dependencies.json](../static/data/step-2-dependencies.json).
- The public token geo preset owns its values without importing private geo.
- Public and full workspace root entrypoints have separate package filters.
- The package retains public internal implementations and runtime assets,
  excludes private/sandbox sources, stories and tests, and marks CSS as
  side-effectful.
- [check-package-source.mjs](../scripts/check-package-source.mjs) validates source
  dependencies; package builds additionally run `publint --pack npm`.

The subsequent migration moved domain implementations to physical repositories.
Current ownership is documented in [modules/readme.md](../modules/readme.md).

The helper [prepare-local-build.sh](../experiments/prepare-local-build.sh) still
uses removed `src/lib/server`, `src/lib/theme` and `src/lib/svg` submodule paths.
CI fails there before installation. Generated umbrella roots also retain
pre-migration paths, so source preflight currently rejects them. The previous
session's passing checks do not establish that the migrated revision builds.

Current blockers and release verification are in
[src/backlog.md](../src/backlog.md). Global regeneration is performed by Dmitrii
from the parent site root; agents do not run generation or release commands.
