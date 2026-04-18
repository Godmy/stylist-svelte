import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { SlotToggle as BaseToggleProps } from '$stylist/control/interface/slot/toggle-toggles';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipeToggle extends StructIntersectAll<[BaseToggleProps, InteractionHTMLAttributes<HTMLInputElement>]> {}
