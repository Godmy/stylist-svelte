Follow the workspace [agent workflow](../AGENTS.md); keep the project rules below.

# AGENTS.md

## Modular Source Ownership (Mandatory)

- Source owners are declared in `modules.json`. General modules are Git submodules under `modules/`; booking, admin and travel are separate private single-domain packages with clusters at their repository roots.
- Mapped domains live only in `modules/<module>/<domain>`. Do not recreate links or copied sources under the umbrella `src/lib`. `scripts/prepare-module-sources.mjs` validates checkouts and provides physical aliases without filesystem writes.
- Edit and run Git operations in the owning physical repository. Design-system contains nested theme/svg/typography/layout repositories; sandbox contains the server repository. Preserve their histories.
- The domain/cluster/joint/family architecture applies within each module root. Module grouping is repository ownership, not another domain hierarchy level. Geo and wbd are independent nested repositories at `modules/global/geo` and `modules/business/wbd`; business also embeds booking, admin, travel, spanish, sakartvelo, and farm. Prototype is a private container that embeds `presentation` (repository stylist-svelte-prezi) and `scratch`; everything inside it is private.
- SvelteKit/Vite resolve logical domain imports through `moduleAliases`; deduplicate Svelte. Source mirrors read actual domain owners and omit `.git` metadata. Packaging assembles ignored `.package-input` and translates only its copied generated entrypoint; never hand-edit source barrels.
- Public npm output must exclude booking/admin/travel; source dependencies on their private packages are forbidden in the public library. These packages import common entities by `stylist-svelte` package subpath, use relative imports within each domain and explicit `stylist-svelte-{booking,admin,travel}` subpaths across private domains.
- Embedded-domain metadata exceptions also cover typography/layout, registered in the owning design-system `.gitmodules`. Inspect module-specific `.gitmodules`, not only the umbrella file.
- Generated root exports, including the booking/admin/travel root entrypoints, are still human-only. After changes tell Dmitrii to run `yarn stylist:manifest` from the site root; never run global generation yourself.

## Workspace Hot-Reload Policy For `weoracle.online` (Mandatory)

- Do not run `yarn package`, `yarn build`, `svelte-package`, or any command that regenerates `stylist-svelte/dist` unless the user explicitly asks for it in the current turn.
- The user runs `weoracle.online` with a manually managed hot-reload server that consumes workspace source files from `stylist-svelte/src/**`.
- Regenerating `dist` can break or desynchronize hot reload and force the user to restart the server.
- For landing-page and component work used by `weoracle.online`, edit `src/lib/**` source files only and rely on the existing hot-reload server.

## Domain Aggregation Policy (Mandatory)

- This regulation applies to `stylist-svelte/modules/<module>/<domain>/**` and to standalone `modules/global/geo/**`, `modules/business/wbd/**`. Umbrella `src/lib` holds generated entrypoints.
- Treat directories in the form `src/lib/<domain>/...` as subject-area domains.

## Domain Clustering Policy (Mandatory)

- Treat directories in the form `src/lib/<domain>/<cluster>/...` as strict language-level typing for TypeScript and Svelte.
- Cluster contents must match the cluster name:
  - `const`: only `export const`
  - `type`: only `export type`
  - `interface`: only `export interface`
  - `class`: only `export class`
  - `function`: only `export function`
  - `component`: Svelte components and story files used to demonstrate component behavior
  - `data`: supporting data in `icon`, `flag`, `png`, `json`, `jsonl`, `md`, and shader formats
  - `test`: vitest suites of the domain; they export nothing and are never re-exported
    (ADR `folder\cluster\002`)

## Logical Joint Policy (Mandatory)

- Treat directories in the form `src/lib/<domain>/<cluster>/<joint>/...` as strict logical typing of entities.
- Inside clusters, use only the allowed joint subfolders:
  - `const`: `value`, `map`, `record`, `preset`, `array`, `object`
  - `type`: `alias`, `record`, `struct`, `preset`, `object`, `compute`
  - `interface`: `behavior`, `slot`, `recipe`, `contract`
  - `class`: `manager` or another design-pattern name that states the class role
    (`adapter`, `builder`, `facade`, `factory`, `registry`, `repository`,
    `strategy`, `visitor`, ...)
  - `function`: `script`, `state`, `hook`, `transform`, `test`, `async`, `async-get`, `async-post`, `merge`, `check`, `count`, `create`, `resolve`, `serialize`
  - `component`: `atom`, `molecule`, `organism`, `template`, `page`
  - `data`: `json`, `jsonl`, `shader`, `icon`, `flag`, `png`, `md`, `yaml`
  - `test`: `unit` (data/const/type/interface/class/function, no component rendering),
    `render` (mounts components or reads their stories)
- Tests that import `component` must live in `<domain>/test/render/<family>/`; `function/test`
  stays allowed only for tests that import no component.
- To validate actual joint usage, run `node "D:\2026\cloudflare\stylist-svelte-tools\scripts\reader.mjs" pipeline` and inspect `D:\2026\cloudflare\stylist\di\output\step-16-joints.md`; the "Unknown Joints" section lists joints that are not allowed for their cluster. The reader requires Node.js >=24.11 and reads the existing indexation snapshot, including physical modular sources.

