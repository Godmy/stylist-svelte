import type { Theme } from '../../theme/interface';
import { darkTheme, lightTheme } from '../../theme';
import type { ThemeName } from '../../theme/name';
import type { ThemeSchemeId } from '../../schemes';
import { THEME_SCHEMES_BY_ID } from '../../schemes';

function stringEntries(value: object): [string, string][] {
	return Object.entries(value as Record<string, string>);
}

export function themeToCSSVars(theme: Theme): Record<string, string> {
	const vars: Record<string, string> = {};

	stringEntries(theme.colors.primary).forEach(([shade, color]) => {
		vars[`color-primary-${shade}`] = color;
	});

	stringEntries(theme.colors.secondary).forEach(([shade, color]) => {
		vars[`color-secondary-${shade}`] = color;
	});

	stringEntries(theme.colors.success).forEach(([shade, color]) => {
		vars[`color-success-${shade}`] = color;
	});

	stringEntries(theme.colors.warning).forEach(([shade, color]) => {
		vars[`color-warning-${shade}`] = color;
	});

	stringEntries(theme.colors.danger).forEach(([shade, color]) => {
		vars[`color-danger-${shade}`] = color;
	});

	stringEntries(theme.colors.neutral).forEach(([shade, color]) => {
		vars[`color-neutral-${shade}`] = color;
	});

	vars['color-background-primary'] = theme.colors.background.primary;
	vars['color-background-secondary'] = theme.colors.background.secondary;
	vars['color-background-tertiary'] = theme.colors.background.tertiary;

	vars['color-text-primary'] = theme.colors.text.primary;
	vars['color-text-secondary'] = theme.colors.text.secondary;
	vars['color-text-tertiary'] = theme.colors.text.tertiary;
	vars['color-text-inverse'] = theme.colors.text.inverse;

	vars['color-border-primary'] = theme.colors.border.primary;
	vars['color-border-secondary'] = theme.colors.border.secondary;
	vars['color-border-tertiary'] = theme.colors.border.tertiary;

	stringEntries(theme.spacing).forEach(([key, value]) => {
		vars[`spacing-${key}`] = value;
	});

	stringEntries(theme.typography.fontSize).forEach(([key, value]) => {
		vars[`font-size-${key}`] = value;
	});

	stringEntries(theme.typography.fontWeight).forEach(([key, value]) => {
		vars[`font-weight-${key}`] = value;
	});

	stringEntries(theme.typography.lineHeight).forEach(([key, value]) => {
		vars[`line-height-${key}`] = value;
	});

	vars['font-family-sans'] = theme.typography.fontFamily;

	stringEntries(theme.borderRadius).forEach(([key, value]) => {
		vars[`radius-${key}`] = value;
	});

	stringEntries(theme.boxShadow).forEach(([key, value]) => {
		vars[`shadow-${key}`] = value;
	});

	// Compatibility aliases for existing consumers while the codebase converges
	vars['color-bg-primary'] = vars['color-background-primary'];
	vars['color-bg-secondary'] = vars['color-background-secondary'];
	vars['color-bg-tertiary'] = vars['color-background-tertiary'];

	vars['color-border-default'] = vars['color-border-primary'];
	vars['color-border-subtle'] = vars['color-border-tertiary'];
	vars['color-border-base'] = vars['color-border-secondary'];
	vars['color-border'] = vars['color-border-primary'];

	vars['color-text-muted'] = vars['color-text-secondary'];
	vars['color-text-disabled'] = vars['color-text-tertiary'];

	vars['color-surface'] = vars['color-background-primary'];
	vars['color-surface-primary'] = vars['color-background-primary'];
	vars['color-surface-secondary'] = vars['color-background-secondary'];
	vars['color-surface-muted'] = vars['color-background-tertiary'];
	vars['color-surface-hover'] = vars['color-background-secondary'];
	vars['color-background-surface'] = vars['color-background-primary'];
	vars['color-background-hover'] = vars['color-background-secondary'];

	return vars;
}

export function applyCSSVars(element: HTMLElement, vars: Record<string, string>): void {
	Object.entries(vars).forEach(([key, value]) => {
		element.style.setProperty(`--${key}`, value);
	});
}

export function removeCSSVars(element: HTMLElement, varNames: string[]): void {
	varNames.forEach((name) => {
		element.style.removeProperty(`--${name}`);
	});
}

export function applyThemeToDOM(
	theme: Theme,
	element: HTMLElement = document.documentElement
): void {
	const vars = themeToCSSVars(theme);
	applyCSSVars(element, vars);
	element.setAttribute('data-theme', theme.name);
}

