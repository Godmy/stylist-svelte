/**
 * Рецепт настроек карты — комбинация базовых proto для отображения карты.
 */
import type { ICoordinatesProto } from '$stylist/geo/interface/proto/coordinates';

export interface IMapSettingsRecipe {
  center: ICoordinatesProto;
  zoom: number;
  minZoom?: number;
  maxZoom?: number;
  showSearch?: boolean;
  showControls?: boolean;
  height?: string;
  width?: string;
}
