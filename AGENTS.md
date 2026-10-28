# stylist-svelte Library Development Rules

## Library Workspace Organization (Mandatory)

### ADR-001 - Policy for Organizing the Workspace and Using the stylist-svelte Library (Mandatory)

- The stylist-svelte library is an umbrella repository with public and private spaces.
- The project's standard package manager is Yarn 4; `packageManager` in `package.json` specifies the version. `yarn.lock` is the primary lockfile.
- Use Yarn to install dependencies and run scripts. The specific commands are defined by the available `package.json`.
- Domains registered as Git submodules in the owning repository's `.gitmodules` are treated as embedded repository boundaries.
- All source code inside an embedded repository must follow the domain, cluster, joint, family, and assembly rules.
  [public library manifest json](modules\sandbox\domain\data\json\domain-page-manifest\index.json)
  [full library manifest json](modules\sandbox\domain\data\json\domain-page-manifest\index.full.json)
  [public components manifest for fast find components in json](modules\sandbox\domain\data\json\domain-component-manifest\index.json)
  [full components manifest for fast find components in json](modules\sandbox\domain\data\json\domain-component-manifest\index.full.json)
  [sandbox playground workspace](modules\sandbox\domain\data\md\readme.md)

### ADR-002 - Address Space Policy Within the stylist-svelte Library (Mandatory)

- `<domain>/<cluster>/<joint>/<family>` is the address of an entity within the library. Repository grouping does not add a level to this logical address.
- `$stylist/<domain>/<cluster>/<joint>/<family>` is the logical absolute specifier for importing files within the library.
- Infrastructure inside domain clusters uses only absolute import specifiers.
- Infrastructure outside domain clusters (Node scripts, package files, and configuration files) may use relative paths.
- Relative import paths are used only inside automatically generated `index.ts` barrel files.

## Library Architecture (Mandatory)

### ADR-003 - Policy for Organizing the Address Space in Directories Within a Morphological Box (Mandatory)

- Directories of the form `.../<domain>/...` are treated as subject-area domains.
- The contents of `<domain>` must match its subject area and be organized into `<cluster>` directories according to language constraints.
- Directories of the form `.../<cluster>/...` represent strict typing at the TypeScript and Svelte language level.
- The contents of `<cluster>` must match its name and reside inside the directory of an appropriate strictly typed joint: `/<joint>/`.
- Directories of the form `.../<joint>/...` represent strict logical typing of entities:
  -- `interface` contains the Domain-Specific Interface Assembly Pattern (DSIAP) and import directories.
  -- `function` contains pure function names according to the functional taxonomy.
  -- `class` contains design-pattern names that express the role of the class.
  -- `component` contains the names of structural elements of atomic design.
  -- `test` contains Vitest suites for unit testing and visualization.
- The contents of `<family>` form the entity's main family; entity directory names use `kebab-case`.
- Directories of the form `.../<family>/` are treated as the main entity family, for example `canvas` or `theme`.
- Directories of the form `.../<family-trait>/` are treated as a refinement of the main family, for example `canvas-axis` or `theme-mode`.
- Directories of the form `.../<family-trait-trait>/` are treated as a more detailed refinement, for example `canvas-axis-x` or `theme-mode-light`.

### ADR-004 - Policy for Classifying Domain Contents Into Clusters, Logical Joints, and Files (Mandatory)

| Cluster     | Allowed logical joints in the cluster directory                     | Allowed contents           | Allowed files in the address space      |
| ----------- | ------------------------------------------------------------------- | -------------------------- | --------------------------------------- |
| `data`      | `json`, `jsonl`, `md`, `yaml`, `icon`, `flag`, `png`,               | Specialized data           | `*.json`, `*.jsonl`, `*.svg`, `*.png`,  |
|             | `shader`                                                            |                            | `*.frag,`, `*.vert`, `*.md`, `*.yaml`   |
| ----------- | ------------------------------------------------------------------- | -------------------------- | --------------------------------------- |
| `const`     | `value`, `map`, `record`, `preset`, `array`, `object`               | `export const`             | `index.ts`                              |
| ----------- | ------------------------------------------------------------------- | -------------------------- | --------------------------------------- |
| `type`      | `alias`, `record`, `struct`, `preset`, `object`, `compute`          | `export type`              | `index.ts`                              |
| ----------- | ------------------------------------------------------------------- | -------------------------- | --------------------------------------- |
| `interface` | `behavior`, `slot`, `recipe`, `contract`, `rest`, `graphql`         | `export interface`         | `index.ts`                              |
| ----------- | ------------------------------------------------------------------- | -------------------------- | --------------------------------------- |
| `function`  | `script`, `create`, `merge`, `resolve`, `serialize`, `transform`,   | `export function`          | `index.ts`,                             |
|             | `hook`, `check`, `state`, `test`, `capture`, `count`,               |                            | `state.svelte.ts`                       |
|             | `async`, `async-get`, `async-post`, `...`                           |                            |                                         |
| ----------- | ------------------------------------------------------------------- | -------------------------- | --------------------------------------- |
| `class`     | `factory`, `facade`, `adapter`, `builder`, `repository`, `manager`, | `export class`             | `index.ts`                              |
|             | `strategy`, `registry`, `visitor`, `...`                            |                            |                                         |
| ----------- | ------------------------------------------------------------------- | -------------------------- | --------------------------------------- |
| `component` | `atom`, `molecule`, `organism`, `template`, `page`                  | `<script>, <...>, <style>` | `index.ts`, `index.svelte`,             |
|             |                                                                     | `export default`,          | `index.story.ts`, `index.story.svelte`, |
|             |                                                                     | `export default function`  | `state.svelte.ts`,                      |
| ----------- | ------------------------------------------------------------------- | -------------------------- | --------------------------------------- |
| `test`      | `unit`, `render`                                                    | Export nothing             | `index.test.ts`,                        |

