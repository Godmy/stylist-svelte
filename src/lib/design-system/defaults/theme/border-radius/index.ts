import { Size } from '$stylist/design-system/defaults/theme/size';

export type BorderRadiusContract = Record<string, string>;

export const THEME_RADIUS: BorderRadiusContract = {
	none: Size['0'],
	sm: Size['0.5'],
	base: Size['1'],
	md: Size['1.5'],
	lg: Size['2'],
	xl: Size['3'],
	xxl: Size['4'],
	xxxl: Size['6'],
	full: Size['full']
};


