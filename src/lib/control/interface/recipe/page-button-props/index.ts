import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { SlotPageButton as BasePageButtonProps } from '$stylist/control/interface/slot/page-button';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipePageButtonProps extends StructIntersectAll<[BasePageButtonProps, InteractionHTMLAttributes<HTMLButtonElement>]> {}
