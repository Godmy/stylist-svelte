import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { ComponentInfoCardProps as ComponentInfoCardProps } from '$stylist/dialog/type/struct/component-info-card-props';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeComponentInfoCard
	extends ComputeIntersectAll<
		[
			ComponentInfoCardProps,
			Omit<HTMLAttributes<HTMLDivElement>, 'class'>,
			SlotThemeBorder,
			BehaviorTypography
		]
	> {
	componentName?: string;
	description?: string;
	category?: string;
	status?: 'stable' | 'beta' | 'alpha' | 'deprecated';
	class?: string;
}
