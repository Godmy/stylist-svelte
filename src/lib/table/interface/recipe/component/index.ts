import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { ComponentProps as ComponentProps } from '$stylist/table/type/struct/component-props';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeComponent
	extends ComputeIntersectAll<[ComponentProps, SlotThemeBorder, SlotTypography]> {
	class?: string;
}
