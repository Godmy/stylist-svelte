# Stylist Svelte

`stylist-svelte` is a Svelte 5 component library with TypeScript types, a theme
system and a SvelteKit sandbox. It is organised by the **SAMO** methodology
(SOLID · Atomic Design · Morphological box · Orchestration): every entity has a
strict address, so people and AI agents can tell what a file is and where its
dependencies may flow just by reading its path.

This repository is an **umbrella**. The code itself lives in **modules** —
separate Git repositories under `modules/`, each owning a group of domains.
[modules.json](modules.json) is the registry that maps every domain to exactly
one owner.

- npm: [`stylist-svelte`](https://www.npmjs.com/package/stylist-svelte) — `2.0.0` is the current `latest`
- Sandbox: [stylist-svelte.online](https://stylist-svelte.online) — built from public modules only

## Installation and usage

```sh
npm install stylist-svelte svelte
```

Svelte `^5.0.0` is the required peer dependency. Import components by subpath —
the path is the component's SAMO address:

```svelte
<script lang="ts">
	import ThemeProvider from 'stylist-svelte/theme/component/atom/theme-provider/index.svelte';
	import Button from 'stylist-svelte/button/component/atom/button/index.svelte';
</script>

<ThemeProvider themeMode="light" themeScheme="minimal">
	<Button>Get started</Button>
</ThemeProvider>
```

Theme modes are `default` (system preference), `light` and `dark`; schemes are
`minimal`, `ocean`, `forest`, `sunset` and `weoracle`. `ThemeProvider` publishes
the theme through Svelte context and applies it as CSS variables (`--color-*`).

### What the package contains

The npm package ships the **public** modules only: runtime components, `.d.ts`
typings and theme tokens. Internal implementations that public components
depend on stay in the package even when their domain is absent from the root
export.

It excludes private modules (customer, management, global, business and its
children — travel, wbd, spanish, sakartvelo, farm — and geo), the sandbox
`server` domain, stories, tests, JSON metadata and the full workspace
entrypoint `src/lib/index.full.ts`. Version 2.0.0 removed the business domains
from the package; projects that import them must stay on 1.0.1 (see the
[changelog](CHANGELOG.md)).

## Architecture

### The SAMO address

```text
modules/<module>/<domain>/<cluster>/<joint>/<family>/index.ts
        └ owner ┘ └──────────── SAMO address ────────────┘
```

| Coordinate | Defines                                | Examples                                                               |
| ---------- | -------------------------------------- | ---------------------------------------------------------------------- |
| `domain`   | The subject area                       | `theme`, `button`, `chart`                                             |
| `cluster`  | The language form                      | `data`, `const`, `type`, `interface`, `class`, `function`, `component` |
| `joint`    | The logical role in the cluster        | `recipe`, `manager`, `transform`, `molecule`                           |
| `family`   | The concrete entity, refined by traits | `theme` → `theme-mode` → `theme-mode-toggle`                           |

The module is **ownership, not a fifth coordinate**: imports never mention it.

```ts
// physical file
modules / interaction / button / component / atom / button / index.svelte;
// workspace import
import Button from '$stylist/button/component/atom/button/index.svelte';
// package import
import Button from 'stylist-svelte/button/component/atom/button/index.svelte';
```

Dependencies flow one way: `data → const → type → interface → class → function → component`.
Inside `interface/`, the DSIAP pattern assembles `behavior` / `slot` / optional
`contract` into a `recipe`. Components follow Atomic Design as the joint of the
`component` cluster: `atom`, `molecule`, `organism`, `template`, `page`. Each
file exports exactly one entity. The full rules are in [AGENTS.md](AGENTS.md);
the sandbox landing and its **How it works** page explain them with examples.

### Modules

| Module        | Path                    | Visibility | Domains                                                                                   |
| ------------- | ----------------------- | ---------- | ----------------------------------------------------------------------------------------- |
| design-system | `modules/design-system` | public     | theme, typography, layout, localization, svg                                              |
| interaction   | `modules/interaction`   | public     | animation, button, control, input, form, calendar, file, search, menu, navigation, dialog |
| information   | `modules/information`   | public     | list, tree, table, chart, image, audio, video, notification                               |
| architecture  | `modules/architecture`  | public     | graph, erd, idef-zero, workspace, canvas, presentation, webgl                             |
| sandbox       | `modules/sandbox`       | public¹    | domain, token, development, server                                                        |
| customer      | `modules/customer`      | private    | auth, chat, ai, user, social, landing                                                     |
| management    | `modules/management`    | private    | management, marketing, portfolio, science                                                 |
| global        | `modules/global`        | private    | commerce, product (+ nested `geo`)                                                        |
| business      | `modules/business`      | private    | container for nested travel, wbd, spanish, sakartvelo, farm                               |

¹ `server` is never published, whichever module owns it.

Some domains are Git repositories of their own, registered in the owning
module's `.gitmodules`: `theme`, `svg`, `typography` and `layout` in
design-system; `server` in sandbox; `geo` in global; `travel`, `wbd`, `spanish`,
`sakartvelo` and `farm` in business. `travel` and `sakartvelo` are also separate
private Yarn packages. See [modules/readme.md](modules/readme.md) for the
registry format (`path`, `domains`, `sourceRoot`, `domainRoot`, `private`).

### How imports resolve

`scripts/prepare-module-sources.mjs` exports `moduleAliases()`, which reads
`modules.json` and maps `$stylist/<domain>` and `stylist-svelte/<domain>` to the
owning module. Vite and SvelteKit use these aliases directly — no symlinks and
no copies. The umbrella `src/lib` holds **generated entrypoints only**:
`index.ts` (package filter) and `index.full.ts` (full workspace, excluded from
npm).

## Repository map

| Location                            | Responsibility                                         |
| ----------------------------------- | ------------------------------------------------------ |
| [modules/](modules/readme.md)       | Domain implementations in their owning repositories    |
| [modules.json](modules.json)        | Domain → owner registry, public/private visibility     |
| [src/lib/](src/lib/readme.md)       | Generated public and full workspace entrypoints        |
| [src/routes/](src/routes/readme.md) | Sandbox page and API routes                            |
| [scripts/](scripts)                 | Module preparation, package assembly, gates and checks |
| [src/test/](src/test)               | Theme integration tests and harnesses                  |
| [static/](static)                   | Site assets, logos and generated source mirror         |
| [adr/](adr)                         | Architecture decision records (submodule)              |

## Local development

Use Node.js 24 (as in CI) and the Yarn version pinned in `package.json`
(`yarn@4.13.0`).

### Work on the library

```sh
git clone https://github.com/Godmy/stylist-svelte.git
cd stylist-svelte
git submodule update --init --recursive \
  modules/design-system modules/interaction modules/information \
  modules/architecture modules/sandbox
node scripts/prepare-module-sources.mjs --public   # validate physical domains
yarn install --immutable
yarn dev                                           # sandbox on http://localhost:5174
```

Private modules require access to their repositories; with access, initialise
them too and run `prepare-module-sources.mjs` without `--public`. The sandbox
port is fixed: **5174** with `strictPort: true`.

### Use the library in your site from source

Keep the site next to the library as a sibling folder and link it with a Yarn
portal. The site then compiles Stylist from source and hot-reloads edits made in
any module.

```json
{
	"dependencies": {
		"stylist-svelte": "portal:../stylist-svelte"
	}
}
```

```ts
// vite.config.ts
import { moduleAliases } from '../stylist-svelte/scripts/prepare-module-sources.mjs';

const stylist = fileURLToPath(new URL('../stylist-svelte', import.meta.url));

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		preserveSymlinks: true,
		alias: { ...moduleAliases(stylist), 'stylist-svelte': `${stylist}/src/lib` },
		dedupe: ['svelte'] // one Svelte runtime for both projects
	},
	optimizeDeps: { exclude: ['stylist-svelte'] }, // no stale pre-bundle
	ssr: { noExternal: ['stylist-svelte'] }, // compile it, do not require it
	server: {
		fs: { allow: ['.', '../stylist-svelte'] },
		watch: { ignored: [/[\\/]stylist-svelte[\\/](?:dist|\.svelte-kit)(?:[\\/]|$)/] }
	}
});
```

```js
// svelte.config.js — kit.alias
alias: {
	...moduleAliases(path.resolve(__dirname, '../stylist-svelte')),
	'stylist-svelte/*': path.resolve(__dirname, '../stylist-svelte/src/lib'),
	// the library's own internal $stylist imports must resolve in the site too
	$stylist: path.resolve(__dirname, '../stylist-svelte/src/lib')
}
```

Install from the site root: every site stays its own Yarn project with its own
lockfile. **Do not build or package the library** (`yarn build`, `yarn package`,
`svelte-package`) while a site hot-reloads from it — regenerating `dist`
desynchronises the dev server.

### Connect a private package

Private packages such as `stylist-svelte-travel` get their own portal and alias;
take the path from `modules.json` instead of hard-coding it:

```json
"stylist-svelte-travel": "portal:../stylist-svelte/modules/business/travel"
```

```ts
import { moduleAliases, readModules } from '../stylist-svelte/scripts/prepare-module-sources.mjs';
const travel = path.resolve(stylist, readModules(stylist).travel.path);
// alias: { ..., 'stylist-svelte-travel': travel }
// optimizeDeps.exclude and ssr.noExternal: add 'stylist-svelte-travel'
```

The dependency is one-way: a private package imports common entities by
`stylist-svelte/<domain>/…` subpath and uses relative imports internally; the
public library never imports a private package. After a module moves, refresh
the site's Yarn installation so the portal follows the new path.

### Choose modules

One selection rule is shared by the aliases, `prepare-module-sources.mjs` and
the Python indexer: `all` (default), `public`, or a comma-separated list of
registry keys.

```sh
node scripts/prepare-module-sources.mjs --public
node scripts/prepare-module-sources.mjs --modules=design-system,interaction
node scripts/prepare-module-sources.mjs --exclude-modules=business
STYLIST_MODULES=public STYLIST_EXCLUDE_MODULES=management yarn dev
```

The sandbox dev server uses all modules; production builds of the sandbox use
`public` unless `STYLIST_MODULES` says otherwise.

## Making changes

1. **Find the address.** Choose domain, cluster, joint and family; `modules.json`
   tells which module owns the domain.
2. **Write one entity per file** in the owning module, respecting the assembly
   direction. Never create copies or links under `src/lib`.
3. **Regenerate and check.** Barrels and the sandbox manifest are generated, and
   the tree-wide CLIs are run by the maintainer, not by agents. From a site root:

   | Command                 | Purpose                                          |
   | ----------------------- | ------------------------------------------------ |
   | `yarn stylist:index`    | Regenerate barrel `index.ts` files               |
   | `yarn stylist:manifest` | Regenerate the sandbox manifest (new components) |
   | `yarn stylist:errors`   | Unified TypeScript + Svelte error report         |

4. **Commit up the nesting.** Commit in the repository that owns the file, then
   record its revision in the owning module, then in the umbrella:

   ```sh
   cd modules/design-system/layout && git commit …   # nested repository
   cd .. && git add layout && git commit …            # owner module
   cd ../.. && git add modules/design-system && git commit …   # umbrella
   ```

Library scripts: `yarn lint`, `yarn format`, `yarn check`, `yarn test:unit`,
`yarn test:package-source`, `yarn gate` (public boundary, generated files and
package closure; also the pre-push hook — `yarn hooks:install`). Package builds
and npm publication are maintainer operations; see the release runbook referenced
in the [changelog](CHANGELOG.md).

## Sandbox

`yarn dev` starts the SvelteKit sandbox. The floating menu switches between:

- **Landing** — the library and the SAMO methodology: address decoder, SOLID,
  assembly direction, nested methodologies, the morphological box, governance
  and practice;
- **Components** — the domain explorer with stories next to their source,
  markdown and JSON structure, with device viewport presets;
- **Diagnostics** — domain and file diagnostics;
- **How it works (`?`)** — the life of a change, extending a real component,
  the umbrella and its modules, local development, the platform, risks and adoption;
- **Settings** and the theme mode toggle.

The public site [stylist-svelte.online](https://stylist-svelte.online) is a
Cloudflare Workers deployment built from public modules only
(`scripts/public-sandbox.mjs`, verified by `yarn verify:public-build`).

## Documentation

- [Documentation index](src/index.md)
- [Architecture](src/architecture.md)
- [Module ownership and checkout](modules/readme.md)
- [Release backlog](src/backlog.md)
- [Changelog](CHANGELOG.md)
- [Contribution rules](AGENTS.md) and [contributor guide](CONTRIBUTING.md)

## License

[MIT](LICENSE)
