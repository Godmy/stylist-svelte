import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { BorderStyle } from '$stylist/layout/type/struct/border-style';
import type { BorderAura } from '$stylist/layout/type/struct/border-aura';
import type { FontIntent } from '$stylist/typography/type/struct/font-intent';

export type InformationHTMLAttributes<T extends HTMLElement = HTMLDivElement> =
	ThemeAttributes<T> & {
		visualBackground?: string;
		visualVariant?: 'flat' | 'raised' | 'glass';
		visualBorderColor?: string;
		visualBorderWidth?: string;
		visualBorderStyle?: BorderStyle;
		visualBorderAura?: BorderAura;
		visualBorderRadius?: string;
		visualTypography?: FontIntent;
		visualFontFamily?: string;
		visualFontSize?: string;
		visualFontWeight?: string;
		visualLineHeight?: string;
		visualLetterSpacing?: string;
		visualTextTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
	};
