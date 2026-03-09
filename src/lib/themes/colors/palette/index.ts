import { COLOR_AMBER } from '../values/color-amber';
import { COLOR_BLUE } from '../values/color-blue';
import { COLOR_GREEN } from '../values/color-green';
import { COLOR_NEUTRAL } from '../values/color-neutral';
import { COLOR_RED } from '../values/color-red';
import { COLOR_SLATE } from '../values/color-slate';
import { COLOR_TEAL } from '../values/color-teal';

export const COLOR_PALETTES = {
	blue: COLOR_BLUE,
	slate: COLOR_SLATE,
	green: COLOR_GREEN,
	amber: COLOR_AMBER,
	red: COLOR_RED,
	neutral: COLOR_NEUTRAL,
	teal: COLOR_TEAL
} as const;

export type ColorPaletteName = keyof typeof COLOR_PALETTES;