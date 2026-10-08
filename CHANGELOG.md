# Changelog

This file records package and documentation changes. Source-history details are
in [src/changelog.md](src/changelog.md). Unreleased entries do not establish npm
publication or a successful site deployment.

## Unreleased

### Public-only package and sandbox (2026-10-08)

- `business`, `spanish` and the new `farm` module are private in `modules.json`; the npm
  package now ships only public modules (33 domains). **Breaking** for users of 1.0.1, which
  contained business domains (auth, user, chat, commerce, landing, …).
- `MessageTimestamp` moved to `notification`; business token settings live in their own domains.
- Gate `scripts/stylist-gate.mjs` (pre-push hook, Workers Builds, npm release): public import
  boundary incl. stories, generated files without private names, package closure, python
  `--check`. `src/lib/index.full.ts` is local-only.
- Packaging emits `.d.ts` again (tsconfig moved to the package root); bounded publint wrapper;
  `check-package-tarball.mjs`. Runbook and release log: [docs/release.md](docs/release.md).

### Documentation

- Replace the three earlier audits with current source, entrypoint and sandbox
  documentation; remove delivery estimates and domain-completeness ratings.
- Rewrite the English README with physical ownership, current package export
  configuration, local setup prerequisites and links that resolve.
- Add a documentation index, architecture description, module ownership map,
  source changelog and release backlog with file/commit evidence.
- Update module, manifest and P0 notes to distinguish historical observations
  from current verification and release blockers.

### Source changes already recorded on 2026-10-08

- Compact the sandbox manifest to a nested tree with filename presets and
  on-demand component projections (`400dec575`).
- Add public/full entrypoint separation, public source preflight and runtime
  asset retention (`afb625862`).
- Move source ownership to physical Git modules and isolate private travel
  (`681e886ea`). Generated umbrella roots still need human regeneration.

### CI checkout

- Read public owner paths from `modules.json` and initialize their nested
  repositories instead of requesting removed `src/lib` submodule paths.
- Validate public physical sources after checkout. Add local Git fixture tests
  for recursive initialization, private-owner exclusion, missing required owners
  and the helper's no-op `--revert`; run these before CI checkout.

The repository version remains `1.0.2`. This change adds no
release tag, package build, publication or deployment.

## 1.0.1

Historical notes retained from the previous changelog:

- Stabilized the npm package after `1.0.0`.
- Excluded story/demo and test artifacts from the published tarball.
- Documented installation, peer dependency and basic usage.
- Described generated JSON metadata as internal and outside the public package
  surface at that time. Current packaging retains required runtime JSON assets.
