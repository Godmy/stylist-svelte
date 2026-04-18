import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { SlotNumberInput as BaseNumberInputProps } from '$stylist/input/interface/slot/number-input';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipeNumberInputProps extends StructIntersectAll<[BaseNumberInputProps, InteractionHTMLAttributes<HTMLInputElement>]> {}
