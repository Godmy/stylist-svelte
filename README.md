# Stylist Svelte

`stylist-svelte` is a Svelte 5 component library with TypeScript types and a
SvelteKit sandbox. Source ownership is declared in [modules.json](modules.json);
implementations live in Git repositories under `modules/`.

## Installation and usage

For a published package:

```sh
npm install stylist-svelte svelte
```

Svelte `^5.0.0` is the required peer dependency. The repository declares version
`1.0.2`; this does not establish which version is currently published on npm.

The package declares a root export and wildcard subpath exports. For example:

```svelte
<script lang="ts">
	import ThemeProvider from 'stylist-svelte/theme/component/atom/theme-provider/index.svelte';
	import Button from 'stylist-svelte/button/component/atom/button/index.svelte';
</script>

<ThemeProvider themeMode="light" themeScheme="minimal">
	<Button>Get started</Button>
</ThemeProvider>
```

Theme modes are `default` (system preference), `light`, and `dark`; schemes are
`minimal`, `ocean`, `forest`, and `sunset`.

## Repository map

| Location                            | Responsibility                                         |
| ----------------------------------- | ------------------------------------------------------ |
| [modules/](modules/readme.md)       | Domain implementations and their owning repositories   |
| [src/lib/](src/lib/readme.md)       | Generated public and full workspace entrypoints        |
| [src/routes/](src/routes/readme.md) | Sandbox page and API routes                            |
| [scripts/](scripts)                 | Source validation, package assembly, and source mirror |
| [src/test/](src/test)               | Theme integration tests and harnesses                  |
| [static/](static)                   | Site assets and graph demo dataset                     |

General modules feed one public npm package. Travel is a separate private
`stylist-svelte-travel` package/workspace. Public packaging excludes `geo`, `wbd`,
`server`, `booking`, `travel-commerce`, `travel-admin`, stories, tests, and the
full workspace entrypoint. Public internal implementations and runtime assets
remain included even when their domain is absent from the root export.

## Local development

Use Node.js 24 to match the checked-in CI configuration and Yarn 4.6.0 as pinned
in `package.json`. In the parent site workspace, install dependencies from the
site root. For a standalone clone, use the library root:

```sh
git submodule update --init --recursive modules/design-system modules/interaction modules/information modules/business modules/architecture modules/sandbox
node scripts/prepare-module-sources.mjs --public
yarn install --immutable
yarn dev
```

Checkout requires access to the listed repositories, including their nested
submodules. The sandbox uses port **5174** with `strictPort: true`. Physical
aliases resolve logical domain imports without creating source links or copies.

The checkout helper now initializes registered public owners recursively and
validates their physical domains. Release blockers remain: generated umbrella
exports still reference removed domain folders, and access to `modules/business`
failed during validation. See the [backlog](src/backlog.md) for evidence and
completion criteria; the setup sequence above is not a claim that this revision
builds successfully.

Package builds and publication are maintainer operations. For `weoracle.online`,
follow [AGENTS.md](AGENTS.md): keep its source hot-reload workflow and do not
regenerate `dist` during ordinary component work. Global entrypoint and manifest
generation is human-only.

## Documentation

- [Documentation index](src/index.md)
- [Architecture](src/architecture.md)
- [Module ownership and checkout](modules/readme.md)
- [Release backlog](src/backlog.md)
- [Changelog](CHANGELOG.md)
- [Contribution rules](AGENTS.md) and [contributor guide](CONTRIBUTING.md)

## License

[MIT](LICENSE)
