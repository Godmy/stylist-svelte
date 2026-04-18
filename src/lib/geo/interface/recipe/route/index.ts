import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
/**
 * Рецепт маршрута — комбинация локаций для route-planner.
 */
import type { BehaviorLocationProto as ILocationProto } from '$stylist/geo/interface/behavior/location';

export interface IRouteRecipe extends StructIntersectAll<[]> {
  start: ILocationProto;
  end: ILocationProto;
  waypoints?: ILocationProto[];
  mode?: 'driving' | 'walking' | 'cycling' | 'transit';
  showOptions?: boolean;
  showDirections?: boolean;
  showMap?: boolean;
}
