import { COLORS_SCALES_AMBER } from '../../../tokens/colors-scales/amber';
import { COLORS_SCALES_BLUE } from '../../../tokens/colors-scales/blue';
import { COLORS_SCALES_NEUTRAL } from '../../../tokens/colors-scales/neutral';
import { COLORS_SCALES_RED } from '../../../tokens/colors-scales/red';
import { COLORS_SCALES_SLATE } from '../../../tokens/colors-scales/slate';
import { COLORS_SCALES_TEAL } from '../../../tokens/colors-scales/teal';
import { THEME_RADIUS } from '../../../tokens/border-radius';
import { THEME_BOX_SHADOW } from '../../../tokens/box-shadows';
import { THEME_SPACING } from '../../../tokens/spacing';
import type { Theme } from '../../../contracts/theme';
import { THEME_TYPOGRAPHY } from '../../../contracts/theme-typography';

export const darkTheme: Theme = {
	name: 'dark',
	colors: {
		primary: COLORS_SCALES_BLUE,
		secondary: COLORS_SCALES_SLATE,
		success: COLORS_SCALES_TEAL,
		warning: COLORS_SCALES_AMBER,
		danger: COLORS_SCALES_RED,
		neutral: COLORS_SCALES_NEUTRAL,
		background: {
			primary: COLORS_SCALES_SLATE[900],
			secondary: COLORS_SCALES_SLATE[800],
			tertiary: COLORS_SCALES_SLATE[700]
		},
		text: {
			primary: COLORS_SCALES_SLATE[50],
			secondary: COLORS_SCALES_SLATE[300],
			tertiary: COLORS_SCALES_SLATE[400],
			inverse: COLORS_SCALES_SLATE[900]
		},
		border: {
			primary: COLORS_SCALES_SLATE[600],
			secondary: COLORS_SCALES_SLATE[700],
			tertiary: COLORS_SCALES_SLATE[800]
		}
	},
	spacing: THEME_SPACING,
	typography: THEME_TYPOGRAPHY,
	borderRadius: THEME_RADIUS,
	boxShadow: THEME_BOX_SHADOW
};


