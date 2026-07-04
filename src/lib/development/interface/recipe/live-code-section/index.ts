import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { LiveCodeSectionProps as LiveCodeSectionProps } from '$stylist/development/type/struct/live-code-section-props';
import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface RecipeLiveCodeSection
	extends ComputeIntersectAll<
		[
			LiveCodeSectionProps,
			Omit<HTMLAttributes<HTMLDivElement>, 'class'>,
			SlotThemeBorder,
			BehaviorTypography,
			SlotChildren
		]
	> {
	class?: string;
}
