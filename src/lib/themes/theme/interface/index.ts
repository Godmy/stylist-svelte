import type { ThemeColors } from '../colors';

export interface Theme {
	name: string;
	colors: ThemeColors;
	spacing: Record<string, string>;
	typography: {
		fontFamily: string;
		fontSize: Record<string, string>;
		fontWeight: Record<string, string>;
		lineHeight: Record<string, string>;
	};
	borderRadius: Record<string, string>;
	boxShadow: Record<string, string>;
}
