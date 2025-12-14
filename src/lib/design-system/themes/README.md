# Themes

Theme definitions and helpers (framework-agnostic):
- light.ts, dark.ts: theme objects.
- types.ts: Theme interfaces.
- context.ts: Svelte-agnostic context helpers (keys/get/set).

Usage:
- ThemeProvider/Consumer live outside design-system; they should call applyThemeToDOM/themeToCSSVars from utils.
- Import Theme/ThemeName from design-system when typing components.