### DSIAP: Domain-Specific Interface Assembly Pattern (Mandatory for `interface/`)

- The `interface/` cluster follows the target joint model:
  - **`behavior`**: atomic behavioral capability (e.g., `BehaviorClickable`, `BehaviorFocusable`)
  - **`slot`**: atomic content/data surface (e.g., `SlotLabel`, `SlotIcon`)
  - **`recipe`**: component interface composition assembled from behaviors, slots, and optional contracts
  - **`contract`**: boundary or cross-system interface agreement
- `contract` is not a mandatory third stage after `recipe`; it is used only when a separate boundary agreement is needed.

## Family Naming Policy (Mandatory)

- Treat directories in the form `src/lib/<domain>/<cluster>/<joint>/<family>/...` as the main entity family, for example `canvas` or `theme`.
- Treat directories in the form `src/lib/<domain>/<cluster>/<joint>/<family-trait>/...` as a refinement of the main family, for example `canvas-axis` or `theme-mode`.
- Treat directories in the form `src/lib/<domain>/<cluster>/<joint>/<family-trait-trait>/...` as a more detailed refinement, for example `canvas-axis-x` or `theme-mode-light`.

## File Structure And Naming Policy (Mandatory)

- In `atom`, `molecule`, `organism`, `template`, and `page` folders, allow only:
  - `index.ts`
  - `index.svelte`
  - optionally `index.story.ts` — the story contract (`ContractStory` from
    `html/interface/contract/story`; controls are `SlotStoryControl` from
    `html/interface/slot/story-control`): component, args, controls, presets
    and `HtmlNode` content, typed by the component recipe
  - optionally `index.story.svelte` — next to `index.story.ts` it is only that
    story's custom render and receives args as props; alone it is a legacy story
  - optionally `readme.md`
- In `state` folders, allow only:
  - `index.svelte.ts`
  - `index.ts`
- In `test` folders, allow only:
  - `index.test.ts`
  - `index.ts`
- In `data` folders, allow only:
  - `*.frag`
  - `*.vert`
  - `*.json`
  - `*.jsonl`
  - `*.svg`
  - `*.png`
  - `*.md`
