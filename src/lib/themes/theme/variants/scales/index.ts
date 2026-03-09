import { Size } from '../../../size';

export const THEME_SPACING = Size as Record<string, string>;

export const THEME_RADIUS: Record<string, string> = {
	none: Size['0'],
	sm: Size['0.5'],
	base: Size['1'],
	md: Size['1.5'],
	lg: Size['2'],
	xl: Size['3'],
	'2xl': Size['4'],
	'3xl': Size['6'],
	full: Size['full']
};
