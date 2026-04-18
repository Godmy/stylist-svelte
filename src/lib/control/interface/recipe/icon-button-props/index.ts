import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { SlotIconButton as BaseIconButtonProps } from '$stylist/control/interface/slot/icon-button';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipeIconButtonProps extends StructIntersectAll<[BaseIconButtonProps, InteractionHTMLAttributes<HTMLButtonElement>]> {}
