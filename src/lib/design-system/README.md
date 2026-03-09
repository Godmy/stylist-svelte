# Stylist Design System

`src/lib/design-system` is the component-system core.

## Responsibility

- Define component contracts, style managers, runtime helpers, and design-system tokens.
- Provide reusable API for components in `src/lib/components`.
- Consume CSS variables as inputs for visual behavior.

## Non-Responsibility

- Do not own theme runtime.
- Do not apply themes to DOM (`documentElement.style.setProperty` etc.).
- Do not own theme schemes/modes context.

Theme runtime ownership is in `src/lib/themes`.

## Folder Roles

- `contracts/`: component input/output contracts.
- `models/`: state/model helpers for components.
- `styles/`: style managers and class composition.
- `tokens/`: DS token constants and semantic keys.
- `runtime/`: base runtime class presets and helpers.
- `utils/`: shared pure utilities.
- `playground/`: story/playground support utilities.

## Dependency Boundaries

Allowed:

- `components -> design-system`
- `components -> themes`
- `design-system -> design-system/*`

Disallowed:

- `design-system -> themes` (runtime/theme domain coupling)

## Extension Rules

1. Add/extend token or contract in `design-system`.
2. Consume through models/styles in DS.
3. Keep real color values dynamic via CSS vars.
4. If a new theme behavior is needed, implement it in `src/lib/themes`, not here.

## Operational Rules

- Re-generate indexes after structure/export changes:
  - `python -u "d:\2026\code\template\stylist\indexation\cli.py"`
- Run unified checks:
  - `python -u "d:\2026\code\template\stylist\errors\cli.py"`
