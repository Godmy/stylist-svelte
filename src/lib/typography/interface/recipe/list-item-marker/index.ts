import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ListItemMarkerRecipe as BaseListItemMarkerRecipe } from '$stylist/information/interface/recipe/list-item-marker';

export interface ThemeListItemMarkerRecipe extends StructIntersectAll<[BaseListItemMarkerRecipe]> {}
