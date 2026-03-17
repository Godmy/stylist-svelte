import type { ThemeSchemeId } from '$stylist/themes/contracts/theme-scheme-id';

export type ThemeScheme = {
	id: ThemeSchemeId;
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