### ADR-005 - Assembly Direction Policy (Mandatory)

- Preserve the main composition direction: `data` → `const` → `type` → `interface` → `function` → `class` → `component` → `test`.
- Reverse dependencies are allowed for declaring typed constants: `type` → `const` and `interface` → `const`.
- Reverse dependencies are allowed for creating compositions of functions that use design patterns: `class` → `function`.
- All other reverse dependencies are forbidden. Do not introduce dependencies that violate this direction without explicit user approval.
- Within `interface/`, DSIAP imposes an additional one-way direction: `behavior` / `slot` → `recipe`.

#### ADR-005-01 - DSIAP: Domain-Specific Interface Assembly Pattern (Mandatory for `interface/`)

- `behavior` is an atomic behavioral capability (for example, `BehaviorClickable` or `BehaviorFocusable`).
- `slot` is an atomic content or data surface (for example, `SlotLabel` or `SlotIcon`).
- `recipe` is a component interface composition assembled from behaviors, slots, and optional contracts with external systems.
- For composition, use `theme/type/compute/intersect-all` and define `recipe` through `ComputeIntersectAll<[...]>`.

#### ADR-005-02 - Policy for Using Interfaces of External Systems (Mandatory for `interface/`)

- `contract` is used when a separate agreement is needed at a system boundary or between systems.
- `rest` is used when a separate agreement is needed for the REST protocol.
- `graphql` is used when a separate agreement is needed for the GraphQL protocol.
- The `contract`, `rest`, and `graphql` directories are used when a separate agreement is needed at an interaction boundary.

### ADR-008 - Policy for Svelte 5 Syntax, Typing, and Component Reactivity (Mandatory)

- The library uses flat components assembled from `recipe`, `state`, and, when needed, other components.
- A component imports standalone entities instead of declaring them as hidden entities alongside the markup.

#### ADR-008-01 - Policy for Using Svelte 5 Inside Components (Mandatory)

- The primary reactivity mechanism is Svelte 5 runes: `$state`, `$derived`, `$effect`.
- Accept passed content through props of type `Snippet` and render it through `{@render ...}`.
- Define named content as separate Snippet props; specify fallback content explicitly.
- Use `onclick`, `onchange`, `oninput`, and other event attributes instead of `on:click`, `on:change`, and `on:input`.
- Type props at the `$props()` declaration using an imported recipe or the corresponding type.
- Use the global browser `MouseEvent`; do not import it from `svelte/elements`.

#### ADR-008-02 - Policy for Component Reactivity and State-File Exports (Mandatory)

- If a component requires reactive behavior, all logic for that behavior must be encapsulated in a file named `state.svelte.ts`.
- `const state = stateFn(() => props)` is the basic pattern for invoking a state function inside a component to reactively read the current props.
- `$state()` is used as a variable initializer. The state-file card includes an example of returning a reactive value through a getter.
- `state.svelte.ts` contains one `export function`, identified through `export default <function-name>` and counted as one exported entity.
- The input parameter is defined as `getProps: () => RecipeComponent`, where `RecipeComponent` is the interface of the corresponding component.
- File location with one consumer: `.../<family>/state.svelte.ts`.
- File location with multiple consumers: `<domain>/<function>/<state>/<family>/state.svelte.ts`.
- Current props inside the state function may be read through `const props = $derived(getProps())`.
- Values computed from them are defined through `$derived(...)` or `$derived.by(...)`.

#### ADR-008-03 - Policy for Demonstrating Component Functionality Through Story Files (Mandatory)

- Demonstrating component functionality requires a story contract file: `.../<family>/index.story.ts`.
- The story contract is `ContractStory` from `html/interface/contract/story`.
- Controls use `SlotStoryControl` from `html/interface/slot/story-control`.
- It describes the component, arguments, controls, presets, and `HtmlNode` content.
- Typed content is described through the component's `...\interface\recipe\<family>`.
- Use `.../<family>/index.story.svelte` for custom story rendering with arguments passed through props.
- The demonstration must contain a verifiable scenario rather than an empty file.

## Software Development and Source Code Changes (Mandatory)

### ADR-009 - Rules for Source Code Changes and Change Agreement (Mandatory)

