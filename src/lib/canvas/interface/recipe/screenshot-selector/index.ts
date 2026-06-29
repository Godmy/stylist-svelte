import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { ScreenshotSelectorProps as ScreenshotSelectorProps } from '$stylist/canvas/type/struct/screenshot-selector-props';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeScreenshotSelector
	extends ComputeIntersectAll<
		[
			ScreenshotSelectorProps,
			Omit<HTMLAttributes<HTMLDivElement>, 'class'>,
			BehaviorBorderToken,
			BehaviorTypography
		]
	> {
	class?: string;
}
