import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { SlotTooltip as BaseTooltipProps } from '$stylist/control/interface/slot/tooltip';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipeTooltipProps extends StructIntersectAll<[BaseTooltipProps, InteractionHTMLAttributes<HTMLElement>]> {}
