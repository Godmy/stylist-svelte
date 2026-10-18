# Story migration guide (issue #5)

Goal: every component family with a legacy `index.story.svelte` (theme `Story` wrapper with
`SlotStory[]` controls and a `children(values)` snippet) gets an `index.story.ts` contract, the
same approach `modules/design-system/html` already uses for all 139 of its components.
`index.story.svelte` becomes optional: delete it when the `.ts` is enough, otherwise rewrite it as
the story's custom render that receives the args as props.

Read first:

- `AGENTS.md` (site root) — file structure, one entity per file, assembly direction.
- `modules/design-system/html/interface/contract/story/index.ts` — `ContractStory<TArgs>`.
- `modules/design-system/html/interface/slot/story-control/index.ts` — `SlotStoryControl`.
- Examples: `modules/design-system/html/component/atom/button/index.story.ts` (contract only),
  `modules/design-system/html/component/atom/math/index.story.{ts,svelte}` and
  `modules/design-system/html/component/template/node/index.story.{ts,svelte}` (contract + render).
- `modules/sandbox/domain/component/molecule/story-canvas/index.svelte` — how the preview renders a
  contract: `<Render {...args} />` when a render exists, else `<story.component {...args} />`.
- `src/routes/preview/+page.svelte` — a `.story.svelte` next to a `.story.ts` is only its render.

## Per family

1. Read `index.svelte`, `state.svelte.ts` (if any), the recipe interface, and the legacy
   `index.story.svelte`.
2. **Recipe used uniformly** in `index.svelte`, `state.svelte.ts` and `index.story.ts`:
   - `index.svelte` types its props with the recipe: `let props: RecipeX = $props();` (or a
     destructuring typed `RecipeX`).
   - If the family has no recipe, create `<domain>/interface/recipe/<family>/index.ts` exporting
     only `interface RecipeX` (name: `Recipe` + PascalCase family, like the neighbours). Move the
     props type that `index.svelte` declares inline into it, unchanged in meaning (an inline
     `Omit<ComponentProps<typeof Other>, 'x'>` becomes `extends Omit<RecipeOther, 'x'>` when
     `RecipeOther` exists). Import it by direct path: generated barrels (`index.ts` /
     `index.full.ts`) are never edited by hand.
   - `state.svelte.ts` takes `getProps: () => RecipeX` instead of a local duplicate props type.
     Remove the duplicate type only when the recipe covers it; never change runtime behaviour.
3. **Write `index.story.ts`** next to `index.svelte`:

   ```ts
   import ToolButton from './index.svelte';
   import type { RecipeToolButton } from '$stylist/button/interface/recipe/tool-button';
   import type { ContractStory } from '$stylist/html/interface/contract/story';

   /** Toolbar button for a design-canvas-style toolbar. */
   export default {
   	component: ToolButton,
   	title: 'ToolButton',
   	description: 'Toolbar button for a design-canvas-style toolbar. …',
   	args: { label: 'Tool' },
   	controls: { label: { type: 'text' } }
   } satisfies ContractStory<RecipeToolButton>;
   ```

   - Import the recipe the same way `index.svelte` does (alias or relative path).
   - `title` and `description` come from the legacy `<Story title=… description=…>` (drop
     category prefixes such as `Organisms / Canvas / …`; keep the component name).
   - Every legacy `SlotStory` control `{ name, type, defaultValue, options, min, max, step,
label, description }` becomes `controls[name] = { type, options?, min?, max?, step?,
label?, description? }` and `args[name] = defaultValue`.
   - Control types are only `text | number | boolean | select | range | color`. `object`,
     `array`, `json`, … become plain `args` (no control). Select options are strings/numbers:
     `{ label, value }` objects become their values.
   - Args and presets must be structured-cloneable (they are sent to the iframe with
     `postMessage`): no functions, snippets, components, DOM nodes, class instances with
     methods. Those stay in the render.
   - Control/arg names must be recipe props (`satisfies ContractStory<RecipeX>` enforces it).
     A legacy knob that only drives the story markup (not a component prop) may be kept as
     `ContractStory<RecipeX & { knob?: T }>` with a short comment, or dropped if pointless.
   - Static extra props of the main instance that are cloneable go into `args` (no control).
   - Legacy variants worth switching to become `presets: { Name: { … } }`.
   - **Tokens for select options.** When a prop is typed by a token (`TokenSize`,
     `TokenColorTone`, `TokenDirection`, `TokenShape`, …) or the legacy options are a token
     list, take the options from the token array instead of a literal:
     `$stylist/design-token/const/array/{size,color-tone,direction,shape,size-px,size-rem}`
     (`TOKEN_SIZE`, `TOKEN_COLOR_TONE`, …) or the domain's own `<domain>/const/array/*`
     (`TOKEN_ALIGNMENT`, `TOKEN_SORT_DIRECTION`, `TOKEN_CHART`, … — `grep -rn "export const
TOKEN_" modules/<module>`). Use the subset the component styles when it supports only part
     of a token: `TOKEN_SIZE.slice(0, 6)` with a short comment. Keep literals only when no token
     matches.
   - Children text goes into `content: [{ kind: 'text', value: '…' }]` (html nodes are also
     possible: `{ kind: 'element', tag: 'strong', children: [...] }` — see
     `modules/design-system/html/type/struct/html-element-node`).
   - `layout: 'centered' | 'fullscreen'` replaces a wrapper that only centers / fills the canvas.

