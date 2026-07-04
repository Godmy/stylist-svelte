import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { ScreenshotSelectorProps as ScreenshotSelectorProps } from '$stylist/canvas/type/struct/screenshot-selector-props';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeScreenshotSelector
	extends ComputeIntersectAll<
		[
			ScreenshotSelectorProps,
			Omit<HTMLAttributes<HTMLDivElement>, 'class'>,
			SlotThemeBorder,
			BehaviorTypography
		]
	> {
	class?: string;
}
