import type { Theme } from '$stylist/design-system/contracts/theme/theme';
import { darkTheme, lightTheme } from '$stylist/design-system/defaults/theme';
import type { TokenThemeName } from '$stylist/design-system/tokens/theme/theme-name';
import type { TokenSchemeId } from '$stylist/design-system/tokens/theme/theme-scheme-id';
import { THEME_SCHEMES_BY_ID } from '$stylist/design-system/defaults/theme/theme-schemes';

function stringEntries(value: object): [string, string][] {
	return Object.entries(value as Record<string, string>);
}

function toKebabCase(value: string): string {
	return value.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
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

	stringEntries(theme.colors.info).forEach(([shade, color]) => {
		vars[`color-info-${shade}`] = color;
	});

	stringEntries(theme.colors.warning).forEach(([shade, color]) => {
		vars[`color-warning-${shade}`] = color;
	});

	stringEntries(theme.colors.error).forEach(([shade, color]) => {
		vars[`color-error-${shade}`] = color;
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
	vars['color-background-default'] = theme.colors.background.default;
	vars['color-background-subtle'] = theme.colors.background.subtle;

	vars['color-text-primary'] = theme.colors.text.primary;
	vars['color-text-secondary'] = theme.colors.text.secondary;
	vars['color-text-tertiary'] = theme.colors.text.tertiary;
	vars['color-text-default'] = theme.colors.text.default;
	vars['color-text-inverse'] = theme.colors.text.inverse;

	vars['color-border-primary'] = theme.colors.border.primary;
	vars['color-border-secondary'] = theme.colors.border.secondary;
	vars['color-border-tertiary'] = theme.colors.border.tertiary;

	stringEntries(theme.spacing).forEach(([key, value]) => {
		vars[`spacing-${key}`] = value;
	});

	stringEntries(theme.size).forEach(([key, value]) => {
		vars[`size-${key}`] = value;
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

	stringEntries(theme.typography.letterSpacing).forEach(([key, value]) => {
		vars[`letter-spacing-${key}`] = value;
	});

	vars['font-family-sans'] = theme.typography.fontFamily;

	stringEntries(theme.borderRadius).forEach(([key, value]) => {
		vars[`radius-${key}`] = value;
		vars[`border-radius-${key}`] = value;
	});

	stringEntries(theme.boxShadow).forEach(([key, value]) => {
		vars[`shadow-${key}`] = value;
	});

	stringEntries(theme.opacity).forEach(([key, value]) => {
		vars[`opacity-${key}`] = value;
	});

	stringEntries(theme.zIndex).forEach(([key, value]) => {
		vars[`z-index-${toKebabCase(key)}`] = value;
	});

	stringEntries(theme.motion.duration).forEach(([key, value]) => {
		vars[`duration-${key}`] = value;
	});

	stringEntries(theme.motion.easing).forEach(([key, value]) => {
		vars[`easing-${toKebabCase(key)}`] = value;
	});

	stringEntries(theme.motion.transitions).forEach(([key, value]) => {
		vars[`transition-${toKebabCase(key)}`] = value;
	});

	stringEntries(theme.motion.animations).forEach(([key, value]) => {
		vars[`animation-${toKebabCase(key)}`] = value;
	});

	stringEntries(theme.gradients.types).forEach(([key, value]) => {
		const kebabKey = toKebabCase(key);
		vars[`gradient-${kebabKey}`] = value;
		vars[`gradient-type-${kebabKey}`] = value;
	});

	stringEntries(theme.gradients.directional).forEach(([key, value]) => {
		vars[`gradient-directional-${toKebabCase(key)}`] = value;
	});

	stringEntries(theme.gradients.radial).forEach(([key, value]) => {
		vars[`gradient-radial-${toKebabCase(key)}`] = value;
	});

	return vars;
}

export function applyCSSVars(element: HTMLElement, vars: Record<string, string>): void {
	Object.entries(vars).forEach(([key, value]) => {
		element.style.setProperty(`--${key}`, value);
	});
}

export function setCSSVariables(vars: Record<string, string>): void {
	if (typeof document === 'undefined') {
		return;
	}

	applyCSSVars(document.documentElement, vars);
}

export function getCSSVariable(key: string): string | null {
	if (typeof window === 'undefined') {
		return null;
	}

	return getComputedStyle(document.documentElement).getPropertyValue(key);
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

export type ThemeMode = TokenThemeName | 'system';

const THEMES: Record<TokenThemeName, Theme> = {
	light: lightTheme,
	dark: darkTheme
};

const THEME_NAMES = Object.keys(THEMES) as TokenThemeName[];

export function supportsTheme(theme: TokenThemeName): theme is TokenThemeName {
	return THEME_NAMES.includes(theme);
}

export function getCurrentTheme(): TokenThemeName {
	if (typeof window === 'undefined') {
		return 'light';
	}

	const stored = localStorage.getItem('stylist-theme');
	if (stored && supportsTheme(stored as TokenThemeName)) {
		return stored as TokenThemeName;
	}

	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function toggleTheme(): TokenThemeName {
	const current = getCurrentTheme();
	const next = current === 'light' ? 'dark' : 'light';

	if (typeof window !== 'undefined') {
		applyThemeToDOM(THEMES[next]);
		localStorage.setItem('stylist-theme', next);
		document.documentElement.classList.remove(...THEME_NAMES);
		document.documentElement.classList.add(next);
	}

	return next;
}

export function isDarkTheme(theme?: TokenThemeName): boolean {
	return (theme ?? getCurrentTheme()) === 'dark';
}

export function normalizeClassNames(...classes: (string | boolean | null | undefined)[]): string {
	return classes
		.filter(Boolean)
		.map((value) => String(value).trim())
		.join(' ')
		.replace(/\s+/g, ' ')
		.trim();
}

export function mergeStyles(...styles: (string | null | undefined)[]): string {
	return styles.filter(Boolean).join('; ');
}

export function resolveThemeMode(mode: ThemeMode): TokenThemeName {
	if (mode === 'system') {
		if (typeof window === 'undefined') {
			return 'light';
		}
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	}

	return mode;
}

export function applySchemeToDOM(
	schemeId: TokenSchemeId,
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

	element.style.setProperty('--color-background-primary', scheme.colors.bg);
	element.style.setProperty('--color-background-secondary', scheme.colors.surface);
	element.style.setProperty('--color-background-tertiary', scheme.colors.surface);
	element.style.setProperty('--color-background-default', scheme.colors.bg);
	element.style.setProperty('--color-background-subtle', scheme.colors.surface);

	element.style.setProperty('--color-text-primary', scheme.colors.text);
	element.style.setProperty('--color-text-secondary', scheme.colors.muted);
	element.style.setProperty('--color-text-tertiary', scheme.colors.muted);
	element.style.setProperty('--color-text-default', scheme.colors.text);

	element.style.setProperty('--color-border-primary', scheme.colors.line);
	element.style.setProperty('--color-border-secondary', scheme.colors.line);
	element.style.setProperty('--color-border-tertiary', scheme.colors.line);

	element.style.setProperty('--color-primary-500', scheme.colors.accent);
	element.style.setProperty('--color-primary-600', scheme.colors.accent);
	element.style.setProperty('--color-primary-700', scheme.colors.accent);
	element.style.setProperty('--color-info-50', scheme.colors.accent);
	element.style.setProperty('--color-info-100', scheme.colors.accent);
	element.style.setProperty('--color-info-200', scheme.colors.accent);
	element.style.setProperty('--color-info-300', scheme.colors.accent);
	element.style.setProperty('--color-info-400', scheme.colors.accent);
	element.style.setProperty('--color-info-500', scheme.colors.accent);
	element.style.setProperty('--color-info-600', scheme.colors.accent);
	element.style.setProperty('--color-info-700', scheme.colors.accent);
	element.style.setProperty('--color-info-800', scheme.colors.accent);
	element.style.setProperty('--color-info-900', scheme.colors.accent);
	element.setAttribute('data-ui-theme', scheme.id);
}

export function applyThemeModeAndScheme(
	mode: ThemeMode,
	schemeId: TokenSchemeId,
	element: HTMLElement = document.documentElement
): TokenThemeName {
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

export interface BaseComponentConfig {
	theme: Theme;
	className?: string;
	style?: string;
	animation?: boolean;
	responsive?: boolean;
}

export interface CSSVariableConfig {
	[key: string]: string;
}
