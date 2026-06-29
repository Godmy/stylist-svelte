import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { ComponentInfoCardProps as ComponentInfoCardProps } from '$stylist/dialog/type/struct/component-info-card-props';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeComponentInfoCard
	extends ComputeIntersectAll<
		[
			ComponentInfoCardProps,
			Omit<HTMLAttributes<HTMLDivElement>, 'class'>,
			BehaviorBorderToken,
			BehaviorTypography
		]
	> {
	componentName?: string;
	description?: string;
	category?: string;
	status?: 'stable' | 'beta' | 'alpha' | 'deprecated';
	class?: string;
}
