import { TOKEN_FONT_FAMILY } from '$stylist/information/const/token/font-family';
import { RECORD_FONT_SIZE } from '$stylist/information/const/record/font-size';
import { TOKEN_LETTER_SPACING } from '$stylist/architecture/const/token/letter-spacing';
import { TOKEN_LINE_HEIGHT } from '$stylist/architecture/const/token/line-height';
import type { ThemeTypography } from '$stylist/information/type/attribute/theme-typography';

export const THEME_TYPOGRAPHY: ThemeTypography = {
	fontFamily: TOKEN_FONT_FAMILY.sans,
	fontSize: RECORD_FONT_SIZE as Record<string, string>,
	fontWeight: {
		thin: '100',
		extralight: '200',
		light: '300',
		normal: '400',
		medium: '500',
		semibold: '600',
		bold: '700',
		extrabold: '800',
		black: '900'
	},
	lineHeight: TOKEN_LINE_HEIGHT as Record<string, string>,
	letterSpacing: TOKEN_LETTER_SPACING as Record<string, string>
};
