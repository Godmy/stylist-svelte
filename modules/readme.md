# modules — source ownership

[modules.json](../modules.json) maps logical domains to physical repositories.
The registry has 51 domains in nine entries. This is an ownership map, not an
inventory of available checkouts or a list of public root exports.

| Owner            | Physical path           | Registered domains                                                                                       |
| ---------------- | ----------------------- | -------------------------------------------------------------------------------------------------------- |
| design-system    | `modules/design-system` | theme, typography, layout, localization, svg                                                             |
| interaction      | `modules/interaction`   | animation, button, control, input, form, calendar, file, search, menu, navigation, dialog                |
| information      | `modules/information`   | list, tree, table, chart, image, audio, video, notification                                              |
| business         | `modules/business`      | auth, user, chat, social, commerce, product, management, marketing, landing, portfolio, science, spanish |
| architecture     | `modules/architecture`  | graph, erd, idef-zero, workspace, canvas, presentation, webgl                                            |
| observer         | `modules/observer`      | domain, token, server                                                                                    |
| travel (private) | `modules/travel`        | booking, travel-commerce, travel-admin                                                                   |
| geo (private)    | `modules/geo`           | geo                                                                                                      |
| wbd (private)    | `modules/wbd`           | wbd                                                                                                      |

For grouped owners, `sourceRoot: "."` means domains are direct children of the
repository root. For `geo` and `wbd`, `domainRoot: true` means the repository root
is the domain itself. The first six entries are not marked private in the
registry; that does not guarantee anonymous GitHub access.

## Checkout and repository boundaries

From a standalone library checkout:

```sh
git submodule update --init --recursive modules/design-system modules/interaction modules/information modules/business modules/architecture modules/observer
node scripts/prepare-module-sources.mjs --public
```

With access and a need for private functionality, initialize `modules/travel`,
`modules/geo`, and `modules/wbd` separately. Running preparation without
`--public` requires all registered domains. ADR is a separate submodule at `adr`.
Submodule URLs are in the umbrella [.gitmodules](../.gitmodules).

Design-system's own `.gitmodules` registers `theme`, `svg`, `typography`, and
`layout`. Observer's registers `server`. Inspect those owners for nested
repository boundaries; historical submodule section names can still mention
`src/lib`, while their `path` fields identify the current location.

Edit code and commit inside the physical owning repository, including nested
repositories. An umbrella commit records submodule revisions. This documentation
adds no files inside a submodule and changes no recorded revisions.

## Resolution and packaging

`moduleSources` and `moduleAliases` in
[prepare-module-sources.mjs](../scripts/prepare-module-sources.mjs) resolve
`$stylist/<domain>` and `stylist-svelte/<domain>` to the owner. Preparation
validates directories and creates no source projections. Vite deduplicates
Svelte through `resolve.dedupe`.

General modules feed one public `stylist-svelte` package; they are not declared
as independent npm packages here. Travel is a separate private package/workspace
according to [AGENTS.md](../AGENTS.md). Its source must import common entities
through `stylist-svelte` subpaths and use relative imports internally.
The travel checkout was unavailable during this review, so its package scripts
and independent installation were not verified.

Public assembly excludes `geo`, `wbd`, `server` and all travel domains. It copies
other domain sources into `.package-input`, translating only the copied root
entrypoint. Source mirrors read physical owners and omit Git metadata.

Observed checkout, stale exports and release checks are recorded in the
[backlog](../src/backlog.md). Domain rules and assembly direction are described
in [architecture.md](../src/architecture.md); mandatory policy remains
[AGENTS.md](../AGENTS.md).
