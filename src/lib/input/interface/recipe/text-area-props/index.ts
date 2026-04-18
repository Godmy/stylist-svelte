import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { SlotTextarea as BaseTextAreaProps } from '$stylist/input/interface/slot/textarea';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipeTextAreaProps extends StructIntersectAll<[BaseTextAreaProps, InteractionHTMLAttributes<HTMLTextAreaElement>]> {}
