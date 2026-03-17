import { COLORS_SCALES_AMBER } from '$stylist/themes/tokens/colors-scales/amber';
import { COLORS_SCALES_BLUE } from '$stylist/themes/tokens/colors-scales/blue';
import { COLORS_SCALES_NEUTRAL } from '$stylist/themes/tokens/colors-scales/neutral';
import { COLORS_SCALES_RED } from '$stylist/themes/tokens/colors-scales/red';
import { COLORS_SCALES_SLATE } from '$stylist/themes/tokens/colors-scales/slate';
import { COLORS_SCALES_TEAL } from '$stylist/themes/tokens/colors-scales/teal';
import { THEME_RADIUS } from '$stylist/themes/tokens/border-radius';
import { THEME_BOX_SHADOW } from '$stylist/themes/tokens/box-shadows';
import { COLORS } from '$stylist/themes/tokens/colors';
import { DIRECTIONAL_GRADIENTS, GRADIENTS, RADIAL_GRADIENTS } from '$stylist/themes/tokens/gradients';
import { ANIMATIONS, DURATION, TRANSITION, TRANSITION_EASING } from '$stylist/themes/tokens/motion';
import { OPACITY } from '$stylist/themes/tokens/opacity';
import { Size } from '$stylist/themes/tokens/size';
import { THEME_SPACING } from '$stylist/themes/tokens/spacing';
import { Z_INDEX } from '$stylist/themes/tokens/z-index';
import type { Theme } from '$stylist/themes/contracts/theme';
import { THEME_TYPOGRAPHY } from '$stylist/themes/contracts/theme-typography';

export const defaultTheme: Theme = {
	name: 'light',
	colors: {
		primary: COLORS_SCALES_BLUE,
		secondary: COLORS_SCALES_SLATE,
		success: COLORS_SCALES_TEAL,
		info: COLORS_SCALES_BLUE,
		warning: COLORS_SCALES_AMBER,
		error: COLORS_SCALES_RED,
		danger: COLORS_SCALES_RED,
		neutral: COLORS_SCALES_NEUTRAL,
		background: {
			primary: COLORS.white,
			secondary: COLORS_SCALES_SLATE[50],
			tertiary: COLORS_SCALES_SLATE[100],
			default: COLORS.white,
			subtle: COLORS_SCALES_SLATE[50]
		},
		text: {
			primary: COLORS_SCALES_SLATE[900],
			secondary: COLORS_SCALES_SLATE[600],
			tertiary: COLORS_SCALES_SLATE[500],
			default: COLORS_SCALES_SLATE[900],
			inverse: COLORS.white
		},
		border: {
			primary: COLORS_SCALES_SLATE[300],
			secondary: COLORS_SCALES_SLATE[200],
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




