# Changelog

This file records package and documentation changes. Source-history details are
in [src/changelog.md](src/changelog.md). Unreleased entries do not establish npm
publication or a successful site deployment.

## Unreleased

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

The repository version remains `1.0.2`. This documentation change adds no
release tag, package build, publication or deployment.

## 1.0.1

Historical notes retained from the previous changelog:

- Stabilized the npm package after `1.0.0`.
- Excluded story/demo and test artifacts from the published tarball.
- Documented installation, peer dependency and basic usage.
- Described generated JSON metadata as internal and outside the public package
  surface at that time. Current packaging retains required runtime JSON assets.