4. **Decide on the render** (prefer the contract alone):
   - Demo-only extras do not justify a render: decorative headings/paragraphs around the
     component, "clicked N times" counters, `console.log` handlers, centering wrappers. Drop them.
   - Keep a render only when the story is meaningless without it: several coordinated
     instances, local state bound to the component (`bind:value`, open/close toggles that the
     component cannot drive itself), snippet/callback props needed to display anything, a
     required parent/context, or non-cloneable data (Dates, Maps, functions, class instances).
   - Delete `index.story.svelte` when the story only shows the component once with the control
     values (casts like `Number(values.x)` do not count — controls are typed now) plus
     cloneable static props, and the wrapper only adds padding/centering.
   - Otherwise rewrite it as the render: no `Story`/`SlotStory` imports, no `controls`; receive
     args as props typed by the recipe and keep the demo markup, local state, handlers,
     extra instances, variants and styles:

     ```svelte
     <script lang="ts">
     	import ToolButton from './index.svelte';
     	import type { RecipeToolButton } from '$stylist/button/interface/recipe/tool-button';

     	// Render of index.story.ts: args arrive as props.
     	let args: RecipeToolButton = $props();
     	const tools = ['select', 'pan', 'frame', 'connect', 'text'];
     	let activeTool = $state('select');
     </script>

     <div class="_c1">
     	{#each tools as tool (tool)}
     		<ToolButton
     			{...args}
     			{tool}
     			active={activeTool === tool}
     			onClick={(clicked) => (activeTool = clicked)}
     		/>
     	{/each}
     </div>
     ```

     The first line comment states the reason: `// Render of index.story.ts: <why the
contract alone is not enough>` (the summary report quotes it).
     `values.x` becomes `args.x`; spread `{...args}` into the main instance when it takes all
     controls. Remove `values: any` and other `any`.

   - Other files importing the legacy story (rare; `grep -rn "<family>/index.story" modules src`)
     must keep working.
5. Keep everything else intact: no behaviour changes in components, no deleted features.
6. **Families without any story** (`none` in `analyze-stories.mjs --list`) get an
   `index.story.ts` too (and a render only when required, as above), with realistic args.
7. **No Svelte warnings.** CI builds throw on any compiler warning outside `.story.svelte`
   `css_unused_selector`: avoid `state_referenced_locally` (read props through `$derived` or
   functions), a11y warnings, unused CSS in components.

## Rules

- Edit only your assigned modules/domains. Do not commit, push, or switch branches: the
  coordinator commits per repository.
- Never run `yarn stylist:index`, `yarn stylist:manifest`, `yarn stylist:errors`, `yarn build`,
  `yarn package` or `svelte-package`. Do not edit generated barrels (`index.ts` that only
  re-export, `index.full.ts`) or `modules/sandbox/domain/data/json/domain-page-manifest/index.json`
  (the coordinator updates the manifest presets after the migration).
- Family folders may contain only `index.ts`, `index.svelte`, `index.story.ts`,
  `index.story.svelte`, `readme.md` and the existing `state.svelte.ts`. Each code file exports one
  entity.
- Run commands from the site root `/tmp/gh-issue-solver-1792304201826`; yarn is `corepack yarn`.

## Verify (per domain, before reporting)

`experiments/story-check.sh <module>/<domain> [...]` runs all of the following with a shared lock
(the host has under 3 GB of memory: never run tsc, svelte-check or vitest outside it, in
parallel with other agents; prefix any manual heavy command with `flock /tmp/story-check.lock`). The two global "gives every …" tests fail until all domains are
migrated; the script ignores them. Equivalent manual steps:

```sh
node experiments/analyze-stories.mjs --list modules/<module>/<domain>   # nothing legacy / no-recipe left
corepack yarn vitest run modules/sandbox/domain/test/render/story-contract -t "<module>/<domain>/"
corepack yarn vitest run modules/<module>/<domain>                     # existing domain tests
npx prettier --write <changed files> && npx eslint <changed files>
npx tsc --noEmit --tsBuildInfoFile /tmp/tsc-<group>.tsbuildinfo 2>&1 | grep "<module>/<domain>"
npx svelte-check --tsconfig ./tsconfig.json --diagnostic-sources js --output machine --threshold error 2>&1 | grep "<module>/<domain>"
```

`svelte-check` takes about a minute; run it once per batch of domains, not per family.
