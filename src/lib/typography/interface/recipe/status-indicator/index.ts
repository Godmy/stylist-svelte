import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { StatusIndicatorRecipe as BaseStatusIndicatorRecipe } from '$stylist/information/interface/recipe/status-indicator';

export interface ThemeStatusIndicatorRecipe extends StructIntersectAll<[BaseStatusIndicatorRecipe]> {}
