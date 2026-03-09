import { Scale } from '../../../scale';
import { Size } from '../../../size';

const FONT_FAMILY = {
	sans: 'Inter, system-ui, -apple-system, sans-serif',
	serif: 'Georgia, Cambria, "Times New Roman", Times, serif',
	mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'
} as const;

const FONT_SIZE_BY_SIZE = {
	'3': Size['3'],
	'4': Size['4'],
	'5': Size['5'],
	'6': Size['6'],
	'8': Size['8'],
	'10': Size['10'],
	'12': Size['12'],
	'16': Size['16'],
	'20': Size['20']
} as const;

const LINE_HEIGHT = {
	none: '1',
	tight: '1.25',
	snug: '1.375',
	normal: '1.5',
	relaxed: '1.625',
	loose: '2'
} as const;
// LINE_HEIGHT values are unitless multipliers, not rem/px values.

export const THEME_TYPOGRAPHY = {
	fontFamily: FONT_FAMILY.sans,
	fontSize: FONT_SIZE_BY_SIZE as Record<string, string>,
	fontWeight: {
		thin: Scale[100],
		extralight: Scale[200],
		light: Scale[300],
		normal: Scale[400],
		medium: Scale[500],
		semibold: Scale[600],
		bold: Scale[700],
		extrabold: Scale[800],
		black: Scale[900]
	} as Record<string, string>,
	lineHeight: LINE_HEIGHT as Record<string, string>
};
