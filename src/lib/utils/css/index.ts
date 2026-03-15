import { getCSSVariable, getCurrentTheme, isDarkTheme, mergeStyles, normalizeClassNames, setCSSVariables, supportsTheme, toggleTheme } from '../../themes';
import type { Theme } from '../../themes';

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
export { getCSSVariable, getCurrentTheme, isDarkTheme, mergeStyles, normalizeClassNames, setCSSVariables, supportsTheme, toggleTheme };