- Keep file and directory names aligned with the model `<domain>/<cluster>/<joint>/<family>`.
- Implementation files reside directly in `<domain>/<cluster>/<joint>/<family>/`.
- Editing the implementation of individual `index.ts` entities at `<domain>/<cluster>/<joint>/<family>/index.ts` is allowed.
- Preserve strict typing of entities at the language level and within the model's logical structure.
- If a task requires a structure outside `<domain>/<cluster>/<joint>/<family>`, report the architectural conflict.
- If the user's task conflicts with the architecture rules, explicitly report the conflict before starting work.
- If an entity's type does not match its cluster, move the entity to the appropriate cluster or correct the declaration form if the cluster was chosen correctly.
- Introduce a new domain only when the entity clearly does not belong to any existing domain.
- Automatically generated `index.ts` barrels may export multiple entities.
- Except for data and tests, each source code file must export exactly one entity.
- By default, place a new entity in an existing domain when it naturally fits there.
- Changing an implementation and updating generated exports are separate actions.
- If the generation mechanism is absent from the received library, pass this requirement to the maintainer.
- When adding, renaming, or moving an entity, specify which exports need to be updated.
- Source changes, generated-file updates, verification, publication, and acceptance have separate outcomes; do not claim an unperformed stage is complete.
- A new `<joint>` is introduced after agreement at an architectural session.
- During migration, extract standalone entities into families, update imports and consumers, then hand off aggregator updates to the designated mechanism.
- The export must match the cluster. Domain-specific terminology does not replace the cluster name.
- Before replacing a relative path, verify that the logical specifier resolves to the same physical file in every supported environment.
- Consumers import entities through each entity's own address.
- Register package aliases and TypeScript source paths when necessary. Preserve query/hash suffixes.
- Local variables inside functions, fields, and private implementation details of classes are allowed.
- A one-off intermediate expression with no standalone meaning may be inlined at its point of use.
- Split multiple standalone entities into separate families without increasing the address depth.

### ADR-010 - Prohibited Actions (Mandatory)

- Do not create files with multiple exported entities.
- Do not leave top-level `const`, `type`, `interface`, `function`, or `class` declarations without exports.
- Do not add directory levels beneath a family; refine the family name through `family-trait` or `family-trait-trait`.
- Do not manually add re-export files or additional re-export indirection layers.
- Do not manually edit generated aggregator files `index.ts` and `index.full.ts`.
- Do not disguise old names and aliases through manual re-exports under a new name.
- Do not leave hidden entities. Move them into their own families and import them.
- Do not create a forwarding file in another domain for import convenience.
- Do not create manual `export { ... }`, `export * from ...`, or aliases of old names instead of defining an entity of its own.
- Do not import `test` from another cluster into a cluster.

### ADR-011 - Reference Information on Entities and Data Structure (Mandatory)

- Only one `index.ts` file is allowed in each directory.
- A `README.md` file is allowed in any directory to document its purpose, entities by joint, and data flows.
- Diagrams must be placed directly in these README files as `mermaid` blocks, not in separate `.mmd` files.
- In addition to the regular structure, `.git` and `LICENSE` files are allowed at the root of each domain.
- `const/value` contains a single primitive or `Symbol`.
- `const/map` contains a flat `key: value` object, not nested structures or a single literal.
- `const/record` contains entities using `Record<...>`.
- `const/preset` contains a complete set of values for configuring appearance and defining behavior.
- `const/array` contains a direct array of tokens named `TOKEN*`.
- `const/object` contains `json`-portable entities.
- `type/object` contains a reusable object-shaped payload with stable fields and no behavior.
- `type/struct` is used for broader structural compositions and aggregates.
- `test/unit` tests `data`, `const`, `type`, `interface`, `class`, and `function` without component rendering.
- `test/render` mounts components or reads their stories. Any test that imports `component` belongs here.
- `function/test` is allowed only for tests that do not import components. When working on a domain, such tests may be moved to `test/unit`.

### ADR-012 - Supplement: Domain Tests

- The `test` cluster may import any cluster of its own domain.
- Tests that import `component` must reside in `<domain>/test/render/<family>/`.
- Tests reside at `<domain>/test/<joint>/<family>/index.test.ts` and export nothing.
- Tests are not included in aggregator exports and are not imported by production code.

### ADR-013 - Supplement: Process for Adding and Changing Functionality

1. Identify the subject area and an existing domain.
2. Choose the cluster by language-level type, the joint by logical role, and the family by subject-area meaning.
3. Check the address depth, dependency direction, and whether the required behavior, slot, recipe, type, function, or class already exists among the entities.
4. Implement one entity per file. For a component, define its recipe, necessary state, and demonstration.
5. Add or update tests and documentation relevant to the change. Choose `unit` or `render` according to the test's actual dependencies.
6. Update consumers when addresses or names change. Specify which generated exports need to be updated.
7. Run the available project checks and report their actual results. If generation is unavailable in the received library, pass the requirement to the maintainer.

This sequence brings together the application of the policies above; it does not require access to private workspace tools.
