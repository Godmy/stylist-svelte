# Module ownership and local development

The umbrella still publishes one `stylist-svelte` package. General modules are Git repositories under `modules/`, with the domain map in `modules.json`. Travel is a separate private `stylist-svelte-travel` workspace with booking, storefront and administration domains. No npm publication is performed by the migration.

## Checkout

Initialize the public source modules without requiring private repositories:

```sh
git submodule update --init --recursive modules/design-system modules/interaction modules/information modules/business modules/architecture modules/observer
node scripts/prepare-module-sources.mjs --public
```

With private repository access, additionally initialize `modules/travel` and the existing `modules/geo`, `modules/wbd` when needed, then run source preparation without `--public`. ADR access is separate.

Source domains live only at `modules/<module>/<domain>`. All 49 former source junctions were removed. The preparation script now validates checkouts without creating folders. `src/lib` contains only the umbrella entrypoints and historical audit documentation. Run Git commands in physical repositories. Embedded design-system and observer repositories retain their histories. Geo moved to modules/geo without changing its source or dependencies.

SvelteKit and Vite resolve `$stylist/<domain>` and `stylist-svelte/<domain>` directly through the physical aliases derived from `modules.json`. Story globs include `modules/*`, while logical entity IDs and source-viewer addresses remain stable. The source mirror reads domain owners directly and omits Git metadata. No source projection is needed.

The common npm package is assembled into ignored `.package-input` from public module sources. Only the copied root entrypoint is translated from physical module paths into package domain paths; generated source barrels remain untouched. `package-modules.mjs` runs svelte-package against this input. Travel continues to use its own package. Site hot reload does not use packaging output.

## Regeneration and checks

All group domains are at their repository root, for example `modules/design-system/layout`, `modules/interaction/button`, and `modules/travel/booking`. Standalone geo/wbd are at `modules/geo` and `modules/wbd`. `sourceRoot: "."` and `domainRoot: true` in the registry describe these two layouts. Travel's `module.json` declares the three domains scanned for its own entrypoint; package metadata and scripts are excluded from source scanning. Both npm packages collect an ignored build input explicitly, so source directories do not need Svelte's default `src/lib` layout.

From the site root Dmitrii runs `yarn stylist:manifest` when changes are ready. This refreshes the umbrella public/full roots and travel's own roots, then the sandbox manifest. Agents must not run it. The umbrella public filter excludes all three travel domains; travel's own root exposes them. Existing domain barrels remain source-owned by the relevant repositories.

Before generation the umbrella roots still reference removed `./<domain>` paths, the public root still exposes travel, and travel lacks its generated root. This causes library root checks to fail until Dmitrii regenerates them. The adapted generator uses physical `../../modules/<module>/<domain>` paths in umbrella exports and writes each domain barrel in its owning repository. Public source validation intentionally blocks packaging until generation. Do not publish or claim independent packaging verified before generation and package checks.

After generation, run the public source validator and travel's source validator. For source integration checking in this workspace:

```sh
node packages/stylist-svelte/scripts/check-package-source.mjs
node packages/stylist-svelte/modules/travel/scripts/check-source.mjs --peer-source ../../src/lib
```

Without `--peer-source`, travel checks peer imports against the installed package. Its source imports common entities using package subpaths, with emitted `.js` names for TS modules and explicit `.svelte` paths. The peer package must ship all required public-domain implementations and runtime assets.

Independent package installation and tarball verification remain required after generation. `private: true` prevents accidental npm publication of travel; no public publishing route is introduced.

## Current migration validation

All 6,125 original library files were compared by SHA-256 immediately after moving: no missing or changed files. Subsequent changes to existing library files are the recorded travel import rewrites. The two pre-existing uncommitted travel component edits remain uncommitted in the travel repository.

After flattening all module roots: site svelte-check reports zero errors and five existing warnings. Full library checking reports 260 errors: 240 references in stale generated roots, four dependent test-harness typing errors, and the 16 existing source errors; 446 warnings. Root errors remain pending human regeneration, not a completed validation. Travel source checking passes for 275 files and 647 imports. Ten Node tests and seven Python fixture tests cover aliases, assembly, public/private boundaries, physical exports and auditor resolution. Eight HTTP checks passed after restarting both dev servers, including flat Svelte source URLs and source-preview API. Geo/wbd moved with unchanged source and repository heads. Global regeneration and independent packaging remain pending human execution.
