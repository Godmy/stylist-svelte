import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { SlotSearchBar as BaseSearchBarProps } from '$stylist/control/interface/slot/search-bar';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipeSearchBarProps extends StructIntersectAll<[BaseSearchBarProps, InteractionHTMLAttributes<HTMLDivElement>]> {}
