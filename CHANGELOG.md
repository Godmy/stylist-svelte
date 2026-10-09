# Changelog

This file records package and documentation changes. Source-history details are
in [src/changelog.md](src/changelog.md). Unreleased entries do not establish npm
publication or a successful site deployment.

## 2.0.0 — 2026-10-09

> **Breaking:** the npm package no longer contains business domains (auth, user, chat,
> social, commerce, product, management, marketing, landing, portfolio, science) or spanish;
> they are private modules now. Projects importing them from 1.0.1 must stay on 1.0.1.
> A 1.1.0 was prepared on 2026-10-08 but never published; 2.0.0 replaces it (major bump
> because of the removed domains).

### Fixed

- `svg`: the `heart` icon is symmetric (the right lobe ended at x=20 and the halves met off
  the tip).

### Sandbox (stylist-svelte.online, not part of the package)

- Landing hero: SAMO badge, "Faster!" accent and heart mark with a synced shine, animated
  public-domain/story counters, credits row instead of the model panel, calm CTA cards.
- The public site is built from public modules only (`scripts/public-sandbox.mjs`), checked
  by `scripts/verify-public-build.mjs`; `scripts/verify-public-clone.mjs` proves it on a clean
  clone. Deploy runbook: `../.docs/stylist-svelte/deploy-cloudflare.md`.

### Public-only package and sandbox (2026-10-08)

- `business`, `spanish` and the new `farm` module are private in `modules.json`; the npm
  package now ships only public modules (33 domains). **Breaking** for users of 1.0.1, which
  contained business domains (auth, user, chat, commerce, landing, …).
- `MessageTimestamp` moved to `notification`; business token settings live in their own domains.
- Gate `scripts/stylist-gate.mjs` (pre-push hook, Workers Builds, npm release): public import
  boundary incl. stories, generated files without private names, package closure, python
  `--check`. `src/lib/index.full.ts` is local-only.
- Packaging emits `.d.ts` again (tsconfig moved to the package root); bounded publint wrapper;
  `check-package-tarball.mjs`. Runbook and release log: [../.docs/stylist-svelte/release.md](../.docs/stylist-svelte/release.md).

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
  (`681e886ea`). Umbrella roots were regenerated publicly on 2026-10-08.

### CI checkout

- Read public owner paths from `modules.json` and initialize their nested
  repositories instead of requesting removed `src/lib` submodule paths.
- Validate public physical sources after checkout. Add local Git fixture tests
  for recursive initialization, private-owner exclusion, missing required owners
  and the helper's no-op `--revert`; run these before CI checkout.

Tagged `v1.1.0`; npm publication and the push are done by Dmitrii (see
[../.docs/stylist-svelte/release.md](../.docs/stylist-svelte/release.md)).

## 1.0.1

Historical notes retained from the previous changelog:

- Stabilized the npm package after `1.0.0`.
- Excluded story/demo and test artifacts from the published tarball.
- Documented installation, peer dependency and basic usage.
- Described generated JSON metadata as internal and outside the public package
  surface at that time. Current packaging retains required runtime JSON assets.
