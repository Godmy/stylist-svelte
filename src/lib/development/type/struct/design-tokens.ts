import type { THEME_MODE_LIGHT } from '$stylist/theme/const/struct/theme-mode-light';
import type { THEME_MODE_DARK } from '$stylist/theme/const/struct/theme-mode-dark';

type Theme = typeof THEME_MODE_LIGHT;

export type Props = {
	/** Theme mode: light or dark */
	theme?: 'light' | 'dark';
	/** Show design tokens section */
	showTokens?: boolean;
	/** Show color palette */
	showColorPalette?: boolean;
	/** Show spacing tokens */
	showSpacing?: boolean;
	/** Show typography tokens */
	showTypography?: boolean;
	/** Show border radius tokens */
	showBorderRadius?: boolean;
	/** Show shadow tokens */
	showShadows?: boolean;
};

export type { Theme };
