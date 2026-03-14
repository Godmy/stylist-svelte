import { COLORS_SCALES_AMBER } from '../../../tokens/colors-scales/amber';
import { COLORS_SCALES_BLUE } from '../../../tokens/colors-scales/blue';
import { COLORS_SCALES_GRAY } from '../../../tokens/colors-scales/gray';
import { COLORS_SCALES_GREEN } from '../../../tokens/colors-scales/green';
import { COLORS_SCALES_NEUTRAL } from '../../../tokens/colors-scales/neutral';
import { COLORS_SCALES_RED } from '../../../tokens/colors-scales/red';
import { COLORS_SCALES_SLATE } from '../../../tokens/colors-scales/slate';
import { THEME_RADIUS } from '../../../tokens/border-radius';
import { THEME_BOX_SHADOW } from '../../../tokens/box-shadows';
import { COLORS } from '../../../tokens/colors';
import { DIRECTIONAL_GRADIENTS, GRADIENTS, RADIAL_GRADIENTS } from '../../../tokens/gradients';
import { ANIMATIONS, DURATION, TRANSITION, TRANSITION_EASING } from '../../../tokens/motion';
import { OPACITY } from '../../../tokens/opacity';
import { Size } from '../../../tokens/size';
import { THEME_SPACING } from '../../../tokens/spacing';
import { Z_INDEX } from '../../../tokens/z-index';
import type { Theme } from '../../../contracts/theme';
import { THEME_TYPOGRAPHY } from '../../../contracts/theme-typography';

export const lightTheme: Theme = {
	name: 'light',
	colors: {
		primary: COLORS_SCALES_BLUE,
		secondary: COLORS_SCALES_SLATE,
		success: COLORS_SCALES_GREEN,
		info: COLORS_SCALES_BLUE,
		warning: COLORS_SCALES_AMBER,
		error: COLORS_SCALES_RED,
		danger: COLORS_SCALES_RED,
		neutral: COLORS_SCALES_NEUTRAL,
		background: {
			primary: COLORS.white,
			secondary: COLORS_SCALES_GRAY[50],
			tertiary: COLORS_SCALES_GRAY[100],
			default: COLORS.white,
			subtle: COLORS_SCALES_GRAY[50]
		},
		text: {
			primary: COLORS_SCALES_SLATE[900],
			secondary: COLORS_SCALES_SLATE[600],
			tertiary: COLORS_SCALES_SLATE[500],
			default: COLORS_SCALES_SLATE[900],
			inverse: COLORS.white
		},
		border: {
			primary: COLORS_SCALES_SLATE[200],
			secondary: COLORS_SCALES_SLATE[300],
			tertiary: COLORS_SCALES_SLATE[100]
		}
	},
	spacing: THEME_SPACING,
	typography: THEME_TYPOGRAPHY,
	borderRadius: THEME_RADIUS,
	boxShadow: THEME_BOX_SHADOW,
	size: Size,
	opacity: OPACITY,
	zIndex: Z_INDEX,
	motion: {
		duration: DURATION,
		easing: TRANSITION_EASING,
		transitions: TRANSITION,
		animations: ANIMATIONS
	},
	gradients: {
		types: GRADIENTS,
		directional: DIRECTIONAL_GRADIENTS,
		radial: RADIAL_GRADIENTS
	}
};






