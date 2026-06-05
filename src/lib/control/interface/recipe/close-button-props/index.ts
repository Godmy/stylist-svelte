import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotButtonAttributesBase } from '$stylist/control/interface/slot/button-attributes-base';

export interface RecipeCloseButtonProps
	extends StructIntersectAll<
		[SlotButtonAttributesBase, InteractionHTMLAttributes<HTMLButtonElement>]
	> {}
