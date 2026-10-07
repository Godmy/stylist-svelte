#!/usr/bin/env bash
# Prepares a clean clone of stylist-svelte for a local site build without access
# to the private submodules (adr, src/lib/wbd, src/lib/geo).
# Everything this script writes is temporary: run `experiments/prepare-local-build.sh --revert`
# to remove it again. None of these files are meant to be committed.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

GRAPH_JSON=src/lib/graph/data/json/step-2-dependencies.json
GEO_STUB_DIR=src/lib/geo/const/array

if [[ "${1:-}" == "--revert" ]]; then
	rm -f "$GRAPH_JSON" && rmdir -p --ignore-fail-on-non-empty "$(dirname "$GRAPH_JSON")" 2>/dev/null || true
	rm -rf src/lib/geo/const
	echo "reverted"
	exit 0
fi

# 1. Public submodules (server, theme, svg) are required by the sandbox itself.
for s in src/lib/server src/lib/theme src/lib/svg; do
	GIT_TERMINAL_PROMPT=0 git submodule update --init "$s"
done

# 2. graph/component/organism/zwicky-scene/index.story.svelte imports a dataset that was
#    removed in 331ad6e85 and never restored. Take the last committed version (a94243f8e).
if [[ ! -f "$GRAPH_JSON" ]]; then
	mkdir -p "$(dirname "$GRAPH_JSON")"
	git show a94243f8e:"$GRAPH_JSON" > "$GRAPH_JSON"
fi

# 3. token/const/object/geo imports three arrays from the private geo submodule.
#    Provide minimal stubs only when the real submodule is not checked out.
if [[ ! -e src/lib/geo/.git ]]; then
	mkdir -p "$GEO_STUB_DIR"/{map-provider,map-type,pin}
	echo "export const MAP_PROVIDER = ['osm'] as const;" > "$GEO_STUB_DIR/map-provider/index.ts"
	echo "export const TOKEN_MAP_TYPE = ['roadmap'] as const;" > "$GEO_STUB_DIR/map-type/index.ts"
	echo "export const TOKEN_PIN = ['default'] as const;" > "$GEO_STUB_DIR/pin/index.ts"
fi

echo "ready: run 'yarn dev' or 'yarn build:site'"
