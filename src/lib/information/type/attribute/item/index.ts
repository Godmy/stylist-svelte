import type { ThemeAttributes } from '$stylist/information/interface/theme';

export type BorderStyle = 'none' | 'solid' | 'dashed' | 'dotted' | 'double' | 'groove';
export type BorderAura = 'soft' | 'medium' | 'strong';
export type FontIntent = 'display' | 'body' | 'caption' | 'monospace';

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
