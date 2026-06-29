import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { SlotChildren } from '$stylist/layout/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { TokenGradient } from '$stylist/layout/type/alias/gradient-mode';
import type { ThemeGradientBackgroundDirection } from '$stylist/layout/type/alias/gradient-background-direction';

export interface RecipeThemeGradientBackground
	extends ComputeIntersectAll<[HTMLAttributes<HTMLDivElement>, BehaviorBorderToken, BehaviorTypography, SlotChildren]> {
	variant?: TokenGradient;
	colors?: string[];
	speed?: number;
	intensity?: number;
	direction?: ThemeGradientBackgroundDirection;
	animated?: boolean;
	class?: string;
}
