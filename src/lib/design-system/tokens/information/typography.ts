import { FONT_FAMILY } from './font-family';
import { FONT_SIZE } from './font-size';
import { FONT_WEIGHT } from './font-weight';
import { LINE_HEIGHT } from './line-height';

export const TYPOGRAPHY = {
	fontSize: FONT_SIZE,
	fontWeight: FONT_WEIGHT,
	lineHeight: LINE_HEIGHT,
	fontFamily: FONT_FAMILY
} as const;
