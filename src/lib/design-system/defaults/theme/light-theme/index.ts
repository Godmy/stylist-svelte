import { COLORS_SCALES_AMBER } from '$stylist/design-system/defaults/theme/colors-scales/amber';
import { COLORS_SCALES_BLUE } from '$stylist/design-system/defaults/theme/colors-scales/blue';
import { COLORS_SCALES_GRAY } from '$stylist/design-system/defaults/theme/colors-scales/gray';
import { COLORS_SCALES_GREEN } from '$stylist/design-system/defaults/theme/colors-scales/green';
import { COLORS_SCALES_NEUTRAL } from '$stylist/design-system/defaults/theme/colors-scales/neutral';
import { COLORS_SCALES_RED } from '$stylist/design-system/defaults/theme/colors-scales/red';
import { COLORS_SCALES_SLATE } from '$stylist/design-system/defaults/theme/colors-scales/slate';
import { THEME_RADIUS } from '$stylist/design-system/defaults/theme/border-radius';
import { THEME_BOX_SHADOW } from '$stylist/design-system/defaults/theme/box-shadows';
import { COLORS } from '$stylist/design-system/defaults/theme/colors';
import { DIRECTIONAL_GRADIENTS } from '$stylist/design-system/defaults/theme/gradient-directional';
import { RADIAL_GRADIENTS } from '$stylist/design-system/defaults/theme/gradient-radial';
import { GRADIENTS } from '$stylist/design-system/defaults/theme/gradient-type';
import { TOKEN_ANIMATION } from '$stylist/design-system/tokens/interaction/animation';
import { TOKEN_DURATION } from '$stylist/design-system/tokens/interaction/duration';
import { TRANSITION } from '$stylist/design-system/defaults/theme/transitions';
import { TOKEN_EASING } from '$stylist/design-system/tokens/architecture/easing';
import { TOKEN_OPACITY } from '$stylist/design-system/tokens/architecture/opacity';
import { Size } from '$stylist/design-system/defaults/theme/size';
import { THEME_SPACING } from '$stylist/design-system/defaults/theme/spacing';
import { TOKEN_Z_INDEX } from '$stylist/design-system/tokens/architecture/z-index';
import type { Theme } from '$stylist/design-system/contracts/theme/theme';
import { THEME_TYPOGRAPHY } from '$stylist/design-system/contracts/theme/theme-typography';

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
	opacity: TOKEN_OPACITY,
	zIndex: TOKEN_Z_INDEX,
	motion: {
		duration: TOKEN_DURATION,
		easing: TOKEN_EASING,
		transitions: TRANSITION,
		animations: TOKEN_ANIMATION
	},
	gradients: {
		types: GRADIENTS,
		directional: DIRECTIONAL_GRADIENTS,
		radial: RADIAL_GRADIENTS
	}
};






