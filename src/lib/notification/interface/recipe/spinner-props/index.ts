import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { SlotSpinner as BaseSpinnerProps } from '$stylist/notification/interface/slot/spinner';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipeSpinnerProps extends StructIntersectAll<[BaseSpinnerProps, InteractionHTMLAttributes<HTMLDivElement>]> {}
