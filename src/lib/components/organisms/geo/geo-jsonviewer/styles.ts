/**
 * Менеджер стилей для компонента GeoJSONViewer
 * Реализует принцип единственной ответственности (SRP) из SOLID
 * Отделяет логику стилизации от логики компонента
 * Использует систему темизации Stylist-Svelte
 */

import type { IGeoJSONViewerProps } from './types';

export class GeoJSONViewerStyleManager {
  /**
   * Получает CSS классы для основного контейнера компонента
   */
  static getHostClasses(props: IGeoJSONViewerProps): string {
    const baseClasses = 'geojson-viewer flex flex-col h-full';
    const customClass = props.class || '';

    return `${baseClasses} ${customClass}`.trim();
  }

  /**
   * Получает CSS классы для контейнера карты
   */
  static getMapContainerClasses(props: IGeoJSONViewerProps): string {
    const baseClasses = 'flex-1 relative rounded-lg overflow-hidden border shadow-sm';
    const customClass = props.mapClass || '';

    return `${baseClasses} ${customClass}`.trim();
  }

  /**
   * Получает inline стили для контейнера карты (используя CSS переменные из темы)
   */
  static getMapContainerStyles(): string {
    return 'border-color: var(--color-border-default); background-color: var(--color-background-default);';
  }

  /**
   * Получает CSS классы для элемента управления слоем
   */
  static getLayerControlItemClasses(): string {
    return 'flex items-center justify-between p-2 rounded border';
  }

  /**
   * Получает inline стили для элемента управления слоем
   */
  static getLayerControlItemStyles(): string {
    return 'background-color: var(--color-background-default); border-color: var(--color-border-default);';
  }

  /**
   * Получает CSS классы для чекбокса видимости слоя
   */
  static getLayerVisibilityCheckboxClasses(): string {
    return 'h-4 w-4 rounded';
  }

  /**
   * Получает inline стили для чекбокса видимости слоя
   */
  static getLayerVisibilityCheckboxStyles(): string {
    return 'accent-color: var(--color-primary-600);';
  }

  /**
   * Получает CSS классы для слайдера непрозрачности слоя
   */
  static getLayerOpacitySliderClasses(): string {
    return 'w-16';
  }

  /**
   * Получает CSS классы для кнопки загрузки файла
   */
  static getFileUploadButtonClasses(): string {
    return 'relative cursor-pointer rounded-md text-sm font-medium';
  }

  /**
   * Получает inline стили для кнопки загрузки файла
   */
  static getFileUploadButtonStyles(): string {
    return 'background-color: var(--color-background-default); color: var(--color-text-default);';
  }

  /**
   * Получает hover стили для кнопки загрузки файла
   */
  static getFileUploadButtonHoverStyles(): string {
    return 'background-color: var(--color-background-hover);';
  }

  /**
   * Получает CSS классы для контейнера панели слоев
   */
  static getLayersPanelClasses(): string {
    return 'mb-4 p-4 rounded-lg';
  }

  /**
   * Получает inline стили для контейнера панели слоев
   */
  static getLayersPanelStyles(): string {
    return 'background-color: var(--color-background-subtle);';
  }

  /**
   * Получает CSS классы для контейнера информации о выбранной фиче
   */
  static getFeatureInfoPanelClasses(): string {
    return 'mt-4 p-4 rounded-lg shadow';
  }

  /**
   * Получает inline стили для контейнера информации о выбранной фиче
   */
  static getFeatureInfoPanelStyles(): string {
    return 'background-color: var(--color-background-default); border: 1px solid var(--color-border-default);';
  }

  /**
   * Получает CSS классы для кнопки управления картой
   */
  static getMapControlButtonClasses(): string {
    return '';
  }

  /**
   * Получает CSS классы для SVG элемента карты
   */
  static getSvgClasses(): string {
    return 'overflow-visible';
  }

  /**
   * Получает CSS классы для элемента геометрии (точки, линии, полигона)
   */
  static getGeometryElementClasses(): string {
    return 'cursor-pointer transition-opacity';
  }

  /**
   * Получает inline стили для элемента геометрии при наведении
   */
  static getGeometryElementHoverStyles(): string {
    return 'opacity: 0.9;';
  }

  /**
   * Получает inline стили для точки (Point)
   */
  static getPointStyles(color: string, opacity: number): string {
    return `fill: ${color}; fill-opacity: ${opacity};`;
  }

  /**
   * Получает inline стили для линии (LineString)
   */
  static getLineStringStyles(color: string, opacity: number): string {
    return `stroke: ${color}; stroke-opacity: ${opacity}; stroke-width: 2;`;
  }

  /**
   * Получает inline стили для полигона (Polygon)
   */
  static getPolygonStyles(color: string, opacity: number): string {
    return `fill: ${color}; fill-opacity: ${opacity * 0.5}; stroke: ${color}; stroke-opacity: ${opacity}; stroke-width: 1;`;
  }
}