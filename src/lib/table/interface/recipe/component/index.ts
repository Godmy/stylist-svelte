import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { ComponentProps as ComponentProps } from '$stylist/table/type/struct/component-props';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeComponent
	extends ComputeIntersectAll<
		[
			ComponentProps,
			Omit<HTMLAttributes<HTMLDivElement>, 'class'>,
			SlotThemeBorder,
			BehaviorTypography
		]
	> {
	class?: string;
}
