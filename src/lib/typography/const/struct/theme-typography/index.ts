import { TOKEN_FONT_FAMILY } from '$stylist/typography/const/map/font-family';
import { RECORD_FONT_SIZE } from '$stylist/information/const/map/font-size';
import { TOKEN_LETTER_SPACING } from '$stylist/architecture/const/map/letter-spacing';
import { TOKEN_LINE_HEIGHT } from '$stylist/architecture/const/map/line-height';
import type { StructThemeTypography } from '$stylist/typography/type/struct/theme-typography';

export const THEME_TYPOGRAPHY: StructThemeTypography = {
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
