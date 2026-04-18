import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { SlotProgressBar as BaseProgressBarProps } from '$stylist/notification/interface/slot/progress-bar';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipeProgressBarProps extends StructIntersectAll<[BaseProgressBarProps, InteractionHTMLAttributes<HTMLDivElement>]> {}
