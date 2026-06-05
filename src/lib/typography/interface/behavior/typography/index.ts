import type { TokenLineHeight } from '$stylist/typography/type/enum/line-height';
import type { TokenLetterSpacing } from '$stylist/typography/type/enum/letter-spacing';
import type { TokenFontFamily } from '$stylist/typography/type/map/font-family';
import type { TokenFontSize } from '$stylist/typography/type/enum/font-size';
import type { TokenFontWeight } from '$stylist/typography/type/enum/font-weight';

/** Typography token settings: font, size, weight, spacing, and alignment. */
export interface BehaviorTypography {
	/** Font size token. */
	fontSize?: TokenFontSize;
	/** Font weight token. */
	fontWeight?: TokenFontWeight;
	/** Font family token. */
	fontFamily?: TokenFontFamily | string;
	/** Line height token. */
	lineHeight?: TokenLineHeight;
	/** Letter spacing token. */
	letterSpacing?: TokenLetterSpacing;
	/** Text transform token. */
	textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
	/** Text alignment token. */
	textAlign?: 'left' | 'center' | 'right' | 'justify';
	/** Limit text to a number of lines. */
	lineClamp?: number;
}
