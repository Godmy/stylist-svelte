import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { SlotCheckbox as BaseCheckboxProps } from '$stylist/control/interface/slot/checkbox-toggles';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipeCheckbox extends StructIntersectAll<[BaseCheckboxProps, InteractionHTMLAttributes<HTMLInputElement>]> {}
