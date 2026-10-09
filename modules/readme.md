# modules - source ownership

`../modules.json` maps logical domain imports to physical repository owners. All checkouts preserve separate Git histories.

| Owner | Physical path | Domains |
| --- | --- | --- |
| design-system | `modules/design-system` | theme, typography, layout, localization, svg |
| interaction | `modules/interaction` | animation, button, control, input, form, calendar, file, search, menu, navigation, dialog |
| information | `modules/information` | list, tree, table, chart, image, audio, video, notification |
| business (private) | `modules/business` | Nested repository container |
| customer (private) | `modules/customer` | auth, chat, ai, user, social, landing |
| architecture | `modules/architecture` | graph, erd, idef-zero, workspace, canvas, presentation, webgl |
| observer | `modules/observer` | domain, token, server, development |
| travel (private) | `modules/business/travel` | booking, travel-commerce, travel-admin |
| sakartvelo (private) | `modules/business/sakartvelo` | tea-commerce |
| geo (private) | `modules/global/geo` | geo |
| wbd (private) | `modules/business/wbd` | wbd |
| spanish (private) | `modules/business/spanish` | spanish |
| farm (private) | `modules/business/farm` | farm |
| management (private) | `modules/management` | management, marketing, portfolio, science |
| global (private) | `modules/global` | commerce, product |

Business groups nested Git submodules `wbd`, `travel`, `spanish`, `sakartvelo`, and `farm`; global groups the nested `geo` submodule alongside its direct `commerce` and `product` domains. Their registrations are in the owning business/global `.gitmodules`, not the umbrella `.gitmodules`.

Nested repositories retain their own registry keys. Module selection uses these keys, for example `travel` or `geo`; the `business` container has no direct domains.

Customer owns auth/chat/ai/user/social/landing. Management owns management/marketing/portfolio/science. These and global remain private, as do all business children.

Grouped domains are direct children of their owner (`sourceRoot: "."`). Single-domain repositories use `domainRoot: true`. The existing domain/cluster/joint/family structure and logical `$stylist/<domain>` imports are unchanged.

Travel and sakartvelo remain separate private packages at `modules/business/travel` and `modules/business/sakartvelo`. Site portal dependencies resolve these physical paths. Refresh the consuming site's Yarn installation after path changes.

Design-system embeds theme/svg/typography/layout, and observer embeds server. Edit files and run Git operations inside the physical owning repository. An umbrella commit records owner revisions; owner commits record nested submodule revisions.

Preparation validates physical paths without creating source projections. Public module selection excludes private domains, server is never published, and generated roots/manifests come from the existing Stylist tooling. Source mirrors omit Git metadata. Packaging uses an ignored staging directory.
