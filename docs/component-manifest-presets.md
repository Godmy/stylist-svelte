# Compact manifest and file presets

The current domain owner is `modules/observer/domain`. Source paths below are
relative to that owner. The serialized manifest is
`data/json/domain-page-manifest/index.json`.

## Catalog and serialized contract

`const/array/file/index.ts` exports `ARRAY_FILE`, the filename catalog.
`const/preset/file/index.ts` exports `PRESET_FILE`, whose string keys identify
literal `{ type, files }` compositions. `TypeFile` represents catalog filenames;
`TypeFilePreset` represents preset keys and can filter by preset type.
`function/resolve/file-preset/index.ts` resolves keys and rejects unknown keys,
including inherited object property names.

```json
{
	"tree": {
		"animation": {
			"class": {
				"manager": {
					"motion": "INDEXED_CLASS"
				}
			}
		}
	}
}
```

`tree` is the only serialized root field. Each level is a dictionary:
domain → cluster → joint → family → preset string. A preset describes the
complete filename composition; addresses are reconstructed as
`domain/cluster/joint/family/filename`. Nested family names can contain `/`.
There is no serialized descriptor array or import/dependency graph.

The external auditor's `stylist/auditor/manifest/file_presets.py` parses the
literal catalogs. Unsupported expressions, unknown filenames and ambiguous
compositions must fail instead of losing files. The existing preset declaration
uses the filename type; its const → type dependency is a documented exception
from the earlier manifest work, not a general change to assembly policy.

## Runtime use

`TypeDomainTree` describes the dictionary tree; `TypeDomainTreeInput` also accepts
legacy arrays. `normalizeDomainTree`, `resolveTreeFamilies` and
`expandComponentTree` support runtime consumption and path reconstruction.

`resolveComponentDescriptor` reconstructs a requested component's projection
from the selected domain. It checks for files represented in the tree and uses
same-family recipe/contract conventions. State precedence is component-local
`state.svelte.ts`, then `function/state/<family>/index.svelte.ts`, then `index.ts`.
This lookup describes conventions; it does not prove the component imports the
corresponding recipe, slot or class.

The server's DomainManager returns `{ tree }` for page data and builds the
projection on demand for `/api/descriptor`. `countDomainStories` reads presets
for the landing statistic. A manifest entry can outlive an available checkout;
source availability requires a separate check.

## Measured snapshot

Measured on 2026-10-08 from the observer revision `28d9b22c27ae86bace63687faa141285224e8a3d`
pinned by umbrella `681e886ea`:

| Representation                                  |   Bytes |
| ----------------------------------------------- | ------: |
| Tracked JSON file                               | 181,006 |
| Compact JSON (UTF-8, separators without spaces) | 129,303 |
| Gzip of compact JSON                            |  19,572 |

The tree contains 51 domain keys and 3,257 family entries. These numbers describe
the manifest, including domains whose repositories were unavailable in this
review; they are not counts of checked-out or working components.

These are file serialization sizes, **not** measured HTTP response sizes, HTML
payloads, cold-start timings or build performance. The earlier controlled
comparison (2,329,742 → 179,168 bytes) belongs to the pre-migration work in
[400dec575](https://github.com/Godmy/stylist-svelte/commit/400dec57503ed7906780e282c40db78ea21d12c8);
it used a different inventory and is not the current file size.

## Verification and regeneration

From a library checkout with the observer domain and TypeScript installed:

```sh
node --test scripts/component-manifest.test.mjs
```

The tests cover catalog lookup, decoding, legacy compatibility, state
precedence, descriptor API shape and complete-manifest roundtrips. They do not
establish that every repository or story is available.

Global generation remains human-only. Dmitrii runs `yarn stylist:manifest` from
the parent site root when changes are ready; agents must not run it. Current
release prerequisites are recorded in [src/backlog.md](../src/backlog.md).
