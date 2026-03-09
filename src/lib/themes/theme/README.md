# themes/theme

Theme model and runtime contract.

## Contents

- `name/`:
  theme ids (`ThemeName`).
- `interface/`:
  full `Theme` object contract.
- `colors/`:
  shape of semantic colors (`ThemeColors`).
- `variants/`:
  concrete theme objects (`lightTheme`, `darkTheme`, `defaultTheme`).
- `context/`:
  Svelte context helpers and `THEME_CONTEXT_KEY`.

## Data Flow

1. Choose `ThemeName`.
2. Resolve to concrete theme object from `variants/`.
3. Apply theme through `applyThemeToDOM` from `themes/utils/css`.
4. Share active theme via context (`setThemeContext` / `getThemeContext`).

## Extension

- New mode:
  add new `ThemeName` and corresponding variant object.
- New token group:
  extend `Theme` interface first, then implement values in all variants.
