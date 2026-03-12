import { getContext, setContext } from 'svelte';
import type { Theme } from '../../contracts/theme';
import type { ThemeName } from '../../contracts/theme-name';

export const THEME_CONTEXT_KEY = Symbol('stylist-theme');

export interface ThemeContext {
	theme: Theme;
	themeName: ThemeName;
	setTheme: (themeName: ThemeName) => void;
}

export function setThemeContext(
	theme: Theme,
	themeName: ThemeName,
	setThemeFn: (name: ThemeName) => void
): ThemeContext {
	const context: ThemeContext = {
		theme,
		themeName,
		setTheme: setThemeFn
	};

	setContext(THEME_CONTEXT_KEY, context);
	return context;
}

export function getThemeContext(): ThemeContext {
	const context = getContext<ThemeContext>(THEME_CONTEXT_KEY);

	if (!context) {
		throw new Error(
			'Theme context not found. Make sure to wrap your component with <ThemeProvider>.'
		);
	}

	return context;
}

export function getThemeContextOptional(): ThemeContext | undefined {
	return getContext<ThemeContext>(THEME_CONTEXT_KEY);
}

