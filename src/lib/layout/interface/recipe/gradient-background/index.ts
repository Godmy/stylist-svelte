import type { Snippet } from 'svelte';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
import type { TokenGradient } from '$stylist/layout/type/enum/gradient-mode';
import type { ThemeGradientBackgroundDirection } from '$stylist/layout/type/enum/gradient-background-direction';

export interface ThemeGradientBackgroundRecipe
	extends StructIntersectAll<[InformationHTMLAttributes<HTMLDivElement>]>
{
	variant?: TokenGradient;
	colors?: string[];
	speed?: number;
	intensity?: number;
	direction?: ThemeGradientBackgroundDirection;
	animated?: boolean;
	class?: string;
	children?: Snippet;
}
