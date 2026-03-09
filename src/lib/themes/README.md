# themes

Theme domain for Stylist UI.

## Purpose

- Keep theme primitives and theme variants in one place.
- Provide a single runtime path to apply themes into CSS variables.
- Expose Svelte context helpers for app-wide theme switching.

## Ownership

`src/lib/themes` is the only owner of:

- theme mode resolution (`light` / `dark` / `system`)
- UI scheme registry (Minimal/Ocean/Forest/Sunset)
- applying theme/scheme values to DOM CSS variables
- theme context provider/consumer wiring

`src/lib/design-system` is a consumer of CSS vars and must not own theme runtime.

## Structure

- `colors/`:
  color values and palette-level constants.
- `scale/`:
  numeric scale primitives (50..900) used for ordered token groups (e.g. font weight, color shade keys).
- `size/`:
  physical size primitives in CSS units (`rem`/`px`) used for spacing/radius/font-size values.
- `theme/`:
  theme types, names, context, and concrete variants (`light`, `dark`, `default`).
- `schemes/`:
  UI scheme registry and IDs.
- `theme-provider/` and `theme-consumer/`:
  Svelte wrappers for reading/writing theme context.
- `utils/css/`:
  conversion of theme object to CSS variables and DOM application.

## Main API

- `lightTheme`, `darkTheme`, `defaultTheme`
- `ThemeName`, `Theme`, `ThemeColors`, `ThemeContext`
- `setThemeContext`, `getThemeContext`, `getThemeContextOptional`
- `THEME_SCHEMES`, `THEME_SCHEMES_BY_ID`
- `themeToCSSVars`, `applyThemeToDOM`, `applySchemeToDOM`, `applyThemeModeAndScheme`, `generateThemeCSS`

## Scaling Rules

- Add new visual mode by creating one variant in `theme/variants/`.
- Add new UI scheme in `schemes/`.
- Keep `scale/` and `size/` separate:
  `Scale` for ordinal steps, `Size` for CSS dimensions.
- Keep component styling dependent on CSS vars, not hardcoded values.
- Reuse `themes/utils/css` as the only place that writes theme vars to DOM.
