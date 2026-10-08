#!/usr/bin/env bash
# Prepares the registered public source owners, including nested repositories,
# without initializing adr or modules marked private in modules.json.
# Graph demo data is tracked in static/data, and token presets no longer depend
# on private geo. No restoration files or private-submodule stubs are necessary.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if [[ "${1:-}" == "--revert" ]]; then
	echo "nothing to revert: this helper no longer creates temporary source files"
	exit 0
fi

# Read physical owner paths rather than pre-migration src/lib domain paths.
# Capture Node's status directly so a registry error stops preparation.
public_module_paths="$(node --input-type=module -e '
import { readFileSync } from "node:fs";
const modules = JSON.parse(readFileSync("modules.json", "utf8"));
const paths = Object.values(modules).filter(module => !module.private).map(module => module.path);
if (!paths.length) throw new Error("No public module owners registered");
console.log(paths.join("\n"));
')"
mapfile -t public_modules <<< "$public_module_paths"
GIT_TERMINAL_PROMPT=0 git submodule update --init --recursive -- "${public_modules[@]}"

node scripts/prepare-module-sources.mjs --public

echo "ready: run 'yarn dev' or 'yarn build:site'"
