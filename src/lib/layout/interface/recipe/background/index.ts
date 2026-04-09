import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
import type { TokenBackground } from '$stylist/layout/type/enum/background';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';

export interface ThemeBackgroundRecipe extends InformationHTMLAttributes<HTMLDivElement> {
	background?: TokenBackground;
	backgroundColor?: string;
	backgroundImage?: string;
	backgroundPosition?: 'center' | 'top' | 'bottom' | 'left' | 'right' | string;
	backgroundSize?: 'cover' | 'contain' | 'auto' | string;
	backgroundRepeat?: 'no-repeat' | 'repeat' | 'repeat-x' | 'repeat-y';
	gradient?: string;
	opacity?: number;
	variant?: TokenAppearance;
}
