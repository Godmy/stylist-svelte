import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { TokenBackground } from '$stylist/layout/type/alias/background';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';

export interface RecipeThemeBackground
	extends HTMLAttributes<HTMLDivElement>, BehaviorBorderToken, BehaviorTypography {
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
