import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
/**
 * Рецепт настроек карты — комбинация базовых proto для отображения карты.
 */
import type { BehaviorCoordinatesProto as ICoordinatesProto } from '$stylist/geo/interface/behavior/coordinates';

export interface IMapSettingsRecipe extends StructIntersectAll<[]> {
  center: ICoordinatesProto;
  zoom: number;
  minZoom?: number;
  maxZoom?: number;
  showSearch?: boolean;
  showControls?: boolean;
  height?: string;
  width?: string;
}
