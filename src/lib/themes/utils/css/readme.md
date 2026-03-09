# themes/utils/css

Utilities for converting theme objects into CSS variables.

## Functions

- `themeToCSSVars(theme)`:
  maps `Theme` object to flat key/value CSS variable map.
- `applyCSSVars(element, vars)`:
  writes `--var` values to a DOM element.
- `removeCSSVars(element, names)`:
  removes previously written CSS vars.
- `applyThemeToDOM(theme, element?)`:
  applies full theme variable set and sets `data-theme`.
- `generateThemeCSS(theme, selector?)`:
  returns static CSS string for SSR/build-time usage.

## Why This Layer Exists

- Keep DOM mutation logic out of components.
- Guarantee one consistent variable naming strategy.
- Allow both runtime and static generation flows.

## Usage Pattern

1. Resolve a concrete theme object (`lightTheme` or `darkTheme`).
2. Call `applyThemeToDOM(theme)`.
3. Let components consume CSS vars only.
