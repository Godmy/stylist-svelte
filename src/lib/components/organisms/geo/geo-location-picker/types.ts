/**
 * Типы для компонента GeoLocationPicker
 * Следует принципам SOLID, разделяя определение типов от логики компонента
 */

import type { HTMLAttributes } from 'svelte/elements';

/**
 * Тип местоположения
 */
export type Location = {
  latitude: number;
  longitude: number;
  address?: string;
  name?: string;
};

/**
 * Тип оставшихся пропсов (для делегирования HTML атрибутов)
 */
export type GeoLocationPickerRestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

/**
 * Интерфейс пропсов компонента GeoLocationPicker
 */
export interface IGeoLocationPickerProps extends GeoLocationPickerRestProps {
  /**
   * Начальное местоположение
   */
  initialLocation?: Location;
  /**
   * Показывать ли поле поиска
   */
  showSearch?: boolean;
  /**
   * Показывать ли кнопку текущего местоположения
   */
  showCurrentLocation?: boolean;
  /**
   * Показывать ли координаты
   */
  showCoordinates?: boolean;
  /**
   * Дополнительный CSS класс для хоста
   */
  class?: string;
  /**
   * Дополнительный CSS класс для карты
   */
  mapClass?: string;
  /**
   * Дополнительный CSS класс для поля поиска
   */
  searchClass?: string;
  /**
   * Дополнительный CSS класс для элементов управления
   */
  controlsClass?: string;
  /**
   * Обработчик выбора местоположения
   */
  onLocationSelect?: (location: Location) => void;
  /**
   * Обработчик изменения координат
   */
  onCoordinateChange?: (coordinates: { latitude: number; longitude: number }) => void;
  /**
   * Высота карты
   */
  height?: string;
  /**
   * Ширина карты
   */
  width?: string;
  /**
   * Начальный уровень масштабирования
   */
  zoom?: number;
  /**
   * Максимальный уровень масштабирования
   */
  maxZoom?: number;
  /**
   * Минимальный уровень масштабирования
   */
  minZoom?: number;
}