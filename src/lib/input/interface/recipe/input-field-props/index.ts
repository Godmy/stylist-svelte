import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { SlotInputField as BaseInputFieldProps } from '$stylist/input/interface/slot/input-field';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipeInputFieldProps extends StructIntersectAll<[BaseInputFieldProps, InteractionHTMLAttributes<HTMLInputElement>]> {}
