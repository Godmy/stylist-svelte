# File catalog and compact manifest

`src/lib/domain/const/array/file/index.ts` exports ARRAY_FILE, the filename
catalog for stylist-svelte/src (library and sandbox sources, including assets,
shaders, stories and tests; VCS metadata excluded). It currently contains 52
distinct basenames. Add a filename here before using it in a new preset.
Every serialized family requires a preset for its complete file composition.

`src/lib/domain/const/preset/file/index.ts` exports PRESET_FILE, the only
preset catalog. Its 29 entries have ordinary string keys and literal
`{ type, files }` values, for example:

```ts
INDEXED_INTERFACE: { type: 'interface', files: ['index.ts'] }
```

Types and string lookup:

```ts
import { resolveFilePreset } from '$stylist/domain/function/resolve/file-preset';
import type { TypeFile } from '$stylist/domain/type/alias/file';
import type { TypeFilePreset } from '$stylist/domain/type/alias/file-preset';

const name: TypeFilePreset<'interface'> = 'INDEXED_INTERFACE';
const serialized = JSON.stringify(name);
const preset = resolveFilePreset(JSON.parse(serialized));
// preset.type is 'interface'; preset.files is ['index.ts'].
```

TypeFile is the union of ARRAY_FILE filenames. TypeFilePreset is the union
of PRESET_FILE keys; its optional generic filters keys by preset type.
resolveFilePreset accepts a string and returns the preset's type and files.
Unknown keys throw explicitly, including inherited object property names.

Python uses one parser in `stylist/auditor/manifest/file_presets.py` for both
TS declarations. Keep the declarations as literal string arrays and literal
`{ type, files }` entries. Single and double quotes work. Unknown filenames,
duplicate keys or duplicate type/file compositions, and unsupported
expressions fail validation rather than diverging from TypeScript.
The generator selects implementation presets by type matching the cluster;
pure re-exports/generated barrels take the barrel preset, with the generic
code type as fallback. Preset keys themselves are not hardcoded by the
classifier. String keys are shared unchanged with JSON and TypeScript.

The user requested the preset const to use the filename type; this is an
explicit exception to the usual const -> type assembly direction.

## Tree contract

```json
{
	"tree": {
		"animation": {
			"class": {
				"manager": {
					"motion": "INDEXED_CLASS",
					"motion-preference": "INDEXED_CLASS",
					"scroll-progress": "INDEXED_CLASS"
				}
			}
		}
	}
}
```

The only serialized root field is tree. Every hierarchy level is a dictionary:
domain -> cluster -> joint -> family -> PRESET_FILE string key; no
per-family metadata or file/path lists are serialized. Every current one of
the 3,220 families has an exact preset. Resource/shader sets, reactive barrels
and tested components also have presets, preserving every filename.

Paths are reconstructed as domain/cluster/joint/family/filename. Nested family
names can contain a slash. The encoder requires canonical paths and one exact
preset for the complete composition. Unrepresented/ambiguous compositions,
duplicate names at any hierarchy level and noncanonical paths fail explicitly rather than
silently losing data. Add an exact catalog entry when introducing a new
composition. Catalog keys determine the type; joint/family ancestry determines
the address. No source imports or dependency edges are inferred from names.

TypeDomainTree describes the canonical dictionaries; TypeDomainTreeInput also
accepts legacy arrays for existing stories. Direct lookup is
`tree[domain][cluster][joint][family]`; pass that string to resolveFilePreset.
normalizeDomainTree and resolveTreeFamilies normalize dictionary values for consumption.
expandComponentTree resolves each preset and reconstructs the runtime
clusters/joints/entities/file structure. Legacy array-based trees and explicit
paths remain readable by the decoder. tree_codec.py provides matching Python
encoding/decoding. Main page data remains compact; do not expand it in
+page.server.ts.

There is no descriptors section in JSON. resolveComponentDescriptor computes
the requested component's projection from the domain's reconstructed file
index. It validates file existence in tree and preserves the established
same-family recipe/contract convention and state precedence:
component state.svelte.ts -> function/state/index.svelte.ts -> index.ts.
This is convention-based projection, not a full dependency graph: same-name
class/slot existence does not prove the component imports it. API response
structure remains compatible, supplying null/empty defaults as before.
All 779 previous descriptors were reconstructed exactly (ignoring previously
omitted null/empty fields). TypeDomainComponentDescriptor remains a runtime
API DTO, never generated manifest data. countDomainStories reads the presets
directly for the landing statistic; descriptors are not rebuilt for page data.

## Measurements (2026-10-08)

| Stage                                        | JSON bytes |
| -------------------------------------------- | ---------: |
| Initial                                      |  2,329,742 |
| Component presets                            |  1,862,636 |
| Code presets and omitted empty files         |  1,531,379 |
| SVG presets                                  |  1,419,413 |
| Code cluster labels                          |  1,421,695 |
| Sparse descriptors                           |  1,193,538 |
| Interface label                              |  1,200,272 |
| Unified catalog (same JSON)                  |  1,200,272 |
| cluster/joint/family and reconstructed paths |    986,124 |

Final stages: removing serialized descriptors gives 488,656 bytes; converting
every family to name -> preset gives 245,595 bytes. Dictionaries at every
level give **179,168 bytes**, another -66,427 bytes (-27.05%). Initial
2,329,742 -> 179,168: -2,150,574 bytes (-92.31%).
Compact JSON: 127,966 bytes; gzip compact: 19,318 bytes. These are controlled
serialization comparisons, not HTTP/HTML payload measurements. New global
scans may incorporate unrelated source changes.

Passed 23 Python and 13 Node tests, including duplicate ancestor rejection,
nested dictionary lookup, legacy compatibility, catalog/string lookup, all
preset/dictionary decoding, state lookup precedence, missing component/API
errors, and on-demand API projection. Targeted TypeScript includes new
resolvers, decoder/Explorer, page loader/server manager and final JSON.
Archived verification reconstructs the initial tree exactly and all 779 old
descriptor values, including the story total. Latest full svelte-check:
16 existing unrelated errors and 446 warnings (one fewer); no new errors.

Global regeneration is human-only by default. On 2026-10-08 Dmitrii explicitly
authorized this session to run yarn stylist:manifest, commit and push. The
regeneration completed on the second pass: the first indexation pass created
missing component barrels after collecting its source snapshot. Repeating the
command included those barrels and satisfied the exact preset requirement.
The catalog now also includes the newly generated index.full.ts filename.

Fresh manifest: **181,006 bytes**, compact JSON 129,303, gzip compact 19,572.
It contains 51 domains, 3,257 families and 5,354 existing files, matching the
current indexation snapshot exactly. Its larger inventory is distinct from
the controlled 3,220-family comparison above. Regenerated domain exports and
the server submodule update are included in this task's commits; unrelated
P0/root-entrypoint and site-source edits remain outside them.

Safe checks from the site root, without global regeneration:

```sh
python packages/stylist/auditor/manifest/measure_component_presets.py --output .tmp/component-manifest/index.json
python -m unittest discover -s packages/stylist/auditor/tests -p "test_*presets.py"
node --test packages/stylist-svelte/scripts/component-manifest.test.mjs
```
