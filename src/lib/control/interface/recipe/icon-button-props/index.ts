import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { SlotButtonDom } from '$stylist/control/interface/slot/button-dom';
import type { SlotIconButton as BaseIconButtonProps } from '$stylist/control/interface/slot/icon-button';
import type { Props } from '$stylist/information/type/struct/props';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeIconButtonProps
	extends ComputeIntersectAll<
		[
			BaseIconButtonProps,
			Omit<Props, 'children' | 'icon'>,
			SlotButtonDom,
			SlotChildren,
			InteractionHTMLAttributes<HTMLButtonElement>
		]
	> {}