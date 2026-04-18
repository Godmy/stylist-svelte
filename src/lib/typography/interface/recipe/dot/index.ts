import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { DotRecipe as BaseDotRecipe } from '$stylist/information/interface/recipe/dot';

export interface ThemeDotRecipe extends StructIntersectAll<[BaseDotRecipe]> {}
