import type { Theme } from '../../theme/interface';
import { darkTheme, lightTheme } from '../../theme';
import type { ThemeName } from '../../theme/name';
import type { ThemeSchemeId } from '../../schemes';
import { THEME_SCHEMES_BY_ID } from '../../schemes';

function stringEntries(value: object): [string, string][] {
	return Object.entries(value as Record<string, string>);
}

function flattenObject(
	obj: any,
	prefix = '',
	result: Record<string, string> = {}
): Record<string, string> {
	for (const [key, value] of Object.entries(obj)) {
		const newKey = prefix ? `${prefix}-${key}` : key;

		if (value && typeof value === 'object' && !Array.isArray(value)) {
			flattenObject(value, newKey, result);
		} else {
			result[newKey] = String(value);
		}
	}

	return result;
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
		vars[`color-NEUTRAL-${shade}`] = color;
	});

	vars['color-bg-primary'] = theme.colors.background.primary;
	vars['color-bg-secondary'] = theme.colors.background.secondary;
	vars['color-bg-tertiary'] = theme.colors.background.tertiary;

	vars['color-text-primary'] = theme.colors.text.primary;
	vars['color-text-secondary'] = theme.colors.text.secondary;
	vars['color-text-tertiary'] = theme.colors.text.tertiary;
	vars['color-text-inverse'] = theme.colors.text.inverse;

	vars['color-border-primary'] = theme.colors.border.primary;
	vars['color-border-secondary'] = theme.colors.border.secondary;
	vars['color-border-tertiary'] = theme.colors.border.tertiary;

	stringEntries(theme.spacing).forEach(([key, value]) => {
		vars[`SPACING-${key}`] = value;
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
		vars[`SHADOW-${key}`] = value;
	});

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

	element.style.setProperty('--app-bg', scheme.colors.bg);
	element.style.setProperty('--app-surface', scheme.colors.surface);
	element.style.setProperty('--app-text', scheme.colors.text);
	element.style.setProperty('--app-muted', scheme.colors.muted);
	element.style.setProperty('--app-line', scheme.colors.line);
	element.style.setProperty('--app-accent', scheme.colors.accent);
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
		.join('n');

	return `${selector} {\n${cssVars}\n}`;
}
