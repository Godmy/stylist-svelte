import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { SlotRadio as BaseRadioProps } from '$stylist/control/interface/slot/radio-toggles';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipeRadioProps extends StructIntersectAll<[BaseRadioProps, InteractionHTMLAttributes<HTMLInputElement>]> {}
