import { COLORS_SCALES_AMBER } from '$stylist/design-system/tokens/theme/colors-scales/amber';
import { COLORS_SCALES_BLUE } from '$stylist/design-system/tokens/theme/colors-scales/blue';
import { COLORS_SCALES_NEUTRAL } from '$stylist/design-system/tokens/theme/colors-scales/neutral';
import { COLORS_SCALES_RED } from '$stylist/design-system/tokens/theme/colors-scales/red';
import { COLORS_SCALES_SLATE } from '$stylist/design-system/tokens/theme/colors-scales/slate';
import { COLORS_SCALES_TEAL } from '$stylist/design-system/tokens/theme/colors-scales/teal';
import { THEME_TYPOGRAPHY } from '$stylist/design-system/contracts/theme/theme-typography';
import { THEME_RADIUS } from '$stylist/design-system/tokens/theme/border-radius';
import { THEME_BOX_SHADOW } from '$stylist/design-system/tokens/theme/box-shadows';
import { DIRECTIONAL_GRADIENTS, GRADIENTS, RADIAL_GRADIENTS } from '$stylist/design-system/tokens/theme/gradients';
import { ANIMATIONS, DURATION, TRANSITION, TRANSITION_EASING } from '$stylist/design-system/tokens/theme/motion';
import { OPACITY } from '$stylist/design-system/tokens/theme/opacity';
import { Size } from '$stylist/design-system/tokens/theme/size';
import { THEME_SPACING } from '$stylist/design-system/tokens/theme/spacing';
import { Z_INDEX } from '$stylist/design-system/tokens/theme/z-index';
import type { Theme } from '$stylist/design-system/contracts/theme/theme';

export const darkTheme: Theme = {
	name: 'dark',
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
			primary: COLORS_SCALES_SLATE[900],
			secondary: COLORS_SCALES_SLATE[800],
			tertiary: COLORS_SCALES_SLATE[700],
			default: COLORS_SCALES_SLATE[900],
			subtle: COLORS_SCALES_SLATE[800]
		},
		text: {
			primary: COLORS_SCALES_SLATE[50],
			secondary: COLORS_SCALES_SLATE[300],
			tertiary: COLORS_SCALES_SLATE[400],
			default: COLORS_SCALES_SLATE[50],
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






