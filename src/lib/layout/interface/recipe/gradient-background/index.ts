import type { Snippet } from 'svelte';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct/item';
import type { TokenGradient } from '$stylist/layout/type/enum/gradient-mode';

export type ThemeGradientBackgroundDirection =
	| 'horizontal'
	| 'vertical'
	| 'diagonal'
	| 'reverseDiagonal';

export interface ThemeGradientBackgroundRecipe
	extends InformationHTMLAttributes<HTMLDivElement> {
	variant?: TokenGradient;
	colors?: string[];
	speed?: number;
	intensity?: number;
	direction?: ThemeGradientBackgroundDirection;
	animated?: boolean;
	class?: string;
	children?: Snippet;
}
