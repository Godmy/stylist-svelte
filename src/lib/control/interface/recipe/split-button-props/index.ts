import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { SlotButtonAttributesBase as ButtonAttributesBase } from '$stylist/control/interface/slot/button-attributes-base';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotButtonAttributesBase } from '$stylist/control/interface/slot/button-attributes-base';

export interface RecipeSplitButtonProps extends StructIntersectAll<[SlotButtonAttributesBase, InteractionHTMLAttributes<HTMLButtonElement>]> {}
