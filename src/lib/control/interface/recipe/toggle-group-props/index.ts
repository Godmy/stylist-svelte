import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { RecipeToggleGroupRootProps as BaseToggleGroupProps } from '$stylist/control/interface/recipe/toggle-group-root-props';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipeToggleGroupProps extends StructIntersectAll<[BaseToggleGroupProps, InteractionHTMLAttributes<HTMLButtonElement>]> {}
