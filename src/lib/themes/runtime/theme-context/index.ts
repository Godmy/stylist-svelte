import { getContext, setContext } from 'svelte';
import type { Theme } from '$stylist/design-system/contracts/theme/theme';
import type { TokenThemeName } from '$stylist/design-system/tokens/theme/theme-name';

export const THEME_CONTEXT_KEY = Symbol('stylist-theme');

export interface ThemeContext {
	theme: Theme;
	themeName: TokenThemeName;
	setTheme: (themeName: TokenThemeName) => void;
}

export function setThemeContext(
	theme: Theme,
	themeName: TokenThemeName,
	setThemeFn: (name: TokenThemeName) => void
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



