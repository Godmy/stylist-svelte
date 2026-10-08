#!/usr/bin/env bash
# Prepares a clean clone of stylist-svelte for a local site build without access
# to the private submodules (adr, src/lib/wbd, src/lib/geo).
# Graph demo data is tracked in static/data, and token presets no longer depend
# on private geo. No restoration files or private-submodule stubs are necessary.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if [[ "${1:-}" == "--revert" ]]; then
	echo "nothing to revert: this helper no longer creates temporary source files"
	exit 0
fi

# 1. Public submodules (server, theme, svg) are required by the sandbox itself.
for s in src/lib/server src/lib/theme src/lib/svg; do
	GIT_TERMINAL_PROMPT=0 git submodule update --init "$s"
done

echo "ready: run 'yarn dev' or 'yarn build:site'"
