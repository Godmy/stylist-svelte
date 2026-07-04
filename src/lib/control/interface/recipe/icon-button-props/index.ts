import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { SlotButtonDom } from '$stylist/control/interface/slot/button-dom';
import type { SlotIconButton as BaseIconButtonProps } from '$stylist/control/interface/slot/icon-button';
import type { Props } from '$stylist/information/type/struct/props';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeIconButtonProps
	extends ComputeIntersectAll<
		[
			BaseIconButtonProps,
			Omit<Props, 'children' | 'icon'>,
			SlotButtonDom,
			SlotChildren,
			HTMLAttributes<HTMLButtonElement>, SlotInteraction
		]
	> {}