- In all other folders, allow only a single `index.ts`.
- A domain root (`<domain>/README.md`) and each cluster root
  (`<domain>/<cluster>/README.md`) may hold a `README.md` that documents it:
  purpose, entities by joint and data flow. Diagrams go into these READMEs as
  ` ```mermaid ` blocks, not separate `.mmd` files. Joint and family folders
  keep their file rules above; entities document themselves with JSDoc.

## Embedded Repository Exception For Submodule Domains (Mandatory)

- Domains registered as Git submodules in the owning repository's `.gitmodules` act as embedded repository boundaries. `theme`, `svg`, `typography`, `layout` belong to design-system; `server` belongs to sandbox; `wbd` is registered by business, and `geo` by global; business also registers booking, admin, travel, spanish, sakartvelo, and farm; prototype registers presentation and scratch.
- At the root of each such domain, the files `.git`, `LICENSE`, and `README.md` are allowed in addition to the regular domain structure — they are metadata brought in by the submodule, not an architecture violation.
- This exception applies only to the root of the embedded-repository domain, and only to domains actually listed in the relevant owner's `.gitmodules`.
- All source code inside an embedded-repository domain must still follow the domain, cluster, joint, family, and assembly rules unless a separate rule explicitly states otherwise.

## Assembly Direction Policy (Mandatory)

- Preserve the composition direction:
  - `data` -> `const` -> `type` -> `interface` -> `class` -> `function` -> `component` -> `test`
- `test` may import any cluster of its domain; no other cluster imports `test`.
- `class` may import `function`: a class can call functions of its domain.
  Keep existing classes as classes; do not rewrite them into functions only
  to satisfy the direction.
- Do not introduce dependencies that violate this direction without explicit user approval.
- DSIAP sub-direction within `interface/`:
  - `behavior` / `slot` / optional `contract` -> `recipe` (one-way, no reverse dependencies)

## Source Change Rules (Mandatory)

- Each code file must export exactly one entity.
- Preserve strict language-level and logical typing of entities.
- Do not create files with multiple exported entities.
- Do not leave non-exported top-level declarations.
- By default, place a new entity into an existing domain when it naturally fits there.
- Keep file and directory naming aligned with the model `<domain>/<cluster>/<joint>/<family>`.

## Change Agreement Rules (Mandatory)

- If a task requires a structure outside `<domain>/<cluster>/<joint>/<family>`, report the conflict first and only then propose a solution.
- Introduce a new domain only when the entity clearly does not belong to any existing domain.
- Introduce a new cluster only through a new ADR (see ADR-005; `test` was added by `adr/folder/cluster/002`).
- Introduce a new joint only through consensus in the architectural session; domain-specific names belong at the `family` level, not the `joint` level.

## Export And Barrel Policy (Mandatory)

- Multi-domain library roots have two generated entrypoints: `src/lib/index.ts`
  uses the indexator's package domain filter, and `src/lib/index.full.ts` uses
  its full filter for workspace use. Both come from the same analyzed tree;
  absent or empty domains are omitted. `index.full.ts` is the explicit root
  filename exception to the single `index.ts` structure and is excluded from npm.
- Keep complete internal public-domain implementations and runtime assets in
  the package even when their domain is not exported by the public root:
  included components may depend on them. Private `geo`/`wbd`, sandbox `server`,
  stories, tests and the full entrypoint are excluded from npm.

- Do not add manual re-export files or extra re-export indirection layers.
- Do not manually edit barrel `index.ts` files; regenerate them through the existing indexation workflow.
- If the user task conflicts with these architecture rules, explicitly report the conflict before proceeding.

## Multi-Agent Coordination (Mandatory)

- See `../lankatour.ru/AGENTS.md` for the full multi-agent
  coordination protocol (coordination log, soft domain locking, roles).
- Write library, tooling, npm release and sandbox claims/reports to
  `../.docs/stylist-svelte/chat/<YYYYMMDD>/`, creating the date folder when
  needed. Choose the chat by the task's project, not the working directory.
  Site-specific product, booking, payment and integration work (including
  private travel components used by LankaTour) belongs in
  `../.docs/lankatour.ru/chat/<YYYYMMDD>/`; other projects use
  `../.docs/<project>/chat/<YYYYMMDD>/`. Cross-project work keeps its full
  record in the primary project's chat and a short linked note in the other.
- Before editing anything under `stylist-svelte/src/lib/<domain>/**`,
  announce the domain in the relevant project's chat and/or to
  peer sessions — this subtree is the highest-collision area in the repo
  because barrels and the sandbox manifest are regenerated from the
  whole tree at once.
- **Agents never run the CLIs in Index Generation Policy or Error
  Checking Policy below.** Only Dmitrii runs them, precisely because they
  scan and rewrite the entire tree and would race other agents' in-flight
  edits. Finish your code change, then ask Dmitrii to run the relevant
  CLI — don't run it yourself and don't report the task fully done until
  it's run.

## Index Generation Policy (Mandatory)

- The native indexation, DI reader, auditor and errors belong to the sibling private repository `D:\2026\cloudflare\stylist-svelte-tools` (TypeScript, Node.js >=24.11). Site scripts launch the auditor via `scripts/auditor.mjs`; it launches native indexation and `scripts/reader.mjs pipeline`. Report output remains under `D:\2026\cloudflare\stylist`, including `di\output`, `auditor\output` and `errors\output`. `yarn stylist:index` runs the TypeScript indexation `scripts/indexation.mjs` (output byte-identical to the retired Python `stylist\indexation\cli.py`, which is no longer launched). The copy in `D:\2026\projects\vibe-management.pro\packages\stylist` is outdated: do not read or edit it. Commit TypeScript tool changes in `stylist-svelte-tools`.

- Do not edit generated barrel `index.ts` or `index.full.ts` files manually.
  Single-entity implementation files named `index.ts` are source code and may
  be edited under the Source Change Rules; the generator preserves them.
- After any change that can affect exports/imports in `stylist-svelte/src/lib/**`, the barrels must be regenerated with:
  - `yarn stylist:index` from `D:\2026\cloudflare\lankatour.ru` (runs `node "D:\2026\cloudflare\stylist-svelte-tools\scripts\indexation.mjs"`)
- New/renamed/moved components also require the sandbox manifest to be regenerated separately, or they stay invisible in the sandbox even though they type-check fine:
  - `yarn stylist:manifest` from `D:\2026\cloudflare\lankatour.ru` (runs `node "D:\2026\cloudflare\stylist-svelte-tools\scripts\auditor.mjs" --manifest-only`)
- **Do not run either command yourself** — see Multi-Agent Coordination above. Tell Dmitrii which one(s) are needed and why.
- Treat generated `index.ts` files as source of truth.
- If TypeScript errors look related to stale barrel exports, ask Dmitrii to regenerate indexes first, then continue fixes.

## Error Checking Policy (Mandatory)

- The unified errors CLI (instead of running two analyzers separately):
  - `yarn stylist:errors` from `D:\2026\cloudflare\lankatour.ru` (runs `node "D:\2026\cloudflare\stylist-svelte-tools\scripts\errors.mjs"`; requires Node.js >=24.11)
- **Do not run it yourself** — see Multi-Agent Coordination above. Ask Dmitrii to run it when you need a fresh error report; use a longer timeout expectation when he does (recommended: 20 minutes or more).
- This CLI sequentially runs:
  - `npx tsc --noEmit` in `stylist-svelte`
  - `yarn check` in `stylist-svelte`
- Generated analyzer outputs:
  - `stylist\errors\npx\tsc_stylist_svelte.json`
  - `stylist\errors\yarn\yarn_check_stylist_svelte.json`
- Generated aggregated report:
  - `stylist\errors\output\<timestamp>\README.md`
- Report is a header of files with errors in directory:
- `stylist\errors\output\<timestamp>\**`
