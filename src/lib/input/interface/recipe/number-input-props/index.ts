import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { SlotNumberInput as BaseNumberInputProps } from '$stylist/input/interface/slot/number-input';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipeNumberInputProps
	extends StructIntersectAll<[BaseNumberInputProps, InteractionHTMLAttributes<HTMLInputElement>]> {}
