# themes/scale

Ordinal scale primitives for theme token groups.

## Purpose

- Store ordered steps (`50..900`) in one place.
- Reuse the same contract across color shades and typography weight mapping.
- Keep this layer unit-free.

## API

- `Scale`:
  record-like object with keys `50..900` and string values.
- `type Scale`:
  type contract for objects that implement the same step structure.

## Boundaries

- Do not put physical CSS sizes (`rem`, `px`) here.
- For spacing, radius, or font-size dimensions, use `themes/size`.
