import { COLOR_AMBER } from '../../../colors/values/color-amber';
import { COLOR_BLUE } from '../../../colors/values/color-blue';
import { COLOR_GREEN } from '../../../colors/values/color-green';
import { COLOR_NEUTRAL } from '../../../colors/values/color-neutral';
import { COLOR_RED } from '../../../colors/values/color-red';
import { COLOR_SLATE } from '../../../colors/values/color-slate';
import type { Theme } from '../../interface';
import { THEME_BOX_SHADOW } from '../shadows';
import { THEME_SPACING, THEME_RADIUS } from '../scales';
import { THEME_TYPOGRAPHY } from '../typography';

export const lightTheme: Theme = {
	name: 'light',
	colors: {
		primary: COLOR_BLUE,
		secondary: COLOR_SLATE,
		success: COLOR_GREEN,
		warning: COLOR_AMBER,
		danger: COLOR_RED,
		neutral: COLOR_NEUTRAL,
		background: {
			primary: '#ffffff',
			secondary: '#f9fafb',
			tertiary: '#f3f4f6'
		},
		text: {
			primary: COLOR_SLATE[900],
			secondary: COLOR_SLATE[600],
			tertiary: COLOR_SLATE[500],
			inverse: '#ffffff'
		},
		border: {
			primary: COLOR_SLATE[200],
			secondary: COLOR_SLATE[300],
			tertiary: COLOR_SLATE[100]
		}
	},
	spacing: THEME_SPACING,
	typography: THEME_TYPOGRAPHY,
	borderRadius: THEME_RADIUS,
	boxShadow: THEME_BOX_SHADOW
};
