import { Scale } from '$stylist/design-system/defaults/theme/scale';
import { TOKEN_FONT_FAMILY } from '$stylist/design-system/tokens/information/font-family';
import { TYPOGRAPHY_FONT_SIZE } from '$stylist/design-system/defaults/theme/typography/font-size';
import { TOKEN_LETTER_SPACING } from '$stylist/design-system/tokens/architecture/letter-spacing';
import { TOKEN_LINE_HEIGHT } from '$stylist/design-system/tokens/architecture/line-height';

export interface ThemeTypography {
	fontFamily: string;
	fontSize: Record<string, string>;
	fontWeight: Record<string, string>;
	lineHeight: Record<string, string>;
	letterSpacing: Record<string, string>;
}

export const THEME_TYPOGRAPHY: ThemeTypography = {
	fontFamily: TOKEN_FONT_FAMILY.sans,
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
	lineHeight: TOKEN_LINE_HEIGHT as Record<string, string>,
	letterSpacing: TOKEN_LETTER_SPACING as Record<string, string>
};


