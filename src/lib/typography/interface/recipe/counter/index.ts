import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { CounterRecipe as BaseCounterRecipe } from '$stylist/information/interface/recipe/counter';

export interface ThemeCounterRecipe extends StructIntersectAll<[BaseCounterRecipe]> {}
