# themes/colors

Color source set for theme construction.

## Layers

- `values/`:
  raw color constants (`COLOR_BLUE`, `COLOR_RED`, etc.).
- `palette/`:
  named palette registry.

Color scale typing is centralized in `themes/scale/` as `Scale`.

## Role in Theming

- `theme/variants/*` composes semantic theme tokens from these color sources.
- Components should not import raw color constants directly when semantic token exists.
