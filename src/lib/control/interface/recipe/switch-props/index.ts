import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { SlotSwitch as BaseSwitchProps } from '$stylist/control/interface/slot/switch';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipeSwitchProps extends StructIntersectAll<[BaseSwitchProps, InteractionHTMLAttributes<HTMLInputElement>]> {}
