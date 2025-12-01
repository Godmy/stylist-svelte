/**
 * Типы для компонента GeoJSONViewer
 * Следует принципам SOLID, разделяя определение типов от логики компонента
 */

import type { HTMLAttributes } from 'svelte/elements';

/**
 * Тип геометрии GeoJSON
 */
export type GeoJsonGeometry = {
  type: 'Point' | 'MultiPoint' | 'LineString' | 'MultiLineString' | 'Polygon' | 'MultiPolygon' | 'GeometryCollection';
  coordinates: any[] | any[][];
};

/**
 * Тип фичи GeoJSON
 */
export type GeoJsonFeature = {
  type: 'Feature';
  geometry: GeoJsonGeometry;
  properties?: Record<string, any>;
};

/**
 * Тип коллекции фич GeoJSON
 */
export type GeoJsonFeatureCollection = {
  type: 'FeatureCollection';
  features: GeoJsonFeature[];
};

/**
 * Тип слоя для отображения
 */
export type GeoJsonLayer = {
  id: string;
  name: string;
  data: GeoJsonFeatureCollection;
  visible: boolean;
  color: string;
  opacity: number;
};

/**
 * Тип представления карты
 */
export type MapView = {
  center: { lat: number; lng: number };
  zoom: number;
};

/**
 * Тип оставшихся пропсов (для делегирования HTML атрибутов)
 */
export type GeoJSONViewerRestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

/**
 * Интерфейс пропсов компонента GeoJSONViewer
 */
export interface IGeoJSONViewerProps extends GeoJSONViewerRestProps {
  /**
   * Данные GeoJSON для отображения
   */
  geojsonData?: GeoJsonFeatureCollection;
  /**
   * Слой данных
   */
  layers?: GeoJsonLayer[];
  /**
   * Дополнительный CSS класс для хоста
   */
  class?: string;
  /**
   * Дополнительный CSS класс для карты
   */
  mapClass?: string;
  /**
   * Начальное представление карты
   */
  initialView?: MapView;
  /**
   * Показывать ли элементы управления
   */
  showControls?: boolean;
  /**
   * Показывать ли панель слоев
   */
  showLayers?: boolean;
  /**
   * Показывать ли легенду
   */
  showLegend?: boolean;
  /**
   * Максимальный уровень масштабирования
   */
  maxZoom?: number;
  /**
   * Минимальный уровень масштабирования
   */
  minZoom?: number;
  /**
   * Тип карты
   */
  mapType?: 'roadmap' | 'satellite' | 'terrain' | 'hybrid';
  /**
   * Обработчик клика по фиче
   */
  onFeatureClick?: (feature: GeoJsonFeature) => void;
  /**
   * Обработчик клика по карте
   */
  onMapClick?: (coordinates: { lat: number; lng: number }) => void;
  /**
   * Обработчик изменения данных
   */
  onDataChange?: (data: GeoJsonFeatureCollection) => void;
}