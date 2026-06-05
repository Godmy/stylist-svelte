import { TOKEN_FONT_FAMILY } from '$stylist/typography/const/map/font-family';
import { RECORD_FONT_SIZE } from '$stylist/typography/const/map/font-size';
import { RECORD_FONT_WEIGHT } from '$stylist/typography/const/map/font-weight';
import { TOKEN_LETTER_SPACING } from '$stylist/typography/const/map/letter-spacing';
import { TOKEN_LINE_HEIGHT } from '$stylist/typography/const/map/line-height';
import type { StructThemeTypography } from '$stylist/typography/type/struct/theme-typography';

export const THEME_TYPOGRAPHY: StructThemeTypography = {
	fontFamily: TOKEN_FONT_FAMILY.sans,
	fontSize: RECORD_FONT_SIZE as Record<string, string>,
	fontWeight: RECORD_FONT_WEIGHT as Record<string, string>,
	lineHeight: TOKEN_LINE_HEIGHT as Record<string, string>,
	letterSpacing: TOKEN_LETTER_SPACING as Record<string, string>
};
