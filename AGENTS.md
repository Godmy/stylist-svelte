# AGENTS.md

## Workspace Hot-Reload Policy For `weoracle.online` (Mandatory)

- Do not run `yarn package`, `yarn build`, `svelte-package`, or any command that regenerates `stylist-svelte/dist` unless the user explicitly asks for it in the current turn.
- The user runs `weoracle.online` with a manually managed hot-reload server that consumes workspace source files from `stylist-svelte/src/**`.
- Regenerating `dist` can break or desynchronize hot reload and force the user to restart the server.
- For landing-page and component work used by `weoracle.online`, edit `src/lib/**` source files only and rely on the existing hot-reload server.

## Domain Aggregation Policy (Mandatory)

- In `stylist-svelte/src/lib/**`, follow this architecture regulation.
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

## Logical Joint Policy (Mandatory)

- Treat directories in the form `src/lib/<domain>/<cluster>/<joint>/...` as strict logical typing of entities.
- Inside clusters, use only the allowed joint subfolders:
  - `const`: `value`, `map`, `record`, `preset`, `array`, `object`
  - `type`: `alias`, `record`, `struct`, `preset`, `object`, `compute`
  - `interface`: `behavior`, `slot`, `recipe`, `contract`
  - `class`: `manager`
  - `function`: `script`, `state`, `hook`, `transform`, `test`, `async`, `async-get`, `async-post`, `merge`, `check`, `count`, `create`, `resolve`, `serialize`
  - `component`: `atom`, `molecule`, `organism`, `template`, `page`
  - `data`: `json`, `jsonl`, `shader`, `icon`, `flag`, `png`, `md`, `yaml`
- To validate actual joint usage, run `python -u "D:\2026\projects\vibe-management.pro\packages\stylist\di\reader\library\pipeline.py"` and inspect `stylist\di\output\step-16-joints.md`; the "Unknown Joints" section lists joints that are not allowed for their cluster.

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
  - optionally `index.story.svelte`
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

## Embedded Repository Exception For Submodule Domains (Mandatory)

- Domains registered as their own git submodule in `stylist-svelte/.gitmodules` (currently `server`, `theme`, `svg`, `wbd`, `geo`) act as embedded repository boundaries.
- At the root of each such domain, the files `.git`, `LICENSE`, and `README.md` are allowed in addition to the regular domain structure — they are metadata brought in by the submodule, not an architecture violation.
- This exception applies only to the root of the embedded-repository domain, and only to domains actually listed as a submodule in `.gitmodules`.
- All source code inside an embedded-repository domain must still follow the domain, cluster, joint, family, and assembly rules unless a separate rule explicitly states otherwise.

## Assembly Direction Policy (Mandatory)

- Preserve the composition direction:
  - `data` -> `const` -> `type` -> `interface` -> `class` -> `function` -> `component`
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
- Introduce a new cluster only through a new ADR (see ADR-005).
- Introduce a new joint only through consensus in the architectural session; domain-specific names belong at the `family` level, not the `joint` level.

## Export And Barrel Policy (Mandatory)

- Do not add manual re-export files or extra re-export indirection layers.
- Do not manually edit barrel `index.ts` files; regenerate them through the existing indexation workflow.
- If the user task conflicts with these architecture rules, explicitly report the conflict before proceeding.

## Index Generation Policy (Mandatory)

- Do not edit any `index.ts` manually in `stylist-svelte/src/lib/**`.
- After any change that can affect exports/imports in `stylist-svelte/src/lib/**`, run:
  - `python -u "D:\2026\projects\vibe-management.pro\packages\stylist\indexation\cli.py"`
- Treat generated `index.ts` files as source of truth.
- If TypeScript errors look related to stale barrel exports, regenerate indexes first, then continue fixes.

## Error Checking Policy (Mandatory)

- Use the unified errors CLI (instead of running two analyzers separately):
  - `python -u "D:\2026\projects\vibe-management.pro\packages\stylist\errors\cli.py"`
- Use a longer timeout for this command (recommended: 20 minutes or more).
- This CLI sequentially runs:
  - `stylist\errors\npx\analyzer.py`
  - `stylist\errors\yarn\analyzer.py`
- Generated analyzer outputs:
  - `stylist\errors\npx\tsc_stylist_playground.json`
  - `stylist\errors\npx\tsc_stylist_svelte.json`
  - `stylist\errors\yarn\yarn_check_stylist_svelte.json`
  - `stylist\errors\yarn\yarn_check_stylist_playground.json`
- Generated aggregated report:
  - `stylist\errors\output\<timestamp>\README.md`
- Report is a header of files with errors in directory:
- `stylist\errors\output\<timestamp>\**`
