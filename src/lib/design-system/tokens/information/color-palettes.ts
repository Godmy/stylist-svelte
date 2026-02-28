import { AMBER } from './amber';
import { BLUE } from './blue';
import { GREEN } from './green';
import { NEUTRAL } from './neutral';
import { RED } from './red';
import { SLATE } from './slate';
import { TEAL } from './teal';

export const COLOR_PALETTES = {
	blue: BLUE,
	slate: SLATE,
	green: GREEN,
	amber: AMBER,
	red: RED,
	neutral: NEUTRAL,
	teal: TEAL
} as const;

export type ColorPaletteName = keyof typeof COLOR_PALETTES;
