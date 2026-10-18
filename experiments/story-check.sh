#!/usr/bin/env bash
# Checks the story migration (issue #5) of one or more domains: story inventory, story
# contract tests, the domains' own tests, prettier/eslint on changed files, tsc and
# svelte-check filtered to the domains. Heavy steps share one lock so parallel runs
# never exceed the host memory.
# Usage: experiments/story-check.sh <module>/<domain> [<module>/<domain> ...] [--no-svelte-check]
set -uo pipefail
cd "$(dirname "$0")/.."
LOCK=/tmp/story-check.lock
SVELTE_CHECK=1
DOMAINS=()
for arg in "$@"; do
	if [ "$arg" = "--no-svelte-check" ]; then SVELTE_CHECK=0; else DOMAINS+=("${arg#modules/}"); fi
done
[ ${#DOMAINS[@]} -gt 0 ] || { echo "usage: $0 <module>/<domain>..." >&2; exit 2; }
TAG=$(printf '%s' "${DOMAINS[*]}" | tr '/ ' '-_')
LOG=/tmp/story-check-logs/$TAG
mkdir -p "$LOG"
status=0
locked() { flock "$LOCK" "$@"; }
PATTERN=$(printf 'modules/%s/|' "${DOMAINS[@]}"); PATTERN=${PATTERN%|}

for d in "${DOMAINS[@]}"; do
	echo "== inventory $d"
	node experiments/analyze-stories.mjs --list "modules/$d" | grep -P '^(legacy|rendered|contract|none)\t' | grep -v '^contract\t\s*\t' || true
done

for d in "${DOMAINS[@]}"; do
	echo "== story contracts $d"
	locked timeout 900 npx vitest run modules/sandbox/domain/test/render/story-contract -t "$d/" >"$LOG/contract-${d//\//-}.log" 2>&1
	grep -E '^\s+(×|✗)|Tests ' "$LOG/contract-${d//\//-}.log" | grep -v 'gives every' | head -40
	grep -qE 'Tests .*failed' "$LOG/contract-${d//\//-}.log" && grep -E '(×|✗)' "$LOG/contract-${d//\//-}.log" | grep -vq 'gives every' && status=1
done

for d in "${DOMAINS[@]}"; do
	if find "modules/$d" -name '*.test.ts' -not -path '*/node_modules/*' | grep -q .; then
		echo "== domain tests $d"
		locked timeout 900 npx vitest run "modules/$d" >"$LOG/domain-${d//\//-}.log" 2>&1 || status=1
		grep -E '(×|✗|FAIL)|Tests ' "$LOG/domain-${d//\//-}.log" | head -30
	fi
done

echo "== prettier/eslint (changed files)"
CHANGED=()
for d in "${DOMAINS[@]}"; do
	repo=$(git -C "modules/$d" rev-parse --show-toplevel)
	while IFS= read -r f; do [ -f "$repo/$f" ] && CHANGED+=("$(realpath --relative-to=. "$repo/$f")"); done < <(
		git -C "$repo" status --porcelain --untracked-files=all -- "$(realpath "modules/$d")" | sed -E 's/^...//; s/.* -> //' | grep -E '\.(ts|svelte|js)$'
	)
done
if [ ${#CHANGED[@]} -gt 0 ]; then
	npx prettier --write "${CHANGED[@]}" >/dev/null
	locked npx eslint "${CHANGED[@]}" || status=1
fi

echo "== tsc"
locked timeout 900 npx tsc --noEmit --incremental --tsBuildInfoFile /tmp/tsc-story-check.tsbuildinfo >"$LOG/tsc.log" 2>&1
grep -E "^($PATTERN)" "$LOG/tsc.log" && status=1

if [ $SVELTE_CHECK = 1 ]; then
	echo "== svelte-check"
	locked timeout 1200 npx svelte-check --tsconfig ./tsconfig.json --output machine >"$LOG/svelte-check.log" 2>&1
	grep -E " (ERROR|WARNING) \"($PATTERN)" "$LOG/svelte-check.log" | grep -E 'ERROR|\.story\.svelte|index\.svelte' && status=1
fi
echo "== done (status $status, logs in $LOG)"
exit $status
