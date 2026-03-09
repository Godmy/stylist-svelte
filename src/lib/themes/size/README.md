# themes/size

Physical size primitives for theme composition.

## Purpose

- Provide canonical CSS dimension values in one place.
- Use a single source for spacing, radius, and typographic sizes.
- Replace theme-local `REM` aliases with explicit `Size`.

## API

- `Size`:
  map of keys (`0`, `0.5`, `1`, ..., `128`, `full`) to CSS values (`rem`/`px`).
- `SizeKey`:
  union type of available size keys.

## Typical Usage

- `theme/variants/scales` for `THEME_SPACING` and `THEME_RADIUS`.
- `theme/variants/typography` for `fontSize` values.

## Boundaries

- Do not use this module for ordinal token scales like `100..900`.
- For ordinal scales, use `themes/scale`.
