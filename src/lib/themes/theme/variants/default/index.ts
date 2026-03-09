import { COLOR_AMBER } from '../../../colors/values/color-amber';
import { COLOR_BLUE } from '../../../colors/values/color-blue';
import { COLOR_NEUTRAL } from '../../../colors/values/color-neutral';
import { COLOR_RED } from '../../../colors/values/color-red';
import { COLOR_SLATE } from '../../../colors/values/color-slate';
import { COLOR_TEAL } from '../../../colors/values/color-teal';
import type { Theme } from '../../interface';
import { THEME_BOX_SHADOW } from '../shadows';
import { THEME_SPACING, THEME_RADIUS } from '../scales';
import { THEME_TYPOGRAPHY } from '../typography';

export const defaultTheme: Theme = {
	name: 'light',
	colors: {
		primary: COLOR_BLUE,
		secondary: COLOR_SLATE,
		success: COLOR_TEAL,
		warning: COLOR_AMBER,
		danger: COLOR_RED,
		neutral: COLOR_NEUTRAL,
		background: {
			primary: '#ffffff',
			secondary: COLOR_SLATE[50],
			tertiary: COLOR_SLATE[100]
		},
		text: {
			primary: COLOR_SLATE[900],
			secondary: COLOR_SLATE[600],
			tertiary: COLOR_SLATE[500],
			inverse: '#ffffff'
		},
		border: {
			primary: COLOR_SLATE[300],
			secondary: COLOR_SLATE[200],
			tertiary: COLOR_SLATE[100]
		}
	},
	spacing: THEME_SPACING,
	typography: THEME_TYPOGRAPHY,
	borderRadius: THEME_RADIUS,
	boxShadow: THEME_BOX_SHADOW
};
