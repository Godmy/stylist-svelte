/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
export {
	Abbr,
	Blockquote,
	Heading,
	InlineCode,
	Kbd,
	Link,
	Paragraph,
	RichText,
	Text
} from './component';
export {
	RECORD_FONT_SIZE,
	RECORD_FONT_WEIGHT,
	THEME_TYPOGRAPHY,
	TOKEN_FONT_FAMILY,
	TOKEN_FONT_SIZE,
	TOKEN_FONT_WEIGHT,
	TOKEN_LETTER_SPACING,
	TOKEN_LINE_HEIGHT,
	TOKEN_TYPOGRAPHY_TONE
} from './const';
export {
	createAbbrState,
	createBlockquoteState,
	createHeadingState,
	createInlineCodeState,
	createKbdState,
	createLinkState,
	createParagraphState,
	createRichTextSegments,
	createRichTextState,
	createTextPresenterState,
	createTextState,
	normalizeText,
	resolveTypographyInlineStyle,
	toNullableNumber,
	toNullableString,
	truncateText
} from './function';
export type {
	StructRichTextMark,
	StructRichTextSegment,
	StructThemeTypography,
	TokenFontFamily,
	TokenFontSize,
	TokenFontWeight,
	TokenLetterSpacing,
	TokenLineHeight,
	TokenTypographyTone
} from './type';
export type {
	BehaviorTypography,
	RecipeBlockquote,
	RecipeHeading,
	RecipeRichText,
	RecipeText,
	RecipeTextAreaControl,
	RecipeThemeInlineCode,
	RecipeThemeKbd,
	RecipeThemeLink,
	SlotAbbr,
	SlotLink,
	SlotText
} from './interface';
