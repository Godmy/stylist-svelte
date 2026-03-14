import { Scale } from '../../tokens/scale';
import { TYPOGRAPHY_FONT_FAMILY } from '../../tokens/typography/font-family';
import { TYPOGRAPHY_FONT_SIZE } from '../../tokens/typography/font-size';
import { TYPOGRAPHY_LETTER_SPACING } from '../../tokens/typography/letter-spacing';
import { TYPOGRAPHY_LINE_HEIGHT } from '../../tokens/typography/line-height';

export interface ThemeTypography {
	fontFamily: string;
	fontSize: Record<string, string>;
	fontWeight: Record<string, string>;
	lineHeight: Record<string, string>;
	letterSpacing: Record<string, string>;
}

export const THEME_TYPOGRAPHY: ThemeTypography = {
	fontFamily: TYPOGRAPHY_FONT_FAMILY.sans,
	fontSize: TYPOGRAPHY_FONT_SIZE as Record<string, string>,
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
	},
	lineHeight: TYPOGRAPHY_LINE_HEIGHT as Record<string, string>,
	letterSpacing: TYPOGRAPHY_LETTER_SPACING as Record<string, string>
};


