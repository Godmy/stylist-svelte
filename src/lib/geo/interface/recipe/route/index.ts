/**
 * Рецепт маршрута — комбинация локаций для route-planner.
 */
import type { ILocationProto } from '$stylist/geo/interface/proto/location';

export interface IRouteRecipe {
  start: ILocationProto;
  end: ILocationProto;
  waypoints?: ILocationProto[];
  mode?: 'driving' | 'walking' | 'cycling' | 'transit';
  showOptions?: boolean;
  showDirections?: boolean;
  showMap?: boolean;
}
