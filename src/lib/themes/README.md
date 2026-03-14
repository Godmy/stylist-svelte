# themes

Theme runtime domain for Stylist UI.

## Purpose

- Keep all theme contracts, tokens, defaults, and runtime helpers in one place.
- Provide one stable path from theme data to CSS variables on DOM.
- Keep component styling dependent on semantic CSS variables.

## Folder Map

```text
src/lib/themes
|- contracts/
|  |- theme/
|  |- theme-colors/
|  |- theme-name/
|  |- theme-scheme/
|  `- theme-scheme-id/
|- tokens/
|  |- border-radius/
|  |- box-shadows/
|  |- colors/
|  |- colors-scales/
|  |- scale/
|  |- size/
|  |- spacing/
|  `- typography/
|- defaults/
|  |- theme-schemes/
|  `- themes/
`- runtime/
   |- theme-context/
   |- theme-provider/
   |- theme-consumer/
   `- css/
```

## Change Policy

### Closed Nodes (Edit with high caution)

- `contracts/theme-name`: canonical theme mode identifiers.
- `contracts/theme-scheme-id`: canonical scheme identifiers.
- `contracts/theme`: root `Theme` shape used by runtime and consumers.
- `runtime/theme-context`: Svelte context key and typed API.
- `runtime/css`: variable naming and DOM-application behavior.

### Scalable Nodes (Expected to grow)

- `tokens/colors-scales/*`: add new scales or shades.
- `tokens/typography/*`: add typography token values.
- `tokens/size`, `tokens/spacing`, `tokens/border-radius`, `tokens/box-shadows`: expand value maps.
- `defaults/themes/*`: add or evolve concrete theme variants.
- `defaults/theme-schemes`: add UI schemes for the selector.

## How to Extend

1. Add or update token values under `tokens/*`.
2. If semantic shape changes, update `contracts/theme-colors` or `contracts/theme-typography` first.
3. Update concrete variants in `defaults/themes/*`.
4. If new scheme is needed, add it in `defaults/theme-schemes` and keep `contracts/theme-scheme-id` in sync.
5. If mode set changes, update `contracts/theme-name`, then adjust runtime resolution in `runtime/css`.
6. Run index generation: `python -u "d:\2026\code\template\stylist\indexation\cli.py"`.
7. Run checks: `python -u "d:\2026\code\template\stylist\errors\cli.py"`.

## Public API

`src/lib/themes/index.ts` re-exports:

- Contracts: `Theme`, `ThemeColors`, `ThemeTypography`, `ThemeName`, `ThemeScheme`, `ThemeSchemeId`.
- Token values: `COLORS`, `COLORS_SCALES_*`, `Scale`, `Size`, `THEME_SPACING`, `THEME_RADIUS`, `THEME_BOX_SHADOW`, `TYPOGRAPHY_*`.
- Defaults: `lightTheme`, `darkTheme`, `defaultTheme`, `THEME_SCHEMES`, `THEME_SCHEMES_BY_ID`.
- Runtime: `ThemeProvider`, `ThemeConsumer`, `setThemeContext`, `getThemeContext`, `applyThemeModeAndScheme`, `themeToCSSVars`, etc.
