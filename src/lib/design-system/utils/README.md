# Utils

Helpers for design system:
- css-vars.ts: themeToCSSVars/applyCSSVars/removeCSSVars/applyThemeToDOM/generateThemeCSS.
- index.ts: re-exports.

Usage:
- ThemeProvider (outside design-system) should call applyThemeToDOM and themeToCSSVars when switching themes.
- Keep this layer framework-agnostic; Svelte-specific logic lives in adapters/components.