export type ThemeMode = ThemeName | 'system';

export function resolveThemeMode(mode: ThemeMode): ThemeName {
	if (mode === 'system') {
		if (typeof window === 'undefined') {
			return 'light';
		}
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	}

	return mode;
}

export function applySchemeToDOM(
	schemeId: ThemeSchemeId,
	element: HTMLElement = document.documentElement
): void {
	const scheme = THEME_SCHEMES_BY_ID[schemeId];
	if (!scheme) {
		return;
	}

	// Scheme-local vars (used by lightweight UI pieces and stories)
	element.style.setProperty('--app-bg', scheme.colors.bg);
	element.style.setProperty('--app-surface', scheme.colors.surface);
	element.style.setProperty('--app-text', scheme.colors.text);
	element.style.setProperty('--app-muted', scheme.colors.muted);
	element.style.setProperty('--app-line', scheme.colors.line);
	element.style.setProperty('--app-accent', scheme.colors.accent);

	// Semantic aliases consumed by design-system/components
	element.style.setProperty('--accent', scheme.colors.accent);
	element.style.setProperty('--surface', scheme.colors.surface);
	element.style.setProperty('--text', scheme.colors.text);
	element.style.setProperty('--muted', scheme.colors.muted);
	element.style.setProperty('--line', scheme.colors.line);

	element.style.setProperty('--color-background-primary', scheme.colors.bg);
	element.style.setProperty('--color-background-secondary', scheme.colors.surface);
	element.style.setProperty('--color-background-tertiary', scheme.colors.surface);
	element.style.setProperty('--color-background-hover', scheme.colors.surface);
	element.style.setProperty('--color-background-surface', scheme.colors.surface);

	element.style.setProperty('--color-bg-primary', scheme.colors.bg);
	element.style.setProperty('--color-bg-secondary', scheme.colors.surface);
	element.style.setProperty('--color-bg-tertiary', scheme.colors.surface);

	element.style.setProperty('--color-text-primary', scheme.colors.text);
	element.style.setProperty('--color-text-secondary', scheme.colors.muted);
	element.style.setProperty('--color-text-tertiary', scheme.colors.muted);
	element.style.setProperty('--color-text-muted', scheme.colors.muted);
	element.style.setProperty('--color-text-disabled', scheme.colors.muted);

	element.style.setProperty('--color-border-primary', scheme.colors.line);
	element.style.setProperty('--color-border-secondary', scheme.colors.line);
	element.style.setProperty('--color-border-tertiary', scheme.colors.line);
	element.style.setProperty('--color-border-default', scheme.colors.line);
	element.style.setProperty('--color-border-subtle', scheme.colors.line);
	element.style.setProperty('--color-border-base', scheme.colors.line);
	element.style.setProperty('--color-border', scheme.colors.line);

	element.style.setProperty('--color-surface', scheme.colors.surface);
	element.style.setProperty('--color-surface-primary', scheme.colors.surface);
	element.style.setProperty('--color-surface-secondary', scheme.colors.surface);
	element.style.setProperty('--color-surface-muted', scheme.colors.bg);
	element.style.setProperty('--color-surface-hover', scheme.colors.surface);

	element.style.setProperty('--color-primary-500', scheme.colors.accent);
	element.style.setProperty('--color-primary-600', scheme.colors.accent);
	element.style.setProperty('--color-primary-700', scheme.colors.accent);
	element.style.setProperty('--color-info-500', scheme.colors.accent);
	element.style.setProperty('--color-info-600', scheme.colors.accent);
	element.setAttribute('data-ui-theme', scheme.id);
}

export function applyThemeModeAndScheme(
	mode: ThemeMode,
	schemeId: ThemeSchemeId,
	element: HTMLElement = document.documentElement
): ThemeName {
	const resolvedMode = resolveThemeMode(mode);
	const theme = resolvedMode === 'dark' ? darkTheme : lightTheme;

	applyThemeToDOM(theme, element);
	applySchemeToDOM(schemeId, element);
	element.classList.remove('light', 'dark');
	element.classList.add(resolvedMode);

	return resolvedMode;
}

export function generateThemeCSS(theme: Theme, selector = ':root'): string {
	const vars = themeToCSSVars(theme);
	const cssVars = Object.entries(vars)
		.map(([key, value]) => `  --${key}: ${value};`)
		.join('\n');

	return `${selector} {\n${cssVars}\n}`;
}
