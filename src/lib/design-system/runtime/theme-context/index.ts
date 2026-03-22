import { getContext, hasContext, setContext } from 'svelte';

import type { Theme } from '$stylist/design-system/contracts/theme/theme';
import type { TokenThemeName } from '$stylist/design-system/tokens/theme/theme-name';

export interface ThemeContext {
	theme: Theme;
	themeName: TokenThemeName;
	setTheme: (themeName: TokenThemeName) => void;
}

export const THEME_CONTEXT_KEY = Symbol('THEME_CONTEXT');

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
	return getContext<ThemeContext>(THEME_CONTEXT_KEY);
}

export function getThemeContextOptional(): ThemeContext | undefined {
	return hasContext(THEME_CONTEXT_KEY) ? getContext<ThemeContext>(THEME_CONTEXT_KEY) : undefined;
}
