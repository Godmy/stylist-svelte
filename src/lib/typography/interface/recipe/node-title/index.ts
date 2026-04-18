import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { NodeTitleRecipe as BaseNodeTitleRecipe } from '$stylist/science/interface/recipe/node-title';

export interface ThemeNodeTitleRecipe extends StructIntersectAll<[BaseNodeTitleRecipe]> {}
