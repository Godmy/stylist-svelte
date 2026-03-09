import { REM } from '../../../../design-system/tokens/architecture/rem';

export const THEME_SPACING = REM as Record<string, string>;

export const THEME_RADIUS: Record<string, string> = {
	none: REM['0'],
	sm: REM['0.5'],
	base: REM['1'],
	md: REM['1.5'],
	lg: REM['2'],
	xl: REM['3'],
	'2xl': REM['4'],
	'3xl': REM['6'],
	full: REM['full']
};
