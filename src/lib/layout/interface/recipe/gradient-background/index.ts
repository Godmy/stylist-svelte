import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { TokenGradient } from '$stylist/layout/type/alias/gradient-mode';
import type { ThemeGradientBackgroundDirection } from '$stylist/layout/type/alias/gradient-background-direction';

export interface RecipeThemeGradientBackground
	extends ComputeIntersectAll<[HTMLAttributes<HTMLDivElement>, SlotThemeBorder, SlotTypography, SlotChildren]> {
	variant?: TokenGradient;
	colors?: string[];
	speed?: number;
	intensity?: number;
	direction?: ThemeGradientBackgroundDirection;
	animated?: boolean;
	class?: string;
}
