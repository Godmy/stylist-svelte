import type { TokenSchemeId } from '$stylist/design-system/tokens/theme/theme-scheme-id';

export type ThemeScheme = {
	id: TokenSchemeId;
	label: string;
	description: string;
	colors: {
		bg: string;
		surface: string;
		text: string;
		muted: string;
		line: string;
		accent: string;
	};
};



